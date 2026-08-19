// discord_app/modules/keyboard/native/AnimatedKeyboardExperiment.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import obj1322 from "../../../utils/PlatformUtils.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2025-08-animated-keyboard-android", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
const result = obj132.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export const isAnimatedAndroidKeyboard = function isAnimatedAndroidKeyboard() {
  return obj1322.isAndroid() && enabled;
};