// discord_app/modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils.tsx";

require = fn;
function handleSearchMessagesSuccess(data) {
  data = data.data;
  closure_2 = {};
  let item = data.forEach((messages) => {
    messages = messages.messages;
    let item = messages.forEach((arr) => {
      const item = arr.forEach((channel_id) => {
        const combined = "" + channel_id.channel_id + ":" + channel_id.id;
        closure_1_2[combined] = closure_1_0(closure_1_1[0]).createMessageRecord(channel_id);
      });
    });
  });
}
const dependencyMap = {};
const Store = initializeDefault.Store;
class ExplicitMediaSearchStore extends Store {}
ExplicitMediaSearchStore.prototype["getMessage"] = function getMessage(arg0, arg1) {
  return dependencyMap["" + arg1 + ":" + arg0];
};
ExplicitMediaSearchStore.displayName = "SearchMessageStore";
const explicitMediaSearchStore = new ExplicitMediaSearchStore(DispatcherDefault, {
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
          ({ attachments: obj2.attachments, embeds: obj2.embeds } = message);
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
      dependencyMap[combined] = ExplicitMediaRedactionUtils.handleExplicitMediaScanTimeoutForMessage(tmp2);
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaSearchStore.tsx");

export default explicitMediaSearchStore;
