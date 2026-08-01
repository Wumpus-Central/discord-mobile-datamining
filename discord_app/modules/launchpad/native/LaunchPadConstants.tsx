// === Module 10492: LAUNCH_PAD_SPRING_CONFIG ===

// Module 10492 (LAUNCH_PAD_SPRING_CONFIG)
import { Dimensions } from "get ActivityIndicator";
import set from "set";
import set from "DCDDeviceManager";

const size = Dimensions.get("screen");
let num = 24;
if (!set.isAndroid()) {
  const _module1 = require("DCDDeviceManager");
  let num2 = 13;
  if (!_module1.isIpadOS()) {
    const _Math = Math;
    num2 = 0.09 * Math.min(size.width, size.height);
  }
  num = num2;
}
const result = set.fileFinishedImporting("modules/launchpad/native/LaunchPadConstants.tsx");

export const LAUNCH_PAD_SPRING_CONFIG = { damping: 20, stiffness: 280, mass: 0.5, restSpeedThreshold: 0.001, restDisplacementThreshold: 0.001 };
export const LAUNCH_PAD_PULL_TAB_HEIGHT = 96;
export const LAUNCH_PAD_PULL_TAB_WIDTH = 26;
export const LAUNCH_PAD_PULL_TAB_MINIMIZED_OFFSET = 18;
export const LAUNCH_PAD_PULL_TAB_BORDER_RADIUS = 13;
export const LAUNCH_PAD_PULL_TAB_SCALE_FACTOR = 1.1;
export const LAUNCH_PAD_PULL_TAB_SCALE_OFFSET = 4.800000000000004;
export const LAUNCH_PAD_PULL_TAB_POSITION_MARGIN = 32;
export const LAUNCH_PAD_PULL_TAB_MAX_POSITION = 300.8;
export const LAUNCH_PAD_PULL_TAB_INITIAL_POSITION = 150.4;
export const LAUNCH_PAD_MARGIN = 16;
export const LAUNCH_PAD_PULL_TAB_HIT_SLOP = 16;
export const LAUNCH_PAD_END_TRANSLATION_THRESHOLD = 14;
export const LAUNCH_PAD_END_VELOCITY_THRESHOLD = 100;
export const LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE = num;
export const LaunchPadTypes = { GESTURE_FULL: "gesture-full", GESTURE_EDGE: "gesture-edge", PULL_TAB: "pull-tab", DISABLED: "disabled" };