// === Module 15711: NativeRPCImplementation ===

// Module 15711 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9259 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11466 */;
import commands_activitiesDefault from "commands/activities" /* 15766 */;
import audioSessionDefault from "audioSession" /* 15767 */;
import authDefault from "auth" /* 15768 */;
import screenCaptureDefault from "screenCapture" /* 15770 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15771 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15772 */;
import voiceSettingsDefault from "voiceSettings" /* 15773 */;
import unsupportedDefault from "unsupported" /* 15774 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15776 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;

const merged = Object.assign(fn(15712).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15779);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged11 = Object.assign(fn(15780).screenCaptureEvents);
const merged12 = Object.assign(fn(15781).voiceSettingsEventHandlers);
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