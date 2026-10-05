// discord_app/modules/rpc/native/server/commands/voiceSettings.tsx
import Constants from "../../../../../Constants.tsx";
import Constants2 from "../../../Constants.tsx";
import OAuth2Scopes from "../../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import NativeRPCHelpers from "../NativeRPCHelpers.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj3;
const RPC_SCOPE_CONFIG = Constants2.RPC_SCOPE_CONFIG;
let obj = {};
const obj2 = {
  scope: obj3,
  handler() {
    const obj = NativeRPCHelpers;
    return obj.getDeprecatedVoiceSettings();
  },
};
obj3 = {};
const GET_VOICE_SETTINGS = Constants.RPCCommands.GET_VOICE_SETTINGS;
const ANY = RPC_SCOPE_CONFIG.ANY;
const items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj3[ANY] = items;
obj[GET_VOICE_SETTINGS] = obj2;
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;
