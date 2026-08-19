// discord_app/modules/video_calls/native/components/ChannelCallModalManager.tsx
import dispatcherDefault from "../../../../Dispatcher.tsx";
import initializeDefault from "../../../../lib/LifecycleManager.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import updateVoiceState from "../../../../stores/VoiceStateStore.tsx";

let require = fn;
initializeDefault;
class ChannelCallModalManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.inVoiceChannel = false;
    applyArgumentsResult.handleCloseModal = function handleCloseModal() {
      channel = channel.channel;
      const currentUser = closure_1_3.getCurrentUser();
      let isInChannelResult = null != channel && null != currentUser;
      if (isInChannelResult) {
        isInChannelResult = closure_1_4.isInChannel(channel.id, currentUser.id);
      }
      if (tmp4) {
        dispatcherDefault.wait(() => {
          const result = channel(closure_1_2[4]).dismissVoiceChannelScreens(channel);
        });
        obj.terminate();
      }
      channel.inVoiceChannel = isInChannelResult;
      tmp4 = null != channel && channel.inVoiceChannel && channel.inVoiceChannel !== isInChannelResult;
    };
    return applyArgumentsResult;
  }
}
const prototype = ChannelCallModalManager.prototype;
prototype["_initialize"] = function _initialize(channel) {
  const self = this;
  this.channel = channel;
  currentUser = currentUser.getCurrentUser();
  let isInChannelResult = null != channel && null != currentUser;
  if (isInChannelResult) {
    isInChannelResult = closure_4.isInChannel(channel.id, currentUser.id);
  }
  self.inVoiceChannel = isInChannelResult;
  closure_4.addChangeListener(self.handleCloseModal);
};
prototype["_terminate"] = function _terminate() {
  closure_4.removeChangeListener(this.handleCloseModal);
};
const channelCallModalManager = new ChannelCallModalManager();
let result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/ChannelCallModalManager.tsx");

export default channelCallModalManager;