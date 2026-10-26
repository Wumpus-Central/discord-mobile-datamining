// === Module 13845: openAppChannelToChat ===

// Module 13845 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5707 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9716 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  transitionToChannel.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};