// === Module 14393: items ===

// Module 14393 (items)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4380 */;
import set2 from "set" /* 8625 */;
import validateSocketClient from "validateSocketClient" /* 9520 */;

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