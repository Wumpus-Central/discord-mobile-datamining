// === Module 18603: conjurePageVisibility ===

// Module 18603 (conjurePageVisibility)
import AppStateStore from "AppStateStore" /* 2119 */;

const AppStates = fn(1071).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/conjurePageVisibility.native.tsx");

export function isPageHidden() {
  return AppStateStore.getState() !== AppStates.ACTIVE;
}
export function subscribePageVisibility(flushIfHidden) {
  AppStateStore = flushIfHidden;
  AppStateStore.addChangeListener(flushIfHidden);
  return () => AppStateStore.removeChangeListener(closure_0);
}