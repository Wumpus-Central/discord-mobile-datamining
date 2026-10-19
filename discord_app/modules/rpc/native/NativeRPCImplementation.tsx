// === Module 15522: NativeRPCImplementation ===

// Module 15522 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9180 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11343 */;
import commands_activitiesDefault from "commands/activities" /* 15575 */;
import audioSessionDefault from "audioSession" /* 15576 */;
import authDefault from "auth" /* 15577 */;
import voiceSettingsDefault from "voiceSettings" /* 15579 */;
import unsupportedDefault from "unsupported" /* 15580 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15582 */;
import AccessibilityStore from "AccessibilityStore" /* 4946 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;

const merged = Object.assign(fn(15523).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15585);
const merged7 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged8 = Object.assign(fn(15586).voiceSettingsEventHandlers);
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