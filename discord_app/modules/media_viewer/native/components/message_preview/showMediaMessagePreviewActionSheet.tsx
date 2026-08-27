// discord_app/modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx
import asyncRequireImpl from "../../../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import closure_3 from "../../../../../stores/ChannelStore.tsx";
import closure_4 from "../../../../../stores/UserStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  channel = channel.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      user = user.getUser(message.author.id);
      if (null != user) {
        let obj = ACTION_SHEET_HEIGHT_HALFDefault;
        obj = { channel: null, message: null, user: null, closeMediaModal: null };
        obj[0] = channel;
        obj[1] = message;
        obj[2] = user;
        obj[3] = message.closeMediaModal;
        obj.openLazy(asyncRequireImpl(12751, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
};