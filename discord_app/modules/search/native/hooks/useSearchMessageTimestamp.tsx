// === Module 15894: useSearchMessageTimestamp ===

// Module 15894 (useSearchMessageTimestamp)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export const useSearchMessageTimestamp = function useSearchMessageTimestamp(message, channel) {
  closure_0 = message;
  closure_1 = channel;
  const items = [message, channel];
  return React.useMemo(() => {
    let obj = channel(dependencyMap[1]);
    let id = message.id;
    if (id == null) {
      id = channel.id;
    }
    const extractTimestampResult = obj.extractTimestamp(id);
    obj = { timestamp: message(dependencyMap[2]).getRelativeTimestamp(extractTimestampResult, true), timestampAccessibilityLabel: null };
    const obj3 = message(dependencyMap[2]);
    obj[1] = message(dependencyMap[2]).getRelativeTimestamp(extractTimestampResult, false);
    return obj;
  }, items);
};