// === Module 14011: RTCConnectionStats ===

// Module 14011 (RTCConnectionStats)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1074 */;
import TimeUtils from "TimeUtils" /* 4751 */;
import zipWithNextDefault from "zipWithNext" /* 14012 */;
import size from "module_2" /* 2 */;

const RTCConnectionStates = Constants.RTCConnectionStates;
const result = size.fileFinishedImporting("lib/RTCConnectionStats.tsx");
class StateHistory {
  constructor(arg0, arg1) {
    merged = Object.assign({ current: null, history: null });
    merged[1] = [];
    if (null != global) {
      tmp = require;
      updateResult = merged.update(global, require);
    }
    return merged;
  }
}
const prototype = StateHistory.prototype;
prototype["reset"] = function reset(arg0) {
  const self = this;
  this.current = null;
  this.history = [];
  if (null != arg0) {
    self.update(arg0);
  }
};
prototype["update"] = function update(current) {
  let nowResult = arg1;
  if (arg1 === undefined) {
    nowResult = TimeUtils.now();
  }
  const self = this;
  if (this.current !== current) {
    self.current = current;
    const history = self.history;
    const obj2 = { state: current, startTime: nowResult };
    history.push(obj2);
  }
};
prototype["getVoiceConnectionSuccessStats"] = function getVoiceConnectionSuccessStats() {
  if (nowResult === undefined) {
    nowResult = TimeUtils.now();
  }
  const stateDurations = this.getStateDurations(nowResult);
  const obj2 = {
    state_awaiting_endpoint_ms: _modDef12.sumBy(stateDurations, (state) => {
      let num = 0;
      if (state.state === RTC_DISCONNECTED) {
        num = state.durationMs;
      }
      return num;
    }),
    state_authenticating_ms: null,
    state_connecting_ms: null,
    state_disconnected_ms: null,
    state_ice_checking_ms: null,
    state_no_route_ms: null,
    state_rtc_connecting_ms: null,
    state_rtc_disconnected_ms: null
  };
  obj2.state_authenticating_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj2.state_connecting_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj2.state_disconnected_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj2.state_ice_checking_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj2.state_no_route_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj2.state_rtc_connecting_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  const RTC_DISCONNECTED = RTCConnectionStates.RTC_DISCONNECTED;
  obj2.state_rtc_disconnected_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  return obj2;
};
prototype["getStateDurations"] = function getStateDurations(nowResult) {
  const self = this;
  if (0 === this.history.length) {
    return [];
  } else {
    const arr = zipWithNextDefault(self.history, (state, startTime) => ({ state: state.state, durationMs: startTime.startTime - state.startTime }));
    const lastResult = _modDef12.last(self.history);
    const obj2 = { state: lastResult.state, durationMs: nowResult - lastResult.startTime };
    arr.push(obj2);
    return arr;
  }
};

export { StateHistory };