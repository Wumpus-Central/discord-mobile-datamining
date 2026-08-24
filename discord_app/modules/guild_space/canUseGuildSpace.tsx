// discord_app/modules/guild_space/canUseGuildSpace.tsx
import closure_2 from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../Constants.tsx";
import { experiment } from "GuildSpaceExperiment.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

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
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_2.can(closure_1_3.MANAGE_GUILD, tmp);
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
  const guildSpaceExperimentEnabled = require("GuildSpaceExperiment.tsx").useGuildSpaceExperimentEnabled(id, useGuildActionRows);
  _require = id;
  const obj = experiment;
  const tmp = _require;
  const items = [closure_2];
  const items1 = [id];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = closure_1_2.can(closure_1_3.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
  return false;
};