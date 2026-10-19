// === Module 11930: useFormattedTimestamp ===

// Module 11930 (useFormattedTimestamp)
import DurationsDefault from "Durations" /* 1104 */;
import _modDef2050 from "module_2050" /* 2050 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let items = [2 * DurationsDefault.Seconds.MINUTE, DurationsDefault.Seconds.SECOND];
const items1 = [items, , , ];
const items2 = [5 * DurationsDefault.Seconds.MINUTE, DurationsDefault.Seconds.MINUTE];
items1[1] = items2;
const items3 = [45 * DurationsDefault.Seconds.MINUTE, 2 * DurationsDefault.Seconds.MINUTE];
items1[2] = items3;
const items4 = [21 * DurationsDefault.Seconds.HOUR, 5 * DurationsDefault.Seconds.MINUTE];
items1[3] = items4;
let closure_6 = 2 * DurationsDefault.Seconds.HOUR;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/useFormattedTimestamp.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFormattedTimestamp(format) {
  let parsed = format;
  _require = format;
  const cResult = require("c").c(7);
  let obj = require("c");
  const tmp = _require;
  [tmp5, importDefault] = noop.useState(null);
  if (cResult[0] === format.format) {
    if (cResult[1] === parsed.parsed) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    if ("R" === parsed.format) {
      if (null == tmp5) {
        let TIMESTAMP_FORMATS = tmp(8444).TIMESTAMP_FORMATS;
        let formatted = TIMESTAMP_FORMATS.R(parsed.parsed);
        parsed = parsed.parsed;
        cResult[4] = parsed;
        cResult[5] = tmp5;
        cResult[6] = formatted;
      }
      formatted = tmp5.formatted;
    } else {
      return parsed.formatted;
    }
  }
  const fn = function p() {
    if ("R" === format.format) {
      let result = 1000 * closure_1_6;
      const _Math = Math;
      const parsed = tmp.parsed;
      const absolute = Math.abs(parsed.diff(_modDef2050()));
      let obj = dependencyMap2[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp14 = _slicedToArray(tmp11, 2);
        if (absolute < 1000 * tmp14[0]) {
          result = 1000 * tmp14[1];
          obj.return();
          break;
        }
        let _setInterval = setInterval;
        format = setInterval(() => {
          const obj = { parsed: closure_0.parsed, formatted: null };
          const TIMESTAMP_FORMATS = closure_0(8444).TIMESTAMP_FORMATS;
          obj.formatted = TIMESTAMP_FORMATS.R(closure_0.parsed);
          closure_1_1(obj);
        }, result);
        return () => clearInterval(closure_0);
      }
    }
  };
  const items = [, ];
  ({ format: arr[0], parsed: arr[1] } = parsed);
  cResult[0] = parsed.format;
  cResult[1] = parsed.parsed;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}) : (function useFormattedTimestamp(format) {
  _require = format;
  [tmp2, importDefault] = noop.useState(null);
  const items = [, ];
  ({ format: arr[0], parsed: arr[1] } = format);
  const effect = noop.useEffect(() => {
    if ("R" === format.format) {
      let result = 1000 * closure_1_6;
      const _Math = Math;
      const parsed = tmp.parsed;
      const absolute = Math.abs(parsed.diff(_modDef2050()));
      let obj = dependencyMap2[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp14 = _slicedToArray(tmp11, 2);
        if (absolute < 1000 * tmp14[0]) {
          result = 1000 * tmp14[1];
          obj.return();
          break;
        }
        let _setInterval = setInterval;
        format = setInterval(() => {
          const obj = { parsed: closure_0.parsed, formatted: null };
          const TIMESTAMP_FORMATS = closure_0(8444).TIMESTAMP_FORMATS;
          obj.formatted = TIMESTAMP_FORMATS.R(closure_0.parsed);
          closure_1_1(obj);
        }, result);
        return () => clearInterval(closure_0);
      }
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
});