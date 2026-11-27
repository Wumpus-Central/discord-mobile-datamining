// === Module 11513: openAppChannelToChat ===

// Module 11513 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6126 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9022 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  transitionToChannel.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};