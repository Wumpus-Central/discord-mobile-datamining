// === Module 12406: sessionTimingIntegration ===

// Module 12406 (sessionTimingIntegration)
import _mod12327 from "module_12327" /* 12327 */;
import setupIntegration from "module_12369" /* 12369 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_12327").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod12327.timestampInSeconds();
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