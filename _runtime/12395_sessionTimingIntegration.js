// _runtime/12395_sessionTimingIntegration.js
import setupIntegration from "12358_setupIntegration.js";
import { dateTimestampInSeconds } from "12316_dateTimestampInSeconds.js";


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = dateTimestampInSeconds;
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = callback(closure_1_1[0]);
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