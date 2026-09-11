// === Module 12983: sessionTimingIntegration ===

// Module 12983 (sessionTimingIntegration)
import _mod12904 from "module_12904" /* 12904 */;
import setupIntegration from "module_12946" /* 12946 */;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = require("module_12904");
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = _mod12904;
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