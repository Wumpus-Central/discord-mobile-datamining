// === Module 17606: setRoleJustCreated ===

// Module 17606 (setRoleJustCreated)
import set from "set" /* 2 */;
import keys from "keys" /* 560 */;

const obj = keys.create(() => ({ roleJustCreated: false }));
const result = set.fileFinishedImporting("modules/guild_settings/roles/native/GuildSettingsRolesManager.tsx");

export const setRoleJustCreated = function setRoleJustCreated(arg0) {
  const _require = arg0;
  _require(1249).batchUpdates(() => closure_1_2.setState({ roleJustCreated: closure_0 }));
};
export const useGuildSettingsRolesManagerState = obj;