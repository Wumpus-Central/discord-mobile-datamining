// === Module 12865: useActivityTimer ===

// Module 12865 (useActivityTimer)
import DurationsDefault from "Durations" /* 1102 */;
import utils from "utils" /* 7829 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useEffect: closure_4, useState: hasOwnProperty } = noop);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/useActivityTimer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((start) => {
  const cResult = first1(576).c(9);
  start = start.start;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const interval = new tmp(2046).Interval();
    cResult[0] = interval;
    let first = interval;
  } else {
    first = cResult[0];
  }
  first1 = _slicedToArray(closure_5(first), 1)[0];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p() {
      return Date.now();
    };
    cResult[1] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[1];
  }
  const obj = first1(576);
  tmp = first1;
  [tmp14, importDefault] = closure_5(tmp12);
  if (cResult[2] !== first1) {
    const fn2 = function v() {
      first1.start(DurationsDefault.Millis.HALF_SECOND, () => closure_1_1(Date.now()));
      return () => first1.stop();
    };
    const items = [first1];
    cResult[2] = first1;
    cResult[3] = fn2;
    cResult[4] = items;
    let tmp16 = items;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[3];
    tmp16 = cResult[4];
  }
  closure_4(tmp15, tmp16);
  const diff = start.end - start;
  const result = diff / DurationsDefault.Millis.SECOND;
  const diff1 = tmp14 - start;
  const bound = Math.max(Math.min(diff1 / DurationsDefault.Millis.SECOND, result), 0);
  const bound1 = Math.max(Math.min(bound / result, 1), 0);
  if (cResult[5] === result) {
    if (cResult[6] === bound) {
      if (cResult[7] === bound1) {
        let tmp23 = cResult[8];
      }
      return tmp23;
    }
  }
  const obj2 = { elapsed: bound, duration: result, percentage: bound1 };
  cResult[5] = result;
  cResult[6] = bound;
  cResult[7] = bound1;
  cResult[8] = obj2;
  tmp23 = obj2;
  const tmp10Result = _slicedToArray(closure_5(tmp12), 2);
}) : ((start) => {
  start = start.start;
  let first;
  const interval = new first(2046).Interval();
  first = _slicedToArray(closure_5(interval), 1)[0];
  const tmp3 = _slicedToArray(closure_5(() => Date.now()), 2);
  importDefault = tmp3[1];
  const items = [first];
  closure_4(() => {
    first.start(DurationsDefault.Millis.HALF_SECOND, () => closure_1_1(Date.now()));
    return () => first.stop();
  }, items);
  const diff = start.end - start;
  const result = diff / DurationsDefault.Millis.SECOND;
  const diff1 = tmp3[0] - start;
  const bound = Math.max(Math.min(diff1 / DurationsDefault.Millis.SECOND, result), 0);
  return { elapsed: bound, duration: result, percentage: Math.max(Math.min(bound / result, 1), 0) };
});
export const formatTime = function formatTime(duration) {
  const rounded = Math.floor(duration);
  const result = rounded % DurationsDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(duration / DurationsDefault.Seconds.MINUTE);
  const result1 = rounded1 % DurationsDefault.Seconds.MINUTE;
  const rounded2 = Math.floor(duration / DurationsDefault.Seconds.HOUR);
  if (0 === rounded2) {
    const _String4 = String;
    const _String5 = String;
    const StringResult = String(result1);
    const padStartResult = String(result1).padStart(2, "0");
    const _HermesInternal2 = HermesInternal;
    let combined = "" + padStartResult + ":" + String(result).padStart(2, "0");
    const StringResult1 = String(result);
  } else {
    const _String = String;
    const padStartResult1 = String(rounded2).padStart(2, "0");
    const _String2 = String;
    const StringResult2 = String(rounded2);
    const _String3 = String;
    const StringResult3 = String(result1);
    const padStartResult2 = String(result1).padStart(2, "0");
    const _HermesInternal = HermesInternal;
    combined = "" + padStartResult1 + ":" + padStartResult2 + ":" + String(result).padStart(2, "0");
    const StringResult4 = String(result);
  }
  return combined;
};
export const formatTimeForA11yLabel = function formatTimeForA11yLabel(arg0) {
  const rounded = Math.floor(arg0);
  const seconds = rounded % DurationsDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / DurationsDefault.Seconds.MINUTE);
  const minutes = rounded1 % DurationsDefault.Seconds.MINUTE;
  const hours = Math.floor(arg0 / DurationsDefault.Seconds.HOUR);
  return utils.formatTimestampToA11yLabel({ hours, minutes, seconds });
};