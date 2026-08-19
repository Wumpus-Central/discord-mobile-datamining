// discord_app/modules/markup/useFormattedTimestamp.tsx
import obj132Default from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../_runtime/00019_noop.js";

const require = fn;
let items = [2 * obj132Default.Seconds.MINUTE, obj132Default.Seconds.SECOND];
const items1 = [items, , , ];
const items2 = [5 * obj132Default.Seconds.MINUTE, obj132Default.Seconds.MINUTE];
items1[1] = items2;
const items3 = [45 * obj132Default.Seconds.MINUTE, 2 * obj132Default.Seconds.MINUTE];
items1[2] = items3;
const items4 = [21 * obj132Default.Seconds.HOUR, 5 * obj132Default.Seconds.MINUTE];
items1[3] = items4;
let closure_6 = 2 * obj132Default.Seconds.HOUR;
let result = require("obj132").fileFinishedImporting("modules/markup/useFormattedTimestamp.tsx");

export default function useFormattedTimestamp(format) {
  const _require = format;
  const forceUpdate = require("../../../_runtime/07411_useForceUpdate.js").useForceUpdate();
  const items = [forceUpdate, , ];
  ({ format: arr[1], parsed: arr[2] } = format);
  const effect = React.useEffect(() => {
    if ("R" === format.format) {
      let result = 1000 * closure_1_6;
      const _Math = Math;
      const parsed = tmp.parsed;
      const absolute = Math.abs(parsed.diff(forceUpdate(dependencyMap[4])()));
      const obj = items1[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp14 = closure_1_3(tmp11, 2);
        if (absolute < 1000 * tmp14[0]) {
          result = 1000 * tmp14[1];
          obj.return();
          break;
        }
        let _setInterval = setInterval;
        format = setInterval(() => {
          callback();
        }, result);
        return () => clearInterval(closure_0);
      }
    }
  }, items);
  if ("R" === format.format) {
    const TIMESTAMP_FORMATS = require("TimestampUtils.tsx").TIMESTAMP_FORMATS;
    let formatted = TIMESTAMP_FORMATS.R(format.parsed);
  } else {
    formatted = format.formatted;
  }
  return formatted;
};