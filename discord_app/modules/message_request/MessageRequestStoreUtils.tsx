// === Module 16882: MessageRequestStoreUtils ===

// Module 16882 (MessageRequestStoreUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/MessageRequestStoreUtils.tsx");

export const sortChannelIds = function sortChannelIds(found) {
  const sorted = found.sort((lastMessageId, lastMessageId2) => SnowflakeUtilsDefault.compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId));
  return sorted.reverse();
};