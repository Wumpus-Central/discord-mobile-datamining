// discord_app/modules/video_calls/native/components/ChannelCallModalManager.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";
import LifecycleManager from "../../../../lib/LifecycleManager.tsx";

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
      tmp4 =
        null != channel &&
        applyArgumentsResult.inVoiceChannel &&
        applyArgumentsResult.inVoiceChannel !== isInChannelResult;
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
