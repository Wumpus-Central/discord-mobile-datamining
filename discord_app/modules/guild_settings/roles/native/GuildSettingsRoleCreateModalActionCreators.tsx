const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(16568, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};