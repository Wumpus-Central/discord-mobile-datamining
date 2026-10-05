// discord_app/modules/media_engine/native/VoiceProcessingErrorManager.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class VoiceProcessingErrorManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      MEDIA_ENGINE_NOISE_CANCELLATION_ERROR() {
        return require.handleNoiseCancellationError();
      },
      MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR() {
        return require.handleVoiceActivityDetectionError();
      },
    };
    applyArgumentsResult.handleNoiseCancellationError = function handleNoiseCancellationError() {
      const obj = ToastUtils;
      const result = obj.presentNoiseCancellationError();
    };
    applyArgumentsResult.handleVoiceActivityDetectionError = function handleVoiceActivityDetectionError() {
      const obj = ToastUtils;
      const result = obj.presentVoiceActivityDetectionError();
    };
    return applyArgumentsResult;
  }
}
const voiceProcessingErrorManager = new VoiceProcessingErrorManager();
let result = size.fileFinishedImporting("modules/media_engine/native/VoiceProcessingErrorManager.tsx");

export default voiceProcessingErrorManager;
