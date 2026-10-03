// _runtime/12658_sessionTimingIntegration.js
import _mod12579 from "metro/12579__.js";
import setupIntegration from "metro/12621__.js";

const require = globalThis.__r;

export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("metro/12579__.js").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod12579.timestampInSeconds();
      const obj2 = {};
      const merged = Object.assign(extra);
      const obj3 = {};
      const merged1 = Object.assign(extra.extra);
      obj3["session:start"] = closure_0;
      obj3["session:duration"] = result - closure_0;
      obj3["session:end"] = result;
      obj2.extra = obj3;
      return obj2;
    },
  };
});
