// === Module 7475: transitionToStream ===

// Module 7475 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7476 */;
import ChannelStore from "ChannelStore" /* 2063 */;

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