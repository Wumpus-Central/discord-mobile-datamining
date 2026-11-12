// === Module 16804: NativeRPCImplementation ===

// Module 16804 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7234 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 12764 */;
import commands_activitiesDefault from "commands/activities" /* 16857 */;
import audioSessionDefault from "audioSession" /* 16858 */;
import authDefault from "auth" /* 16859 */;
import screenCaptureDefault from "screenCapture" /* 16861 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16862 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16863 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16864 */;
import voiceSettingsDefault from "voiceSettings" /* 16872 */;
import unsupportedDefault from "unsupported" /* 16873 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16875 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16878 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5267 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;

const merged = Object.assign(fn(16805).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const pictureInPictureInteractive = Object.assign(pictureInPictureInteractiveDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(16877);
const merged11 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged12 = Object.assign(fn(16879).screenCaptureEvents);
const merged13 = Object.assign(fn(16880).voiceSettingsEventHandlers);
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