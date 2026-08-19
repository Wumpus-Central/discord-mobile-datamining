// === Module 13076: reset ===

// Module 13076 (reset)
import obj132 from "obj132" /* 2 */;
import applyDefault from "apply" /* 12 */;
import ME from "ME" /* 676 */;
import sleep from "sleep" /* 4548 */;
import zipWithNextDefault from "zipWithNext" /* 13077 */;

const RTCConnectionStates = ME.RTCConnectionStates;
const result = obj132.fileFinishedImporting("lib/RTCConnectionStats.tsx");
class StateHistory {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[1] = [];
    if (null != global) {
      updateResult = obj.update(global);
    }
    return obj;
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
  const self = this;
  if (this.current !== current) {
    self.current = current;
    const history = self.history;
    const obj = { state: null, startTime: null };
    obj[0] = current;
    obj[1] = sleep.now();
    history.push(obj);
  }
};
prototype["getVoiceConnectionSuccessStats"] = function getVoiceConnectionSuccessStats(nowResult) {
  if (nowResult === undefined) {
    let obj = RTC_DISCONNECTED(4548);
    nowResult = obj.now();
  }
  const stateDurations = this.getStateDurations(nowResult);
  obj = {
    state_awaiting_endpoint_ms: applyDefault.sumBy(stateDurations, (state) => {
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
  obj[1] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj[2] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj[3] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj[4] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj[5] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  obj[6] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.RTC_DISCONNECTED;
  obj[7] = applyDefault.sumBy(stateDurations, (state) => {
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
    let arr = zipWithNextDefault(self.history, (state, startTime) => ({ state: state.state, durationMs: startTime.startTime - state.startTime }));
    let obj = applyDefault;
    const lastResult = obj.last(self.history);
    obj = { state: null, durationMs: null };
    obj[0] = lastResult.state;
    obj[1] = nowResult - lastResult.startTime;
    arr = arr.push(obj);
    return arr;
  }
};

export { StateHistory };