// === Module 12714: ChatInputGuardGuildMemberVerification ===

// Module 12714 (ChatInputGuardGuildMemberVerification)
import util from "util" /* 1115 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4937 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5746 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5748 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5788 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12706 */;
import _modDef12715 from "module_12715" /* 12715 */;
import _modDef12716 from "module_12716" /* 12716 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

require = fn;
const Image = fn(17).Image;
const TextAreaCta = fn(12219).TextAreaCta;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_8 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_8();
  const currentUserGuildJoinRequest = guildId(5764).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4581).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef12715;
    const intl3 = tmp2(1115).intl;
    let stringResult = intl3.string(tmp2(1115).t.lk30cY);
    let fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
      const result = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert({ guildId, canWithdraw: false });
    };
  } else if (tmp2(4581).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef12716;
    const intl2 = tmp2(1115).intl;
    stringResult = intl2.string(tmp2(1115).t["5iLvSx"]);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
      const obj4 = { guildId, subtitleText: null };
      const intl = util.intl;
      obj4.subtitleText = intl.string(util.t["13tjTU"]);
      const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj4);
    };
    const tmp7 = jsx(tmp2(5899).XSmallIcon, {});
  } else {
    let intl = tmp2(1115).intl;
    stringResult = intl.string(tmp2(1115).t.rEBKvg);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
      const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
    };
  }
  let obj = guildId(5764);
  const items = [AccessibilityStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2Result = guildId(504);
  if (null != tmp8) {
    let obj2 = { style: tmp.noticeIcon, source: tmp8 };
    let tmp13Result = <Image style={tmp.noticeIcon} source={tmp8} />;
  } else {
    const obj3 = { style: tmp.lottieAnimation, source: tmp2(12717), autoPlay: !stateFromStores };
    tmp13Result = jsx(LottieAnimationViewDefault, { style: tmp.lottieAnimation, source: tmp2(12717), autoPlay: !stateFromStores });
    const tmp14Result = LottieAnimationViewDefault;
  }
  let obj4 = { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl4 = tmp2(1115).intl;
  obj4.actionLabel = intl4.string(guildId(1115).t["r8/DT+"]);
  obj4.actionOnPress = fn;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});