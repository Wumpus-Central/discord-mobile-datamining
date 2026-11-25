// === Module 11706: speakOnStage ===

// Module 11706 (speakOnStage)
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6797 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6823 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7805 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7836 */;
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