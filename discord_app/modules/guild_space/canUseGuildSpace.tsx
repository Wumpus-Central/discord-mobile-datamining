// === Module 7198: isGuildSpaceAdmin ===

// Module 7198 (isGuildSpaceAdmin)
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export const isGuildSpaceAdmin = function isGuildSpaceAdmin(arg0) {
  let canResult = null != arg0;
  if (canResult) {
    canResult = closure_2.can(Permissions.MANAGE_GUILD, arg0);
  }
  return canResult;
};
export const useIsGuildSpaceAdmin = function useIsGuildSpaceAdmin(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_2.can(Permissions.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
};
export function canUseGuildSpace(closure_2, getChannelIdForGuildTransition) {
  return false;
}
export const useCanUseGuildSpace = function useCanUseGuildSpace(id, useGuildActionRows) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildSpaceExperimentEnabled = _require(7199).useGuildSpaceExperimentEnabled(id, useGuildActionRows);
  _require = id;
  const obj = _require(7199);
  const items = [closure_2];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_2.can(Permissions.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
  return false;
};