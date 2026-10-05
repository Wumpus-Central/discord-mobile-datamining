// === Module 7651: GuildRoleSubscriptionSystemMessageUtils ===

// Module 7651 (GuildRoleSubscriptionSystemMessageUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl2 from "intl" /* 1126 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import useIsCreatorMonetizationEnabledGuild from "useIsCreatorMonetizationEnabledGuild" /* 6754 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import GuildRoleSubscriptionSystemMessageConstants from "GuildRoleSubscriptionSystemMessageConstants" /* 7652 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function identityHook(arg0) {
  return arg0;
}
function getRoleSubscriptionPurchaseSystemMessageContent(usernameOnClickHandler) {
  let name;
  let obj2;
  let tier_name;
  let tmp3;
  usernameOnClickHandler = usernameOnClickHandler.usernameOnClickHandler;
  const username = usernameOnClickHandler.username;
  if (usernameOnClickHandler === undefined) {
    usernameOnClickHandler = identityHook;
  }
  let roleSubscriptionOnClickHandler = usernameOnClickHandler.roleSubscriptionOnClickHandler;
  if (roleSubscriptionOnClickHandler === undefined) {
    roleSubscriptionOnClickHandler = React4;
  }
  const roleSubscriptionData = usernameOnClickHandler.roleSubscriptionData;
  const guild = GuildStore.getGuild(usernameOnClickHandler.guildId);
  let num;
  if (roleSubscriptionData != null) {
    num = roleSubscriptionData.total_months_subscribed;
  }
  if (num == null) {
    num = 0;
  }
  let flag;
  const tmp2 = num > 0;
  if (roleSubscriptionData != null) {
    flag = roleSubscriptionData.is_renewal;
  }
  if (flag == null) {
    flag = false;
  }
  const t = intl2.t;
  if (tmp2) {
    tmp3 = flag ? t.Iy66M7 : t.eCgb2W;
  } else {
    tmp3 = flag ? t.mPTTdv : t.mYjFFx;
  }
  const obj = { content: tmp3, formatParams: obj2 };
  obj2 = { username, usernameHook: usernameOnClickHandler, guildName: name, handleGuildNameClick: roleSubscriptionOnClickHandler, tierName: tier_name, months: num };
  name = undefined;
  if (guild != null) {
    name = guild.name;
  }
  tier_name = undefined;
  if (roleSubscriptionData != null) {
    tier_name = roleSubscriptionData.tier_name;
  }
  return obj;
}
({ getJoinButtonLabels: hasOwnProperty, getRenewButtonLabels: metroRequire, STICKERS: metroImportDefault } = GuildRoleSubscriptionSystemMessageConstants);
({ AnalyticEvents: metroImportAll, NOOP: c9 } = Constants);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const pickRoleSubscriptionPurchaseSticker = function pickRoleSubscriptionPurchaseSticker(id) {
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    const obj = SnowflakeUtilsDefault;
    num = obj.extractTimestamp(id);
  }
  const obj2 = SnowflakeUtilsDefault;
  return metroImportDefault[(num + obj2.extractTimestamp(obj2, id)) % metroImportDefault.length];
};
export const getRoleSubscriptionPurchaseStickerCTA = function getRoleSubscriptionPurchaseStickerCTA(id, arg1) {
  let arr;
  const tmp = arg1;
  if (tmp) {
    arr = metroRequire();
  } else {
    arr = hasOwnProperty();
  }
  const obj = SnowflakeUtilsDefault;
  return arr[obj.extractTimestamp(obj, id) % arr.length];
};
export const getRoleSubscriptionPurchaseSystemMessageFormattedContent = function getRoleSubscriptionPurchaseSystemMessageFormattedContent(username) {
  let content;
  let formatParams;
  const obj = { username: username.username, usernameOnClickHandler: username.usernameOnClickHandler, roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler, guildId: username.guildId, roleSubscriptionData: username.roleSubscriptionData };
  ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent(obj));
  getRoleSubscriptionPurchaseSystemMessageContent(obj);
  const intl = intl2.intl;
  return intl.format(content, formatParams);
};
export const getRoleSubscriptionPurchaseSystemMessageAstFormattedContent = function getRoleSubscriptionPurchaseSystemMessageAstFormattedContent(username) {
  let content;
  let formatParams;
  const obj = { username: username.username, usernameOnClickHandler: username.usernameOnClickHandler, roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler, guildId: username.guildId, roleSubscriptionData: username.roleSubscriptionData };
  ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent(obj));
  getRoleSubscriptionPurchaseSystemMessageContent(obj);
  const intl = intl2.intl;
  return intl.formatToParts(content, formatParams);
};
export const getRoleSubscriptionPurchaseSystemMessageContentMobile = function getRoleSubscriptionPurchaseSystemMessageContentMobile(usernameOnClickHandler) {
  let OxP1NC;
  let tier_name;
  let tmp7;
  usernameOnClickHandler = usernameOnClickHandler.usernameOnClickHandler;
  const username = usernameOnClickHandler.username;
  if (usernameOnClickHandler === undefined) {
    usernameOnClickHandler = identityHook;
  }
  let roleSubscriptionOnClickHandler = usernameOnClickHandler.roleSubscriptionOnClickHandler;
  if (roleSubscriptionOnClickHandler === undefined) {
    roleSubscriptionOnClickHandler = React4;
  }
  const roleSubscriptionData = usernameOnClickHandler.roleSubscriptionData;
  const guild = GuildStore.getGuild(usernameOnClickHandler.guildId);
  let num;
  if (roleSubscriptionData != null) {
    num = roleSubscriptionData.total_months_subscribed;
  }
  if (num == null) {
    num = 0;
  }
  let flag;
  const tmp2 = num > 0;
  if (roleSubscriptionData != null) {
    flag = roleSubscriptionData.is_renewal;
  }
  if (flag == null) {
    flag = false;
  }
  const t = intl2.t;
  if (tmp2) {
    let OQ0OUy;
    let tmp10;
    if (flag) {
      OQ0OUy = t.OQ0OUy;
      tmp10 = require;
    } else {
      OQ0OUy = t["+N9bxq"];
      tmp10 = require;
    }
    tmp7 = tmp10;
    OxP1NC = OQ0OUy;
  } else if (flag) {
    OxP1NC = t.OxP1NC;
    tmp7 = require;
  } else {
    OxP1NC = t["6Z1E+7"];
    tmp7 = require;
  }
  const intl = tmp7(1126).intl;
  let name;
  const formatToParts = intl.formatToParts;
  if (guild != null) {
    name = guild.name;
  }
  const obj = { guildName: name, tierName: tier_name, username, usernameOnClick: usernameOnClickHandler, roleSubscriptionOnClick: roleSubscriptionOnClickHandler, months: num };
  tier_name = undefined;
  if (roleSubscriptionData != null) {
    tier_name = roleSubscriptionData.tier_name;
  }
  return formatToParts(OxP1NC, obj);
};
export const isEligibleForRoleSubscriptionPurchaseSystemMessageSettings = function isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild) {
  const obj = useIsCreatorMonetizationEnabledGuild;
  return obj.isCreatorMonetizationEnabledGuild(guild);
};
export const trackRoleSubscriptionPurchaseMessageTierClick = function trackRoleSubscriptionPurchaseMessageTierClick(guildId, channelId, messageId, roleSubscriptionListingId) {
  let id;
  const obj = { guild_id: guildId, user_id: id, channel_id: channelId, message_id: messageId, role_subscription_listing_id: roleSubscriptionListingId };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED = metroImportAll.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED;
  AppAnalyticsUtilsDefault;
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  trackWithMetadata(ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, obj);
};
export const getRoleSubscriptionPurchaseSystemMessageEventProperties = function getRoleSubscriptionPurchaseSystemMessageEventProperties(guild_id, author) {
  let id;
  const obj = { guild_id: guild_id.guild_id, sender: id, target_user: author.author.id, channel_id: guild_id.id, message_id: author.id };
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return obj;
};