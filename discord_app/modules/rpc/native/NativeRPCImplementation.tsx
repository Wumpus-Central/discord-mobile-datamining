// === Module 15827: NativeRPCImplementation ===

// Module 15827 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7608 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10170 */;
import commands_activitiesDefault from "commands/activities" /* 15886 */;
import audioSessionDefault from "audioSession" /* 15887 */;
import authDefault from "auth" /* 15888 */;
import screenCaptureDefault from "screenCapture" /* 15890 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15891 */;
import toastDefault from "toast" /* 15892 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15894 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15895 */;
import voiceSettingsDefault from "voiceSettings" /* 15907 */;
import userPopoutDefault from "userPopout" /* 15908 */;
import unsupportedDefault from "unsupported" /* 15909 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15911 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15914 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5036 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 5069 */;

const merged = Object.assign(fn(15828).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const toast = Object.assign(toastDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const pictureInPictureInteractive = Object.assign(pictureInPictureInteractiveDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const userPopout = Object.assign(userPopoutDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15913);
const merged13 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged14 = Object.assign(fn(15915).screenCaptureEvents);
const merged15 = Object.assign(fn(15916).voiceSettingsEventHandlers);
const obj4 = { server: NativeRPCServerDefault, commands: {}, events: {}, stores: null, transports: null, registerTransportsForEmbeddedPlatform: null };
const items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore, ClientThemesBackgroundStore, CustomThemeMobileStore, StreamerModeStore];
obj4.stores = items;
const items1 = [WebViewPostMessageTransportDefault];
obj4.transports = items1;
obj4.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {

};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj4;