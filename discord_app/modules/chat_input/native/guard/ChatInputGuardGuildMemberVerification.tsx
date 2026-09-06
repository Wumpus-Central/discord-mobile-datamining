// === Module 12456: ChatInputGuardGuildMemberVerification ===

// Module 12456 (ChatInputGuardGuildMemberVerification)
import util from "util" /* 1114 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5527 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5569 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12448 */;
import _modDef12457 from "module_12457" /* 12457 */;
import _modDef12458 from "module_12458" /* 12458 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const LottieAnimationViewDefault = tmp14(5529);
require = fn;
const Image = fn(17).Image;
const TextAreaCta = fn(11962).TextAreaCta;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_8();
  let obj = guildId(5545);
  const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4384).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef12457;
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp2(1114).t.lk30cY);
    let fn = function _() {
      let obj = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
      obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj);
      obj = { guildId, canWithdraw: false };
      const result = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj);
    };
  } else if (tmp2(4384).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef12458;
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
    const tmp7 = jsx(tmp2(5680).XSmallIcon, {});
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
    let tmp13Result = tmp13(Image, obj);
  } else {
    obj = { style: tmp.lottieAnimation, source: tmp2(12459), autoPlay: !stateFromStores };
    tmp13Result = tmp13(LottieAnimationViewDefault, obj);
    const tmp14Result = LottieAnimationViewDefault;
  }
  const obj1 = { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl4 = tmp2(1114).intl;
  obj1.actionLabel = intl4.string(guildId(1114).t["r8/DT+"]);
  obj1.actionOnPress = fn;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});