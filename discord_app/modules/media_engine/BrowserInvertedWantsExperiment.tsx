// === Module 12882: getBrowserInvertedWantsConfig ===

// Module 12882 (getBrowserInvertedWantsConfig)
import ApexExperiment from "ApexExperiment";

let obj = { 1: null };
obj[1] = { invertWants: true };
let closure_2 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-browser-inverted-wants", defaultConfig: { invertWants: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/BrowserInvertedWantsExperiment.tsx");

export const getBrowserInvertedWantsConfig = function getBrowserInvertedWantsConfig(arg0) {
  let config = require(501) /* PlatformTypes */;
  if (config.isDesktop()) {
    config = { invertWants: false };
  } else {
    const obj = { location: null };
    obj[0] = arg0;
    config = config.getConfig(obj);
  }
  return config;
};