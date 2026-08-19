// discord_app/modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../../stores/PermissionStore.tsx";
import { Permissions } from "../../../../../discord_common/js/shared/Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx");

export default function useHasAllocateBoostPermission(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const guild = closure_1_2.getGuild(closure_0);
    let canResult = null;
    if (null != guild) {
      canResult = null;
      if (null != closure_1_3.getGuildPermissions(guild)) {
        canResult = closure_1_3.can(Permissions.ADMINISTRATOR, guild);
      }
    }
    return canResult;
  });
};
export const getHasAllocateBoostPermission = function getHasAllocateBoostPermission(closure_4, guild) {
  let canResult = null;
  if (null != guild) {
    canResult = null;
    if (null != Permissions.getGuildPermissions(guild)) {
      canResult = Permissions.can(Permissions.ADMINISTRATOR, guild);
    }
  }
  return canResult;
};