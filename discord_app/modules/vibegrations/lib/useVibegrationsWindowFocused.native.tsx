// === Module 16066: useVibegrationsWindowFocused ===

// Module 16066 (useVibegrationsWindowFocused)
import initialize from "initialize" /* 504 */;
import AppStateStore from "AppStateStore" /* 1980 */;

require = fn;
const AppStates = fn(1074).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsWindowFocused.native.tsx");

export default function useVibegrationsWindowFocused() {
  const items = [AppStateStore];
  return initialize.useStateFromStores(items, () => state.getState() === constants.ACTIVE);
};