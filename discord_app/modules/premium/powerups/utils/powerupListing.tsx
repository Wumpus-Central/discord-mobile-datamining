// discord_app/modules/premium/powerups/utils/powerupListing.tsx
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";
import GuildPowerupsConstants from "../constants/GuildPowerupsConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let items;
function orderPowerupListings(items) {
  const findIndexResult = items.findIndex((type) => {
    const tmp =
      "singlePerk" === type.type && type.powerup.skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID;
    return tmp;
  });
  let obj = items;
  if (findIndexResult > 0) {
    items = [];
    HermesBuiltin.arraySpread(items, items, 0);
    items.unshift(_slicedToArray(items.splice(findIndexResult, 1), 1)[0]);
    obj = items;
  }
  const findIndexResult1 = obj.findIndex((type) => {
    const tmp = "singlePerk" === type.type && type.powerup.skuId === require("Powerups").GUILD_POWERUP_TAG_SKU_ID;
    return tmp;
  });
  const findIndexResult2 = obj.findIndex((type) => {
    let tmp = "multiPerk" === type.type;
    if (tmp) {
      let flag = "guildTagsBadgePacks" === type.group;
      if (!flag) {
        const group = type.group;
        flag = false;
      }
      tmp = flag;
    }
    return tmp;
  });
  let tmp11 = obj;
  if (-1 !== findIndexResult1) {
    tmp11 = obj;
    if (-1 !== findIndexResult2) {
      tmp11 = obj;
      if (findIndexResult2 !== findIndexResult1 + 1) {
        items1 = [];
        HermesBuiltin.arraySpread(items1, tmp10, 0);
        items1.splice(
          items1.findIndex((type) => {
            const tmp =
              "singlePerk" === type.type && type.powerup.skuId === require("Powerups").GUILD_POWERUP_TAG_SKU_ID;
            return tmp;
          }) + 1,
          0,
          _slicedToArray(items1.splice(findIndexResult2, 1), 1)[0],
        );
        tmp11 = items1;
      }
    }
  }
  return tmp11;
}
function buildPowerupListings(type, arr, arg2) {
  const items = [];
  let closure_1 = arr.reduce((acc, type) => {
    if (type.type !== constants.PERK) {
      return acc;
    } else {
      if (null != closure_1_8[type.skuId]) {
        if (acc[closure_1_8[type.skuId]] == null) {
          acc[closure_1_8[type.skuId]] = [];
        }
        const arr = acc[closure_1_8[type.skuId]];
        arr.push(type);
      }
      return acc;
    }
  }, {});
  function _loop() {
    let obj;
    if (type.type === GuildPowerupType.LEVEL) {
      const obj3 = { type: "singleLevel", powerup: type };
      items.push(obj3);
      return 0;
    } else if (null != closure_8[type.skuId]) {
      if (undefined !== closure_1[closure_8[type.skuId]]) {
        let closure_0 = obj[tmp13];
        const sorted = obj2.sort((skuId, skuId2) => {
          const index = closure_0.indexOf(skuId.skuId);
          return index - closure_0.indexOf(skuId2.skuId);
        });
        const obj4 = { type: "multiPerk", group: closure_8[type.skuId], powerups: closure_1[closure_8[type.skuId]] };
        items.push(obj4);
        tmp5[closure_8[type.skuId]] = undefined;
      }
      return 0;
    } else {
      obj = { type: "singlePerk", powerup: type, badge: PERK_SKU_BADGES[type.skuId] };
      items.push(obj);
    }
  }
  const iter = arr[Symbol.iterator]();
  while (iter !== undefined) {
    type = iter.next();
    let _loopResult = _loop();
    continue;
  }
  let tmp2 = arg2;
  if (tmp2) {
    tmp2 = type === GuildPowerupType.PERK;
  }
  if (tmp2) {
    arr = items.push({ type: "gameServer" });
  }
  return orderPowerupListings(items);
}
const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
const PERK_SKU_BADGES = GuildPowerupsConstants.PERK_SKU_BADGES;
const POWERUP_GROUP_TO_SKU_IDS = { guildTagsBadgePacks: items };
items = [
  Powerups.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID,
  Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID,
  Powerups.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID,
  Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID,
];
const entries = Object.entries(POWERUP_GROUP_TO_SKU_IDS);
let closure_8 = entries.reduce((acc, item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  for (const item10016 of tmp2) {
    acc[item10016] = tmp;
    continue;
  }
  return acc;
}, {});
let items1 = [,];
({ LEVEL: arr3[0], PERK: arr3[1] } = GuildPowerupType);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBuildGuildPowerupsSections(arg0, arg1) {
      let closure_0;
      let closure_1;
      let first;
      let tmp6;
      _require = arg0;
      dependencyMap = arg1;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildPowerupsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return GuildPowerupsStore.getStateForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === arg1) {
        let tmp11;
        let powerupCatalog;
        const tmp8 = cResult[4];
        if (stateFromStores != null) {
          powerupCatalog = stateFromStores.powerupCatalog;
        }
        if (tmp8 === powerupCatalog) {
          tmp11 = cResult[5];
        }
        return tmp11;
      }
      const reduced = items1.reduce((arr, type) => {
        let tmp;
        if (stateFromStores != null) {
          tmp = stateFromStores.powerupCatalog[type];
        }
        if (null == tmp) {
          return arr;
        } else {
          const obj = { type, listings: buildPowerupListings(type, tmp, closure_1) };
          arr = arr.push(obj);
          return arr;
        }
      }, []);
      cResult[3] = arg1;
      let powerupCatalog1;
      if (stateFromStores != null) {
        powerupCatalog1 = stateFromStores.powerupCatalog;
      }
      cResult[4] = powerupCatalog1;
      cResult[5] = reduced;
      tmp11 = reduced;
    }
  : function useBuildGuildPowerupsSections(arg0, arg1) {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      let obj = require("get initialized");
      const items = [GuildPowerupsStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
      let powerupCatalog;
      const useMemo = react.useMemo;
      if (stateFromStores != null) {
        powerupCatalog = stateFromStores.powerupCatalog;
      }
      items1 = [powerupCatalog, arg1];
      return useMemo(() => {
        let powerupCatalog;
        return items1.reduce((arr, type) => {
          let tmp;
          if (powerupCatalog != null) {
            tmp = powerupCatalog.powerupCatalog[type];
          }
          if (null == tmp) {
            return arr;
          } else {
            const obj = { type, listings: buildPowerupListings(type, tmp, closure_1_1) };
            arr = arr.push(obj);
            return arr;
          }
        }, []);
      }, items1);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/utils/powerupListing.tsx");

export { POWERUP_GROUP_TO_SKU_IDS };
export { buildPowerupListings };
export const useBuildGuildPowerupsSections = tmp3;
