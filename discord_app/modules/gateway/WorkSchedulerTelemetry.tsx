// === Module 13536: WorkSchedulerTelemetryEvent ===

// Module 13536 (WorkSchedulerTelemetryEvent)
import apply from "apply" /* 12 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
let obj = { LONGER_DISPATCH: "longer_dispatch", EXCEEDED_MAX_CONSECUTIVE_FLUSHES: "exceeded_max_consecutive_flushes", FIRED_DUE_TO_MAX_TIMEOUT: "fired_due_to_max_timeout", SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED: "skip_idle_callback_due_to_backgrounded" };
obj = { TIME_TO_FIRE_IDLE_CALLBACK: "time_to_fire_idle_callback", TIME_TO_QUEUE_EMPTY: "time_to_flush_all_work", TIME_OVER_DEADLINE: "time_over_deadline", DEADLINE_INITIAL_TIME_REMAINING: "initial_time_of_deadline" };
obj = { COUNT_DISPATCHES_LEFT_AFTER_YIELD: "count_dispatches_left_after_yield", COUNT_FLUSH_BEFORE_QUEUE_EMPTY: "count_flush_before_queue_empty", COUNT_INITIAL_DISPATCHS_LENGTH: "count_initial_dispatches_length" };
let closure_3 = Object.freeze({ [obj.TIME_TO_FIRE_IDLE_CALLBACK]: null, [obj.TIME_TO_QUEUE_EMPTY]: null, [obj.TIME_OVER_DEADLINE]: null, [obj.DEADLINE_INITIAL_TIME_REMAINING]: null });
let closure_4 = Object.freeze({ [obj.TIME_TO_FIRE_IDLE_CALLBACK]: [0, 0], [obj.TIME_TO_QUEUE_EMPTY]: [0, 0], [obj.TIME_OVER_DEADLINE]: [0, 0], [obj.DEADLINE_INITIAL_TIME_REMAINING]: [0, 0] });
let closure_5 = Object.freeze({ [obj.COUNT_FLUSH_BEFORE_QUEUE_EMPTY]: [0, 0], [obj.COUNT_DISPATCHES_LEFT_AFTER_YIELD]: [0, 0], [obj.COUNT_INITIAL_DISPATCHS_LENGTH]: [0, 0] });
let closure_6 = Object.freeze({ [obj.LONGER_DISPATCH]: 0, [obj.EXCEEDED_MAX_CONSECUTIVE_FLUSHES]: 0, [obj.FIRED_DUE_TO_MAX_TIMEOUT]: 0, [obj.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED]: 0 });
const result = require("set").fileFinishedImporting("modules/gateway/WorkSchedulerTelemetry.tsx");
class WorkSchedulerTelemetry {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj = require("apply");
    obj[0] = obj.cloneDeep(closure_3);
    obj2 = require("apply");
    obj[1] = obj2.cloneDeep(closure_4);
    obj3 = require("apply");
    obj[2] = obj3.cloneDeep(closure_5);
    obj4 = require("apply");
    obj[3] = obj4.cloneDeep(closure_6);
    return obj;
  }
}
const prototype = WorkSchedulerTelemetry.prototype;
prototype["reset"] = function reset() {
  this._timeTracking = apply.cloneDeep(closure_3);
  const obj = apply;
  this._timingStats = apply.cloneDeep(closure_4);
  const obj2 = apply;
  this._measurements = apply.cloneDeep(closure_5);
  const obj3 = apply;
  this._eventCounts = apply.cloneDeep(closure_6);
};
prototype["clearTime"] = function clearTime(arg0) {
  this._timeTracking[arg0] = null;
};
prototype["_storeTimeValue"] = function _storeTimeValue(TIME_OVER_DEADLINE, timeSinceExpiration) {
  const tmp = callback(this._timingStats[TIME_OVER_DEADLINE], 2);
  const items = [(tmp[0] * tmp[1] + timeSinceExpiration) / (tmp[1] + 1), tmp[1] + 1];
  this._timingStats[TIME_OVER_DEADLINE] = items;
};
prototype["time"] = function time(arg0) {
  if (this._enabled) {
    const _performance = performance;
    tmp._timeTracking[arg0] = performance.now();
  }
};
prototype["timeEnd"] = function timeEnd(TIME_TO_QUEUE_EMPTY) {
  const self = this;
  if (this._enabled) {
    if (null != self._timeTracking[TIME_TO_QUEUE_EMPTY]) {
      const _performance = performance;
      self._storeTimeValue(TIME_TO_QUEUE_EMPTY, performance.now() - tmp2);
      self._timeTracking[TIME_TO_QUEUE_EMPTY] = null;
    }
  }
};
prototype["timeTrack"] = function timeTrack(TIME_OVER_DEADLINE, timeSinceExpiration) {
  const self = this;
  if (this._enabled) {
    self._storeTimeValue(TIME_OVER_DEADLINE, timeSinceExpiration);
  }
};
prototype["measure"] = function measure(arg0, arg1) {
  const self = this;
  if (this._enabled) {
    const tmp4 = callback(self._measurements[arg0], 2);
    const items = [(tmp4[0] * tmp4[1] + arg1) / (tmp4[1] + 1), tmp4[1] + 1];
    self._measurements[arg0] = items;
  }
};
prototype["track"] = function track(arg0) {
  if (this._enabled) {
    const _eventCounts = tmp._eventCounts;
    _eventCounts[arg0] = _eventCounts[arg0] + 1;
  }
};
prototype["toggleTelemetry"] = function toggleTelemetry(_enabled) {
  this._enabled = _enabled;
};
Object.defineProperty(prototype, "isTelemetryEnabled", {
  get: function isTelemetryEnabled() {
    return this._enabled;
  },
  set: undefined
});
prototype["generateTelemetry"] = function generateTelemetry() {
  const entries = Object.entries(this._timingStats);
  const reduced = entries.reduce((arg0, arg1) => {
    [tmp, ] = arg1;
    const combined = "avg_" + tmp;
    arg0[combined] = "" + obj.toFixed(2) + "ms";
    return arg0;
  }, {});
  const entries1 = Object.entries(this._measurements);
  const reduced1 = entries1.reduce((arg0, arg1) => {
    [tmp, ] = arg1;
    const combined = "avg_" + tmp;
    arg0[combined] = "" + obj.toFixed(2);
    return arg0;
  }, {});
  const entries2 = Object.entries(this._eventCounts);
  const merged = Object.assign(entries2.reduce((arg0, arg1) => {
    [tmp, tmp2] = arg1;
    const combined = "count_" + tmp;
    arg0[combined] = "" + tmp2;
    return arg0;
  }, {}));
  const merged1 = Object.assign(reduced);
  const merged2 = Object.assign(reduced1);
  return {};
};

export const WorkSchedulerTelemetryEvent = obj;
export const WorkSchedulerTelemetryTiming = obj;
export const WorkSchedulerTelemetryMeasurement = obj;
export { WorkSchedulerTelemetry };