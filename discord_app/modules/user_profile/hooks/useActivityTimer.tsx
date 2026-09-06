// discord_app/modules/user_profile/hooks/useActivityTimer.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import utils from "../../content_inventory/utils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const noop = fn(19);
({ useEffect: closure_4, useState: hasOwnProperty } = noop);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/useActivityTimer.tsx");

export default function useActivityTimer(start) {
  start = start.start;
  let first;
  const interval = new first(4447).Interval();
  first = _slicedToArray(closure_5(interval), 1)[0];
  const tmp3 = _slicedToArray(
    closure_5(() => Date.now()),
    2,
  );
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
}
export const formatTime = function formatTime(arg0) {
  const rounded = Math.floor(arg0);
  const result = rounded % DurationsDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / DurationsDefault.Seconds.MINUTE);
  const result1 = rounded1 % DurationsDefault.Seconds.MINUTE;
  const rounded2 = Math.floor(arg0 / DurationsDefault.Seconds.HOUR);
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
