import { BigNumber } from "bignumber.js";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

BigNumber.config({ EXPONENTIAL_AT: 1e9 });

// Get the stored preference or default to true
const getStoredHideZeroBalances = (): boolean => {
  // Check if we're in a browser environment with localStorage available
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = localStorage.getItem("hideZeroBalances");
    // Return stored value if it exists, otherwise default to true
    return stored === null ? true : stored === "true";
  }
  // Default to true if localStorage is not available
  return true;
};

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        // Initial state
        markets: null,
        hideZeroBalances: getStoredHideZeroBalances(),

        setMarkets: (markets) => {
          if (!markets) return;
          set({ markets });
        },

        setHideZeroBalances: (hideZeroBalances) => {
          // Save to localStorage when value changes
          if (typeof window !== "undefined" && window.localStorage) {
            localStorage.setItem(
              "hideZeroBalances",
              hideZeroBalances.toString()
            );
          }
          set({ hideZeroBalances });
        },

        // Update price for a specific market
        updateMarketPrice: (denom, priceData) => {
          set((state) => {
            if (!state.markets) return { ...state };

            // Create a new array with the updated market
            const updatedMarkets = state.markets.map((market) =>
              market.asset.denom === denom
                ? { ...market, price: priceData }
                : market
            );

            return { markets: updatedMarkets };
          });
        },

        // Update metrics for a specific market
        updateMarketMetrics: (denom, metrics) => {
          set((state) => {
            if (!state.markets) return { markets: null };

            // Create a new array with the updated market
            const updatedMarkets = state.markets.map((market) =>
              market.asset.denom === denom
                ? { ...market, metrics: { ...market.metrics, ...metrics } }
                : market
            );

            return { markets: updatedMarkets };
          });
        },

        // Update positions (deposits and debts) for markets
        updateMarketPositions: (positions) => {
          set((state: StoreState) => {
            if (!state.markets) return { markets: null };

            // Reset all positions to 0 first
            let updatedMarkets = state.markets.map((market) => ({
              ...market,
              deposit: "0",
              debt: "0",
            }));

            // Update with deposit amounts
            if (positions.deposits && positions.deposits.length > 0) {
              updatedMarkets = updatedMarkets.map((market) => {
                const deposit = positions.deposits.find(
                  (d) => d.denom === market.asset.denom
                );
                return deposit
                  ? { ...market, deposit: deposit.amount }
                  : market;
              });
            }

            // Update with debt amounts
            if (positions.debts && positions.debts.length > 0) {
              updatedMarkets = updatedMarkets.map((market) => {
                const debt = positions.debts.find(
                  (d) => d.denom === market.asset.denom
                );
                return debt ? { ...market, debt: debt.amount } : market;
              });
            }

            return { markets: updatedMarkets };
          });
        },

        // Reset positions on disconnect
        resetPositions: () => {
          set((state) => {
            // If we don't have markets, nothing to reset
            if (!state.markets) return { ...state };

            // Reset all positions to 0
            const updatedMarkets = state.markets.map((market) => ({
              ...market,
              deposit: "0",
              debt: "0",
            }));

            return { markets: updatedMarkets };
          });
        },
      }),
      {
        name: "neve-storage", // storage key
        partialize: (state) => ({
          markets: state.markets,
          // You can exclude some state properties from persistence if needed
        }),
      }
    ),
    { name: "neve-store" } // Name for Redux DevTools
  )
);
