// === Module 12516: powerupListing ===

// Module 12516 (powerupListing)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

const require = fn;
function orderPowerupListings(items) {
  const findIndexResult = items.findIndex((type) => {
    let tmp = "singlePerk" === type.type;
    if (tmp) {
      tmp = type.powerup.skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID;
    }
    return tmp;
  });
  let obj = items;
  if (findIndexResult > 0) {
    items = [];
    HermesBuiltin.arraySpread(items, 0);
    items.unshift(_slicedToArray(items.splice(findIndexResult, 1), 1)[0]);
    obj = items;
  }
  const findIndexResult1 = obj.findIndex((type) => {
    let tmp = "singlePerk" === type.type;
    if (tmp) {
      tmp = type.powerup.skuId === require("Powerups").GUILD_POWERUP_TAG_SKU_ID;
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
            tmp = type.powerup.skuId === require("Powerups").GUILD_POWERUP_TAG_SKU_ID;
          }
          return tmp;
        }) + 1, 0, _slicedToArray(items1.splice(findIndexResult2, 1), 1)[0]);
        tmp10 = items1;
      }
    }
  }
  return tmp10;
}
function buildPowerupListings(type, arr, gameServerEnabled) {
  const items = [];
  closure_1 = arr.reduce((acc, type) => {
    if (type.type !== constants.PERK) {
      return acc;
    } else {
      if (null != dependencyMap[type.skuId]) {
        if (acc[tmp2] == null) {
          acc[tmp2] = [];
        }
        let arr = acc[tmp2];
        arr = arr.push(type);
      }
      return acc;
    }
  }, {});
  function _loop() {
    if (type.type === GuildPowerupType.LEVEL) {
      let obj = { type: "singleLevel", powerup: type };
      items.push(obj);
      return 0;
    } else if (null != dependencyMap[type.skuId]) {
      if (undefined !== closure_1[tmp13]) {
        closure_0 = obj[tmp13];
        const sorted = obj2.sort((skuId, skuId2) => {
          const index = closure_0.indexOf(skuId.skuId);
          return index - closure_0.indexOf(skuId2.skuId);
        });
        obj = { type: "multiPerk", group: tmp13, powerups: obj2 };
        items.push(obj);
        tmp5[tmp13] = undefined;
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
  let tmp2 = gameServerEnabled;
  if (gameServerEnabled) {
    tmp2 = type === GuildPowerupType.PERK;
  }
  if (tmp2) {
    arr = items.push({ type: "gameServer" });
  }
  return orderPowerupListings(items);
}
const GuildPowerupsConstants = fn(4450);
const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
const PERK_SKU_BADGES = GuildPowerupsConstants.PERK_SKU_BADGES;
const POWERUP_GROUP_TO_SKU_IDS = { guildTagsBadgePacks: null };
let items = [fn(4453).GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID, fn(4453).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID, fn(4453).GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID, fn(4453).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID];
POWERUP_GROUP_TO_SKU_IDS.guildTagsBadgePacks = items;
const entries = Object.entries(POWERUP_GROUP_TO_SKU_IDS);
let closure_8 = entries.reduce((acc, item) => {
  [tmp, tmp2] = item;
  for (const item10016 of tmp2) {
    arg0[item10016] = tmp;
    continue;
  }
  return acc;
}, {});
let items1 = [, ];
({ LEVEL: arr3[0], PERK: arr3[1] } = GuildPowerupType);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/powerupListing.tsx");

export { POWERUP_GROUP_TO_SKU_IDS };
export { buildPowerupListings };
export const useBuildGuildPowerupsSections = function useBuildGuildPowerupsSections(guildId, gameServerEnabled) {
  _require = guildId;
  dependencyMap = gameServerEnabled;
  const items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let powerupCatalog;
  if (stateFromStores != null) {
    powerupCatalog = stateFromStores.powerupCatalog;
  }
  items1 = [powerupCatalog, gameServerEnabled];
  return noop.useMemo(() => items1.reduce((arr, type) => {
    let tmp;
    if (powerupCatalog != null) {
      tmp = powerupCatalog.powerupCatalog[type];
    }
    if (null == tmp) {
      return arr;
    } else {
      const obj = { type, listings: buildPowerupListings(type, tmp, gameServerEnabled) };
      arr = arr.push(obj);
      return arr;
    }
  }, []), items1);
};