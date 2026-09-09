// === Module 14493: NativeRPCImplementation ===

// Module 14493 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9582 */;
import commands_activitiesDefault from "commands/activities" /* 14541 */;
import authDefault from "auth" /* 14542 */;
import voiceSettingsDefault from "voiceSettings" /* 14544 */;
import unsupportedDefault from "unsupported" /* 14545 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14547 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14553 */;
import AccessibilityStore from "AccessibilityStore" /* 4566 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

let obj = {};
const merged = Object.assign(fn(14494).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
obj = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14550);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14551).voiceSettingsEventHandlers);
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