// discord_app/modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx
import 00560__ from "../../../../../_runtime/metro/00560__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const useGuildSettingsRolesManagerState = module_560.create(() => ({ roleJustCreated: false }));
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(roleJustCreated) {
  _require = roleJustCreated;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { roleJustCreated };
    return obj.setState(obj);
  });
};
export { useGuildSettingsRolesManagerState };