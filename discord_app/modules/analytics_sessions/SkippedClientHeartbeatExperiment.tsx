// === Module 5733: shouldLogClientHeartbeatSkipped ===

// Module 5733 (shouldLogClientHeartbeatSkipped)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { logHeartbeatSkipped: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-02-client-heartbeat-skipped", kind: "user", defaultConfig: { logHeartbeatSkipped: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/analytics_sessions/SkippedClientHeartbeatExperiment.tsx");

export const shouldLogClientHeartbeatSkipped = function shouldLogClientHeartbeatSkipped() {
  return config.getConfig({ location: "shouldLogClientHeartbeatSkipped" }).logHeartbeatSkipped;
};