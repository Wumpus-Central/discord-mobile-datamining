// discord_app/modules/nuf/native/useNotificationPermissionPrompt.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../auth/LoginRequiredActionStore.tsx";
import closure_5 from "../../gateway/GatewayConnectionStore.tsx";
import closure_6 from "../../../stores/UserRequiredActionStore.tsx";
import closure_7 from "../../../stores/native/PushNotificationPermissionStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  const items = [closure_5];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => connected.isConnected());
  const obj = stateFromStores(589);
  const items1 = [closure_6, closure_4];
  const stateFromStores1 = stateFromStores(589).useStateFromStores(items1, () => stateFromStores1(table[6])(closure_4, closure_6));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = tmp3(tmp4[7]).requestPermission();
          tmp3(tmp4[7]).shouldRequestNotification = false;
          const tmp3Result = tmp3(tmp4[7]);
        }
        tmp5 = stateFromStores1(closure_1_2[7]).shouldRequestNotification && !closure_1_7.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(589);
  const guildOpenNudge = stateFromStores(16025).useGuildOpenNudge();
  const obj3 = stateFromStores(16025);
  const postCallDisconnectNudge = stateFromStores(16027).usePostCallDisconnectNudge();
};