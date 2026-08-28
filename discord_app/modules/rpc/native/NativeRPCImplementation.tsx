// === Module 14052: importDefaultResult1 ===

// Module 14052 (importDefaultResult1)
import _modDef9438 from "module_9438" /* 9438 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14100 */;
import _modDef14101 from "module_14101" /* 14101 */;
import itemsDefault from "items" /* 14103 */;
import _modDef14104 from "module_14104" /* 14104 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14106 */;
import _modDef14112 from "module_14112" /* 14112 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import importDefaultResult1 from "handleThemeChange" /* 1302 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14109 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1340 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14101);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14104);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14112, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef9438];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;