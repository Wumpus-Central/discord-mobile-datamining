// === Module 10819: handleMessagesLongPressChannel ===

// Module 10819 (handleMessagesLongPressChannel)
import set from "set" /* 2 */;
import allowChannelAccess from "allowChannelAccess" /* 4984 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10820 */;

const result = set.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

export const handleMessagesLongPressChannel = function handleMessagesLongPressChannel(data) {
  ({ guildId, channelId, messageId, originalLink } = data.data);
  if (null != channelId) {
    if (originalLink == null) {
      let obj = allowChannelAccess;
      originalLink = obj.getChannelPermalink(guildId, channelId, messageId);
    }
    if (null != originalLink) {
      obj = { urlString: null, guildId: null, channelId: null, messageId: null };
      obj[0] = originalLink;
      obj[1] = guildId;
      obj[2] = channelId;
      obj[3] = messageId;
      showLongPressURLActionSheetDefault(obj);
    }
  }
};