// discord_app/stores/native/MessagePreviewStore.tsx
import { Store } from "initialize";
import { apply } from "../../../_runtime/00012_apply.js";

const require = arg1;
let c3 = null;
let c4 = null;
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
  let closure_0 = arg0;
  return apply.find(c3, (id) => id.id === closure_0 || id.nonce === closure_0);
};
MessagePreviewStore.displayName = "MessagePreviewStore";
const messagePreviewStore = new MessagePreviewStore(require("dispatcher"), {
  LOAD_MESSAGES_AROUND_SUCCESS: function handleLoadMessagesAroundSuccess(messages) {
    messages = messages.messages;
    let closure_3 = [];
    const item = messages.forEach((message) => {
      if (null != arr) {
        arr = arr.unshift(callback(table[0]).createMessageRecord(message));
        const obj = callback(table[0]);
      }
    });
    const around = messages.around;
  },
  CLEAR_MESSAGES_AROUND_SUCCESS: function handleClearMessagesAround() {
    let c3 = null;
    let c4 = null;
  }
});
const result = require("apply").fileFinishedImporting("stores/native/MessagePreviewStore.tsx");

export default messagePreviewStore;