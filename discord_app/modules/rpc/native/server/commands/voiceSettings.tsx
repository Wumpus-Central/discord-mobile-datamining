// === Module 14797: voiceSettings ===

// Module 14797 (voiceSettings)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 4660 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8610 */;
import NativeRPCHelpers from "NativeRPCHelpers" /* 9585 */;
import size from "module_2" /* 2 */;

const obj = {};
const obj2 = { scope: null, handler: null };
const obj3 = {};
const items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ];
obj3[Constants2.RPC_SCOPE_CONFIG.ANY] = items;
obj2.scope = obj3;
obj2.handler = function handler() {
  return NativeRPCHelpers.getDeprecatedVoiceSettings();
};
obj[Constants.RPCCommands.GET_VOICE_SETTINGS] = obj2;
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/voiceSettings.tsx");

export default obj;