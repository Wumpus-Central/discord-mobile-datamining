// === Module 17261: useSortedGuildIdsForSoundboard ===

// Module 17261 (useSortedGuildIdsForSoundboard)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import SortedGuildStore from "SortedGuildStore" /* 5623 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guild_id;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const Permissions = Constants2.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id, arg1) => {
  let currentUser;
  let flattenedGuildIds;
  let tmp10;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp9;
  _require = guild_id;
  const obj = require("react");
  const cResult = obj.c(13);
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
  guild_id = undefined;
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SortedGuildStore];
    class F {
      constructor() {
        return flattenedGuildIds.getFlattenedGuildIds();
      }
    }
    cResult[2] = items1;
    cResult[3] = F;
    tmp10 = F;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = require("useStateFromStores");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    class F {
      constructor() {
        return flattenedGuildIds.getFlattenedGuildIds();
      }
    }
    cResult[4] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== guild_id) {
    class U {
      constructor() {
        const canResult = null == guild_id || null == guild_id.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, guild_id);
        return canResult;
      }
    }
    cResult[5] = guild_id;
    class F {
      constructor() {
        return flattenedGuildIds.getFlattenedGuildIds();
      }
    }
    cResult[6] = U;
  } else {
    class U {
      constructor() {
        const canResult = null == guild_id || null == guild_id.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, guild_id);
        return canResult;
      }
    }
  }
  const tmpResult4 = require("useStateFromStores");
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, U);
  const obj5 = guild_id(4534);
  if (obj5.canUseSoundboardEverywhere(stateFromStores)) {
    class U {
      constructor() {
        const canResult = null == guild_id || null == guild_id.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, guild_id);
        return canResult;
      }
    }
    return tmp19;
  } else {
    class U {
      constructor() {
        const canResult = null == guild_id || null == guild_id.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, guild_id);
        return canResult;
      }
    }
  }
  if (cResult[11] !== guild_id) {
    class U {
      constructor() {
        const canResult = null == guild_id || null == guild_id.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, guild_id);
        return canResult;
      }
    }
    tmp19[0] = guild_id;
    class F {
      constructor() {
        return flattenedGuildIds.getFlattenedGuildIds();
      }
    }
    cResult[12] = tmp19;
  } else {
    class U {
      constructor() {
        const canResult = null == guild_id || null == guild_id.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, guild_id);
        return canResult;
      }
    }
  }
}) : ((guild_id, arg1) => {
  let currentUser;
  let stateFromStores;
  let stateFromStores2;
  _require = guild_id;
  let closure_1 = arg1;
  let obj = require("useStateFromStores");
  let items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (guild_id == null) {
    guild_id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const items1 = [stateFromStores2];
  const tmpResult = require("useStateFromStores");
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => stateFromStores2.getFlattenedGuildIds());
  const items2 = [stateFromStores1];
  const tmpResult2 = require("useStateFromStores");
  stateFromStores2 = tmpResult2.useStateFromStores(items2, () => {
    const canResult = null == guild_id || null == guild_id.guild_id || PermissionStore.can(Permissions.USE_EXTERNAL_SOUNDS, guild_id);
    return canResult;
  });
  const items3 = [stateFromStores, arg1, guild_id, stateFromStores1, stateFromStores2];
  return guild_id.useMemo(() => {
    const obj = PremiumUtilsDefault;
    if (obj.canUseSoundboardEverywhere(stateFromStores)) {
      if (stateFromStores2) {
        let found;
        if ("" !== guild_id) {
          found = stateFromStores1.filter((item) => item !== guild_id);
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
const result = size.fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = tmp2;