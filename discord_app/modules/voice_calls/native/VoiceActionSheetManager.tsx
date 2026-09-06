// === Module 13766: VoiceActionSheetManager ===

// Module 13766 (VoiceActionSheetManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

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
          const result = applyArgumentsResult(4767).dismissVoiceChannelScreens(channel);
          const obj = applyArgumentsResult(4767);
          applyArgumentsResult(4767).openChannelCallModal(channel);
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