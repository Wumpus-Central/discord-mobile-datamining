// discord_app/modules/libdiscore/timerUtils.tsx
import LoggerDefault from "../debug/Logger.tsx";
import debounceDefault from "../../../_runtime/00551_debounce.js";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import timersAll from "../../../discord_common/js/packages/libdiscore/mobile/js/timers.tsx";
import size from "../../../_runtime/metro/00002__.js";

function onTimersDelayCallback(timerId, expectedDelay, actualDelay, executionTime) {
  closure_5.push({ timerId, expectedDelay, actualDelay, executionTime });
  if (closure_5.length >= 10) {
    if (0 !== closure_5.length) {
      const _HermesInternal = HermesInternal;
      logger.warn("[libdiscore.timers] Flushing " + closure_5.length + " delay logs", closure_5);
      const obj3 = { delay_reports: null };
      const _JSON = JSON;
      obj3.delay_reports = JSON.stringify(closure_5);
      AnalyticsUtilsDefault.track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj3);
      closure_5 = [];
    }
  } else {
    closure_6();
  }
  const obj = { timerId, expectedDelay, actualDelay, executionTime };
}
const AnalyticEvents = Constants.AnalyticEvents;
const logger = new LoggerDefault("libdiscore.timers");
let closure_5 = [];
let closure_6 = debounceDefault(function flushDelayLogs() {
  if (0 !== closure_5.length) {
    const _HermesInternal = HermesInternal;
    logger.warn("[libdiscore.timers] Flushing " + closure_5.length + " delay logs", closure_5);
    const obj2 = { delay_reports: null };
    const _JSON = JSON;
    obj2.delay_reports = JSON.stringify(closure_5);
    AnalyticsUtilsDefault.track(AnalyticEvents.LIBDISCORE_SLOW_TIMERS, obj2);
    closure_5 = [];
  }
}, 5000);
let result = size.fileFinishedImporting("modules/libdiscore/timerUtils.tsx");

export const setupLibdiscoreTimersMonitor = function setupLibdiscoreTimersMonitor() {
  const result = timersAll.setTimersMonitorCallback(onTimersDelayCallback);
};
