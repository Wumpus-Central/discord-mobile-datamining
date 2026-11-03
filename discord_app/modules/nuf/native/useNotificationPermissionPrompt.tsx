// === Module 18755: useNotificationPermissionPrompt ===

// Module 18755 (useNotificationPermissionPrompt)
import NotificationUtilsDefault from "NotificationUtils" /* 14113 */;
import noop from "module_19" /* 19 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4983 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6688 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4984 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14104 */;

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
  const guildOpenNudge = stateFromStores(18756).useGuildOpenNudge();
  const obj3 = stateFromStores(18756);
  const postCallDisconnectNudge = stateFromStores(18758).usePostCallDisconnectNudge();
};