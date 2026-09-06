// === Module 16670: useSearchMessageTimestamp ===

// Module 16670 (useSearchMessageTimestamp)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 7641 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export const useSearchMessageTimestamp = function useSearchMessageTimestamp(message, channel) {
  let id = channel;
  const items = [message, channel];
  return noop.useMemo(() => {
    let obj = SnowflakeUtilsDefault;
    id = message.id;
    if (id == null) {
      id = id.id;
    }
    const extractTimestampResult = obj.extractTimestamp(id);
    obj = { timestamp: NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, true), timestampAccessibilityLabel: null };
    obj.timestampAccessibilityLabel = NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, false);
    return obj;
  }, items);
};