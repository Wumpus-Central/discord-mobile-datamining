// === Module 14589: NativeRPCImplementation ===

// Module 14589 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9704 */;
import commands_activitiesDefault from "commands/activities" /* 14638 */;
import authDefault from "auth" /* 14639 */;
import voiceSettingsDefault from "voiceSettings" /* 14641 */;
import unsupportedDefault from "unsupported" /* 14642 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14644 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14650 */;
import AccessibilityStore from "AccessibilityStore" /* 4632 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;

const merged = Object.assign(fn(14590).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14647);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14648).voiceSettingsEventHandlers);
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