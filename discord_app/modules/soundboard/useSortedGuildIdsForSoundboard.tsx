// === Module 16558: useSortedGuildIdsForSoundboard ===

// Module 16558 (useSortedGuildIdsForSoundboard)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getUncachedChannelPermissions" /* 4089 */;
import closure_5 from "insertUnsortedGuilds" /* 5333 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME" /* 676 */;
import { Permissions } from "sum" /* 505 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = function useSortedGuildIdsForSoundboard(guild_id, arg1) {
  const _require = guild_id;
  closure_1 = arg1;
  let items = [closure_6];
  stateFromStores = _require(stateFromStores[6]).useStateFromStores(items, () => currentUser.getCurrentUser());
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
      canResult = stateFromStores1.can(closure_1_8.USE_EXTERNAL_SOUNDS, tmp);
    }
    return canResult;
  });
  const items3 = [stateFromStores, arg1, guild_id, stateFromStores1, stateFromStores2];
  return guild_id.useMemo(() => {
    if (obj.canUseSoundboardEverywhere(stateFromStores)) {
      if (stateFromStores2) {
        if ("" !== guild_id) {
          let found = arr2.filter((arg0) => arg0 !== closure_3);
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