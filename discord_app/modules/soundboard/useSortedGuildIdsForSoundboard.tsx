// === Module 17766: useSortedGuildIdsForSoundboard ===

// Module 17766 (useSortedGuildIdsForSoundboard)
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import SortedGuildStore from "SortedGuildStore" /* 5963 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const Permissions = fn(1096).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = ReactCompilerGating.isReactCompilerEnabled() ? (function useSortedGuildIdsForSoundboard(guild_id, arg1) {
  _require = guild_id;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  guild_id = undefined;
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp4, tmp5);
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SortedGuildStore];
    const fn2 = function v() {
      return flattenedGuildIds.getFlattenedGuildIds();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[4] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== guild_id) {
    const fn3 = function h() {
      let canResult = null == guild_id || null == guild_id.guild_id;
      if (!canResult) {
        canResult = PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, guild_id);
      }
      return canResult;
    };
    cResult[5] = guild_id;
    cResult[6] = fn3;
    let tmp14 = fn3;
  } else {
    tmp14 = cResult[6];
  }
  const tmpResult3 = require("useStateFromStores");
  const stateFromStores2 = require("useStateFromStores").useStateFromStores(tmp12, tmp14);
  const tmpResult4 = require("useStateFromStores");
  if (obj5.canUseSoundboardEverywhere(stateFromStores)) {
    if (stateFromStores2) {
      if (cResult[7] === "" !== guild_id) {
        if (cResult[8] === guild_id) {
          if (cResult[9] === stateFromStores1) {
            let arr6 = cResult[10];
          }
          let tmp17 = arr6;
          if (tmp18) {
            arr6.unshift(guild_id);
            tmp17 = arr6;
          }
        }
      }
      let found = stateFromStores1;
      if ("" !== guild_id) {
        found = stateFromStores1.filter((item) => item !== guild_id);
      }
      cResult[7] = "" !== guild_id;
      cResult[8] = guild_id;
      cResult[9] = stateFromStores1;
      cResult[10] = found;
      arr6 = found;
    }
    return tmp17;
  }
  if (cResult[11] !== guild_id) {
    const items3 = [guild_id];
    cResult[11] = guild_id;
    cResult[12] = items3;
    tmp17 = items3;
  } else {
    tmp17 = cResult[12];
  }
  obj5 = guild_id(4769);
}) : (function useSortedGuildIdsForSoundboard(guild_id, arg1) {
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
  const obj = require("useStateFromStores");
  const items1 = [stateFromStores2];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => stateFromStores2.getFlattenedGuildIds());
  const tmpResult = require("useStateFromStores");
  const items2 = [stateFromStores1];
  stateFromStores2 = require("useStateFromStores").useStateFromStores(items2, () => {
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
});