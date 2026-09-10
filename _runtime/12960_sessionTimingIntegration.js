// _runtime/12960_sessionTimingIntegration.js
import _mod12881 from "metro/12881__.js";
import setupIntegration from "metro/12923__.js";

export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = require("metro/12881__.js");
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = _mod12881;
      const result = 1000 * obj.timestampInSeconds();
      obj = {};
      const merged = Object.assign(extra);
      obj = {};
      const merged1 = Object.assign(extra.extra);
      obj["session:start"] = closure_0;
      obj["session:duration"] = result - closure_0;
      obj["session:end"] = result;
      obj.extra = obj;
      return obj;
    },
  };
  return obj;
});
