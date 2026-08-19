// discord_app/utils/GuildRoleRecordUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import fromStringAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import int2hslRaw from "../../discord_common/js/shared/utils/ColorUtils.tsx";
import GuildRoleRecordTypeTag2 from "../records/GuildRoleRecord.tsx";
import extractColorStringsFromServerColors from "../modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx";
import isValueEqual from "../lib/PlainRecord.tsx";

function fromServerArray(id, roles) {
  const obj = {};
  const iter = roles[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj[nextResult.id] = fromServer(id, nextResult);
    continue;
  }
  return obj;
}
function fromServer(guildId, id) {
  const obj = { id: id.id, name: id.name, guildId, permissions: null, mentionable: null, position: null, color: null, colorString: null, colors: null, colorStrings: null, hoist: null, managed: null, tags: null, icon: null, unicodeEmoji: null, flags: null, description: null, version: null };
  const deserializer = fromStringAll;
  obj[3] = deserializer.deserialize(id.permissions);
  ({ mentionable: obj[4], position: obj[5], color: obj[6] } = id);
  let int2hexResult = null;
  if (0 !== id.color) {
    int2hexResult = int2hslRaw.int2hex(id.color);
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
  const obj = { id: id.id, name: id.name, guildId, permissions: null, mentionable: null, position: null, color: null, colorString: null, colors: null, colorStrings: null, hoist: null, managed: null, tags: null, icon: null, unicodeEmoji: null, flags: null, description: null, version: null };
  const deserializer = fromStringAll;
  obj[3] = deserializer.deserialize(id.permissions);
  ({ mentionable: obj[4], position: obj[5], color: obj[6] } = id);
  let int2hexResult = null;
  if (null != id.color) {
    int2hexResult = null;
    if (0 !== id.color) {
      int2hexResult = int2hslRaw.int2hex(id.color);
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
let result = obj132.fileFinishedImporting("utils/GuildRoleRecordUtils.tsx");

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
      obj[item10020.id] = fromServer(arg0, item10020);
      continue;
    }
    return obj;
  }
};
export const fromSerializedPartition = function fromSerializedPartition(id, roles) {
  const obj = {};
  for (const key10006 in arg1) {
    obj[key10006] = fromSerialized(arg0, arg1[key10006]);
    continue;
  }
  return obj;
};
export const toSerializedPartition = function toSerializedPartition(unsafeMutableRoles) {
  let obj = {};
  for (const key10004 in arg0) {
    let tmp2 = arg0[key10004];
    obj = {};
    let merged = Object.assign(tmp2);
    let str = tmp2.permissions;
    obj.permissions = str.toString();
    obj[key10004] = obj;
    continue;
  }
  return obj;
};