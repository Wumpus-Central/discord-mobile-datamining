// discord_app/modules/rpc/native/NativeRPCImplementation.tsx
import WebViewPostMessageTransportDefault from "server/transports/WebViewPostMessageTransport.tsx";
import crossPlatformRPCCommands from "../server/commands/crossPlatformRPCCommands.tsx";
import commands_activitiesDefault from "server/commands/activities.tsx";
import authDefault from "server/commands/auth.tsx";
import voiceSettingsDefault from "server/commands/voiceSettings.tsx";
import unsupportedDefault from "server/commands/unsupported.tsx";
import crossPlatformRPCEventHandlersDefault from "../server/events/crossPlatformRPCEventHandlers.tsx";
import voiceSettingsEventHandlers from "events/voiceSettingsEventHandlers.tsx";
import NativeRPCServerDefault from "NativeRPCServer.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import discordEnvironmentEvents from "../server/events/discordEnvironmentEvents.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let items;
let items1;
const obj = {};
const merged = Object.assign(crossPlatformRPCCommands.crossPlatformCommands);
const activities = Object.assign(commands_activitiesDefault);
const auth = Object.assign(authDefault);
const voiceSettings = Object.assign(voiceSettingsDefault);
const unsupported = Object.assign(unsupportedDefault);
const obj2 = {};
Object.assign(crossPlatformRPCEventHandlersDefault);
const merged6 = Object.assign(discordEnvironmentEvents.createDiscordEnvironmentEvents(true));
const merged7 = Object.assign(voiceSettingsEventHandlers.voiceSettingsEventHandlers);
const obj3 = {
  server: NativeRPCServerDefault,
  commands: obj,
  events: obj2,
  stores: items,
  transports: items1,
  registerTransportsForEmbeddedPlatform() {},
};
items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
items1 = [WebViewPostMessageTransportDefault];
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj3;
