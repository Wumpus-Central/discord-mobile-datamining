// discord_app/modules/rpc/server/commands/userSettings.tsx
import LocaleStore from "../../../user_settings/LocaleStore.tsx";

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(7787).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
