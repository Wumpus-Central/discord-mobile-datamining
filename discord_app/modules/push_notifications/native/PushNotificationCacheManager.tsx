// === Module 16690: prototype ===

// Module 16690 (prototype)
import initializeDefault from "initialize" /* 5038 */;
import initialize from "initialize" /* 11585 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

initializeDefault;
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
  const items = [closure_2, () => applyArgumentsResult.syncMultiAccountUsers()];
  const items1 = [items];
  applyArgumentsResult.stores = new Map(items1);
  applyArgumentsResult.handleUserUpdate = function handleUserUpdate() {
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      applyArgumentsResult(11579).setCurrentUser(currentUser.username, currentUser.id);
      const obj2 = applyArgumentsResult(11579);
    } else {
      applyArgumentsResult(11579).setCurrentUser(null, null);
      const obj = applyArgumentsResult(11579);
    }
  };
  applyArgumentsResult.syncMultiAccountUsers = function syncMultiAccountUsers() {
    obj(11579);
    obj = undefined;
    if (obj.canUseMultiAccountNotifications) {
      const validUsers = obj.getValidUsers();
      if (validUsers.length < 2) {
        obj = {};
      } else {
        obj = {};
        const item = validUsers.forEach((item, index) => {
          obj = obj(closure_1_1[2]);
          obj[item.id] = obj.getUserTag(item, { identifiable: "always" });
        });
      }
    } else {
      obj = {};
    }
    obj.setMultiAccountUsers(obj);
  };
  applyArgumentsResult.handleLogout = function handleLogout() {
    const result = applyArgumentsResult(dependencyMap[4]).clearPushNotificationLogs();
    applyArgumentsResult.handleUserUpdate();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("obj132").fileFinishedImporting("modules/push_notifications/native/PushNotificationCacheManager.tsx");

export default prototype;