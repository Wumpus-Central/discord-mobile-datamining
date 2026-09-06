// === Module 2019: GuildRoleUtils ===

// Module 2019 (GuildRoleUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2017 */;
import EnhancedRoleColorUtils from "EnhancedRoleColorUtils" /* 2018 */;
import size from "module_2" /* 2 */;

function compareGuildRoles(guildId, id) {
  guildId = guildId.guildId;
  if (guildId.id === guildId) {
    let num2 = 1;
    if (id.id === guildId) {
      num2 = SnowflakeUtilsDefault.compare(guildId.id, id.id);
    }
    let num = num2;
  } else {
    num = -1;
    if (id.id !== guildId) {
      if (guildId.position !== id.position) {
        let diff = id.position - guildId.position;
      } else {
        diff = SnowflakeUtilsDefault.compare(guildId.id, id.id);
      }
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
  guildId = guildId.guildId;
  if (guildId.id === guildId) {
    let num2 = 1;
    if (id.id === guildId) {
      num2 = SnowflakeUtilsDefault.compare(guildId.id, id.id);
    }
    let num = num2;
  } else {
    num = -1;
    if (id.id !== guildId) {
      if (guildId.position !== id.position) {
        let diff = id.position - guildId.position;
      } else {
        diff = SnowflakeUtilsDefault.compare(guildId.id, id.id);
      }
    }
  }
  return num < 0;
};
export const sortInviteRoles = function sortInviteRoles(position, position2) {
  if (position.position !== position2.position) {
    let diff = position2.position - position.position;
  } else {
    diff = SnowflakeUtilsDefault.compare(position.id, position2.id);
  }
  return diff;
};
export const inviteRoleToDisplayData = function inviteRoleToDisplayData(id, id) {
  const obj = { id: id.id, name: id.name, guildId: id, colorString: null, colorStrings: null, icon: null, unicodeEmoji: null };
  let int2hexResult = null;
  if (0 !== id.color) {
    int2hexResult = utils_ColorUtils.int2hex(id.color);
  }
  obj.colorString = int2hexResult;
  let result = null;
  if (null != id.colors) {
    result = EnhancedRoleColorUtils.extractColorStringsFromServerColors(id.colors);
  }
  obj.colorStrings = result;
  let icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  obj.icon = icon;
  let unicode_emoji = id.unicode_emoji;
  if (unicode_emoji == null) {
    unicode_emoji = null;
  }
  obj.unicodeEmoji = unicode_emoji;
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
    let obj = {};
    const merged = Object.assign(unsafeMutableRoles);
    if (null != items1) {
      for (const item10012 of items1) {
        delete tmp[tmp2];
        continue;
      }
    }
    for (const item10018 of items) {
      obj = GuildRoleRecordUtilsAll;
      obj[item10018.id] = obj.fromServer(arg0, item10018);
      continue;
    }
    return obj;
  }
};