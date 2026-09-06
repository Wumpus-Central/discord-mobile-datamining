// === Module 14524: VoiceSettingsEventsFactory ===

// Module 14524 (VoiceSettingsEventsFactory)
import Constants2 from "Constants" /* 1074 */;
import Constants from "Constants" /* 4465 */;
import size from "module_2" /* 2 */;

({ RPC_SCOPE_CONFIG: c3, RPC_LOCAL_SCOPE: closure_4 } = Constants);
const RPCEvents = Constants2.RPCEvents;
const result = size.fileFinishedImporting("modules/rpc/server/events/VoiceSettingsEventsFactory.tsx");

export default function createVoiceSettingsEventHandlers(getDeprecatedVoiceSettings, getVoiceSettings) {
  _require = getDeprecatedVoiceSettings;
  closure_1 = getVoiceSettings;
  let obj = {};
  obj = { scope: null, handler: null };
  obj = {};
  const items = [require("OAuth2Scopes").OAuth2Scopes.RPC, require("OAuth2Scopes").OAuth2Scopes.RPC_VOICE_READ];
  obj[constants.ANY] = items;
  obj.scope = obj;
  obj.handler = function handler() {
    return (arg0) => {
      ({ prevState, dispatch } = arg0);
      const tmp = getDeprecatedVoiceSettings();
      if (!obj.isEqual(tmp, prevState)) {
        dispatch(tmp);
      }
      return tmp;
    };
  };
  obj[RPCEvents.VOICE_SETTINGS_UPDATE] = obj;
  obj[RPCEvents.VOICE_SETTINGS_UPDATE_2] = {
    scope,
    handler(socket) {
      socket = socket.socket;
      return (prevState) => {
        prevState = prevState.prevState;
        if (null == socket.application.id) {
          return prevState;
        } else {
          const tmp4 = closure_1(tmp2.application.id);
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