// === Module 12400: speakOnStage ===

// Module 12400 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6818 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6906 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 6907 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8201 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/stage_channels/native/speakOnStage.tsx");

export default function speakOnStage(id) {
  if (obj.shouldAgeVerifyToSpeakForCurrentUser(id.id)) {
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
    const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
  } else {
    const result1 = StageChannelActionCreators.audienceAckRequestToSpeak(id, false);
    const tmpResult = StageChannelActionCreators;
  }
  obj = useStageSpeakingForCurrentUser;
};