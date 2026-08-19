// === Module 10780: handleMessagesLongPressChannel ===

// Module 10780 (handleMessagesLongPressChannel)
import obj132 from "obj132" /* 2 */;
import allowChannelAccess from "allowChannelAccess" /* 4979 */;
import showLongPressURLActionSheetDefault from "showLongPressURLActionSheet" /* 10781 */;

const result = obj132.fileFinishedImporting("modules/messages/native/handlers/handleMessagesLongPressChannel.tsx");

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