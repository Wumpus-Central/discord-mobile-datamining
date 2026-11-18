// === Module 15612: NativeRPCImplementation ===

// Module 15612 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6813 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10755 */;
import commands_activitiesDefault from "commands/activities" /* 15665 */;
import audioSessionDefault from "audioSession" /* 15666 */;
import authDefault from "auth" /* 15667 */;
import screenCaptureDefault from "screenCapture" /* 15669 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15670 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15671 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15672 */;
import voiceSettingsDefault from "voiceSettings" /* 15684 */;
import unsupportedDefault from "unsupported" /* 15685 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15687 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15690 */;
import AccessibilityStore from "AccessibilityStore" /* 4824 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4847 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import StreamerModeStore from "StreamerModeStore" /* 4880 */;

const merged = Object.assign(fn(15613).crossPlatformCommands);
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
const discordEnvironmentEvents = fn(15689);
const merged11 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged12 = Object.assign(fn(15691).screenCaptureEvents);
const merged13 = Object.assign(fn(15692).voiceSettingsEventHandlers);
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