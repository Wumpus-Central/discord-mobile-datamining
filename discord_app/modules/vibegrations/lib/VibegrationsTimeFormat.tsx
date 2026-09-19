// === Module 17068: VibegrationsTimeFormat ===

// Module 17068 (VibegrationsTimeFormat)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTimeFormat.tsx");

export const formatClockTime = function formatClockTime(startedAt) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "seconds";
  }
  if (startedAt.length > 64) {
    return null;
  } else {
    const _Date2 = Date;
    const parsed = Date.parse(startedAt);
    const _Number = Number;
    if (Number.isNaN(parsed)) {
      return null;
    } else {
      const _Date = Date;
      const date = new Date(parsed);
      const _String = String;
      const padStartResult = String(date.getHours()).padStart(2, "0");
      const _String2 = String;
      const StringResult = String(date.getHours());
      const StringResult1 = String(date.getMinutes());
      const _String3 = String;
      const padStartResult1 = String(date.getMinutes()).padStart(2, "0");
      const _HermesInternal = HermesInternal;
      const combined = "" + padStartResult + ":" + padStartResult1 + ":" + String(date.getSeconds()).padStart(2, "0");
      let combined1 = combined;
      if ("millis" === str) {
        const _String4 = String;
        const _HermesInternal2 = HermesInternal;
        combined1 = "" + combined + "." + String(date.getMilliseconds()).padStart(3, "0");
        const StringResult3 = String(date.getMilliseconds());
      }
      return combined1;
    }
  }
};