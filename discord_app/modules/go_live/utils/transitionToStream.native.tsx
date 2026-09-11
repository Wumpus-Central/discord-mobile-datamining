// === Module 4808: transitionToStream ===

// Module 4808 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4813 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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