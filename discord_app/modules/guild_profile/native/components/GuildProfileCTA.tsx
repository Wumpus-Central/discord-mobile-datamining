// === Module 12064: GuildProfileCTA ===

// Module 12064 (GuildProfileCTA)
import noop from "noop";
import ME from "ME";
import { ProfileCustomizationScrollPositions as closure_6 } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

let c4;
let c5;
const require = arg1;
({ AnalyticsObjects: c4, JoinGuildSources: c5 } = ME);
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/guild_profile/native/components/GuildProfileCTA.tsx");

export default function GuildProfileCTA(profile) {
  let context;
  let inviteKey;
  profile = profile.profile;
  let flag = profile.isLurkerServerPreview;
  ({ context, inviteKey } = profile);
  if (flag === undefined) {
    flag = false;
  }
  let guildId;
  let validInviteKey;
  let React;
  let callback1;
  let constants;
  const tmp3 = guildId(validInviteKey[4])(profile, context, inviteKey);
  guildId = tmp3.guildId;
  validInviteKey = tmp3.validInviteKey;
  const ctaType = tmp3.ctaType;
  let obj = { scrollPosition: constants2.GUILD_TAG };
  React = guildId(validInviteKey[5])(obj);
  let obj1 = React;
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
  const tmp6 = guildId(validInviteKey[9])(guildId);
  constants = tmp6;
  const items2 = [guildId, ];
  let applicationStatus;
  if (tmp6 != null) {
    applicationStatus = tmp6.applicationStatus;
  }
  items2[1] = applicationStatus;
  const items3 = [guildId, callback1, profile.visibility, validInviteKey];
  const callback2 = React.useCallback(() => {
    let applicationStatus;
    if (_undefined != null) {
      applicationStatus = _undefined.applicationStatus;
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
  if (flag) {
    obj = { guildId: null, joinSource: null };
    obj[0] = guildId;
    obj[1] = constants.GUILD_PROFILE_LURKER;
    return jsx(tmp(tmp2[15]), { guildId: null, joinSource: null });
  } else if (profile(tmp2[4]).CTATypes.IS_MEMBER === ctaType) {
    obj = {};
    const merged = Object.assign(memo);
    obj.onPress = callback;
    const intl7 = tmp12(tmp2[17]).intl;
    obj.text = intl7.string(tmp12(tmp2[17]).t.KLOhbO);
    return jsx(tmp12(tmp2[16]).Button, {});
  } else if (tmp12(tmp2[4]).CTATypes.ADOPT_TAG === ctaType) {
    obj1 = {};
    const merged1 = Object.assign(memo);
    obj1.onPress = function handleGoToTagSettings() {
      guildId(validInviteKey[6]).hideActionSheet("GuildProfileActionSheet:" + guildId);
      callback();
    };
    const intl6 = tmp12(tmp2[17]).intl;
    obj1.text = intl6.string(tmp12(tmp2[17]).t.cQDYRu);
    return jsx(tmp12(tmp2[16]).Button, {});
  } else if (tmp12(tmp2[4]).CTATypes.HAS_APPLICATION === ctaType) {
    let obj2 = {};
    const merged2 = Object.assign(memo);
    obj2.onPress = callback2;
    const intl5 = tmp12(tmp2[17]).intl;
    obj2.text = intl5.string(tmp12(tmp2[17]).t["4yfIDk"]);
    return jsx(tmp12(tmp2[16]).Button, {});
  } else if (tmp12(tmp2[4]).CTATypes.APPLY_TO_JOIN === ctaType) {
    const obj3 = {};
    const merged3 = Object.assign(memo);
    obj3.onPress = callback3;
    const intl4 = tmp12(tmp2[17]).intl;
    obj3.text = intl4.string(tmp12(tmp2[17]).t["7XdMW2"]);
    return jsx(tmp12(tmp2[16]).Button, {});
  } else if (tmp12(tmp2[4]).CTATypes.LURK_DISCOVERABLE === ctaType) {
    const obj4 = {};
    const merged4 = Object.assign(memo);
    obj4.onPress = callback4;
    const intl3 = tmp12(tmp2[17]).intl;
    obj4.text = intl3.string(tmp12(tmp2[17]).t.XpeFYr);
    return jsx(tmp12(tmp2[16]).Button, {});
  } else if (tmp12(tmp2[4]).CTATypes.JOIN_VIA_INVITE === ctaType) {
    const obj5 = {};
    const merged5 = Object.assign(memo);
    obj5.onPress = callback1;
    const intl2 = tmp12(tmp2[17]).intl;
    obj5.text = intl2.string(tmp12(tmp2[17]).t.XpeFYr);
    return jsx(tmp12(tmp2[16]).Button, {});
  } else if (tmp12(tmp2[4]).CTATypes.ACCEPT_ROLES === ctaType) {
    const obj6 = {};
    const merged6 = Object.assign(memo);
    obj6.onPress = callback1;
    const intl = tmp12(tmp2[17]).intl;
    obj6.text = intl.string(tmp12(tmp2[17]).t.MMlhsr);
    return jsx(tmp12(tmp2[16]).Button, {});
  } else {
    return null;
  }
  tmp = guildId;
};