// === Module 15978: NativeRPCImplementation ===

// Module 15978 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9291 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11511 */;
import commands_activitiesDefault from "commands/activities" /* 16035 */;
import audioSessionDefault from "audioSession" /* 16036 */;
import authDefault from "auth" /* 16037 */;
import screenCaptureDefault from "screenCapture" /* 16039 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16040 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16041 */;
import voiceSettingsDefault from "voiceSettings" /* 16042 */;
import unsupportedDefault from "unsupported" /* 16043 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16045 */;
import AccessibilityStore from "AccessibilityStore" /* 5005 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;

const merged = Object.assign(fn(15979).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(16048);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged11 = Object.assign(fn(16049).screenCaptureEvents);
const merged12 = Object.assign(fn(16050).voiceSettingsEventHandlers);
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