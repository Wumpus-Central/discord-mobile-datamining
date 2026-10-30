// discord_app/modules/app_state/DiscordAppState.native.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import AppStateStore from "../../stores/native/AppStateStore.tsx";

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
  },
};
