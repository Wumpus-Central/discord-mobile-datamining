// discord_app/utils/GuildRoleRecordUtils.tsx
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import utils_ColorUtils from "../../discord_common/js/shared/utils/ColorUtils.tsx";
import GuildRoleRecord from "../records/GuildRoleRecord.tsx";
import EnhancedRoleColorUtils from "../modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx";
import PlainRecord from "../lib/PlainRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  const obj = {
    id: id.id,
    name: id.name,
    guildId,
    permissions: null,
    mentionable: null,
    position: null,
    color: null,
    colorString: null,
    colors: null,
    colorStrings: null,
    hoist: null,
    managed: null,
    tags: null,
    icon: null,
    unicodeEmoji: null,
    flags: null,
    description: null,
    version: null,
  };
  const deserializer = BigFlagUtilsAll;
  obj.permissions = deserializer.deserialize(id.permissions);
  ({ mentionable: obj.mentionable, position: obj.position, color: obj.color } = id);
  let int2hexResult = null;
  if (0 !== id.color) {
    int2hexResult = utils_ColorUtils.int2hex(id.color);
  }
  obj.colorString = int2hexResult;
  let colors = id.colors;
  if (colors == null) {
    colors = null;
  }
  obj.colors = colors;
  let result = null;
  if (null != id.colors) {
    result = EnhancedRoleColorUtils.extractColorStringsFromServerColors(id.colors);
  }
  obj.colorStrings = result;
  ({ hoist: obj.hoist, managed } = id);
  if (managed == null) {
    managed = false;
  }
  obj.managed = managed;
  let tags = id.tags;
  if (tags == null) {
    tags = {};
  }
  obj.tags = tags;
  ({ icon: obj.icon, unicode_emoji: obj.unicodeEmoji, flags } = id);
  if (flags == null) {
    flags = 0;
  }
  obj.flags = flags;
  let description = id.description;
  if (description == null) {
    description = null;
  }
  obj.description = description;
  obj.version = id.version;
  return React3(GuildRoleRecordTypeTag, obj);
}
function fromSerialized(guildId, id) {
  const obj = {
    id: id.id,
    name: id.name,
    guildId,
    permissions: null,
    mentionable: null,
    position: null,
    color: null,
    colorString: null,
    colors: null,
    colorStrings: null,
    hoist: null,
    managed: null,
    tags: null,
    icon: null,
    unicodeEmoji: null,
    flags: null,
    description: null,
    version: null,
  };
  const deserializer = BigFlagUtilsAll;
  obj.permissions = deserializer.deserialize(id.permissions);
  ({ mentionable: obj.mentionable, position: obj.position, color: obj.color } = id);
  let int2hexResult = null;
  if (null != id.color) {
    int2hexResult = null;
    if (0 !== id.color) {
      int2hexResult = utils_ColorUtils.int2hex(id.color);
    }
  }
  obj.colorString = int2hexResult;
  let colors = id.colors;
  if (colors == null) {
    colors = null;
  }
  obj.colors = colors;
  let result = null;
  if (null != id.colors) {
    result = EnhancedRoleColorUtils.extractColorStringsFromServerColors(id.colors);
  }
  obj.colorStrings = result;
  ({ hoist: obj.hoist, managed } = id);
  if (managed == null) {
    managed = false;
  }
  obj.managed = managed;
  let tags = id.tags;
  if (tags == null) {
    tags = {};
  }
  obj.tags = tags;
  ({ icon: obj.icon, unicodeEmoji: obj.unicodeEmoji, flags } = id);
  if (flags == null) {
    flags = 0;
  }
  obj.flags = flags;
  let description = id.description;
  if (description == null) {
    description = null;
  }
  obj.description = description;
  obj.version = id.version;
  return React3(GuildRoleRecordTypeTag, obj);
}
({ constructInPlace: c3, objectIsPlainRecordOfType: closure_4 } = PlainRecord);
const GuildRoleRecordTypeTag = GuildRoleRecord.GuildRoleRecordTypeTag;
let result = size.fileFinishedImporting("utils/GuildRoleRecordUtils.tsx");

export const isGuildRoleRecord = function isGuildRoleRecord(arg0) {
  return React4(GuildRoleRecordTypeTag, arg0);
};
export { fromServerArray };
export { fromServer };
export const constructGuildRoleInPlace = function constructGuildRoleInPlace(arg0) {
  return React3(GuildRoleRecordTypeTag, arg0);
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
