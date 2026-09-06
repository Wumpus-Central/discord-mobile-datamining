// _runtime/00153_NativePerformanceCxx.js
import _modDef154 from "metro/00154__.js";
import _modDef155 from "metro/00155__.js";

if (_modDef154) {
  _modDef155();
} else if (!global.performance) {
  const obj = {
    mark() {},
    clearMarks() {},
    measure() {},
    clearMeasures() {},
    now() {
      let now = global.nativePerformanceNow;
      if (!now) {
        const _Date = Date;
        now = Date.now;
      }
      return now();
    },
  };
  global.performance = obj;
}
