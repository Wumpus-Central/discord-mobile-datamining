// === Module 15706: NativeRPCImplementation ===

// Module 15706 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 7513 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10071 */;
import commands_activitiesDefault from "commands/activities" /* 15765 */;
import audioSessionDefault from "audioSession" /* 15766 */;
import authDefault from "auth" /* 15767 */;
import screenCaptureDefault from "screenCapture" /* 15769 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15770 */;
import toastDefault from "toast" /* 15771 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15773 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15774 */;
import voiceSettingsDefault from "voiceSettings" /* 15786 */;
import userPopoutDefault from "userPopout" /* 15787 */;
import unsupportedDefault from "unsupported" /* 15788 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15790 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15793 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4941 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 4974 */;

const merged = Object.assign(fn(15707).crossPlatformCommands);
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
const discordEnvironmentEvents = fn(15792);
const merged13 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged14 = Object.assign(fn(15794).screenCaptureEvents);
const merged15 = Object.assign(fn(15795).voiceSettingsEventHandlers);
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