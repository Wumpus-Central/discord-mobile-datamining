// discord_app/modules/markup/useFormattedTimestamp.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
let items = [2 * DurationsDefault.Seconds.MINUTE, DurationsDefault.Seconds.SECOND];
const items1 = [items, , ,];
const items2 = [5 * DurationsDefault.Seconds.MINUTE, DurationsDefault.Seconds.MINUTE];
items1[1] = items2;
const items3 = [45 * DurationsDefault.Seconds.MINUTE, 2 * DurationsDefault.Seconds.MINUTE];
items1[2] = items3;
const items4 = [21 * DurationsDefault.Seconds.HOUR, 5 * DurationsDefault.Seconds.MINUTE];
items1[3] = items4;
let closure_6 = 2 * DurationsDefault.Seconds.HOUR;
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/useFormattedTimestamp.tsx");

export default function useFormattedTimestamp(format) {
  _require = format;
  const forceUpdate = require("areHookInputsEqual").useForceUpdate();
  const items = [forceUpdate, ,];
  ({ format: arr[1], parsed: arr[2] } = format);
  const effect = noop.useEffect(() => {
    if ("R" === format.format) {
      let result = 1000 * closure_1_6;
      const _Math = Math;
      const parsed = tmp.parsed;
      const absolute = Math.abs(parsed.diff(forceUpdate(closure_1_2[4])()));
      const obj = dependencyMap[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp14 = _slicedToArray(tmp11, 2);
        if (absolute < 1000 * tmp14[0]) {
          result = 1000 * tmp14[1];
          obj.return();
          break;
        }
        let _setInterval = setInterval;
        format = setInterval(() => {
          forceUpdate();
        }, result);
        return () => clearInterval(closure_0);
      }
    }
  }, items);
  if ("R" === format.format) {
    const TIMESTAMP_FORMATS = require("TimestampUtils").TIMESTAMP_FORMATS;
    let formatted = TIMESTAMP_FORMATS.R(format.parsed);
  } else {
    formatted = format.formatted;
  }
  return formatted;
}
