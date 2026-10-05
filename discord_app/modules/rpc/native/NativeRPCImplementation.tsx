// === Module 14305: NativeRPCImplementation ===

// Module 14305 (NativeRPCImplementation)
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9022 */;
import crossPlatformRPCCommands from "crossPlatformRPCCommands" /* 14306 */;
import commands_activitiesDefault from "commands/activities" /* 14356 */;
import authDefault from "auth" /* 14357 */;
import voiceSettingsDefault from "voiceSettings" /* 14359 */;
import unsupportedDefault from "unsupported" /* 14360 */;
import crossPlatformRPCEventHandlersDefault from "crossPlatformRPCEventHandlers" /* 14362 */;
import voiceSettingsEventHandlers from "voiceSettingsEventHandlers" /* 14366 */;
import NativeRPCServerDefault from "NativeRPCServer" /* 14368 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import discordEnvironmentEvents from "discordEnvironmentEvents" /* 14365 */;
import size from "module_2" /* 2 */;

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
  registerTransportsForEmbeddedPlatform() {

  }
};
items = [ThemeStore, AccessibilityStore, UserSettingsProtoStore];
items1 = [WebViewPostMessageTransportDefault];
const result = size.fileFinishedImporting("modules/rpc/native/NativeRPCImplementation.tsx");

export default obj3;