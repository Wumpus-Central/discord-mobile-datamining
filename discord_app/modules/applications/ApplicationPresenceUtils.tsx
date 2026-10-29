// === Module 8762: ApplicationPresenceUtils ===

// Module 8762 (ApplicationPresenceUtils)
import ChannelStore from "ChannelStore" /* 4857 */;

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