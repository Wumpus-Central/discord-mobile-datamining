// === Module 15669: NativeRPCImplementation ===

// Module 15669 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9235 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11426 */;
import commands_activitiesDefault from "commands/activities" /* 15723 */;
import audioSessionDefault from "audioSession" /* 15724 */;
import authDefault from "auth" /* 15725 */;
import screenCaptureDefault from "screenCapture" /* 15727 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15728 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15729 */;
import voiceSettingsDefault from "voiceSettings" /* 15730 */;
import unsupportedDefault from "unsupported" /* 15731 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15733 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;

const merged = Object.assign(fn(15670).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15736);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged11 = Object.assign(fn(15737).voiceSettingsEventHandlers);
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