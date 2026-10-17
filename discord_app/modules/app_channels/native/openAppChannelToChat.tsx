// discord_app/modules/app_channels/native/openAppChannelToChat.tsx
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat.tsx";
import preloadChannelAppFrame from "../../frames/preloadChannelAppFrame.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const result = preloadChannelAppFrame.cancelChannelAppFramePreload(id.id);
  transitionToChannel.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
}
