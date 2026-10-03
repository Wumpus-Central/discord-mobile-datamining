// === Module 7665: UserPremiumGuildSubscriptionTierAchievedSystemMessage ===

// Module 7665 (UserPremiumGuildSubscriptionTierAchievedSystemMessage)
import util from "util" /* 1126 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7619 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7621 */;
import createCommonMessageDefault from "createCommonMessage" /* 7623 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 7663 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 7664 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 7666 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionTierAchievedSystemMessage = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.getChannelId());
  if (null == channel) {
    return UserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else {
    guild = GuildStore.getGuild(channel.getGuildId());
    if (null == guild) {
      return UserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
    } else {
      const tmp13 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
      const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
      const obj = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      const tmp16 = formatUsernameOnClickDefault(obj);
      if (tmp13 > 1) {
        const intl2 = util.intl;
        const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: GuildBoostingUtils.getTierName(TIER_1), numSubscriptions: tmp13 };
        let formatToPartsResult = intl2.formatToParts(util.t.GjNvr7, obj2);
        const tmp14Result = GuildBoostingUtils;
      } else {
        const intl = util.intl;
        const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: GuildBoostingUtils.getTierName(TIER_1) };
        formatToPartsResult = intl.formatToParts(util.t.oAYAP7, obj3);
        const tmp14Result2 = GuildBoostingUtils;
      }
      const obj4 = { content: formatToPartsResult };
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj4;
    }
  }
};