// === Module 164: warnNoNativePerformance ===

// Module 164 (warnNoNativePerformance)
import warnOnceDefault from "warnOnce" /* 165 */;
import NativePerformanceCxx from "module_154" /* 154 */;

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