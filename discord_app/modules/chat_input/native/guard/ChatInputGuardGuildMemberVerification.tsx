// === Module 14246: ChatInputGuardGuildMemberVerification ===

// Module 14246 (ChatInputGuardGuildMemberVerification)
import util from "util" /* 1113 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5755 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5894 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 7043 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7079 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 14238 */;
import _modDef14247 from "module_14247" /* 14247 */;
import _modDef14248 from "module_14248" /* 14248 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

require = fn;
const TextAreaCta = fn(13027).TextAreaCta;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_7 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_7();
  const currentUserGuildJoinRequest = guildId(7055).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(5175).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef14247;
    const intl2 = tmp2(1113).intl;
    let stringResult = intl2.string(tmp2(1113).t.lk30cY);
    class I {
      constructor() {
        obj = closure_1(closure_2[10]);
        obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
        obj3 = closure_0(closure_2[11]);
        obj5 = { guildId, canWithdraw: false };
        result = obj3.openMemberVerificationRejectedAlert(obj5);
        return;
      }
    }
  } else if (tmp2(5175).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef14248;
    class I {
      constructor() {
        obj = closure_1(closure_2[10]);
        obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
        obj3 = closure_0(closure_2[11]);
        obj5 = { guildId, subtitleText: null };
        intl = closure_0(closure_2[9]).intl;
        obj5.subtitleText = intl.string(closure_0(closure_2[9]).t["13tjTU"]);
        result = obj3.openMemberVerificationCancelPendingAlert(obj5);
        return;
      }
    }
    stringResult = tmp11(tmp2(1113).t["5iLvSx"]);
    const tmp7 = jsx(tmp2(7195).XSmallIcon, {});
  } else {
    let intl = tmp2(1113).intl;
    stringResult = intl.string(tmp2(1113).t.rEBKvg);
    class I {
      constructor() {
        obj = closure_1(closure_2[10]);
        obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
        obj3 = closure_0(closure_2[14]);
        result = obj3.openMemberVerificationModal(guildId);
        return;
      }
    }
  }
  let obj = guildId(7055);
  items = [AccessibilityStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2Result = guildId(504);
  if (null != tmp8) {
    let obj2 = { style: tmp.noticeIcon, source: tmp8 };
    class I {
      constructor() {
        obj = closure_1(closure_2[10]);
        obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
        obj3 = closure_0(closure_2[14]);
        result = obj3.openMemberVerificationModal(guildId);
        return;
      }
    }
  } else {
    const obj3 = { style: tmp.lottieAnimation, source: null, autoPlay: null };
    LottieAnimationViewDefault;
    class I {
      constructor() {
        obj = closure_1(closure_2[10]);
        obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
        trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
        obj3 = closure_0(closure_2[14]);
        result = obj3.openMemberVerificationModal(guildId);
        return;
      }
    }
    obj3.autoPlay = !stateFromStores;
  }
  let obj4 = { type: "simple-action", icon: tmp18, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl3 = tmp2(1113).intl;
  obj4.actionLabel = intl3.string(guildId(1113).t["r8/DT+"]);
  obj4.actionOnPress = I;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp18, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});