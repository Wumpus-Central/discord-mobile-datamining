// discord_app/modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import MemberVerificationAlertActionCreators from "../../../guild_member_verification/native/MemberVerificationAlertActionCreators.tsx";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import MemberVerificationModalActionCreators from "../../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import _modDef12592 from "../../../../../_runtime/metro/12592__.js";
import _modDef12593 from "../../../../../_runtime/metro/12593__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const Image = fn(17).Image;
const TextAreaCta = fn(12096).TextAreaCta;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_8 = createStyles.createStyles({
  noticeIcon: { height: 36, width: 36, resizeMode: "contain" },
  lottieAnimation: { height: 36, width: 36 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_8();
  const currentUserGuildJoinRequest = guildId(5630).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4464).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef12592;
    const intl3 = tmp2(1115).intl;
    let stringResult = intl3.string(tmp2(1115).t.lk30cY);
    let fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, {
        cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED,
      });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
      const result = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert({
        guildId,
        canWithdraw: false,
      });
    };
  } else if (tmp2(4464).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef12593;
    const intl2 = tmp2(1115).intl;
    stringResult = intl2.string(tmp2(1115).t["5iLvSx"]);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, {
        cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED,
      });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
      const obj4 = { guildId, subtitleText: null };
      const intl = util.intl;
      obj4.subtitleText = intl.string(util.t["13tjTU"]);
      const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj4);
    };
    const tmp7 = jsx(tmp2(5765).XSmallIcon, {});
  } else {
    let intl = tmp2(1115).intl;
    stringResult = intl.string(tmp2(1115).t.rEBKvg);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, {
        cta_type: TextAreaCta.MEMBER_VERIFICATION,
      });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
      const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
    };
  }
  let obj = guildId(5630);
  const items = [AccessibilityStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2Result = guildId(504);
  if (null != tmp8) {
    let obj2 = { style: tmp.noticeIcon, source: tmp8 };
    let tmp13Result = <Image style={tmp.noticeIcon} source={tmp8} />;
  } else {
    const obj3 = { style: tmp.lottieAnimation, source: tmp2(12594), autoPlay: !stateFromStores };
    tmp13Result = jsx(LottieAnimationViewDefault, {
      style: tmp.lottieAnimation,
      source: tmp2(12594),
      autoPlay: !stateFromStores,
    });
    const tmp14Result = LottieAnimationViewDefault;
  }
  let obj4 = {
    type: "simple-action",
    icon: tmp13Result,
    message: stringResult,
    actionIcon: tmp7,
    actionLabel: null,
    actionOnPress: null,
  };
  const intl4 = tmp2(1115).intl;
  obj4.actionLabel = intl4.string(guildId(1115).t["r8/DT+"]);
  obj4.actionOnPress = fn;
  return jsx(ChatInputGuardDefault, {
    type: "simple-action",
    icon: tmp13Result,
    message: stringResult,
    actionIcon: tmp7,
    actionLabel: null,
    actionOnPress: null,
  });
});
