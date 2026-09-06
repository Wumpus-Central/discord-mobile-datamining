// === Module 17065: useSortedGuildIdsForSoundboard ===

// Module 17065 (useSortedGuildIdsForSoundboard)
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = function useSortedGuildIdsForSoundboard(guild_id, arg1) {
  _require = guild_id;
  closure_1 = arg1;
  let items = [UserStore];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => currentUser.getCurrentUser());
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  let tmpResult = tmp(tmp2[6]);
  const items1 = [stateFromStores2];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => stateFromStores2.getFlattenedGuildIds());
  tmpResult = tmp(tmp2[6]);
  const items2 = [stateFromStores1];
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => {
    let canResult = null == closure_0 || null == tmp.guild_id;
    if (!canResult) {
      canResult = PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
    }
    return canResult;
  });
  const items3 = [stateFromStores, arg1, guild_id, stateFromStores1, stateFromStores2];
  return guild_id.useMemo(() => {
    if (obj.canUseSoundboardEverywhere(stateFromStores)) {
      if (stateFromStores2) {
        if ("" !== guild_id) {
          let found = arr2.filter((item) => item !== guild_id);
        } else {
          found = arr2;
        }
        if ("" !== guild_id) {
          found.unshift(guild_id);
        }
        return found;
      }
    }
    const items = [guild_id];
    return items;
  }, items3);
};