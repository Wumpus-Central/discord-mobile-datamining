// === Module 10501: ? ===

// Module 10501
import initialize from "initialize" /* 589 */;
import getState from "getState" /* 7383 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket(closure_1_2) {
    return "active" === store.getState();
  },
  getState() {
    return store.getState();
  },
  useCanUIRequestGatewaySocket() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => "active" === state.getState());
  }
};