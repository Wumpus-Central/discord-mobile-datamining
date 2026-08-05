// discord_app/modules/app_state/DiscordAppState.native.tsx
import getState from "getState";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket(arg0) {
    return "active" === store.getState();
  },
  getState() {
    return store.getState();
  },
  useCanUIRequestGatewaySocket() {
    const items = [getState];
    return require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => "active" === state.getState());
  }
};