// === Module 8771: openChannelCallModalForChannelId ===

// Module 8771 (openChannelCallModalForChannelId)
import connectToStage from "connectToStage" /* 8096 */;
import openChannelCallModal from "openChannelCallModal" /* 8700 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;

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
};