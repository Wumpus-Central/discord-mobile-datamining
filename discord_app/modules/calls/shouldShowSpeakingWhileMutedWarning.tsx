// === Module 19437: shouldShowSpeakingWhileMutedWarning ===

// Module 19437 (shouldShowSpeakingWhileMutedWarning)
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 6803 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/calls/shouldShowSpeakingWhileMutedWarning.tsx");

export default function shouldShowSpeakingWhileMutedWarning(isGuildStageVoice, mute, arg2) {
  let tmp = !arg2;
  if (!arg2) {
    mute = undefined;
    if (mute != null) {
      mute = mute.mute;
    }
    tmp = !mute;
  }
  if (tmp) {
    let isGuildStageVoiceResult;
    if (isGuildStageVoice != null) {
      isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
    }
    let tmp7 = !isGuildStageVoiceResult;
    if (isGuildStageVoiceResult) {
      const audienceRequestToSpeakState = useAudienceRequestToSpeakState.getAudienceRequestToSpeakState(mute);
      tmp7 = audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
    }
    tmp = tmp7;
  }
  return tmp;
};