// === Module 14805: VoiceSettingsEventsFactory ===

// Module 14805 (VoiceSettingsEventsFactory)
import Constants2 from "Constants" /* 1074 */;
import Constants from "Constants" /* 4660 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ RPC_SCOPE_CONFIG: c3, RPC_LOCAL_SCOPE: closure_4 } = Constants);
const RPCEvents = Constants2.RPCEvents;
const result = size.fileFinishedImporting("modules/rpc/server/events/VoiceSettingsEventsFactory.tsx");

export default function createVoiceSettingsEventHandlers(getDeprecatedVoiceSettings, getVoiceSettings) {
  _require = getDeprecatedVoiceSettings;
  closure_1 = getVoiceSettings;
  const obj = {};
  const obj2 = { scope: null, handler: null };
  const obj3 = {};
  const items = [require("OAuth2Scopes").OAuth2Scopes.RPC, require("OAuth2Scopes").OAuth2Scopes.RPC_VOICE_READ];
  obj3[constants.ANY] = items;
  obj2.scope = obj3;
  obj2.handler = function handler() {
    return (arg0) => {
      ({ prevState, dispatch } = arg0);
      const tmp = getDeprecatedVoiceSettings();
      if (!obj.isEqual(tmp, prevState)) {
        dispatch(tmp);
      }
      return tmp;
    };
  };
  obj[RPCEvents.VOICE_SETTINGS_UPDATE] = obj2;
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