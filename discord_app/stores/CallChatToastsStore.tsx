// === Module 17182: CallChatToastsStore ===

// Module 17182 (CallChatToastsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const obj = { toastsEnabledForChannel: {} };
let closure_1 = obj;
const PersistedStore = initializeDefault.PersistedStore;
class CallChatToastsStore extends PersistedStore {
}
const prototype = CallChatToastsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  closure_1 = tmp;
};
prototype["getToastsEnabled"] = function getToastsEnabled(arg0) {
  let flag = closure_1.toastsEnabledForChannel[arg0];
  if (flag == null) {
    flag = true;
  }
  return flag;
};
prototype["getState"] = function getState() {
  return closure_1;
};
CallChatToastsStore.displayName = "CallChatToastsStore";
CallChatToastsStore.persistKey = "CallChatToasts";
const callChatToastsStore = new CallChatToastsStore(DispatcherDefault, {
  CALL_CHAT_TOASTS_SET_ENABLED: function handleSetToastsEnabled(channelId) {
    closure_1.toastsEnabledForChannel[channelId.channelId] = channelId.toastsEnabled;
  },
  LOGOUT: function handleReset() {
    closure_1.toastsEnabledForChannel = {};
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/CallChatToastsStore.tsx");

export default callChatToastsStore;