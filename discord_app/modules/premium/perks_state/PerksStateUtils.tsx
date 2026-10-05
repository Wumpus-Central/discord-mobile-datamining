// discord_app/modules/premium/perks_state/PerksStateUtils.tsx
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import types from "types.tsx";
import user from "../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

function parseServerPerkConfigKind(kind) {
  if (null != kind.kind) {
    const type = kind.kind.type;
    if (types.PerkConfigType.INCREASED_FILE_UPLOAD_SIZE === type) {
      const obj2 = { type: types.PerkConfigType.INCREASED_FILE_UPLOAD_SIZE, maxSize: kind.kind.max_size };
      return obj2;
    } else if (types.PerkConfigType.INCREASED_GUILD_LIMIT === type) {
      const obj = { type: types.PerkConfigType.INCREASED_GUILD_LIMIT, maxGuilds: kind.kind.max_guilds };
      return obj;
    }
  }
}
function getPerkSource(perks, MONTHLY_ORBS) {
  if (null != perks) {
    let source;
    const _String = String;
    const tmp3 = perks.configByPerk[String(undefined, MONTHLY_ORBS)];
    let source1;
    if (tmp3 != null) {
      source1 = tmp3.source;
    }
    if (null != source1) {
      source = tmp3.source;
    } else {
      let flag = false;
      if (null != perks) {
        const activePerksBitmask = perks.activePerksBitmask;
        const _Math = Math;
        const rounded = Math.floor(MONTHLY_ORBS / 64);
        let hasItem = rounded < activePerksBitmask.length;
        if (hasItem) {
          const has = BigFlagUtilsAll.has;
          BigFlagUtilsAll;
          const deserializer = BigFlagUtilsAll;
          const deserializeResult = deserializer.deserialize(activePerksBitmask[rounded]);
          const obj = BigFlagUtilsAll;
          hasItem = has(deserializeResult, obj.getFlag(MONTHLY_ORBS % 64));
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
const result = size.fileFinishedImporting("modules/premium/perks_state/PerksStateUtils.tsx");

export const parseServerPerks = function parseServerPerks(perks) {
  let first;
  let tmp7;
  if (null == perks) {
    return null;
  } else {
    const obj2 = {};
    const _Object = Object;
    const entries = Object.entries(perks.config_by_perk);
    const tmp12 = entries[Symbol.iterator]();
    while (tmp12 !== undefined) {
      [first, tmp7] = tmp2;
      let obj = { source: tmp7.source, kind: parseServerPerkConfigKind(tmp7) };
      obj2[first] = obj;
      continue;
    }
    return { activePerksBitmask: perks.active_perks_bitmask, configByPerk: obj2, rulesVersion: perks.rules_version };
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
      const has = BigFlagUtilsAll.has;
      BigFlagUtilsAll;
      const deserializer = BigFlagUtilsAll;
      const deserializeResult = deserializer.deserialize(activePerksBitmask[rounded]);
      const obj = BigFlagUtilsAll;
      hasItem = has(deserializeResult, obj.getFlag(MONTHLY_ORBS % 64));
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
