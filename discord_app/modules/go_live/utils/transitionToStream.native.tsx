// discord_app/modules/go_live/utils/transitionToStream.native.tsx
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef4689 from "../../../actions/ModalActionCreators.tsx";
import openChannelCallModal from "../../../utils/native/PrivateChannelCallUtils.tsx";
import closure_3 from "../../../stores/ChannelStore.tsx";

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