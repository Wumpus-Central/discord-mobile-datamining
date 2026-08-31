// discord_app/lib/RTCConnectionStats.tsx
import set from "../../_runtime/00002_set.js";
import applyDefault from "../../_runtime/00012_apply.js";
import ME from "../Constants.tsx";
import sleep from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import zipWithNextDefault from "zipWithNext.tsx";

const RTCConnectionStates = ME.RTCConnectionStates;
const result = set.fileFinishedImporting("lib/RTCConnectionStats.tsx");
class StateHistory {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj[1] = [];
    if (null != global) {
      tmp = require;
      updateResult = obj.update(global, require);
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
  let nowResult = arg1;
  if (arg1 === undefined) {
    let obj = sleep;
    nowResult = obj.now();
  }
  const self = this;
  if (this.current !== current) {
    self.current = current;
    const history = self.history;
    obj = { state: null, startTime: null };
    obj[0] = current;
    obj[1] = nowResult;
    history.push(obj);
  }
};
prototype["getVoiceConnectionSuccessStats"] = function getVoiceConnectionSuccessStats(nowResult) {
  if (nowResult === undefined) {
    let obj = RTC_DISCONNECTED(4526);
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
  RTC_DISCONNECTED = RTCConnectionStates.AWAITING_ENDPOINT;
  RTC_DISCONNECTED = RTCConnectionStates.AUTHENTICATING;
  const obj3 = applyDefault;
  obj[1] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.CONNECTING;
  const obj4 = applyDefault;
  obj[2] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.DISCONNECTED;
  const obj5 = applyDefault;
  obj[3] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.ICE_CHECKING;
  const obj6 = applyDefault;
  obj[4] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.NO_ROUTE;
  const obj7 = applyDefault;
  obj[5] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.RTC_CONNECTING;
  const obj8 = applyDefault;
  obj[6] = applyDefault.sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.RTC_DISCONNECTED;
  const obj9 = applyDefault;
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