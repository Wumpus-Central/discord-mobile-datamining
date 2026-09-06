// discord_app/modules/guild_space/canUseGuildSpace.tsx
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export const isGuildSpaceAdmin = function isGuildSpaceAdmin(arg0) {
  let canResult = null != arg0;
  if (canResult) {
    canResult = PermissionStore.can(Permissions.MANAGE_GUILD, arg0);
  }
  return canResult;
};
export const useIsGuildSpaceAdmin = function useIsGuildSpaceAdmin(arg0) {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
      }
      return canResult;
    },
    items1,
  );
};
export function canUseGuildSpace(guild, getChannelIdForGuildTransition) {
  return false;
}
export const useCanUseGuildSpace = function useCanUseGuildSpace(id, useGuildActionRows) {
  _require = id;
  const guildSpaceExperimentEnabled = require("GuildSpaceExperiment").useGuildSpaceExperimentEnabled(
    id,
    useGuildActionRows,
  );
  let tmpResult = tmp(504);
  const items = [GuildStore];
  const items1 = [id];
  const stateFromStores = tmpResult.useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1);
  closure_129_0 = stateFromStores;
  tmpResult = tmp(504);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const stateFromStores1 = tmpResult.useStateFromStores(
    items2,
    () => {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
      }
      return canResult;
    },
    items3,
  );
  return false;
};
