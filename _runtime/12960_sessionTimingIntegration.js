// === Module 12960: sessionTimingIntegration ===

// Module 12960 (sessionTimingIntegration)
import _mod12881 from "module_12881" /* 12881 */;
import setupIntegration from "module_12923" /* 12923 */;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = require("module_12881");
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
    }
  };
  return obj;
});