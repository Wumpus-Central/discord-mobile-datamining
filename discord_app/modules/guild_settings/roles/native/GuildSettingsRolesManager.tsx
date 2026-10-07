// discord_app/modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx
import 00570__ from "../../../../../_runtime/metro/00570__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const useGuildSettingsRolesManagerState = module_570.create(() => ({ roleJustCreated: false }));
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(roleJustCreated) {
  _require = roleJustCreated;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { roleJustCreated };
    return obj.setState(obj);
  });
};
export { useGuildSettingsRolesManagerState };