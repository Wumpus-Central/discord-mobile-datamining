const require = arg1;
const dependencyMap = arg6;
function dateTimestampInSeconds() {
  return require(831) /* safeDateNow */.safeDateNow() / 1000;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c4 = null;
arg5.browserPerformanceTimeOrigin = function browserPerformanceTimeOrigin() {
  let tmp = c4;
  if (null === c4) {
    _performance = _performance(821).GLOBAL_OBJ.performance;
    let now;
    if (_performance != null) {
      now = _performance.now;
    }
    let tmp3;
    if (now) {
      let tmp7Result = tmp7(831);
      const result = tmp7Result.withRandomSafeContext(() => _performance.now());
      tmp7Result = tmp7(831);
      const safeDateNowResult = tmp7Result.safeDateNow();
      const timeOrigin = _performance.timeOrigin;
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
    c4 = tmp3;
    tmp = tmp3;
  }
  return tmp;
};
arg5.dateTimestampInSeconds = dateTimestampInSeconds;
arg5.timestampInSeconds = function timestampInSeconds() {
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
    fn = () => (timeOrigin + timeOrigin(timeOrigin[0]).withRandomSafeContext(() => closure_0.now())) / 1000;
  }
};