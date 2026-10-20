// === Module 15540: NativeRPCImplementation ===

// Module 15540 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9192 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11354 */;
import commands_activitiesDefault from "commands/activities" /* 15593 */;
import audioSessionDefault from "audioSession" /* 15594 */;
import authDefault from "auth" /* 15595 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15597 */;
import voiceSettingsDefault from "voiceSettings" /* 15598 */;
import unsupportedDefault from "unsupported" /* 15599 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15601 */;
import AccessibilityStore from "AccessibilityStore" /* 4946 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;

const merged = Object.assign(fn(15541).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15604);
const merged8 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged9 = Object.assign(fn(15605).voiceSettingsEventHandlers);
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