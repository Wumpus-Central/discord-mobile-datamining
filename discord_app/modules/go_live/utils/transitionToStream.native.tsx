// === Module 4958: transitionToStream ===

// Module 4958 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4963 */;
import ChannelStore from "ChannelStore" /* 2041 */;

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