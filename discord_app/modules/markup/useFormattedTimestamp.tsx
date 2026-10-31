// discord_app/modules/markup/useFormattedTimestamp.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import _modDef2042 from "../../../_runtime/metro/02042__.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
function getTimestampUpdateInterval(parsed) {
  let tmp = timestamp;
  if (timestamp === undefined) {
    tmp = _modDef2042();
  }
  const absolute = Math.abs(parsed.diff(tmp));
  const obj = items1[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp8 = _slicedToArray(tmp6, 2);
    if (absolute < 1000 * tmp8[0]) {
      let result = 1000 * tmp8[1];
      obj.return();
      return result;
    }
  }
  return 1000 * closure_6;
}
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
  [tmp2, importDefault] = noop.useState(null);
  const items = [,];
  ({ format: arr[0], parsed: arr[1] } = format);
  const effect = noop.useEffect(() => {
    if ("R" === format.format) {
      const _setInterval = setInterval;
      format = setInterval(() => {
        const obj = { parsed: closure_0.parsed, formatted: null };
        const TIMESTAMP_FORMATS = closure_0(dependencyMap[4]).TIMESTAMP_FORMATS;
        obj.formatted = TIMESTAMP_FORMATS.R(closure_0.parsed);
        closure_1_1(obj);
      }, getTimestampUpdateInterval(tmp.parsed));
      return () => clearInterval(closure_0);
    }
  }, items);
  if ("R" === format.format) {
    if (null == tmp2) {
      let TIMESTAMP_FORMATS = require("TimestampUtils").TIMESTAMP_FORMATS;
      let formatted = TIMESTAMP_FORMATS.R(format.parsed);
    }
    formatted = tmp2.formatted;
  } else {
    return format.formatted;
  }
  const tmp = _slicedToArray(noop.useState(null), 2);
}
export { getTimestampUpdateInterval };
