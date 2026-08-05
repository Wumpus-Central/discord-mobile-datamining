// discord_app/utils/native/openChannelCallModalForChannelId.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("openChannelCallModal").fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(arg0, arg1) {
  channel = channel.getChannel(arg0);
  if (null != channel) {
    let isGuildStageVoiceResult = arg1;
    if (arg1) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = false === require("../../modules/stage_channels/StageChannelModalActionCreators.tsx") /* connectToStage */.connectToStage(channel);
      const obj2 = require("../../modules/stage_channels/StageChannelModalActionCreators.tsx") /* connectToStage */;
    }
    if (!isGuildStageVoiceResult) {
      require("PrivateChannelCallUtils.tsx") /* openChannelCallModal */.openChannelCallModal(channel);
      const obj3 = require("PrivateChannelCallUtils.tsx") /* openChannelCallModal */;
    }
  }
};