// === Module 19028: GuildSettingsRoleCreateModalActionCreators ===

// Module 19028 (GuildSettingsRoleCreateModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx");

export default {
  open() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(19029, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  }
};