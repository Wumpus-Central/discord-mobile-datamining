// === Module 4688: transitionToStream ===

// Module 4688 (transitionToStream)
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import _modDef4689 from "module_4689" /* 4689 */;
import openChannelCallModal from "openChannelCallModal" /* 4693 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALFDefault;
    _modDef4689.popAll();
    const obj2 = _modDef4689;
    openChannelCallModal.openGuildVoiceModal(channel, "Go Live");
    const obj3 = openChannelCallModal;
  }
};