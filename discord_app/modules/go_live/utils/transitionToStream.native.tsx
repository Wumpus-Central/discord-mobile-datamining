// discord_app/modules/go_live/utils/transitionToStream.native.tsx
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";
import openChannelCallModal from "../../../utils/native/PrivateChannelCallUtils.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";

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