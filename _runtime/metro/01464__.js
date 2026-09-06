// === Module 1464: ? ===

// Module 1464

export default {
  reachabilityUrl: "https://clients3.google.com/generate_204",
  reachabilityMethod: "HEAD",
  reachabilityHeaders: {},
  reachabilityTest(status) {
    return Promise.resolve(204 === status.status);
  },
  reachabilityShortTimeout: 5000,
  reachabilityLongTimeout: 60000,
  reachabilityRequestTimeout: 15000,
  reachabilityShouldRun() {
    return true;
  },
  shouldFetchWiFiSSID: false,
  useNativeReachability: true
};