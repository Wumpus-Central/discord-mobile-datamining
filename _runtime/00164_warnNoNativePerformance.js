// _runtime/00164_warnNoNativePerformance.js
import importDefaultResult from "NativePerformanceCxx";
import { warnOnce } from "00165_warnOnce.js";

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
  warnOnce("missing-native-performance", "Missing native implementation of Performance");
};
export const getCurrentTimeStamp = fn;