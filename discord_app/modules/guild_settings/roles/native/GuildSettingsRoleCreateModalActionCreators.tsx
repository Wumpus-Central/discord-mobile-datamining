// === Module 16469: ? ===

// Module 16469
const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    importDefault(4399).pushLazy(require(1959) /* asyncRequireImpl */(16470, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    importDefault(4399).popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};