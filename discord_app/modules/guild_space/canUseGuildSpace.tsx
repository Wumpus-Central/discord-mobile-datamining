// === Module 7224: isGuildSpaceAdmin ===

// Module 7224 (isGuildSpaceAdmin)
import closure_2 from "createGuildRecordFromRust" /* 1979 */;
import closure_3 from "getUncachedChannelPermissions" /* 4199 */;
import { Permissions } from "ME" /* 1074 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export const isGuildSpaceAdmin = function isGuildSpaceAdmin(arg0) {
  let canResult = null != arg0;
  if (canResult) {
    canResult = closure_3.can(Permissions.MANAGE_GUILD, arg0);
  }
  return canResult;
};
export const useIsGuildSpaceAdmin = function useIsGuildSpaceAdmin(arg0) {
  const _require = arg0;
  const items = [closure_3];
  const items1 = [arg0];
  return _require(504).useStateFromStores(items, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
};
export function canUseGuildSpace(closure_2, getChannelIdForGuildTransition) {
  return false;
}
export const useCanUseGuildSpace = function useCanUseGuildSpace(id, useGuildActionRows) {
  let stateFromStores = id;
  const guildSpaceExperimentEnabled = stateFromStores(7225).useGuildSpaceExperimentEnabled(id, useGuildActionRows);
  let tmpResult = tmp(504);
  const items = [closure_2];
  const items1 = [id];
  stateFromStores = tmpResult.useStateFromStores(items, () => closure_1_2.getGuild(stateFromStores), items1);
  tmpResult = tmp(504);
  const items2 = [closure_3];
  const items3 = [stateFromStores];
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = closure_1_3.can(closure_1_4.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items3);
  return false;
};