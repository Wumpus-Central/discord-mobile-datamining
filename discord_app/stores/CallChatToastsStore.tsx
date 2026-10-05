// discord_app/stores/CallChatToastsStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  },
};
const callChatToastsStore = new CallChatToastsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/CallChatToastsStore.tsx");

export default callChatToastsStore;
