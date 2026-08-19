// discord_app/modules/user_profile/hooks/useActivityTimer.tsx
import obj132Default from "../../../utils/Durations.tsx";
import calculateTimestampDurations from "../../content_inventory/utils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";

require = fn;
({ useEffect: c4, useState: c5 } = noop);
let result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useActivityTimer.tsx");

export default function useActivityTimer(start) {
  start = start.start;
  let first;
  const interval = new first(4259).Interval();
  first = callback(callback3(interval), 1)[0];
  const tmp3 = callback(callback3(() => Date.now()), 2);
  importDefault = tmp3[1];
  const items = [first];
  callback2(() => {
    first.start(callback(dependencyMap[2]).Millis.HALF_SECOND, () => callback(Date.now()));
    return () => closure_0.stop();
  }, items);
  const diff = start.end - start;
  const result = diff / obj132Default.Millis.SECOND;
  const diff1 = tmp3[0] - start;
  const bound = Math.max(Math.min(diff1 / obj132Default.Millis.SECOND, result), 0);
  return { elapsed: bound, duration: result, percentage: Math.max(Math.min(bound / result, 1), 0) };
};
export const formatTime = function formatTime(arg0) {
  const rounded = Math.floor(arg0);
  const result = rounded % obj132Default.Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / obj132Default.Seconds.MINUTE);
  const result1 = rounded1 % obj132Default.Seconds.MINUTE;
  const rounded2 = Math.floor(arg0 / obj132Default.Seconds.HOUR);
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
  const seconds = rounded % obj132Default.Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / obj132Default.Seconds.MINUTE);
  const minutes = rounded1 % obj132Default.Seconds.MINUTE;
  const hours = Math.floor(arg0 / obj132Default.Seconds.HOUR);
  return calculateTimestampDurations.formatTimestampToA11yLabel({ hours, minutes, seconds });
};