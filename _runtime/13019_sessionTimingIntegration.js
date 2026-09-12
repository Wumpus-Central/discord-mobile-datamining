// === Module 13019: sessionTimingIntegration ===

// Module 13019 (sessionTimingIntegration)
import _mod12940 from "module_12940" /* 12940 */;
import setupIntegration from "module_12982" /* 12982 */;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = require("module_12940");
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = _mod12940;
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