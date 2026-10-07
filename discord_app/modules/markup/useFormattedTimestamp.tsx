// discord_app/modules/markup/useFormattedTimestamp.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

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
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/markup/useFormattedTimestamp.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let parsed = arg0;
      _require = arg0;
      let R = _require;
      let RResult = dependencyMap;
      const cResult = require("c").c(7);
      let obj = require("c");
      const forceUpdate = require("areHookInputsEqual").useForceUpdate();
      if (cResult[0] === forceUpdate) {
        if (cResult[1] === parsed.format) {
          if (cResult[2] === parsed.parsed) {
            let tmp4 = cResult[3];
            let tmp5 = cResult[4];
          }
          const effect = noop.useEffect(tmp4, tmp5);
          if ("R" === parsed.format) {
            if (cResult[5] !== parsed.parsed) {
              const TIMESTAMP_FORMATS = R(5814).TIMESTAMP_FORMATS;
              R = TIMESTAMP_FORMATS.R;
              RResult = R(parsed.parsed);
              parsed = parsed.parsed;
              cResult[5] = parsed;
              cResult[6] = RResult;
            }
          } else {
            return parsed.formatted;
          }
        }
      }
      const fn = function c() {
        if ("R" === format.format) {
          let result = 1000 * closure_1_6;
          const _Math = Math;
          const parsed = tmp.parsed;
          const absolute = Math.abs(parsed.diff(forceUpdate(closure_1_2[6])()));
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
      };
      const items = [forceUpdate, ,];
      ({ format: arr[1], parsed: arr[2] } = parsed);
      cResult[0] = forceUpdate;
      cResult[1] = parsed.format;
      cResult[2] = parsed.parsed;
      cResult[3] = fn;
      cResult[4] = items;
      tmp5 = items;
      tmp4 = fn;
      const obj2 = require("areHookInputsEqual");
    }
  : (format) => {
      _require = format;
      const forceUpdate = require("areHookInputsEqual").useForceUpdate();
      const items = [forceUpdate, ,];
      ({ format: arr[1], parsed: arr[2] } = format);
      const effect = noop.useEffect(() => {
        if ("R" === format.format) {
          let result = 1000 * closure_1_6;
          const _Math = Math;
          const parsed = tmp.parsed;
          const absolute = Math.abs(parsed.diff(forceUpdate(closure_1_2[6])()));
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
    };
