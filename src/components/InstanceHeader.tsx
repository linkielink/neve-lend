"use client";

import React from "react";

const InstanceHeader: React.FC = () => {
  return (
    <div className="mb-6 px-4 lg:px-0">
      <div className="mb-1">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Lend and Borrow with Neve
        </h1>
      </div>

      <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        Neve is a clean and simple lending and borrowing platform on Neutron. It
        is using the audited Smart Contracts of the Mars Protocol ensuring the
        highest security standard in Cosmos.
      </p>
    </div>
  );
};

export default InstanceHeader;
