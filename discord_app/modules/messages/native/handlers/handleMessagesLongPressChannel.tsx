// discord_app/modules/messages/native/handlers/handleMessagesLongPressChannel.tsx
import set from "../../../../../_runtime/00002_set.js";
import allowChannelAccess from "../../../../utils/ChannelUtils.tsx";
import showLongPressURLActionSheetDefault from "../../../links/native/showLongPressURLActionSheet.tsx";

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
