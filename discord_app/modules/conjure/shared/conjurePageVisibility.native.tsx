// === Module 17160: conjurePageVisibility ===

// Module 17160 (conjurePageVisibility)
import AppStateStore from "AppStateStore" /* 1999 */;

const AppStates = fn(1085).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/conjurePageVisibility.native.tsx");

export const isPageHidden = function isPageHidden() {
  return AppStateStore.getState() !== AppStates.ACTIVE;
};
export const subscribePageVisibility = function subscribePageVisibility(flushIfHidden) {
  AppStateStore = flushIfHidden;
  AppStateStore.addChangeListener(flushIfHidden);
  return () => AppStateStore.removeChangeListener(closure_0);
};