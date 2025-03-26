const chainConfig: ChainConfig = {
  name: "neutron",

  constracts: {
    // Contract Addresses for Neutron
    paramsContract:
      "neutron1x4rgd7ry23v2n49y7xdzje0743c5tgrnqrqsvwyya2h6m48tz4jqqex06x",
    moneyMarketContract:
      "neutron1n97wnm7q6d2hrcna3rqlnyqw2we6k0l8uqvmyqq6gsml92epdu7quugyph",
    oracleContract:
      "neutron1dwp6m7pdrz6rnhdyrx5ha0acsduydqcpzkylvfgspsz60pj2agxqaqrr7g",
  },
  endpoints: {
    // Base URL for REST API
    restUrl: process.env.NEXT_PUBLIC_REST || "https://rest-lb.neutron.org",
    // Base URL for RPC Node
    rpcUrl: process.env.NEXT_PUBLIC_RPC || "https://rpc-lb.neutron.org",
    // Tokens URL
    tokensUrl:
      process.env.NEXT_PUBLIC_TOKENS ||
      "https://neutron-cache-api.onrender.com/neutron-1/tokens",
  },

  // Base64 encoded queries
  queries: {
    // Query for all asset parameters with a limit of 100
    allAssetParams:
      "ewogICJhbGxfYXNzZXRfcGFyYW1zIjogewogICAgImxpbWl0IjogMTAwCiAgfQp9",
    allMarkets: "ewoibWFya2V0c192MiI6IHsKImxpbWl0IjogMTAwCn0KfQ==",
  },
};

export default chainConfig;
