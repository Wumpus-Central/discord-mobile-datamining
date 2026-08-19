// === Module 8224: createUserPremiumGuildSubscriptionTierAchievedSystemMessage ===

// Module 8224 (createUserPremiumGuildSubscriptionTierAchievedSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4266 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8185 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8187 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import createUserPremiumGuildSubscriptionSystemMessage from "createUserPremiumGuildSubscriptionSystemMessage" /* 8222 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 8223 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionTierAchievedSystemMessage = function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
  message = message.message;
  channel = channel.getChannel(message.getChannelId());
  if (null == channel) {
    return createUserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else {
    guild = guild.getGuild(channel.getGuildId());
    if (null == guild) {
      return createUserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
    } else {
      const tmp13 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
      const messageAuthorWithProcessedColor = getMessageAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
      let obj = { message: null, author: null, roleStyle: null };
      obj[0] = message;
      obj[1] = messageAuthorWithProcessedColor;
      obj[2] = message.roleStyle;
      const tmp16 = formatUsernameOnClickDefault(obj);
      if (tmp13 > 1) {
        const intl2 = getSystemLocale.intl;
        obj = { username: null, usernameOnClick: null, guildName: null, newTierName: null, numSubscriptions: null };
        obj[0] = messageAuthorWithProcessedColor.nick;
        obj[1] = tmp16;
        obj[2] = guild.name;
        let tmp14Result = getGuildTierFromGuild;
        obj[3] = tmp14Result.getTierName(TIER_1);
        obj[4] = tmp13;
        let formatToPartsResult = intl2.formatToParts(getSystemLocale.t.GjNvr7, obj);
      } else {
        const intl = getSystemLocale.intl;
        obj1 = { username: null, usernameOnClick: null, guildName: null, newTierName: null };
        obj1[0] = messageAuthorWithProcessedColor.nick;
        obj1[1] = tmp16;
        obj1[2] = guild.name;
        tmp14Result = getGuildTierFromGuild;
        obj1[3] = tmp14Result.getTierName(TIER_1);
        formatToPartsResult = intl.formatToParts(getSystemLocale.t.oAYAP7, obj1);
      }
      const obj2 = { content: null };
      obj2[0] = formatToPartsResult;
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj2;
    }
  }
};