// discord_app/modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx
import util from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import MemberVerificationAlertActionCreators from "../../../guild_member_verification/native/MemberVerificationAlertActionCreators.tsx";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import MemberVerificationModalActionCreators from "../../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import _modDef12128 from "../../../../../_runtime/metro/12128__.js";
import _modDef12129 from "../../../../../_runtime/metro/12129__.js";
import _mod12130 from "../../../../../_runtime/metro/12130__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const Image = fn(17).Image;
const TextAreaCta = fn(11589).TextAreaCta;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({
  noticeIcon: { height: 36, width: 36, resizeMode: "contain" },
  lottieAnimation: { height: 36, width: 36 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildId) => {
        const cResult = guildId(stateFromStores[8]).c(25);
        guildId = guildId.guildId;
        let noticeIcon = closure_8();
        let obj = guildId(stateFromStores[8]);
        const currentUserGuildJoinRequest = guildId(stateFromStores[9]).useCurrentUserGuildJoinRequest(guildId);
        let applicationStatus;
        if (currentUserGuildJoinRequest != null) {
          applicationStatus = currentUserGuildJoinRequest.applicationStatus;
        }
        if (guildId(stateFromStores[10]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const _Symbol3 = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[12]).intl;
            const stringResult = intl3.string(tmp(tmp2[12]).t.lk30cY);
            cResult[0] = stringResult;
            let first = stringResult;
          } else {
            first = cResult[0];
          }
          if (cResult[1] !== guildId) {
            const fn2 = function y() {
              AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, {
                cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED,
              });
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
              const result = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert({
                guildId,
                canWithdraw: false,
              });
            };
            cResult[1] = guildId;
            cResult[2] = fn2;
          }
          const tmp21 = noticeIcon(tmp2[11]);
        } else {
          if (tmp(tmp2[10]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
            const _Symbol = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp16 = jsx(tmp(tmp2[16]).XSmallIcon, {});
              cResult[3] = tmp16;
            }
            const _Symbol2 = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[12]).intl;
              const stringResult1 = intl2.string(tmp(tmp2[12]).t["5iLvSx"]);
              cResult[4] = stringResult1;
            }
            if (cResult[5] !== guildId) {
              const fn = function v() {
                AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, {
                  cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED,
                });
                const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
                const obj4 = { guildId, subtitleText: null };
                const intl = util.intl;
                obj4.subtitleText = intl.string(util.t["13tjTU"]);
                const result = MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert(obj4);
              };
              cResult[5] = guildId;
              cResult[6] = fn;
            }
            const tmp10 = noticeIcon(tmp2[15]);
            const tmp12 = noticeIcon(tmp2[15]);
          } else {
            const _Symbol5 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              let intl = tmp(tmp2[12]).intl;
              const stringResult2 = intl.string(tmp(tmp2[12]).t.rEBKvg);
              cResult[7] = stringResult2;
            }
            if (cResult[8] !== guildId) {
              class V {
                constructor() {
                  obj = closure_1(closure_2[13]);
                  obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj3 = closure_0(closure_2[17]);
                  result = obj3.openMemberVerificationModal(guildId);
                  return;
                }
              }
              cResult[8] = guildId;
              cResult[9] = V;
            } else {
              class V {
                constructor() {
                  obj = closure_1(closure_2[13]);
                  obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj3 = closure_0(closure_2[17]);
                  result = obj3.openMemberVerificationModal(guildId);
                  return;
                }
              }
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class V {
              constructor() {
                obj = closure_1(closure_2[13]);
                obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                obj3 = closure_0(closure_2[17]);
                result = obj3.openMemberVerificationModal(guildId);
                return;
              }
            }
            const items = [AccessibilityStore];
            class T {
              constructor() {
                return closure_1_4.useReducedMotion;
              }
            }
            cResult[10] = items;
            cResult[11] = T;
            let tmp31 = T;
            const tmp30 = items;
          } else {
            class V {
              constructor() {
                obj = closure_1(closure_2[13]);
                obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                obj3 = closure_0(closure_2[17]);
                result = obj3.openMemberVerificationModal(guildId);
                return;
              }
            }
            tmp31 = cResult[11];
          }
          stateFromStores = tmp(tmp2[18]).useStateFromStores(tmp30, tmp31);
          if (cResult[12] === noticeIcon.lottieAnimation) {
            class V {
              constructor() {
                obj = closure_1(closure_2[13]);
                obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                obj3 = closure_0(closure_2[17]);
                result = obj3.openMemberVerificationModal(guildId);
                return;
              }
            }
            if (cResult[15] === tmp10) {
              class V {
                constructor() {
                  obj = closure_1(closure_2[13]);
                  obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj3 = closure_0(closure_2[17]);
                  result = obj3.openMemberVerificationModal(guildId);
                  return;
                }
              }
            }
            if (null != tmp10) {
              class V {
                constructor() {
                  obj = closure_1(closure_2[13]);
                  obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj3 = closure_0(closure_2[17]);
                  result = obj3.openMemberVerificationModal(guildId);
                  return;
                }
              }
              const obj3 = { style: null, source: null };
              class T {
                constructor() {
                  return closure_1_4.useReducedMotion;
                }
              }
              obj3.source = tmp10;
              const tmp34 = <Image style={null} source={null} />;
            } else {
              class V {
                constructor() {
                  obj = closure_1(closure_2[13]);
                  obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
                  obj3 = closure_0(closure_2[17]);
                  result = obj3.openMemberVerificationModal(guildId);
                  return;
                }
              }
            }
            class T {
              constructor() {
                return closure_1_4.useReducedMotion;
              }
            }
            cResult[15] = tmp10;
            cResult[16] = tmp33;
            noticeIcon = noticeIcon.noticeIcon;
            cResult[17] = noticeIcon;
            cResult[18] = tmp34;
          }
          const fn3 = function k() {
            const obj = { style: noticeIcon.lottieAnimation, source: _mod12130, autoPlay: !stateFromStores };
            return jsx(LottieAnimationViewDefault, {
              style: noticeIcon.lottieAnimation,
              source: _mod12130,
              autoPlay: !stateFromStores,
            });
          };
          cResult[12] = noticeIcon.lottieAnimation;
          cResult[13] = stateFromStores;
          cResult[14] = fn3;
          tmp33 = fn3;
          const tmpResult = tmp(tmp2[18]);
        }
        let obj2 = guildId(stateFromStores[9]);
      }
    : (guildId) => {
        guildId = guildId.guildId;
        const tmp = closure_8();
        const currentUserGuildJoinRequest = guildId(5942).useCurrentUserGuildJoinRequest(guildId);
        let applicationStatus;
        if (currentUserGuildJoinRequest != null) {
          applicationStatus = currentUserGuildJoinRequest.applicationStatus;
        }
        if (guildId(4708).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          let tmp8 = _modDef12128;
          const intl2 = tmp2(1126).intl;
          let stringResult = intl2.string(tmp2(1126).t.lk30cY);
          class I {
            constructor() {
              obj = closure_1(closure_2[13]);
              obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj3 = closure_0(closure_2[14]);
              obj5 = { guildId, canWithdraw: false };
              result = obj3.openMemberVerificationRejectedAlert(obj5);
              return;
            }
          }
        } else if (tmp2(4708).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
          tmp8 = _modDef12129;
          class I {
            constructor() {
              obj = closure_1(closure_2[13]);
              obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj3 = closure_0(closure_2[14]);
              obj5 = { guildId, subtitleText: null };
              intl = closure_0(closure_2[12]).intl;
              obj5.subtitleText = intl.string(closure_0(closure_2[12]).t["13tjTU"]);
              result = obj3.openMemberVerificationCancelPendingAlert(obj5);
              return;
            }
          }
          stringResult = tmp11(tmp2(1126).t["5iLvSx"]);
          const tmp7 = jsx(tmp2(6024).XSmallIcon, {});
        } else {
          let intl = tmp2(1126).intl;
          stringResult = intl.string(tmp2(1126).t.rEBKvg);
          class I {
            constructor() {
              obj = closure_1(closure_2[13]);
              obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj3 = closure_0(closure_2[17]);
              result = obj3.openMemberVerificationModal(guildId);
              return;
            }
          }
        }
        let obj = guildId(5942);
        const items = [AccessibilityStore];
        const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
        const tmp2Result = guildId(504);
        if (null != tmp8) {
          let obj2 = { style: tmp.noticeIcon, source: null };
          class I {
            constructor() {
              obj = closure_1(closure_2[13]);
              obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj3 = closure_0(closure_2[17]);
              result = obj3.openMemberVerificationModal(guildId);
              return;
            }
          }
          const tmp14Result = <Image style={tmp.noticeIcon} source={null} />;
        } else {
          const obj3 = { style: tmp.lottieAnimation, source: null, autoPlay: null };
          LottieAnimationViewDefault;
          class I {
            constructor() {
              obj = closure_1(closure_2[13]);
              obj1 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
              trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj1);
              obj3 = closure_0(closure_2[17]);
              result = obj3.openMemberVerificationModal(guildId);
              return;
            }
          }
          obj3.autoPlay = !stateFromStores;
        }
        let obj4 = {
          type: "simple-action",
          icon: tmp14Result,
          message: stringResult,
          actionIcon: tmp7,
          actionLabel: null,
          actionOnPress: null,
        };
        const intl3 = tmp2(1126).intl;
        obj4.actionLabel = intl3.string(guildId(1126).t["r8/DT+"]);
        obj4.actionOnPress = I;
        return jsx(ChatInputGuardDefault, {
          type: "simple-action",
          icon: tmp14Result,
          message: stringResult,
          actionIcon: tmp7,
          actionLabel: null,
          actionOnPress: null,
        });
      },
);
