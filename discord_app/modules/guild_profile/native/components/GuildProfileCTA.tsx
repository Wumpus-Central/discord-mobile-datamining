// === Module 10030: GuildProfileCTA ===

// Module 10030 (GuildProfileCTA)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4580 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5739 */;
import GuildProfileTypes from "GuildProfileTypes" /* 5762 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5781 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7581 */;
import transitionToGuild from "transitionToGuild" /* 7582 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8648 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
let constants = fn(1084).ProfileCustomizationScrollPositions;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default function GuildProfileCTA(profile) {
  profile = profile.profile;
  let guildId;
  let validInviteKey;
  constants = undefined;
  ({ context, inviteKey } = profile);
  const tmp2 = guildId(validInviteKey[4])(profile, context, inviteKey);
  guildId = tmp2.guildId;
  validInviteKey = tmp2.validInviteKey;
  const ctaType = tmp2.ctaType;
  noop = guildId(validInviteKey[5])({ scrollPosition: constants.GUILD_TAG });
  const items = [guildId];
  const items1 = [guildId, validInviteKey];
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
    transitionToGuild.transitionToGuild(guildId);
  }, items);
  const callback1 = noop.useCallback(() => {
    if (null != validInviteKey) {
      const _HermesInternal = HermesInternal;
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      const obj3 = { inviteKey: tmp, context: { location: "guild_profile" } };
      const result = InstantInviteActionCreatorsDefault.acceptInviteAndTransitionToInviteChannel(obj3);
    }
  }, items1);
  const tmp5 = guildId(validInviteKey[9])(guildId);
  constants = tmp5;
  const items2 = [guildId, ];
  let applicationStatus;
  if (tmp5 != null) {
    applicationStatus = tmp5.applicationStatus;
  }
  items2[1] = applicationStatus;
  const items3 = [guildId, callback1, profile.visibility, validInviteKey];
  const callback2 = noop.useCallback(() => {
    applicationStatus = undefined;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
      const tmp2Result = MemberVerificationAlertActionCreators;
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj = { guildId, canWithdraw: true };
      const result1 = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj);
      const tmp2Result3 = MemberVerificationAlertActionCreators;
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
      const result2 = MemberVerificationAlertActionCreators.openMemberVerificationIncompleteAlert(guildId);
      const tmp2Result4 = MemberVerificationAlertActionCreators;
    }
  }, items2);
  const items4 = [guildId];
  const callback3 = obj2.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
    if (profile.visibility !== GuildProfileTypes.GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
      if (null != validInviteKey) {
        callback1();
      }
    }
    const result = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
    const tmp4Result = MemberVerificationModalActionCreators;
  }, items3);
  const callback4 = obj2.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
    GuildDiscoveryUtils.startLurking(guildId, { object: AnalyticsObjects.GUILD_PROFILE });
  }, items4);
  const memo = obj2.useMemo(() => ({ grow: true, size: "lg", variant: "active" }), []);
  if (profile(validInviteKey[4]).CTATypes.IS_MEMBER === ctaType) {
    let obj3 = {};
    const merged = Object.assign(memo);
    obj3.onPress = callback;
    const intl7 = tmp11(tmp[16]).intl;
    obj3.text = intl7.string(tmp11(tmp[16]).t.KLOhbO);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.ADOPT_TAG === ctaType) {
    const obj4 = {};
    const merged1 = Object.assign(memo);
    obj4.onPress = function handleGoToTagSettings() {
      ActionSheetActionCreatorsDefault.hideActionSheet("GuildProfileActionSheet:" + guildId);
      closure_3();
    };
    const intl6 = tmp11(tmp[16]).intl;
    obj4.text = intl6.string(tmp11(tmp[16]).t.cQDYRu);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.HAS_APPLICATION === ctaType) {
    const obj5 = {};
    const merged2 = Object.assign(memo);
    obj5.onPress = callback2;
    const intl5 = tmp11(tmp[16]).intl;
    obj5.text = intl5.string(tmp11(tmp[16]).t["4yfIDk"]);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.APPLY_TO_JOIN === ctaType) {
    const obj6 = {};
    const merged3 = Object.assign(memo);
    obj6.onPress = callback3;
    const intl4 = tmp11(tmp[16]).intl;
    obj6.text = intl4.string(tmp11(tmp[16]).t["7XdMW2"]);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const obj7 = {};
    const merged4 = Object.assign(memo);
    obj7.onPress = callback4;
    const intl3 = tmp11(tmp[16]).intl;
    obj7.text = intl3.string(tmp11(tmp[16]).t.XpeFYr);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const obj8 = {};
    const merged5 = Object.assign(memo);
    obj8.onPress = callback1;
    const intl2 = tmp11(tmp[16]).intl;
    obj8.text = intl2.string(tmp11(tmp[16]).t.XpeFYr);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.ACCEPT_ROLES === ctaType) {
    const obj9 = {};
    const merged6 = Object.assign(memo);
    obj9.onPress = callback1;
    const intl = tmp11(tmp[16]).intl;
    obj9.text = intl.string(tmp11(tmp[16]).t.MMlhsr);
    return jsx(tmp11(tmp[15]).Button, {});
  } else {
    return null;
  }
  let obj = { scrollPosition: constants.GUILD_TAG };
};