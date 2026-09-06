// discord_app/modules/rpc/native/server/commands/voiceSettings.tsx
import Constants from "../../../../../Constants.tsx";
import Constants2 from "../../../Constants.tsx";
import OAuth2Scopes from "../../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import NativeRPCHelpers from "../NativeRPCHelpers.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj = {};
obj = { scope: null, handler: null };
obj = {};
const items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj[Constants2.RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler() {
  return NativeRPCHelpers.getDeprecatedVoiceSettings();
};
obj[Constants.RPCCommands.GET_VOICE_SETTINGS] = obj;
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;
