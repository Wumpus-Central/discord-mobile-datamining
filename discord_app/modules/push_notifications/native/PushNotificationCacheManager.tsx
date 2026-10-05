// discord_app/modules/push_notifications/native/PushNotificationCacheManager.tsx
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import MultiAccountStore from "../../multi_account/MultiAccountStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let currentUser, id, importDefault, validUsers;

class PushNotificationCacheManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    importDefault = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return importDefault.handleUserUpdate();
      },
      CURRENT_USER_UPDATE() {
        return importDefault.handleUserUpdate();
      },
      LOGOUT() {
        return importDefault.handleLogout();
      },
    };
    const items = [MultiAccountStore, () => importDefault.syncMultiAccountUsers()];
    const items1 = [items];
    applyArgumentsResult.stores = new Map(items1);
    applyArgumentsResult.handleUserUpdate = function handleUserUpdate() {
      currentUser = currentUser.getCurrentUser();
      if (null != currentUser) {
        const obj2 = PushNotificationDefault;
        obj2.setCurrentUser(currentUser.username, currentUser.id);
      } else {
        const obj = PushNotificationDefault;
        obj.setCurrentUser(null, null);
      }
    };
    applyArgumentsResult.syncMultiAccountUsers = function syncMultiAccountUsers() {
      let obj2;
      let obj3;
      const tmp = obj3(closure_1[4]);
      obj3 = undefined;
      const setMultiAccountUsers = tmp.setMultiAccountUsers;
      if (validUsers.canUseMultiAccountNotifications) {
        validUsers = validUsers.getValidUsers();
        if (validUsers.length < 2) {
          obj2 = {};
        } else {
          obj3 = {};
          const item = validUsers.forEach((id) => {
            id = id.id;
            const obj = UserUtilsDefault;
            obj3[id] = obj.getUserTag(id, { identifiable: "always" });
          });
          obj2 = obj3;
        }
      } else {
        obj2 = {};
      }
      setMultiAccountUsers(obj2);
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const obj = PushNotificationDefault;
      const result = obj.clearPushNotificationLogs();
      importDefault.handleUserUpdate();
    };
    new Map(items1);
    return applyArgumentsResult;
  }
}
const pushNotificationCacheManager = new PushNotificationCacheManager();
let result = size.fileFinishedImporting("modules/push_notifications/native/PushNotificationCacheManager.tsx");

export default pushNotificationCacheManager;
