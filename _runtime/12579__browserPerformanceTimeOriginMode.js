// _runtime/12579__browserPerformanceTimeOriginMode.js
import _mod12566 from "metro/12566__.js";

function dateTimestampInSeconds() {
  return Date.now() / 1000;
}
let timeOrigin;
const _performance = _mod12566.GLOBAL_OBJ.performance;
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
const _performance2 = _mod12566.GLOBAL_OBJ.performance;
if (_performance2) {
  let tmp4;
  if (_performance2.now) {
    const nowResult = _performance2.now();
    const _Date2 = Date;
    let timestamp1 = Date.now();
    let num2 = 3600000;
    if (_performance2.timeOrigin) {
      const _Math = Math;
      num2 = Math.abs(_performance2.timeOrigin + nowResult - timestamp1);
    }
    let timeOrigin2 = _performance2.timing;
    const tmp7 = num2 < 3600000;
    if (timeOrigin2) {
      timeOrigin2 = _performance2.timing.navigationStart;
    }
    let num3 = 3600000;
    if (typeof timeOrigin2 === "number") {
      const _Math2 = Math;
      num3 = Math.abs(timeOrigin2 + nowResult - timestamp1);
    }
    if (!tmp7) {
      if (num3 >= 3600000) {
        exports._browserPerformanceTimeOriginMode = "dateNow";
      }
      tmp4 = timestamp1;
    }
    if (num2 <= num3) {
      exports._browserPerformanceTimeOriginMode = "timeOrigin";
      timeOrigin2 = _performance2.timeOrigin;
    } else {
      exports._browserPerformanceTimeOriginMode = "navigationStart";
    }
    timestamp1 = timeOrigin2;
  }
  exports.browserPerformanceTimeOrigin = tmp4;
  exports.dateTimestampInSeconds = dateTimestampInSeconds;
  exports.timestampInSeconds = fn;
}

export const _browserPerformanceTimeOriginMode = "none";
