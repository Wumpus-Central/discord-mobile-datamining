// === Module 714: browserPerformanceTimeOrigin ===

// Module 714 (browserPerformanceTimeOrigin)
import _mod697 from "module_697" /* 697 */;
import safeDateNow from "safeDateNow" /* 707 */;

function dateTimestampInSeconds() {
  const obj = safeDateNow;
  return obj.safeDateNow() / 1000;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let timeOrigin = null;

export const browserPerformanceTimeOrigin = function browserPerformanceTimeOrigin() {
  let tmp = timeOrigin;
  if (null === timeOrigin) {
    const _performance = _mod697.GLOBAL_OBJ.performance;
    let now;
    if (_performance != null) {
      now = _performance.now;
    }
    let tmp3;
    if (now) {
      const tmp7Result = safeDateNow;
      const result = tmp7Result.withRandomSafeContext(() => _performance.now());
      timeOrigin = _performance.timeOrigin;
      const tmp7Result2 = safeDateNow;
      const safeDateNowResult = tmp7Result2.safeDateNow();
      if (typeof timeOrigin !== "number") {
        const timing = _performance.timing;
        let navigationStart;
        if (timing != null) {
          navigationStart = timing.navigationStart;
        }
        if (typeof navigationStart !== "number") {
          navigationStart = safeDateNowResult - result;
        } else {
          const _Math2 = Math;
        }
        tmp3 = navigationStart;
      } else {
        const _Math = Math;
        tmp3 = timeOrigin;
      }
    }
    timeOrigin = tmp3;
    tmp = tmp3;
  }
  return tmp;
};
export { dateTimestampInSeconds };
export const timestampInSeconds = function timestampInSeconds() {
  let _performance;
  let fn;
  let tmp = fn;
  if (fn == null) {
    _performance = _performance(timeOrigin[1]).GLOBAL_OBJ.performance;
    let now;
    if (_performance != null) {
      now = _performance.now;
    }
    if (now) {
      if (_performance.timeOrigin) {
        timeOrigin = _performance.timeOrigin;
        fn = () => {
          const obj = safeDateNow;
          return (timeOrigin + obj.withRandomSafeContext(() => _performance.now())) / 1000;
        };
      }
      tmp = fn;
    }
    fn = dateTimestampInSeconds;
  }
  return tmp();
};