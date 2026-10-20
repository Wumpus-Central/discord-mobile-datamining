// === Module 18687: PushNotificationCacheManager ===

// Module 18687 (PushNotificationCacheManager)
import PushNotificationDefault from "PushNotification" /* 11056 */;
import MultiAccountStore from "MultiAccountStore" /* 13129 */;
import UserStore from "UserStore" /* 1392 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7165 */;

const prototype = function PushNotificationCacheManager() {
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
      applyArgumentsResult(11056).setCurrentUser(currentUser.username, currentUser.id);
      const obj2 = applyArgumentsResult(11056);
    } else {
      applyArgumentsResult(11056).setCurrentUser(null, null);
      const obj = applyArgumentsResult(11056);
    }
  };
  applyArgumentsResult.syncMultiAccountUsers = function syncMultiAccountUsers() {
    let obj4;
    if (validUsers.canUseMultiAccountNotifications) {
      validUsers = validUsers.getValidUsers();
      if (validUsers.length < 2) {
        let obj3 = {};
      } else {
        obj4 = {};
        const item = validUsers.forEach((id) => {
          obj4[id.id] = applyArgumentsResult(4994).getUserTag(id, { identifiable: "always" });
        });
        obj3 = obj4;
      }
    } else {
      obj3 = {};
    }
    obj4(11056).setMultiAccountUsers(obj3);
    const obj = obj4(11056);
  };
  applyArgumentsResult.handleLogout = function handleLogout() {
    const result = PushNotificationDefault.clearPushNotificationLogs();
    applyArgumentsResult.handleUserUpdate();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/push_notifications/native/PushNotificationCacheManager.tsx");

export default prototype1;