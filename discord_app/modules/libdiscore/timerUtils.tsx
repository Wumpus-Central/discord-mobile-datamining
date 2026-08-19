// discord_app/modules/libdiscore/timerUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import timestampDefault from "../debug/Logger.tsx";
import debounceDefault from "../../../_runtime/00636_debounce.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import setTimeoutAll from "../../../discord_common/js/packages/libdiscore/mobile/js/timers.tsx";

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