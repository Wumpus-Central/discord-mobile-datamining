// === Module 6899: transitionToStream ===

// Module 6899 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 6900 */;
import ChannelStore from "ChannelStore" /* 5155 */;

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