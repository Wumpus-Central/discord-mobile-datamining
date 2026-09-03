// discord_app/modules/push_notifications/native/PushNotificationCacheManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import closure_2 from "../../multi_account/MultiAccountStore.tsx";
import closure_3 from "../../../stores/UserStore.tsx";

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
    },
  };
  const items = [closure_2, () => applyArgumentsResult.syncMultiAccountUsers()];
  const items1 = [items];
  applyArgumentsResult.stores = new Map(items1);
  applyArgumentsResult.handleUserUpdate = function handleUserUpdate() {
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      applyArgumentsResult(9674).setCurrentUser(currentUser.username, currentUser.id);
      const obj2 = applyArgumentsResult(9674);
    } else {
      applyArgumentsResult(9674).setCurrentUser(null, null);
      const obj = applyArgumentsResult(9674);
    }
  };
  applyArgumentsResult.syncMultiAccountUsers = function syncMultiAccountUsers() {
    obj = obj(9674);
    obj = undefined;
    if (obj.canUseMultiAccountNotifications) {
      const validUsers = obj.getValidUsers();
      if (validUsers.length < 2) {
        obj = {};
      } else {
        obj = {};
        const item = validUsers.forEach((id) => {
          obj = obj(closure_1_1[2]);
          obj[id.id] = obj.getUserTag(id, { identifiable: "always" });
        });
      }
    } else {
      obj = {};
    }
    obj.setMultiAccountUsers(obj);
  };
  applyArgumentsResult.handleLogout = function handleLogout() {
    const result = applyArgumentsResult(closure_1_1[4]).clearPushNotificationLogs();
    applyArgumentsResult.handleUserUpdate();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/push_notifications/native/PushNotificationCacheManager.tsx");

export default prototype;
