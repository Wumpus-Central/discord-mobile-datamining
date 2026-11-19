// === Module 11964: handleMessagesLongPressChannel ===

// Module 11964 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 5827 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export function handleMessagesLongPressChannel(data) {
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      originalLink = ChannelUtils.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      const obj2 = { urlString: originalLink, guildId, channelId, messageId };
      showLongPressURLActionSheetDefault(obj2);
    }
  }
}