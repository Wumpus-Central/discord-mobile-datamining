// === Module 15685: NativeRPCImplementation ===

// Module 15685 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6904 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10795 */;
import commands_activitiesDefault from "commands/activities" /* 15739 */;
import audioSessionDefault from "audioSession" /* 15740 */;
import authDefault from "auth" /* 15741 */;
import screenCaptureDefault from "screenCapture" /* 15743 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15744 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15745 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15746 */;
import voiceSettingsDefault from "voiceSettings" /* 15758 */;
import userPopoutDefault from "userPopout" /* 15759 */;
import unsupportedDefault from "unsupported" /* 15760 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15762 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15765 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4937 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 4970 */;

const merged = Object.assign(fn(15686).crossPlatformCommands);
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
const discordEnvironmentEvents = fn(15764);
const merged12 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged13 = Object.assign(fn(15766).screenCaptureEvents);
const merged14 = Object.assign(fn(15767).voiceSettingsEventHandlers);
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