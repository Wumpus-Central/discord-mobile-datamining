// discord_app/modules/rpc/native/NativeRPCImplementation.tsx
import _modDef10892 from "server/transports/WebViewPostMessageTransport.tsx";
import RPC_LOCAL_SCOPEDefault from "server/commands/activities.tsx";
import _modDef14055 from "server/commands/auth.tsx";
import itemsDefault from "server/commands/voiceSettings.tsx";
import _modDef14058 from "server/commands/unsupported.tsx";
import messageEventsValidationDefault from "../server/events/crossPlatformRPCEventHandlers.tsx";
import _modDef14066 from "NativeRPCServer.tsx";
import importDefaultResult from "../../a11y/AccessibilityStore.tsx";
import importDefaultResult1 from "../../user_settings/ThemeStore.tsx";
import RPC_AUTHENTICATED_SCOPE from "../server/events/discordEnvironmentEvents.tsx";
import importDefaultResult2 from "../../user_settings/UserSettingsProtoStore.tsx";

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