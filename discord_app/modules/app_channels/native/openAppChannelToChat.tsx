// === Module 13798: openAppChannelToChat ===

// Module 13798 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5693 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9693 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  transitionToChannel.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};