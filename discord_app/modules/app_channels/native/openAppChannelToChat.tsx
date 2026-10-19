// === Module 13631: openAppChannelToChat ===

// Module 13631 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5202 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9617 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 13632 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const result = preloadChannelAppFrame.cancelChannelAppFramePreload(id.id);
  transitionToChannel.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};