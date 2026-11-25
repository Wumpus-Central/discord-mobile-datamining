// === Module 11458: openAppChannelToChat ===

// Module 11458 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6095 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 8979 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  transitionToChannel.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};