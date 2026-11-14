// === Module 1394: PerksStateUtils ===

// Module 1394 (PerksStateUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import types from "types" /* 1395 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1396 */;
import user from "user" /* 1401 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function parseServerPerkConfigKind(kind) {
  if (null != kind.kind) {
    const type = kind.kind.type;
    if (types.PerkConfigType.INCREASED_FILE_UPLOAD_SIZE === type) {
      const obj2 = { type: types.PerkConfigType.INCREASED_FILE_UPLOAD_SIZE, maxSize: kind.kind.max_size };
      return obj2;
    } else if (types.PerkConfigType.INCREASED_GUILD_LIMIT === type) {
      const obj3 = { type: types.PerkConfigType.INCREASED_GUILD_LIMIT, maxGuilds: kind.kind.max_guilds };
      return obj3;
    } else if (types.PerkConfigType.DISPLAY_NAME_STYLES === type) {
      const obj4 = { type: types.PerkConfigType.DISPLAY_NAME_STYLES, isRestrictedToAllowedOptions: kind.kind.is_restricted_to_allowed_options, allowedStyles: null };
      const allowed_styles = kind.kind.allowed_styles;
      obj4.allowedStyles = allowed_styles.flatMap((item) => {
        let result = DisplayNameStylesUtils.parseServerDisplayNameStyles(item);
        if (result == null) {
          result = [];
        }
        return result;
      });
      return obj4;
    } else if (types.PerkConfigType.CLIENT_THEMES === type) {
      const obj5 = { type: types.PerkConfigType.CLIENT_THEMES, isRestrictedToAllowedOptions: kind.kind.is_restricted_to_allowed_options, allowedPresetIds: kind.kind.allowed_preset_ids };
      return obj5;
    } else if (types.PerkConfigType.APP_ICONS === type) {
      const obj = { type: types.PerkConfigType.APP_ICONS, isRestrictedToAllowedOptions: kind.kind.is_restricted_to_allowed_options, allowedIconIds: kind.kind.allowed_icon_ids };
      return obj;
    }
  }
}
function getPerkSource(perks, MONTHLY_ORBS) {
  if (null != perks) {
    const _String = String;
    const tmp3 = perks.configByPerk[String(undefined, MONTHLY_ORBS)];
    let source1;
    if (tmp3 != null) {
      source1 = tmp3.source;
    }
    if (null != source1) {
      let source = tmp3.source;
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
        items = [user.PerkSource.SOURCE_NITRO];
        source = items;
      }
    }
    return source;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/perks_state/PerksStateUtils.tsx");

export function parseServerPerks(perks) {
  if (null == perks) {
    return null;
  } else {
    const obj2 = {};
    const _Object = Object;
    const entries = Object.entries(perks.config_by_perk);
    const tmp11 = entries[Symbol.iterator]();
    while (tmp11 !== undefined) {
      let tmp5 = _slicedToArray(tmp2, 2);
      let tmp6 = tmp5[1];
      let obj = { source: tmp6.source, kind: parseServerPerkConfigKind(tmp6) };
      obj2[tmp5[0]] = obj;
      continue;
    }
    const obj3 = { activePerksBitmask: perks.active_perks_bitmask, configByPerk: obj2, rulesVersion: perks.rules_version };
    return obj3;
  }
}
export function hasPerk(perks, MONTHLY_ORBS) {
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
}
export function hasUnrestrictedPerk(perks, PREMIUM_COLLECTIBLES) {
  if (null != perks) {
    let flag = false;
    if (null != perks) {
      const activePerksBitmask = perks.activePerksBitmask;
      const _Math = Math;
      const rounded = Math.floor(PREMIUM_COLLECTIBLES / 64);
      let hasItem = rounded < activePerksBitmask.length;
      if (hasItem) {
        const deserializer = BigFlagUtilsAll;
        const obj = BigFlagUtilsAll;
        const deserializeResult = deserializer.deserialize(activePerksBitmask[rounded]);
        hasItem = obj.has(deserializeResult, BigFlagUtilsAll.getFlag(PREMIUM_COLLECTIBLES % 64));
      }
      flag = hasItem;
    }
    if (flag) {
      const _String = String;
      const tmp8 = perks.configByPerk[String(undefined, PREMIUM_COLLECTIBLES)];
      let kind;
      if (tmp8 != null) {
        kind = tmp8.kind;
      }
      if (null == kind) {
        return true;
      } else {
        const type = kind.type;
        if (types.PerkConfigType.DISPLAY_NAME_STYLES !== type) {
          if (types.PerkConfigType.CLIENT_THEMES !== type) {
            if (types.PerkConfigType.APP_ICONS !== type) {
              return true;
            }
          }
        }
        return !kind.isRestrictedToAllowedOptions;
      }
    }
  }
  return false;
}
export { getPerkSource };
export function getPerkConfig(perks, MONTHLY_ORBS) {
  if (null != perks) {
    const _String = String;
    const tmp3 = perks.configByPerk[String(undefined, MONTHLY_ORBS)];
    if (null != tmp3) {
      const obj = { source: getPerkSource(perks, MONTHLY_ORBS), kind: tmp3.kind };
      return obj;
    }
  }
}