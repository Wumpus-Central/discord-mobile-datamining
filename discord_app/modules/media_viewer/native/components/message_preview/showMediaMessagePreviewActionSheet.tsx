// === Module 10791: showMediaMessagePreviewActionSheet ===

// Module 10791 (showMediaMessagePreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import UserStore from "UserStore" /* 1388 */;

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
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10792, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
};