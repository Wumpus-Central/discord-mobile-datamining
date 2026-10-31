// === Module 16302: NativeRPCImplementation ===

// Module 16302 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9328 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11803 */;
import commands_activitiesDefault from "commands/activities" /* 16354 */;
import audioSessionDefault from "audioSession" /* 16355 */;
import authDefault from "auth" /* 16356 */;
import screenCaptureDefault from "screenCapture" /* 16358 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16359 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16360 */;
import voiceSettingsDefault from "voiceSettings" /* 16361 */;
import unsupportedDefault from "unsupported" /* 16362 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16364 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16367 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5038 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;

const merged = Object.assign(fn(16303).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(16366);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged11 = Object.assign(fn(16368).screenCaptureEvents);
const merged12 = Object.assign(fn(16369).voiceSettingsEventHandlers);
const obj4 = { server: NativeRPCServerDefault, commands: {}, events: {}, stores: null, transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore, ClientThemesBackgroundStore, CustomThemeMobileStore];
obj4.stores = items;
const items1 = [WebViewPostMessageTransportDefault];
obj4.transports = items1;
obj4.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj4;