// === Module 13079: getBrowserInvertedWantsConfig ===

// Module 13079 (getBrowserInvertedWantsConfig)
import obj132 from "obj132" /* 2 */;
import PlatformTypes from "PlatformTypes" /* 501 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { 1: null };
obj[1] = { invertWants: true };
let closure_2 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-browser-inverted-wants", defaultConfig: { invertWants: false }, variations: obj });
const result = obj132.fileFinishedImporting("modules/media_engine/BrowserInvertedWantsExperiment.tsx");

export const getBrowserInvertedWantsConfig = function getBrowserInvertedWantsConfig(arg0) {
  let config = PlatformTypes;
  if (config.isDesktop()) {
    config = { invertWants: false };
  } else {
    const obj = { location: null };
    obj[0] = arg0;
    config = config.getConfig(obj);
  }
  return config;
};