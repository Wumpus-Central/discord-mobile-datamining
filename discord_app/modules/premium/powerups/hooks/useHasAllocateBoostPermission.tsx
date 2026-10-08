// === Module 12264: useHasAllocateBoostPermission ===

// Module 12264 (useHasAllocateBoostPermission)
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1096).Permissions;
const ReactCompilerGating = fn(558);
function getHasAllocateBoostPermission(PermissionStore, guild) {
  let canResult = null;
  if (null != guild) {
    canResult = null;
    if (null != PermissionStore.getGuildPermissions(guild)) {
      canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
    }
  }
  return canResult;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useHasAllocateBoostPermission.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useHasAllocateBoostPermission(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      guild = GuildStore.getGuild(closure_0);
      let canResult = null;
      if (null != guild) {
        canResult = null;
        if (null != PermissionStore.getGuildPermissions(guild)) {
          canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
        }
      }
      return canResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : (function useHasAllocateBoostPermission(arg0) {
  _require = arg0;
  const items = [PermissionStore, GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let canResult = null;
    if (null != guild) {
      canResult = null;
      if (null != PermissionStore.getGuildPermissions(guild)) {
        canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
      }
    }
    return canResult;
  });
});
export { getHasAllocateBoostPermission };