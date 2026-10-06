// === Module 7178: EditMessageStore ===

// Module 7178 (EditMessageStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserSettings from "UserSettings" /* 2028 */;
import MessageParserDefault from "MessageParser" /* 7179 */;
import SlateUtils from "SlateUtils" /* 7183 */;
import MessageStore from "MessageStore" /* 5116 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5;

const React3 = {};
const hasOwnProperty = {};
const Store = get_initializedDefault.Store;
class EditMessageStore extends Store {
  initialize() {
    this.waitFor(MessageStore);
  }
  isEditing(arg0, arg1) {
    let messageId;
    if (closure_4[arg0] != null) {
      messageId = tmp.messageId;
    }
    return messageId === arg1;
  }
  isEditingAny(arg0) {
    return null != closure_4[arg0];
  }
  getEditingTextValue(id) {
    let textValue;
    if (closure_4[id] != null) {
      textValue = tmp.textValue;
    }
    return textValue;
  }
  getEditingRichValue(arg0) {
    let richValue;
    if (closure_4[arg0] != null) {
      richValue = tmp.richValue;
    }
    return richValue;
  }
  getEditingMessageId(id) {
    let messageId;
    if (closure_4[id] != null) {
      messageId = tmp.messageId;
    }
    return messageId;
  }
  getEditingMessage(id) {
    let message = null;
    if (null != closure_4[id]) {
      message = null;
      if (null != closure_4[id].messageId) {
        message = MessageStore.getMessage(id, tmp.messageId);
      }
    }
    return message;
  }
  getEditActionSource(channel_id) {
    return closure_5[channel_id];
  }
}
const prototype = EditMessageStore.prototype;
EditMessageStore.displayName = "EditMessageStore";
let obj = {
  MESSAGE_START_EDIT: function handleMessageStartEdit(arg0) {
    let channelId;
    let content;
    let messageId;
    let source;
    let toRichValue;
    ({ channelId, content } = arg0);
    ({ messageId, source } = arg0);
    const UseLegacyChatInput = UserSettings.UseLegacyChatInput;
    const setting = UseLegacyChatInput.getSetting();
    const obj = MessageParserDefault;
    const unparseResult = obj.unparse(content, channelId);
    const obj2 = { channelId, messageId, textValue: unparseResult, richValue: toRichValue(content) };
    toRichValue = SlateUtils.toRichValue;
    SlateUtils;
    if (setting) {
      content = unparseResult;
    }
    closure_4[channelId] = obj2;
    closure_5[channelId] = source;
  },
  MESSAGE_UPDATE_EDIT: function handleMessageUpdateEdit(channelId) {
    channelId = channelId.channelId;
    if (null == closure_4[channelId]) {
      return false;
    } else {
      const obj = { textValue: tmp, richValue: tmp2 };
      const merged = Object.assign(tmp3);
      closure_4[channelId] = obj;
    }
  },
  MESSAGE_END_EDIT: function handleMessageEndEdit(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != closure_4[channelId]) {
        delete closure_4[channelId];
        delete closure_5[channelId];
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    channelId = channelId.channelId;
    let messageId;
    const id = channelId.id;
    if (closure_4[channelId] != null) {
      messageId = tmp.messageId;
    }
    if (messageId === id) {
      delete closure_4[channelId];
      delete closure_5[channelId];
    }
  },
  LOGOUT: function handleLogout() {
    closure_4 = {};
    closure_5 = {};
  }
};
const editMessageStore = new EditMessageStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/EditMessageStore.tsx");

export default editMessageStore;