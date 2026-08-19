// === Module 12675: id ===

// Module 12675 (id)
import getParticipants from "getParticipants" /* 4773 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import callConnect from "callConnect" /* 4496 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import ME from "ME" /* 676 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4544 */;

const require = fn;
({ EMPTY_STRING_SNOWFLAKE_ID: error, RTCConnectionStates: closure_8 } = ME);
const merged = Object.assign({ initialized: false, callId: "Array" });
let obj = { DISCONNECTED: "disconneted", DISCONNECTING: "disconnecting", CONNECTING: "connecting", RINGING: "ringing", CONNECTED: "connected" };
const result = require("obj132").fileFinishedImporting("modules/voice_calls/native/CallStateHooks.tsx");

export default function _default() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_7;
  }
  const _require = tmp;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  let id;
  let stateFromStores;
  id = id.getId();
  obj = _require(589);
  const items = [closure_5];
  const items1 = [tmp, id];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const call = closure_1_5.getCall(closure_0);
    if (null != call) {
      const ringing = call.ringing;
      let found = ringing.filter((item, index) => item !== closure_1);
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
  let found = participants.filter((item, index) => {
    let tmp = item.type !== ParticipantTypes.ACTIVITY;
    if (tmp) {
      tmp = item.user.id !== id;
    }
    return tmp;
  });
  const tmp3 = id(9748)();
  dependencyMap = tmp3;
  const items2 = [getRTCConnectionId];
  stateFromStores = _require(589).useStateFromStores(items2, getRTCConnectionId.getRTCConnectionId, []);
  const obj2 = _require(589);
  const items3 = [getRTCConnectionId];
  const items4 = [stateFromStores, tmp3, tmp];
  const stateFromStores1 = _require(589).useStateFromStores(items3, () => {
    let channelId;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    if (channelId === closure_0) {
      obj.initialized = true;
      return closure_1_8.RTC_CONNECTED;
    } else {
      if (!tmp2) {
        obj.initialized = false;
      }
      obj.callId = stateFromStores;
      const state = closure_1_6.getState();
      let initialized = obj.initialized;
      if (!initialized) {
        let tmp10 = state !== closure_1_8.DISCONNECTED;
        if (tmp10) {
          tmp10 = state !== closure_1_8.RTC_DISCONNECTED;
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