// === Module 14013: getLowLatencyRateControlExperimentConfig ===

// Module 14013 (getLowLatencyRateControlExperimentConfig)
import getUnitIdDefault from "getUnitId" /* 1434 */;

let obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = getUnitIdDefault({ kind: "user", name: "2025-10-low-latency-rate-control", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/LowLatencyRateControlExperiment.tsx");

export const getLowLatencyRateControlExperimentConfig = function getLowLatencyRateControlExperimentConfig(disable) {
  let flag = disable.disable;
  if (flag === undefined) {
    flag = false;
  }
  let obj = closure_0;
  if (flag) {
    let defaultConfig = obj.definition.defaultConfig;
  } else {
    obj = { location: null };
    obj[0] = disable.location;
    defaultConfig = obj.getConfig(obj);
  }
  return defaultConfig;
};