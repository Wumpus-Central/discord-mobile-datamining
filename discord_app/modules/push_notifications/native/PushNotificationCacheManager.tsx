// === Module 17556: PushNotificationCacheManager ===

// Module 17556 (PushNotificationCacheManager)
import PushNotificationDefault from "PushNotification" /* 9778 */;
import MultiAccountStore from "MultiAccountStore" /* 12506 */;
import UserStore from "UserStore" /* 1371 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7191 */;

let prototype = function PushNotificationCacheManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  importDefault = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleUserUpdate();
    },
    CURRENT_USER_UPDATE() {
      return applyArgumentsResult.handleUserUpdate();
    },
    LOGOUT() {
      return applyArgumentsResult.handleLogout();
    }
  };
  const items = [MultiAccountStore, () => applyArgumentsResult.syncMultiAccountUsers()];
  const items1 = [items];
  applyArgumentsResult.stores = new Map(items1);
  applyArgumentsResult.handleUserUpdate = function handleUserUpdate() {
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      applyArgumentsResult(9778).setCurrentUser(currentUser.username, currentUser.id);
      const obj2 = applyArgumentsResult(9778);
    } else {
      applyArgumentsResult(9778).setCurrentUser(null, null);
      const obj = applyArgumentsResult(9778);
    }
  };
  applyArgumentsResult.syncMultiAccountUsers = function syncMultiAccountUsers() {
    obj(9778);
    obj = undefined;
    if (validUsers.canUseMultiAccountNotifications) {
      validUsers = validUsers.getValidUsers();
      if (validUsers.length < 2) {
        obj = {};
      } else {
        obj = {};
        const item = validUsers.forEach((id) => {
          obj = applyArgumentsResult(4451);
          obj[id.id] = obj.getUserTag(id, { identifiable: "always" });
        });
      }
    } else {
      obj = {};
    }
    obj.setMultiAccountUsers(obj);
  };
  applyArgumentsResult.handleLogout = function handleLogout() {
    const result = PushNotificationDefault.clearPushNotificationLogs();
    applyArgumentsResult.handleUserUpdate();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/push_notifications/native/PushNotificationCacheManager.tsx");

export default prototype;