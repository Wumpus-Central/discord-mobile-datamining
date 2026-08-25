// === Module 1987: fromServerArray ===

// Module 1987 (fromServerArray)
import set from "set" /* 2 */;
import fromStringAll from "fromString" /* 506 */;
import int2hslRaw from "int2hslRaw" /* 688 */;
import GuildRoleRecordTypeTag2 from "GuildRoleRecordTypeTag" /* 1986 */;
import extractColorStringsFromServerColors from "extractColorStringsFromServerColors" /* 1988 */;
import isValueEqual from "isValueEqual" /* 1431 */;

function fromServerArray(id, roles) {
  const obj = {};
  const iter = roles[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = fromServer;
    obj[nextResult.id] = fromServer(id, nextResult);
    continue;
  }
  return obj;
}
function fromServer(guildId, id) {
  const obj = { id: id.id, name: id.name, guildId, permissions: fromStringAll.deserialize(id.permissions), mentionable: null, position: null, color: null, colorString: null, colors: null, colorStrings: null, hoist: null, managed: null, tags: null, icon: null, unicodeEmoji: null, flags: null, description: null, version: null };
  ({ mentionable: obj[4], position: obj[5], color: obj[6] } = id);
  let int2hexResult = null;
  if (0 !== id.color) {
    int2hexResult = int2hslRaw.int2hex(id.color);
    const obj3 = int2hslRaw;
  }
  obj[7] = int2hexResult;
  let colors = id.colors;
  if (colors == null) {
    colors = null;
  }
  obj[8] = colors;
  let result = null;
  if (null != id.colors) {
    result = extractColorStringsFromServerColors.extractColorStringsFromServerColors(id.colors);
    const obj4 = extractColorStringsFromServerColors;
  }
  obj[9] = result;
  ({ hoist: obj[10], managed } = id);
  if (managed == null) {
    managed = false;
  }
  obj[11] = managed;
  let tags = id.tags;
  if (tags == null) {
    tags = {};
  }
  obj[12] = tags;
  ({ icon: obj[13], unicode_emoji: obj[14], flags } = id);
  if (flags == null) {
    flags = 0;
  }
  obj[15] = flags;
  let description = id.description;
  if (description == null) {
    description = null;
  }
  obj[16] = description;
  obj[17] = id.version;
  return callback(GuildRoleRecordTypeTag, obj);
}
function fromSerialized(guildId, id) {
  const obj = { id: id.id, name: id.name, guildId, permissions: fromStringAll.deserialize(id.permissions), mentionable: null, position: null, color: null, colorString: null, colors: null, colorStrings: null, hoist: null, managed: null, tags: null, icon: null, unicodeEmoji: null, flags: null, description: null, version: null };
  ({ mentionable: obj[4], position: obj[5], color: obj[6] } = id);
  let int2hexResult = null;
  if (null != id.color) {
    int2hexResult = null;
    if (0 !== id.color) {
      int2hexResult = int2hslRaw.int2hex(id.color);
      const obj3 = int2hslRaw;
    }
  }
  obj[7] = int2hexResult;
  let colors = id.colors;
  if (colors == null) {
    colors = null;
  }
  obj[8] = colors;
  let result = null;
  if (null != id.colors) {
    result = extractColorStringsFromServerColors.extractColorStringsFromServerColors(id.colors);
    const obj4 = extractColorStringsFromServerColors;
  }
  obj[9] = result;
  ({ hoist: obj[10], managed } = id);
  if (managed == null) {
    managed = false;
  }
  obj[11] = managed;
  let tags = id.tags;
  if (tags == null) {
    tags = {};
  }
  obj[12] = tags;
  ({ icon: obj[13], unicodeEmoji: obj[14], flags } = id);
  if (flags == null) {
    flags = 0;
  }
  obj[15] = flags;
  let description = id.description;
  if (description == null) {
    description = null;
  }
  obj[16] = description;
  obj[17] = id.version;
  return callback(GuildRoleRecordTypeTag, obj);
}
({ constructInPlace: c3, objectIsPlainRecordOfType: c4 } = isValueEqual);
const GuildRoleRecordTypeTag = GuildRoleRecordTypeTag2.GuildRoleRecordTypeTag;
let result = set.fileFinishedImporting("utils/GuildRoleRecordUtils.tsx");

export const isGuildRoleRecord = function isGuildRoleRecord(arg0) {
  return callback2(GuildRoleRecordTypeTag, arg0);
};
export { fromServerArray };
export { fromServer };
export const constructGuildRoleInPlace = function constructGuildRoleInPlace(arg0) {
  return callback(GuildRoleRecordTypeTag, arg0);
};
export { fromSerialized };
export const fromSyncOperation = function fromSyncOperation(id, roles, partition) {
  if ("full_sync" === roles.op) {
    return fromServerArray(id, roles.items);
  } else {
    const obj = {};
    const merged = Object.assign(partition);
    const deletes = roles.deletes;
    for (const item10013 of deletes) {
      delete tmp[tmp2];
      continue;
    }
    const writes = roles.writes;
    for (const item10020 of writes) {
      let tmp10 = fromServer;
      obj[item10020.id] = fromServer(arg0, item10020);
      continue;
    }
    return obj;
  }
};
export const fromSerializedPartition = function fromSerializedPartition(id, roles) {
  const obj = {};
  for (const key10006 in arg1) {
    let tmp = key10006;
    let tmp2 = fromSerialized;
    obj[key10006] = fromSerialized(arg0, arg1[key10006]);
    continue;
  }
  return obj;
};
export const toSerializedPartition = function toSerializedPartition(unsafeMutableRoles) {
  let obj = {};
  for (const key10004 in arg0) {
    let tmp = key10004;
    let tmp2 = arg0[key10004];
    obj = {};
    let tmp3 = obj;
    let tmp4 = tmp2;
    let merged = Object.assign(tmp2);
    let str = tmp2.permissions;
    obj.permissions = str.toString();
    obj[key10004] = obj;
    continue;
  }
  return obj;
};