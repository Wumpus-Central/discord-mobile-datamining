// discord_app/modules/app_state/DiscordAppState.native.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import getState from "../../stores/native/AppStateStore.tsx";

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