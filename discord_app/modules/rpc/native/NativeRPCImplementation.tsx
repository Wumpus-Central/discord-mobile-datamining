// === Module 14739: NativeRPCImplementation ===

// Module 14739 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9576 */;
import commands_activitiesDefault from "commands/activities" /* 14788 */;
import authDefault from "auth" /* 14789 */;
import voiceSettingsDefault from "voiceSettings" /* 14791 */;
import unsupportedDefault from "unsupported" /* 14792 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14794 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14800 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;

const merged = Object.assign(fn(14740).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14797);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14798).voiceSettingsEventHandlers);
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