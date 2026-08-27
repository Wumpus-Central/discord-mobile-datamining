// === Module 17104: ? ===

// Module 17104
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = set.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    _modDef4676.pushLazy(asyncRequireImpl(17105, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    _modDef4676.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};