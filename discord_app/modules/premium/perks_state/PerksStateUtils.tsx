// === Module 1377: PerksStateUtils ===

// Module 1377 (PerksStateUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import types from "types" /* 1378 */;
import user from "user" /* 1379 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function parseServerPerkConfigKind(kind) {
  if (null != kind.kind) {
    const type = kind.kind.type;
    if (types.PerkConfigType.INCREASED_FILE_UPLOAD_SIZE === type) {
      let obj = { type: types.PerkConfigType.INCREASED_FILE_UPLOAD_SIZE, maxSize: kind.kind.max_size };
      return obj;
    } else if (types.PerkConfigType.INCREASED_GUILD_LIMIT === type) {
      obj = { type: types.PerkConfigType.INCREASED_GUILD_LIMIT, maxGuilds: kind.kind.max_guilds };
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
          const deserializer = BigFlagUtilsAll;
          const obj = BigFlagUtilsAll;
          const deserializeResult = deserializer.deserialize(activePerksBitmask[rounded]);
          hasItem = obj.has(deserializeResult, BigFlagUtilsAll.getFlag(MONTHLY_ORBS % 64));
        }
        flag = hasItem;
      }
      if (flag) {
        const items = [user.PerkSource.SOURCE_NITRO];
        source = items;
      }
    }
    return source;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/perks_state/PerksStateUtils.tsx");

export const parseServerPerks = function parseServerPerks(perks) {
  if (null == perks) {
    return null;
  } else {
    let obj = {};
    const _Object = Object;
    const entries = Object.entries(perks.config_by_perk);
    const tmp11 = entries[Symbol.iterator]();
    while (tmp11 !== undefined) {
      let tmp5 = _slicedToArray(tmp2, 2);
      let tmp6 = tmp5[1];
      obj = { source: tmp6.source, kind: parseServerPerkConfigKind(tmp6) };
      obj[tmp5[0]] = obj;
      continue;
    }
    obj = { activePerksBitmask: perks.active_perks_bitmask, configByPerk: null, rulesVersion: null };
    obj.configByPerk = obj;
    obj.rulesVersion = perks.rules_version;
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
      const deserializer = BigFlagUtilsAll;
      const obj = BigFlagUtilsAll;
      const deserializeResult = deserializer.deserialize(activePerksBitmask[rounded]);
      hasItem = obj.has(deserializeResult, BigFlagUtilsAll.getFlag(MONTHLY_ORBS % 64));
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
      const obj = { source: getPerkSource(perks, MONTHLY_ORBS), kind: tmp3.kind };
      return obj;
    }
  }
};