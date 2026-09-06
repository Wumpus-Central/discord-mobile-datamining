// discord_app/stores/EditMessageStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import UserSettings from "../modules/user_settings/UserSettings.tsx";
import MessageParserDefault from "../modules/messages/MessageParser.tsx";
import SlateUtils from "../modules/channel_text_area/slate/SlateUtils.tsx";
import MessageStore from "MessageStore.tsx";

require = fn;
const dependencyMap = {};
let closure_5 = {};
const Store = initializeDefault.Store;
class EditMessageStore extends Store {}
const prototype = EditMessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(MessageStore);
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
prototype["getEditingMessageId"] = function getEditingMessageId(id) {
  let messageId;
  if (dependencyMap[id] != null) {
    messageId = tmp.messageId;
  }
  return messageId;
};
prototype["getEditingMessage"] = function getEditingMessage(id) {
  let message = null;
  if (null != dependencyMap[id]) {
    message = null;
    if (null != tmp.messageId) {
      message = MessageStore.getMessage(id, tmp.messageId);
    }
  }
  return message;
};
prototype["getEditActionSource"] = function getEditActionSource(channel_id) {
  return closure_5[channel_id];
};
EditMessageStore.displayName = "EditMessageStore";
const editMessageStore = new EditMessageStore(DispatcherDefault, {
  MESSAGE_START_EDIT: function handleMessageStartEdit(arg0) {
    ({ channelId, content } = arg0);
    ({ messageId, source } = arg0);
    const UseLegacyChatInput = UserSettings.UseLegacyChatInput;
    const setting = UseLegacyChatInput.getSetting();
    let obj = MessageParserDefault;
    const unparseResult = obj.unparse(content, channelId);
    obj = { channelId, messageId, textValue: unparseResult, richValue: null };
    if (setting) {
      content = unparseResult;
    }
    obj.richValue = SlateUtils.toRichValue(content);
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
    closure_4 = {};
    closure_5 = {};
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/EditMessageStore.tsx");

export default editMessageStore;
