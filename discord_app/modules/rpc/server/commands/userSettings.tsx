// === Module 15756: userSettings ===

// Module 15756 (userSettings)
import LocaleStore from "LocaleStore" /* 2068 */;

const RPCCommands = fn(1087).RPCCommands;
const obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15720);
obj[RPCCommands.USER_SETTINGS_GET_LOCALE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.USER_SETTINGS_GET_LOCALE, {
  scope: fn(8827).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;