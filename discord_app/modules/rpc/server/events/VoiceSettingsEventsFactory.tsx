// === Module 14401: createVoiceSettingsEventHandlers ===

// Module 14401 (createVoiceSettingsEventHandlers)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4380 */;

({ RPC_SCOPE_CONFIG: c3, RPC_LOCAL_SCOPE: c4 } = RPC_SCOPE_CONFIG);
const RPCEvents = ME.RPCEvents;
const result = set.fileFinishedImporting("modules/rpc/server/events/VoiceSettingsEventsFactory.tsx");

export default function createVoiceSettingsEventHandlers(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  let obj = {};
  obj = { scope: null, handler: null };
  obj = {};
  const items = [_require(8625).OAuth2Scopes.RPC, _require(8625).OAuth2Scopes.RPC_VOICE_READ];
  obj[constants.ANY] = items;
  obj[0] = obj;
  obj[1] = function handler() {
    return (arg0) => {
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
          const tmp4 = closure_1_1(tmp2.application.id);
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