// === Module 14582: userSettings ===

// Module 14582 (userSettings)
import LocaleStore from "LocaleStore" /* 2025 */;

let obj = {};
obj = {
  scope: fn(8404).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;