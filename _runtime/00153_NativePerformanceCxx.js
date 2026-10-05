// === Module 153: NativePerformanceCxx ===

// Module 153 (NativePerformanceCxx)
import _modDef154 from "module_154" /* 154 */;
import setUpPerformanceModernDefault from "setUpPerformanceModern" /* 155 */;

if (_modDef154) {
  setUpPerformanceModernDefault();
} else if (!global.performance) {
  const obj = {
    mark() {

      },
    clearMarks() {

      },
    measure() {

      },
    clearMeasures() {

      },
    now() {
        let now = global.nativePerformanceNow;
        if (!now) {
          const _Date = Date;
          now = Date.now;
        }
        return now();
      }
  };
  global.performance = obj;
}