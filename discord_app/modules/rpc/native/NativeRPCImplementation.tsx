// === Module 15885: NativeRPCImplementation ===

// Module 15885 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7639 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10213 */;
import commands_activitiesDefault from "commands/activities" /* 15944 */;
import audioSessionDefault from "audioSession" /* 15945 */;
import authDefault from "auth" /* 15946 */;
import screenCaptureDefault from "screenCapture" /* 15948 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15949 */;
import toastDefault from "toast" /* 15950 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15952 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15953 */;
import voiceSettingsDefault from "voiceSettings" /* 15965 */;
import userPopoutDefault from "userPopout" /* 15966 */;
import unsupportedDefault from "unsupported" /* 15967 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15969 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15972 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5067 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import StreamerModeStore from "StreamerModeStore" /* 5100 */;

const merged = Object.assign(fn(15886).crossPlatformCommands);
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
const discordEnvironmentEvents = fn(15971);
const merged13 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged14 = Object.assign(fn(15973).screenCaptureEvents);
const merged15 = Object.assign(fn(15974).voiceSettingsEventHandlers);
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