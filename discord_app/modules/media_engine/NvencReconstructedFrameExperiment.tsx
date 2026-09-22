// === Module 14351: NvencReconstructedFrameExperiment ===

// Module 14351 (NvencReconstructedFrameExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const obj = { kind: "user", name: "2026-07-nvenc-reconstructed-frames", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = apex_ApexExperimentDefault(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/NvencReconstructedFrameExperiment.tsx");

export const getNvencReconstructedFrameExperimentConfig = function getNvencReconstructedFrameExperimentConfig(disable) {
  let flag = disable.disable;
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    let defaultConfig = config.definition.defaultConfig;
  } else {
    const obj2 = { location: disable.location };
    defaultConfig = config.getConfig(obj2);
  }
  return defaultConfig;
};