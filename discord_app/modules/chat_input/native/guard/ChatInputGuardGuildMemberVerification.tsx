// === Module 12585: ChatInputGuardGuildMemberVerification ===

// Module 12585 (ChatInputGuardGuildMemberVerification)
import util from "util" /* 1114 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4816 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5608 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5610 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5650 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12577 */;
import _modDef12586 from "module_12586" /* 12586 */;
import _modDef12587 from "module_12587" /* 12587 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const Image = fn(17).Image;
const TextAreaCta = fn(12091).TextAreaCta;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let closure_8 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_8();
  let obj = guildId(5626);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4461).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef12586;
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp2(1114).t.lk30cY);
    let fn = function _() {
      let obj = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
      obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj);
      obj = { guildId, canWithdraw: false };
      const result = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj);
    };
  } else if (tmp2(4461).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef12587;
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t["5iLvSx"]);
    fn = function _() {
      let obj = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
      obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj);
      obj = { guildId, subtitleText: null };
      const intl = util.intl;
      obj.subtitleText = intl.string(util.t["13tjTU"]);
      const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj);
    };
    const tmp7 = jsx(tmp2(5761).XSmallIcon, {});
  } else {
    let intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.rEBKvg);
    fn = function _() {
      const obj = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
      obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj);
      const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
    };
  }
  const items = [AccessibilityStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2Result = guildId(504);
  if (null != tmp8) {
    obj = { style: tmp.noticeIcon, source: tmp8 };
    let tmp13Result = <Image style={tmp.noticeIcon} source={tmp8} />;
  } else {
    obj = { style: tmp.lottieAnimation, source: tmp2(12588), autoPlay: !stateFromStores };
    tmp13Result = jsx(LottieAnimationViewDefault, { style: tmp.lottieAnimation, source: tmp2(12588), autoPlay: !stateFromStores });
    const tmp14Result = LottieAnimationViewDefault;
  }
  const obj1 = { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl4 = tmp2(1114).intl;
  obj1.actionLabel = intl4.string(guildId(1114).t["r8/DT+"]);
  obj1.actionOnPress = fn;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});