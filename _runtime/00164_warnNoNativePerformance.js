// _runtime/00164_warnNoNativePerformance.js
import warnOnceDefault from "00165_warnOnce.js";
import importDefaultResult from "00154_NativePerformanceCxx.js";

let fn;
if (importDefaultResult != null) {
  fn = importDefaultResult.now;
}
if (fn == null) {
  fn = global.nativePerformanceNow;
}
if (fn == null) {
  fn = () => Date.now();
}

export const warnNoNativePerformance = function warnNoNativePerformance() {
  warnOnceDefault("missing-native-performance", "Missing native implementation of Performance");
};
export const getCurrentTimeStamp = fn;