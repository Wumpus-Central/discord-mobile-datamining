// === Module 14569: voiceSettings ===

// Module 14569 (voiceSettings)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 4511 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8425 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 9649 */;
import size from "module_2" /* 2 */;

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