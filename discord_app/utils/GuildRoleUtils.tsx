// discord_app/utils/GuildRoleUtils.tsx
import set from "set" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import int2hslRaw from "int2hslRaw" /* 688 */;
import fromServerArrayAll from "fromServerArray" /* 1985 */;
import extractColorStringsFromServerColors from "extractColorStringsFromServerColors" /* 1986 */;

function compareGuildRoles(guildId, id) {
  guildId = guildId.guildId;
  if (guildId.id === guildId) {
    let num2 = 1;
    if (id.id === guildId) {
      num2 = DISCORD_EPOCHDefault.compare(guildId.id, id.id);
      const obj2 = DISCORD_EPOCHDefault;
    }
    let num = num2;
  } else {
    num = -1;
    if (id.id !== guildId) {
      if (guildId.position !== id.position) {
        let diff = id.position - guildId.position;
      } else {
        diff = DISCORD_EPOCHDefault.compare(guildId.id, id.id);
        const obj = DISCORD_EPOCHDefault;
      }
    }
  }
  return num;
}
let result = set.fileFinishedImporting("utils/GuildRoleUtils.tsx");

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
      num2 = DISCORD_EPOCHDefault.compare(guildId.id, id.id);
      const obj2 = DISCORD_EPOCHDefault;
    }
    let num = num2;
  } else {
    num = -1;
    if (id.id !== guildId) {
      if (guildId.position !== id.position) {
        let diff = id.position - guildId.position;
      } else {
        diff = DISCORD_EPOCHDefault.compare(guildId.id, id.id);
        const obj = DISCORD_EPOCHDefault;
      }
    }
  }
  return num < 0;
};
export const sortInviteRoles = function sortInviteRoles(position, position2) {
  if (position.position !== position2.position) {
    let diff = position2.position - position.position;
  } else {
    diff = DISCORD_EPOCHDefault.compare(position.id, position2.id);
    const obj = DISCORD_EPOCHDefault;
  }
  return diff;
};
export const inviteRoleToDisplayData = function inviteRoleToDisplayData(id, id) {
  const obj = { id: id.id, name: id.name, guildId: id, colorString: null, colorStrings: null, icon: null, unicodeEmoji: null };
  let int2hexResult = null;
  if (0 !== id.color) {
    int2hexResult = int2hslRaw.int2hex(id.color);
    const obj2 = int2hslRaw;
  }
  obj[3] = int2hexResult;
  let result = null;
  if (null != id.colors) {
    result = extractColorStringsFromServerColors.extractColorStringsFromServerColors(id.colors);
    const obj3 = extractColorStringsFromServerColors;
  }
  obj[4] = result;
  let icon = id.icon;
  if (icon == null) {
    icon = null;
  }
  obj[5] = icon;
  let unicode_emoji = id.unicode_emoji;
  if (unicode_emoji == null) {
    unicode_emoji = null;
  }
  obj[6] = unicode_emoji;
  return obj;
};
export const filterRoleDeletes = function filterRoleDeletes(id, unsafeMutableRoles, roles, deleted_role_ids) {
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
      let tmp7 = importAll;
      let tmp8 = dependencyMap;
      obj = fromServerArrayAll;
      obj[item10018.id] = obj.fromServer(arg0, item10018);
      continue;
    }
    return obj;
  }
};