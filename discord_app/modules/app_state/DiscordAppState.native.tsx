// discord_app/modules/app_state/DiscordAppState.native.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../../stores/native/AppStateStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket(arg0) {
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