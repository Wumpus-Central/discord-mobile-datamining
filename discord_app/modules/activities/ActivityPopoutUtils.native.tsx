// === Module 10735: shouldOpenActivityInPopoutWindow ===

// Module 10735 (shouldOpenActivityInPopoutWindow)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/ActivityPopoutUtils.native.tsx");

export function shouldOpenActivityInPopoutWindow() {
  return false;
}
export const wrapPreemptiveActivityPopout = function wrapPreemptiveActivityPopout(closure_2, arg1) {
  return arg1();
};