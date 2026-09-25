// === Module 16458: useSearchMessageTimestamp ===

// Module 16458 (useSearchMessageTimestamp)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7050 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export const useSearchMessageTimestamp = function useSearchMessageTimestamp(message, channel) {
  let id = channel;
  const items = [message, channel];
  return noop.useMemo(() => {
    id = message.id;
    if (id == null) {
      id = id.id;
    }
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id);
    const obj2 = { timestamp: null, timestampAccessibilityLabel: null };
    obj2.timestamp = NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, true);
    obj2.timestampAccessibilityLabel = NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, false);
    return obj2;
  }, items);
};