// === Module 13898: importDefaultResult1 ===

// Module 13898 (importDefaultResult1)
import _modDef8785 from "module_8785" /* 8785 */;
import RPC_LOCAL_SCOPEDefault from "RPC_LOCAL_SCOPE" /* 13946 */;
import _modDef13947 from "module_13947" /* 13947 */;
import itemsDefault from "items" /* 13949 */;
import _modDef13950 from "module_13950" /* 13950 */;
import messageEventsValidationDefault from "messageEventsValidation" /* 13952 */;
import _modDef13958 from "module_13958" /* 13958 */;
import importDefaultResult from "maybeApplyNoTextColorForLightCustomTheme" /* 4669 */;
import importDefaultResult1 from "handleThemeChange" /* 1302 */;
import RPC_AUTHENTICATED_SCOPE from "RPC_AUTHENTICATED_SCOPE" /* 13955 */;
import importDefaultResult2 from "handleConnectionClosedOrResumed" /* 1340 */;

let obj = {};
const merged = Object.assign(require("crossPlatformCommands").crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef13947);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef13950);
obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(RPC_AUTHENTICATED_SCOPE.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(require("voiceSettingsEventHandlers").voiceSettingsEventHandlers);
obj = { server: _modDef13958, commands: obj, events: obj, stores: items, transports: null, registerTransportsForEmbeddedPlatform: null };
items = [importDefaultResult1, importDefaultResult, importDefaultResult2];
const items1 = [_modDef8785];
obj[4] = items1;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = require("set").fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;