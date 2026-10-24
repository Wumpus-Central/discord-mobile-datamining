// === Module 5670: FastImageApngExperiment ===

// Module 5670 (FastImageApngExperiment)
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
      const result = NativeImageManagerModuleDefault.setFastImageApngEnabled(config.getConfig({ location: "loaded" }).enabled);
    });
  }
  obj = PlatformUtils;
};