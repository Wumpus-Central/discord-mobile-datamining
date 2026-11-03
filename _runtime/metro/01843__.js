// _runtime/metro/01843__.js
import mutablesNative from "01844__.js";

export function isReducedMotionEnabledInSystem() {
  return global._REANIMATED_IS_REDUCED_MOTION;
}
export const ReducedMotionManager = mutablesNative.createReducedMotionManager(global._REANIMATED_IS_REDUCED_MOTION);
