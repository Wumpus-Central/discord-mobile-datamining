// === Module 11814: handleMessagesLongPressChannel ===

// Module 11814 (handleMessagesLongPressChannel)
import ChannelUtils from "ChannelUtils" /* 6184 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10367 */;
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