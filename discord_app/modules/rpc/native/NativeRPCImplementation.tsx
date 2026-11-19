// === Module 15598: NativeRPCImplementation ===

// Module 15598 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6785 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10733 */;
import commands_activitiesDefault from "commands/activities" /* 15652 */;
import audioSessionDefault from "audioSession" /* 15653 */;
import authDefault from "auth" /* 15654 */;
import screenCaptureDefault from "screenCapture" /* 15656 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15657 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15658 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15659 */;
import voiceSettingsDefault from "voiceSettings" /* 15671 */;
import userPopoutDefault from "userPopout" /* 15672 */;
import unsupportedDefault from "unsupported" /* 15673 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15675 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15678 */;
import AccessibilityStore from "AccessibilityStore" /* 4793 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4816 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import StreamerModeStore from "StreamerModeStore" /* 4849 */;

const merged = Object.assign(fn(15599).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const screenCapture = Object.assign(screenCaptureDefault);
const setRunsInBackground = Object.assign(setRunsInBackgroundDefault);
const frameRelaunchDeepLink = Object.assign(frameRelaunchDeepLinkDefault);
const pictureInPictureInteractive = Object.assign(pictureInPictureInteractiveDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const userPopout = Object.assign(userPopoutDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15677);
const merged12 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged13 = Object.assign(fn(15679).screenCaptureEvents);
const merged14 = Object.assign(fn(15680).voiceSettingsEventHandlers);
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