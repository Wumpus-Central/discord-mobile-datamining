// === Module 18855: MessageRequestStoreUtils ===

// Module 18855 (MessageRequestStoreUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/MessageRequestStoreUtils.tsx");

export function sortChannelIds(found) {
  const sorted = found.sort((lastMessageId, lastMessageId2) => SnowflakeUtilsDefault.compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId));
  return sorted.reverse();
}