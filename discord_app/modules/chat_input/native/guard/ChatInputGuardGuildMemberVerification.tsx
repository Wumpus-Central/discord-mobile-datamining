// === Module 12145: ChatInputGuardGuildMemberVerification ===

// Module 12145 (ChatInputGuardGuildMemberVerification)
import util from "util" /* 1126 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5106 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6109 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 6112 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6151 */;
import FastImageDefault from "FastImage" /* 6163 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12122 */;
import _modDef12146 from "module_12146" /* 12146 */;
import _modDef12147 from "module_12147" /* 12147 */;
import _mod12148 from "module_12148" /* 12148 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

require = fn;
const TextAreaCta = fn(11588).TextAreaCta;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ noticeIcon: { height: 36, width: 36, resizeMode: "contain" }, lottieAnimation: { height: 36, width: 36 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputGuardGuildMemberVerification(guildId) {
  const cResult = guildId(stateFromStores[7]).c(25);
  guildId = guildId.guildId;
  let noticeIcon = closure_7();
  let obj = guildId(stateFromStores[7]);
  const currentUserGuildJoinRequest = guildId(stateFromStores[8]).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(stateFromStores[9]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const _Symbol3 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[11]).intl;
      const stringResult = intl2.string(tmp(tmp2[11]).t.lk30cY);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== guildId) {
      const fn = function b() {
        AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED });
        const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
        const result = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert({ guildId, canWithdraw: false });
      };
      cResult[1] = guildId;
      cResult[2] = fn;
    }
    const tmp21 = noticeIcon(tmp2[10]);
  } else {
    if (tmp(tmp2[9]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = jsx(tmp(tmp2[15]).XSmallIcon, {});
        cResult[3] = tmp16;
      }
      const _Symbol2 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(tmp2[11]).intl;
        const stringResult1 = intl.string(tmp(tmp2[11]).t["5iLvSx"]);
        cResult[4] = stringResult1;
      }
      if (cResult[5] !== guildId) {
        class S {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[13]);
            obj5 = { guildId, subtitleText: null };
            intl = closure_0(closure_2[11]).intl;
            obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
            result = obj3.openMemberVerificationCancelPendingAlert(obj5);
            return;
          }
        }
        cResult[5] = guildId;
        cResult[6] = S;
      } else {
        class S {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[13]);
            obj5 = { guildId, subtitleText: null };
            intl = closure_0(closure_2[11]).intl;
            obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
            result = obj3.openMemberVerificationCancelPendingAlert(obj5);
            return;
          }
        }
      }
      const tmp10 = noticeIcon(tmp2[14]);
      const tmp12 = noticeIcon(tmp2[14]);
    } else {
      class S {
        constructor() {
          obj = closure_1(closure_2[12]);
          obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
          obj3 = closure_0(closure_2[13]);
          obj5 = { guildId, subtitleText: null };
          intl = closure_0(closure_2[11]).intl;
          obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
          result = obj3.openMemberVerificationCancelPendingAlert(obj5);
          return;
        }
      }
      const _Symbol5 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[13]);
            obj5 = { guildId, subtitleText: null };
            intl = closure_0(closure_2[11]).intl;
            obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
            result = obj3.openMemberVerificationCancelPendingAlert(obj5);
            return;
          }
        }
        const stringResult2 = obj3.string(tmp(tmp2[11]).t.rEBKvg);
        cResult[7] = stringResult2;
      } else {
        class S {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[13]);
            obj5 = { guildId, subtitleText: null };
            intl = closure_0(closure_2[11]).intl;
            obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
            result = obj3.openMemberVerificationCancelPendingAlert(obj5);
            return;
          }
        }
      }
      if (cResult[8] !== guildId) {
        class S {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[13]);
            obj5 = { guildId, subtitleText: null };
            intl = closure_0(closure_2[11]).intl;
            obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
            result = obj3.openMemberVerificationCancelPendingAlert(obj5);
            return;
          }
        }
        cResult[8] = guildId;
        cResult[9] = D;
      } else {
        class S {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[13]);
            obj5 = { guildId, subtitleText: null };
            intl = closure_0(closure_2[11]).intl;
            obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
            result = obj3.openMemberVerificationCancelPendingAlert(obj5);
            return;
          }
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          obj = closure_1(closure_2[12]);
          obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
          obj3 = closure_0(closure_2[13]);
          obj5 = { guildId, subtitleText: null };
          intl = closure_0(closure_2[11]).intl;
          obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
          result = obj3.openMemberVerificationCancelPendingAlert(obj5);
          return;
        }
      }
      const items = [AccessibilityStore];
      class A {
        constructor() {
          return closure_1_3.useReducedMotion;
        }
      }
      cResult[10] = items;
      cResult[11] = A;
      let tmp31 = A;
      const tmp30 = items;
    } else {
      class S {
        constructor() {
          obj = closure_1(closure_2[12]);
          obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
          obj3 = closure_0(closure_2[13]);
          obj5 = { guildId, subtitleText: null };
          intl = closure_0(closure_2[11]).intl;
          obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
          result = obj3.openMemberVerificationCancelPendingAlert(obj5);
          return;
        }
      }
      tmp31 = cResult[11];
    }
    stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp30, tmp31);
    if (cResult[12] === noticeIcon.lottieAnimation) {
      class S {
        constructor() {
          obj = closure_1(closure_2[12]);
          obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
          trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
          obj3 = closure_0(closure_2[13]);
          obj5 = { guildId, subtitleText: null };
          intl = closure_0(closure_2[11]).intl;
          obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
          result = obj3.openMemberVerificationCancelPendingAlert(obj5);
          return;
        }
      }
      if (cResult[15] === tmp10) {
        class S {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[13]);
            obj5 = { guildId, subtitleText: null };
            intl = closure_0(closure_2[11]).intl;
            obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
            result = obj3.openMemberVerificationCancelPendingAlert(obj5);
            return;
          }
        }
      }
      if (null != tmp10) {
        class S {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[13]);
            obj5 = { guildId, subtitleText: null };
            intl = closure_0(closure_2[11]).intl;
            obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
            result = obj3.openMemberVerificationCancelPendingAlert(obj5);
            return;
          }
        }
        let obj4 = { style: null, source: null };
        class A {
          constructor() {
            return closure_1_3.useReducedMotion;
          }
        }
        obj4.source = tmp10;
        const tmp34 = jsx(noticeIcon(tmp2[20]), { style: null, source: null });
      } else {
        class S {
          constructor() {
            obj = closure_1(closure_2[12]);
            obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
            trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
            obj3 = closure_0(closure_2[13]);
            obj5 = { guildId, subtitleText: null };
            intl = closure_0(closure_2[11]).intl;
            obj5.subtitleText = intl.string(closure_0(closure_2[11]).t["13tjTU"]);
            result = obj3.openMemberVerificationCancelPendingAlert(obj5);
            return;
          }
        }
      }
      class A {
        constructor() {
          return closure_1_3.useReducedMotion;
        }
      }
      cResult[15] = tmp10;
      cResult[16] = tmp33;
      noticeIcon = noticeIcon.noticeIcon;
      cResult[17] = noticeIcon;
      cResult[18] = tmp34;
    }
    function renderAnimation() {
      const obj = { style: noticeIcon.lottieAnimation, source: _mod12148, autoPlay: !stateFromStores };
      return jsx(LottieAnimationViewDefault, { style: noticeIcon.lottieAnimation, source: _mod12148, autoPlay: !stateFromStores });
    }
    cResult[12] = noticeIcon.lottieAnimation;
    cResult[13] = stateFromStores;
    cResult[14] = renderAnimation;
    tmp33 = renderAnimation;
    const tmpResult = tmp(tmp2[17]);
  }
  let obj2 = guildId(stateFromStores[8]);
}) : (function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_7();
  const currentUserGuildJoinRequest = guildId(6127).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(4903).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef12146;
    const intl3 = tmp2(1126).intl;
    let stringResult = intl3.string(tmp2(1126).t.lk30cY);
    let fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
      const result = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert({ guildId, canWithdraw: false });
    };
  } else if (tmp2(4903).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef12147;
    const intl2 = tmp2(1126).intl;
    stringResult = intl2.string(tmp2(1126).t["5iLvSx"]);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
      const obj4 = { guildId, subtitleText: null };
      const intl = util.intl;
      obj4.subtitleText = intl.string(util.t["13tjTU"]);
      const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj4);
    };
    const tmp7 = jsx(tmp2(6212).XSmallIcon, {});
  } else {
    let intl = tmp2(1126).intl;
    stringResult = intl.string(tmp2(1126).t.rEBKvg);
    fn = function _() {
      AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.MEMBER_VERIFICATION });
      const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
      const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
    };
  }
  let obj = guildId(6127);
  const items = [AccessibilityStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2Result = guildId(504);
  if (null != tmp8) {
    let obj2 = { style: tmp.noticeIcon, source: tmp8 };
    let tmp13Result = jsx(FastImageDefault, { style: tmp.noticeIcon, source: tmp8 });
  } else {
    const obj3 = { style: tmp.lottieAnimation, source: tmp2(12148), autoPlay: !stateFromStores };
    tmp13Result = jsx(LottieAnimationViewDefault, { style: tmp.lottieAnimation, source: tmp2(12148), autoPlay: !stateFromStores });
    const tmp14Result = LottieAnimationViewDefault;
  }
  let obj4 = { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null };
  const intl4 = tmp2(1126).intl;
  obj4.actionLabel = intl4.string(guildId(1126).t["r8/DT+"]);
  obj4.actionOnPress = fn;
  return jsx(ChatInputGuardDefault, { type: "simple-action", icon: tmp13Result, message: stringResult, actionIcon: tmp7, actionLabel: null, actionOnPress: null });
}));