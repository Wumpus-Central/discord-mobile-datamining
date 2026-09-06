// discord_app/modules/nuf/native/useNotificationPermissionPrompt.tsx
import NotificationUtilsDefault from "../../../utils/native/NotificationUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import LoginRequiredActionStore from "../../auth/LoginRequiredActionStore.tsx";
import GatewayConnectionStore from "../../gateway/GatewayConnectionStore.tsx";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";
import PushNotificationPermissionStore from "../../../stores/native/PushNotificationPermissionStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  const items = [GatewayConnectionStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => connected.isConnected());
  const obj = stateFromStores(504);
  const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () =>
    stateFromStores1(dependencyMap[6])(LoginRequiredActionStore, UserRequiredActionStore),
  );
  const items2 = [stateFromStores, stateFromStores1];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = tmp3(12418).requestPermission();
          tmp3(12418).shouldRequestNotification = false;
          const tmp3Result = tmp3(12418);
        }
        tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(504);
  const guildOpenNudge = stateFromStores(16524).useGuildOpenNudge();
  const obj3 = stateFromStores(16524);
  const postCallDisconnectNudge = stateFromStores(16526).usePostCallDisconnectNudge();
}
