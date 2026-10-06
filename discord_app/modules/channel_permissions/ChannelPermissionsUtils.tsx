// === Module 9250: ChannelPermissionsUtils ===

// Module 9250 (ChannelPermissionsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import intl8 from "intl" /* 1126 */;
import Server from "Server" /* 1985 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import GuildRoleUtils from "GuildRoleUtils" /* 2110 */;
import PermissionUtilsAll from "PermissionUtils" /* 4520 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import ChannelUtils from "ChannelUtils" /* 5041 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 8110 */;
import ChannelSettingsPermissionsActionCreators from "ChannelSettingsPermissionsActionCreators" /* 9251 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2107 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, row;

let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function getRoleRowData(colorString, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const tmp4 = metroRequire(colorString, unpackModuleId.ADMINISTRATOR) ? RowType.ADMINISTRATOR : RowType.ROLE;
  const obj = { rowType: tmp4, colorString, name: null, id: null, disabled: metroRequire(colorString, unpackModuleId.ADMINISTRATOR) || flag, key: "" + tmp4 + ":" + colorString.id, tags: colorString.tags };
  colorString = colorString.colorString;
  if (colorString == null) {
    colorString = map1;
  }
  ({ name: obj.name, id: obj.id } = colorString);
  metroRequire(colorString, unpackModuleId.ADMINISTRATOR) || flag;
  return obj;
}
function sortRoles(guildId, id) {
  let diff;
  let num = 1;
  let num2 = 1;
  if (metroRequire(guildId, unpackModuleId.ADMINISTRATOR)) {
    num2 = 0;
  }
  if (metroRequire(id, unpackModuleId.ADMINISTRATOR)) {
    num = 0;
  }
  if (num2 !== num) {
    diff = num2 - num;
  } else {
    const obj = GuildRoleUtils;
    diff = obj.compareGuildRoles(guildId, id);
  }
  return diff;
}
function getMemberRowData(id, id2, appChannelBotUserId) {
  let MEMBER;
  let nick;
  let obj3;
  let tmp3;
  if (appChannelBotUserId === id.id) {
    MEMBER = RowType.APP_CHANNEL_APP;
    tmp3 = RowType;
  } else if (isGuildOwner(id2, id)) {
    MEMBER = RowType.OWNER;
    tmp3 = RowType;
  } else {
    MEMBER = RowType.MEMBER;
    tmp3 = RowType;
  }
  const obj = { rowType: MEMBER, name: nick, username: obj3.getUserTag(id), id: id.id, avatarURL: id.getAvatarURL(id2.id, 24), bot: id.bot, verifiedBot: id.isVerifiedBot(), disabled: isGuildOwner(id2, id) || MEMBER === tmp3.APP_CHANNEL_APP, key: "" + MEMBER + ":" + id.id };
  nick = GuildMemberStore.getNick(id2.id, id.id);
  if (nick == null) {
    const obj2 = UserUtilsDefault;
    nick = obj2.getName(id);
  }
  obj3 = UserUtilsDefault;
  isGuildOwner(id2, id) || MEMBER === tmp3.APP_CHANNEL_APP;
  return obj;
}
function sortMembers(rowType, rowType2) {
  let diff;
  if (rowType.rowType !== rowType2.rowType) {
    diff = rowType.rowType - rowType2.rowType;
  } else {
    const name = rowType.name;
    const name2 = rowType2.name;
    const toLocaleLowerCaseResult = name.toLocaleLowerCase();
    diff = toLocaleLowerCaseResult.localeCompare(name2.toLocaleLowerCase());
  }
  return diff;
}
const isGuildVocalChannelType = ChannelRecord.isGuildVocalChannelType;
const isGuildOwner = GuildRecord.isGuildOwner;
({ hasPermission: metroRequire, isEveryoneRole: metroImportDefault } = GuildRoleRecord);
const RowType = ChannelPermissionsConstants.RowType;
({ Permissions: unpackModuleId, ChannelTypes: closure_12, DEFAULT_ROLE_COLOR_HEX: map1 } = Constants);
const result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionsUtils.tsx");

export { getRoleRowData };
export { sortRoles };
export const getNoRolesRow = function getNoRolesRow() {
  let stringResult = arg0;
  if (arg0 === undefined) {
    const intl = intl8.intl;
    stringResult = intl.string(intl8.t["gnsna/"]);
  }
  const items = [];
  const obj = { rowType: RowType.EMPTY_STATE, colorString: map1, name: stringResult, disabled: true, id: "EMPTY_STATE" };
  items[0] = obj;
  return items;
};
export const isEveryoneRoleId = function isEveryoneRoleId(guildId, id) {
  const obj = SnowflakeUtilsDefault;
  return obj.castGuildIdAsEveryoneGuildRoleId(guildId) === id;
};
export const getRolesRows = function getRolesRows(guild, stateFromStores, channel, permission) {
  let closure_1 = permission;
  let fn = filterByQuery;
  if (filterByQuery === undefined) {
    fn = function a() {
      return true;
    };
  }
  const found = stateFromStores.filter((id) => {
    let tmp2 = !metroRequire(id, unpackModuleId.ADMINISTRATOR);
    metroRequire(id, unpackModuleId.ADMINISTRATOR);
    if (tmp2) {
      id = id.id;
      const currentUser = UserStore.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == channel) {
          flag = currentUser.id !== id;
        } else {
          let tmp9 = null == tmp8;
          if (!tmp9) {
            const obj = BigFlagUtilsAll;
            tmp9 = !obj.has(tmp8.allow, permission);
          }
          flag = tmp9;
        }
      }
      tmp2 = flag;
    }
    if (tmp2) {
      tmp2 = !metroImportDefault(id);
    }
    if (tmp2) {
      tmp2 = fn(id.name);
    }
    return tmp2;
  });
  const sorted = found.sort(sortRoles);
  return sorted.map((item) => getRoleRowData(item));
};
export const getRolesRowsWithPermissionDisabled = function getRolesRowsWithPermissionDisabled(guild, stateFromStores, channel, permission) {
  let closure_1 = permission;
  let fn = filterByQuery;
  if (filterByQuery === undefined) {
    fn = function u() {
      return true;
    };
  }
  const found = stateFromStores.filter((id) => {
    let tmp2 = !metroRequire(id, unpackModuleId.ADMINISTRATOR);
    metroRequire(id, unpackModuleId.ADMINISTRATOR);
    if (tmp2) {
      id = id.id;
      const currentUser = UserStore.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == channel) {
          flag = currentUser.id !== id;
        } else {
          let tmp9 = null == tmp8;
          if (!tmp9) {
            const obj = BigFlagUtilsAll;
            tmp9 = !obj.has(tmp8.allow, permission);
          }
          flag = tmp9;
        }
      }
      tmp2 = flag;
    }
    if (tmp2) {
      tmp2 = !metroImportDefault(id);
    }
    if (tmp2) {
      tmp2 = fn(id.name);
    }
    return tmp2;
  });
  const sorted = found.sort(sortRoles);
  return sorted.map((item) => getRoleRowData(item, metroRequire(item, permission)));
};
export const getExistingRoles = function getExistingRoles(guild, sortedRoles, channel, accessPermissions, arg4) {
  let closure_0 = channel;
  let closure_1 = accessPermissions;
  let closure_2 = arg4;
  return sortedRoles.filter((id) => {
    let tmp = metroRequire(id, unpackModuleId.ADMINISTRATOR);
    if (!tmp) {
      id = id.id;
      const currentUser = UserStore.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == channel) {
          flag = currentUser.id !== id;
        } else {
          let tmp8 = channel.permissionOverwrites[id];
          let tmp9;
          if (closure_2 != null) {
            tmp9 = closure_2[id];
          }
          if (null != tmp9) {
            tmp8 = closure_2[id];
          }
          let tmp10 = null == tmp8;
          if (!tmp10) {
            const obj = BigFlagUtilsAll;
            tmp10 = !obj.has(tmp8.allow, accessPermissions);
          }
          flag = tmp10;
        }
      }
      tmp = !flag && !metroImportDefault(id);
      const tmp13 = !flag && !metroImportDefault(id);
    }
    return tmp;
  });
};
export const getAllExistingRolesWithPermission = function getAllExistingRolesWithPermission(arg0, arr, arg2, arg3, arg4) {
  let closure_0 = arg2;
  let closure_1 = arg3;
  let closure_2 = arg4;
  return arr.filter((id) => {
    let hasItem = closure_2_6(id, constants.ADMINISTRATOR);
    if (!hasItem) {
      id = id.id;
      currentUser = currentUser.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == permissionOverwrites) {
          flag = currentUser.id !== id;
        } else {
          let tmp8 = permissionOverwrites.permissionOverwrites[id];
          let tmp9;
          if (closure_2 != null) {
            tmp9 = closure_2[id];
          }
          if (null != tmp9) {
            tmp8 = closure_2[id];
          }
          let tmp10 = null == tmp8;
          if (!tmp10) {
            const obj = BigFlagUtilsAll;
            tmp10 = !obj.has(tmp8.allow, closure_1);
          }
          flag = tmp10;
        }
      }
      hasItem = !flag && !closure_2_7(id);
      const tmp13 = !flag && !closure_2_7(id);
    }
    if (!hasItem) {
      const has = BigFlagUtilsAll.has;
      BigFlagUtilsAll;
      let allow;
      const combine = BigFlagUtilsAll.combine;
      const permissions = id.permissions;
      BigFlagUtilsAll;
      if (permissionOverwrites.permissionOverwrites[id.id] != null) {
        allow = tmp20.allow;
      }
      hasItem = has(combine(permissions, allow), closure_1);
    }
    return hasItem;
  });
};
export const getExistingRolesRows = function getExistingRolesRows(guild, sortedGuildRoles, channel, accessPermissions, arg4) {
  _require = channel;
  let closure_1 = accessPermissions;
  let closure_2 = arg4;
  const found = sortedGuildRoles.filter((id) => {
    let tmp = metroRequire(id, unpackModuleId.ADMINISTRATOR);
    if (!tmp) {
      id = id.id;
      const currentUser = UserStore.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == channel) {
          flag = currentUser.id !== id;
        } else {
          let tmp8 = channel.permissionOverwrites[id];
          let tmp9;
          if (closure_2 != null) {
            tmp9 = closure_2[id];
          }
          if (null != tmp9) {
            tmp8 = closure_2[id];
          }
          let tmp10 = null == tmp8;
          if (!tmp10) {
            const obj = BigFlagUtilsAll;
            tmp10 = !obj.has(tmp8.allow, accessPermissions);
          }
          flag = tmp10;
        }
      }
      tmp = !flag && !metroImportDefault(id);
      const tmp13 = !flag && !metroImportDefault(id);
    }
    return tmp;
  });
  const sorted = found.sort(sortRoles);
  let mapped = sorted.map((item) => getRoleRowData(item));
  if (0 === mapped.length) {
    const intl2 = require("intl").intl;
    let stringResult = intl2.string(require("intl").t.nZfHsf);
    if (stringResult === undefined) {
      const intl = tmp4(1126).intl;
      stringResult = intl.string(tmp4(1126).t["gnsna/"]);
    }
    let obj = { rowType: RowType.EMPTY_STATE, colorString, name: stringResult, disabled: true, id: "EMPTY_STATE" };
    const items = [obj];
    mapped = items;
  }
  return mapped;
};
export const getExistingRolesRowWithPermissionDisabled = function getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, MODERATE_STAGE_CHANNEL_PERMISSIONS, arg4) {
  _require = channel;
  let closure_1 = MODERATE_STAGE_CHANNEL_PERMISSIONS;
  let closure_2 = arg4;
  const found = sortedGuildRoles.filter((id) => {
    let hasItem = closure_2_6(id, constants.ADMINISTRATOR);
    if (!hasItem) {
      id = id.id;
      currentUser = currentUser.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == permissionOverwrites) {
          flag = currentUser.id !== id;
        } else {
          let tmp8 = permissionOverwrites.permissionOverwrites[id];
          let tmp9;
          if (closure_2 != null) {
            tmp9 = closure_2[id];
          }
          if (null != tmp9) {
            tmp8 = closure_2[id];
          }
          let tmp10 = null == tmp8;
          if (!tmp10) {
            const obj = BigFlagUtilsAll;
            tmp10 = !obj.has(tmp8.allow, closure_1);
          }
          flag = tmp10;
        }
      }
      hasItem = !flag && !closure_2_7(id);
      const tmp13 = !flag && !closure_2_7(id);
    }
    if (!hasItem) {
      const has = BigFlagUtilsAll.has;
      BigFlagUtilsAll;
      let allow;
      const combine = BigFlagUtilsAll.combine;
      const permissions = id.permissions;
      BigFlagUtilsAll;
      if (permissionOverwrites.permissionOverwrites[id.id] != null) {
        allow = tmp20.allow;
      }
      hasItem = has(combine(permissions, allow), closure_1);
    }
    return hasItem;
  });
  const sorted = found.sort(sortRoles);
  let mapped = sorted.map((item) => getRoleRowData(item, metroRequire(item, MODERATE_STAGE_CHANNEL_PERMISSIONS)));
  if (0 === mapped.length) {
    const intl2 = require("intl").intl;
    let stringResult = intl2.string(require("intl").t.nZfHsf);
    if (stringResult === undefined) {
      const intl = tmp4(1126).intl;
      stringResult = intl.string(tmp4(1126).t["gnsna/"]);
    }
    let obj = { rowType: RowType.EMPTY_STATE, colorString, name: stringResult, disabled: true, id: "EMPTY_STATE" };
    const items = [obj];
    mapped = items;
  }
  return mapped;
};
export const getMembersRows = function getMembersRows(stateFromStoresArray, channel, guild, permission, arg4) {
  _require = channel;
  let closure_2 = permission;
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let fn = obj.filter;
  if (fn === undefined) {
    fn = function a() {
      return true;
    };
  }
  const appChannelBotUserId = obj.appChannelBotUserId;
  const mapped = stateFromStoresArray.map(UserStore.getUser);
  const found = mapped.filter(require("GlobalUtils").isNotNullish);
  const found1 = found.filter((id) => {
    let tmp3 = !isGuildOwner(guild, id);
    isGuildOwner(guild, id);
    if (tmp3) {
      id = id.id;
      const currentUser = UserStore.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == channel) {
          flag = currentUser.id !== id;
        } else {
          let tmp10 = null == tmp9;
          if (!tmp10) {
            const obj = BigFlagUtilsAll;
            tmp10 = !obj.has(tmp9.allow, permission);
          }
          flag = tmp10;
        }
      }
      tmp3 = flag;
    }
    if (tmp3) {
      let nick = GuildMemberStore.getNick(guild.id, id.id);
      if (nick == null) {
        const obj2 = UserUtilsDefault;
        nick = obj2.getName(id);
      }
      tmp3 = fn(nick) || fn(id.username) || fn(id.discriminator);
      fn(nick) || fn(id.username) || fn(id.discriminator);
    }
    return tmp3;
  });
  const mapped1 = found1.map((item) => getMemberRowData(item, guild, appChannelBotUserId));
  return mapped1.sort(sortMembers);
};
export const getExistingMembers = function getExistingMembers(memberIds, channel, guild, accessPermissions, arg4) {
  let closure_3;
  _require = channel;
  let closure_1 = guild;
  let closure_2 = accessPermissions;
  dependencyMap = arg4;
  const mapped = memberIds.map(UserStore.getUser);
  const found = mapped.filter(require("GlobalUtils").isNotNullish);
  return found.filter((id) => {
    id = id.id;
    currentUser = currentUser.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (null == closure_0) {
        flag = currentUser.id !== id;
      } else {
        let tmp5 = closure_0.permissionOverwrites[id];
        let tmp6;
        if (permissionUpdates != null) {
          tmp6 = permissionUpdates[id];
        }
        if (null != tmp6) {
          tmp5 = permissionUpdates[id];
        }
        let tmp7 = null == tmp5;
        if (!tmp7) {
          const obj = BigFlagUtilsAll;
          tmp7 = !obj.has(tmp5.allow, closure_2);
        }
        flag = tmp7;
      }
    }
    let tmp10 = !flag;
    if (flag) {
      tmp10 = isGuildOwner(closure_1, id);
    }
    return tmp10;
  });
};
export const getExistingMembersRows = function getExistingMembersRows(memberIds, channel, guild, accessPermissions, arg4) {
  _require = guild;
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  const appChannelBotUserId = obj.appChannelBotUserId;
  _require = channel;
  let closure_1 = guild;
  let closure_2 = accessPermissions;
  const permissionUpdates = obj.permissionUpdates;
  const mapped = memberIds.map(UserStore.getUser);
  const found = mapped.filter(require("GlobalUtils").isNotNullish);
  const found1 = found.filter((id) => {
    id = id.id;
    currentUser = currentUser.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (null == closure_0) {
        flag = currentUser.id !== id;
      } else {
        let tmp5 = closure_0.permissionOverwrites[id];
        let tmp6;
        if (permissionUpdates != null) {
          tmp6 = permissionUpdates[id];
        }
        if (null != tmp6) {
          tmp5 = permissionUpdates[id];
        }
        let tmp7 = null == tmp5;
        if (!tmp7) {
          const obj = BigFlagUtilsAll;
          tmp7 = !obj.has(tmp5.allow, closure_2);
        }
        flag = tmp7;
      }
    }
    let tmp10 = !flag;
    if (flag) {
      tmp10 = isGuildOwner(closure_1, id);
    }
    return tmp10;
  });
  const mapped1 = found1.map((item) => getMemberRowData(item, guild, appChannelBotUserId));
  return mapped1.sort(sortMembers);
};
export const getRowTypeLabel = function getRowTypeLabel(rowType, arg1) {
  if (RowType.ROLE === rowType) {
    const intl7 = intl8.intl;
    return intl7.string(intl8.t.ZxoFOG);
  } else if (RowType.OWNER === rowType) {
    const intl6 = intl8.intl;
    return intl6.string(intl8.t.NWhYJg);
  } else if (RowType.ADMINISTRATOR === rowType) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t["dwlcc+"]);
  } else if (RowType.MEMBER === rowType) {
    let stringResult = null;
    if (arg1) {
      const intl4 = intl8.intl;
      stringResult = intl4.string(intl8.t.UAJxZi);
    }
    return stringResult;
  } else if (RowType.APP_CHANNEL_APP === rowType) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t["z2/ML4"]);
  } else if (RowType.USER === rowType) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t.KD6OJJ);
  } else if (RowType.GUILD === rowType) {
    const intl = intl8.intl;
    return intl.string(intl8.t["5qyruI"]);
  } else if (RowType.EMPTY_STATE === rowType) {
    return null;
  }
};
export const getRemoveTooltipHint = function getRemoveTooltipHint(arg0) {
  if (RowType.ROLE === arg0) {
    const intl5 = intl8.intl;
    return intl5.string(intl8.t["Gzc/a8"]);
  } else if (RowType.OWNER === arg0) {
    const intl4 = intl8.intl;
    return intl4.string(intl8.t.icuNBM);
  } else if (RowType.ADMINISTRATOR === arg0) {
    const intl3 = intl8.intl;
    return intl3.string(intl8.t.eTmN5a);
  } else if (RowType.MEMBER === arg0) {
    const intl2 = intl8.intl;
    return intl2.string(intl8.t["Gzc/a8"]);
  } else if (RowType.APP_CHANNEL_APP === arg0) {
    const intl = intl8.intl;
    return intl.string(intl8.t.v05vEp);
  } else {
    const EMPTY_STATE = RowType.EMPTY_STATE;
    return null;
  }
};
export const flipEveryonePermission = function flipEveryonePermission(guild_id, accessPermissions, result) {
  let obj2;
  let obj3;
  let obj4;
  let everyoneOverwrite = guild_id.permissionOverwrites[guild_id.guild_id];
  if (null == everyoneOverwrite) {
    const obj = PermissionUtilsAll;
    everyoneOverwrite = obj.makeEveryoneOverwrite(guild_id.guild_id);
  }
  obj2 = { deny: obj3.remove(obj2.deny, accessPermissions), allow: obj4.remove(obj2.allow, accessPermissions) };
  const merged = Object.assign(everyoneOverwrite);
  obj3 = BigFlagUtilsAll;
  obj4 = BigFlagUtilsAll;
  if (!result) {
    const tmp5Result = BigFlagUtilsAll;
    obj2.deny = tmp5Result.add(obj2.deny, accessPermissions);
  }
  return obj2;
};
export const toggleChannelEveryonePermission = function toggleChannelEveryonePermission(guild_id, deny, arg2) {
  let obj2;
  let obj3;
  let obj4;
  let everyoneOverwrite = guild_id.permissionOverwrites[guild_id.guild_id];
  if (null == everyoneOverwrite) {
    const obj = PermissionUtilsAll;
    everyoneOverwrite = obj.makeEveryoneOverwrite(guild_id.guild_id);
  }
  obj2 = { deny: obj3.remove(obj2.deny, deny), allow: obj4.remove(obj2.allow, deny) };
  const merged = Object.assign(everyoneOverwrite);
  obj3 = BigFlagUtilsAll;
  obj4 = BigFlagUtilsAll;
  if (!arg2) {
    const tmp5Result = BigFlagUtilsAll;
    obj2.deny = tmp5Result.add(obj2.deny, deny);
  }
  const obj6 = ChannelSettingsPermissionsActionCreators;
  obj6.updatePermission(guild_id, obj2.id, obj2.allow, obj2.deny);
};
export const grantUserChannelAccess = function grantUserChannelAccess(id, accessPermissions) {
  let allow;
  let deny;
  let obj4;
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (null == id.permissionOverwrites[currentUser.id]) {
      const obj3 = { id: currentUser.id, type: Server.PermissionOverwriteType.MEMBER, allow: obj4.add(PermissionUtilsAll.NONE, accessPermissions), deny: PermissionUtilsAll.NONE };
      const items = [obj3];
      obj4 = BigFlagUtilsAll;
      const obj5 = ChannelSettingsPermissionsActionCreators;
      return obj5.savePermissionUpdates(id.id, items, true);
    } else {
      ({ allow, deny } = id.permissionOverwrites[currentUser.id]);
      const obj = BigFlagUtilsAll;
      const addResult = obj.add(allow, accessPermissions);
      const obj2 = ChannelSettingsPermissionsActionCreators;
      return obj2.updatePermission(id, id.permissionOverwrites[currentUser.id].id, addResult, deny);
    }
  }
};
export const isPrivateGuildChannel = function isPrivateGuildChannel(channel, arg1) {
  if (null == channel) {
    return false;
  } else {
    let tmp2 = channel.permissionOverwrites[channel.guild_id];
    let tmp3;
    if (arg1 != null) {
      tmp3 = arg1[channel.guild_id];
    }
    if (null != tmp3) {
      tmp2 = arg1[channel.guild_id];
    }
    let hasItem = null != tmp2;
    if (hasItem) {
      const obj = BigFlagUtilsAll;
      hasItem = obj.has(tmp2.deny, channel.accessPermissions);
    }
    return hasItem;
  }
};
export const isPrivateTextChannel = function isPrivateTextChannel(type) {
  let hasItem = null != tmp && type.type === constants2.GUILD_TEXT;
  if (hasItem) {
    const obj = BigFlagUtilsAll;
    hasItem = obj.has(tmp.deny, unpackModuleId.VIEW_CHANNEL);
  }
  return hasItem;
};
export const canCreatePrivateChannel = function canCreatePrivateChannel(first1, canResult, canResult1) {
  let tmp2 = canResult;
  if (first1 !== constants2.GUILD_TEXT) {
    tmp2 = canResult;
    if (first1 !== constants2.GUILD_ANNOUNCEMENT) {
      tmp2 = canResult;
      if (first1 !== constants2.GUILD_APP) {
        let tmp5 = !isGuildVocalChannelType(first1) && first1 !== constants2.GUILD_CATEGORY;
        isGuildVocalChannelType(first1);
        if (!tmp5) {
          tmp5 = canResult && canResult1;
        }
        tmp2 = tmp5;
      }
    }
  }
  return tmp2;
};
export const getPrivateChannelHintText = function getPrivateChannelHintText(first1) {
  if (constants2.GUILD_TEXT !== first1) {
    if (constants2.GUILD_ANNOUNCEMENT !== first1) {
      if (constants2.GUILD_APP !== first1) {
        if (constants2.GUILD_VOICE === first1) {
          const intl2 = intl8.intl;
          return intl2.format(intl8.t.iZAMty, {});
        } else if (constants2.GUILD_CATEGORY === first1) {
          const intl = intl8.intl;
          return intl.format(intl8.t.PhnARV, {});
        } else {
          return null;
        }
      }
    }
  }
  const intl3 = intl8.intl;
  return intl3.format(intl8.t.ZDtA0T, {});
};
export const extractPermissionOverwrites = function extractPermissionOverwrites(arg0, arg1) {
  let closure_0 = arg1;
  const items = [];
  const values = Object.values(arg0);
  const item = values.forEach((row) => {
    row = row.row;
    const tmp = null != row.id && "" !== row.id;
    if (tmp) {
      if (row.rowType === RowType.ROLE) {
        const push2 = items.push;
        const obj2 = ChannelUtils;
        push2(obj2.permissionOverwriteForRole(row.id, closure_0));
      } else if (row.rowType === tmp2.MEMBER) {
        const push = items.push;
        const obj = ChannelUtils;
        push(obj.permissionOverwriteForUser(row.id, closure_0));
      }
    }
  });
  return items;
};