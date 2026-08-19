// === Module 17141: onTimersDelayCallback ===

// Module 17141 (onTimersDelayCallback)
import obj132 from "obj132" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import debounceDefault from "debounce" /* 636 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import setTimeoutAll from "setTimeout" /* 1921 */;

function onTimersDelayCallback(timerId, expectedDelay, actualDelay, executionTime) {
  let obj = { timerId, expectedDelay, actualDelay, executionTime };
  arr = arr.push(obj);
  if (arr.length >= 10) {
    if (0 !== arr.length) {
      const _HermesInternal = HermesInternal;
      logger.warn("[libdiscore.timers] Flushing " + arr.length + " delay logs", arr);
      obj = { delay_reports: null };
      const _JSON = JSON;
      obj[0] = JSON.stringify(arr);
      expandEventPropertiesDefault.track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj);
      arr = [];
    }
  } else {
    callback();
  }
}
const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = new timestampDefault("libdiscore.timers");
let closure_5 = [];
let closure_6 = debounceDefault(function flushDelayLogs() {
  if (0 !== arr.length) {
    const _HermesInternal = HermesInternal;
    logger.warn("[libdiscore.timers] Flushing " + arr.length + " delay logs", arr);
    const obj = { delay_reports: null };
    const _JSON = JSON;
    obj[0] = JSON.stringify(arr);
    obj.track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj);
    arr = [];
  }
}, 5000);
const tmp2 = new timestampDefault("libdiscore.timers");
let result = obj132.fileFinishedImporting("modules/libdiscore/timerUtils.tsx");

export const setupLibdiscoreTimersMonitor = function setupLibdiscoreTimersMonitor() {
  const result = setTimeoutAll.setTimersMonitorCallback(onTimersDelayCallback);
};