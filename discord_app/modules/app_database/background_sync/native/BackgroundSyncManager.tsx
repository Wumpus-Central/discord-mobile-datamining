// discord_app/modules/app_database/background_sync/native/BackgroundSyncManager.tsx
import background_sync_BackgroundSync from "BackgroundSync.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
class BackgroundSyncManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = {
      MESSAGE_CREATE: applyArgumentsResult.handleMessageCreate,
      POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen,
    };
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
