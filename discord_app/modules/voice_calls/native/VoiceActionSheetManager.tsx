// discord_app/modules/voice_calls/native/VoiceActionSheetManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";

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
