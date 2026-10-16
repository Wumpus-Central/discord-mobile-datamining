// === Module 7700: transitionToStream ===

// Module 7700 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7701 */;
import ChannelStore from "ChannelStore" /* 2068 */;

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