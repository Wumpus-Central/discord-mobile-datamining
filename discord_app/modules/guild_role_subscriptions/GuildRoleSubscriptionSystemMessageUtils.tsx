// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import util from "../../intl/index.native.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import useIsCreatorMonetizationEnabledGuild from "../creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
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
    roleSubscriptionOnClickHandler = React7;
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
  if (roleSubscriptionData != null) {
    flag = roleSubscriptionData.is_renewal;
  }
  if (flag == null) {
    flag = false;
  }
  const t = util.t;
  if (!tmp2) {
    let obj = { content: flag ? t.mPTTdv : t.mYjFFx, formatParams: null };
    obj = {
      username: usernameOnClickHandler.username,
      usernameHook: usernameOnClickHandler,
      guildName: null,
      handleGuildNameClick: null,
      tierName: null,
      months: null,
    };
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj.guildName = name;
    obj.handleGuildNameClick = roleSubscriptionOnClickHandler;
    let tier_name;
    if (roleSubscriptionData != null) {
      tier_name = roleSubscriptionData.tier_name;
    }
    obj.tierName = tier_name;
    obj.months = num;
    obj.formatParams = obj;
    return obj;
  }
}
const GuildRoleSubscriptionSystemMessageConstants = fn(7993);
({
  getJoinButtonLabels: hasOwnProperty,
  getRenewButtonLabels: metroRequire,
  STICKERS: closure_7,
} = GuildRoleSubscriptionSystemMessageConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_8, NOOP: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageUtils.tsx",
);

export const pickRoleSubscriptionPurchaseSticker = function pickRoleSubscriptionPurchaseSticker(id) {
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = SnowflakeUtilsDefault.extractTimestamp(id);
  }
  const obj2 = SnowflakeUtilsDefault;
  return length[(num + obj2.extractTimestamp(obj2, id)) % length.length];
};
export const getRoleSubscriptionPurchaseStickerCTA = function getRoleSubscriptionPurchaseStickerCTA(id, arg1) {
  if (arg1) {
    let arr = timestampProducer();
  } else {
    arr = hasOwnProperty();
  }
  const obj = SnowflakeUtilsDefault;
  return arr[obj.extractTimestamp(obj, id) % arr.length];
};
export const getRoleSubscriptionPurchaseSystemMessageFormattedContent =
  function getRoleSubscriptionPurchaseSystemMessageFormattedContent(username) {
    ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent({
      username: username.username,
      usernameOnClickHandler: username.usernameOnClickHandler,
      roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler,
      guildId: username.guildId,
      roleSubscriptionData: username.roleSubscriptionData,
    }));
    const intl = util.intl;
    return intl.format(content, formatParams);
  };
export const getRoleSubscriptionPurchaseSystemMessageAstFormattedContent =
  function getRoleSubscriptionPurchaseSystemMessageAstFormattedContent(username) {
    ({ content, formatParams } = getRoleSubscriptionPurchaseSystemMessageContent({
      username: username.username,
      usernameOnClickHandler: username.usernameOnClickHandler,
      roleSubscriptionOnClickHandler: username.roleSubscriptionOnClickHandler,
      guildId: username.guildId,
      roleSubscriptionData: username.roleSubscriptionData,
    }));
    const intl = util.intl;
    return intl.formatToParts(content, formatParams);
  };
export const getRoleSubscriptionPurchaseSystemMessageContentMobile =
  function getRoleSubscriptionPurchaseSystemMessageContentMobile(usernameOnClickHandler) {
    usernameOnClickHandler = usernameOnClickHandler.usernameOnClickHandler;
    if (usernameOnClickHandler === undefined) {
      usernameOnClickHandler = identityHook;
    }
    let roleSubscriptionOnClickHandler = usernameOnClickHandler.roleSubscriptionOnClickHandler;
    if (roleSubscriptionOnClickHandler === undefined) {
      roleSubscriptionOnClickHandler = React7;
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
    if (roleSubscriptionData != null) {
      flag = roleSubscriptionData.is_renewal;
    }
    if (flag == null) {
      flag = false;
    }
    const t = util.t;
    if (tmp2) {
      if (flag) {
        let OQ0OUy = t.OQ0OUy;
      } else {
        OQ0OUy = t["+N9bxq"];
      }
    } else {
      if (flag) {
        let OxP1NC = t.OxP1NC;
        let tmp7 = require;
      } else {
        OxP1NC = t["6Z1E+7"];
        tmp7 = require;
      }
      const intl = tmp7(1114).intl;
      let name;
      if (guild != null) {
        name = guild.name;
      }
      const obj = {
        guildName: name,
        tierName: null,
        username: null,
        usernameOnClick: null,
        roleSubscriptionOnClick: null,
        months: null,
      };
      let tier_name;
      if (roleSubscriptionData != null) {
        tier_name = roleSubscriptionData.tier_name;
      }
      obj.tierName = tier_name;
      obj.username = usernameOnClickHandler.username;
      obj.usernameOnClick = usernameOnClickHandler;
      obj.roleSubscriptionOnClick = roleSubscriptionOnClickHandler;
      obj.months = num;
      return intl.formatToParts(OxP1NC, obj);
    }
    tmp2 = num > 0;
  };
export const isEligibleForRoleSubscriptionPurchaseSystemMessageSettings =
  function isEligibleForRoleSubscriptionPurchaseSystemMessageSettings(guild) {
    return useIsCreatorMonetizationEnabledGuild.isCreatorMonetizationEnabledGuild(guild);
  };
export const trackRoleSubscriptionPurchaseMessageTierClick = function trackRoleSubscriptionPurchaseMessageTierClick(
  guildId,
  channelId,
  messageId,
  roleSubscriptionListingId,
) {
  const obj = {
    guild_id: guildId,
    user_id: null,
    channel_id: null,
    message_id: null,
    role_subscription_listing_id: null,
  };
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  obj.user_id = id;
  obj.channel_id = channelId;
  obj.message_id = messageId;
  obj.role_subscription_listing_id = roleSubscriptionListingId;
  obj.trackWithMetadata(constants.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, obj);
};
export const getRoleSubscriptionPurchaseSystemMessageEventProperties =
  function getRoleSubscriptionPurchaseSystemMessageEventProperties(guild_id, author) {
    const obj = { guild_id: guild_id.guild_id, sender: null, target_user: null, channel_id: null, message_id: null };
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    obj.sender = id;
    obj.target_user = author.author.id;
    obj.channel_id = guild_id.id;
    obj.message_id = author.id;
    return obj;
  };
