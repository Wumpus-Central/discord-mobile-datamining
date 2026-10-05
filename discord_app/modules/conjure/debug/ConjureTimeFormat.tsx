// discord_app/modules/conjure/debug/ConjureTimeFormat.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/debug/ConjureTimeFormat.tsx");

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
      const self = this;
      const self2 = this;
      const date = new Date(parsed);
      const _String = String;
      const StringResult = String(date.getHours());
      const _String2 = String;
      const padStartResult = StringResult.padStart(2, "0");
      const _String3 = String;
      const StringResult1 = String(date.getMinutes());
      const _HermesInternal = HermesInternal;
      const padStartResult1 = StringResult1.padStart(2, "0");
      const StringResult2 = String(date.getSeconds());
      const combined = "" + padStartResult + ":" + padStartResult1 + ":" + StringResult2.padStart(2, "0");
      let combined1 = combined;
      if ("millis" === str) {
        const _String4 = String;
        const _HermesInternal2 = HermesInternal;
        const StringResult3 = String(date.getMilliseconds());
        combined1 = "" + combined + "." + StringResult3.padStart(3, "0");
      }
      return combined1;
    }
  }
};
