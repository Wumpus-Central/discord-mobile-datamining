// === Module 8734: openChannelCallModalForChannelId ===

// Module 8734 (openChannelCallModalForChannelId)
import connectToStage from "connectToStage" /* 8057 */;
import openChannelCallModal from "openChannelCallModal" /* 8663 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

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