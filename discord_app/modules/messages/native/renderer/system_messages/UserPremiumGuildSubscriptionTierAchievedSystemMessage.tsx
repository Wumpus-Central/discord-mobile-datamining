// === Module 8079: UserPremiumGuildSubscriptionTierAchievedSystemMessage ===

// Module 8079 (UserPremiumGuildSubscriptionTierAchievedSystemMessage)
import util from "util" /* 1114 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4500 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8034 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8036 */;
import createCommonMessageDefault from "createCommonMessage" /* 8038 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 8077 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 8078 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionTierAchievedSystemMessage = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.getChannelId());
  if (null == channel) {
    return UserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else {
    const guild = GuildStore.getGuild(channel.getGuildId());
    if (null == guild) {
      return UserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
    } else {
      const tmp13 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
      const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
      let obj = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      const tmp16 = formatUsernameOnClickDefault(obj);
      if (tmp13 > 1) {
        const intl2 = util.intl;
        obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: null, numSubscriptions: null };
        let tmp14Result = GuildBoostingUtils;
        obj.newTierName = tmp14Result.getTierName(TIER_1);
        obj.numSubscriptions = tmp13;
        let formatToPartsResult = intl2.formatToParts(util.t.GjNvr7, obj);
      } else {
        const intl = util.intl;
        const obj1 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp16, guildName: guild.name, newTierName: null };
        tmp14Result = GuildBoostingUtils;
        obj1.newTierName = tmp14Result.getTierName(TIER_1);
        formatToPartsResult = intl.formatToParts(util.t.oAYAP7, obj1);
      }
      const obj2 = { content: formatToPartsResult };
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj2;
    }
  }
};