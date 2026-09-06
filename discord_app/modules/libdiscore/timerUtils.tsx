// === Module 17925: timerUtils ===

// Module 17925 (timerUtils)
import LoggerDefault from "Logger" /* 3 */;
import debounceDefault from "debounce" /* 551 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import timersAll from "timers" /* 1356 */;
import size from "module_2" /* 2 */;

function onTimersDelayCallback(timerId, expectedDelay, actualDelay, executionTime) {
  let obj = { timerId, expectedDelay, actualDelay, executionTime };
  closure_5.push(obj);
  if (closure_5.length >= 10) {
    if (0 !== closure_5.length) {
      const _HermesInternal = HermesInternal;
      logger.warn("[libdiscore.timers] Flushing " + closure_5.length + " delay logs", closure_5);
      obj = { delay_reports: null };
      const _JSON = JSON;
      obj.delay_reports = JSON.stringify(closure_5);
      AnalyticsUtilsDefault.track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj);
      closure_5 = [];
    }
  } else {
    closure_6();
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
const logger = new LoggerDefault("libdiscore.timers");
let closure_5 = [];
let closure_6 = debounceDefault(function flushDelayLogs() {
  if (0 !== closure_5.length) {
    const _HermesInternal = HermesInternal;
    logger.warn("[libdiscore.timers] Flushing " + closure_5.length + " delay logs", closure_5);
    const obj = { delay_reports: null };
    const _JSON = JSON;
    obj.delay_reports = JSON.stringify(closure_5);
    obj.track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj);
    closure_5 = [];
  }
}, 5000);
let result = size.fileFinishedImporting("modules/libdiscore/timerUtils.tsx");

export const setupLibdiscoreTimersMonitor = function setupLibdiscoreTimersMonitor() {
  const result = timersAll.setTimersMonitorCallback(onTimersDelayCallback);
};