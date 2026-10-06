// discord_app/modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/message_preview/showMediaMessagePreviewActionSheet.tsx",
);

export default function showMediaMessagePreviewActionSheet(message) {
  message = message.message;
  const closeMediaModal = message.closeMediaModal;
  const channel = ChannelStore.getChannel(message.channelId);
  if (null != channel) {
    if (null != message) {
      const user = UserStore.getUser(message.author.id);
      if (null != user) {
        const obj2 = { channel, message, user, closeMediaModal };
        const obj = ActionSheetActionCreatorsDefault;
        obj.openLazy(asyncRequire(12791, dependencyMap.paths), "MediaMessagePreviewActionSheet", obj2);
      }
    }
  }
}
