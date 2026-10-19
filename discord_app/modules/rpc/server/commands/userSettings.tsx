// discord_app/modules/rpc/server/commands/userSettings.tsx
import LocaleStore from "../../../user_settings/LocaleStore.tsx";

const RPCCommands = fn(1087).RPCCommands;
const obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15531);
obj[RPCCommands.USER_SETTINGS_GET_LOCALE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(
  RPCCommands.USER_SETTINGS_GET_LOCALE,
  {
    scope: fn(8747).OAuth2Scopes.IDENTIFY,
    handler() {
      return { locale: LocaleStore.locale };
    },
  },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
