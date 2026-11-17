// === Module 19401: useNotificationPermissionPrompt ===

// Module 19401 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 13914 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 5152 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6798 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 5153 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13905 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/useNotificationPermissionPrompt.tsx");

export default function useNotificationPermissionPrompt() {
  items = [GatewayConnectionStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => connected.isConnected());
  const obj = stateFromStores(504);
  const items1 = [UserRequiredActionStore, LoginRequiredActionStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => stateFromStores1(dependencyMap[6])(LoginRequiredActionStore, UserRequiredActionStore));
  const items2 = [stateFromStores, stateFromStores1];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if (!stateFromStores1) {
        if (tmp5) {
          const permission = NotificationUtilsDefault.requestPermission();
          NotificationUtilsDefault.shouldRequestNotification = false;
          const tmp3Result = NotificationUtilsDefault;
        }
        tmp5 = NotificationUtilsDefault.shouldRequestNotification && !PushNotificationPermissionStore.promptSeen;
      }
    }
  }, items2);
  const obj2 = stateFromStores(504);
  const guildOpenNudge = stateFromStores(19402).useGuildOpenNudge();
  const obj3 = stateFromStores(19402);
  const postCallDisconnectNudge = stateFromStores(19404).usePostCallDisconnectNudge();
};