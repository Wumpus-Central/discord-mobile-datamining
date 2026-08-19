// === Module 8973: shouldDisableUserPresenceInChannel ===

// Module 8973 (shouldDisableUserPresenceInChannel)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

const result = require("obj132").fileFinishedImporting("modules/applications/ApplicationPresenceUtils.tsx");

export const shouldDisableUserPresenceInChannel = function shouldDisableUserPresenceInChannel(bot, channelId) {
  let channel = bot;
  channel = channel.getChannel(channelId);
  let tmp = null != channel && bot.bot && channel.isPrivate();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = null == rawRecipients.find((item, index) => item.id === bot.id);
  }
  return tmp;
};