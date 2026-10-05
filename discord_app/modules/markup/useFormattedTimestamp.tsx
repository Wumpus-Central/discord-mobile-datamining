// discord_app/modules/markup/useFormattedTimestamp.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, format;

let items = [2 * DurationsDefault.Seconds.MINUTE, DurationsDefault.Seconds.SECOND];
const items1 = [items, , ,];
const items2 = [5 * DurationsDefault.Seconds.MINUTE, DurationsDefault.Seconds.MINUTE];
items1[1] = items2;
const items3 = [45 * DurationsDefault.Seconds.MINUTE, 2 * DurationsDefault.Seconds.MINUTE];
items1[2] = items3;
const items4 = [21 * DurationsDefault.Seconds.HOUR, 5 * DurationsDefault.Seconds.MINUTE];
items1[3] = items4;
let closure_6 = 2 * DurationsDefault.Seconds.HOUR;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (format) => {
      _require = format;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(7);
      const obj2 = require("../../../_runtime/metro/06949__.js");
      const forceUpdate = obj2.useForceUpdate();
      if (cResult[0] === forceUpdate) {
        if (cResult[1] === format.format) {
          let tmp5;
          let tmp6;
          let formatted;
          if (cResult[2] === format.parsed) {
            tmp5 = cResult[3];
            tmp6 = cResult[4];
          }
          const effect = react.useEffect(tmp5, tmp6);
          if ("R" === format.format) {
            let tmp9;
            if (cResult[5] !== format.parsed) {
              const TIMESTAMP_FORMATS = tmp(5807).TIMESTAMP_FORMATS;
              const RResult = TIMESTAMP_FORMATS.R(format.parsed);
              cResult[5] = format.parsed;
              cResult[6] = RResult;
              tmp9 = RResult;
            } else {
              tmp9 = cResult[6];
            }
            formatted = tmp9;
          } else {
            formatted = format.formatted;
          }
          return formatted;
        }
      }
      const fn = function c() {
        let closure_0;
        if ("R" === format.format) {
          let result = 1000 * closure_1_6;
          const _Math = Math;
          const parsed = tmp.parsed;
          const absolute = Math.abs(parsed.diff(forceUpdate(dependencyMap[6])()));
          const obj = items1[Symbol.iterator]();
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
      ({ format: arr[1], parsed: arr[2] } = format);
      cResult[0] = forceUpdate;
      cResult[1] = format.format;
      cResult[2] = format.parsed;
      cResult[3] = fn;
      cResult[4] = items;
      tmp6 = items;
      tmp5 = fn;
    }
  : (format) => {
      let formatted;
      _require = format;
      const tmp = _require;
      let obj = require("../../../_runtime/metro/06949__.js");
      const forceUpdate = obj.useForceUpdate();
      const items = [forceUpdate, ,];
      ({ format: arr[1], parsed: arr[2] } = format);
      const effect = react.useEffect(() => {
        let closure_0;
        if ("R" === format.format) {
          let result = 1000 * closure_1_6;
          const _Math = Math;
          const parsed = tmp.parsed;
          const absolute = Math.abs(parsed.diff(forceUpdate(dependencyMap[6])()));
          const obj = items1[Symbol.iterator]();
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
        const TIMESTAMP_FORMATS = tmp(5807).TIMESTAMP_FORMATS;
        formatted = TIMESTAMP_FORMATS.R(format.parsed);
      } else {
        formatted = format.formatted;
      }
      return formatted;
    };
let result = size.fileFinishedImporting("modules/markup/useFormattedTimestamp.tsx");

export default tmp2;
