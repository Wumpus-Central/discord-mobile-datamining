// _runtime/07831_sessionTimingIntegration.js
import setupIntegration from "setupIntegration";
import { dateTimestampInSeconds } from "07752_dateTimestampInSeconds.js";


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = _dateTimestampInSeconds;
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = callback(outer1_1[0]);
      const result = 1000 * obj.timestampInSeconds();
      obj = {};
      const merged = Object.assign(extra);
      obj = {};
      const merged1 = Object.assign(extra.extra);
      obj["session:start"] = callback;
      obj["session:duration"] = result - callback;
      obj["session:end"] = result;
      obj.extra = obj;
      return obj;
    }
  };
  return obj;
});