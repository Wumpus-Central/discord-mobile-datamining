// discord_app/utils/native/TimeUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

let result = obj132.fileFinishedImporting("utils/native/TimeUtils.tsx");

export const getTimeFormat = function getTimeFormat(playableDuration, padMinutes) {
  padMinutes = undefined;
  if (padMinutes != null) {
    padMinutes = padMinutes.padMinutes;
  }
  const result = tmp % 60;
  const result1 = (tmp - result) / 60;
  if (padMinutes != null) {
    if (padMinutes) {
      const _String = String;
      const _String2 = String;
      const StringResult = String(result1);
      const padStartResult = String(result1).padStart(2, "0");
      const _HermesInternal = HermesInternal;
      let combined = "" + padStartResult + ":" + String(result).padStart(2, "0");
      const StringResult1 = String(result);
    }
    return combined;
  }
  const StringResult2 = String(result1);
  combined = "" + StringResult2 + ":" + String(result).padStart(2, "0");
};