// discord_app/modules/rpc/native/server/commands/voiceSettings.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ME from "../../../../../Constants.tsx";
import RPC_SCOPE_CONFIG from "../../../Constants.tsx";
import set2 from "../../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import validateSocketClient from "../NativeRPCHelpers.tsx";

let obj = {};
obj = { scope: null, handler: null };
obj = {};
const items = [set2.OAuth2Scopes.RPC, set2.OAuth2Scopes.RPC_VOICE_READ];
obj[RPC_SCOPE_CONFIG.RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler() {
  return validateSocketClient.getDeprecatedVoiceSettings();
};
obj[ME.RPCCommands.GET_VOICE_SETTINGS] = obj;
const result = set.fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;