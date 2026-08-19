// === Module 13873: ? ===

// Module 13873
import _getSystemLocale from "_getSystemLocale" /* 1994 */;

const obj = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: locale.locale };
  }
};
obj[require("ME").RPCCommands.USER_SETTINGS_GET_LOCALE] = obj;
const result = require("obj132").fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;