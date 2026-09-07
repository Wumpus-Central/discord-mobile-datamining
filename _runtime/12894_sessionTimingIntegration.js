// === Module 12894: sessionTimingIntegration ===

// Module 12894 (sessionTimingIntegration)
import _mod12815 from "module_12815" /* 12815 */;
import setupIntegration from "module_12857" /* 12857 */;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  let obj = require("module_12815");
  _require = 1000 * obj.timestampInSeconds();
  obj = {
    name: "SessionTiming",
    processEvent(extra) {
      let obj = _mod12815;
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