// === Module 15752: NativeRPCImplementation ===

// Module 15752 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9259 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11473 */;
import commands_activitiesDefault from "commands/activities" /* 15809 */;
import audioSessionDefault from "audioSession" /* 15810 */;
import authDefault from "auth" /* 15811 */;
import screenCaptureDefault from "screenCapture" /* 15813 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15814 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15815 */;
import voiceSettingsDefault from "voiceSettings" /* 15816 */;
import unsupportedDefault from "unsupported" /* 15817 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15819 */;
import AccessibilityStore from "AccessibilityStore" /* 4973 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;

const merged = Object.assign(fn(15753).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15822);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged11 = Object.assign(fn(15823).screenCaptureEvents);
const merged12 = Object.assign(fn(15824).voiceSettingsEventHandlers);
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