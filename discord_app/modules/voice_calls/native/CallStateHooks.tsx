// discord_app/modules/voice_calls/native/CallStateHooks.tsx
import CallConstants from "../../calls/CallConstants.tsx";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import CallStore from "../../../stores/CallStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, channelId, dependencyMap;

let metroImportAll;
let metroImportDefault;
({ EMPTY_STRING_SNOWFLAKE_ID: metroImportDefault, RTCConnectionStates: metroImportAll } = Constants);
const ParticipantTypes = CallConstants.ParticipantTypes;
let obj = {};
const merged = Object.assign({ initialized: false, callId: "a" });
let obj2 = {
  DISCONNECTED: "disconneted",
  DISCONNECTING: "disconnecting",
  CONNECTING: "connecting",
  RINGING: "ringing",
  CONNECTED: "connected",
};
const result = size.fileFinishedImporting("modules/voice_calls/native/CallStateHooks.tsx");

export default function _default() {
  let closure_0;
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
  obj = require("get initialized");
  const items = [CallStore];
  const items1 = [tmp, id];
  const stateFromStoresArray = obj.useStateFromStoresArray(
    items,
    () => {
      let found;
      const call = CallStore.getCall(closure_0);
      if (null != call) {
        const ringing = call.ringing;
        found = ringing.filter((item) => item !== id);
      } else {
        found = [];
      }
      const initialized = obj.initialized || found.length > 0;
      obj.initialized = initialized;
      return found;
    },
    items1,
  );
  const participants = stateFromStores.getParticipants(tmp);
  let found = participants.filter((type) => type.type !== ParticipantTypes.ACTIVITY && type.user.id !== id);
  const tmp3 = id(9458)();
  dependencyMap = tmp3;
  obj2 = require("get initialized");
  const items2 = [RTCConnectionStore];
  stateFromStores = obj2.useStateFromStores(items2, RTCConnectionStore.getRTCConnectionId, []);
  const items3 = [RTCConnectionStore];
  const items4 = [stateFromStores, tmp3, tmp];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(
    items3,
    () => {
      channelId = undefined;
      if (channelId != null) {
        channelId = channelId.channelId;
      }
      if (channelId === closure_0) {
        obj.initialized = true;
        return metroImportAll.RTC_CONNECTED;
      } else {
        const tmp2 = null != stateFromStores && obj.callId === stateFromStores;
        if (!tmp2) {
          obj.initialized = false;
        }
        obj.callId = stateFromStores;
        const state = RTCConnectionStore.getState();
        let initialized = obj.initialized;
        if (!initialized) {
          initialized = state !== metroImportAll.DISCONNECTED && state !== metroImportAll.RTC_DISCONNECTED;
          const tmp10 = state !== metroImportAll.DISCONNECTED && state !== metroImportAll.RTC_DISCONNECTED;
        }
        obj.initialized = initialized;
        return state;
      }
    },
    items4,
  );
  obj.initialized = obj.initialized || flag2;
  let state = obj2.CONNECTING;
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
}
export const CallStates = obj2;
