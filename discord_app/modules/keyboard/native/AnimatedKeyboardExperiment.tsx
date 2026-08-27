// === Module 10907: apexExperiment ===

// Module 10907 (apexExperiment)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-08-animated-keyboard-android", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
const result = set.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export const isAnimatedAndroidKeyboard = function isAnimatedAndroidKeyboard() {
  const obj = set2;
  return set2.isAndroid() && enabled;
};