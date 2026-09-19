// _runtime/13141_sessionTimingIntegration.js
import _mod13062 from "metro/13062__.js";
import setupIntegration from "metro/13104__.js";

const require = globalThis.__r;

export const sessionTimingIntegration = setupIntegration.defineIntegration(() => {
  _require = 1000 * require("metro/13062__.js").timestampInSeconds();
  return {
    name: "SessionTiming",
    processEvent(extra) {
      const result = 1000 * _mod13062.timestampInSeconds();
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
