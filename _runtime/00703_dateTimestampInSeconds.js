// _runtime/00703_dateTimestampInSeconds.js
import _mod686 from "metro/00686__.js";
import safeDateNow from "00696_safeDateNow.js";

require = arg1;
const dependencyMap = arg6;
function dateTimestampInSeconds() {
  return safeDateNow.safeDateNow() / 1000;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let timeOrigin = null;

export const browserPerformanceTimeOrigin = function browserPerformanceTimeOrigin() {
  let tmp = timeOrigin;
  if (null === timeOrigin) {
    const _performance = _mod686.GLOBAL_OBJ.performance;
    let now;
    if (_performance != null) {
      now = _performance.now;
    }
    let tmp3;
    if (now) {
      let tmp7Result = tmp7(696);
      const result = tmp7Result.withRandomSafeContext(() => _performance.now());
      tmp7Result = tmp7(696);
      const safeDateNowResult = tmp7Result.safeDateNow();
      timeOrigin = _performance.timeOrigin;
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
  if (fn != null) {
    return tmp();
  } else {
    timeOrigin = timeOrigin(timeOrigin[1]).GLOBAL_OBJ.performance;
    let now;
    if (timeOrigin != null) {
      now = timeOrigin.now;
    }
    if (!now) {
      fn = dateTimestampInSeconds;
    }
    timeOrigin = timeOrigin.timeOrigin;
    fn = () => (timeOrigin + safeDateNow.withRandomSafeContext(() => timeOrigin.now())) / 1000;
  }
};
