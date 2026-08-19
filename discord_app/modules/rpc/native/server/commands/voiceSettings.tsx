// discord_app/modules/rpc/native/server/commands/voiceSettings.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import ME from "../../../../../Constants.tsx";
import RPC_SCOPE_CONFIG from "../../../Constants.tsx";
import set from "../../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import validateSocketClient from "../NativeRPCHelpers.tsx";

const obj = {};
const items = [set.OAuth2Scopes.RPC, set.OAuth2Scopes.RPC_VOICE_READ];
obj[RPC_SCOPE_CONFIG.RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler() {
  return validateSocketClient.getDeprecatedVoiceSettings();
};
obj[ME.RPCCommands.GET_VOICE_SETTINGS] = obj;
const result = obj132.fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;