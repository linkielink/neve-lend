import Modal from "@/components/modals/Modal";

interface Props {
  isHealthModalOpen: boolean;
  setIsHealthModalOpen: (isOpen: boolean) => void;
  healthFactor?: number;
}
export default function HealthFactorModal(props: Props) {
  const { isHealthModalOpen, setIsHealthModalOpen, healthFactor } = props;

  return (
    <Modal
      isOpen={isHealthModalOpen}
      onClose={() => setIsHealthModalOpen(false)}
      title="Health Factor"
    >
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Your health factor determines the safety of your collateral. To avoid
          liquidations you can supply more collateral or repay borrow positions.
        </p>
        <div className="mt-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="mb-2">
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              Health factor
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Indicates the safety margin between your collateral and borrowed
              assets. Higher values mean lower liquidation risk.
            </div>
          </div>

          {healthFactor && (
            <div className="mt-4">
              <div className="flex justify-self-end">
                <span
                  className={`text-xl font-bold ${
                    healthFactor >= 2.5
                      ? "text-green-500"
                      : healthFactor > 1.2
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {parseFloat(healthFactor.toString()).toFixed(2)}
                </span>
              </div>

              {/* Health Factor Gauge */}
              <div className="mt-3 relative pt-2 pb-2">
                <div className="relative h-4">
                  {/* Gradient Bar */}
                  <div className="h-2 rounded-full overflow-hidden bg-gradient-to-r from-red-500 via-teal-500 to-green-500"></div>

                  {/* Liquidation Value Line */}
                  <div
                    className="absolute -top-0.5 w-0.5 h-4 bg-red-400 transform -translate-x-1/2"
                    style={{
                      left: "10%",
                    }}
                  ></div>

                  {/* Position Indicator - Triangle */}
                  <div
                    className="absolute -top-2 transform -translate-x-1/2"
                    style={{
                      left: `${Math.min(
                        Math.max((healthFactor / 10) * 100, 0),
                        100
                      )}%`,
                      transition: "left 0.3s ease",
                    }}
                  >
                    {/* Triangle indicator pointing down to the bar */}
                    <div
                      className="w-0 h-0 border-l-5 border-r-5 border-t-5 border-l-transparent border-r-transparent"
                      style={{
                        borderTopColor:
                          healthFactor >= 2.5
                            ? "#22c55e" // green-500
                            : healthFactor > 1.2
                            ? "#facc15" // gold-500
                            : "#ef4444", // red-500
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                  <div className="text-center w-16 pl-3">
                    <div className="text-red-400 font-medium">1.00</div>
                    <div className="text-red-400 text-xs">
                      Liquidation value
                    </div>
                  </div>
                  <div className="font-medium">10.0</div>
                </div>

                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  If the health factor falls below 1.00, your collateral may be
                  liquidated to repay your borrowed assets.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
