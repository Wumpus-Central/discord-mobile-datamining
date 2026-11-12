// === Module 9823: sessionTimingIntegration ===

// Module 9823 (sessionTimingIntegration)
import _mod9744 from "module_9744" /* 9744 */;
import setupIntegration from "module_9786" /* 9786 */;

const require = globalThis.__r;


export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("module_9744").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod9744.timestampInSeconds();
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