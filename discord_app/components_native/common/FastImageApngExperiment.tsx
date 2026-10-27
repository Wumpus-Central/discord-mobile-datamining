// === Module 5671: FastImageApngExperiment ===

// Module 5671 (FastImageApngExperiment)
import initializeDefault from "initialize" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 1898 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
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