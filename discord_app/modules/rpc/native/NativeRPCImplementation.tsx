// === Module 14086: importDefaultResult1 ===

// Module 14086 (importDefaultResult1)
import _modDef9460 from "module_9460" /* 9460 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14134 */;
import _modDef14135 from "module_14135" /* 14135 */;
import itemsDefault from "items" /* 14137 */;
import _modDef14138 from "module_14138" /* 14138 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14140 */;
import _modDef14146 from "module_14146" /* 14146 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import importDefaultResult1 from "handleThemeChange" /* 1302 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14143 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1340 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14135);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14138);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14146, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef9460];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;