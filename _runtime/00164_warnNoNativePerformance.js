// _runtime/00164_warnNoNativePerformance.js
import warnOnceDefault from "00165_warnOnce.js";
import NativePerformanceCxx from "metro/00154__.js";

let fn;
if (NativePerformanceCxx != null) {
  fn = NativePerformanceCxx.now;
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
