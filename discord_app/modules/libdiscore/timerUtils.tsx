// === Module 18164: timerUtils ===

// Module 18164 (timerUtils)
import LoggerDefault from "Logger" /* 3 */;
import debounceDefault from "debounce" /* 551 */;
import timersAll from "timers" /* 567 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import size from "module_2" /* 2 */;

function onTimersDelayCallback(timerId, expectedDelay, actualDelay, executionTime) {
  const obj = { timerId, expectedDelay, actualDelay, executionTime };
  closure_5.push(obj);
  if (closure_5.length >= 10) {
    if (0 !== closure_5.length) {
      const _HermesInternal = HermesInternal;
      logger.warn("[libdiscore.timers] Flushing " + closure_5.length + " delay logs", closure_5);
      const _JSON = JSON;
      const obj2 = { delay_reports: JSON.stringify(closure_5) };
      const track = AnalyticsUtilsDefault.track;
      const LIBDISCORE_SLOW_TIMERS = AnalyticEvents.LIBDISCORE_SLOW_TIMERS;
      AnalyticsUtilsDefault;
      track(LIBDISCORE_SLOW_TIMERS, obj2);
      closure_5 = [];
    }
  } else {
    closure_6();
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
const logger = new LoggerDefault("libdiscore.timers");
let closure_5 = [];
const tmp2 = new LoggerDefault("libdiscore.timers");
let closure_6 = debounceDefault(function flushDelayLogs() {
  if (0 !== closure_5.length) {
    const _HermesInternal = HermesInternal;
    logger.warn("[libdiscore.timers] Flushing " + closure_5.length + " delay logs", closure_5);
    const _JSON = JSON;
    const obj = { delay_reports: JSON.stringify(closure_5) };
    const track = AnalyticsUtilsDefault.track;
    const LIBDISCORE_SLOW_TIMERS = AnalyticEvents.LIBDISCORE_SLOW_TIMERS;
    AnalyticsUtilsDefault;
    track(LIBDISCORE_SLOW_TIMERS, obj);
    closure_5 = [];
  }
}, 5000);
let result = size.fileFinishedImporting("modules/libdiscore/timerUtils.tsx");

export const setupLibdiscoreTimersMonitor = function setupLibdiscoreTimersMonitor() {
  const obj = timersAll;
  const result = obj.setTimersMonitorCallback(onTimersDelayCallback);
};