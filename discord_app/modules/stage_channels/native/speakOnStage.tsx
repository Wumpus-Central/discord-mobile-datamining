// === Module 11339: speakOnStage ===

// Module 11339 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6786 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6816 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8018 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8028 */;
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