// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4724 from "../../../../actions/ModalActionCreators.tsx";

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = set.fileFinishedImporting(
  "modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx",
);

export default {
  open() {
    _modDef4724.pushLazy(asyncRequireImpl(17448, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    _modDef4724.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
};
