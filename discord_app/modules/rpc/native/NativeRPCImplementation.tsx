// === Module 14006: importDefaultResult1 ===

// Module 14006 (importDefaultResult1)
import _modDef10892 from "module_10892" /* 10892 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14054 */;
import _modDef14055 from "module_14055" /* 14055 */;
import itemsDefault from "items" /* 14057 */;
import _modDef14058 from "module_14058" /* 14058 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14060 */;
import _modDef14066 from "module_14066" /* 14066 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import importDefaultResult1 from "handleThemeChange" /* 1302 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14063 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1340 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14055);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14058);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14066, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef10892];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;