// === Module 12011: useHasAllocateBoostPermission ===

// Module 12011 (useHasAllocateBoostPermission)
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import closure_3 from "getUncachedChannelPermissions" /* 4090 */;
import { Permissions } from "sum" /* 505 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx");

export default function useHasAllocateBoostPermission(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_2.getGuild(closure_0);
    let canResult = null;
    if (null != guild) {
      canResult = null;
      if (null != obj.getGuildPermissions(guild)) {
        canResult = obj.can(closure_1_4.ADMINISTRATOR, guild);
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