// === Module 13795: CallStateHooks ===

// Module 13795 (CallStateHooks)
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5278 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;

const require = fn;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_7, RTCConnectionStates: closure_8 } = Constants);
const ParticipantTypes = fn(4581).ParticipantTypes;
let obj = {};
const merged = Object.assign({ initialized: false, callId: "PX_16" });
obj = { DISCONNECTED: "disconneted", DISCONNECTING: "disconnecting", CONNECTING: "connecting", RINGING: "ringing", CONNECTED: "connected" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/CallStateHooks.tsx");

export default function _default() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_7;
  }
  _require = tmp;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  let stateFromStores;
  const id = AuthenticationStore.getId();
  obj = require("initialize");
  const items = [CallStore];
  const items1 = [tmp, id];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const call = CallStore.getCall(closure_0);
    if (null != call) {
      const ringing = call.ringing;
      let found = ringing.filter((item) => item !== id);
    } else {
      found = [];
    }
    let initialized = obj.initialized;
    if (!initialized) {
      initialized = found.length > 0;
    }
    obj.initialized = initialized;
    return found;
  }, items1);
  const participants = stateFromStores.getParticipants(tmp);
  let found = participants.filter((type) => {
    let tmp = type.type !== ParticipantTypes.ACTIVITY;
    if (tmp) {
      tmp = type.user.id !== id;
    }
    return tmp;
  });
  const tmp3 = id(9215)();
  dependencyMap = tmp3;
  const items2 = [RTCConnectionStore];
  stateFromStores = require("initialize").useStateFromStores(items2, RTCConnectionStore.getRTCConnectionId, []);
  const obj2 = require("initialize");
  const items3 = [RTCConnectionStore];
  const items4 = [stateFromStores, tmp3, tmp];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    channelId = undefined;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    if (channelId === closure_0) {
      obj.initialized = true;
      return constants.RTC_CONNECTED;
    } else {
      if (!tmp2) {
        obj.initialized = false;
      }
      obj.callId = stateFromStores;
      const state = RTCConnectionStore.getState();
      let initialized = obj.initialized;
      if (!initialized) {
        let tmp10 = state !== constants.DISCONNECTED;
        if (tmp10) {
          tmp10 = state !== constants.RTC_DISCONNECTED;
        }
        initialized = tmp10;
      }
      obj.initialized = initialized;
      return state;
    }
  }, items4);
  obj.initialized = obj.initialized || flag2;
  let state = obj.CONNECTING;
  let initialized = tmp6.initialized;
  if (flag) {
    state = tmp7.DISCONNECTING;
  } else {
    if (initialized) {
      if (stateFromStores1 === constants.DISCONNECTED) {
        state = tmp7.DISCONNECTED;
      }
    }
    if (stateFromStoresArray.length > 0) {
      if (found.length === stateFromStoresArray.length) {
        state = tmp7.RINGING;
      }
    }
    if (stateFromStores1 === constants.RTC_CONNECTED) {
      state = tmp7.CONNECTED;
    }
  }
  return { state, initialized };
};
export const CallStates = obj;