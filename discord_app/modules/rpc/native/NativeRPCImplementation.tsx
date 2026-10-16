// === Module 15413: NativeRPCImplementation ===

// Module 15413 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11246 */;
import commands_activitiesDefault from "commands/activities" /* 15468 */;
import authDefault from "auth" /* 15469 */;
import voiceSettingsDefault from "voiceSettings" /* 15471 */;
import unsupportedDefault from "unsupported" /* 15472 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15474 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 15480 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;

const merged = Object.assign(fn(15414).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15477);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(15478).voiceSettingsEventHandlers);
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