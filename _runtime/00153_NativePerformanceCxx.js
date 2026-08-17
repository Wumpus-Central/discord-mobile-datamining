// _runtime/00153_NativePerformanceCxx.js
import NativePerformanceCxxDefault from "00154_NativePerformanceCxx.js";
import setUpPerformanceModernDefault from "00155_setUpPerformanceModern.js";

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