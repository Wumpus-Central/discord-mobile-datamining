// === Module 5129: FastImageApngExperiment ===

// Module 5129 (FastImageApngExperiment)
import initializeDefault from "initialize" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 1901 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let closure_3 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-10-android-fastimage-apng", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
let result = size.fileFinishedImporting("components_native/common/FastImageApngExperiment.tsx");

export const initializeFastImageApngExperiment = function initializeFastImageApngExperiment() {
  if (obj.isAndroid()) {
    const initialized = initializeDefault.initialized;
    initialized.then(() => {
      const obj = { location: "loaded" };
      const enabled = config.getConfig(obj, { autoTrackExposure: false }).enabled;
      const result = NativeImageManagerModuleDefault.setFastImageApngEnabled(enabled);
      const obj2 = config;
      if (obj4.isFastImageApngEnabled() === enabled) {
        config = obj2.getConfig(obj);
      }
    });
  }
  obj = PlatformUtils;
};