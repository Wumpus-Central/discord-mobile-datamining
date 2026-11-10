// === Module 15488: VoiceActionSheetManager ===

// Module 15488 (VoiceActionSheetManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import VoiceStateStore from "VoiceStateStore" /* 5805 */;
import LifecycleManager from "LifecycleManager" /* 2120 */;

let require = fn;
class VoiceActionSheetManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.channel = null;
    applyArgumentsResult.handleOpenChannelCallModal = function handleOpenChannelCallModal() {
      const channel = applyArgumentsResult.channel;
      if (null != channel) {
        DispatcherDefault.wait(() => {
          const result = applyArgumentsResult(8012).dismissVoiceChannelScreens(channel);
          const obj = applyArgumentsResult(8012);
          applyArgumentsResult(8012).openChannelCallModal(channel);
        });
        applyArgumentsResult.terminate();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = VoiceActionSheetManager.prototype;
prototype["_initialize"] = function _initialize(channel) {
  this.channel = channel;
  VoiceStateStore.addChangeListener(this.handleOpenChannelCallModal);
  MediaEngineStore.addChangeListener(this.handleOpenChannelCallModal);
};
prototype["_terminate"] = function _terminate() {
  VoiceStateStore.removeChangeListener(this.handleOpenChannelCallModal);
  MediaEngineStore.removeChangeListener(this.handleOpenChannelCallModal);
};
const voiceActionSheetManager = new VoiceActionSheetManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/VoiceActionSheetManager.tsx");

export default voiceActionSheetManager;