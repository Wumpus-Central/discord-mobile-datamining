// discord_app/modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx",
);

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      const user = UserStore.getUser(message.author.id);
      if (null != user) {
        const obj = { channel, message, user, closeMediaModal: message.closeMediaModal };
        obj.openLazy(asyncRequireImpl(12975, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj);
      }
    }
  }
}
