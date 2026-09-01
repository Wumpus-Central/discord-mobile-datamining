// === Module 7354: handleSearchMessagesSuccess ===

// Module 7354 (handleSearchMessagesSuccess)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import createMinimalMessageRecord from "createMinimalMessageRecord" /* 4737 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7345 */;

require = arg1;
function handleSearchMessagesSuccess(data) {
  data = data.data;
  closure_2 = {};
  let item = data.forEach((messages) => {
    messages = messages.messages;
    let item = messages.forEach((arr) => {
      const item = arr.forEach((channel_id) => {
        const combined = "" + channel_id.channel_id + ":" + channel_id.id;
        closure_2[combined] = callback(table[0]).createMessageRecord(channel_id);
      });
    });
  });
}
let closure_2 = {};
const Store = initializeDefault.Store;
class ExplicitMediaSearchStore extends Store {
}
ExplicitMediaSearchStore.prototype["getMessage"] = function getMessage(arg0, arg1) {
  return dependencyMap["" + arg1 + ":" + arg0];
};
ExplicitMediaSearchStore.displayName = "SearchMessageStore";
const explicitMediaSearchStore = new ExplicitMediaSearchStore(dispatcherDefault, {
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (null != message.channel_id) {
        const _HermesInternal = HermesInternal;
        const combined = "" + message.channel_id + ":" + message.id;
        let flag = null != tmp7;
        if (flag) {
          let obj = createMinimalMessageRecord;
          obj = { attachments: null, embeds: null };
          ({ attachments: obj2[0], embeds: obj2[1] } = message);
          dependencyMap[combined] = obj.updateMessageRecord(tmp7, obj);
          flag = true;
        }
        return flag;
      }
    }
    return false;
  },
  LOGOUT: function handleLogout() {
    closure_2 = {};
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_2 = {};
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleScanTimeout(channelId) {
    const combined = "" + channelId.channelId + ":" + channelId.messageId;
    if (null != dependencyMap[combined]) {
      dependencyMap[combined] = redactionSettingToRenderedString.handleExplicitMediaScanTimeoutForMessage(tmp2);
      const obj = redactionSettingToRenderedString;
    }
  }
});
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx");

export default explicitMediaSearchStore;