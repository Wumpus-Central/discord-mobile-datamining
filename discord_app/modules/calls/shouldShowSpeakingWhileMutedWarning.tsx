// discord_app/modules/calls/shouldShowSpeakingWhileMutedWarning.tsx
import useAudienceRequestToSpeakState from "../stage_channels/useAudienceRequestToSpeakState.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
