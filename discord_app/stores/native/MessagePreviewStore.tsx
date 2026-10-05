// === Module 8037: MessagePreviewStore ===

// Module 8037 (MessagePreviewStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import size from "module_2" /* 2 */;

let unshift;

let c3 = null;
let around = null;
const Store = get_initializedDefault.Store;
class MessagePreviewStore extends Store {
  getMessage(arg0) {
    let closure_0 = arg0;
    const arr = _modDef12;
    return arr.find(c3, (id) => id.id === closure_0 || id.nonce === closure_0);
  }
}
const prototype = MessagePreviewStore.prototype;
Object.defineProperty(prototype, "messages", {
  get: function messages() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "jumpTargetId", {
  get: function jumpTargetId() {
    return around;
  },
  set: undefined
});
MessagePreviewStore.displayName = "MessagePreviewStore";
let obj = {
  LOAD_MESSAGES_AROUND_SUCCESS: function handleLoadMessagesAroundSuccess(messages) {
    messages = messages.messages;
    c3 = [];
    around = messages.around;
    const item = messages.forEach((item) => {
      if (null != unshift) {
        unshift = unshift.unshift;
        const obj = MessageRecordUtils;
        unshift(obj.createMessageRecord(item));
      }
    });
  },
  CLEAR_MESSAGES_AROUND_SUCCESS: function handleClearMessagesAround() {
    c3 = null;
    around = null;
  }
};
const messagePreviewStore = new MessagePreviewStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/native/MessagePreviewStore.tsx");

export default messagePreviewStore;