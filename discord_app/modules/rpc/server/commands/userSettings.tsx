// discord_app/modules/rpc/server/commands/userSettings.tsx
import LocaleStore from "../../../user_settings/LocaleStore.tsx";

let obj = {};
obj = {
  scope: fn(8339).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  },
};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = obj;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
