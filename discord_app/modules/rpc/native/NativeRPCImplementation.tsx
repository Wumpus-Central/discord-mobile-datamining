// === Module 15562: NativeRPCImplementation ===

// Module 15562 (NativeRPCImplementation)
import NativeRPCServerDefault from "NativeRPCServer" /* 6785 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 10675 */;
import commands_activitiesDefault from "commands/activities" /* 15616 */;
import audioSessionDefault from "audioSession" /* 15617 */;
import authDefault from "auth" /* 15618 */;
import screenCaptureDefault from "screenCapture" /* 15620 */;
import setRunsInBackgroundDefault from "setRunsInBackground" /* 15621 */;
import frameRelaunchDeepLinkDefault from "frameRelaunchDeepLink" /* 15622 */;
import pictureInPictureInteractiveDefault from "pictureInPictureInteractive" /* 15623 */;
import voiceSettingsDefault from "voiceSettings" /* 15635 */;
import userPopoutDefault from "userPopout" /* 15636 */;
import unsupportedDefault from "unsupported" /* 15637 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 15639 */;
import getNativeDiscordCustomThemeDefault from "getNativeDiscordCustomTheme" /* 15642 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4818 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1237 */;
import ThemeStore from "ThemeStore" /* 1191 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1230 */;
import StreamerModeStore from "StreamerModeStore" /* 4851 */;

const merged = Object.assign(fn(15563).crossPlatformCommands);
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
const discordEnvironmentEvents = fn(15641);
const merged12 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true, getNativeDiscordCustomThemeDefault));
const merged13 = Object.assign(fn(15643).screenCaptureEvents);
const merged14 = Object.assign(fn(15644).voiceSettingsEventHandlers);
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