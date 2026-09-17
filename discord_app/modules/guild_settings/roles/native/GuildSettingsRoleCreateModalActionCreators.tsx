// === Module 17857: GuildSettingsRoleCreateModalActionCreators ===

// Module 17857 (GuildSettingsRoleCreateModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import size from "module_2" /* 2 */;

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17858, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};