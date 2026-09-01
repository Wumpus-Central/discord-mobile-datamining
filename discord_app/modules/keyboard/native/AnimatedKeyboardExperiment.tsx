// discord_app/modules/keyboard/native/AnimatedKeyboardExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import set2 from "../../../utils/PlatformUtils.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";

let obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2025-08-animated-keyboard-android",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj,
});
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
const result = set.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export const isAnimatedAndroidKeyboard = function isAnimatedAndroidKeyboard() {
  const obj = set2;
  return set2.isAndroid() && enabled;
};
