// === Module 16260: NativeRPCImplementation ===

// Module 16260 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9308 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11766 */;
import commands_activitiesDefault from "commands/activities" /* 16312 */;
import audioSessionDefault from "audioSession" /* 16313 */;
import authDefault from "auth" /* 16314 */;
import screenCaptureDefault from "screenCapture" /* 16316 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16317 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16318 */;
import voiceSettingsDefault from "voiceSettings" /* 16319 */;
import unsupportedDefault from "unsupported" /* 16320 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16322 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16325 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1239 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;

const merged = Object.assign(fn(16261).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(16324);
const merged10 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged11 = Object.assign(fn(16326).screenCaptureEvents);
const merged12 = Object.assign(fn(16327).voiceSettingsEventHandlers);
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