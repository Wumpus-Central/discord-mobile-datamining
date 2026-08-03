import noop from "noop";

const require = arg1;
const result = require("getRelativeTimestamp").fileFinishedImporting("modules/search/native/hooks/useSearchMessageTimestamp.tsx");

export const useSearchMessageTimestamp = function useSearchMessageTimestamp(message, channel) {
  let closure_0 = message;
  let closure_1 = channel;
  const items = [message, channel];
  return React.useMemo(() => {
    let obj = channel(outer1_2[1]);
    let id = message.id;
    if (id == null) {
      id = channel.id;
    }
    const extractTimestampResult = obj.extractTimestamp(id);
    obj = { timestamp: null, timestampAccessibilityLabel: null };
    obj[0] = message(outer1_2[2]).getRelativeTimestamp(extractTimestampResult, true);
    const obj3 = message(outer1_2[2]);
    obj[1] = message(outer1_2[2]).getRelativeTimestamp(extractTimestampResult, false);
    return obj;
  }, items);
};