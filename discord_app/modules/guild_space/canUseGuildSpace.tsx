// === Module 5726: isGuildSpaceAdmin ===

// Module 5726 (isGuildSpaceAdmin)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export const isGuildSpaceAdmin = function isGuildSpaceAdmin(arg0) {
  let canResult = null != arg0;
  if (canResult) {
    canResult = getUncachedChannelPermissions.can(Permissions.MANAGE_GUILD, arg0);
  }
  return canResult;
};
export const useIsGuildSpaceAdmin = function useIsGuildSpaceAdmin(arg0) {
  const _require = arg0;
  const items = [getUncachedChannelPermissions];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_2.can(outer1_3.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
};
export function canUseGuildSpace(getUncachedChannelPermissions, getChannelIdForGuildTransition) {
  return false;
}
export const useCanUseGuildSpace = function useCanUseGuildSpace(id, useGuildActionRows) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildSpaceExperimentEnabled = _require(5727).useGuildSpaceExperimentEnabled(id, useGuildActionRows);
  _require = id;
  const obj = _require(5727);
  const tmp = _require;
  const items = [getUncachedChannelPermissions];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_2.can(outer1_3.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
  return false;
};