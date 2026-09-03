// === Module 14358: importDefaultResult1 ===

// Module 14358 (importDefaultResult1)
import _modDef9516 from "module_9516" /* 9516 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14406 */;
import _modDef14407 from "module_14407" /* 14407 */;
import itemsDefault from "items" /* 14409 */;
import _modDef14410 from "module_14410" /* 14410 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14412 */;
import _modDef14418 from "module_14418" /* 14418 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import importDefaultResult1 from "handleThemeChange" /* 1301 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14415 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1339 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14407);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14410);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14418, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef9516];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;