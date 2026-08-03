// === Module 7049: initialize ===

// Module 7049 (initialize)
import reinjectEphemerals from "reinjectEphemerals";
import { Store } from "initialize";

const require = arg1;
let closure_4 = {};
let closure_5 = {};
class EditMessageStore extends Store {
}
const prototype = EditMessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(reinjectEphemerals);
};
prototype["isEditing"] = function isEditing(arg0, arg1) {
  let messageId;
  if (dependencyMap[arg0] != null) {
    messageId = tmp.messageId;
  }
  return messageId === arg1;
};
prototype["isEditingAny"] = function isEditingAny(arg0) {
  return null != dependencyMap[arg0];
};
prototype["getEditingTextValue"] = function getEditingTextValue(id) {
  let textValue;
  if (dependencyMap[id] != null) {
    textValue = tmp.textValue;
  }
  return textValue;
};
prototype["getEditingRichValue"] = function getEditingRichValue(arg0) {
  let richValue;
  if (dependencyMap[arg0] != null) {
    richValue = tmp.richValue;
  }
  return richValue;
};
prototype["getEditingMessageId"] = function getEditingMessageId(memo1) {
  let messageId;
  if (dependencyMap[memo1] != null) {
    messageId = tmp.messageId;
  }
  return messageId;
};
prototype["getEditingMessage"] = function getEditingMessage(id) {
  let message = null;
  if (null != dependencyMap[id]) {
    message = null;
    if (null != tmp.messageId) {
      message = message.getMessage(id, tmp.messageId);
    }
  }
  return message;
};
prototype["getEditActionSource"] = function getEditActionSource(outer1_0) {
  return table[outer1_0];
};
EditMessageStore.displayName = "EditMessageStore";
const editMessageStore = new EditMessageStore(require("dispatcher"), {
  MESSAGE_START_EDIT: function handleMessageStartEdit(arg0) {
    let channelId;
    let content;
    let messageId;
    let source;
    ({ channelId, content } = arg0);
    ({ messageId, source } = arg0);
    const UseLegacyChatInput = require(3928) /* explicitContentFromProto */.UseLegacyChatInput;
    const setting = UseLegacyChatInput.getSetting();
    let obj = importDefault(7050);
    const unparseResult = obj.unparse(content, channelId);
    obj = { channelId, messageId, textValue: unparseResult, richValue: null };
    if (setting) {
      content = unparseResult;
    }
    obj[3] = require(7053) /* createEmptyState */.toRichValue(content);
    closure_4[channelId] = obj;
    closure_5[channelId] = source;
  },
  MESSAGE_UPDATE_EDIT: function handleMessageUpdateEdit(channelId) {
    channelId = channelId.channelId;
    if (null == dependencyMap[channelId]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(tmp3);
      obj.textValue = tmp;
      obj.richValue = tmp2;
      dependencyMap[channelId] = obj;
    }
  },
  MESSAGE_END_EDIT: function handleMessageEndEdit(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != dependencyMap[channelId]) {
        delete tmp3[tmp2];
        delete tmp[tmp2];
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    let messageId;
    if (dependencyMap[id.channelId] != null) {
      messageId = tmp4.messageId;
    }
    if (messageId === id.id) {
      delete tmp3[tmp2];
      delete tmp[tmp2];
    }
  },
  LOGOUT: function handleLogout() {
    let closure_4 = {};
    let closure_5 = {};
  }
});
const result = require("rebuild").fileFinishedImporting("stores/EditMessageStore.tsx");

export default editMessageStore;