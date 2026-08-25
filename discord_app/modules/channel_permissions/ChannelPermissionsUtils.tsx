// === Module 9144: getRoleRowData ===

// Module 9144 (getRoleRowData)
import set from "set" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import fromStringAll from "fromString" /* 506 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1434 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1955 */;
import compareGuildRoles from "compareGuildRoles" /* 1989 */;
import applyOverwritesAll from "applyOverwrites" /* 4030 */;
import nameFromUserDefault from "nameFromUser" /* 4224 */;
import RowType2 from "RowType" /* 7926 */;
import _updatePermission from "_updatePermission" /* 9145 */;
import GuildRoleRecordTypeTag from "GuildRoleRecordTypeTag" /* 1986 */;
import closure_8 from "trackCommunicationDisabled" /* 1992 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

function getRoleRowData(colorString) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const tmp4 = callback(colorString, constants.ADMINISTRATOR) ? RowType.ADMINISTRATOR : RowType.ROLE;
  const obj = { rowType: tmp4, colorString: null, name: null, id: null, disabled: null, key: null, tags: null };
  colorString = colorString.colorString;
  if (colorString == null) {
    colorString = closure_13;
  }
  obj[1] = colorString;
  ({ name: obj[2], id: obj[3] } = colorString);
  obj[4] = callback(colorString, constants.ADMINISTRATOR) || flag;
  obj[5] = "" + tmp4 + ":" + colorString.id;
  obj[6] = colorString.tags;
  return obj;
}
function sortRoles(guildId, id) {
  let num = 1;
  let num2 = 1;
  if (callback(guildId, constants.ADMINISTRATOR)) {
    num2 = 0;
  }
  if (callback(id, constants.ADMINISTRATOR)) {
    num = 0;
  }
  if (num2 !== num) {
    let diff = num2 - num;
  } else {
    diff = compareGuildRoles.compareGuildRoles(guildId, id);
    const obj = compareGuildRoles;
  }
  return diff;
}
function getMemberRowData(id, id2) {
  const tmp3 = isGuildOwner(id2, id) ? RowType.OWNER : RowType.MEMBER;
  const obj = { rowType: tmp3, name: null, username: null, id: null, avatarURL: null, bot: null, verifiedBot: null, disabled: null, key: null };
  nick = nick.getNick(id2.id, id.id);
  if (nick == null) {
    nick = nameFromUserDefault.getName(id);
    const obj2 = nameFromUserDefault;
  }
  obj[1] = nick;
  obj[2] = nameFromUserDefault.getUserTag(id);
  obj[3] = id.id;
  obj[4] = id.getAvatarURL(id2.id, 24);
  obj[5] = id.bot;
  obj[6] = id.isVerifiedBot();
  obj[7] = isGuildOwner(id2, id);
  obj[8] = "" + tmp3 + ":" + id.id;
  return obj;
}
function sortMembers(rowType, rowType2) {
  if (rowType.rowType !== rowType2.rowType) {
    let diff = rowType.rowType - rowType2.rowType;
  } else {
    const name = rowType.name;
    const name2 = rowType2.name;
    diff = name.toLocaleLowerCase().localeCompare(name2.toLocaleLowerCase());
    const toLocaleLowerCaseResult = name.toLocaleLowerCase();
  }
  return diff;
}
const isGuildVocalChannelType = createChannelRecord.isGuildVocalChannelType;
const isGuildOwner = GuildNSFWContentLevel.isGuildOwner;
({ hasPermission: closure_6, isEveryoneRole: error } = GuildRoleRecordTypeTag);
const RowType = RowType2.RowType;
({ Permissions: unpackModuleId, ChannelTypes: closure_12, DEFAULT_ROLE_COLOR_HEX: map1 } = ME);
const result = set.fileFinishedImporting("modules/channel_permissions/ChannelPermissionsUtils.tsx");

export { getRoleRowData };
export { sortRoles };
export const getNoRolesRow = function getNoRolesRow() {
  let stringResult = arg0;
  if (arg0 === undefined) {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["gnsna/"]);
  }
  const items = [{ rowType: RowType.EMPTY_STATE, colorString: closure_13, name: stringResult, disabled: true, id: "EMPTY_STATE" }];
  return items;
};
export const isEveryoneRoleId = function isEveryoneRoleId(channelId, id) {
  return DISCORD_EPOCHDefault.castGuildIdAsEveryoneGuildRoleId(channelId) === id;
};
export const getRolesRows = function getRolesRows(guild, stateFromStores, channel, permission, filterByQuery) {
  closure_0 = channel;
  closure_1 = permission;
  let fn = filterByQuery;
  if (filterByQuery === undefined) {
    fn = function a() {
      return true;
    };
  }
  const found = stateFromStores.filter((name) => {
    const tmp = closure_1_6(name, closure_1_11.ADMINISTRATOR);
    let tmp2 = !tmp;
    if (tmp) {
      if (tmp2) {
        tmp2 = !closure_1_7(name);
      }
      if (tmp2) {
        tmp2 = fn(name.name);
      }
      return tmp2;
    } else {
      const id = name.id;
      let id2 = closure_1_9.getCurrentUser();
      let flag = false;
      if (null != id2) {
        if (null != tmp3) {
          let tmp8 = null == tmp7;
          if (!tmp8) {
            tmp8 = !fn(closure_1_3[9]).has(tmp7.allow, tmp4);
            const obj = fn(closure_1_3[9]);
          }
          flag = tmp8;
        }
      }
      id2 = id2.id;
      flag = id2 !== id;
      tmp4 = closure_1;
    }
  });
  const sorted = found.sort(sortRoles);
  return sorted.map((arg0) => callback(arg0));
};
export const getRolesRowsWithPermissionDisabled = function getRolesRowsWithPermissionDisabled(guild, stateFromStores, channel, permission, filterByQuery) {
  closure_0 = channel;
  closure_1 = permission;
  let fn = filterByQuery;
  if (filterByQuery === undefined) {
    fn = function u() {
      return true;
    };
  }
  const found = stateFromStores.filter((name) => {
    const tmp = closure_1_6(name, closure_1_11.ADMINISTRATOR);
    let tmp2 = !tmp;
    if (tmp) {
      if (tmp2) {
        tmp2 = !closure_1_7(name);
      }
      if (tmp2) {
        tmp2 = fn(name.name);
      }
      return tmp2;
    } else {
      const id = name.id;
      let id2 = closure_1_9.getCurrentUser();
      let flag = false;
      if (null != id2) {
        if (null != tmp3) {
          let tmp8 = null == tmp7;
          if (!tmp8) {
            tmp8 = !fn(closure_1_3[9]).has(tmp7.allow, tmp4);
            const obj = fn(closure_1_3[9]);
          }
          flag = tmp8;
        }
      }
      id2 = id2.id;
      flag = id2 !== id;
      tmp4 = closure_1;
    }
  });
  const sorted = found.sort(sortRoles);
  return sorted.map((arg0) => closure_1_14(arg0, closure_1_6(arg0, closure_1)));
};
export const getExistingRoles = function getExistingRoles(guild, sortedRoles, channel, accessPermissions) {
  closure_0 = channel;
  closure_1 = accessPermissions;
  closure_2 = arg4;
  return sortedRoles.filter((id) => {
    let tmp = closure_1_6(id, closure_1_11.ADMINISTRATOR);
    if (!tmp) {
      id = id.id;
      const currentUser = closure_1_9.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == tmp2) {
          flag = currentUser.id !== id;
        } else {
          let tmp8 = tmp2.permissionOverwrites[id];
          let tmp9;
          if (tmp4 != null) {
            tmp9 = tmp4[id];
          }
          if (null != tmp9) {
            tmp8 = tmp4[id];
          }
          let tmp10 = null == tmp8;
          if (!tmp10) {
            tmp10 = !callback(closure_1_3[9]).has(tmp8.allow, tmp3);
            const obj = callback(closure_1_3[9]);
          }
          flag = tmp10;
        }
      }
      let tmp13 = !flag;
      if (!flag) {
        tmp13 = !closure_1_7(id);
      }
      tmp = tmp13;
      tmp3 = closure_1;
    }
    return tmp;
  });
};
export const getAllExistingRolesWithPermission = function getAllExistingRolesWithPermission(arg0, arr) {
  closure_0 = arg2;
  closure_1 = arg3;
  closure_2 = arg4;
  return arr.filter((id) => {
    let hasItem = closure_1_6(id, closure_1_11.ADMINISTRATOR);
    if (!hasItem) {
      id = id.id;
      const currentUser = closure_1_9.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == tmp2) {
          flag = currentUser.id !== id;
        } else {
          let tmp8 = tmp2.permissionOverwrites[id];
          let tmp9;
          if (tmp4 != null) {
            tmp9 = tmp4[id];
          }
          if (null != tmp9) {
            tmp8 = tmp4[id];
          }
          let tmp10 = null == tmp8;
          if (!tmp10) {
            tmp10 = !callback(closure_1_3[9]).has(tmp8.allow, tmp3);
            const obj = callback(closure_1_3[9]);
          }
          flag = tmp10;
        }
      }
      let tmp13 = !flag;
      if (!flag) {
        tmp13 = !closure_1_7(id);
      }
      hasItem = tmp13;
      tmp3 = closure_1;
    }
    if (!hasItem) {
      const obj2 = callback(closure_1_3[9]);
      let allow;
      if (permissionOverwrites.permissionOverwrites[id.id] != null) {
        allow = tmp18.allow;
      }
      hasItem = obj2.has(callback(closure_1_3[9]).combine(id.permissions, allow), closure_1);
      const obj3 = callback(closure_1_3[9]);
    }
    return hasItem;
  });
};
export const getExistingRolesRows = function getExistingRolesRows(guild, sortedGuildRoles, channel, accessPermissions) {
  const _require = channel;
  closure_1 = accessPermissions;
  closure_2 = arg4;
  const found = sortedGuildRoles.filter((id) => {
    let tmp = closure_1_6(id, closure_1_11.ADMINISTRATOR);
    if (!tmp) {
      id = id.id;
      const currentUser = closure_1_9.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == tmp2) {
          flag = currentUser.id !== id;
        } else {
          let tmp8 = tmp2.permissionOverwrites[id];
          let tmp9;
          if (tmp4 != null) {
            tmp9 = tmp4[id];
          }
          if (null != tmp9) {
            tmp8 = tmp4[id];
          }
          let tmp10 = null == tmp8;
          if (!tmp10) {
            tmp10 = !callback(closure_1_3[9]).has(tmp8.allow, tmp3);
            const obj = callback(closure_1_3[9]);
          }
          flag = tmp10;
        }
      }
      let tmp13 = !flag;
      if (!flag) {
        tmp13 = !closure_1_7(id);
      }
      tmp = tmp13;
      tmp3 = closure_1;
    }
    return tmp;
  });
  const sorted = found.sort(sortRoles);
  let mapped = sorted.map((arg0) => callback2(arg0));
  if (0 === mapped.length) {
    const intl2 = _require(1236).intl;
    let stringResult = intl2.string(_require(1236).t.nZfHsf);
    if (stringResult === undefined) {
      const intl = tmp4(1236).intl;
      stringResult = intl.string(tmp4(1236).t["gnsna/"]);
    }
    let obj = { rowType: null, colorString: null, name: null, disabled: true, id: "EMPTY_STATE" };
    obj[0] = RowType.EMPTY_STATE;
    obj[1] = closure_13;
    obj[2] = stringResult;
    const items = [obj];
    mapped = items;
  }
  return mapped;
};
export const getExistingRolesRowWithPermissionDisabled = function getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, MODERATE_STAGE_CHANNEL_PERMISSIONS) {
  let _require = MODERATE_STAGE_CHANNEL_PERMISSIONS;
  _require = channel;
  closure_1 = MODERATE_STAGE_CHANNEL_PERMISSIONS;
  closure_2 = arg4;
  const found = sortedGuildRoles.filter((id) => {
    let hasItem = closure_1_6(id, closure_1_11.ADMINISTRATOR);
    if (!hasItem) {
      id = id.id;
      const currentUser = closure_1_9.getCurrentUser();
      let flag = false;
      if (null != currentUser) {
        if (null == tmp2) {
          flag = currentUser.id !== id;
        } else {
          let tmp8 = tmp2.permissionOverwrites[id];
          let tmp9;
          if (tmp4 != null) {
            tmp9 = tmp4[id];
          }
          if (null != tmp9) {
            tmp8 = tmp4[id];
          }
          let tmp10 = null == tmp8;
          if (!tmp10) {
            tmp10 = !callback(closure_1_3[9]).has(tmp8.allow, tmp3);
            const obj = callback(closure_1_3[9]);
          }
          flag = tmp10;
        }
      }
      let tmp13 = !flag;
      if (!flag) {
        tmp13 = !closure_1_7(id);
      }
      hasItem = tmp13;
      tmp3 = closure_1;
    }
    if (!hasItem) {
      const obj2 = callback(closure_1_3[9]);
      let allow;
      if (permissionOverwrites.permissionOverwrites[id.id] != null) {
        allow = tmp18.allow;
      }
      hasItem = obj2.has(callback(closure_1_3[9]).combine(id.permissions, allow), closure_1);
      const obj3 = callback(closure_1_3[9]);
    }
    return hasItem;
  });
  const sorted = found.sort(sortRoles);
  let mapped = sorted.map((arg0) => closure_1_14(arg0, closure_1_6(arg0, closure_0)));
  if (0 === mapped.length) {
    const intl2 = _require(1236).intl;
    let stringResult = intl2.string(_require(1236).t.nZfHsf);
    if (stringResult === undefined) {
      const intl = tmp4(1236).intl;
      stringResult = intl.string(tmp4(1236).t["gnsna/"]);
    }
    let obj = { rowType: null, colorString: null, name: null, disabled: true, id: "EMPTY_STATE" };
    obj[0] = RowType.EMPTY_STATE;
    obj[1] = closure_13;
    obj[2] = stringResult;
    const items = [obj];
    mapped = items;
  }
  return mapped;
};
export const getMembersRows = function getMembersRows(stateFromStoresArray, channel, guild, permission, filterByQuery) {
  const _require = channel;
  closure_1 = guild;
  closure_2 = permission;
  let fn = filterByQuery;
  if (filterByQuery === undefined) {
    fn = function a() {
      return true;
    };
  }
  const mapped = stateFromStoresArray.map(currentUser.getUser);
  const found = mapped.filter(_require(1370).isNotNullish);
  const found1 = found.filter((id) => {
    const tmp2 = closure_1_5(guild, id);
    let tmp3 = !tmp2;
    if (tmp2) {
      if (tmp3) {
        let nick = closure_1_8.getNick(guild.id, id.id);
        if (nick == null) {
          nick = guild(fn[11]).getName(id);
          const obj2 = guild(fn[11]);
        }
        tmp3 = fn(nick) || fn(id.username) || fn(id.discriminator);
        const tmp19 = fn(nick) || fn(id.username) || fn(id.discriminator);
      }
      return tmp3;
    } else {
      id = id.id;
      let id2 = closure_1_9.getCurrentUser();
      let flag = false;
      if (null != id2) {
        if (null != tmp4) {
          let tmp9 = null == tmp8;
          if (!tmp9) {
            tmp9 = !permission(fn[9]).has(tmp8.allow, tmp5);
            const obj = permission(fn[9]);
          }
          flag = tmp9;
        }
      }
      id2 = id2.id;
      flag = id2 !== id;
      tmp5 = permission;
    }
  });
  const mapped1 = found1.map((arg0) => closure_1_16(arg0, closure_1));
  return mapped1.sort(sortMembers);
};
export const getExistingMembers = function getExistingMembers(memberIds, channel, guild, accessPermissions) {
  const _require = channel;
  closure_1 = guild;
  closure_2 = accessPermissions;
  dependencyMap = arg4;
  const mapped = memberIds.map(currentUser.getUser);
  const found = mapped.filter(_require(1370).isNotNullish);
  return found.filter((id) => {
    id = id.id;
    const currentUser = closure_1_9.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (null == tmp) {
        flag = currentUser.id !== id;
      } else {
        let tmp5 = tmp.permissionOverwrites[id];
        let tmp6;
        if (tmp3 != null) {
          tmp6 = tmp3[id];
        }
        if (null != tmp6) {
          tmp5 = tmp3[id];
        }
        let tmp7 = null == tmp5;
        if (!tmp7) {
          tmp7 = !accessPermissions(table[9]).has(tmp5.allow, accessPermissions);
          const obj = accessPermissions(table[9]);
        }
        flag = tmp7;
      }
    }
    let tmp10 = !flag;
    if (flag) {
      tmp10 = closure_1_5(closure_1, id);
    }
    return tmp10;
  });
};
export const getExistingMembersRows = function getExistingMembersRows(memberIds, channel, guild, accessPermissions) {
  let _require = guild;
  _require = channel;
  closure_1 = guild;
  closure_2 = accessPermissions;
  dependencyMap = arg4;
  const mapped = memberIds.map(currentUser.getUser);
  const found = mapped.filter(_require(1370).isNotNullish);
  const found1 = found.filter((id) => {
    id = id.id;
    const currentUser = closure_1_9.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (null == tmp) {
        flag = currentUser.id !== id;
      } else {
        let tmp5 = tmp.permissionOverwrites[id];
        let tmp6;
        if (tmp3 != null) {
          tmp6 = tmp3[id];
        }
        if (null != tmp6) {
          tmp5 = tmp3[id];
        }
        let tmp7 = null == tmp5;
        if (!tmp7) {
          tmp7 = !accessPermissions(table[9]).has(tmp5.allow, accessPermissions);
          const obj = accessPermissions(table[9]);
        }
        flag = tmp7;
      }
    }
    let tmp10 = !flag;
    if (flag) {
      tmp10 = closure_1_5(closure_1, id);
    }
    return tmp10;
  });
  const mapped1 = found1.map((arg0) => closure_1_16(arg0, closure_0));
  return mapped1.sort(sortMembers);
};
export const getRowTypeLabel = function getRowTypeLabel(rowType) {
  if (RowType.ROLE === rowType) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.ZxoFOG);
  } else if (tmp.OWNER === rowType) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.NWhYJg);
  } else if (tmp.ADMINISTRATOR === rowType) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t["dwlcc+"]);
  } else if (tmp.MEMBER === rowType) {
    let stringResult = null;
    if (arg1) {
      const intl3 = getSystemLocale.intl;
      stringResult = intl3.string(getSystemLocale.t.UAJxZi);
    }
    return stringResult;
  } else if (tmp.USER === rowType) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.KD6OJJ);
  } else if (tmp.GUILD === rowType) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["5qyruI"]);
  } else if (tmp.EMPTY_STATE === rowType) {
    return null;
  }
};
export const getRemoveTooltipHint = function getRemoveTooltipHint(arg0) {
  if (RowType.ROLE === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t["Gzc/a8"]);
  } else if (tmp.OWNER === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.icuNBM);
  } else if (tmp.ADMINISTRATOR === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.eTmN5a);
  } else if (tmp.MEMBER === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Gzc/a8"]);
  } else {
    const EMPTY_STATE = tmp.EMPTY_STATE;
    return null;
  }
};
export const flipEveryonePermission = function flipEveryonePermission(closure_1_0, accessPermissions, result) {
  let everyoneOverwrite = closure_1_0.permissionOverwrites[closure_1_0.guild_id];
  if (null == everyoneOverwrite) {
    let obj = applyOverwritesAll;
    everyoneOverwrite = obj.makeEveryoneOverwrite(closure_1_0.guild_id);
  }
  obj = {};
  const merged = Object.assign(everyoneOverwrite);
  obj.deny = fromStringAll.remove(obj.deny, accessPermissions);
  const obj3 = fromStringAll;
  const tmp5 = importAll;
  obj.allow = fromStringAll.remove(obj.allow, accessPermissions);
  if (!result) {
    obj.deny = fromStringAll.add(obj.deny, accessPermissions);
    const tmp5Result = fromStringAll;
  }
  return obj;
};
export const toggleChannelEveryonePermission = function toggleChannelEveryonePermission(guild_id) {
  let everyoneOverwrite = guild_id.permissionOverwrites[guild_id.guild_id];
  if (null == everyoneOverwrite) {
    let obj = applyOverwritesAll;
    everyoneOverwrite = obj.makeEveryoneOverwrite(guild_id.guild_id);
  }
  obj = {};
  const merged = Object.assign(everyoneOverwrite);
  obj.deny = fromStringAll.remove(obj.deny, arg1);
  const obj3 = fromStringAll;
  const tmp5 = importAll;
  obj.allow = fromStringAll.remove(obj.allow, arg1);
  if (!arg2) {
    obj.deny = fromStringAll.add(obj.deny, arg1);
    const tmp5Result = fromStringAll;
  }
  const obj4 = fromStringAll;
  _updatePermission.updatePermission(guild_id, obj.id, obj.allow, obj.deny);
};
export const grantUserChannelAccess = function grantUserChannelAccess(closure_1_0, accessPermissions) {
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (null == closure_1_0.permissionOverwrites[currentUser.id]) {
      let obj = { id: null, type: null, allow: null, deny: null };
      obj[0] = currentUser.id;
      obj[1] = PermissionOverwriteType.PermissionOverwriteType.MEMBER;
      obj[2] = fromStringAll.add(applyOverwritesAll.NONE, accessPermissions);
      obj[3] = applyOverwritesAll.NONE;
      const obj4 = fromStringAll;
      const items = [obj];
      return _updatePermission.savePermissionUpdates(closure_1_0.id, items, true);
    } else {
      ({ allow, deny } = tmp4);
      obj = fromStringAll;
      const obj2 = _updatePermission;
      return obj2.updatePermission(closure_1_0, tmp4.id, obj.add(allow, accessPermissions), deny);
    }
  }
};
export const isPrivateGuildChannel = function isPrivateGuildChannel(channel) {
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
      hasItem = fromStringAll.has(tmp2.deny, channel.accessPermissions);
      const obj = fromStringAll;
    }
    return hasItem;
  }
};
export const isPrivateTextChannel = function isPrivateTextChannel(type) {
  let hasItem = null != tmp;
  if (hasItem) {
    hasItem = type.type === constants2.GUILD_TEXT;
  }
  if (hasItem) {
    hasItem = fromStringAll.has(tmp.deny, constants.VIEW_CHANNEL);
    const obj = fromStringAll;
  }
  return hasItem;
};
export const canCreatePrivateChannel = function canCreatePrivateChannel(closure_10, canResult, canResult1) {
  let tmp2 = canResult;
  if (closure_10 !== constants2.GUILD_TEXT) {
    tmp2 = canResult;
    if (closure_10 !== tmp.GUILD_ANNOUNCEMENT) {
      const tmp4 = isGuildVocalChannelType(closure_10);
      let tmp5 = !tmp4;
      if (!tmp4) {
        tmp5 = closure_10 !== tmp.GUILD_CATEGORY;
      }
      if (!tmp5) {
        let tmp6 = canResult;
        if (canResult) {
          tmp6 = canResult1;
        }
        tmp5 = tmp6;
      }
      tmp2 = tmp5;
    }
  }
  return tmp2;
};
export const getPrivateChannelHintText = function getPrivateChannelHintText(first1) {
  if (constants2.GUILD_TEXT !== first1) {
    if (tmp.GUILD_ANNOUNCEMENT !== first1) {
      if (tmp.GUILD_VOICE === first1) {
        const intl2 = getSystemLocale.intl;
        return intl2.format(getSystemLocale.t.iZAMty, {});
      } else if (tmp.GUILD_CATEGORY === first1) {
        const intl = getSystemLocale.intl;
        return intl.format(getSystemLocale.t.PhnARV, {});
      } else {
        return null;
      }
    }
  }
  const intl3 = getSystemLocale.intl;
  return intl3.format(getSystemLocale.t.ZDtA0T, {});
};
export const extractPermissionOverwrites = function extractPermissionOverwrites(arg0, arg1) {
  closure_0 = arg1;
  const items = [];
  const values = Object.values(arg0);
  const item = values.forEach((row) => {
    row = row.row;
    let tmp = null != row.id;
    if (tmp) {
      tmp = "" !== row.id;
    }
    if (tmp) {
      if (row.rowType === closure_1_10.ROLE) {
        items.push(callback(closure_1_3[16]).permissionOverwriteForRole(row.id, callback));
        const obj2 = callback(closure_1_3[16]);
      } else if (row.rowType === tmp2.MEMBER) {
        items.push(callback(closure_1_3[16]).permissionOverwriteForUser(row.id, callback));
        const obj = callback(closure_1_3[16]);
      }
    }
  });
  return items;
};