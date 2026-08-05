// discord_app/modules/guild_space/canUseGuildSpace.tsx
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { experiment } from "GuildSpaceExperiment.tsx";

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
  return _initialize.useStateFromStores(items, () => {
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
  const guildSpaceExperimentEnabled = _experiment.useGuildSpaceExperimentEnabled(id, useGuildActionRows);
  _require = id;
  const obj = _experiment;
  const tmp = _require;
  const items = [getUncachedChannelPermissions];
  const items1 = [id];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_2.can(outer1_3.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
  return false;
};