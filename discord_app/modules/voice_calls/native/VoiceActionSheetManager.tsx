// === Module 12699: _initialize ===

// Module 12699 (_initialize)
import initializeDefault from "initialize" /* 4726 */;
import closure_3 from "_detectH265HardwareDecode" /* 4501 */;
import closure_4 from "updateVoiceState" /* 4547 */;

let require = arg1;
initializeDefault;
class VoiceActionSheetManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.channel = null;
    applyArgumentsResult.handleOpenChannelCallModal = function handleOpenChannelCallModal() {
      channel = channel.channel;
      if (null != channel) {
        closure_1_1(closure_1_2[3]).wait(() => {
          const result = channel(closure_1_2[4]).dismissVoiceChannelScreens(channel);
          const obj = channel(closure_1_2[4]);
          channel(closure_1_2[4]).openChannelCallModal(channel);
        });
        channel.terminate();
        const obj2 = closure_1_1(closure_1_2[3]);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = VoiceActionSheetManager.prototype;
prototype["_initialize"] = function _initialize(channel) {
  this.channel = channel;
  closure_4.addChangeListener(this.handleOpenChannelCallModal);
  closure_3.addChangeListener(this.handleOpenChannelCallModal);
};
prototype["_terminate"] = function _terminate() {
  closure_4.removeChangeListener(this.handleOpenChannelCallModal);
  closure_3.removeChangeListener(this.handleOpenChannelCallModal);
};
const voiceActionSheetManager = new VoiceActionSheetManager();
let result = require("set").fileFinishedImporting("modules/voice_calls/native/VoiceActionSheetManager.tsx");

export default voiceActionSheetManager;