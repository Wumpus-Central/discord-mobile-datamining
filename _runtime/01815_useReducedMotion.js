// _runtime/01815_useReducedMotion.js
import isReducedMotionEnabledInSystem from "isReducedMotionEnabledInSystem";

isReducedMotionEnabledInSystem = isReducedMotionEnabledInSystem.isReducedMotionEnabledInSystem();

export function useReducedMotion() {
  return isReducedMotionEnabledInSystem;
}