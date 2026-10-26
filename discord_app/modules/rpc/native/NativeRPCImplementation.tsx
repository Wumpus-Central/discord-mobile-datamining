// === Module 15715: NativeRPCImplementation ===

// Module 15715 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9259 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11469 */;
import commands_activitiesDefault from "commands/activities" /* 15770 */;
import audioSessionDefault from "audioSession" /* 15771 */;
import authDefault from "auth" /* 15772 */;
import screenCaptureDefault from "screenCapture" /* 15774 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15775 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15776 */;
import voiceSettingsDefault from "voiceSettings" /* 15777 */;
import unsupportedDefault from "unsupported" /* 15778 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15780 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;

const merged = Object.assign(fn(15716).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15783);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged11 = Object.assign(fn(15784).screenCaptureEvents);
const merged12 = Object.assign(fn(15785).voiceSettingsEventHandlers);
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