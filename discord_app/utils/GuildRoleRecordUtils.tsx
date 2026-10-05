// discord_app/utils/GuildRoleRecordUtils.tsx
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import utils_ColorUtils from "../../discord_common/js/shared/utils/ColorUtils.tsx";
import GuildRoleRecord from "../records/GuildRoleRecord.tsx";
import EnhancedRoleColorUtils from "../modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx";
import PlainRecord from "../lib/PlainRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

let c3;
let closure_4;
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
  let colors;
  let description;
  let deserializer;
  let flags;
  let int2hexResult;
  let managed;
  let result;
  let tags;
  const obj = {
    id: id.id,
    name: id.name,
    guildId,
    permissions: deserializer.deserialize(id.permissions),
    mentionable: null,
    position: null,
    color: null,
    colorString: int2hexResult,
    colors,
    colorStrings: result,
    hoist: null,
    managed,
    tags,
    icon: null,
    unicodeEmoji: null,
    flags,
    description,
    version: id.version,
  };
  deserializer = BigFlagUtilsAll;
  ({ mentionable: obj.mentionable, position: obj.position, color: obj.color } = id);
  int2hexResult = null;
  if (0 !== id.color) {
    const obj2 = utils_ColorUtils;
    int2hexResult = obj2.int2hex(id.color);
  }
  colors = id.colors;
  if (colors == null) {
    colors = null;
  }
  result = null;
  if (null != id.colors) {
    const obj3 = EnhancedRoleColorUtils;
    result = obj3.extractColorStringsFromServerColors(id.colors);
  }
  ({ hoist: obj.hoist, managed } = id);
  if (managed == null) {
    managed = false;
  }
  tags = id.tags;
  if (tags == null) {
    tags = {};
  }
  ({ icon: obj.icon, unicode_emoji: obj.unicodeEmoji, flags } = id);
  if (flags == null) {
    flags = 0;
  }
  description = id.description;
  if (description == null) {
    description = null;
  }
  return _false(GuildRoleRecordTypeTag, obj);
}
function fromSerialized(guildId, id) {
  let colors;
  let description;
  let deserializer;
  let flags;
  let int2hexResult;
  let managed;
  let result;
  let tags;
  const obj = {
    id: id.id,
    name: id.name,
    guildId,
    permissions: deserializer.deserialize(id.permissions),
    mentionable: null,
    position: null,
    color: null,
    colorString: int2hexResult,
    colors,
    colorStrings: result,
    hoist: null,
    managed,
    tags,
    icon: null,
    unicodeEmoji: null,
    flags,
    description,
    version: id.version,
  };
  deserializer = BigFlagUtilsAll;
  ({ mentionable: obj.mentionable, position: obj.position, color: obj.color } = id);
  int2hexResult = null;
  if (null != id.color) {
    int2hexResult = null;
    if (0 !== id.color) {
      const obj2 = utils_ColorUtils;
      int2hexResult = obj2.int2hex(id.color);
    }
  }
  colors = id.colors;
  if (colors == null) {
    colors = null;
  }
  result = null;
  if (null != id.colors) {
    const obj3 = EnhancedRoleColorUtils;
    result = obj3.extractColorStringsFromServerColors(id.colors);
  }
  ({ hoist: obj.hoist, managed } = id);
  if (managed == null) {
    managed = false;
  }
  tags = id.tags;
  if (tags == null) {
    tags = {};
  }
  ({ icon: obj.icon, unicodeEmoji: obj.unicodeEmoji, flags } = id);
  if (flags == null) {
    flags = 0;
  }
  description = id.description;
  if (description == null) {
    description = null;
  }
  return _false(GuildRoleRecordTypeTag, obj);
}
({ constructInPlace: c3, objectIsPlainRecordOfType: closure_4 } = PlainRecord);
const GuildRoleRecordTypeTag = GuildRoleRecord.GuildRoleRecordTypeTag;
let result = size.fileFinishedImporting("utils/GuildRoleRecordUtils.tsx");

export const isGuildRoleRecord = function isGuildRoleRecord(arg0) {
  return React3(GuildRoleRecordTypeTag, arg0);
};
export { fromServerArray };
export { fromServer };
export const constructGuildRoleInPlace = function constructGuildRoleInPlace(arg0) {
  return _false(GuildRoleRecordTypeTag, arg0);
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
      delete obj[item10013];
      continue;
    }
    const writes = roles.writes;
    for (const item10020 of writes) {
      obj[item10020.id] = fromServer(id, item10020);
      continue;
    }
    return obj;
  }
};
export const fromSerializedPartition = function fromSerializedPartition(id, roles) {
  const obj = {};
  for (const key10006 in roles) {
    obj[key10006] = fromSerialized(id, roles[key10006]);
    continue;
  }
  return obj;
};
export const toSerializedPartition = function toSerializedPartition(unsafeMutableRoles) {
  const obj = {};
  for (const key10004 in unsafeMutableRoles) {
    let tmp2 = unsafeMutableRoles[key10004];
    let obj2 = { permissions: str.toString() };
    let merged = Object.assign(tmp2);
    let str = tmp2.permissions;
    obj[key10004] = obj2;
    continue;
  }
  return obj;
};
