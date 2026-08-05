// discord_app/modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  channel = channel.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      user = user.getUser(message.author.id);
      if (null != user) {
        let obj = require("../../../../action_sheet/native/ActionSheetActionCreators.tsx");
        obj = { channel: null, message: null, user: null, closeMediaModal: null };
        obj[0] = channel;
        obj[1] = message;
        obj[2] = user;
        obj[3] = message.closeMediaModal;
        obj.openLazy(require("../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(12161, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
};