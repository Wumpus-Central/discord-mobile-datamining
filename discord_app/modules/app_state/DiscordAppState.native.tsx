// === Module 6559: DiscordAppState ===

// Module 6559 (DiscordAppState)
import initialize from "initialize" /* 504 */;
import AppStateStore from "AppStateStore" /* 2120 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket() {
    return "active" === AppStateStore.getState();
  },
  getState() {
    return AppStateStore.getState();
  },
  useState() {
    items = [AppStateStore];
    return initialize.useStateFromStores(items, () => state.getState());
  },
  useCanUIRequestGatewaySocket() {
    items = [AppStateStore];
    return initialize.useStateFromStores(items, () => "active" === state.getState());
  }
};