// === Module 9656: _initialize ===

// Module 9656 (_initialize)
import initializeDefault from "initialize" /* 1898 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;
import closure_4 from "updateVoiceState" /* 4579 */;

let require = arg1;
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
        closure_1_1(closure_1_2[3]).wait(() => {
          const result = channel(closure_1_2[4]).dismissVoiceChannelScreens(channel);
        });
        obj.terminate();
        const obj2 = closure_1_1(closure_1_2[3]);
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
    isInChannelResult = closure_4.isInChannel(channel.id, currentUser.id);
  }
  self.inVoiceChannel = isInChannelResult;
  closure_4.addChangeListener(self.handleCloseModal);
};
prototype["_terminate"] = function _terminate() {
  closure_4.removeChangeListener(this.handleCloseModal);
};
const channelCallModalManager = new ChannelCallModalManager();
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/ChannelCallModalManager.tsx");

export default channelCallModalManager;