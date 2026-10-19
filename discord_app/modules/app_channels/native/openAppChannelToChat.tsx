// === Module 13665: openAppChannelToChat ===

// Module 13665 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5669 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9631 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 13666 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const result = preloadChannelAppFrame.cancelChannelAppFramePreload(id.id);
  transitionToChannel.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};