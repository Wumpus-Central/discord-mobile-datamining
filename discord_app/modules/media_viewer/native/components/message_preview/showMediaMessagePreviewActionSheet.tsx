// === Module 13919: showMediaMessagePreviewActionSheet ===

// Module 13919 (showMediaMessagePreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx");

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      const user = UserStore.getUser(message.author.id);
      if (null != user) {
        const obj2 = { channel, message, user, closeMediaModal: message.closeMediaModal };
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13920, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};