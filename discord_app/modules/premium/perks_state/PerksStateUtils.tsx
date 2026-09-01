// === Module 1928: parseServerPerkConfigKind ===

// Module 1928 (parseServerPerkConfigKind)
import fromStringAll from "fromString" /* 506 */;
import PerkConfigType from "PerkConfigType" /* 1929 */;
import create from "create" /* 1930 */;
import closure_3 from "_slicedToArray" /* 32 */;

require = arg1;
function parseServerPerkConfigKind(kind) {
  if (null != kind.kind) {
    const type = kind.kind.type;
    if (PerkConfigType.PerkConfigType.INCREASED_FILE_UPLOAD_SIZE === type) {
      let obj = { type: null, maxSize: null };
      obj[0] = tmp(1929).PerkConfigType.INCREASED_FILE_UPLOAD_SIZE;
      obj[1] = kind.kind.max_size;
      return obj;
    } else if (tmp(1929).PerkConfigType.INCREASED_GUILD_LIMIT === type) {
      obj = { type: null, maxGuilds: null };
      obj[0] = tmp(1929).PerkConfigType.INCREASED_GUILD_LIMIT;
      obj[1] = kind.kind.max_guilds;
      return obj;
    }
  }
}
function getPerkSource(perks, MONTHLY_ORBS) {
  if (null != perks) {
    const _String = String;
    const tmp3 = perks.configByPerk[String(undefined, MONTHLY_ORBS)];
    let source;
    if (tmp3 != null) {
      source = tmp3.source;
    }
    if (null != source) {
      source = tmp3.source;
    } else {
      let flag = false;
      if (null != perks) {
        const activePerksBitmask = perks.activePerksBitmask;
        const _Math = Math;
        const rounded = Math.floor(MONTHLY_ORBS / 64);
        let hasItem = rounded < activePerksBitmask.length;
        if (hasItem) {
          const obj = fromStringAll;
          const obj2 = fromStringAll;
          const deserializeResult = fromStringAll.deserialize(activePerksBitmask[rounded]);
          hasItem = obj.has(deserializeResult, fromStringAll.getFlag(MONTHLY_ORBS % 64));
          const obj3 = fromStringAll;
        }
        flag = hasItem;
      }
      if (flag) {
        const items = [create.PerkSource.SOURCE_NITRO];
        source = items;
      }
    }
    return source;
  }
}
const result = require("set").fileFinishedImporting("modules/premium/perks_state/PerksStateUtils.tsx");

export const parseServerPerks = function parseServerPerks(perks) {
  if (null == perks) {
    return null;
  } else {
    let obj = {};
    const _Object = Object;
    const entries = Object.entries(perks.config_by_perk);
    const tmp11 = entries[Symbol.iterator]();
    while (tmp11 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp2, 2);
      let tmp6 = tmp5[1];
      obj = { source: null, kind: null };
      obj[0] = tmp6.source;
      let tmp7 = parseServerPerkConfigKind;
      obj[1] = parseServerPerkConfigKind(tmp6);
      obj[tmp5[0]] = obj;
      continue;
    }
    obj = { activePerksBitmask: null, configByPerk: null, rulesVersion: null };
    obj[0] = perks.active_perks_bitmask;
    obj[1] = obj;
    obj[2] = perks.rules_version;
    return obj;
  }
};
export const hasPerk = function hasPerk(perks, MONTHLY_ORBS) {
  if (null == perks) {
    return false;
  } else {
    const activePerksBitmask = perks.activePerksBitmask;
    const _Math = Math;
    const rounded = Math.floor(MONTHLY_ORBS / 64);
    let hasItem = rounded < activePerksBitmask.length;
    if (hasItem) {
      const obj = fromStringAll;
      const obj2 = fromStringAll;
      const deserializeResult = fromStringAll.deserialize(activePerksBitmask[rounded]);
      hasItem = obj.has(deserializeResult, fromStringAll.getFlag(MONTHLY_ORBS % 64));
      const obj3 = fromStringAll;
    }
    return hasItem;
  }
};
export { getPerkSource };
export const getPerkConfig = function getPerkConfig(perks, MONTHLY_ORBS) {
  if (null != perks) {
    const _String = String;
    const tmp3 = perks.configByPerk[String(undefined, MONTHLY_ORBS)];
    if (null != tmp3) {
      const obj = { source: null, kind: null };
      obj[0] = getPerkSource(perks, MONTHLY_ORBS);
      obj[1] = tmp3.kind;
      return obj;
    }
  }
};