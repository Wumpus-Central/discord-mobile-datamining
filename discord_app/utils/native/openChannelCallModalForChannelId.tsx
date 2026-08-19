// discord_app/utils/native/openChannelCallModalForChannelId.tsx
import connectToStage from "../../modules/stage_channels/StageChannelModalActionCreators.tsx";
import openChannelCallModal from "PrivateChannelCallUtils.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(arg0, arg1) {
  channel = channel.getChannel(arg0);
  if (null != channel) {
    let isGuildStageVoiceResult = arg1;
    if (arg1) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = false === connectToStage.connectToStage(channel);
    }
    if (!isGuildStageVoiceResult) {
      openChannelCallModal.openChannelCallModal(channel);
    }
  }
};