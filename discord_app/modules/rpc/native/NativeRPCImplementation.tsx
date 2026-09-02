// === Module 14342: importDefaultResult1 ===

// Module 14342 (importDefaultResult1)
import _modDef9512 from "module_9512" /* 9512 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14390 */;
import _modDef14391 from "module_14391" /* 14391 */;
import itemsDefault from "items" /* 14393 */;
import _modDef14394 from "module_14394" /* 14394 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14396 */;
import _modDef14402 from "module_14402" /* 14402 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import importDefaultResult1 from "handleThemeChange" /* 1301 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14399 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1339 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14391);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14394);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14402, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef9512];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;