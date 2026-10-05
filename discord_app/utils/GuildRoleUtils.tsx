// === Module 2110: GuildRoleUtils ===

// Module 2110 (GuildRoleUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2108 */;
import EnhancedRoleColorUtils from "EnhancedRoleColorUtils" /* 2109 */;
import size from "module_2" /* 2 */;

function compareGuildRoles(guildId, id) {
  let num;
  guildId = guildId.guildId;
  if (guildId.id === guildId) {
    let num2 = 1;
    if (id.id === guildId) {
      const obj2 = SnowflakeUtilsDefault;
      num2 = obj2.compare(guildId.id, id.id);
    }
    num = num2;
  } else {
    num = -1;
    if (id.id !== guildId) {
      let diff;
      if (guildId.position !== id.position) {
        diff = id.position - guildId.position;
      } else {
        const obj = SnowflakeUtilsDefault;
        diff = obj.compare(guildId.id, id.id);
      }
      num = diff;
    }
  }
  return num;
}
let result = size.fileFinishedImporting("utils/GuildRoleUtils.tsx");

export const sortGuildRoleRecords = function sortGuildRoleRecords(arr) {
  const sorted = arr.sort(compareGuildRoles);
  return arr;
};
export { compareGuildRoles };
export const doesRoleSortHigher = function doesRoleSortHigher(guildId, id) {
  let num;
  guildId = guildId.guildId;
  if (guildId.id === guildId) {
    let num2 = 1;
    if (id.id === guildId) {
      const obj2 = SnowflakeUtilsDefault;
      num2 = obj2.compare(guildId.id, id.id);
    }
    num = num2;
  } else {
    num = -1;
    if (id.id !== guildId) {
      let diff;
      if (guildId.position !== id.position) {
        diff = id.position - guildId.position;
      } else {
        const obj = SnowflakeUtilsDefault;
        diff = obj.compare(guildId.id, id.id);
      }
      num = diff;
    }
  }
  return num < 0;
};
export const sortInviteRoles = function sortInviteRoles(position, position2) {
  let diff;
  if (position.position !== position2.position) {
    diff = position2.position - position.position;
  } else {
    const obj = SnowflakeUtilsDefault;
    diff = obj.compare(position.id, position2.id);
  }
  return diff;
};
export const inviteRoleToDisplayData = function inviteRoleToDisplayData(id, id2) {
  let icon;
  let int2hexResult;
  let result;
  let unicode_emoji;
  const obj = { id: id.id, name: id.name, guildId: id, colorString: int2hexResult, colorStrings: result, icon, unicodeEmoji: unicode_emoji };
  int2hexResult = null;
  if (0 !== id.color) {
    const obj2 = utils_ColorUtils;
    int2hexResult = obj2.int2hex(id.color);
  }
  result = null;
  if (null != id.colors) {
    const obj3 = EnhancedRoleColorUtils;
    result = obj3.extractColorStringsFromServerColors(id.colors);
  }
  icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  unicode_emoji = id.unicode_emoji;
  if (unicode_emoji == null) {
    unicode_emoji = null;
  }
  return obj;
};
export const filterRoleDeletes = function filterRoleDeletes(id, unsafeMutableRoles) {
  let items = roles;
  if (roles === undefined) {
    items = [];
  }
  let items1 = deleted_role_ids;
  if (deleted_role_ids === undefined) {
    items1 = [];
  }
  if (items1.length + items.length === 0) {
    return unsafeMutableRoles;
  } else {
    const obj3 = {};
    const merged = Object.assign(unsafeMutableRoles);
    if (null != items1) {
      for (const item10012 of items1) {
        delete obj2[item10012];
        continue;
      }
    }
    for (const item10018 of items) {
      id = item10018.id;
      let obj = GuildRoleRecordUtilsAll;
      obj3[id] = obj.fromServer(id, item10018);
      continue;
    }
    return obj3;
  }
};