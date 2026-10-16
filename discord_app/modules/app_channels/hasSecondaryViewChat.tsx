// discord_app/modules/app_channels/hasSecondaryViewChat.tsx
import Constants from "../../Constants.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import conjureDMAppChannel from "../conjure/app_channel/conjureDMAppChannel.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const isChannelChatInSidebar = ChannelRecord.isChannelChatInSidebar;
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_channels/hasSecondaryViewChat.tsx");

export default function hasSecondaryViewChat(arg0) {
  const basicChannel = ChannelStore.getBasicChannel(arg0);
  if (null != basicChannel) {
    if (isChannelChatInSidebar(basicChannel.type)) {
      return true;
    } else if (basicChannel.type !== ChannelTypes.DM) {
      return false;
    }
  }
  const channel = ChannelStore.getChannel(arg0);
  let isDMAppChannelResult = null != channel;
  if (isDMAppChannelResult) {
    isDMAppChannelResult = conjureDMAppChannel.isDMAppChannel(channel);
  }
  return isDMAppChannelResult;
}
