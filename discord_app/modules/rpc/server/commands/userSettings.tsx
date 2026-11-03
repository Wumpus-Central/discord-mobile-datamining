// === Module 16491: userSettings ===

// Module 16491 (userSettings)
import LocaleStore from "LocaleStore" /* 2191 */;

const RPCCommands = fn(1072).RPCCommands;
const obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(16444);
obj[RPCCommands.USER_SETTINGS_GET_LOCALE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.USER_SETTINGS_GET_LOCALE, {
  scope: fn(9034).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;