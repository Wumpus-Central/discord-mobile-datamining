// === Module 15612: NativeRPCImplementation ===

// Module 15612 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9219 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11398 */;
import commands_activitiesDefault from "commands/activities" /* 15668 */;
import audioSessionDefault from "audioSession" /* 15669 */;
import authDefault from "auth" /* 15670 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15672 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15673 */;
import voiceSettingsDefault from "voiceSettings" /* 15674 */;
import unsupportedDefault from "unsupported" /* 15675 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15677 */;
import AccessibilityStore from "AccessibilityStore" /* 4967 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;

const merged = Object.assign(fn(15613).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15680);
const merged9 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged10 = Object.assign(fn(15681).voiceSettingsEventHandlers);
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