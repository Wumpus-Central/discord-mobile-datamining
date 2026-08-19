// === Module 153: NativePerformanceCxx ===

// Module 153 (NativePerformanceCxx)
import NativePerformanceCxxDefault from "NativePerformanceCxx" /* 154 */;
import setUpPerformanceModernDefault from "setUpPerformanceModern" /* 155 */;

if (NativePerformanceCxxDefault) {
  setUpPerformanceModernDefault();
} else if (!global.performance) {
  const obj = { mark: null, clearMarks: null, measure: null, clearMeasures: null, now: null };
  obj[0] = function mark() {

  };
  obj[1] = function clearMarks() {

  };
  obj[2] = function measure() {

  };
  obj[3] = function clearMeasures() {

  };
  obj[4] = function now() {
    let now = global.nativePerformanceNow;
    if (!now) {
      const _Date = Date;
      now = Date.now;
    }
    return now();
  };
  global.performance = obj;
}