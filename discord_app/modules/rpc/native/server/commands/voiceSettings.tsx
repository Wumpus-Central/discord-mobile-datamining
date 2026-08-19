// === Module 13883: items ===

// Module 13883 (items)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4277 */;
import set from "set" /* 4375 */;
import validateSocketClient from "validateSocketClient" /* 8756 */;

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