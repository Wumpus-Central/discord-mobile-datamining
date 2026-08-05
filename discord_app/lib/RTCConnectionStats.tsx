// discord_app/lib/RTCConnectionStats.tsx
import { RTCConnectionStates } from "ME";

const result = require("apply").fileFinishedImporting("lib/RTCConnectionStats.tsx");
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
    obj[1] = require("../../discord_common/js/packages/time-utils/TimeUtils.tsx") /* sleep */.now();
    history.push(obj);
    const obj2 = require("../../discord_common/js/packages/time-utils/TimeUtils.tsx") /* sleep */;
  }
};
prototype["getVoiceConnectionSuccessStats"] = function getVoiceConnectionSuccessStats(nowResult) {
  if (nowResult === undefined) {
    let obj = RTC_DISCONNECTED(4360);
    nowResult = obj.now();
  }
  const stateDurations = this.getStateDurations(nowResult);
  obj = { state_awaiting_endpoint_ms: null, state_authenticating_ms: null, state_connecting_ms: null, state_disconnected_ms: null, state_ice_checking_ms: null, state_no_route_ms: null, state_rtc_connecting_ms: null, state_rtc_disconnected_ms: null };
  RTC_DISCONNECTED = RTCConnectionStates.AWAITING_ENDPOINT;
  obj[0] = require("../../_runtime/00012_apply.js").sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.AUTHENTICATING;
  const obj3 = require("../../_runtime/00012_apply.js");
  obj[1] = require("../../_runtime/00012_apply.js").sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.CONNECTING;
  const obj4 = require("../../_runtime/00012_apply.js");
  obj[2] = require("../../_runtime/00012_apply.js").sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.DISCONNECTED;
  const obj5 = require("../../_runtime/00012_apply.js");
  obj[3] = require("../../_runtime/00012_apply.js").sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.ICE_CHECKING;
  const obj6 = require("../../_runtime/00012_apply.js");
  obj[4] = require("../../_runtime/00012_apply.js").sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.NO_ROUTE;
  const obj7 = require("../../_runtime/00012_apply.js");
  obj[5] = require("../../_runtime/00012_apply.js").sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.RTC_CONNECTING;
  const obj8 = require("../../_runtime/00012_apply.js");
  obj[6] = require("../../_runtime/00012_apply.js").sumBy(stateDurations, (state) => {
    let num = 0;
    if (state.state === RTC_DISCONNECTED) {
      num = state.durationMs;
    }
    return num;
  });
  RTC_DISCONNECTED = RTCConnectionStates.RTC_DISCONNECTED;
  const obj9 = require("../../_runtime/00012_apply.js");
  obj[7] = require("../../_runtime/00012_apply.js").sumBy(stateDurations, (state) => {
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
    let arr = require("zipWithNext.tsx")(self.history, (state, startTime) => ({ state: state.state, durationMs: startTime.startTime - state.startTime }));
    let obj = require("../../_runtime/00012_apply.js");
    const lastResult = obj.last(self.history);
    obj = { state: null, durationMs: null };
    obj[0] = lastResult.state;
    obj[1] = nowResult - lastResult.startTime;
    arr = arr.push(obj);
    return arr;
  }
};

export { StateHistory };