// discord_app/modules/voice_calls/native/VoiceActionSheetManager.tsx
import dispatcherDefault from "../../../Dispatcher.tsx";
import initializeDefault from "../../../lib/LifecycleManager.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import updateVoiceState from "../../../stores/VoiceStateStore.tsx";

let require = fn;
initializeDefault;
class VoiceActionSheetManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.channel = null;
    applyArgumentsResult.handleOpenChannelCallModal = function handleOpenChannelCallModal() {
      channel = channel.channel;
      if (null != channel) {
        dispatcherDefault.wait(() => {
          const result = channel(closure_1_2[4]).dismissVoiceChannelScreens(channel);
          const obj = channel(closure_1_2[4]);
          channel(closure_1_2[4]).openChannelCallModal(channel);
        });
        obj.terminate();
      }
      obj = channel;
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
let result = require("obj132").fileFinishedImporting("modules/voice_calls/native/VoiceActionSheetManager.tsx");

export default voiceActionSheetManager;