// === Module 14033: importDefaultResult1 ===

// Module 14033 (importDefaultResult1)
import _modDef9420 from "module_9420" /* 9420 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 14081 */;
import _modDef14082 from "module_14082" /* 14082 */;
import itemsDefault from "items" /* 14084 */;
import _modDef14085 from "module_14085" /* 14085 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 14087 */;
import _modDef14093 from "module_14093" /* 14093 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import importDefaultResult1 from "handleThemeChange" /* 1302 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 14090 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1340 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef14082);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef14085);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef14093, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef9420];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;