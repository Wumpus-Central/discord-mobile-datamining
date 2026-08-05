// discord_app/modules/rpc/server/events/VoiceSettingsEventsFactory.tsx
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import { RPCEvents } from "ME";
import { set } from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";

let c3;
let c4;
({ RPC_SCOPE_CONFIG: c3, RPC_LOCAL_SCOPE: c4 } = RPC_SCOPE_CONFIG);
const result = require("set").fileFinishedImporting("modules/rpc/server/events/VoiceSettingsEventsFactory.tsx");

export default function createVoiceSettingsEventHandlers(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = {};
  obj = { scope: null, handler: null };
  obj = {};
  const items = [_set.OAuth2Scopes.RPC, _set.OAuth2Scopes.RPC_VOICE_READ];
  obj[constants.ANY] = items;
  obj[0] = obj;
  obj[1] = function handler() {
    return (arg0) => {
      let dispatch;
      let prevState;
      ({ prevState, dispatch } = arg0);
      const tmp = callback();
      if (!obj.isEqual(tmp, prevState)) {
        dispatch(tmp);
      }
      return tmp;
    };
  };
  obj[RPCEvents.VOICE_SETTINGS_UPDATE] = obj;
  obj[RPCEvents.VOICE_SETTINGS_UPDATE_2] = {
    scope: closure_4,
    handler(socket) {
      socket = socket.socket;
      return (prevState) => {
        prevState = prevState.prevState;
        if (null == socket.application.id) {
          return prevState;
        } else {
          const tmp4 = outer1_1(tmp2.application.id);
          if (!obj.isEqual(tmp4, prevState)) {
            tmp(tmp4);
          }
          return tmp4;
        }
      };
    }
  };
  return obj;
};