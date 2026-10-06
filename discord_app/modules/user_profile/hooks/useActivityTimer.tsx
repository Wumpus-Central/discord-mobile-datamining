// === Module 12865: useActivityTimer ===

// Module 12865 (useActivityTimer)
import DurationsDefault from "Durations" /* 1102 */;
import utils from "utils" /* 7829 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
({ useEffect: closure_4, useState: hasOwnProperty } = react);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(start) {
  let first;
  let first1;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  const obj = first1(576);
  const cResult = obj.c(9);
  start = start.start;
  const end = start.end;
  const tmp = first1;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const self = this;
    const self2 = this;
    const interval = new tmp(2046).Interval();
    cResult[0] = interval;
    first = interval;
  } else {
    first = cResult[0];
  }
  first1 = _slicedToArray(closure_5(first), 1)[0];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      return Date.now();
    };
    cResult[1] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
  }
  [tmp12, importDefault] = closure_5(tmp10);
  _slicedToArray(closure_5(tmp10), 2);
  if (cResult[2] !== first1) {
    const fn2 = function v() {
      first1.start(DurationsDefault.Millis.HALF_SECOND, () => closure_1_1(Date.now()));
      return () => first1.stop();
    };
    const items = [first1];
    cResult[2] = first1;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp14 = items;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[3];
    tmp14 = cResult[4];
  }
  closure_4(tmp13, tmp14);
  const diff = end - start;
  const result = diff / DurationsDefault.Millis.SECOND;
  const diff1 = tmp12 - start;
  const bound = Math.max(Math.min(diff1 / DurationsDefault.Millis.SECOND, result), 0);
  const bound1 = Math.max(Math.min(bound / result, 1), 0);
  if (cResult[5] === result) {
    if (cResult[6] === bound) {
      let tmp21;
      if (cResult[7] === bound1) {
        tmp21 = cResult[8];
      }
      return tmp21;
    }
  }
  const obj2 = { elapsed: bound, duration: result, percentage: bound1 };
  cResult[5] = result;
  cResult[6] = bound;
  cResult[7] = bound1;
  cResult[8] = obj2;
  tmp21 = obj2;
}) : ((start) => {
  let closure_1;
  let first1;
  start = start.start;
  let first;
  importDefault = undefined;
  const end = start.end;
  const interval = new first(2046).Interval();
  first = _slicedToArray(closure_5(interval), 1)[0];
  [first1, importDefault] = closure_5(() => Date.now());
  const items = [first];
  closure_4(() => {
    first.start(DurationsDefault.Millis.HALF_SECOND, () => closure_1_1(Date.now()));
    return () => first.stop();
  }, items);
  const diff = end - start;
  const result = diff / DurationsDefault.Millis.SECOND;
  const diff1 = first1 - start;
  const bound = Math.max(Math.min(diff1 / DurationsDefault.Millis.SECOND, result), 0);
  const obj = { elapsed: bound, duration: result, percentage: Math.max(Math.min(bound / result, 1), 0) };
  return obj;
});
let result = size.fileFinishedImporting("modules/user_profile/hooks/useActivityTimer.tsx");

export default tmp3;
export const formatTime = function formatTime(duration) {
  let combined;
  const rounded = Math.floor(duration);
  const result = rounded % DurationsDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(duration / DurationsDefault.Seconds.MINUTE);
  const result1 = rounded1 % DurationsDefault.Seconds.MINUTE;
  const rounded2 = Math.floor(duration / DurationsDefault.Seconds.HOUR);
  if (0 === rounded2) {
    const _String4 = String;
    const _String5 = String;
    const StringResult = String(result1);
    const _HermesInternal2 = HermesInternal;
    const padStartResult = StringResult.padStart(2, "0");
    const StringResult1 = String(result);
    combined = "" + padStartResult + ":" + StringResult1.padStart(2, "0");
  } else {
    const _String = String;
    const StringResult2 = String(rounded2);
    const _String2 = String;
    const _String3 = String;
    const padStartResult1 = StringResult2.padStart(2, "0");
    const StringResult3 = String(result1);
    const _HermesInternal = HermesInternal;
    const padStartResult2 = StringResult3.padStart(2, "0");
    const StringResult4 = String(result);
    combined = "" + padStartResult1 + ":" + padStartResult2 + ":" + StringResult4.padStart(2, "0");
  }
  return combined;
};
export const formatTimeForA11yLabel = function formatTimeForA11yLabel(arg0) {
  const rounded = Math.floor(arg0);
  const seconds = rounded % DurationsDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / DurationsDefault.Seconds.MINUTE);
  const minutes = rounded1 % DurationsDefault.Seconds.MINUTE;
  const hours = Math.floor(arg0 / DurationsDefault.Seconds.HOUR);
  const obj = utils;
  return obj.formatTimestampToA11yLabel({ hours, minutes, seconds });
};