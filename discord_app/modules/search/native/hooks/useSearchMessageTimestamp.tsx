// === Module 16167: useSearchMessageTimestamp ===

// Module 16167 (useSearchMessageTimestamp)
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export const useSearchMessageTimestamp = function useSearchMessageTimestamp(message, channel) {
  closure_0 = message;
  closure_1 = channel;
  const items = [message, channel];
  return React.useMemo(() => {
    let obj = channel(closure_1_2[1]);
    let id = message.id;
    if (id == null) {
      id = channel.id;
    }
    const extractTimestampResult = obj.extractTimestamp(id);
    obj = { timestamp: message(closure_1_2[2]).getRelativeTimestamp(extractTimestampResult, true), timestampAccessibilityLabel: null };
    const obj3 = message(closure_1_2[2]);
    obj[1] = message(closure_1_2[2]).getRelativeTimestamp(extractTimestampResult, false);
    return obj;
  }, items);
};