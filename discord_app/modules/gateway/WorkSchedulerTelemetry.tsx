// === Module 13453: WorkSchedulerTelemetry ===

// Module 13453 (WorkSchedulerTelemetry)
import _mod12 from "module_12" /* 12 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let obj = { LONGER_DISPATCH: "longer_dispatch", EXCEEDED_MAX_CONSECUTIVE_FLUSHES: "exceeded_max_consecutive_flushes", FIRED_DUE_TO_MAX_TIMEOUT: "fired_due_to_max_timeout", SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED: "skip_idle_callback_due_to_backgrounded" };
let obj2 = { TIME_TO_FIRE_IDLE_CALLBACK: "time_to_fire_idle_callback", TIME_TO_QUEUE_EMPTY: "time_to_flush_all_work", TIME_OVER_DEADLINE: "time_over_deadline", DEADLINE_INITIAL_TIME_REMAINING: "initial_time_of_deadline" };
let obj3 = { COUNT_DISPATCHES_LEFT_AFTER_YIELD: "count_dispatches_left_after_yield", COUNT_FLUSH_BEFORE_QUEUE_EMPTY: "count_flush_before_queue_empty", COUNT_INITIAL_DISPATCHS_LENGTH: "count_initial_dispatches_length" };
let closure_3 = Object.freeze({ [obj2.TIME_TO_FIRE_IDLE_CALLBACK]: null, [obj2.TIME_TO_QUEUE_EMPTY]: null, [obj2.TIME_OVER_DEADLINE]: null, [obj2.DEADLINE_INITIAL_TIME_REMAINING]: null });
let closure_4 = Object.freeze({ [obj2.TIME_TO_FIRE_IDLE_CALLBACK]: [0, 0], [obj2.TIME_TO_QUEUE_EMPTY]: [0, 0], [obj2.TIME_OVER_DEADLINE]: [0, 0], [obj2.DEADLINE_INITIAL_TIME_REMAINING]: [0, 0] });
let closure_5 = Object.freeze({ [obj3.COUNT_FLUSH_BEFORE_QUEUE_EMPTY]: [0, 0], [obj3.COUNT_DISPATCHES_LEFT_AFTER_YIELD]: [0, 0], [obj3.COUNT_INITIAL_DISPATCHS_LENGTH]: [0, 0] });
let closure_6 = Object.freeze({ [obj.LONGER_DISPATCH]: 0, [obj.EXCEEDED_MAX_CONSECUTIVE_FLUSHES]: 0, [obj.FIRED_DUE_TO_MAX_TIMEOUT]: 0, [obj.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED]: 0 });
const result = size.fileFinishedImporting("modules/gateway/WorkSchedulerTelemetry.tsx");
class WorkSchedulerTelemetry {
  constructor() {
    const merged = Object.assign({ _timeTracking: null, _timingStats: null, _measurements: null, _eventCounts: null, _enabled: false });
    const obj = _mod12;
    merged[0] = obj.cloneDeep(closure_3);
    const obj2 = _mod12;
    merged[1] = obj2.cloneDeep(closure_4);
    const obj3 = _mod12;
    merged[2] = obj3.cloneDeep(closure_5);
    const obj4 = _mod12;
    merged[3] = obj4.cloneDeep(closure_6);
    return merged;
  }
  reset() {
    const obj = _mod12;
    this._timeTracking = obj.cloneDeep(closure_3);
    const obj2 = _mod12;
    this._timingStats = obj2.cloneDeep(closure_4);
    const obj3 = _mod12;
    this._measurements = obj3.cloneDeep(closure_5);
    const obj4 = _mod12;
    this._eventCounts = obj4.cloneDeep(closure_6);
  }
  clearTime(arg0) {
    this._timeTracking[arg0] = null;
  }
  _storeTimeValue(TIME_OVER_DEADLINE, timeSinceExpiration) {
    const tmp = _slicedToArray(this._timingStats[TIME_OVER_DEADLINE], 2);
    const items = [(tmp[0] * tmp[1] + timeSinceExpiration) / (tmp[1] + 1), tmp[1] + 1];
    this._timingStats[TIME_OVER_DEADLINE] = items;
  }
  time(arg0) {
    if (this._enabled) {
      const _performance = performance;
      tmp._timeTracking[arg0] = performance.now();
    }
  }
  timeEnd(TIME_TO_QUEUE_EMPTY) {
    const self = this;
    if (this._enabled) {
      if (null != self._timeTracking[TIME_TO_QUEUE_EMPTY]) {
        const _performance = performance;
        self._storeTimeValue(TIME_TO_QUEUE_EMPTY, performance.now() - self._timeTracking[TIME_TO_QUEUE_EMPTY]);
        self._timeTracking[TIME_TO_QUEUE_EMPTY] = null;
      }
    }
  }
  timeTrack(TIME_OVER_DEADLINE, timeSinceExpiration) {
    const self = this;
    if (this._enabled) {
      self._storeTimeValue(TIME_OVER_DEADLINE, timeSinceExpiration);
    }
  }
  measure(arg0, arg1) {
    const self = this;
    if (this._enabled) {
      const tmp4 = _slicedToArray(self._measurements[arg0], 2);
      const items = [(tmp4[0] * tmp4[1] + arg1) / (tmp4[1] + 1), tmp4[1] + 1];
      self._measurements[arg0] = items;
    }
  }
  track(arg0) {
    if (this._enabled) {
      const _eventCounts = tmp._eventCounts;
      _eventCounts[arg0] = _eventCounts[arg0] + 1;
    }
  }
  toggleTelemetry(_enabled) {
    this._enabled = _enabled;
  }
  generateTelemetry() {
    const entries = Object.entries(this._timingStats);
    const reduced = entries.reduce((acc, item) => {
      let tmp;
      [tmp, ] = item;
      const combined = "avg_" + tmp;
      acc[combined] = "" + obj.toFixed(2) + "ms";
      return acc;
    }, {});
    const entries1 = Object.entries(this._measurements);
    const reduced1 = entries1.reduce((acc, item) => {
      let tmp;
      [tmp, ] = item;
      const combined = "avg_" + tmp;
      acc[combined] = "" + obj.toFixed(2);
      return acc;
    }, {});
    const obj = {};
    const entries2 = Object.entries(this._eventCounts);
    const merged = Object.assign(entries2.reduce((acc, item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const combined = "count_" + tmp;
      acc[combined] = "" + tmp2;
      return acc;
    }, {}));
    const merged1 = Object.assign(reduced);
    const merged2 = Object.assign(reduced1);
    return obj;
  }
}
Object.defineProperty(WorkSchedulerTelemetry.prototype, "isTelemetryEnabled", {
  get: function isTelemetryEnabled() {
    return this._enabled;
  },
  set: undefined
});

export const WorkSchedulerTelemetryEvent = obj;
export const WorkSchedulerTelemetryTiming = obj2;
export const WorkSchedulerTelemetryMeasurement = obj3;
export { WorkSchedulerTelemetry };