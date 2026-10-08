// === Module 14591: userSettings ===

// Module 14591 (userSettings)
import LocaleStore from "LocaleStore" /* 2128 */;

const obj = {};
obj[fn(1085).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(8433).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;