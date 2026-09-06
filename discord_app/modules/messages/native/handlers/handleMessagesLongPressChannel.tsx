// discord_app/modules/messages/native/handlers/handleMessagesLongPressChannel.tsx
import ChannelUtils from "../../../../utils/ChannelUtils.tsx";
import showLongPressURLActionSheetDefault from "../../../links/native/showLongPressURLActionSheet.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      let obj = ChannelUtils;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      obj = { urlString: originalLink, guildId, channelId, messageId };
      showLongPressURLActionSheetDefault(obj);
    }
  }
};
