// === Module 7302: utils/TimeUtils ===

// Module 7302 (utils/TimeUtils)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("utils/native/TimeUtils.tsx");

export const getTimeFormat = function getTimeFormat(playableDuration, padMinutes) {
  padMinutes = undefined;
  if (padMinutes != null) {
    padMinutes = padMinutes.padMinutes;
  }
  const result = tmp % 60;
  const result1 = (tmp - result) / 60;
  if (padMinutes != null) {
    let combined;
    if (padMinutes) {
      const _String = String;
      const _String2 = String;
      const StringResult = String(result1);
      const _HermesInternal = HermesInternal;
      const padStartResult = StringResult.padStart(2, "0");
      const StringResult1 = String(result);
      combined = "" + padStartResult + ":" + StringResult1.padStart(2, "0");
    }
    return combined;
  }
  const StringResult2 = String(result1);
  const StringResult3 = String(result);
  combined = "" + StringResult2 + ":" + StringResult3.padStart(2, "0");
};