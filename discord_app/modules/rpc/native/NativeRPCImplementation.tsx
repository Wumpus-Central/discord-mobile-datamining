// === Module 14465: importDefaultResult1 ===

// Module 14465 (importDefaultResult1)
import _modDef9550 from "module_9550" /* 9550 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14513 */;
import _modDef14514 from "module_14514" /* 14514 */;
import itemsDefault from "items" /* 14516 */;
import _modDef14517 from "module_14517" /* 14517 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14519 */;
import _modDef14525 from "module_14525" /* 14525 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import importDefaultResult1 from "handleThemeChange" /* 1183 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14522 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1221 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14514);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14517);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14525, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef9550];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;