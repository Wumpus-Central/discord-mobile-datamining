import getParticipants from "getParticipants";
import fetchFingerprint from "fetchFingerprint";
import callConnect from "callConnect";
import createRTCConnection from "createRTCConnection";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";

let error;
let metroImportAll;
let require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: error, RTCConnectionStates: metroImportAll } = ME);
let obj = {};
const merged = Object.assign({ initialized: false, callId: "r" });
obj = { DISCONNECTED: "disconneted", DISCONNECTING: "disconnecting", CONNECTING: "connecting", RINGING: "ringing", CONNECTED: "connected" };
const result = require("callConnect").fileFinishedImporting("modules/voice_calls/native/CallStateHooks.tsx");

export default function _default() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_7;
  }
  const require = tmp;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  let id;
  let dependencyMap;
  let stateFromStores;
  id = id.getId();
  const obj = require(589) /* initialize */;
  const items = [callConnect];
  const items1 = [tmp, id];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const call = outer1_5.getCall(closure_0);
    if (null != call) {
      const ringing = call.ringing;
      let found = ringing.filter((arg0) => arg0 !== closure_1);
    } else {
      found = [];
    }
    let initialized = outer1_10.initialized;
    if (!initialized) {
      initialized = found.length > 0;
    }
    outer1_10.initialized = initialized;
    return found;
  }, items1);
  const participants = stateFromStores.getParticipants(tmp);
  let found = participants.filter((type) => {
    let tmp = type.type !== outer1_9.ACTIVITY;
    if (tmp) {
      tmp = type.user.id !== id;
    }
    return tmp;
  });
  const tmp3 = id(9115)();
  dependencyMap = tmp3;
  const items2 = [getRTCConnectionId];
  stateFromStores = require(589) /* initialize */.useStateFromStores(items2, getRTCConnectionId.getRTCConnectionId, []);
  const obj2 = require(589) /* initialize */;
  const items3 = [getRTCConnectionId];
  const items4 = [stateFromStores, tmp3, tmp];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items3, () => {
    let channelId;
    if (_undefined != null) {
      channelId = _undefined.channelId;
    }
    if (channelId === closure_0) {
      outer1_10.initialized = true;
      return outer1_8.RTC_CONNECTED;
    } else {
      if (!tmp2) {
        outer1_10.initialized = false;
      }
      outer1_10.callId = stateFromStores;
      const state = outer1_6.getState();
      let initialized = outer1_10.initialized;
      if (!initialized) {
        let tmp10 = state !== outer1_8.DISCONNECTED;
        if (tmp10) {
          tmp10 = state !== outer1_8.RTC_DISCONNECTED;
        }
        initialized = tmp10;
      }
      outer1_10.initialized = initialized;
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