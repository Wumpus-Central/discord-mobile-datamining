// discord_app/modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import createMinimalMessageRecord from "../messages/MessageRecordUtils.tsx";
import redactionSettingToRenderedString from "ExplicitMediaRedactionUtils.tsx";

require = fn;
function handleSearchMessagesSuccess(data) {
  data = data.data;
  closure_2 = {};
  let item = data.forEach((item, index) => {
    const messages = item.messages;
    item = messages.forEach((item, index) => {
      item = item.forEach((item, index) => {
        const combined = "" + item.channel_id + ":" + item.id;
        closure_2[combined] = callback(table[0]).createMessageRecord(item);
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
          const obj = { attachments: null, embeds: null };
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
    }
  }
});
const result = require("obj132").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx");

export default explicitMediaSearchStore;