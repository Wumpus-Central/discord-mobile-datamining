// === Module 18249: VoiceChannelAppStore ===

// Module 18249 (VoiceChannelAppStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

const dependencyMap = {};
const Store = initializeDefault.Store;
class VoiceChannelAppStore extends Store {
}
VoiceChannelAppStore.prototype["isAppVisible"] = function isAppVisible(id, arg1) {
  let tmp = arg1;
  if (arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    let tmp4 = dependencyMap[id];
    if (tmp4 == null) {
      tmp4 = flag;
    }
    tmp = tmp4;
  }
  return tmp;
};
VoiceChannelAppStore.displayName = "VoiceChannelAppStore";
const voiceChannelAppStore = new VoiceChannelAppStore(DispatcherDefault, {
  VOICE_CHANNEL_APP_SURFACE_TOGGLE: function handleToggle(channelId) {
    channelId = channelId.channelId;
    let flag = dependencyMap[channelId];
    if (flag == null) {
      flag = true;
    }
    dependencyMap[channelId] = !flag;
  },
  VOICE_CHANNEL_APP_CLOSE: function handleClose(channelId) {
    channelId = channelId.channelId;
    if (false === dependencyMap[channelId]) {
      return false;
    } else {
      tmp[channelId] = false;
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    currentVoiceChannelId = currentVoiceChannelId.currentVoiceChannelId;
    let tmp3 = null != currentVoiceChannelId && currentVoiceChannelId !== currentVoiceChannelId.channelId;
    if (tmp3) {
      if (undefined !== dependencyMap[currentVoiceChannelId]) {
        delete tmp[tmp2];
      }
      tmp3 = tmp5;
    }
    return tmp3;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/VoiceChannelAppStore.tsx");

export default voiceChannelAppStore;