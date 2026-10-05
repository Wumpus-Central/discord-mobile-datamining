// discord_app/modules/app_database/background_sync/native/BackgroundSyncManager.tsx
import background_sync_BackgroundSync from "BackgroundSync.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

class BackgroundSyncManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      MESSAGE_CREATE: applyArgumentsResult.handleMessageCreate,
      POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen,
    };
    return applyArgumentsResult;
  }
  handleMessageCreate(message) {
    message = message.message;
    if (!message.optimistic) {
      let tmp2 = null != message.author && message.author.id === AuthenticationStore.getId();
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
        const obj2 = background_sync_BackgroundSync;
        obj2.backgroundSync({ force: true });
      }
    }
  }
  handlePostConnectionOpen() {
    const obj = background_sync_BackgroundSync;
    obj.backgroundSync({ force: false, messagesOnly: true, checkLastMessageId: true });
  }
}
const prototype = BackgroundSyncManager.prototype;
const backgroundSyncManager = new BackgroundSyncManager();
const result = size.fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSyncManager.tsx");

export default backgroundSyncManager;
