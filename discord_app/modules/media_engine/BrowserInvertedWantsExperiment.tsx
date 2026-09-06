// === Module 13806: BrowserInvertedWantsExperiment ===

// Module 13806 (BrowserInvertedWantsExperiment)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-03-browser-inverted-wants", defaultConfig: { invertWants: false }, variations: null };
obj = { 1: null };
obj[1] = { invertWants: true };
obj.variations = obj;
let config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/BrowserInvertedWantsExperiment.tsx");

export const getBrowserInvertedWantsConfig = function getBrowserInvertedWantsConfig(location) {
  config = utils_PlatformUtils;
  if (config.isDesktop()) {
    config = { invertWants: false };
  } else {
    const obj = { location };
    config = config.getConfig(obj);
  }
  return config;
};