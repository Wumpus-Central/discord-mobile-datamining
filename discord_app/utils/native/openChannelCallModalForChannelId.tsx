// === Module 12298: openChannelCallModalForChannelId ===

// Module 12298 (openChannelCallModalForChannelId)
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7834 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 8449 */;
import ChannelStore from "ChannelStore" /* 4892 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(arg0, arg1) {
  const channel = ChannelStore.getChannel(arg0);
  if (null != channel) {
    let isGuildStageVoiceResult = arg1;
    if (arg1) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = false === StageChannelModalActionCreators.connectToStage(channel);
    }
    if (!isGuildStageVoiceResult) {
      PrivateChannelCallUtils.openChannelCallModal(channel);
    }
  }
};