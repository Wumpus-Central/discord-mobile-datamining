// discord_app/modules/rpc/server/events/VoiceSettingsEventsFactory.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import Constants2 from "../../../../Constants.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ RPC_SCOPE_CONFIG: c3, RPC_LOCAL_SCOPE: closure_4 } = Constants);
const RPCEvents = Constants2.RPCEvents;
const result = size.fileFinishedImporting("modules/rpc/server/events/VoiceSettingsEventsFactory.tsx");

export default function createVoiceSettingsEventHandlers(getDeprecatedVoiceSettings, getVoiceSettings) {
  let obj3;
  _require = getDeprecatedVoiceSettings;
  let closure_1 = getVoiceSettings;
  let obj = {};
  const obj2 = {
    scope: obj3,
    handler() {
      return (arg0) => {
        let dispatch;
        let prevState;
        ({ prevState, dispatch } = arg0);
        const tmp = getDeprecatedVoiceSettings();
        const obj = getVoiceSettings(dependencyMap[3]);
        if (!obj.isEqual(tmp, prevState)) {
          dispatch(tmp);
        }
        return tmp;
      };
    },
  };
  obj3 = {};
  const VOICE_SETTINGS_UPDATE = RPCEvents.VOICE_SETTINGS_UPDATE;
  const ANY = constants.ANY;
  const items = [require("OAuth2Scopes").OAuth2Scopes.RPC, require("OAuth2Scopes").OAuth2Scopes.RPC_VOICE_READ];
  obj3[ANY] = items;
  obj[VOICE_SETTINGS_UPDATE] = obj2;
  const obj4 = {
    scope,
    handler(socket) {
      socket = socket.socket;
      return (prevState) => {
        prevState = prevState.prevState;
        if (null == socket.application.id) {
          return prevState;
        } else {
          const tmp4 = getVoiceSettings(tmp2.application.id);
          const obj = _modDef12;
          if (!obj.isEqual(tmp4, prevState)) {
            tmp(tmp4);
          }
          return tmp4;
        }
      };
    },
  };
  obj[RPCEvents.VOICE_SETTINGS_UPDATE_2] = obj4;
  return obj;
}
