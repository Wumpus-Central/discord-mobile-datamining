// === Module 16533: handleMessageCreate ===

// Module 16533 (handleMessageCreate)
import initializeDefault from "initialize" /* 5038 */;
import _backgroundSync from "_backgroundSync" /* 16534 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

require = fn;
initializeDefault;
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
      tmp2 = message.author.id === id.getId();
    }
    if (tmp2) {
      currentUser = currentUser.getCurrentUser();
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
      _backgroundSync.backgroundSync({ force: true });
    }
  }
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  _backgroundSync.backgroundSync({ force: false, messagesOnly: true, checkLastMessageId: true });
};
const backgroundSyncManager = new BackgroundSyncManager();
const result = require("obj132").fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSyncManager.tsx");

export default backgroundSyncManager;