import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "sum";

const require = arg1;
const result = require("sum").fileFinishedImporting("modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx");

export default function useHasAllocateBoostPermission(arg0) {
  const _require = arg0;
  const items = [getUncachedChannelPermissions, createGuildRecordFromRust];
  return _initialize.useStateFromStores(items, () => {
    const guild = outer1_2.getGuild(closure_0);
    let canResult = null;
    if (null != guild) {
      canResult = null;
      if (null != obj.getGuildPermissions(guild)) {
        canResult = obj.can(outer1_4.ADMINISTRATOR, guild);
      }
    }
    return canResult;
  });
};
export const getHasAllocateBoostPermission = function getHasAllocateBoostPermission(closure_4, guild) {
  let canResult = null;
  if (null != guild) {
    canResult = null;
    if (null != closure_4.getGuildPermissions(guild)) {
      canResult = closure_4.can(Permissions.ADMINISTRATOR, guild);
    }
  }
  return canResult;
};