// === Module 10557: MessageUtils ===

// Module 10557 (MessageUtils)
import AgeGateUtils from "AgeGateUtils" /* 6802 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/MessageUtils.tsx");

export function canViewPotentiallyNSFWChannel(channel_id) {
  const currentUser = UserStore.getCurrentUser();
  const channel = ChannelStore.getChannel(channel_id);
  let tmp3 = null != currentUser && null != channel;
  if (tmp3) {
    tmp3 = !AgeGateUtils.isChannelContentGated(channel);
  }
  return tmp3;
}
export function getGuildIdFromMessage(channel_id) {
  const channel = ChannelStore.getChannel(channel_id.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  return guild_id;
}