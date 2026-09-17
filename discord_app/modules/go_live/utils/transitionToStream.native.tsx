// === Module 4842: transitionToStream ===

// Module 4842 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4847 */;
import ChannelStore from "ChannelStore" /* 1958 */;

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