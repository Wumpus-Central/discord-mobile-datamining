// === Module 8732: shouldOpenActivityInPopoutWindow ===

// Module 8732 (shouldOpenActivityInPopoutWindow)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(closure_2, fn) {
  return fn();
};