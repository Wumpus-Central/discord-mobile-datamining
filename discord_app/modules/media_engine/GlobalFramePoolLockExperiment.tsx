// === Module 13311: getGlobalFramePoolLockExperimentConfig ===

// Module 13311 (getGlobalFramePoolLockExperimentConfig)
import getUnitIdDefault from "getUnitId" /* 1368 */;

let obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = getUnitIdDefault({ kind: "user", name: "2025-11-global-frame-pool-lock", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/GlobalFramePoolLockExperiment.tsx");

export const getGlobalFramePoolLockExperimentConfig = function getGlobalFramePoolLockExperimentConfig(disable) {
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