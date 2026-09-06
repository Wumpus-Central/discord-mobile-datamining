// === Module 14076: NvencReconstructedFrameExperiment ===

// Module 14076 (NvencReconstructedFrameExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

let obj = { kind: "user", name: "2026-07-nvenc-reconstructed-frames", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = apex_ApexExperimentDefault(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/NvencReconstructedFrameExperiment.tsx");

export const getNvencReconstructedFrameExperimentConfig = function getNvencReconstructedFrameExperimentConfig(disable) {
  let flag = disable.disable;
  if (flag === undefined) {
    flag = false;
  }
  let obj = closure_0;
  if (flag) {
    let defaultConfig = obj.definition.defaultConfig;
  } else {
    obj = { location: disable.location };
    defaultConfig = obj.getConfig(obj);
  }
  return defaultConfig;
};