// === Module 11583: handleMessagesLongPressChannel ===

// Module 11583 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 4705 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 11584 */;
import size from "module_2" /* 2 */;

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