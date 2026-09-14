// === Module 13895: BrowserInvertedWantsExperiment ===

// Module 13895 (BrowserInvertedWantsExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-03-browser-inverted-wants", defaultConfig: { invertWants: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { invertWants: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/BrowserInvertedWantsExperiment.tsx");

export const getBrowserInvertedWantsConfig = function getBrowserInvertedWantsConfig(location) {
  if (obj.isDesktop()) {
    let obj2 = { invertWants: false };
  } else {
    const obj3 = { location };
    obj2 = config.getConfig(obj3);
  }
  return obj2;
};