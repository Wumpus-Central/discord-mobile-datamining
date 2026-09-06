// discord_app/modules/rpc/native/NativeRPCImplementation.tsx
import WebViewPostMessageTransportDefault from "server/transports/WebViewPostMessageTransport.tsx";
import commands_activitiesDefault from "server/commands/activities.tsx";
import authDefault from "server/commands/auth.tsx";
import voiceSettingsDefault from "server/commands/voiceSettings.tsx";
import unsupportedDefault from "server/commands/unsupported.tsx";
import crossPlatformRPCEventHandlersDefault from "../server/events/crossPlatformRPCEventHandlers.tsx";
import NativeRPCServerDefault from "NativeRPCServer.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";

let obj = {};
const merged = Object.assign(fn(14466).crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
obj = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const discordEnvironmentEvents = fn(14522);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(fn(14523).voiceSettingsEventHandlers);
obj = {
  server: NativeRPCServerDefault,
  commands: obj,
  events: obj,
  stores: null,
  transports: null,
  registerTransportsForEmbeddedPlatform: null,
};
const items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
obj.stores = items;
const items1 = [WebViewPostMessageTransportDefault];
obj.transports = items1;
obj.registerTransportsForEmbeddedPlatform = function registerTransportsForEmbeddedPlatform() {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj;
