// === Module 7814: transitionToStream ===

// Module 7814 (transitionToStream)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7815 */;
import ChannelStore from "ChannelStore" /* 4800 */;

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