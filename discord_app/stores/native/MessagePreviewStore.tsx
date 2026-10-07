// discord_app/stores/native/MessagePreviewStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import MessageRecordUtils from "../../modules/messages/MessageRecordUtils.tsx";

require = fn;
let c3 = null;
let c4 = null;
const Store = initializeDefault.Store;
class MessagePreviewStore extends Store {}
const prototype = MessagePreviewStore.prototype;
Object.defineProperty(prototype, "messages", {
  get: function messages() {
    return c3;
  },
  set: undefined,
});
Object.defineProperty(prototype, "jumpTargetId", {
  get: function jumpTargetId() {
    return c4;
  },
  set: undefined,
});
prototype["getMessage"] = function getMessage(arg0) {
  closure_0 = arg0;
  return _modDef12.find(c3, (id) => id.id === closure_0 || id.nonce === closure_0);
};
MessagePreviewStore.displayName = "MessagePreviewStore";
const messagePreviewStore = new MessagePreviewStore(DispatcherDefault, {
  LOAD_MESSAGES_AROUND_SUCCESS: function handleLoadMessagesAroundSuccess(messages) {
    messages = messages.messages;
    c3 = [];
    const item = messages.forEach((item) => {
      if (null != closure_1_3) {
        closure_1_3.unshift(MessageRecordUtils.createMessageRecord(item));
      }
    });
    const around = messages.around;
  },
  CLEAR_MESSAGES_AROUND_SUCCESS: function handleClearMessagesAround() {
    c3 = null;
    c4 = null;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/native/MessagePreviewStore.tsx");

export default messagePreviewStore;
