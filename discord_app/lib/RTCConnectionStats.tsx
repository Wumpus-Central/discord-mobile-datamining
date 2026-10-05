// === Module 13615: RTCConnectionStats ===

// Module 13615 (RTCConnectionStats)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import TimeUtils from "TimeUtils" /* 4919 */;
import zipWithNextDefault from "zipWithNext" /* 13616 */;
import size from "module_2" /* 2 */;

const RTCConnectionStates = Constants.RTCConnectionStates;
const result = size.fileFinishedImporting("lib/RTCConnectionStats.tsx");
class StateHistory {
  constructor(state, _createdTime) {
    const merged = Object.assign({ current: null, history: null });
    merged[1] = [];
    if (null != state) {
      merged.update(state, _createdTime);
    }
    return merged;
  }
  reset(arg0) {
    const self = this;
    this.current = null;
    this.history = [];
    if (null != arg0) {
      self.update(arg0);
    }
  }
  update(current) {
    let nowResult = arg1;
    if (arg1 === undefined) {
      const obj = TimeUtils;
      nowResult = obj.now();
    }
    const self = this;
    if (this.current !== current) {
      self.current = current;
      const history = self.history;
      const obj2 = { state: current, startTime: nowResult };
      history.push(obj2);
    }
  }
  getVoiceConnectionSuccessStats() {
    let nowResult;
    let obj10;
    let obj3;
    let obj4;
    let obj5;
    let obj6;
    let obj7;
    let obj8;
    let obj9;
    const f143358 = (state) => {
      let num = 0;
      if (state.state === RTC_DISCONNECTED) {
        num = state.durationMs;
      }
      return num;
    };
    if (nowResult === undefined) {
      const obj = TimeUtils;
      nowResult = obj.now();
    }
    const stateDurations = this.getStateDurations(nowResult);
    const AWAITING_ENDPOINT = RTCConnectionStates.AWAITING_ENDPOINT;
    const obj2 = { state_awaiting_endpoint_ms: obj3.sumBy(stateDurations, f143358), state_authenticating_ms: obj4.sumBy(stateDurations, f143358), state_connecting_ms: obj5.sumBy(stateDurations, f143358), state_disconnected_ms: obj6.sumBy(stateDurations, f143358), state_ice_checking_ms: obj7.sumBy(stateDurations, f143358), state_no_route_ms: obj8.sumBy(stateDurations, f143358), state_rtc_connecting_ms: obj9.sumBy(stateDurations, f143358), state_rtc_disconnected_ms: obj10.sumBy(stateDurations, f143358) };
    const AUTHENTICATING = RTCConnectionStates.AUTHENTICATING;
    obj3 = _modDef12;
    const CONNECTING = RTCConnectionStates.CONNECTING;
    obj4 = _modDef12;
    const DISCONNECTED = RTCConnectionStates.DISCONNECTED;
    obj5 = _modDef12;
    const ICE_CHECKING = RTCConnectionStates.ICE_CHECKING;
    obj6 = _modDef12;
    const NO_ROUTE = RTCConnectionStates.NO_ROUTE;
    obj7 = _modDef12;
    const RTC_CONNECTING = RTCConnectionStates.RTC_CONNECTING;
    obj8 = _modDef12;
    const RTC_DISCONNECTED = RTCConnectionStates.RTC_DISCONNECTED;
    obj9 = _modDef12;
    obj10 = _modDef12;
    return obj2;
  }
  getStateDurations(nowResult) {
    const self = this;
    if (0 === this.history.length) {
      return [];
    } else {
      const arr = zipWithNextDefault(self.history, (state, startTime) => ({ state: state.state, durationMs: startTime.startTime - state.startTime }));
      const push = arr.push;
      const obj = _modDef12;
      const lastResult = obj.last(self.history);
      const obj2 = { state: lastResult.state, durationMs: nowResult - lastResult.startTime };
      push(obj2);
      return arr;
    }
  }
}
const prototype = StateHistory.prototype;

export { StateHistory };