// discord_app/utils/native/openChannelCallModalForChannelId.tsx
import openChannelCallModal from "PrivateChannelCallUtils.tsx";
import connectToStage from "../../modules/stage_channels/StageChannelModalActionCreators.tsx";
import closure_2 from "../../stores/ChannelStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(arg0, arg1) {
  channel = channel.getChannel(arg0);
  if (null != channel) {
    let isGuildStageVoiceResult = arg1;
    if (arg1) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = false === connectToStage.connectToStage(channel);
      const obj2 = connectToStage;
    }
    if (!isGuildStageVoiceResult) {
      openChannelCallModal.openChannelCallModal(channel);
      const obj3 = openChannelCallModal;
    }
  }
}
