// === Module 17606: GuildSettingsRolesManager ===

// Module 17606 (GuildSettingsRolesManager)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

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