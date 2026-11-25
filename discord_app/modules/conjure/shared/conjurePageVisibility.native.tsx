// === Module 18529: conjurePageVisibility ===

// Module 18529 (conjurePageVisibility)
import AppStateStore from "AppStateStore" /* 2118 */;

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