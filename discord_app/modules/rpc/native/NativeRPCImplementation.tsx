// discord_app/modules/rpc/native/NativeRPCImplementation.tsx
import NativeRPCServerDefault from "NativeRPCServer.tsx";
import WebViewPostMessageTransportDefault from "server/transports/WebViewPostMessageTransport.tsx";
import commands_activitiesDefault from "server/commands/activities.tsx";
import audioSessionDefault from "server/commands/audioSession.tsx";
import authDefault from "server/commands/auth.tsx";
import voiceSettingsDefault from "server/commands/voiceSettings.tsx";
import unsupportedDefault from "server/commands/unsupported.tsx";
import crossPlatformRPCEventHandlersDefault from "../server/events/crossPlatformRPCEventHandlers.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";

const merged = Object.assign(fn(15523).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const audioSession = Object.assign(audioSessionDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(15585);
const merged7 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged8 = Object.assign(fn(15586).voiceSettingsEventHandlers);
const obj4 = {
  server: NativeRPCServerDefault,
  commands: {},
  events: {},
  stores: null,
  transports: null,
  registerTransportsForEmbeddedPlatform: null,
};
const items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
obj4.stores = items;
const items1 = [WebViewPostMessageTransportDefault];
obj4.transports = items1;
obj4.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj4;
