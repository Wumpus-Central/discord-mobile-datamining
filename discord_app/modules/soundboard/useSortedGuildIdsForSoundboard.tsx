// === Module 15980: useSortedGuildIdsForSoundboard ===

// Module 15980 (useSortedGuildIdsForSoundboard)
import noop from "noop";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import mergeGuildAvatar from "mergeGuildAvatar";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import { Permissions } from "sum";

const require = arg1;
const result = require("insertUnsortedGuilds").fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = function useSortedGuildIdsForSoundboard(guild_id, arg1) {
  const _require = guild_id;
  let closure_1 = arg1;
  let items = [mergeGuildAvatar];
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
      canResult = stateFromStores1.can(outer1_8.USE_EXTERNAL_SOUNDS, tmp);
    }
    return canResult;
  });
  const items3 = [stateFromStores, arg1, guild_id, stateFromStores1, stateFromStores2];
  return guild_id.useMemo(() => {
    if (obj.canUseSoundboardEverywhere(stateFromStores)) {
      if (stateFromStores2) {
        if ("" !== guild_id) {
          let found = arr2.filter((arg0) => arg0 !== noop);
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