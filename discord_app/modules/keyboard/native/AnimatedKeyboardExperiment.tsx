// discord_app/modules/keyboard/native/AnimatedKeyboardExperiment.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj2;
let obj = {
  name: "2025-08-animated-keyboard-android",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: obj2,
};
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const enabled = apexExperiment.getConfig({ location: "isAnimatedKeyboardEnabled" }).enabled;
const result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardExperiment.tsx");

export const AnimatedKeyboardExperiment = apexExperiment;
export const isAnimatedAndroidKeyboard = function isAnimatedAndroidKeyboard() {
  const obj = PlatformUtils;
  const tmp = obj.isAndroid() && enabled;
  return tmp;
};
