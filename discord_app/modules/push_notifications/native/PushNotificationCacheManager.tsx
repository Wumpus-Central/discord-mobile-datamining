// === Module 18174: PushNotificationCacheManager ===

// Module 18174 (PushNotificationCacheManager)
import PushNotificationDefault from "PushNotification" /* 11031 */;
import MultiAccountStore from "MultiAccountStore" /* 12125 */;
import UserStore from "UserStore" /* 1390 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6807 */;

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
      applyArgumentsResult(11031).setCurrentUser(currentUser.username, currentUser.id);
      const obj2 = applyArgumentsResult(11031);
    } else {
      applyArgumentsResult(11031).setCurrentUser(null, null);
      const obj = applyArgumentsResult(11031);
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
          obj4[id.id] = applyArgumentsResult(4962).getUserTag(id, { identifiable: "always" });
        });
        obj3 = obj4;
      }
    } else {
      obj3 = {};
    }
    obj4(11031).setMultiAccountUsers(obj3);
    const obj = obj4(11031);
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