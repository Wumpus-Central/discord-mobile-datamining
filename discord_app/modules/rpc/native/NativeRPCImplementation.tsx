// === Module 14026: NativeRPCImplementation ===

// Module 14026 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 8766 */;
import commands_activitiesDefault from "commands/activities" /* 14075 */;
import authDefault from "auth" /* 14076 */;
import voiceSettingsDefault from "voiceSettings" /* 14078 */;
import unsupportedDefault from "unsupported" /* 14079 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14081 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14087 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;

const merged = Object.assign(fn(14027).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14084);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14085).voiceSettingsEventHandlers);
const obj4 = { server: NativeRPCServerDefault, commands: {}, events: {}, stores: null, transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
obj4.stores = items;
const items1 = [WebViewPostMessageTransportDefault];
obj4.transports = items1;
obj4.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj4;