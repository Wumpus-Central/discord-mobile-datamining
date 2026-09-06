// === Module 17320: BackgroundSyncManager ===

// Module 17320 (BackgroundSyncManager)
import background_sync_BackgroundSync from "background_sync/BackgroundSync" /* 17321 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1371 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
class BackgroundSyncManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { MESSAGE_CREATE: applyArgumentsResult.handleMessageCreate, POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen };
    return applyArgumentsResult;
  }
}
const prototype = BackgroundSyncManager.prototype;
prototype["handleMessageCreate"] = function handleMessageCreate(message) {
  message = message.message;
  if (!message.optimistic) {
    let tmp2 = null != message.author;
    if (tmp2) {
      tmp2 = message.author.id === AuthenticationStore.getId();
    }
    if (tmp2) {
      const currentUser = UserStore.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      tmp2 = isStaffResult;
    }
    if (tmp2) {
      tmp2 = "run bg sync" === message.content;
    }
    if (tmp2) {
      background_sync_BackgroundSync.backgroundSync({ force: true });
    }
  }
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  background_sync_BackgroundSync.backgroundSync({ force: false, messagesOnly: true, checkLastMessageId: true });
};
const backgroundSyncManager = new BackgroundSyncManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSyncManager.tsx");

export default backgroundSyncManager;