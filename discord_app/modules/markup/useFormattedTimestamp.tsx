// discord_app/modules/markup/useFormattedTimestamp.tsx
import setDefault from "../../utils/Durations.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";

const require = arg1;
let items = [2 * setDefault.Seconds.MINUTE, setDefault.Seconds.SECOND];
const items1 = [items, , , ];
const items2 = [5 * setDefault.Seconds.MINUTE, setDefault.Seconds.MINUTE];
items1[1] = items2;
const items3 = [45 * setDefault.Seconds.MINUTE, 2 * setDefault.Seconds.MINUTE];
items1[2] = items3;
const items4 = [21 * setDefault.Seconds.HOUR, 5 * setDefault.Seconds.MINUTE];
items1[3] = items4;
let closure_6 = 2 * setDefault.Seconds.HOUR;
let result = require("set").fileFinishedImporting("modules/markup/useFormattedTimestamp.tsx");

export default function useFormattedTimestamp(format) {
  const _require = format;
  const forceUpdate = require("../../../_runtime/07119_useForceUpdate.js").useForceUpdate();
  const items = [forceUpdate, , ];
  ({ format: arr[1], parsed: arr[2] } = format);
  const effect = React.useEffect(() => {
    if ("R" === format.format) {
      let result = 1000 * closure_1_6;
      const _Math = Math;
      const parsed = tmp.parsed;
      const absolute = Math.abs(parsed.diff(forceUpdate(closure_1_2[4])()));
      const obj = closure_1_5[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp13 = closure_1_3;
        let tmp14 = closure_1_3(tmp11, 2);
        if (absolute < 1000 * tmp14[0]) {
          result = 1000 * tmp14[1];
          let tmp15 = obj;
          obj.return();
          break;
        }
        let _setInterval = setInterval;
        format = setInterval(() => {
          callback();
        }, result);
        return () => clearInterval(closure_0);
      }
      const tmp8 = closure_1_5;
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