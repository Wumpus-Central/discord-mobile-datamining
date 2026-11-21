// === Module 13875: openAppChannelToChat ===

// Module 13875 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5646 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 8578 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  transitionToChannel.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};