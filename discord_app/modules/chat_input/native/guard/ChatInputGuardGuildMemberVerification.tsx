// discord_app/modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import MemberVerificationAlertActionCreators from "../../../guild_member_verification/native/MemberVerificationAlertActionCreators.tsx";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import MemberVerificationModalActionCreators from "../../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import ChatInputConstants from "../ChatInputConstants.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import AssetRegistryDefault from "../../../../../_runtime/12113_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/12114_AssetRegistry.js";
import _mod12115 from "../../../../../_runtime/metro/12115__.js";
import react from "../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let guildId, importDefault;

const Image = react_native.Image;
const TextAreaCta = ChatInputConstants.TextAreaCta;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({
  noticeIcon: { height: 36, width: 36, resizeMode: "contain" },
  lottieAnimation: { height: 36, width: 36 },
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (guildId) => {
        let fn3;
        let lottieAnimation;
        let stateFromStores;
        let tmp11;
        let tmp27;
        let tmp28;
        let useReducedMotion;
        const tmp = guildId;
        const tmp2 = stateFromStores;
        let obj = guildId(stateFromStores[8]);
        const cResult = obj.c(25);
        guildId = guildId.guildId;
        const tmp4 = closure_8();
        importDefault = tmp4;
        let obj2 = guildId(stateFromStores[9]);
        const currentUserGuildJoinRequest = obj2.useCurrentUserGuildJoinRequest(guildId);
        let applicationStatus;
        if (currentUserGuildJoinRequest != null) {
          applicationStatus = currentUserGuildJoinRequest.applicationStatus;
        }
        if (tmp(tmp2[10]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const _Symbol3 = Symbol;
          const tmp22 = require("AssetRegistry");
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
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = MemberVerificationAlertActionCreators;
              const obj4 = { guildId, canWithdraw: false };
              const result = obj3.openMemberVerificationRejectedAlert(obj4);
            };
            cResult[1] = guildId;
            cResult[2] = fn2;
          }
          tmp11 = tmp22;
        } else if (tmp(tmp2[10]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
          const _Symbol = Symbol;
          const tmp13 = require("AssetRegistry");
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp17 = jsx(tmp(tmp2[16]).XSmallIcon, {});
            cResult[3] = tmp17;
          }
          const _Symbol2 = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(tmp2[12]).intl;
            const stringResult1 = intl2.string(tmp(tmp2[12]).t["5iLvSx"]);
            cResult[4] = stringResult1;
          }
          if (cResult[5] !== guildId) {
            const fn = function v() {
              let intl;
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = { guildId, subtitleText: intl.string(intl5.t["13tjTU"]) };
              const openMemberVerificationCancelPendingAlert =
                MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
              MemberVerificationAlertActionCreators;
              intl = intl5.intl;
              const result = openMemberVerificationCancelPendingAlert(obj3);
            };
            cResult[5] = guildId;
            cResult[6] = fn;
          }
          tmp11 = tmp13;
        } else {
          const _Symbol4 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(tmp2[12]).intl;
            cResult[7] = intl.string(tmp(tmp2[12]).t.rEBKvg);
            const stringResult2 = intl.string(tmp(tmp2[12]).t.rEBKvg);
          }
          if (cResult[8] !== guildId) {
            class V {
              constructor() {
                const obj = AppAnalyticsUtilsDefault;
                const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
                const obj3 = MemberVerificationModalActionCreators;
                const result = obj3.openMemberVerificationModal(guildId);
              }
            }
            cResult[8] = guildId;
            cResult[9] = V;
          } else {
            class V {
              constructor() {
                const obj = AppAnalyticsUtilsDefault;
                const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
                const obj3 = MemberVerificationModalActionCreators;
                const result = obj3.openMemberVerificationModal(guildId);
              }
            }
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor() {
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = MemberVerificationModalActionCreators;
              const result = obj3.openMemberVerificationModal(guildId);
            }
          }
          const items = [AccessibilityStore];
          class T {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          cResult[10] = items;
          cResult[11] = T;
          tmp28 = T;
          tmp27 = items;
        } else {
          class V {
            constructor() {
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = MemberVerificationModalActionCreators;
              const result = obj3.openMemberVerificationModal(guildId);
            }
          }
          tmp28 = cResult[11];
        }
        const tmpResult = tmp(tmp2[18]);
        stateFromStores = tmpResult.useStateFromStores(tmp27, tmp28);
        if (cResult[12] === tmp4.lottieAnimation) {
          let tmp31;
          class V {
            constructor() {
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = MemberVerificationModalActionCreators;
              const result = obj3.openMemberVerificationModal(guildId);
            }
          }
          if (cResult[15] === tmp11) {
            class V {
              constructor() {
                const obj = AppAnalyticsUtilsDefault;
                const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
                const obj3 = MemberVerificationModalActionCreators;
                const result = obj3.openMemberVerificationModal(guildId);
              }
            }
          }
          if (null != tmp11) {
            class V {
              constructor() {
                const obj = AppAnalyticsUtilsDefault;
                const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
                const obj3 = MemberVerificationModalActionCreators;
                const result = obj3.openMemberVerificationModal(guildId);
              }
            }
            class T {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            tmp31 = <Image style={null} source={tmp11} />;
          } else {
            class V {
              constructor() {
                const obj = AppAnalyticsUtilsDefault;
                const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
                obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
                const obj3 = MemberVerificationModalActionCreators;
                const result = obj3.openMemberVerificationModal(guildId);
              }
            }
          }
          class T {
            constructor() {
              return useReducedMotion.useReducedMotion;
            }
          }
          cResult[15] = tmp11;
          cResult[16] = fn3;
          cResult[17] = tmp4.noticeIcon;
          cResult[18] = tmp31;
        }
        fn3 = function k() {
          LottieAnimationViewDefault;
          return <tmp style={lottieAnimation.lottieAnimation} source={_mod12115} autoPlay={!stateFromStores} />;
        };
        cResult[12] = tmp4.lottieAnimation;
        cResult[13] = stateFromStores;
        cResult[14] = fn3;
      }
    : (guildId) => {
        let stringResult;
        let tmp14Result;
        let tmp7;
        let tmp8;
        let useReducedMotion;
        guildId = guildId.guildId;
        const tmp = closure_8();
        const tmp2 = guildId;
        let obj = guildId(5935);
        const currentUserGuildJoinRequest = obj.useCurrentUserGuildJoinRequest(guildId);
        let applicationStatus;
        if (currentUserGuildJoinRequest != null) {
          applicationStatus = currentUserGuildJoinRequest.applicationStatus;
        }
        if (tmp2(4702).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          tmp8 = AssetRegistryDefault;
          const intl3 = tmp2(1126).intl;
          stringResult = intl3.string(tmp2(1126).t.lk30cY);
          class I {
            constructor() {
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_REJECTED };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = MemberVerificationAlertActionCreators;
              const obj4 = { guildId, canWithdraw: false };
              const result = obj3.openMemberVerificationRejectedAlert(obj4);
            }
          }
        } else if (tmp2(4702).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
          tmp8 = AssetRegistryDefault2;
          tmp7 = jsx(tmp2(6017).XSmallIcon, {});
          const intl2 = tmp2(1126).intl;
          class I {
            constructor() {
              let intl;
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION_CONFIRMED };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = { guildId, subtitleText: intl.string(intl5.t["13tjTU"]) };
              const openMemberVerificationCancelPendingAlert =
                MemberVerificationAlertActionCreators.openMemberVerificationCancelPendingAlert;
              MemberVerificationAlertActionCreators;
              intl = intl5.intl;
              const result = openMemberVerificationCancelPendingAlert(obj3);
            }
          }
          stringResult = tmp11(tmp2(1126).t["5iLvSx"]);
        } else {
          let intl = tmp2(1126).intl;
          stringResult = intl.string(tmp2(1126).t.rEBKvg);
          class I {
            constructor() {
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = MemberVerificationModalActionCreators;
              const result = obj3.openMemberVerificationModal(guildId);
            }
          }
        }
        const items = [AccessibilityStore];
        const tmp2Result = tmp2(504);
        const stateFromStores = tmp2Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
        ChatInputGuardDefault;
        if (null != tmp8) {
          class I {
            constructor() {
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = MemberVerificationModalActionCreators;
              const result = obj3.openMemberVerificationModal(guildId);
            }
          }
          tmp14Result = <Image style={tmp.noticeIcon} source={null} />;
        } else {
          let obj3 = { style: tmp.lottieAnimation, source: null, autoPlay: !stateFromStores };
          LottieAnimationViewDefault;
          class I {
            constructor() {
              const obj = AppAnalyticsUtilsDefault;
              const obj2 = { cta_type: TextAreaCta.MEMBER_VERIFICATION };
              obj.trackWithMetadata(AnalyticEvents.TEXT_AREA_CTA_CLICKED, obj2);
              const obj3 = MemberVerificationModalActionCreators;
              const result = obj3.openMemberVerificationModal(guildId);
            }
          }
        }
        const intl4 = tmp2(1126).intl;
        return (
          <tmp16
            type="simple-action"
            icon={tmp14Result}
            message={stringResult}
            actionIcon={tmp7}
            actionLabel={intl4.string(tmp2(1126).t["r8/DT+"])}
            actionOnPress={I}
          />
        );
      },
);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default memoResult;
