// === Module 15606: userSettings ===

// Module 15606 (userSettings)
import LocaleStore from "LocaleStore" /* 2187 */;

const RPCCommands = fn(1071).RPCCommands;
const obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15557);
obj[RPCCommands.USER_SETTINGS_GET_LOCALE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.USER_SETTINGS_GET_LOCALE, {
  scope: fn(6794).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;