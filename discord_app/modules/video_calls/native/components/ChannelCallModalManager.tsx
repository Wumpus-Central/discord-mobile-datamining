// === Module 10796: _initialize ===

// Module 10796 (_initialize)
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import "initialize";

let require = arg1;
class ChannelCallModalManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.inVoiceChannel = false;
    applyArgumentsResult.handleCloseModal = function handleCloseModal() {
      channel = channel.channel;
      const currentUser = outer1_3.getCurrentUser();
      let isInChannelResult = null != channel && null != currentUser;
      if (isInChannelResult) {
        isInChannelResult = outer1_4.isInChannel(channel.id, currentUser.id);
      }
      if (tmp4) {
        outer1_1(outer1_2[3]).wait(() => {
          const result = channel(outer1_2[4]).dismissVoiceChannelScreens(channel);
        });
        obj.terminate();
        const obj2 = outer1_1(outer1_2[3]);
      }
      channel.inVoiceChannel = isInChannelResult;
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
    isInChannelResult = updateVoiceState.isInChannel(channel.id, currentUser.id);
  }
  self.inVoiceChannel = isInChannelResult;
  updateVoiceState.addChangeListener(self.handleCloseModal);
};
prototype["_terminate"] = function _terminate() {
  updateVoiceState.removeChangeListener(this.handleCloseModal);
};
const channelCallModalManager = new ChannelCallModalManager();
let result = require("initialize").fileFinishedImporting("modules/video_calls/native/components/ChannelCallModalManager.tsx");

export default channelCallModalManager;