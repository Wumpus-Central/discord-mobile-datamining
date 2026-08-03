// === Module 12905: _initialize ===

// Module 12905 (_initialize)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import updateVoiceState from "updateVoiceState";
import "initialize";

let require = arg1;
class VoiceActionSheetManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.channel = null;
    applyArgumentsResult.handleOpenChannelCallModal = function handleOpenChannelCallModal() {
      channel = channel.channel;
      if (null != channel) {
        outer1_1(outer1_2[3]).wait(() => {
          const result = channel(outer1_2[4]).dismissVoiceChannelScreens(channel);
          const obj = channel(outer1_2[4]);
          channel(outer1_2[4]).openChannelCallModal(channel);
        });
        channel.terminate();
        const obj2 = outer1_1(outer1_2[3]);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = VoiceActionSheetManager.prototype;
prototype["_initialize"] = function _initialize(channel) {
  this.channel = channel;
  updateVoiceState.addChangeListener(this.handleOpenChannelCallModal);
  _detectH265HardwareDecode.addChangeListener(this.handleOpenChannelCallModal);
};
prototype["_terminate"] = function _terminate() {
  updateVoiceState.removeChangeListener(this.handleOpenChannelCallModal);
  _detectH265HardwareDecode.removeChangeListener(this.handleOpenChannelCallModal);
};
const voiceActionSheetManager = new VoiceActionSheetManager();
let result = require("initialize").fileFinishedImporting("modules/voice_calls/native/VoiceActionSheetManager.tsx");

export default voiceActionSheetManager;