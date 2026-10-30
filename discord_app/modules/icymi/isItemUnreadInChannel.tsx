// === Module 8912: isItemUnreadInChannel ===

// Module 8912 (isItemUnreadInChannel)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/isItemUnreadInChannel.tsx");

export function isItemUnreadInChannel(channel_id, message_id) {
  const trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(channel_id);
  let tmp2 = null == trackedAckMessageId;
  if (!tmp2) {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message_id);
    tmp2 = extractTimestampResult > SnowflakeUtilsDefault.extractTimestamp(trackedAckMessageId);
  }
  return tmp2;
}