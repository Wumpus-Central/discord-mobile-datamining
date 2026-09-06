// discord_app/lib/RTCConnectionStats.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import Constants from "../Constants.tsx";
import TimeUtils from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import zipWithNextDefault from "zipWithNext.tsx";
import size from "../../_runtime/metro/00002__.js";

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
    let obj = TimeUtils;
    nowResult = obj.now();
  }
  const self = this;
  if (this.current !== current) {
    self.current = current;
    const history = self.history;
    obj = { state: current, startTime: nowResult };
    history.push(obj);
  }
};
prototype["getVoiceConnectionSuccessStats"] = function getVoiceConnectionSuccessStats(nowResult) {
  if (nowResult === undefined) {
    let obj = TimeUtils;
    nowResult = obj.now();
  }
  const stateDurations = this.getStateDurations(nowResult);
  obj = {
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
    state_rtc_disconnected_ms: null,
  };
  obj.state_authenticating_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj.state_connecting_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj.state_disconnected_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj.state_ice_checking_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj.state_no_route_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj.state_rtc_connecting_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  const RTC_DISCONNECTED = RTCConnectionStates.RTC_DISCONNECTED;
  obj.state_rtc_disconnected_ms = _modDef12.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  return obj;
};
prototype["getStateDurations"] = function getStateDurations(nowResult) {
  const self = this;
  if (0 === this.history.length) {
    return [];
  } else {
    let arr = zipWithNextDefault(self.history, (state, startTime) => ({
      state: state.state,
      durationMs: startTime.startTime - state.startTime,
    }));
    let obj = _modDef12;
    const lastResult = obj.last(self.history);
    obj = { state: lastResult.state, durationMs: nowResult - lastResult.startTime };
    arr = arr.push(obj);
    return arr;
  }
};

export { StateHistory };
