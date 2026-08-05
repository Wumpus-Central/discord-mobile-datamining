// discord_app/modules/go_live/utils/transitionToStream.native.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("module_4490").fileFinishedImporting("modules/go_live/utils/transitionToStream.native.tsx");

export default function transitionToStream(channelId) {
  channel = channel.getChannel(channelId.channelId);
  if (null != channel) {
    require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet();
    const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
    require("../../../actions/ModalActionCreators.tsx").popAll();
    const obj2 = require("../../../actions/ModalActionCreators.tsx");
    require("../../../utils/native/PrivateChannelCallUtils.tsx") /* openChannelCallModal */.openGuildVoiceModal(channel, "Go Live");
    const obj3 = require("../../../utils/native/PrivateChannelCallUtils.tsx") /* openChannelCallModal */;
  }
};