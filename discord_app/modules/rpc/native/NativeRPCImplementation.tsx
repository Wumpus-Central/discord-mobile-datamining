// discord_app/modules/rpc/native/NativeRPCImplementation.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import _modDef8748 from "server/transports/WebViewPostMessageTransport.tsx";
import crossPlatformCommands from "../server/commands/crossPlatformRPCCommands.tsx";
import RPC_LOCAL_SCOPEDefault from "server/commands/activities.tsx";
import _modDef13881 from "server/commands/auth.tsx";
import itemsDefault from "server/commands/voiceSettings.tsx";
import _modDef13884 from "server/commands/unsupported.tsx";
import messageEventsValidationDefault from "../server/events/crossPlatformRPCEventHandlers.tsx";
import voiceSettingsEventHandlers from "events/voiceSettingsEventHandlers.tsx";
import _modDef13891 from "NativeRPCServer.tsx";

const merged = Object.assign(crossPlatformCommands.crossPlatformCommands);
const merged1 = Object.assign(RPC_LOCAL_SCOPEDefault);
const merged2 = Object.assign(_modDef13881);
const merged3 = Object.assign(itemsDefault);
const merged4 = Object.assign(_modDef13884);
let obj = {};
const merged5 = Object.assign(messageEventsValidationDefault);
const merged6 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
obj = { server: _modDef13891, commands: obj, events: obj, stores: [], transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [_modDef8748];
obj[4] = items;
obj[5] = function registerTransportsForEmbeddedPlatform() {

};
const result = obj132.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;