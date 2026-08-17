// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import collectGuildAnalyticsMetadataDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import useIsCreatorMonetizationEnabledGuild from "../creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx";
import closure_3 from "../../stores/GuildStore.tsx";
import closure_4 from "../../stores/UserStore.tsx";
import getJoinButtonLabels from "GuildRoleSubscriptionSystemMessageConstants.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function identityHook(arg0) {
  return arg0;
}
function getRoleSubscriptionPurchaseSystemMessageContent(usernameOnClickHandler) {
  usernameOnClickHandler = usernameOnClickHandler.usernameOnClickHandler;
  if (usernameOnClickHandler === undefined) {
    usernameOnClickHandler = identityHook;
  }
  let roleSubscriptionOnClickHandler = usernameOnClickHandler.roleSubscriptionOnClickHandler;
  if (roleSubscriptionOnClickHandler === undefined) {
    roleSubscriptionOnClickHandler = closure_9;
  }
  const roleSubscriptionData = usernameOnClickHandler.roleSubscriptionData;
  const guild = store.getGuild(usernameOnClickHandler.guildId);
  let num;
  if (roleSubscriptionData != null) {
    num = roleSubscriptionData.total_months_subscribed;
  }
  if (num == null) {
    num = 0;
  }
  let flag;
  if (roleSubscriptionData != null) {
    flag = roleSubscriptionData.is_renewal;
  }
  if (flag == null) {
    flag = false;
  }
  const t = getSystemLocale.t;
  if (!tmp2) {
    let obj = { content: null, formatParams: null };
    obj[0] = flag ? t.mPTTdv : t.mYjFFx;
    obj = { username: null, usernameHook: null, guildName: null, handleGuildNameClick: null, tierName: null, months: null };
    obj[0] = usernameOnClickHandler.username;
    obj[1] = usernameOnClickHandler;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj[2] = name;
    obj[3] = roleSubscriptionOnClickHandler;
    let tier_name;
    if (roleSubscriptionData != null) {
      tier_name = roleSubscriptionData.tier_name;
    }
    obj[4] = tier_name;
    obj[5] = num;
    obj[1] = obj;
    return obj;
  }
}
({ getJoinButtonLabels: c5, getRenewButtonLabels: closure_6, STICKERS: error } = getJoinButtonLabels);
({ AnalyticEvents: closure_8, NOOP: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const pickRoleSubscriptionPurchaseSticker = function pickRoleSubscriptionPurchaseSticker(id) {
  const currentUser = authStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = DISCORD_EPOCHDefault.extractTimestamp(id);
    const obj = DISCORD_EPOCHDefault;
  }
  const obj2 = DISCORD_EPOCHDefault;
  return length[(num + obj2.extractTimestamp(obj2, id)) % length.length];
};
export const getRoleSubscriptionPurchaseStickerCTA = function getRoleSubscriptionPurchaseStickerCTA(id, arg1) {
  if (arg1) {
    let arr = callback2();
  } else {
    arr = callback();
  }
  const obj = DISCORD_EPOCHDefault;
  return arr[obj.extractTimestamp(obj, id) % arr.length];
};
export const getRoleSubscriptionPurchaseSystemMessageFormattedContent = function getRoleSubscriptionPurchaseSystemMessageFormattedContent(username) {
  ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent({ username: username.username, usernameOnClickHandler: username.usernameOnClickHandler, roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler, guildId: username.guildId, roleSubscriptionData: username.roleSubscriptionData }));
  const intl = getSystemLocale.intl;
  return intl.format(content, formatParams);
};
export const getRoleSubscriptionPurchaseSystemMessageAstFormattedContent = function getRoleSubscriptionPurchaseSystemMessageAstFormattedContent(username) {
  ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent({ username: username.username, usernameOnClickHandler: username.usernameOnClickHandler, roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler, guildId: username.guildId, roleSubscriptionData: username.roleSubscriptionData }));
  const intl = getSystemLocale.intl;
  return intl.formatToParts(content, formatParams);
};
export const getRoleSubscriptionPurchaseSystemMessageContentMobile = function getRoleSubscriptionPurchaseSystemMessageContentMobile(usernameOnClickHandler) {
  usernameOnClickHandler = usernameOnClickHandler.usernameOnClickHandler;
  if (usernameOnClickHandler === undefined) {
    usernameOnClickHandler = identityHook;
  }
  let roleSubscriptionOnClickHandler = usernameOnClickHandler.roleSubscriptionOnClickHandler;
  if (roleSubscriptionOnClickHandler === undefined) {
    roleSubscriptionOnClickHandler = closure_9;
  }
  const roleSubscriptionData = usernameOnClickHandler.roleSubscriptionData;
  const guild = store.getGuild(usernameOnClickHandler.guildId);
  let num;
  if (roleSubscriptionData != null) {
    num = roleSubscriptionData.total_months_subscribed;
  }
  if (num == null) {
    num = 0;
  }
  let flag;
  if (roleSubscriptionData != null) {
    flag = roleSubscriptionData.is_renewal;
  }
  if (flag == null) {
    flag = false;
  }
  const t = getSystemLocale.t;
  if (tmp2) {
    if (flag) {
      _N9bxq = t.OQ0OUy;
      let tmp7 = tmp4;
      let tmp8 = tmp3;
    } else {
      _N9bxq = t["+N9bxq"];
      tmp7 = tmp4;
      tmp8 = tmp3;
    }
  } else {
    if (flag) {
      let tmp6 = tmp3;
    } else {
      tmp6 = tmp3;
    }
    const intl = tmp6(1236).intl;
    let name;
    if (guild != null) {
      name = guild.name;
    }
    const obj = { guildName: null, tierName: null, username: null, usernameOnClick: null, roleSubscriptionOnClick: null, months: null };
    obj[0] = name;
    let tier_name;
    if (roleSubscriptionData != null) {
      tier_name = roleSubscriptionData.tier_name;
    }
    obj[1] = tier_name;
    obj[2] = usernameOnClickHandler.username;
    obj[3] = usernameOnClickHandler;
    obj[4] = roleSubscriptionOnClickHandler;
    obj[5] = num;
    return intl.formatToParts(_6Z1E_7, obj);
  }
};
export const isEligibleForRoleSubscriptionPurchaseSystemMessageSettings = function isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild) {
  return useIsCreatorMonetizationEnabledGuild.isCreatorMonetizationEnabledGuild(guild);
};
export const trackRoleSubscriptionPurchaseMessageTierClick = function trackRoleSubscriptionPurchaseMessageTierClick(guild_id) {
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = { guild_id, user_id: null, channel_id: null, message_id: null, role_subscription_listing_id: null };
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  obj[1] = id;
  obj[2] = arg1;
  obj[3] = arg2;
  obj[4] = arg3;
  obj.trackWithMetadata(constants.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, obj);
};
export const getRoleSubscriptionPurchaseSystemMessageEventProperties = function getRoleSubscriptionPurchaseSystemMessageEventProperties(guild_id, author) {
  const obj = { guild_id: guild_id.guild_id, sender: null, target_user: null, channel_id: null, message_id: null };
  const currentUser = authStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  obj[1] = id;
  obj[2] = author.author.id;
  obj[3] = guild_id.id;
  obj[4] = author.id;
  return obj;
};