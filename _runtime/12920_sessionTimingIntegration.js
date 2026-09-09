// === Module 12920: sessionTimingIntegration ===

// Module 12920 (sessionTimingIntegration)
import _mod12841 from "module_12841" /* 12841 */;
import setupIntegration from "module_12883" /* 12883 */;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = require("module_12841");
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = _mod12841;
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