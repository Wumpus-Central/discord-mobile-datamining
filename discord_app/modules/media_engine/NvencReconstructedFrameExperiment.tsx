// === Module 13478: getNvencReconstructedFrameExperimentConfig ===

// Module 13478 (getNvencReconstructedFrameExperimentConfig)
import getUnitIdDefault from "getUnitId" /* 1368 */;

let obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = getUnitIdDefault({ kind: "user", name: "2026-07-nvenc-reconstructed-frames", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/NvencReconstructedFrameExperiment.tsx");

export const getNvencReconstructedFrameExperimentConfig = function getNvencReconstructedFrameExperimentConfig(disable) {
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