// === Module 10927: ChannelCallModalManager ===

// Module 10927 (ChannelCallModalManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserStore from "UserStore" /* 1390 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import LifecycleManager from "LifecycleManager" /* 2002 */;

let require = fn;
class ChannelCallModalManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.inVoiceChannel = false;
    applyArgumentsResult.handleCloseModal = function handleCloseModal() {
      const channel = applyArgumentsResult.channel;
      const currentUser = UserStore.getCurrentUser();
      let isInChannelResult = null != channel && null != currentUser;
      if (isInChannelResult) {
        isInChannelResult = VoiceStateStore.isInChannel(channel.id, currentUser.id);
      }
      if (tmp4) {
        DispatcherDefault.wait(() => {
          const result = applyArgumentsResult(dependencyMap[4]).dismissVoiceChannelScreens(channel);
        });
        applyArgumentsResult.terminate();
      }
      applyArgumentsResult.inVoiceChannel = isInChannelResult;
      tmp4 = null != channel && applyArgumentsResult.inVoiceChannel && applyArgumentsResult.inVoiceChannel !== isInChannelResult;
    };
    return applyArgumentsResult;
  }
}
const prototype = ChannelCallModalManager.prototype;
prototype["_initialize"] = function _initialize(channel) {
  const self = this;
  this.channel = channel;
  const currentUser = UserStore.getCurrentUser();
  let isInChannelResult = null != channel && null != currentUser;
  if (isInChannelResult) {
    isInChannelResult = VoiceStateStore.isInChannel(channel.id, currentUser.id);
  }
  self.inVoiceChannel = isInChannelResult;
  VoiceStateStore.addChangeListener(self.handleCloseModal);
};
prototype["_terminate"] = function _terminate() {
  VoiceStateStore.removeChangeListener(this.handleCloseModal);
};
const channelCallModalManager = new ChannelCallModalManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallModalManager.tsx");

export default channelCallModalManager;