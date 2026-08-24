// discord_app/modules/guild_profile/native/components/GuildProfileCTA.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { AnalyticsObjects } from "../../../../Constants.tsx";
import { ProfileCustomizationScrollPositions as closure_5 } from "../../../user_settings/UserSettingsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default function GuildProfileCTA(profile) {
  profile = profile.profile;
  let guildId;
  let validInviteKey;
  let React;
  let callback1;
  let constants;
  ({ context, inviteKey } = profile);
  let tmp2 = guildId(validInviteKey[4])(profile, context, inviteKey);
  guildId = tmp2.guildId;
  validInviteKey = tmp2.validInviteKey;
  const ctaType = tmp2.ctaType;
  let obj = { scrollPosition: constants.GUILD_TAG };
  React = guildId(validInviteKey[5])(obj);
  obj1 = React;
  const items = [guildId];
  const items1 = [guildId, validInviteKey];
  const callback = React.useCallback(() => {
    guildId(validInviteKey[6]).hideActionSheet("GuildProfileActionSheet:" + guildId);
    const obj = guildId(validInviteKey[6]);
    profile(validInviteKey[7]).transitionToGuild(guildId);
  }, items);
  callback1 = React.useCallback(() => {
    if (null != validInviteKey) {
      let obj = guildId(validInviteKey[6]);
      const _HermesInternal = HermesInternal;
      obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
      obj = { inviteKey: null, context: null };
      obj[0] = tmp;
      obj[1] = { location: "guild_profile" };
      const result = guildId(validInviteKey[8]).acceptInviteAndTransitionToInviteChannel(obj);
      const obj2 = guildId(validInviteKey[8]);
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
  const callback2 = React.useCallback(() => {
    let applicationStatus;
    if (applicationStatus != null) {
      applicationStatus = applicationStatus.applicationStatus;
    }
    if (profile(validInviteKey[10]).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      let tmp2Result = tmp2(tmp3[11]);
      const result = tmp2Result.openMemberVerificationPendingAlert(guildId);
    } else if (tmp2(tmp3[10]).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      tmp2Result = tmp2(tmp3[11]);
      const obj = { guildId: null, canWithdraw: true };
      obj[0] = guildId;
      const result1 = tmp2Result.openMemberVerificationRejectedAlert(obj);
    } else if (tmp2(tmp3[10]).GuildJoinRequestApplicationStatuses.STARTED === applicationStatus) {
      const result2 = tmp2(tmp3[11]).openMemberVerificationIncompleteAlert(guildId);
      const tmp2Result1 = tmp2(tmp3[11]);
    }
  }, items2);
  const items4 = [guildId];
  const callback3 = obj1.useCallback(() => {
    guildId(validInviteKey[6]).hideActionSheet("GuildProfileActionSheet:" + guildId);
    if (profile.visibility !== profile(validInviteKey[12]).GuildProfileVisibility.PUBLIC_WITH_RECRUITMENT) {
      if (null != validInviteKey) {
        callback1();
      }
    }
    const obj = guildId(validInviteKey[6]);
    const tmp = validInviteKey;
    const tmp2 = guildId;
    const tmp4 = profile;
    const result = profile(validInviteKey[13]).openMemberVerificationModal(tmp2);
  }, items3);
  const callback4 = obj1.useCallback(() => {
    let obj = guildId(validInviteKey[6]);
    obj.hideActionSheet("GuildProfileActionSheet:" + guildId);
    obj = { object: callback1.GUILD_PROFILE };
    profile(validInviteKey[14]).startLurking(guildId, obj);
  }, items4);
  const memo = obj1.useMemo(() => ({ grow: true, size: "lg", variant: "active" }), []);
  if (profile(validInviteKey[4]).CTATypes.IS_MEMBER === ctaType) {
    obj = {};
    const merged = Object.assign(memo);
    obj.onPress = callback;
    const intl7 = tmp11(tmp[16]).intl;
    obj.text = intl7.string(tmp11(tmp[16]).t.KLOhbO);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.ADOPT_TAG === ctaType) {
    obj = {};
    const merged1 = Object.assign(memo);
    obj.onPress = function handleGoToTagSettings() {
      guildId(validInviteKey[6]).hideActionSheet("GuildProfileActionSheet:" + guildId);
      callback();
    };
    const intl6 = tmp11(tmp[16]).intl;
    obj.text = intl6.string(tmp11(tmp[16]).t.cQDYRu);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.HAS_APPLICATION === ctaType) {
    obj1 = {};
    const merged2 = Object.assign(memo);
    obj1.onPress = callback2;
    const intl5 = tmp11(tmp[16]).intl;
    obj1.text = intl5.string(tmp11(tmp[16]).t["4yfIDk"]);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.APPLY_TO_JOIN === ctaType) {
    let obj2 = {};
    const merged3 = Object.assign(memo);
    obj2.onPress = callback3;
    const intl4 = tmp11(tmp[16]).intl;
    obj2.text = intl4.string(tmp11(tmp[16]).t["7XdMW2"]);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const obj3 = {};
    const merged4 = Object.assign(memo);
    obj3.onPress = callback4;
    const intl3 = tmp11(tmp[16]).intl;
    obj3.text = intl3.string(tmp11(tmp[16]).t.XpeFYr);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const obj4 = {};
    const merged5 = Object.assign(memo);
    obj4.onPress = callback1;
    const intl2 = tmp11(tmp[16]).intl;
    obj4.text = intl2.string(tmp11(tmp[16]).t.XpeFYr);
    return jsx(tmp11(tmp[15]).Button, {});
  } else if (tmp11(tmp[4]).CTATypes.ACCEPT_ROLES === ctaType) {
    const obj5 = {};
    const merged6 = Object.assign(memo);
    obj5.onPress = callback1;
    const intl = tmp11(tmp[16]).intl;
    obj5.text = intl.string(tmp11(tmp[16]).t.MMlhsr);
    return jsx(tmp11(tmp[15]).Button, {});
  } else {
    return null;
  }
};