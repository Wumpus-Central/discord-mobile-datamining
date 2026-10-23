// === Module 15690: NativeRPCImplementation ===

// Module 15690 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9258 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11446 */;
import commands_activitiesDefault from "commands/activities" /* 15744 */;
import audioSessionDefault from "audioSession" /* 15745 */;
import authDefault from "auth" /* 15746 */;
import screenCaptureDefault from "screenCapture" /* 15748 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15749 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15750 */;
import voiceSettingsDefault from "voiceSettings" /* 15751 */;
import unsupportedDefault from "unsupported" /* 15752 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15754 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;

const merged = Object.assign(fn(15691).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15757);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged11 = Object.assign(fn(15758).voiceSettingsEventHandlers);
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