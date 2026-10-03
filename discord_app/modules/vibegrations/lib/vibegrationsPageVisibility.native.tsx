// === Module 16660: vibegrationsPageVisibility ===

// Module 16660 (vibegrationsPageVisibility)
import AppStateStore from "AppStateStore" /* 1986 */;

const AppStates = fn(1085).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPageVisibility.native.tsx");

export const isPageHidden = function isPageHidden() {
  return AppStateStore.getState() !== AppStates.ACTIVE;
};
export const subscribePageVisibility = function subscribePageVisibility(flushIfHidden) {
  AppStateStore = flushIfHidden;
  AppStateStore.addChangeListener(flushIfHidden);
  return () => AppStateStore.removeChangeListener(closure_0);
};