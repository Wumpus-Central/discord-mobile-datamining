// === Module 6930: DiscordAppState ===

// Module 6930 (DiscordAppState)
import initialize from "initialize" /* 504 */;
import AppStateStore from "AppStateStore" /* 2117 */;

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
  useCanUIRequestGatewaySocket() {
    items = [AppStateStore];
    return initialize.useStateFromStores(items, () => "active" === state.getState());
  }
};