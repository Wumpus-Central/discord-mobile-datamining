// discord_app/modules/rpc/native/NativeRPCImplementation.tsx
import set from "set" /* 2 */;
import _modDef8748 from "module_8748" /* 8748 */;
import crossPlatformCommands from "crossPlatformCommands" /* 13836 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 13880 */;
import _modDef13881 from "module_13881" /* 13881 */;
import itemsDefault from "items" /* 13883 */;
import _modDef13884 from "module_13884" /* 13884 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 13886 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 13889 */;
import _modDef13891 from "module_13891" /* 13891 */;

let obj = {};
const merged = Object.assign(crossPlatformCommands.crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef13881);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef13884);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
obj = { server: _modDef13891, commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [_modDef8748];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = set.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;