// === Module 17689: VoiceProcessingErrorManager ===

// Module 17689 (VoiceProcessingErrorManager)
import ToastUtils from "ToastUtils" /* 4573 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

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
      }
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