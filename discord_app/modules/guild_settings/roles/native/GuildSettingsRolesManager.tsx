// discord_app/modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx
import set from "../../../../../_runtime/00002_set.js";
import keys from "../../../../../_runtime/00644_keys.js";
import { batchUpdates } from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

const obj = keys.create(() => ({ roleJustCreated: false }));
const result = set.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => closure_1_2.setState({ roleJustCreated: closure_0 }));
};
export const useGuildSettingsRolesManagerState = obj;