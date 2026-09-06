// discord_app/modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage.tsx";
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "../../../../premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionTierAchievedSystemMessage.tsx",
);

export const createUserPremiumGuildSubscriptionTierAchievedSystemMessage =
  function createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, TIER_1) {
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
          const intl2 = tmp14(1114).intl;
          obj = {
            username: messageAuthorWithProcessedColor.nick,
            usernameOnClick: tmp16,
            guildName: guild.name,
            newTierName: null,
            numSubscriptions: null,
          };
          let tmp14Result = tmp14(4454);
          obj.newTierName = tmp14Result.getTierName(TIER_1);
          obj.numSubscriptions = tmp13;
          let formatToPartsResult = intl2.formatToParts(tmp14(1114).t.GjNvr7, obj);
        } else {
          const intl = tmp14(1114).intl;
          const obj1 = {
            username: messageAuthorWithProcessedColor.nick,
            usernameOnClick: tmp16,
            guildName: guild.name,
            newTierName: null,
          };
          tmp14Result = tmp14(4454);
          obj1.newTierName = tmp14Result.getTierName(TIER_1);
          formatToPartsResult = intl.formatToParts(tmp14(1114).t.oAYAP7, obj1);
        }
        const obj2 = { content: formatToPartsResult };
        const merged = Object.assign(createCommonMessageDefault(message));
        return obj2;
      }
    }
  };
