// === Module 153: NativePerformanceCxx ===

// Module 153 (NativePerformanceCxx)
import _modDef154 from "module_154" /* 154 */;
import _modDef155 from "module_155" /* 155 */;

if (_modDef154) {
  _modDef155();
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