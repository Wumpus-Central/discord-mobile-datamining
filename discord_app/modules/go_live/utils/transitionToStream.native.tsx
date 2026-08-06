// discord_app/modules/go_live/utils/transitionToStream.native.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { openChannelCallModal } from "../../../utils/native/PrivateChannelCallUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const require = arg1;
const result = require("module_4490").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALF;
    ModalActionCreators.popAll();
    const obj2 = ModalActionCreators;
    openChannelCallModal.openGuildVoiceModal(channel, "Go Live");
    const obj3 = openChannelCallModal;
  }
};