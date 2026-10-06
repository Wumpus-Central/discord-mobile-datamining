// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
let obj = {
  open() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(17825, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
};
const result = size.fileFinishedImporting(
  "modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx",
);

export default obj;
