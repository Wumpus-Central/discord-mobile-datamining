// === Module 13341: ChatInputGuardGuildMemberVerification ===

// Module 13341 (ChatInputGuardGuildMemberVerification)
import util from "util" /* 1112 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5498 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5650 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6518 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7286 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 13333 */;
import _modDef13343 from "module_13343" /* 13343 */;
import _modDef13344 from "module_13344" /* 13344 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;

require = fn;
const TextAreaCta = fn(12825).TextAreaCta;
const AnalyticEvents = fn(1071).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4913);
let closure_7 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_7();
  const currentUserGuildJoinRequest = guildId(13342).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4949).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef13343;
    const intl2 = tmp2(1112).intl;
    let stringResult = intl2.string(tmp2(1112).t.lk30cY);
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
  } else if (tmp2(4949).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef13344;
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
    stringResult = tmp11(tmp2(1112).t["5iLvSx"]);
    const tmp7 = jsx(tmp2(7151).XSmallIcon, {});
  } else {
    let intl = tmp2(1112).intl;
    stringResult = intl.string(tmp2(1112).t.rEBKvg);
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
  let obj = guildId(13342);
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
  const intl3 = tmp2(1112).intl;
  obj4.actionLabel = intl3.string(guildId(1112).t["r8/DT+"]);
  obj4.actionOnPress = I;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp18, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
});