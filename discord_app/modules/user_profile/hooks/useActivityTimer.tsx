// === Module 9383: useActivityTimer ===

// Module 9383 (useActivityTimer)
import setDefault from "set" /* 687 */;
import calculateTimestampDurations from "calculateTimestampDurations" /* 8012 */;
import closure_3 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

require = arg1;
({ useEffect: c4, useState: c5 } = noop);
let result = require("set").fileFinishedImporting("modules/user_profile/hooks/useActivityTimer.tsx");

export default function useActivityTimer(start) {
  start = start.start;
  let first;
  importDefault = undefined;
  const interval = new first(4332).Interval();
  first = callback(callback3(interval), 1)[0];
  const tmp3 = callback(callback3(() => Date.now()), 2);
  importDefault = tmp3[1];
  const items = [first];
  callback2(() => {
    first.start(callback(closure_1_2[2]).Millis.HALF_SECOND, () => callback(Date.now()));
    return () => closure_0.stop();
  }, items);
  const diff = start.end - start;
  const result = diff / setDefault.Millis.SECOND;
  const diff1 = tmp3[0] - start;
  const bound = Math.max(Math.min(diff1 / setDefault.Millis.SECOND, result), 0);
  return { elapsed: bound, duration: result, percentage: Math.max(Math.min(bound / result, 1), 0) };
};
export const formatTime = function formatTime(arg0) {
  const rounded = Math.floor(arg0);
  const result = rounded % setDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / setDefault.Seconds.MINUTE);
  const result1 = rounded1 % setDefault.Seconds.MINUTE;
  const rounded2 = Math.floor(arg0 / setDefault.Seconds.HOUR);
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
  const seconds = rounded % setDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / setDefault.Seconds.MINUTE);
  const minutes = rounded1 % setDefault.Seconds.MINUTE;
  const hours = Math.floor(arg0 / setDefault.Seconds.HOUR);
  return calculateTimestampDurations.formatTimestampToA11yLabel({ hours, minutes, seconds });
};