// discord_app/modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY = "GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY";
const result = size.fileFinishedImporting(
  "modules/guild_settings/roles/native/GuildSettingsRoleCreateModalActionCreators.tsx",
);

export default {
  open() {
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(17608, dependencyMap.paths),
      undefined,
      GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY,
    );
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(GUILD_SETTINGS_ROLE_CREATE_MODAL_KEY);
  },
};
