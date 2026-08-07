// discord_app/modules/media_engine/native/VoiceProcessingErrorManager.tsx
import "initialize";

let require = arg1;
let prototype = function VoiceProcessingErrorManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR() {
      return applyArgumentsResult.handleNoiseCancellationError();
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR() {
      return applyArgumentsResult.handleVoiceActivityDetectionError();
    }
  };
  applyArgumentsResult.handleNoiseCancellationError = function handleNoiseCancellationError() {
    const result = applyArgumentsResult(4001).presentNoiseCancellationError();
  };
  applyArgumentsResult.handleVoiceActivityDetectionError = function handleVoiceActivityDetectionError() {
    const result = applyArgumentsResult(4001).presentVoiceActivityDetectionError();
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/media_engine/native/VoiceProcessingErrorManager.tsx");

export default prototype;