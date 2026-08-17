// discord_app/modules/premium/powerups/utils/powerupListing.tsx
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "calculateAppliedBoosts" /* 4261 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4262 */;
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
function orderPowerupListings(items) {
  const findIndexResult = items.findIndex((type) => {
    let tmp = "singlePerk" === type.type;
    if (tmp) {
      tmp = type.powerup.skuId === callback(4265).GUILD_POWERUP_GUILD_THEME_SKU_ID;
    }
    return tmp;
  });
  obj = items;
  if (findIndexResult > 0) {
    items = [];
    HermesBuiltin.arraySpread(items, 0);
    items.unshift(callback(items.splice(findIndexResult, 1), 1)[0]);
    obj = items;
  }
  const findIndexResult1 = obj.findIndex((type) => {
    let tmp = "singlePerk" === type.type;
    if (tmp) {
      tmp = type.powerup.skuId === callback(4265).GUILD_POWERUP_TAG_SKU_ID;
    }
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
  let tmp10 = obj;
  if (-1 !== findIndexResult1) {
    tmp10 = obj;
    if (-1 !== findIndexResult2) {
      tmp10 = obj;
      if (findIndexResult2 !== findIndexResult1 + 1) {
        items1 = [];
        HermesBuiltin.arraySpread(tmp9, 0);
        items1.splice(items1.findIndex((type) => {
          let tmp = "singlePerk" === type.type;
          if (tmp) {
            tmp = type.powerup.skuId === callback(4265).GUILD_POWERUP_TAG_SKU_ID;
          }
          return tmp;
        }) + 1, 0, callback(items1.splice(findIndexResult2, 1), 1)[0]);
        tmp10 = items1;
      }
    }
  }
  return tmp10;
}
function buildPowerupListings(arg0, arr) {
  let items = [];
  closure_1 = arr.reduce((arg0, type) => {
    if (type.type !== constants.PERK) {
      return arg0;
    } else {
      if (null != table2[type.skuId]) {
        if (arg0[tmp2] == null) {
          arg0[tmp2] = [];
        }
        let arr = arg0[tmp2];
        arr = arr.push(type);
      }
      return arg0;
    }
  }, {});
  function _loop() {
    if (type.type === closure_1_5.LEVEL) {
      obj = { type: "singleLevel", powerup: null };
      obj[1] = tmp;
      items.push(obj);
      return 0;
    } else if (null != closure_1_8[tmp.skuId]) {
      if (undefined !== table[tmp13]) {
        items = closure_1_7[tmp13];
        const sorted = obj2.sort((skuId, skuId2) => {
          const index = closure_0.indexOf(skuId.skuId);
          return index - closure_0.indexOf(skuId2.skuId);
        });
        obj = { type: "multiPerk", group: null, powerups: null };
        obj[1] = tmp13;
        obj[2] = obj2;
        items.push(obj);
        tmp5[tmp13] = undefined;
      }
      return 0;
    } else {
      obj = { type: "singlePerk", powerup: null, badge: null };
      obj[1] = tmp;
      obj[2] = closure_1_6[tmp.skuId];
      items.push(obj);
    }
  }
  const iter = arr[Symbol.iterator]();
  while (iter !== undefined) {
    closure_2 = iter.next();
    let _loopResult = _loop();
    continue;
  }
  let tmp2 = arg2;
  if (arg2) {
    tmp2 = arg0 === GuildPowerupType.PERK;
  }
  if (tmp2) {
    items.push({ type: "gameServer" });
  }
  return orderPowerupListings(items);
}
const GuildPowerupType = BoostedGuildTiers.GuildPowerupType;
const PERK_SKU_BADGES = BoostedGuildTiers.PERK_SKU_BADGES;
let obj = { guildTagsBadgePacks: null };
let items = [require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID, require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID, require("VANITY_URL_POWERUP_SKU_ID").GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID];
obj[0] = items;
const entries = Object.entries(obj);
let closure_8 = entries.reduce((arg0, arg1) => {
  [tmp, tmp2] = arg1;
  for (const item10016 of tmp2) {
    arg0[item10016] = tmp;
    continue;
  }
  return arg0;
}, {});
let items1 = [, ];
({ LEVEL: arr3[0], PERK: arr3[1] } = GuildPowerupType);
const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/powerupListing.tsx");

export const POWERUP_GROUP_TO_SKU_IDS = obj;
export { buildPowerupListings };
export const useBuildGuildPowerupsSections = function useBuildGuildPowerupsSections(guildId, gameServerEnabled) {
  const _require = guildId;
  dependencyMap = gameServerEnabled;
  const items = [closure_4];
  const stateFromStores = _initialize.useStateFromStores(items, () => closure_1_4.getStateForGuild(closure_0));
  let powerupCatalog;
  if (stateFromStores != null) {
    powerupCatalog = stateFromStores.powerupCatalog;
  }
  items1 = [powerupCatalog, gameServerEnabled];
  return React.useMemo(() => closure_1_11.reduce((arr) => {
    let tmp;
    if (powerupCatalog != null) {
      tmp = powerupCatalog.powerupCatalog[arg1];
    }
    if (null == tmp) {
      return arr;
    } else {
      obj = { type: null, listings: null };
      obj[0] = arg1;
      obj[1] = closure_1_10(arg1, tmp, closure_1);
      arr.push(obj);
      return arr;
    }
  }, []), items1);
};