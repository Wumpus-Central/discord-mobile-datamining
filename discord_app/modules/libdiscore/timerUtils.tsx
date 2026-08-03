import { AnalyticEvents } from "ME";

function onTimersDelayCallback(timerId, expectedDelay, actualDelay, executionTime) {
  let obj = { timerId, expectedDelay, actualDelay, executionTime };
  arr = arr.push(obj);
  if (arr.length >= 10) {
    if (0 !== arr.length) {
      const _HermesInternal = HermesInternal;
      tmp2.warn("[libdiscore.timers] Flushing " + arr.length + " delay logs", arr);
      obj = { delay_reports: null };
      const _JSON = JSON;
      obj[0] = JSON.stringify(arr);
      importDefault(698).track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj);
      arr = [];
      const obj2 = importDefault(698);
    }
  } else {
    callback();
  }
}
let c4 = new require("debounce")("libdiscore.timers");
let closure_5 = [];
let closure_6 = require("debounce")(function flushDelayLogs() {
  if (0 !== arr.length) {
    const _HermesInternal = HermesInternal;
    arr.warn("[libdiscore.timers] Flushing " + arr.length + " delay logs", arr);
    let obj = importDefault(698);
    obj = { delay_reports: null };
    const _JSON = JSON;
    obj[0] = JSON.stringify(arr);
    obj.track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj);
    arr = [];
  }
}, 5000);
const tmp2 = new require("debounce")("libdiscore.timers");
let result = require("expandEventProperties").fileFinishedImporting("modules/libdiscore/timerUtils.tsx");

export const setupLibdiscoreTimersMonitor = function setupLibdiscoreTimersMonitor() {
  const result = importAll(1873).setTimersMonitorCallback(onTimersDelayCallback);
};