// === Module 12973: getVADBeforeProcessingExperimentConfig ===

// Module 12973 (getVADBeforeProcessingExperimentConfig)
let obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = require("getUnitId")({ kind: "user", name: "2025-10-vad-before-processing", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/VADBeforeProcessingExperiment.tsx");

export const getVADBeforeProcessingExperimentConfig = function getVADBeforeProcessingExperimentConfig(disable) {
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