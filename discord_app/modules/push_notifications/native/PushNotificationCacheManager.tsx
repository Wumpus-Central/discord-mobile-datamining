// === Module 17940: PushNotificationCacheManager ===

// Module 17940 (PushNotificationCacheManager)
import PushNotificationDefault from "PushNotification" /* 10820 */;
import MultiAccountStore from "MultiAccountStore" /* 12144 */;
import UserStore from "UserStore" /* 1389 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;

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
      applyArgumentsResult(10820).setCurrentUser(currentUser.username, currentUser.id);
      const obj2 = applyArgumentsResult(10820);
    } else {
      applyArgumentsResult(10820).setCurrentUser(null, null);
      const obj = applyArgumentsResult(10820);
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
          obj4[id.id] = applyArgumentsResult(4922).getUserTag(id, { identifiable: "always" });
        });
        obj3 = obj4;
      }
    } else {
      obj3 = {};
    }
    obj4(10820).setMultiAccountUsers(obj3);
    const obj = obj4(10820);
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