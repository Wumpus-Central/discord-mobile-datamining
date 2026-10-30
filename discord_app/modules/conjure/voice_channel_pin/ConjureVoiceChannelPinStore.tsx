// === Module 10851: ConjureVoiceChannelPinStore ===

// Module 10851 (ConjureVoiceChannelPinStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

const map = new Map();
const Store = initializeDefault.Store;
class ConjureVoiceChannelPinStore extends Store {
}
ConjureVoiceChannelPinStore.prototype["getOutcome"] = function getOutcome(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
const conjureVoiceChannelPinStore = new ConjureVoiceChannelPinStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      return false;
    } else {
      map.clear();
    }
  },
  CONJURE_PROJECT_PUBLISH_STATUS_UPDATE: function handlePublishStatusUpdate(arg0) {
    ({ projectId, voiceChannelPin } = arg0);
    let tmp = null != voiceChannelPin;
    if (tmp) {
      value = map.get(projectId);
      let status;
      if (value != null) {
        status = value.status;
      }
      let tmp4 = status === voiceChannelPin.status;
      if (tmp4) {
        tmp4 = "pinned" !== value.status || "pinned" !== voiceChannelPin.status || value.channelId === voiceChannelPin.channelId;
        const tmp5 = "pinned" !== value.status || "pinned" !== voiceChannelPin.status || value.channelId === voiceChannelPin.channelId;
      }
      let flag = !tmp4;
      if (!tmp4) {
        const result = map.set(projectId, voiceChannelPin);
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  CONJURE_VOICE_CHANNEL_PIN_RESOLVED: function handleResolved(arg0) {
    ({ projectId, outcome } = arg0);
    value = map.get(projectId);
    let status;
    if (value != null) {
      status = value.status;
    }
    let tmp3 = status === outcome.status;
    if (tmp3) {
      tmp3 = "pinned" !== value.status || "pinned" !== outcome.status || value.channelId === outcome.channelId;
      const tmp4 = "pinned" !== value.status || "pinned" !== outcome.status || value.channelId === outcome.channelId;
    }
    let flag = !tmp3;
    if (!tmp3) {
      const result = map.set(projectId, outcome);
      flag = true;
    }
    return flag;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/ConjureVoiceChannelPinStore.tsx");

export default conjureVoiceChannelPinStore;