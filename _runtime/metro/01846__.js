// === Module 1846: ? ===

// Module 1846
import mutablesNative from "module_1847" /* 1847 */;


export function isReducedMotionEnabledInSystem() {
  return global._REANIMATED_IS_REDUCED_MOTION;
}
export const ReducedMotionManager = mutablesNative.createReducedMotionManager(global._REANIMATED_IS_REDUCED_MOTION);