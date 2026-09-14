// === Module 14554: NativeRPCImplementation ===

// Module 14554 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9680 */;
import commands_activitiesDefault from "commands/activities" /* 14602 */;
import authDefault from "auth" /* 14603 */;
import voiceSettingsDefault from "voiceSettings" /* 14605 */;
import unsupportedDefault from "unsupported" /* 14606 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14608 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14614 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;
import ThemeStore from "ThemeStore" /* 1181 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1219 */;

const merged = Object.assign(fn(14555).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14611);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14612).voiceSettingsEventHandlers);
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