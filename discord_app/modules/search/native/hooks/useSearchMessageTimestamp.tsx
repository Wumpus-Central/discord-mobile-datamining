// discord_app/modules/search/native/hooks/useSearchMessageTimestamp.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import NotificationCenterUtils from "../../../notification_center/NotificationCenterUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
    obj = {
      timestamp: NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, true),
      timestampAccessibilityLabel: null,
    };
    obj.timestampAccessibilityLabel = NotificationCenterUtils.getRelativeTimestamp(extractTimestampResult, false);
    return obj;
  }, items);
};
