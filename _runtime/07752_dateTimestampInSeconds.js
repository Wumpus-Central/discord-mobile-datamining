// _runtime/07752_dateTimestampInSeconds.js
import getGlobalSingleton from "getGlobalSingleton" /* 7739 */;

function dateTimestampInSeconds() {
  return Date.now() / 1000;
}
let _performance;
let timeOrigin;
_performance = getGlobalSingleton.GLOBAL_OBJ.performance;
let fn = dateTimestampInSeconds;
if (_performance) {
  fn = dateTimestampInSeconds;
  if (_performance.now) {
    const _Date = Date;
    const timestamp = Date.now();
    timeOrigin = timestamp - _performance.now();
    if (null != _performance.timeOrigin) {
      timeOrigin = _performance.timeOrigin;
    }
    fn = () => (timeOrigin + _performance.now()) / 1000;
  }
}
const _performance2 = getGlobalSingleton.GLOBAL_OBJ.performance;
if (_performance2) {
  if (_performance2.now) {
    const nowResult = _performance2.now();
    const _Date2 = Date;
    const timestamp1 = Date.now();
    let num2 = 3600000;
    if (_performance2.timeOrigin) {
      const _Math = Math;
      num2 = Math.abs(_performance2.timeOrigin + nowResult - timestamp1);
    }
    let timeOrigin2 = _performance2.timing;
    if (timeOrigin2) {
      timeOrigin2 = _performance2.timing.navigationStart;
    }
    let num3 = 3600000;
    if (typeof timeOrigin2 === "number") {
      const _Math2 = Math;
      num3 = Math.abs(timeOrigin2 + nowResult - timestamp1);
    }
    if (!tmp6) {
      if (num3 >= 3600000) {
        exports._browserPerformanceTimeOriginMode = "dateNow";
      }
    }
    if (num2 <= num3) {
      exports._browserPerformanceTimeOriginMode = "timeOrigin";
      timeOrigin2 = _performance2.timeOrigin;
    } else {
      exports._browserPerformanceTimeOriginMode = "navigationStart";
    }
    tmp6 = num2 < 3600000;
  }
}

export const _browserPerformanceTimeOriginMode = "none";
export { dateTimestampInSeconds };
export const timestampInSeconds = fn;