// discord_app/modules/conjure/shared/conjurePageVisibility.native.tsx
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const AppStates = fn(1084).AppStates;
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
