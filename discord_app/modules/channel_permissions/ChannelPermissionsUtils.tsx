// === Module 9738: ChannelPermissionsUtils ===

// Module 9738 (ChannelPermissionsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import util from "util" /* 1114 */;
import Server from "Server" /* 1894 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import GuildRecord from "GuildRecord" /* 1975 */;
import GuildRoleUtils from "GuildRoleUtils" /* 2019 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 8401 */;
import ChannelSettingsPermissionsActionCreators from "ChannelSettingsPermissionsActionCreators" /* 9739 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2016 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserStore from "UserStore" /* 1371 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function getRoleRowData(colorString, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const tmp4 = timestampProducer(colorString, constants.ADMINISTRATOR) ? RowType.ADMINISTRATOR : RowType.ROLE;
  const obj = { rowType: tmp4, colorString: null, name: null, id: null, disabled: null, key: null, tags: null };
  colorString = colorString.colorString;
  if (colorString == null) {
    colorString = closure_1_13;
  }
  obj.colorString = colorString;
  ({ name: obj.name, id: obj.id } = colorString);
  obj.disabled = timestampProducer(colorString, constants.ADMINISTRATOR) || flag;
  obj.key = "" + tmp4 + ":" + colorString.id;
  obj.tags = colorString.tags;
  return obj;
}
function sortRoles(guildId, id) {
  let num = 1;
  let num2 = 1;
  if (timestampProducer(guildId, constants.ADMINISTRATOR)) {
    num2 = 0;
  }
  if (timestampProducer(id, constants.ADMINISTRATOR)) {
    num = 0;
  }
  if (num2 !== num) {
    let diff = num2 - num;
  } else {
    diff = GuildRoleUtils.compareGuildRoles(guildId, id);
  }
  return diff;
}
function getMemberRowData(id, id2, appChannelBotUserId) {
  if (appChannelBotUserId === id.id) {
    let MEMBER = RowType.APP_CHANNEL_APP;
    let tmp3 = RowType;
  } else if (isGuildOwner(id2, id)) {
    MEMBER = tmp2.OWNER;
    tmp3 = tmp2;
  } else {
    MEMBER = tmp2.MEMBER;
    tmp3 = tmp2;
  }
  const obj = { rowType: MEMBER, name: null, username: null, id: null, avatarURL: null, bot: null, verifiedBot: null, disabled: null, key: null };
  let nick = GuildMemberStore.getNick(id2.id, id.id);
  if (nick == null) {
    nick = UserUtilsDefault.getName(id);
  }
  obj.name = nick;
  obj.username = UserUtilsDefault.getUserTag(id);
  obj.id = id.id;
  obj.avatarURL = id.getAvatarURL(id2.id, 24);
  obj.bot = id.bot;
  obj.verifiedBot = id.isVerifiedBot();
  obj.disabled = isGuildOwner(id2, id) || MEMBER === tmp3.APP_CHANNEL_APP;
  obj.key = "" + MEMBER + ":" + id.id;
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
const isGuildVocalChannelType = ChannelRecord.isGuildVocalChannelType;
const isGuildOwner = GuildRecord.isGuildOwner;
({ hasPermission: metroRequire, isEveryoneRole: closure_7 } = GuildRoleRecord);
const RowType = ChannelPermissionsConstants.RowType;
({ Permissions: closure_11, ChannelTypes: closure_12, DEFAULT_ROLE_COLOR_HEX: map1 } = Constants);
const result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionsUtils.tsx");

export { getRoleRowData };
export { sortRoles };
export const getNoRolesRow = function getNoRolesRow() {
  let stringResult = arg0;
  if (arg0 === undefined) {
    const intl = util.intl;
    stringResult = intl.string(util.t["gnsna/"]);
  }
  const items = [{ rowType: RowType.EMPTY_STATE, colorString, name: stringResult, disabled: true, id: "EMPTY_STATE" }];
  return items;
};
export const isEveryoneRoleId = function isEveryoneRoleId(guildId, id) {
  return SnowflakeUtilsDefault.castGuildIdAsEveryoneGuildRoleId(guildId) === id;
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
    const tmp = timestampProducer(name, constants.ADMINISTRATOR);
    let tmp2 = !tmp;
    if (tmp) {
      if (tmp2) {
        tmp2 = !React5(name);
      }
      if (tmp2) {
        tmp2 = fn(name.name);
      }
      return tmp2;
    } else {
      const id = name.id;
      let id2 = UserStore.getCurrentUser();
      let flag = false;
      if (null != id2) {
        if (null != tmp3) {
          let tmp8 = null == tmp7;
          if (!tmp8) {
            tmp8 = !BigFlagUtilsAll.has(tmp7.allow, tmp4);
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
  return sorted.map((item) => getRoleRowData(item));
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
    const tmp = timestampProducer(name, constants.ADMINISTRATOR);
    let tmp2 = !tmp;
    if (tmp) {
      if (tmp2) {
        tmp2 = !React5(name);
      }
      if (tmp2) {
        tmp2 = fn(name.name);
      }
      return tmp2;
    } else {
      const id = name.id;
      let id2 = UserStore.getCurrentUser();
      let flag = false;
      if (null != id2) {
        if (null != tmp3) {
          let tmp8 = null == tmp7;
          if (!tmp8) {
            tmp8 = !BigFlagUtilsAll.has(tmp7.allow, tmp4);
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
  return sorted.map((item) => getRoleRowData(item, timestampProducer(item, closure_1)));
};
export const getExistingRoles = function getExistingRoles(guild, sortedRoles, channel, accessPermissions, arg4) {
  closure_0 = channel;
  closure_1 = accessPermissions;
  closure_2 = arg4;
  return sortedRoles.filter((id) => {
    let tmp = timestampProducer(id, constants.ADMINISTRATOR);
    if (!tmp) {
      id = id.id;
      const currentUser = UserStore.getCurrentUser();
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
            tmp10 = !BigFlagUtilsAll.has(tmp8.allow, tmp3);
          }
          flag = tmp10;
        }
      }
      let tmp13 = !flag;
      if (!flag) {
        tmp13 = !React5(id);
      }
      tmp = tmp13;
      tmp3 = closure_1;
    }
    return tmp;
  });
};
export const getAllExistingRolesWithPermission = function getAllExistingRolesWithPermission(arg0, arr, arg2, arg3, arg4) {
  closure_0 = arg2;
  closure_1 = arg3;
  closure_2 = arg4;
  return arr.filter((id) => {
    let hasItem = timestampProducer(id, constants.ADMINISTRATOR);
    if (!hasItem) {
      id = id.id;
      const currentUser = UserStore.getCurrentUser();
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
            tmp10 = !BigFlagUtilsAll.has(tmp8.allow, tmp3);
          }
          flag = tmp10;
        }
      }
      let tmp13 = !flag;
      if (!flag) {
        tmp13 = !React5(id);
      }
      hasItem = tmp13;
      tmp3 = importDefault;
    }
    if (!hasItem) {
      const obj2 = BigFlagUtilsAll;
      let allow;
      if (MODERATE_STAGE_CHANNEL_PERMISSIONS.permissionOverwrites[id.id] != null) {
        allow = tmp18.allow;
      }
      hasItem = obj2.has(BigFlagUtilsAll.combine(id.permissions, allow), importDefault);
    }
    return hasItem;
  });
};
export const getExistingRolesRows = function getExistingRolesRows(guild, sortedGuildRoles, channel, accessPermissions, arg4) {
  _require = channel;
  closure_1 = accessPermissions;
  closure_2 = arg4;
  const found = sortedGuildRoles.filter((id) => {
    let tmp = timestampProducer(id, constants.ADMINISTRATOR);
    if (!tmp) {
      id = id.id;
      const currentUser = UserStore.getCurrentUser();
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
            tmp10 = !BigFlagUtilsAll.has(tmp8.allow, tmp3);
          }
          flag = tmp10;
        }
      }
      let tmp13 = !flag;
      if (!flag) {
        tmp13 = !React5(id);
      }
      tmp = tmp13;
      tmp3 = closure_1;
    }
    return tmp;
  });
  const sorted = found.sort(sortRoles);
  let mapped = sorted.map((item) => getRoleRowData(item));
  if (0 === mapped.length) {
    const intl2 = require("util").intl;
    let stringResult = intl2.string(require("util").t.nZfHsf);
    if (stringResult === undefined) {
      const intl = tmp4(1114).intl;
      stringResult = intl.string(tmp4(1114).t["gnsna/"]);
    }
    let obj = { rowType: RowType.EMPTY_STATE, colorString, name: stringResult, disabled: true, id: "EMPTY_STATE" };
    const items = [obj];
    mapped = items;
  }
  return mapped;
};
export const getExistingRolesRowWithPermissionDisabled = function getExistingRolesRowWithPermissionDisabled(guild, sortedGuildRoles, channel, MODERATE_STAGE_CHANNEL_PERMISSIONS, arg4) {
  _require = MODERATE_STAGE_CHANNEL_PERMISSIONS;
  closure_129_0 = channel;
  closure_129_1 = MODERATE_STAGE_CHANNEL_PERMISSIONS;
  closure_129_2 = arg4;
  const found = sortedGuildRoles.filter((id) => {
    let hasItem = timestampProducer(id, constants.ADMINISTRATOR);
    if (!hasItem) {
      id = id.id;
      const currentUser = UserStore.getCurrentUser();
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
            tmp10 = !BigFlagUtilsAll.has(tmp8.allow, tmp3);
          }
          flag = tmp10;
        }
      }
      let tmp13 = !flag;
      if (!flag) {
        tmp13 = !React5(id);
      }
      hasItem = tmp13;
      tmp3 = importDefault;
    }
    if (!hasItem) {
      const obj2 = BigFlagUtilsAll;
      let allow;
      if (MODERATE_STAGE_CHANNEL_PERMISSIONS.permissionOverwrites[id.id] != null) {
        allow = tmp18.allow;
      }
      hasItem = obj2.has(BigFlagUtilsAll.combine(id.permissions, allow), importDefault);
    }
    return hasItem;
  });
  const sorted = found.sort(sortRoles);
  let mapped = sorted.map((item) => getRoleRowData(item, timestampProducer(item, closure_0)));
  if (0 === mapped.length) {
    const intl2 = require("util").intl;
    let stringResult = intl2.string(require("util").t.nZfHsf);
    if (stringResult === undefined) {
      const intl = tmp4(1114).intl;
      stringResult = intl.string(tmp4(1114).t["gnsna/"]);
    }
    let obj = { rowType: RowType.EMPTY_STATE, colorString, name: stringResult, disabled: true, id: "EMPTY_STATE" };
    const items = [obj];
    mapped = items;
  }
  return mapped;
};
export const getMembersRows = function getMembersRows(stateFromStoresArray, channel, guild, permission, arg4) {
  _require = channel;
  closure_2 = permission;
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
    const tmp2 = isGuildOwner(guild, id);
    let tmp3 = !tmp2;
    if (tmp2) {
      if (tmp3) {
        let nick = GuildMemberStore.getNick(guild.id, id.id);
        if (nick == null) {
          nick = UserUtilsDefault.getName(id);
        }
        tmp3 = fn(nick) || fn(id.username) || fn(id.discriminator);
        const tmp19 = fn(nick) || fn(id.username) || fn(id.discriminator);
      }
      return tmp3;
    } else {
      id = id.id;
      let id2 = UserStore.getCurrentUser();
      let flag = false;
      if (null != id2) {
        if (null != tmp4) {
          let tmp9 = null == tmp8;
          if (!tmp9) {
            tmp9 = !BigFlagUtilsAll.has(tmp8.allow, tmp5);
          }
          flag = tmp9;
        }
      }
      id2 = id2.id;
      flag = id2 !== id;
      tmp5 = closure_2;
    }
  });
  const mapped1 = found1.map((item) => getMemberRowData(item, closure_1, appChannelBotUserId));
  return mapped1.sort(sortMembers);
};
export const getExistingMembers = function getExistingMembers(memberIds, channel, guild, accessPermissions, arg4) {
  _require = channel;
  closure_1 = guild;
  closure_2 = accessPermissions;
  dependencyMap = arg4;
  const mapped = memberIds.map(UserStore.getUser);
  const found = mapped.filter(require("GlobalUtils").isNotNullish);
  return found.filter((id) => {
    id = id.id;
    const currentUser = UserStore.getCurrentUser();
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
          tmp7 = !BigFlagUtilsAll.has(tmp5.allow, closure_1_2);
        }
        flag = tmp7;
      }
    }
    let tmp10 = !flag;
    if (flag) {
      tmp10 = isGuildOwner(appChannelBotUserId, id);
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
  closure_129_0 = channel;
  closure_129_1 = guild;
  closure_129_2 = accessPermissions;
  const permissionUpdates = obj.permissionUpdates;
  const mapped = memberIds.map(UserStore.getUser);
  const found = mapped.filter(require("GlobalUtils").isNotNullish);
  const found1 = found.filter((id) => {
    id = id.id;
    const currentUser = UserStore.getCurrentUser();
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
          tmp7 = !BigFlagUtilsAll.has(tmp5.allow, closure_1_2);
        }
        flag = tmp7;
      }
    }
    let tmp10 = !flag;
    if (flag) {
      tmp10 = isGuildOwner(appChannelBotUserId, id);
    }
    return tmp10;
  });
  const mapped1 = found1.map((item) => getMemberRowData(item, closure_0, appChannelBotUserId));
  return mapped1.sort(sortMembers);
};
export const getRowTypeLabel = function getRowTypeLabel(rowType, arg1) {
  if (RowType.ROLE === rowType) {
    const intl7 = util.intl;
    return intl7.string(util.t.ZxoFOG);
  } else if (tmp.OWNER === rowType) {
    const intl6 = util.intl;
    return intl6.string(util.t.NWhYJg);
  } else if (tmp.ADMINISTRATOR === rowType) {
    const intl5 = util.intl;
    return intl5.string(util.t["dwlcc+"]);
  } else if (tmp.MEMBER === rowType) {
    let stringResult = null;
    if (arg1) {
      const intl4 = util.intl;
      stringResult = intl4.string(util.t.UAJxZi);
    }
    return stringResult;
  } else if (tmp.APP_CHANNEL_APP === rowType) {
    const intl3 = util.intl;
    return intl3.string(util.t["z2/ML4"]);
  } else if (tmp.USER === rowType) {
    const intl2 = util.intl;
    return intl2.string(util.t.KD6OJJ);
  } else if (tmp.GUILD === rowType) {
    const intl = util.intl;
    return intl.string(util.t["5qyruI"]);
  } else if (tmp.EMPTY_STATE === rowType) {
    return null;
  }
};
export const getRemoveTooltipHint = function getRemoveTooltipHint(arg0) {
  if (RowType.ROLE === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["Gzc/a8"]);
  } else if (tmp.OWNER === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.icuNBM);
  } else if (tmp.ADMINISTRATOR === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.eTmN5a);
  } else if (tmp.MEMBER === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["Gzc/a8"]);
  } else if (tmp.APP_CHANNEL_APP === arg0) {
    const intl = util.intl;
    return intl.string(util.t.v05vEp);
  } else {
    const EMPTY_STATE = tmp.EMPTY_STATE;
    return null;
  }
};
export const flipEveryonePermission = function flipEveryonePermission(guild_id, accessPermissions, result) {
  let everyoneOverwrite = guild_id.permissionOverwrites[guild_id.guild_id];
  if (null == everyoneOverwrite) {
    let obj = PermissionUtilsAll;
    everyoneOverwrite = obj.makeEveryoneOverwrite(guild_id.guild_id);
  }
  obj = {};
  const merged = Object.assign(everyoneOverwrite);
  obj.deny = BigFlagUtilsAll.remove(obj.deny, accessPermissions);
  obj.allow = BigFlagUtilsAll.remove(obj.allow, accessPermissions);
  if (!result) {
    obj.deny = BigFlagUtilsAll.add(obj.deny, accessPermissions);
    const tmp5Result = BigFlagUtilsAll;
  }
  return obj;
};
export const toggleChannelEveryonePermission = function toggleChannelEveryonePermission(guild_id, arg1, arg2) {
  let everyoneOverwrite = guild_id.permissionOverwrites[guild_id.guild_id];
  if (null == everyoneOverwrite) {
    let obj = PermissionUtilsAll;
    everyoneOverwrite = obj.makeEveryoneOverwrite(guild_id.guild_id);
  }
  obj = {};
  const merged = Object.assign(everyoneOverwrite);
  obj.deny = BigFlagUtilsAll.remove(obj.deny, arg1);
  obj.allow = BigFlagUtilsAll.remove(obj.allow, arg1);
  if (!arg2) {
    obj.deny = BigFlagUtilsAll.add(obj.deny, arg1);
    const tmp5Result = BigFlagUtilsAll;
  }
  ChannelSettingsPermissionsActionCreators.updatePermission(guild_id, obj.id, obj.allow, obj.deny);
};
export const grantUserChannelAccess = function grantUserChannelAccess(id, accessPermissions) {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (null == id.permissionOverwrites[currentUser.id]) {
      let obj = { id: currentUser.id, type: Server.PermissionOverwriteType.MEMBER, allow: BigFlagUtilsAll.add(PermissionUtilsAll.NONE, accessPermissions), deny: PermissionUtilsAll.NONE };
      const items = [obj];
      return ChannelSettingsPermissionsActionCreators.savePermissionUpdates(id.id, items, true);
    } else {
      ({ allow, deny } = tmp4);
      obj = BigFlagUtilsAll;
      const obj2 = ChannelSettingsPermissionsActionCreators;
      return obj2.updatePermission(id, tmp4.id, obj.add(allow, accessPermissions), deny);
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
      hasItem = BigFlagUtilsAll.has(tmp2.deny, channel.accessPermissions);
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
    hasItem = BigFlagUtilsAll.has(tmp.deny, constants.VIEW_CHANNEL);
  }
  return hasItem;
};
export const canCreatePrivateChannel = function canCreatePrivateChannel(first1, canResult, canResult1) {
  let tmp2 = canResult;
  if (first1 !== constants2.GUILD_TEXT) {
    tmp2 = canResult;
    if (first1 !== tmp.GUILD_ANNOUNCEMENT) {
      tmp2 = canResult;
      if (first1 !== tmp.GUILD_APP) {
        const tmp4 = isGuildVocalChannelType(first1);
        let tmp5 = !tmp4;
        if (!tmp4) {
          tmp5 = first1 !== tmp.GUILD_CATEGORY;
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
  }
  return tmp2;
};
export const getPrivateChannelHintText = function getPrivateChannelHintText(first1) {
  if (constants2.GUILD_TEXT !== first1) {
    if (tmp.GUILD_ANNOUNCEMENT !== first1) {
      if (tmp.GUILD_APP !== first1) {
        if (tmp.GUILD_VOICE === first1) {
          const intl2 = util.intl;
          return intl2.format(util.t.iZAMty, {});
        } else if (tmp.GUILD_CATEGORY === first1) {
          const intl = util.intl;
          return intl.format(util.t.PhnARV, {});
        } else {
          return null;
        }
      }
    }
  }
  const intl3 = util.intl;
  return intl3.format(util.t.ZDtA0T, {});
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
      if (row.rowType === RowType.ROLE) {
        items.push(ChannelUtils.permissionOverwriteForRole(row.id, closure_0));
      } else if (row.rowType === tmp2.MEMBER) {
        items.push(ChannelUtils.permissionOverwriteForUser(row.id, closure_0));
      }
    }
  });
  return items;
};