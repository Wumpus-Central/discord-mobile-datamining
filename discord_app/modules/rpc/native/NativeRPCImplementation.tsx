// === Module 14119: importDefaultResult1 ===

// Module 14119 (importDefaultResult1)
import _modDef9499 from "module_9499" /* 9499 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14167 */;
import _modDef14168 from "module_14168" /* 14168 */;
import itemsDefault from "items" /* 14170 */;
import _modDef14171 from "module_14171" /* 14171 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14173 */;
import _modDef14179 from "module_14179" /* 14179 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import importDefaultResult1 from "handleThemeChange" /* 1302 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14176 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1340 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14168);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14171);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14179, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef9499];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;