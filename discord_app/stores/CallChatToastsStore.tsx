// === Module 16778: CallChatToastsStore ===

// Module 16778 (CallChatToastsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_1;

const obj = { toastsEnabledForChannel: {} };
const PersistedStore = get_initializedDefault.PersistedStore;
class CallChatToastsStore extends PersistedStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    closure_1 = tmp;
  }
  getToastsEnabled(arg0) {
    let flag = closure_1.toastsEnabledForChannel[arg0];
    if (flag == null) {
      flag = true;
    }
    return flag;
  }
  getState() {
    return closure_1;
  }
}
const prototype = CallChatToastsStore.prototype;
CallChatToastsStore.displayName = "CallChatToastsStore";
CallChatToastsStore.persistKey = "CallChatToasts";
const obj2 = {
  CALL_CHAT_TOASTS_SET_ENABLED: function handleSetToastsEnabled(channelId) {
    closure_1.toastsEnabledForChannel[channelId.channelId] = channelId.toastsEnabled;
  },
  LOGOUT: function handleReset() {
    closure_1.toastsEnabledForChannel = {};
  }
};
const callChatToastsStore = new CallChatToastsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/CallChatToastsStore.tsx");

export default callChatToastsStore;