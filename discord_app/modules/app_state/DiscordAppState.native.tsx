// === Module 11561: DiscordAppState ===

// Module 11561 (DiscordAppState)
import initialize from "initialize" /* 504 */;
import AppStateStore from "AppStateStore" /* 1979 */;

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
    const items = [AppStateStore];
    return initialize.useStateFromStores(items, () => "active" === state.getState());
  }
};