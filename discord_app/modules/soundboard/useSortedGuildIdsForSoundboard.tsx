// discord_app/modules/soundboard/useSortedGuildIdsForSoundboard.tsx
import noop from "../../../_runtime/metro/00019__.js";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SortedGuildStore from "../../stores/SortedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const Permissions = fn(1096).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/useSortedGuildIdsForSoundboard.tsx");

export const useSortedGuildIdsForSoundboard = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild_id, arg1) => {
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
        class F {
          constructor() {
            return closure_1_5.getFlattenedGuildIds();
          }
        }
        cResult[2] = items1;
        cResult[3] = F;
        let tmp10 = F;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [PermissionStore];
        class F {
          constructor() {
            return closure_1_5.getFlattenedGuildIds();
          }
        }
        cResult[4] = items2;
        let tmp13 = items2;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== guild_id) {
        class U {
          constructor() {
            tmp = closure_0;
            canResult = null == closure_0 || null == tmp.guild_id;
            if (!canResult) {
              tmp3 = closure_4;
              tmp4 = Permissions;
              canResult = closure_4.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
            }
            return canResult;
          }
        }
        cResult[5] = guild_id;
        class F {
          constructor() {
            return closure_1_5.getFlattenedGuildIds();
          }
        }
        cResult[6] = U;
      } else {
        class U {
          constructor() {
            tmp = closure_0;
            canResult = null == closure_0 || null == tmp.guild_id;
            if (!canResult) {
              tmp3 = closure_4;
              tmp4 = Permissions;
              canResult = closure_4.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
            }
            return canResult;
          }
        }
      }
      const tmpResult3 = require("useStateFromStores");
      const stateFromStores2 = require("useStateFromStores").useStateFromStores(tmp13, U);
      const tmpResult4 = require("useStateFromStores");
      if (obj5.canUseSoundboardEverywhere(stateFromStores)) {
        class U {
          constructor() {
            tmp = closure_0;
            canResult = null == closure_0 || null == tmp.guild_id;
            if (!canResult) {
              tmp3 = closure_4;
              tmp4 = Permissions;
              canResult = closure_4.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
            }
            return canResult;
          }
        }
        return tmp18;
      } else {
        class U {
          constructor() {
            tmp = closure_0;
            canResult = null == closure_0 || null == tmp.guild_id;
            if (!canResult) {
              tmp3 = closure_4;
              tmp4 = Permissions;
              canResult = closure_4.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
            }
            return canResult;
          }
        }
      }
      if (cResult[11] !== guild_id) {
        class U {
          constructor() {
            tmp = closure_0;
            canResult = null == closure_0 || null == tmp.guild_id;
            if (!canResult) {
              tmp3 = closure_4;
              tmp4 = Permissions;
              canResult = closure_4.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
            }
            return canResult;
          }
        }
        tmp18[0] = guild_id;
        class F {
          constructor() {
            return closure_1_5.getFlattenedGuildIds();
          }
        }
        cResult[12] = tmp18;
      } else {
        class U {
          constructor() {
            tmp = closure_0;
            canResult = null == closure_0 || null == tmp.guild_id;
            if (!canResult) {
              tmp3 = closure_4;
              tmp4 = Permissions;
              canResult = closure_4.can(Permissions.USE_EXTERNAL_SOUNDS, tmp);
            }
            return canResult;
          }
        }
      }
      obj5 = guild_id(4534);
    }
  : (guild_id, arg1) => {
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
      const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () =>
        stateFromStores2.getFlattenedGuildIds(),
      );
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
    };
