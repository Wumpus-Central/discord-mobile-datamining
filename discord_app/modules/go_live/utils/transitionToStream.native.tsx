// === Module 9883: transitionToStream ===

// Module 9883 (transitionToStream)
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef5260 from "module_5260" /* 5260 */;
import openChannelCallModal from "openChannelCallModal" /* 8663 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    _modDef5260.popAll();
    openChannelCallModal.openGuildVoiceModal(channel, "Go Live");
  }
};