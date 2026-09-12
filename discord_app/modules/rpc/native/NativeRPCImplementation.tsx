// === Module 14553: NativeRPCImplementation ===

// Module 14553 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9680 */;
import commands_activitiesDefault from "commands/activities" /* 14601 */;
import authDefault from "auth" /* 14602 */;
import voiceSettingsDefault from "voiceSettings" /* 14604 */;
import unsupportedDefault from "unsupported" /* 14605 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14607 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14613 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

let obj = {};
const merged = Object.assign(fn(14554).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
obj = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14610);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14611).voiceSettingsEventHandlers);
obj = { server: NativeRPCServerDefault, commands: obj, events: obj, stores: null, transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
obj.stores = items;
const items1 = [WebViewPostMessageTransportDefault];
obj.transports = items1;
obj.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;