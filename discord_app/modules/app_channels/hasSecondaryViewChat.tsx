// === Module 6936: hasSecondaryViewChat ===

// Module 6936 (hasSecondaryViewChat)
import Constants from "Constants" /* 1071 */;
import ChannelRecord from "ChannelRecord" /* 4865 */;
import conjureDMAppChannel from "conjureDMAppChannel" /* 6937 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import size from "module_2" /* 2 */;

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
};