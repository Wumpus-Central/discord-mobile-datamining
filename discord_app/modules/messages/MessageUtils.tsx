// discord_app/modules/messages/MessageUtils.tsx
import shouldShowAgeGateForVoiceChannel from "../age_gate/AgeGateUtils.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/MessageUtils.tsx");

export const canViewPotentiallyNSFWChannel = function canViewPotentiallyNSFWChannel(channel_id) {
  currentUser = currentUser.getCurrentUser();
  const channel = store.getChannel(channel_id);
  let tmp3 = null != currentUser && null != channel;
  if (tmp3) {
    tmp3 = !shouldShowAgeGateForVoiceChannel.isChannelContentGated(channel);
  }
  return tmp3;
};
export const getGuildIdFromMessage = function getGuildIdFromMessage(channel_id) {
  const channel = store.getChannel(channel_id.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  return guild_id;
};