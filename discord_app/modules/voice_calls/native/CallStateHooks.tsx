// discord_app/modules/voice_calls/native/CallStateHooks.tsx
import closure_3 from "../../calls/ChannelRTCStore.tsx";
import closure_4 from "../../../stores/AuthenticationStore.tsx";
import closure_5 from "../../../stores/CallStore.tsx";
import closure_6 from "../../../stores/RTCConnectionStore.tsx";
import ME from "../../../Constants.tsx";
import { ParticipantTypes } from "../../calls/CallConstants.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: error, RTCConnectionStates: closure_8 } = ME);
let obj = {};
const merged = Object.assign({ initialized: false, callId: "PX_16" });
obj = {
  DISCONNECTED: "disconneted",
  DISCONNECTING: "disconnecting",
  CONNECTING: "connecting",
  RINGING: "ringing",
  CONNECTED: "connected",
};
const result = require("set").fileFinishedImporting("modules/voice_calls/native/CallStateHooks.tsx");

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
  dependencyMap = undefined;
  let stateFromStores;
  id = id.getId();
  obj = initialize;
  const items = [closure_5];
  const items1 = [tmp, id];
  const stateFromStoresArray = obj.useStateFromStoresArray(
    items,
    () => {
      const call = closure_1_5.getCall(closure_0);
      if (null != call) {
        const ringing = call.ringing;
        let found = ringing.filter((arg0) => arg0 !== closure_1);
      } else {
        found = [];
      }
      let initialized = closure_1_10.initialized;
      if (!initialized) {
        initialized = found.length > 0;
      }
      closure_1_10.initialized = initialized;
      return found;
    },
    items1,
  );
  const participants = stateFromStores.getParticipants(tmp);
  let found = participants.filter((type) => {
    let tmp = type.type !== closure_1_9.ACTIVITY;
    if (tmp) {
      tmp = type.user.id !== id;
    }
    return tmp;
  });
  const tmp3 = id(9215)();
  dependencyMap = tmp3;
  const items2 = [getRTCConnectionId];
  stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items2,
    getRTCConnectionId.getRTCConnectionId,
    [],
  );
  const obj2 = initialize;
  const items3 = [getRTCConnectionId];
  const items4 = [stateFromStores, tmp3, tmp];
  const stateFromStores1 = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items3,
    () => {
      let channelId;
      if (channelId != null) {
        channelId = channelId.channelId;
      }
      if (channelId === closure_0) {
        closure_1_10.initialized = true;
        return closure_1_8.RTC_CONNECTED;
      } else {
        if (!tmp2) {
          closure_1_10.initialized = false;
        }
        closure_1_10.callId = stateFromStores;
        const state = closure_1_6.getState();
        let initialized = closure_1_10.initialized;
        if (!initialized) {
          let tmp10 = state !== closure_1_8.DISCONNECTED;
          if (tmp10) {
            tmp10 = state !== closure_1_8.RTC_DISCONNECTED;
          }
          initialized = tmp10;
        }
        closure_1_10.initialized = initialized;
        return state;
      }
    },
    items4,
  );
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
}
export const CallStates = obj;
