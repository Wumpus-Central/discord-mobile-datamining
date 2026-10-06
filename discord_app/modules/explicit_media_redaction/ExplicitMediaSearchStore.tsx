// === Module 13522: ExplicitMediaSearchStore ===

// Module 13522 (ExplicitMediaSearchStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5118 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7122 */;
import size from "module_2" /* 2 */;

let closure_2, messages;

function handleSearchMessagesSuccess(data) {
  data = data.data;
  closure_2 = {};
  let item = data.forEach((messages) => {
    messages = messages.messages;
    let item = messages.forEach((arr) => {
      const item = arr.forEach((channel_id) => {
        const combined = "" + channel_id.channel_id + ":" + channel_id.id;
        const obj = closure_1_0(closure_1_1[0]);
        closure_1_2[combined] = obj.createMessageRecord(channel_id);
      });
    });
  });
}
const React2 = {};
const Store = get_initializedDefault.Store;
class ExplicitMediaSearchStore extends Store {
  getMessage(arg0, arg1) {
    return closure_2["" + arg1 + ":" + arg0];
  }
}
const prototype = ExplicitMediaSearchStore.prototype;
ExplicitMediaSearchStore.displayName = "SearchMessageStore";
let obj = {
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
          const obj3 = { attachments: null, embeds: null };
          ({ attachments: obj2.attachments, embeds: obj2.embeds } = message);
          const obj = MessageRecordUtils;
          closure_2[combined] = obj.updateMessageRecord(closure_2[combined], obj3);
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
    if (null != closure_2[combined]) {
      const obj = ExplicitMediaRedactionUtils;
      closure_2[combined] = obj.handleExplicitMediaScanTimeoutForMessage(closure_2[combined]);
    }
  }
};
const explicitMediaSearchStore = new ExplicitMediaSearchStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx");

export default explicitMediaSearchStore;