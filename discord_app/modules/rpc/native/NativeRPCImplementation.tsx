// === Module 16566: NativeRPCImplementation ===

// Module 16566 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9481 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 12010 */;
import commands_activitiesDefault from "commands/activities" /* 16618 */;
import audioSessionDefault from "audioSession" /* 16619 */;
import authDefault from "auth" /* 16620 */;
import screenCaptureDefault from "screenCapture" /* 16622 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16623 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16624 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16625 */;
import voiceSettingsDefault from "voiceSettings" /* 16633 */;
import unsupportedDefault from "unsupported" /* 16634 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16636 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16639 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5167 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;

const merged = Object.assign(fn(16567).crossPlatformCommands);
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
const discordEnvironmentEvents = fn(16638);
const merged11 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged12 = Object.assign(fn(16640).screenCaptureEvents);
const merged13 = Object.assign(fn(16641).voiceSettingsEventHandlers);
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