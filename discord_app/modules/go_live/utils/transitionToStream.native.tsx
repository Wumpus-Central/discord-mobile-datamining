// === Module 6897: transitionToStream ===

// Module 6897 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6898 */;
import ChannelStore from "ChannelStore" /* 5159 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  if (null != channel) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ModalActionCreatorsDefault.popAll();
    PrivateChannelCallUtils.openGuildVoiceModal(channel, "Go Live");
  }
};