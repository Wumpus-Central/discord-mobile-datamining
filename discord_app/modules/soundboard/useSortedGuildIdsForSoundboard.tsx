// discord_app/modules/soundboard/useSortedGuildIdsForSoundboard.tsx
import noop from "../../../_runtime/metro/00019__.js";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

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
    let canResult = null == guild_id || null == guild_id.guild_id;
    if (!canResult) {
      canResult = PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, guild_id);
    }
    return canResult;
  });
  const items3 = [stateFromStores, arg1, guild_id, stateFromStores1, stateFromStores2];
  return guild_id.useMemo(() => {
    if (obj.canUseSoundboardEverywhere(stateFromStores)) {
      if (stateFromStores2) {
        if ("" !== guild_id) {
          let found = stateFromStores1.filter((item) => item !== guild_id);
        } else {
          found = stateFromStores1;
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
