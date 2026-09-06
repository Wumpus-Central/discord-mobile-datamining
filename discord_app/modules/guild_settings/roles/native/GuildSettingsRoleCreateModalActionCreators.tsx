// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4763 from "../../../../actions/ModalActionCreators.tsx";

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = set.fileFinishedImporting(
  "modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx",
);

export default {
  open() {
    _modDef4763.pushLazy(asyncRequireImpl(17608, dependencyMap.paths), undefined, GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
  close() {
    _modDef4763.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
};
