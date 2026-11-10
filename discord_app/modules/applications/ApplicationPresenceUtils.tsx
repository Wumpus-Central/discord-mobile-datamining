// === Module 8883: ApplicationPresenceUtils ===

// Module 8883 (ApplicationPresenceUtils)
import ChannelStore from "ChannelStore" /* 4991 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/ApplicationPresenceUtils.tsx");

export function shouldDisableUserPresenceInChannel(bot, channelId) {
  const channel = ChannelStore.getChannel(channelId);
  let tmp = null != channel && bot.bot && channel.isPrivate();
  if (tmp) {
    const rawRecipients = channel.rawRecipients;
    tmp = null == rawRecipients.find((id) => id.id === bot.id);
  }
  return tmp;
}