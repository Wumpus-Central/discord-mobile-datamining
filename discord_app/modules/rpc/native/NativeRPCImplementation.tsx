// === Module 14549: NativeRPCImplementation ===

// Module 14549 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11130 */;
import commands_activitiesDefault from "commands/activities" /* 14600 */;
import authDefault from "auth" /* 14601 */;
import voiceSettingsDefault from "voiceSettings" /* 14603 */;
import unsupportedDefault from "unsupported" /* 14604 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14606 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14612 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;

const merged = Object.assign(fn(14550).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14609);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14610).voiceSettingsEventHandlers);
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