// === Module 16621: NativeRPCImplementation ===

// Module 16621 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 9409 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 11967 */;
import commands_activitiesDefault from "commands/activities" /* 16674 */;
import audioSessionDefault from "audioSession" /* 16675 */;
import authDefault from "auth" /* 16676 */;
import screenCaptureDefault from "screenCapture" /* 16678 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 16679 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 16680 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 16681 */;
import voiceSettingsDefault from "voiceSettings" /* 16689 */;
import unsupportedDefault from "unsupported" /* 16690 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 16692 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 16695 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5164 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;

const merged = Object.assign(fn(16622).crossPlatformCommands);
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
const discordEnvironmentEvents = fn(16694);
const merged11 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged12 = Object.assign(fn(16696).screenCaptureEvents);
const merged13 = Object.assign(fn(16697).voiceSettingsEventHandlers);
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