// === Module 12682: sessionTimingIntegration ===

// Module 12682 (sessionTimingIntegration)
import _mod12603 from "module_12603" /* 12603 */;
import setupIntegration from "module_12645" /* 12645 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_12603").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod12603.timestampInSeconds();
      const obj2 = {};
      const merged = Object.assign(extra);
      const obj3 = {};
      const merged1 = Object.assign(extra.extra);
      obj3["session:start"] = closure_0;
      obj3["session:duration"] = result - closure_0;
      obj3["session:end"] = result;
      obj2.extra = obj3;
      return obj2;
    }
  };
});