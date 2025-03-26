"use client";

import { WalletModal } from "@/components/modals";
import Button from "@/components/ui/Button";
import chainConfig from "@/config/chain";
import { useChain } from "@cosmos-kit/react";
import { useState } from "react";

export const ConnectButton: React.FC = () => {
  const [showWalletModal, setShowWalletModal] = useState(false);

  const {
    connect,
    isWalletConnecting,
    isWalletConnected,
    address,
    username,
    wallet,
  } = useChain(chainConfig.name);

  // Handle connection
  const handleClick = () => {
    if (isWalletConnected) {
      // Show wallet modal if connected
      setShowWalletModal(true);
    } else {
      connect();
    }
  };

  // Truncate the address for display
  const truncatedAddress = address
    ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
    : "";

  const actualUsername =
    username && username.length > 20
      ? wallet?.prettyName || chainConfig.name
      : username;

  // Mobile text vs Desktop text
  const connectText = isWalletConnected
    ? isWalletConnecting
      ? "Connecting..."
      : null
    : isWalletConnecting
    ? "Connecting..."
    : null;

  return (
    <>
      <Button
        variant="gradient"
        hoverEffect
        onClick={handleClick}
        disabled={isWalletConnecting}
        className="text-sm md:text-base py-1 md:py-2 px-2 md:px-4"
      >
        {/* Different text for mobile vs desktop */}
        {connectText || (
          <>
            {isWalletConnected ? (
              <>
                <span className="hidden md:inline">
                  {actualUsername || truncatedAddress || "Connected"}
                </span>
                <span className="md:hidden">Wallet</span>
              </>
            ) : (
              <>
                <span className="hidden md:inline">Connect Wallet</span>
                <span className="md:hidden">Connect</span>
              </>
            )}
          </>
        )}
      </Button>

      {/* Wallet Modal */}
      <WalletModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
      />
    </>
  );
};
