// discord_app/modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx
import util from "../../../../intl/index.native.tsx";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import MemberVerificationAlertActionCreators from "../../../guild_member_verification/native/MemberVerificationAlertActionCreators.tsx";
import MemberVerificationModalActionCreators from "../../../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import ChatInputGuardDefault from "ChatInputGuard.tsx";
import _modDef13980 from "../../../../../_runtime/metro/13980__.js";
import _modDef13981 from "../../../../../_runtime/metro/13981__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const TextAreaCta = fn(12771).TextAreaCta;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_7 = createStyles.createStyles({
  noticeIcon: { height: 36, width: 36, resizeMode: "contain" },
  lottieAnimation: { height: 36, width: 36 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildMemberVerification.tsx");

export default noop.memo(function ChatInputGuardGuildMemberVerification(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_7();
  const currentUserGuildJoinRequest = guildId(6914).useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  if (guildId(5043).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    let tmp8 = _modDef13980;
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t.lk30cY);
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
  } else if (tmp2(5043).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
    tmp8 = _modDef13981;
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
    stringResult = tmp11(tmp2(1114).t["5iLvSx"]);
    const tmp7 = jsx(tmp2(7048).XSmallIcon, {});
  } else {
    let intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.rEBKvg);
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
  let obj = guildId(6914);
  const items = [AccessibilityStore];
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
  let obj4 = {
    type: "simple-action",
    icon: tmp18,
    message: stringResult,
    actionIcon: tmp7,
    actionLabel: null,
    actionOnPress: null,
  };
  const intl3 = tmp2(1114).intl;
  obj4.actionLabel = intl3.string(guildId(1114).t["r8/DT+"]);
  obj4.actionOnPress = I;
  return jsx(ChatInputGuardDefault, {
    type: "simple-action",
    icon: tmp18,
    message: stringResult,
    actionIcon: tmp7,
    actionLabel: null,
    actionOnPress: null,
  });
});
