// === Module 11702: KeyboardPreloadExperiment ===

// Module 11702 (KeyboardPreloadExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-10-mobile-keyboard-preload", kind: "user", defaultConfig: { disablePreload: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { disablePreload: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/keyboard/native/KeyboardPreloadExperiment.tsx");

export const KeyboardPreloadExperiment = apexExperiment;