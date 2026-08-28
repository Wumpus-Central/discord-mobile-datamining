// === Module 8577: messages ===

// Module 8577 (messages)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const require = arg1;
let c3 = null;
let c4 = null;
const Store = initializeDefault.Store;
class MessagePreviewStore extends Store {
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
    return c4;
  },
  set: undefined
});
prototype["getMessage"] = function getMessage(arg0) {
  closure_0 = arg0;
  return applyDefault.find(c3, (id) => id.id === closure_0 || id.nonce === closure_0);
};
MessagePreviewStore.displayName = "MessagePreviewStore";
const messagePreviewStore = new MessagePreviewStore(dispatcherDefault, {
  LOAD_MESSAGES_AROUND_SUCCESS: function handleLoadMessagesAroundSuccess(messages) {
    messages = messages.messages;
    closure_3 = [];
    const item = messages.forEach((message) => {
      if (null != arr) {
        arr = arr.unshift(callback(table[0]).createMessageRecord(message));
        const obj = callback(table[0]);
      }
    });
    const around = messages.around;
  },
  CLEAR_MESSAGES_AROUND_SUCCESS: function handleClearMessagesAround() {
    c3 = null;
    c4 = null;
  }
});
const result = require("set").fileFinishedImporting("stores/native/MessagePreviewStore.tsx");

export default messagePreviewStore;