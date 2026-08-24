// === Module 1991: trackCommunicationDisabled ===

// Module 1991 (trackCommunicationDisabled)
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import hasFlag from "hasFlag" /* 1403 */;
import parseAvatarDecorationData from "parseAvatarDecorationData" /* 1899 */;
import parseSkuIdFromServerData from "parseSkuIdFromServerData" /* 1900 */;
import items2 from "items" /* 1933 */;
import isActivityParticipantValidGuildMemberDefault from "isActivityParticipantValidGuildMember" /* 1953 */;
import compareGuildRoles from "compareGuildRoles" /* 1988 */;
import DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY from "DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY" /* 1992 */;
import GuildMemberFlags2 from "GuildMemberFlags" /* 4012 */;
import isCommunicationDisabled from "isCommunicationDisabled" /* 4013 */;
import getEmbeddedActivityLocationChannelId from "getEmbeddedActivityLocationChannelId" /* 4014 */;
import closure_4 from "initialize" /* 1983 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "createGuildRoleRecordFromRust" /* 1984 */;
import closure_8 from "createGuildRecordFromRust" /* 1910 */;

function trackCommunicationDisabled(guildId, tmp10Result) {
  if (null != tmp10Result.communicationDisabledUntil) {
    if (obj2.isMemberCommunicationDisabled(tmp10Result)) {
      const items = [];
      items[constants.GUILD] = guildId;
      items[constants.USER] = tmp10Result.userId;
      const joined = items.join("-");
      let result = dependencyMap4[joined] !== tmp10Result.communicationDisabledUntil;
      if (result) {
        result = tmp10(4013).isMemberCommunicationDisabled(tmp10Result);
        tmp10Result = tmp10(4013);
      }
      if (result) {
        dependencyMap4[joined] = tmp10Result.communicationDisabledUntil;
        const sum = c17 + 1;
        c17 = sum;
        closure_19[joined] = sum;
      }
    }
    obj2 = isCommunicationDisabled;
    tmp10 = require;
  }
  removeCommunicationDisabled(guildId, tmp10Result.userId);
}
function removeCommunicationDisabled(guildId, userId) {
  if (null != userId) {
    const items = [];
    items[constants.GUILD] = guildId;
    items[constants.USER] = userId;
    const joined = items.join("-");
    if (null != dependencyMap4[joined]) {
      const sum = sum1 + 1;
      sum1 = sum;
      closure_19[joined] = sum;
    }
    const items1 = [];
    items1[constants.GUILD] = guildId;
    items1[constants.USER] = userId;
    const str2 = items1.join("-");
    if (str2.split("-")[constants.USER] === store.getId()) {
      callback(str2.split("-")[tmp12.GUILD]);
    }
    delete tmp[tmp2];
  } else {
    for (const key10003 in closure_15) {
      let tmp23 = key10003;
      let tmp24 = constants;
      if (key10003.split("-")[constants.GUILD] !== arg0) {
        continue;
      } else {
        let tmp5 = sum1;
        sum1 = sum1 + 1;
        let tmp7 = closure_19;
        closure_19[key10003] = sum1;
        let tmp8 = store;
        if (key10003.split("-")[tmp24.USER] === store.getId()) {
          let tmp9 = callback;
          let tmp10 = callback(key10003.split("-")[tmp24.GUILD]);
        }
        let tmp11 = dependencyMap4;
        delete tmp3[tmp4];
        continue;
      }
      continue;
    }
  }
}
function computeDerivedMemberState(unsafeMutableRoles, roles) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  if (0 === roles.length) {
    return { colorString: null, colorStrings: null, colorRoleId: "id", hoistRoleId: "np", iconRoleId: "key", highestRoleId: "includes" };
  } else {
    const iter = roles[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp7 = unsafeMutableRoles[iter.next()];
      let tmp8 = tmp7;
      if (null != tmp7) {
        let tmp51 = tmp4;
        let doesRoleSortHigherResult = null == tmp4;
        if (!doesRoleSortHigherResult) {
          let tmp9 = require;
          let tmp10 = dependencyMap;
          let obj = compareGuildRoles;
          let tmp11 = tmp7;
          let tmp12 = tmp4;
          doesRoleSortHigherResult = obj.doesRoleSortHigher(tmp8, tmp4);
        }
        if (doesRoleSortHigherResult) {
          tmp4 = tmp7;
        }
        let tmp14 = tmp7;
        let tmp15 = tmp8.color > 0;
        if (tmp15) {
          let tmp16 = tmp;
          let doesRoleSortHigherResult1 = null == tmp;
          if (!doesRoleSortHigherResult1) {
            let tmp18 = require;
            let tmp19 = dependencyMap;
            let obj2 = compareGuildRoles;
            let tmp20 = tmp7;
            let tmp21 = tmp;
            doesRoleSortHigherResult1 = obj2.doesRoleSortHigher(tmp8, tmp);
          }
          tmp15 = doesRoleSortHigherResult1;
        }
        if (tmp15) {
          tmp = tmp7;
        }
        let tmp22 = tmp7;
        let hoist = tmp8.hoist;
        if (hoist) {
          let tmp23 = tmp2;
          let doesRoleSortHigherResult2 = null == tmp2;
          if (!doesRoleSortHigherResult2) {
            let tmp25 = require;
            let tmp26 = dependencyMap;
            let obj3 = compareGuildRoles;
            let tmp27 = tmp7;
            let tmp28 = tmp2;
            doesRoleSortHigherResult2 = obj3.doesRoleSortHigher(tmp8, tmp2);
          }
          hoist = doesRoleSortHigherResult2;
        }
        if (hoist) {
          tmp2 = tmp7;
        }
        let tmp29 = tmp7;
        let tmp30 = null != tmp8.icon;
        if (!tmp30) {
          let tmp31 = tmp7;
          tmp30 = null != tmp8.unicodeEmoji;
        }
        if (tmp30) {
          let tmp32 = tmp3;
          let doesRoleSortHigherResult3 = null == tmp3;
          if (!doesRoleSortHigherResult3) {
            let tmp34 = require;
            let tmp35 = dependencyMap;
            let obj4 = compareGuildRoles;
            let tmp36 = tmp7;
            let tmp37 = tmp3;
            doesRoleSortHigherResult3 = obj4.doesRoleSortHigher(tmp8, tmp3);
          }
          tmp30 = doesRoleSortHigherResult3;
        }
        if (tmp30) {
          tmp3 = tmp7;
        }
      }
      continue;
    }
    let colorString;
    if (tmp != null) {
      colorString = tmp.colorString;
    }
    if (colorString == null) {
      colorString = null;
    }
    obj = { colorString: null, colorStrings: null, colorRoleId: null, iconRoleId: null, hoistRoleId: null, highestRoleId: null };
    obj[0] = colorString;
    let colorStrings;
    if (tmp != null) {
      colorStrings = tmp.colorStrings;
    }
    if (colorStrings == null) {
      colorStrings = null;
    }
    obj[1] = colorStrings;
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    obj[2] = id;
    let id1;
    if (tmp3 != null) {
      id1 = tmp3.id;
    }
    obj[3] = id1;
    let id2;
    if (tmp2 != null) {
      id2 = tmp2.id;
    }
    obj[4] = id2;
    let id3;
    if (tmp4 != null) {
      id3 = tmp4.id;
    }
    obj[5] = id3;
    return obj;
  }
}
function createMember(guildRoles) {
  ({ userId, guildId, roles } = guildRoles);
  ({ nick, avatar, avatarDecoration, premiumSince, isPending, joinedAt, communicationDisabledUntil, unusualDMActivityUntil, fullProfileLoadedTimestamp, flags, collectibles, displayNameStyles } = guildRoles);
  const tmp3 = computeDerivedMemberState(guildRoles.guildRoles, roles);
  let obj = { userId, nick, guildId, avatar, avatarDecoration, roles, colorString: tmp3.colorString, colorStrings: tmp3.colorStrings, colorRoleId: tmp3.colorRoleId, iconRoleId: tmp3.iconRoleId, hoistRoleId: tmp3.hoistRoleId, highestRoleId: tmp3.highestRoleId, premiumSince, isPending, joinedAt, communicationDisabledUntil, unusualDMActivityUntil, fullProfileLoadedTimestamp, flags, collectibles, displayNameStyles };
  let keys = dependencyMap;
  let num = obj.flags;
  if (num == null) {
    num = 0;
  }
  if (obj2.hasFlag(num, GuildMemberFlags.IS_GUEST)) {
    let num2 = obj.flags;
    if (num2 == null) {
      num2 = 0;
    }
    obj.flags = hasFlag.addFlag(num2, tmp5.BYPASSES_VERIFICATION);
    const tmp4Result = hasFlag;
  }
  if (null == dependencyMap[guildId]) {
    return obj;
  } else {
    if (userId === store.getId()) {
      if (!closure_4.isViewingRoles(guildId)) {
        if (!obj5.isFullServerPreview(guildId)) {
          if (null != dependencyMap2[guildId]) {
            delete tmp[tmp2];
          }
        }
      }
      const viewingRoles = obj5.getViewingRoles(guildId);
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(obj5.getMemberOptions(guildId));
      if (null != viewingRoles) {
        keys = DISCORD_EPOCHDefault.keys;
        keys = keys(viewingRoles);
        const tmp15 = DISCORD_EPOCHDefault;
      } else {
        keys = [];
      }
      obj.roles = keys;
      dependencyMap2[guildId] = obj;
      const tmp8 = dependencyMap2;
    }
    return obj;
  }
  obj2 = hasFlag;
  const tmp4 = require;
  tmp5 = GuildMemberFlags;
}
function handleCachedGuilds(guilds) {
  const iter = guilds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.member) {
      let tmp17 = dependencyMap3;
      let tmp18 = nextResult;
      let tmp19 = dependencyMap3;
      if (null == dependencyMap3[tmp2.id]) {
        let tmp6 = nextResult;
        let member = tmp2.member;
      } else {
        member = {};
        let tmp3 = nextResult;
        let tmp4 = member;
        let merged = Object.assign(tmp2.member);
        member.roles = tmp2.member.roles;
      }
      tmp19[tmp2.id] = member;
      let tmp7 = dependencyMap;
      let tmp8 = nextResult;
      if (null != dependencyMap[tmp2.id]) {
        let tmp9 = dependencyMap;
        let tmp10 = nextResult;
        let tmp11 = dependencyMap[tmp2.id];
        let tmp12 = tmp11;
        if (null != tmp11[tmp2.member.userId]) {
          let tmp13 = tmp11;
          let tmp14 = nextResult;
          let obj = {};
          let tmp15 = obj;
          let merged1 = Object.assign(tmp12[tmp2.member.userId]);
          obj.roles = tmp2.member.roles;
          tmp12[tmp2.member.userId] = obj;
        }
      }
    }
    continue;
  }
}
function handleGuildMemberUpdate(arg0) {
  ({ guildId, user } = arg0);
  if (null == dependencyMap[guildId]) {
    return false;
  } else {
    const guild = store4.getGuild(guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
      return false;
    } else {
      const obj = { userId: null, nick: null, guildId: null, avatar: null, avatarDecoration: null, guildRoles: null, roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, unusualDMActivityUntil: null, fullProfileLoadedTimestamp: null, flags: null, collectibles: null, displayNameStyles: null };
      obj[0] = user.id;
      obj[1] = tmp;
      obj[2] = guildId;
      obj[3] = tmp2;
      obj[4] = parseAvatarDecorationData.parseAvatarDecorationData(tmp3);
      obj[5] = store3.getUnsafeMutableRoles(guild.id);
      obj[6] = tmp4;
      obj[7] = tmp5;
      obj[8] = tmp6;
      obj[9] = tmp7;
      obj[10] = tmp8;
      obj[11] = tmp9;
      let prop;
      if (tmp13[user.id] != null) {
        prop = tmp35.fullProfileLoadedTimestamp;
      }
      obj[12] = prop;
      obj[13] = tmp10;
      obj[14] = tmp11;
      obj[15] = tmp12;
      tmp13[user.id] = createMember(obj);
      if (null != tmp13[user.id].communicationDisabledUntil) {
        let tmp32Result = tmp32(4013);
        if (tmp32Result.isMemberCommunicationDisabled(tmp15)) {
          const items = [];
          items[constants.GUILD] = guildId;
          items[constants.USER] = tmp15.userId;
          const joined = items.join("-");
          let result = dependencyMap4[joined] !== tmp15.communicationDisabledUntil;
          if (result) {
            tmp32Result = tmp32(4013);
            result = tmp32Result.isMemberCommunicationDisabled(tmp15);
          }
          if (result) {
            dependencyMap4[joined] = tmp15.communicationDisabledUntil;
            const sum = c17 + 1;
            c17 = sum;
            closure_19[joined] = sum;
          }
        }
      }
      removeCommunicationDisabled(guildId, tmp13[user.id].userId);
      const obj3 = parseAvatarDecorationData;
      const tmp31 = createMember;
    }
  }
}
function batchUpdateGuildMembers(guildId, members) {
  closure_0 = guildId;
  closure_1 = tmp;
  if (null == dependencyMap[guildId]) {
    return false;
  } else {
    const guild = store4.getGuild(guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
      let flag = false;
    } else {
      const item = members.forEach((user) => {
        const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
        ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
        let prop;
        if (table[user.user.id] != null) {
          prop = tmp2.fullProfileLoadedTimestamp;
        }
        obj[12] = prop;
        let unusual_dm_activity_until = user.unusual_dm_activity_until;
        if (unusual_dm_activity_until == null) {
          let prop1;
          if (tmp2 != null) {
            prop1 = tmp2.unusualDMActivityUntil;
          }
          unusual_dm_activity_until = prop1;
        }
        obj[13] = unusual_dm_activity_until;
        let tmp5Result = tmp5(tmp6[13]);
        obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
        tmp5Result = tmp5(tmp6[14]);
        obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
        table[user.user.id] = closure_1_26(obj);
        if (null != table[user.user.id].communicationDisabledUntil) {
          if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
            const items = [];
            items[closure_1_24.GUILD] = tmp4;
            items[closure_1_24.USER] = tmp9.userId;
            const joined = items.join("-");
            let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
            if (result) {
              result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
              const tmp5Result2 = tmp5(tmp6[8]);
            }
            if (result) {
              closure_1_15[joined] = tmp9.communicationDisabledUntil;
              sum = sum + 1;
              closure_1_19[joined] = sum;
            }
          }
        }
        closure_1_23(guildId, table[user.user.id].userId);
      });
      closure_18 = closure_18 + 1;
      flag = true;
    }
    return flag;
  }
}
function getAvatarDecorationFromServerMember(nextResult) {
  return parseAvatarDecorationData.parseAvatarDecorationData(nextResult.avatar_decoration_data);
}
function buildMembers(guild) {
  const id = guild.id;
  if (!(id in dependencyMap)) {
    dependencyMap[guild.id] = {};
  }
  guild = store4.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    const members = guild.members;
    const iter = members[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let id2 = nextResult.user.id;
      let tmp8 = tmp25[id2];
      let tmp9 = tmp8;
      let obj = { userId: null, nick: null, guildId: null, avatar: null, avatarDecoration: null, guildRoles: null, roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, fullProfileLoadedTimestamp: null, flags: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
      obj[0] = id2;
      obj[1] = nextResult.nick;
      obj[2] = guild.id;
      obj[3] = nextResult.avatar;
      let tmp11 = getAvatarDecorationFromServerMember;
      let tmp7 = id2;
      let tmp10 = createMember;
      obj[4] = getAvatarDecorationFromServerMember(nextResult);
      let tmp12 = store3;
      obj[5] = store3.getUnsafeMutableRoles(guild.id);
      ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10] } = nextResult);
      let prop;
      if (tmp8 != null) {
        prop = tmp8.fullProfileLoadedTimestamp;
      }
      obj[11] = prop;
      let tmp14 = nextResult;
      ({ flags: obj[12], unusual_dm_activity_until } = tmp6);
      if (unusual_dm_activity_until == null) {
        let tmp15 = tmp8;
        let prop1;
        if (tmp9 != null) {
          prop1 = tmp9.unusualDMActivityUntil;
        }
        unusual_dm_activity_until = prop1;
      }
      obj[13] = unusual_dm_activity_until;
      let tmp17 = require;
      let tmp18 = dependencyMap;
      let obj2 = parseSkuIdFromServerData;
      let tmp19 = nextResult;
      obj[14] = obj2.parseServerUserCollectibles(tmp6.collectibles);
      let obj3 = items2;
      obj[15] = obj3.parseServerDisplayNameStyles(tmp6.display_name_styles);
      let tmp10Result = tmp10(obj);
      let tmp21 = id2;
      tmp25[tmp7] = tmp10Result;
      let tmp22 = trackCommunicationDisabled;
      let tmp23 = trackCommunicationDisabled(id, tmp10Result);
      continue;
    }
    return true;
  }
}
function handleGuildRoleUpdateOrDelete(guildId) {
  closure_0 = guildId;
  if (null == dependencyMap[guildId.guildId]) {
    return false;
  } else {
    const guild = store4.getGuild(guildId.guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      logger.warn("Guild " + guildId.guildId + " not found during " + guildId.type + ".");
      return false;
    } else {
      const id = store.getId();
      const keys = DISCORD_EPOCHDefault.keys(tmp);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        let tmp6 = tmp[nextResult];
        let tmp7 = tmp6;
        if (null == tmp6.roles) {
          let tmp9 = tmp6;
          if (null == tmp7.colorString) {
            let tmp10 = tmp6;
          }
          continue;
        } else {
          let tmp8 = tmp6;
        }
        let tmp11 = nextResult;
        if (tmp5 === id) {
          if ("GUILD_ROLE_DELETE" === guildId.type) {
            let tmp13 = tmp6;
            let roles = tmp7.roles;
            roles = roles.filter((arg0) => arg0 !== guildId.roleId);
            let tmp14 = nextResult;
            let obj = { userId: null, nick: null, guildId: null, avatar: null, avatarDecoration: null, guildRoles: null, roles: null, premiumSince: null, isPending: null, joinedAt: null, flags: null, fullProfileLoadedTimestamp: null, collectibles: null, displayNameStyles: null };
            obj[0] = tmp5;
            let tmp16 = tmp6;
            obj[1] = tmp7.nick;
            obj[2] = guildId.guildId;
            ({ avatar: obj[3], avatarDecoration: obj[4] } = tmp7);
            let tmp17 = store3;
            let tmp15 = createMember;
            obj[5] = store3.getUnsafeMutableRoles(guild.id);
            obj[6] = roles;
            ({ premiumSince: obj[7], isPending: obj[8], joinedAt: obj[9], flags: obj[10] } = tmp7);
            let prop;
            if (tmp7 != null) {
              prop = tmp7.fullProfileLoadedTimestamp;
            }
            obj[11] = prop;
            let tmp19 = tmp6;
            ({ collectibles: obj[12], displayNameStyles: obj[13] } = tmp7);
            tmp[tmp5] = tmp15(obj);
            let tmp20 = trackCommunicationDisabled;
            let tmp21 = nextResult;
            let tmp22 = trackCommunicationDisabled(guildId.guildId, tmp[tmp5]);
          }
        }
        let tmp12 = tmp6;
        roles = tmp7.roles;
      }
    }
  }
}
function handleImpersonateUpdate(guildId) {
  guildId = guildId.guildId;
  if (null == dependencyMap[guildId]) {
    return false;
  } else {
    const guild = store4.getGuild(guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      logger.warn("Guild " + guildId + " not found during IMPERSONATE_UPDATE.");
      return false;
    } else {
      const id = store.getId();
      const obj = { userId: null, nick: null, guildId: null, avatar: null, avatarDecoration: null, guildRoles: null, roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, fullProfileLoadedTimestamp: null, flags: null, collectibles: null, displayNameStyles: null };
      obj[0] = id;
      obj[1] = tmp[id].nick;
      obj[2] = guildId;
      ({ avatar: obj[3], avatarDecoration: obj[4] } = tmp[id]);
      obj[5] = store3.getUnsafeMutableRoles(guild.id);
      ({ roles: obj[6], premiumSince: obj[7], isPending: obj[8], joinedAt: obj[9], communicationDisabledUntil: obj[10], fullProfileLoadedTimestamp: obj[11], flags: obj[12], collectibles: obj[13], displayNameStyles: obj[14] } = tmp[id]);
      tmp[id] = createMember(obj);
    }
  }
}
function handleIncomingMessage(arg0) {
  ({ message, guildId } = arg0);
  let resolved = message;
  c1 = false;
  const message_snapshots = message.message_snapshots;
  if (message_snapshots != null) {
    const item = message_snapshots.forEach((message) => {
      message = message.message;
      resolved = undefined;
      if (message != null) {
        resolved = message.resolved;
      }
      const message_reference = resolved.message_reference;
      let guild_id;
      if (message_reference != null) {
        guild_id = message_reference.guild_id;
      }
      let members;
      if (resolved != null) {
        members = resolved.members;
      }
      let tmp4 = null != members && null != guild_id;
      if (tmp4) {
        let obj = { id: null, members: null };
        obj[0] = guild_id;
        const _Object = Object;
        const entries = Object.entries(resolved.members);
        const mapped = entries.map((arg0) => {
          [tmp, tmp2] = arg0;
          let tmp3;
          if (resolved != null) {
            const users = resolved.users;
            if (users != null) {
              tmp3 = users[tmp];
            }
          }
          if (null != tmp3) {
            const obj = {};
            const merged = Object.assign(tmp2);
            obj.user = tmp3;
            return obj;
          }
        });
        obj[1] = mapped.filter((arg0) => null != arg0);
        tmp4 = closure_1_30(obj);
      }
      if (tmp4) {
        c1 = true;
      }
    });
  }
  resolved = message.resolved;
  let members;
  if (resolved != null) {
    members = resolved.members;
  }
  let tmp3 = null != members && null != guildId;
  if (tmp3) {
    const obj = { id: null, members: null };
    obj[0] = guildId;
    const _Object = Object;
    const entries = Object.entries(resolved.members);
    const mapped = entries.map((arg0) => {
      [tmp, tmp2] = arg0;
      let tmp3;
      if (resolved != null) {
        const users = resolved.users;
        if (users != null) {
          tmp3 = users[tmp];
        }
      }
      if (null != tmp3) {
        const obj = {};
        const merged = Object.assign(tmp2);
        obj.user = tmp3;
        return obj;
      }
    });
    obj[1] = mapped.filter((arg0) => null != arg0);
    tmp3 = buildMembers(obj);
  }
  if (!tmp3) {
    tmp3 = c1;
  }
  return tmp3;
}
function mergeMessageResolvedMembers(channel_id) {
  const channel = store2.getChannel(channel_id.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let resolved = channel_id;
  c1 = false;
  const message_snapshots = channel_id.message_snapshots;
  if (message_snapshots != null) {
    const item = message_snapshots.forEach((message) => {
      message = message.message;
      resolved = undefined;
      if (message != null) {
        resolved = message.resolved;
      }
      const message_reference = resolved.message_reference;
      let guild_id;
      if (message_reference != null) {
        guild_id = message_reference.guild_id;
      }
      let members;
      if (resolved != null) {
        members = resolved.members;
      }
      let tmp4 = null != members && null != guild_id;
      if (tmp4) {
        let obj = { id: null, members: null };
        obj[0] = guild_id;
        const _Object = Object;
        const entries = Object.entries(resolved.members);
        const mapped = entries.map((arg0) => {
          [tmp, tmp2] = arg0;
          let tmp3;
          if (resolved != null) {
            const users = resolved.users;
            if (users != null) {
              tmp3 = users[tmp];
            }
          }
          if (null != tmp3) {
            const obj = {};
            const merged = Object.assign(tmp2);
            obj.user = tmp3;
            return obj;
          }
        });
        obj[1] = mapped.filter((arg0) => null != arg0);
        tmp4 = closure_1_30(obj);
      }
      if (tmp4) {
        c1 = true;
      }
    });
  }
  resolved = channel_id.resolved;
  let members;
  if (resolved != null) {
    members = resolved.members;
  }
  if (tmp5) {
    let obj = { id: null, members: null };
    obj[0] = guild_id;
    let _Object = Object;
    let entries = Object.entries(resolved.members);
    let mapped = entries.map((arg0) => {
      [tmp, tmp2] = arg0;
      let tmp3;
      if (resolved != null) {
        const users = resolved.users;
        if (users != null) {
          tmp3 = users[tmp];
        }
      }
      if (null != tmp3) {
        const obj = {};
        const merged = Object.assign(tmp2);
        obj.user = tmp3;
        return obj;
      }
    });
    obj[1] = mapped.filter((arg0) => null != arg0);
    buildMembers(obj);
  }
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((arg0) => {
    callback(arg0);
  });
}
function handleLoadSearchResults(data) {
  data = data.data;
  const items = [];
  let item = data.forEach((messages) => {
    messages = messages.messages;
    let item = messages.forEach((arr) => {
      const item = arr.forEach((arg0) => {

      });
    });
  });
  const item1 = items.forEach((arg0) => {
    callback(arg0);
  });
}
let closure_3 = DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY.clearCommunicationDisabledNotice;
const GuildMemberFlags = GuildMemberFlags2.GuildMemberFlags;
let closure_10 = new timestampDefault("GuildMemberStore");
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let c16 = false;
let c17 = 0;
let c18 = 0;
let closure_19 = {};
let closure_20 = {};
let closure_21 = { added: [], removed: [] };
let closure_24 = { GUILD: 0, [0]: "GUILD", USER: 1, [1]: "USER" };
const Store = initializeDefault.Store;
class GuildMemberStore extends Store {
}
const prototype = GuildMemberStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5, closure_6, closure_7, closure_8, closure_4);
};
prototype["getMutableAllGuildsAndMembers"] = function getMutableAllGuildsAndMembers() {
  return closure_11;
};
prototype["memberOf"] = function memberOf(userId) {
  closure_0 = userId;
  const obj = applyDefault(closure_11);
  const found = applyDefault(closure_11).toPairs().filter((arg0) => {
    [, tmp] = arg0;
    return null != tmp[closure_0];
  });
  const toPairsResult = applyDefault(closure_11).toPairs();
  return found.map((arg0) => {
    [tmp] = arg0;
    return tmp;
  }).value();
};
prototype["getNicknameGuildsMapping"] = function getNicknameGuildsMapping(id) {
  const obj = {};
  for (const key10006 in closure_11) {
    let tmp4 = key10006;
    let tmp5 = dependencyMap;
    let tmp6 = dependencyMap[key10006][arg0];
    let nick;
    if (tmp6 != null) {
      nick = tmp6.nick;
    }
    if (null == nick) {
      continue;
    } else {
      let _Object = Object;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(nick);
      } else {
        hasOwnPropertyResult = call(obj, nick);
      }
      if (!hasOwnPropertyResult) {
        obj[nick] = [];
      }
      let arr = obj[nick];
      arr = arr.push(key10006);
      continue;
    }
    continue;
  }
  return obj;
};
prototype["getNicknames"] = function getNicknames(id) {
  return Object.keys(this.getNicknameGuildsMapping(id));
};
prototype["isMember"] = function isMember(arg0, arg1) {
  if (null != arg0) {
    if (null != arg1) {
      return null != dependencyMap[arg0] && null != dependencyMap[arg0][arg1];
    }
  }
  return false;
};
prototype["isGuestOrLurker"] = function isGuestOrLurker(guild_id, id) {
  if (null != guild_id) {
    if (null != id) {
      let tmp4 = null != tmp3;
      if (tmp4) {
        let joinedAt;
        if (tmp3[id] != null) {
          joinedAt = tmp5.joinedAt;
        }
        tmp4 = null == joinedAt;
      }
      return tmp4;
    }
  }
  return false;
};
prototype["isCurrentUserGuest"] = function isCurrentUserGuest(guild_id) {
  if (null == guild_id) {
    return false;
  } else {
    const id = store.getId();
    if (null != dependencyMap[guild_id]) {
      if (null != tmp4[id]) {
        const flags = tmp4[id].flags;
        let hasFlagResult = null != flags;
        if (hasFlagResult) {
          hasFlagResult = hasFlag.hasFlag(flags, GuildMemberFlags.IS_GUEST);
          const obj = hasFlag;
        }
        return hasFlagResult;
      }
    }
    return false;
  }
};
prototype["getMemberIds"] = function getMemberIds(id) {
  if (null == id) {
    return [];
  } else {
    if (null == dependencyMap[id]) {
      let items = [];
    } else {
      items = DISCORD_EPOCHDefault.keys(tmp2);
      const obj = DISCORD_EPOCHDefault;
    }
    return items;
  }
};
prototype["getMembers"] = function getMembers(arg0) {
  if (null == arg0) {
    return [];
  } else {
    if (null == dependencyMap[arg0]) {
      let items = [];
    } else {
      const _Object = Object;
      items = Object.values(tmp2);
    }
    return items;
  }
};
prototype["getTrueMember"] = function getTrueMember(guildId, id) {
  let tmp2 = null;
  if (null != dependencyMap[guildId]) {
    tmp2 = tmp[id];
  }
  return tmp2;
};
prototype["getMember"] = function getMember(guildId, id) {
  const trueMember = this.getTrueMember(guildId, id);
  let tmp2 = trueMember;
  if (null != trueMember) {
    tmp2 = trueMember;
    if (id === store.getId()) {
      if (closure_4.isViewingRoles(guildId)) {
        let tmp5 = dependencyMap2[guildId];
        if (tmp5 == null) {
          tmp5 = trueMember;
        }
        tmp2 = tmp5;
      } else {
        tmp2 = trueMember;
      }
      const obj = closure_4;
    }
  }
  return tmp2;
};
prototype["getSelfMember"] = function getSelfMember(id) {
  return this.getMember(id, store.getId());
};
prototype["getSelfMemberJoinedAt"] = function getSelfMemberJoinedAt(id) {
  if (null != table[id]) {
    return tmp;
  } else {
    const self = this;
    const selfMember = this.getSelfMember(id);
    if (null != selfMember) {
      if (null != selfMember.joinedAt) {
        const _Date = Date;
        const date = new Date(selfMember.joinedAt);
        table[id] = date;
        return date;
      }
    }
    return null;
  }
};
prototype["getCachedSelfMember"] = function getCachedSelfMember(id) {
  let tmp = dependencyMap3[id];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getNick"] = function getNick(id, id2) {
  if (null != id) {
    if (null != id2) {
      const self = this;
      const member = this.getMember(id, id2);
      let nick = null;
      if (null != member) {
        nick = member.nick;
      }
      return nick;
    }
  }
  return null;
};
prototype["getCommunicationDisabledUserMap"] = function getCommunicationDisabledUserMap() {
  return closure_15;
};
prototype["getCommunicationDisabledVersion"] = function getCommunicationDisabledVersion() {
  return c17;
};
prototype["getPendingRoleUpdates"] = function getPendingRoleUpdates(arg0) {
  let tmp = dependencyMap5[arg0];
  if (tmp == null) {
    tmp = closure_21;
  }
  return tmp;
};
prototype["getMemberRoleWithPendingUpdates"] = function getMemberRoleWithPendingUpdates(arg0, arg1) {
  const member = this.getMember(arg0, arg1);
  let roles;
  if (member != null) {
    roles = member.roles;
  }
  if (roles == null) {
    roles = [];
  }
  let differenceResult = roles;
  if (null != dependencyMap5[arg0]) {
    const obj = applyDefault;
    differenceResult = obj.difference(applyDefault.union(roles, tmp2.added), tmp2.removed);
    const obj2 = applyDefault;
  }
  return differenceResult;
};
prototype["getMemberVersion"] = function getMemberVersion() {
  return c18;
};
GuildMemberStore.displayName = "GuildMemberStore";
const guildMemberStore = new GuildMemberStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    if (c16) {
      c16 = false;
    } else {
      closure_11 = {};
      closure_12 = {};
    }
    closure_15 = {};
    guilds = guilds.guilds;
    const item = guilds.forEach((arg0) => {
      callback(arg0);
    });
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(guilds) {
    guilds = guilds.guilds;
    let item = guilds.forEach((id) => {
      id = id.id;
      callback({ id, members: id.members });
      const activity_instances = id.activity_instances;
      if (activity_instances != null) {
        const item = activity_instances.forEach((participants) => {
          participants = participants.participants;
          const obj = { id, members: null };
          const found = participants.filter(closure_1_1(closure_1_2[16]));
          obj[1] = found.map((member) => member.member);
          closure_1_30(obj);
        });
      }
    });
  },
  OVERLAY_INITIALIZE: function handleInitialize(guildMembers) {
    const obj = {};
    const merged = Object.assign(guildMembers.guildMembers);
    closure_12 = {};
  },
  CACHE_LOADED: function handleCacheLoaded(guildMembers) {
    c16 = true;
    const obj = {};
    const merged = Object.assign(guildMembers.guildMembers);
    closure_12 = {};
    closure_14 = {};
    handleCachedGuilds(guildMembers.guilds);
  },
  CACHE_LOADED_LAZY: function handleCacheLoadedLazy(guilds) {
    handleCachedGuilds(guilds.guilds);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    return buildMembers(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    delete tmp2[tmp];
    delete tmp2[tmp];
    removeCommunicationDisabled(guild.guild.id);
  },
  GUILD_MEMBER_ADD: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE_LOCAL: function handleGuildMemberUpdateLocal(arg0) {
    ({ guildId, roles, addedRoleIds, removedRoleIds, flags } = arg0);
    const id = store.getId();
    let tmp3 = null;
    if (null != dependencyMap[guildId]) {
      tmp3 = tmp2[id];
    }
    if (null == tmp3) {
      return false;
    } else {
      const guild = store4.getGuild(guildId);
      if (null == guild) {
        return false;
      } else {
        let obj = dependencyMap5[guildId];
        if (obj == null) {
          obj = {};
        }
        const obj2 = applyDefault;
        const tmp12 = dependencyMap5;
        let added = obj.added;
        if (added == null) {
          added = [];
        }
        let items = removedRoleIds;
        const obj3 = applyDefault;
        if (removedRoleIds == null) {
          items = [];
        }
        obj = { added: null, removed: null };
        obj[0] = obj2.difference(applyDefault.union(added, addedRoleIds), items);
        let tmp4Result = tmp4(12);
        tmp4Result = tmp4(12);
        let removed = obj.removed;
        if (removed == null) {
          removed = [];
        }
        const unionResult = applyDefault.union(added, addedRoleIds);
        if (addedRoleIds == null) {
          addedRoleIds = [];
        }
        obj[1] = tmp4Result.difference(tmp4Result.union(removed, removedRoleIds), addedRoleIds);
        tmp12[guildId] = obj;
        obj = { userId: null, guildId: null, nick: null, avatar: null, avatarDecoration: null, guildRoles: null, roles: null, premiumSince: null, isPending: null, joinedAt: null, flags: null, fullProfileLoadedTimestamp: null, collectibles: null, displayNameStyles: null };
        obj[0] = id;
        obj[1] = guildId;
        ({ nick: obj7[2], avatar: obj7[3], avatarDecoration: obj7[4] } = tmp3);
        obj[5] = store3.getUnsafeMutableRoles(guild.id);
        if (roles == null) {
          roles = tmp3.roles;
        }
        obj[6] = roles;
        ({ premiumSince: obj7[7], isPending: obj7[8], joinedAt: obj7[9] } = tmp3);
        if (flags == null) {
          flags = tmp3.flags;
        }
        obj[10] = flags;
        ({ fullProfileLoadedTimestamp: obj7[11], collectibles: obj7[12], displayNameStyles: obj7[13] } = tmp3);
        tmp2[id] = createMember(obj);
      }
    }
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    let flag = false;
    const iter = arg0.chunks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = batchUpdateGuildMembers;
      let tmp3 = batchUpdateGuildMembers(nextResult.guildId, nextResult.members) || flag;
      flag = tmp3;
      continue;
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    const id = guildId.user.id;
    if (null != dependencyMap[guildId]) {
      if (null != tmp3[id]) {
        delete tmp[tmp2];
        removeCommunicationDisabled(guildId, id);
        closure_18 = closure_18 + 1;
      }
    }
  },
  GUILD_MEMBER_REMOVE_LOCAL: function handleGuildMemberRemoveLocal(arg0) {
    ({ guildId, userId } = arg0);
    if (null != dependencyMap[guildId]) {
      if (null != tmp3[userId]) {
        delete tmp[tmp2];
        removeCommunicationDisabled(guildId, userId);
        closure_18 = closure_18 + 1;
      }
    }
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    ({ guildId, members } = arg0);
    const mapped = members.map((member) => member.member);
    const found = mapped.filter(guildId(guild[15]).isNotNullish);
    closure_1 = undefined;
    guild = undefined;
    closure_1 = tmp;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = found.forEach((user) => {
          const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
          ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
          let prop;
          if (table[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj[12] = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj[13] = unusual_dm_activity_until;
          let tmp5Result = tmp5(tmp6[13]);
          obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = tmp5(tmp6[14]);
          obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          table[user.user.id] = closure_1_26(obj);
          if (null != table[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[closure_1_24.GUILD] = tmp4;
              items[closure_1_24.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = tmp5(tmp6[8]);
              }
              if (result) {
                closure_1_15[joined] = tmp9.communicationDisabledUntil;
                sum = sum + 1;
                closure_1_19[joined] = sum;
              }
            }
          }
          closure_1_23(guildId, table[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag = true;
      }
    }
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    ({ guildId, addedMembers } = arg0);
    let flag = null != addedMembers;
    if (flag) {
      const mapped = addedMembers.map((member) => member.member);
      const found = mapped.filter(guildId(guild[15]).isNotNullish);
      closure_1 = undefined;
      guild = undefined;
      closure_1 = tmp4;
      if (null == dependencyMap[guildId]) {
        flag = false;
      } else {
        guild = store4.getGuild(guildId);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
          let flag3 = false;
        } else {
          const item = found.forEach((user) => {
            const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
            ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
            let prop;
            if (table[user.user.id] != null) {
              prop = tmp2.fullProfileLoadedTimestamp;
            }
            obj[12] = prop;
            let unusual_dm_activity_until = user.unusual_dm_activity_until;
            if (unusual_dm_activity_until == null) {
              let prop1;
              if (tmp2 != null) {
                prop1 = tmp2.unusualDMActivityUntil;
              }
              unusual_dm_activity_until = prop1;
            }
            obj[13] = unusual_dm_activity_until;
            let tmp5Result = tmp5(tmp6[13]);
            obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
            tmp5Result = tmp5(tmp6[14]);
            obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
            table[user.user.id] = closure_1_26(obj);
            if (null != table[user.user.id].communicationDisabledUntil) {
              if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
                const items = [];
                items[closure_1_24.GUILD] = tmp4;
                items[closure_1_24.USER] = tmp9.userId;
                const joined = items.join("-");
                let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
                if (result) {
                  result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                  const tmp5Result2 = tmp5(tmp6[8]);
                }
                if (result) {
                  closure_1_15[joined] = tmp9.communicationDisabledUntil;
                  sum = sum + 1;
                  closure_1_19[joined] = sum;
                }
              }
            }
            closure_1_23(guildId, table[user.user.id].userId);
          });
          closure_18 = closure_18 + 1;
          flag3 = true;
        }
      }
    }
    return flag;
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(arg0) {
    ({ guildId, owners } = arg0);
    closure_1 = undefined;
    let guild;
    closure_1 = tmp;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = owners.forEach((user) => {
          const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
          ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
          let prop;
          if (table[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj[12] = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj[13] = unusual_dm_activity_until;
          let tmp5Result = tmp5(tmp6[13]);
          obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = tmp5(tmp6[14]);
          obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          table[user.user.id] = closure_1_26(obj);
          if (null != table[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[closure_1_24.GUILD] = tmp4;
              items[closure_1_24.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = tmp5(tmp6[8]);
              }
              if (result) {
                closure_1_15[joined] = tmp9.communicationDisabledUntil;
                sum = sum + 1;
                closure_1_19[joined] = sum;
              }
            }
          }
          closure_1_23(guildId, table[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag = true;
      }
    }
  },
  LOAD_FORUM_POSTS: function handleLoadForumPosts(guildId) {
    guildId = guildId.guildId;
    let warnResult = globalThis;
    const values = Object.values(guildId.threads);
    const reduced = values.reduce((arr, owner) => {
      if (null != owner.owner) {
        arr.push(owner.owner);
      }
      let message_snapshots;
      if (owner != null) {
        const first_message = owner.first_message;
        if (first_message != null) {
          message_snapshots = first_message.message_snapshots;
        }
      }
      if (null != message_snapshots) {
        const first = owner.first_message.message_snapshots[0];
        const moderator_report = first.moderator_report;
        let reported_member;
        if (moderator_report != null) {
          reported_member = moderator_report.reported_member;
        }
        if (null != reported_member) {
          arr.push(first.moderator_report.reported_member);
        }
        const moderator_report2 = first.moderator_report;
        let reporting_member;
        if (moderator_report2 != null) {
          reporting_member = moderator_report2.reporting_member;
        }
        if (null != reporting_member) {
          arr.push(first.moderator_report.reporting_member);
        }
      }
      return arr;
    }, []);
    closure_1 = undefined;
    let guild;
    closure_1 = tmp2;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      guild = store4.getGuild(guildId);
      if (null == guild) {
        warnResult = logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = reduced.forEach((user) => {
          const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
          ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
          let prop;
          if (table[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj[12] = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj[13] = unusual_dm_activity_until;
          let tmp5Result = tmp5(tmp6[13]);
          obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = tmp5(tmp6[14]);
          obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          table[user.user.id] = closure_1_26(obj);
          if (null != table[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[closure_1_24.GUILD] = tmp4;
              items[closure_1_24.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = tmp5(tmp6[8]);
              }
              if (result) {
                closure_1_15[joined] = tmp9.communicationDisabledUntil;
                sum = sum + 1;
                closure_1_19[joined] = sum;
              }
            }
          }
          closure_1_23(guildId, table[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag = true;
      }
    }
  },
  GUILD_ROLE_UPDATE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_DELETE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_MEMBER_REMOVE: function handleGuildMemberRoleRemove(arg0) {
    ({ guildId, userId, roleId } = arg0);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else if (null == tmp[userId]) {
        return false;
      } else {
        let roles = tmp16.roles;
        if (roles.includes(roleId)) {
          roles = tmp16.roles;
          tmp16.roles = roles.filter((arg0) => arg0 !== roleId);
          const tmp4 = computeDerivedMemberState(store3.getUnsafeMutableRoles(guild.id), tmp16.roles);
          const obj = {};
          const merged = Object.assign(tmp16);
          const merged1 = Object.assign(tmp4);
          tmp[userId] = obj;
          return true;
        } else {
          return false;
        }
      }
    }
  },
  GUILD_ROLE_MEMBER_ADD: function handleGuildMemberRoleAdd(arg0) {
    ({ guildId, userId, roleId } = arg0);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else if (null == tmp[userId]) {
        return false;
      } else {
        const roles = tmp17.roles;
        if (roles.includes(roleId)) {
          return false;
        } else {
          const items = [];
          items[HermesBuiltin.arraySpread(tmp17.roles, 0)] = roleId;
          tmp17.roles = items;
          const tmp5 = computeDerivedMemberState(store3.getUnsafeMutableRoles(guild.id), tmp17.roles);
          const obj = {};
          const merged = Object.assign(tmp17);
          const merged1 = Object.assign(tmp5);
          tmp[userId] = obj;
          return true;
        }
      }
    }
  },
  GUILD_MEMBER_PROFILE_UPDATE: function handleGuildMemberProfileUpdate(arg0) {
    ({ guildMember, guildId } = arg0);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else {
        const obj = { userId: null, nick: null, guildId: null, avatar: null, avatarDecoration: null, guildRoles: null, roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, unusualDMActivityUntil: null, flags: null, fullProfileLoadedTimestamp: null, collectibles: null, displayNameStyles: null };
        obj[0] = guildMember.user.id;
        obj[1] = guildMember.nick;
        obj[2] = guildId;
        obj[3] = guildMember.avatar;
        obj[4] = parseAvatarDecorationData.parseAvatarDecorationData(guildMember.avatar_decoration_data);
        obj[5] = store3.getUnsafeMutableRoles(guild.id);
        ({ roles: obj2[6], premium_since: obj2[7], pending: obj2[8], joined_at: obj2[9], communication_disabled_until: obj2[10], unusual_dm_activity_until: obj2[11], flags: obj2[12] } = guildMember);
        const _Date = Date;
        obj[13] = Date.now();
        const obj3 = parseAvatarDecorationData;
        obj[14] = parseSkuIdFromServerData.parseServerUserCollectibles(guildMember.collectibles);
        const obj4 = parseSkuIdFromServerData;
        obj[15] = items2.parseServerDisplayNameStyles(guildMember.display_name_styles);
        tmp[guildMember.user.id] = createMember(obj);
        if (null != tmp[guildMember.user.id].communicationDisabledUntil) {
          let tmp18Result = tmp18(4013);
          if (tmp18Result.isMemberCommunicationDisabled(tmp22)) {
            const items = [];
            items[constants.GUILD] = guildId;
            items[constants.USER] = tmp22.userId;
            const joined = items.join("-");
            let result = dependencyMap4[joined] !== tmp22.communicationDisabledUntil;
            if (result) {
              tmp18Result = tmp18(4013);
              result = tmp18Result.isMemberCommunicationDisabled(tmp22);
            }
            if (result) {
              dependencyMap4[joined] = tmp22.communicationDisabledUntil;
              const sum = c17 + 1;
              c17 = sum;
              closure_19[joined] = sum;
            }
          }
        }
        removeCommunicationDisabled(guildId, tmp[guildMember.user.id].userId);
        const obj5 = items2;
      }
    }
  },
  IMPERSONATE_UPDATE: handleImpersonateUpdate,
  IMPERSONATE_STOP: handleImpersonateUpdate,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(members) {
    let flag = members.members.length > 0;
    if (flag) {
      ({ guildId, members } = members);
      closure_1 = undefined;
      let guild;
      closure_1 = tmp2;
      if (null == dependencyMap[guildId]) {
        flag = false;
      } else {
        guild = store4.getGuild(guildId);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
          let flag3 = false;
        } else {
          const item = members.forEach((user) => {
            const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
            ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
            let prop;
            if (table[user.user.id] != null) {
              prop = tmp2.fullProfileLoadedTimestamp;
            }
            obj[12] = prop;
            let unusual_dm_activity_until = user.unusual_dm_activity_until;
            if (unusual_dm_activity_until == null) {
              let prop1;
              if (tmp2 != null) {
                prop1 = tmp2.unusualDMActivityUntil;
              }
              unusual_dm_activity_until = prop1;
            }
            obj[13] = unusual_dm_activity_until;
            let tmp5Result = tmp5(tmp6[13]);
            obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
            tmp5Result = tmp5(tmp6[14]);
            obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
            table[user.user.id] = closure_1_26(obj);
            if (null != table[user.user.id].communicationDisabledUntil) {
              if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
                const items = [];
                items[closure_1_24.GUILD] = tmp4;
                items[closure_1_24.USER] = tmp9.userId;
                const joined = items.join("-");
                let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
                if (result) {
                  result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                  const tmp5Result2 = tmp5(tmp6[8]);
                }
                if (result) {
                  closure_1_15[joined] = tmp9.communicationDisabledUntil;
                  sum = sum + 1;
                  closure_1_19[joined] = sum;
                }
              }
            }
            closure_1_23(guildId, table[user.user.id].userId);
          });
          closure_18 = closure_18 + 1;
          flag3 = true;
        }
      }
    }
    return flag;
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function handleClearPendingUpdates(guildId) {
    if (null == guildId.guildId) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(guildId) {
    if (null != guildId.guildId) {
      if (null != store4.getGuild(guildId.guildId)) {
        c16 = true;
        let obj = dependencyMap[guildId.guildId];
        if (obj == null) {
          obj = {};
        }
        dependencyMap[guildId.guildId] = obj;
        let flag = false;
        c16 = true;
        obj = dependencyMap[guildId.guildId];
        if (obj == null) {
          obj = {};
        }
        dependencyMap[guildId.guildId] = obj;
        const members = guildId.members;
        for (const item10017 of members) {
          let tmp5 = item10017;
          let tmp6 = dependencyMap;
          if (null == dependencyMap[arg0.guildId][item10017.userId]) {
            flag = true;
            let tmp7 = dependencyMap;
            let tmp8 = item10017;
            dependencyMap[arg0.guildId][tmp5.userId] = tmp5;
          }
          continue;
        }
        return flag;
      }
    }
    return false;
  },
  MESSAGE_CREATE: handleIncomingMessage,
  MESSAGE_UPDATE: handleIncomingMessage,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const item = pins.forEach((message) => {
      callback(message.message);
    });
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function hangdleMemberSafetyGuildMemberSearchSuccess(arg0) {
    ({ guildId, members } = arg0);
    const mapped = members.map((member) => member.member);
    closure_1 = undefined;
    let guild;
    closure_1 = tmp;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = mapped.forEach((user) => {
          const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
          ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
          let prop;
          if (table[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj[12] = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj[13] = unusual_dm_activity_until;
          let tmp5Result = tmp5(tmp6[13]);
          obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = tmp5(tmp6[14]);
          obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          table[user.user.id] = closure_1_26(obj);
          if (null != table[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[closure_1_24.GUILD] = tmp4;
              items[closure_1_24.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = tmp5(tmp6[8]);
              }
              if (result) {
                closure_1_15[joined] = tmp9.communicationDisabledUntil;
                sum = sum + 1;
                closure_1_19[joined] = sum;
              }
            }
          }
          closure_1_23(guildId, table[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag = true;
      }
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    instance = instance.instance;
    let obj = getEmbeddedActivityLocationChannelId;
    const embeddedActivityLocationGuildId = obj.getEmbeddedActivityLocationGuildId(instance.location);
    let tmp3 = null != embeddedActivityLocationGuildId;
    if (tmp3) {
      const participants = instance.participants;
      obj = { id: null, members: null };
      obj[0] = embeddedActivityLocationGuildId;
      const found = participants.filter(isActivityParticipantValidGuildMemberDefault);
      obj[1] = found.map((member) => member.member);
      tmp3 = buildMembers(obj);
    }
    return tmp3;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(channelId) {
    const channel = store2.getChannel(channelId.channelId);
    const resolved = channelId.resolved;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let members;
    if (resolved != null) {
      members = resolved.members;
    }
    let tmp4 = null != members && null != guild_id;
    if (tmp4) {
      const obj = { id: null, members: null };
      obj[0] = guild_id;
      const _Object = Object;
      const entries = Object.entries(resolved.members);
      const mapped = entries.map((arg0) => {
        [tmp, tmp2] = arg0;
        let tmp3;
        if (resolved != null) {
          const users = resolved.users;
          if (users != null) {
            tmp3 = users[tmp];
          }
        }
        if (null != tmp3) {
          const obj = {};
          const merged = Object.assign(tmp2);
          obj.user = tmp3;
          return obj;
        }
      });
      obj[1] = mapped.filter((arg0) => null != arg0);
      tmp4 = buildMembers(obj);
    }
    return tmp4;
  }
});
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    if (c16) {
      c16 = false;
    } else {
      closure_11 = {};
      closure_12 = {};
    }
    closure_15 = {};
    guilds = guilds.guilds;
    const item = guilds.forEach((arg0) => {
      callback(arg0);
    });
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(guilds) {
    guilds = guilds.guilds;
    let item = guilds.forEach((id) => {
      id = id.id;
      callback({ id, members: id.members });
      const activity_instances = id.activity_instances;
      if (activity_instances != null) {
        const item = activity_instances.forEach((participants) => {
          participants = participants.participants;
          const obj = { id, members: null };
          const found = participants.filter(closure_1_1(closure_1_2[16]));
          obj[1] = found.map((member) => member.member);
          closure_1_30(obj);
        });
      }
    });
  },
  OVERLAY_INITIALIZE: function handleInitialize(guildMembers) {
    const obj = {};
    const merged = Object.assign(guildMembers.guildMembers);
    closure_12 = {};
  },
  CACHE_LOADED: function handleCacheLoaded(guildMembers) {
    c16 = true;
    const obj = {};
    const merged = Object.assign(guildMembers.guildMembers);
    closure_12 = {};
    closure_14 = {};
    handleCachedGuilds(guildMembers.guilds);
  },
  CACHE_LOADED_LAZY: function handleCacheLoadedLazy(guilds) {
    handleCachedGuilds(guilds.guilds);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    return buildMembers(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    delete tmp2[tmp];
    delete tmp2[tmp];
    removeCommunicationDisabled(guild.guild.id);
  },
  GUILD_MEMBER_ADD: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE_LOCAL: function handleGuildMemberUpdateLocal(arg0) {
    ({ guildId, roles, addedRoleIds, removedRoleIds, flags } = arg0);
    const id = store.getId();
    let tmp3 = null;
    if (null != dependencyMap[guildId]) {
      tmp3 = tmp2[id];
    }
    if (null == tmp3) {
      return false;
    } else {
      const guild = store4.getGuild(guildId);
      if (null == guild) {
        return false;
      } else {
        let obj = dependencyMap5[guildId];
        if (obj == null) {
          obj = {};
        }
        const obj2 = applyDefault;
        const tmp12 = dependencyMap5;
        let added = obj.added;
        if (added == null) {
          added = [];
        }
        let items = removedRoleIds;
        const obj3 = applyDefault;
        if (removedRoleIds == null) {
          items = [];
        }
        obj = { added: null, removed: null };
        obj[0] = obj2.difference(applyDefault.union(added, addedRoleIds), items);
        let tmp4Result = tmp4(12);
        tmp4Result = tmp4(12);
        let removed = obj.removed;
        if (removed == null) {
          removed = [];
        }
        const unionResult = applyDefault.union(added, addedRoleIds);
        if (addedRoleIds == null) {
          addedRoleIds = [];
        }
        obj[1] = tmp4Result.difference(tmp4Result.union(removed, removedRoleIds), addedRoleIds);
        tmp12[guildId] = obj;
        obj = { userId: null, guildId: null, nick: null, avatar: null, avatarDecoration: null, guildRoles: null, roles: null, premiumSince: null, isPending: null, joinedAt: null, flags: null, fullProfileLoadedTimestamp: null, collectibles: null, displayNameStyles: null };
        obj[0] = id;
        obj[1] = guildId;
        ({ nick: obj7[2], avatar: obj7[3], avatarDecoration: obj7[4] } = tmp3);
        obj[5] = store3.getUnsafeMutableRoles(guild.id);
        if (roles == null) {
          roles = tmp3.roles;
        }
        obj[6] = roles;
        ({ premiumSince: obj7[7], isPending: obj7[8], joinedAt: obj7[9] } = tmp3);
        if (flags == null) {
          flags = tmp3.flags;
        }
        obj[10] = flags;
        ({ fullProfileLoadedTimestamp: obj7[11], collectibles: obj7[12], displayNameStyles: obj7[13] } = tmp3);
        tmp2[id] = createMember(obj);
      }
    }
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    let flag = false;
    const iter = arg0.chunks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = batchUpdateGuildMembers;
      let tmp3 = batchUpdateGuildMembers(nextResult.guildId, nextResult.members) || flag;
      flag = tmp3;
      continue;
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    const id = guildId.user.id;
    if (null != dependencyMap[guildId]) {
      if (null != tmp3[id]) {
        delete tmp[tmp2];
        removeCommunicationDisabled(guildId, id);
        closure_18 = closure_18 + 1;
      }
    }
  },
  GUILD_MEMBER_REMOVE_LOCAL: function handleGuildMemberRemoveLocal(arg0) {
    ({ guildId, userId } = arg0);
    if (null != dependencyMap[guildId]) {
      if (null != tmp3[userId]) {
        delete tmp[tmp2];
        removeCommunicationDisabled(guildId, userId);
        closure_18 = closure_18 + 1;
      }
    }
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    ({ guildId, members } = arg0);
    const mapped = members.map((member) => member.member);
    const found = mapped.filter(guildId(guild[15]).isNotNullish);
    closure_1 = undefined;
    guild = undefined;
    closure_1 = tmp;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = found.forEach((user) => {
          const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
          ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
          let prop;
          if (table[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj[12] = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj[13] = unusual_dm_activity_until;
          let tmp5Result = tmp5(tmp6[13]);
          obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = tmp5(tmp6[14]);
          obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          table[user.user.id] = closure_1_26(obj);
          if (null != table[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[closure_1_24.GUILD] = tmp4;
              items[closure_1_24.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = tmp5(tmp6[8]);
              }
              if (result) {
                closure_1_15[joined] = tmp9.communicationDisabledUntil;
                sum = sum + 1;
                closure_1_19[joined] = sum;
              }
            }
          }
          closure_1_23(guildId, table[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag = true;
      }
    }
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    ({ guildId, addedMembers } = arg0);
    let flag = null != addedMembers;
    if (flag) {
      const mapped = addedMembers.map((member) => member.member);
      const found = mapped.filter(guildId(guild[15]).isNotNullish);
      closure_1 = undefined;
      guild = undefined;
      closure_1 = tmp4;
      if (null == dependencyMap[guildId]) {
        flag = false;
      } else {
        guild = store4.getGuild(guildId);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
          let flag3 = false;
        } else {
          const item = found.forEach((user) => {
            const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
            ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
            let prop;
            if (table[user.user.id] != null) {
              prop = tmp2.fullProfileLoadedTimestamp;
            }
            obj[12] = prop;
            let unusual_dm_activity_until = user.unusual_dm_activity_until;
            if (unusual_dm_activity_until == null) {
              let prop1;
              if (tmp2 != null) {
                prop1 = tmp2.unusualDMActivityUntil;
              }
              unusual_dm_activity_until = prop1;
            }
            obj[13] = unusual_dm_activity_until;
            let tmp5Result = tmp5(tmp6[13]);
            obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
            tmp5Result = tmp5(tmp6[14]);
            obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
            table[user.user.id] = closure_1_26(obj);
            if (null != table[user.user.id].communicationDisabledUntil) {
              if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
                const items = [];
                items[closure_1_24.GUILD] = tmp4;
                items[closure_1_24.USER] = tmp9.userId;
                const joined = items.join("-");
                let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
                if (result) {
                  result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                  const tmp5Result2 = tmp5(tmp6[8]);
                }
                if (result) {
                  closure_1_15[joined] = tmp9.communicationDisabledUntil;
                  sum = sum + 1;
                  closure_1_19[joined] = sum;
                }
              }
            }
            closure_1_23(guildId, table[user.user.id].userId);
          });
          closure_18 = closure_18 + 1;
          flag3 = true;
        }
      }
    }
    return flag;
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(arg0) {
    ({ guildId, owners } = arg0);
    closure_1 = undefined;
    let guild;
    closure_1 = tmp;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = owners.forEach((user) => {
          const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
          ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
          let prop;
          if (table[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj[12] = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj[13] = unusual_dm_activity_until;
          let tmp5Result = tmp5(tmp6[13]);
          obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = tmp5(tmp6[14]);
          obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          table[user.user.id] = closure_1_26(obj);
          if (null != table[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[closure_1_24.GUILD] = tmp4;
              items[closure_1_24.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = tmp5(tmp6[8]);
              }
              if (result) {
                closure_1_15[joined] = tmp9.communicationDisabledUntil;
                sum = sum + 1;
                closure_1_19[joined] = sum;
              }
            }
          }
          closure_1_23(guildId, table[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag = true;
      }
    }
  },
  LOAD_FORUM_POSTS: function handleLoadForumPosts(guildId) {
    guildId = guildId.guildId;
    let warnResult = globalThis;
    const values = Object.values(guildId.threads);
    const reduced = values.reduce((arr, owner) => {
      if (null != owner.owner) {
        arr.push(owner.owner);
      }
      let message_snapshots;
      if (owner != null) {
        const first_message = owner.first_message;
        if (first_message != null) {
          message_snapshots = first_message.message_snapshots;
        }
      }
      if (null != message_snapshots) {
        const first = owner.first_message.message_snapshots[0];
        const moderator_report = first.moderator_report;
        let reported_member;
        if (moderator_report != null) {
          reported_member = moderator_report.reported_member;
        }
        if (null != reported_member) {
          arr.push(first.moderator_report.reported_member);
        }
        const moderator_report2 = first.moderator_report;
        let reporting_member;
        if (moderator_report2 != null) {
          reporting_member = moderator_report2.reporting_member;
        }
        if (null != reporting_member) {
          arr.push(first.moderator_report.reporting_member);
        }
      }
      return arr;
    }, []);
    closure_1 = undefined;
    let guild;
    closure_1 = tmp2;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      guild = store4.getGuild(guildId);
      if (null == guild) {
        warnResult = logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = reduced.forEach((user) => {
          const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
          ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
          let prop;
          if (table[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj[12] = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj[13] = unusual_dm_activity_until;
          let tmp5Result = tmp5(tmp6[13]);
          obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = tmp5(tmp6[14]);
          obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          table[user.user.id] = closure_1_26(obj);
          if (null != table[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[closure_1_24.GUILD] = tmp4;
              items[closure_1_24.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = tmp5(tmp6[8]);
              }
              if (result) {
                closure_1_15[joined] = tmp9.communicationDisabledUntil;
                sum = sum + 1;
                closure_1_19[joined] = sum;
              }
            }
          }
          closure_1_23(guildId, table[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag = true;
      }
    }
  },
  GUILD_ROLE_UPDATE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_DELETE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_MEMBER_REMOVE: function handleGuildMemberRoleRemove(arg0) {
    ({ guildId, userId, roleId } = arg0);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else if (null == tmp[userId]) {
        return false;
      } else {
        let roles = tmp16.roles;
        if (roles.includes(roleId)) {
          roles = tmp16.roles;
          tmp16.roles = roles.filter((arg0) => arg0 !== roleId);
          const tmp4 = computeDerivedMemberState(store3.getUnsafeMutableRoles(guild.id), tmp16.roles);
          const obj = {};
          const merged = Object.assign(tmp16);
          const merged1 = Object.assign(tmp4);
          tmp[userId] = obj;
          return true;
        } else {
          return false;
        }
      }
    }
  },
  GUILD_ROLE_MEMBER_ADD: function handleGuildMemberRoleAdd(arg0) {
    ({ guildId, userId, roleId } = arg0);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else if (null == tmp[userId]) {
        return false;
      } else {
        const roles = tmp17.roles;
        if (roles.includes(roleId)) {
          return false;
        } else {
          const items = [];
          items[HermesBuiltin.arraySpread(tmp17.roles, 0)] = roleId;
          tmp17.roles = items;
          const tmp5 = computeDerivedMemberState(store3.getUnsafeMutableRoles(guild.id), tmp17.roles);
          const obj = {};
          const merged = Object.assign(tmp17);
          const merged1 = Object.assign(tmp5);
          tmp[userId] = obj;
          return true;
        }
      }
    }
  },
  GUILD_MEMBER_PROFILE_UPDATE: function handleGuildMemberProfileUpdate(arg0) {
    ({ guildMember, guildId } = arg0);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else {
        const obj = { userId: null, nick: null, guildId: null, avatar: null, avatarDecoration: null, guildRoles: null, roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, unusualDMActivityUntil: null, flags: null, fullProfileLoadedTimestamp: null, collectibles: null, displayNameStyles: null };
        obj[0] = guildMember.user.id;
        obj[1] = guildMember.nick;
        obj[2] = guildId;
        obj[3] = guildMember.avatar;
        obj[4] = parseAvatarDecorationData.parseAvatarDecorationData(guildMember.avatar_decoration_data);
        obj[5] = store3.getUnsafeMutableRoles(guild.id);
        ({ roles: obj2[6], premium_since: obj2[7], pending: obj2[8], joined_at: obj2[9], communication_disabled_until: obj2[10], unusual_dm_activity_until: obj2[11], flags: obj2[12] } = guildMember);
        const _Date = Date;
        obj[13] = Date.now();
        const obj3 = parseAvatarDecorationData;
        obj[14] = parseSkuIdFromServerData.parseServerUserCollectibles(guildMember.collectibles);
        const obj4 = parseSkuIdFromServerData;
        obj[15] = items2.parseServerDisplayNameStyles(guildMember.display_name_styles);
        tmp[guildMember.user.id] = createMember(obj);
        if (null != tmp[guildMember.user.id].communicationDisabledUntil) {
          let tmp18Result = tmp18(4013);
          if (tmp18Result.isMemberCommunicationDisabled(tmp22)) {
            const items = [];
            items[constants.GUILD] = guildId;
            items[constants.USER] = tmp22.userId;
            const joined = items.join("-");
            let result = dependencyMap4[joined] !== tmp22.communicationDisabledUntil;
            if (result) {
              tmp18Result = tmp18(4013);
              result = tmp18Result.isMemberCommunicationDisabled(tmp22);
            }
            if (result) {
              dependencyMap4[joined] = tmp22.communicationDisabledUntil;
              const sum = c17 + 1;
              c17 = sum;
              closure_19[joined] = sum;
            }
          }
        }
        removeCommunicationDisabled(guildId, tmp[guildMember.user.id].userId);
        const obj5 = items2;
      }
    }
  },
  IMPERSONATE_UPDATE: handleImpersonateUpdate,
  IMPERSONATE_STOP: handleImpersonateUpdate,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(members) {
    let flag = members.members.length > 0;
    if (flag) {
      ({ guildId, members } = members);
      closure_1 = undefined;
      let guild;
      closure_1 = tmp2;
      if (null == dependencyMap[guildId]) {
        flag = false;
      } else {
        guild = store4.getGuild(guildId);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
          let flag3 = false;
        } else {
          const item = members.forEach((user) => {
            const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
            ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
            let prop;
            if (table[user.user.id] != null) {
              prop = tmp2.fullProfileLoadedTimestamp;
            }
            obj[12] = prop;
            let unusual_dm_activity_until = user.unusual_dm_activity_until;
            if (unusual_dm_activity_until == null) {
              let prop1;
              if (tmp2 != null) {
                prop1 = tmp2.unusualDMActivityUntil;
              }
              unusual_dm_activity_until = prop1;
            }
            obj[13] = unusual_dm_activity_until;
            let tmp5Result = tmp5(tmp6[13]);
            obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
            tmp5Result = tmp5(tmp6[14]);
            obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
            table[user.user.id] = closure_1_26(obj);
            if (null != table[user.user.id].communicationDisabledUntil) {
              if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
                const items = [];
                items[closure_1_24.GUILD] = tmp4;
                items[closure_1_24.USER] = tmp9.userId;
                const joined = items.join("-");
                let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
                if (result) {
                  result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                  const tmp5Result2 = tmp5(tmp6[8]);
                }
                if (result) {
                  closure_1_15[joined] = tmp9.communicationDisabledUntil;
                  sum = sum + 1;
                  closure_1_19[joined] = sum;
                }
              }
            }
            closure_1_23(guildId, table[user.user.id].userId);
          });
          closure_18 = closure_18 + 1;
          flag3 = true;
        }
      }
    }
    return flag;
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function handleClearPendingUpdates(guildId) {
    if (null == guildId.guildId) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(guildId) {
    if (null != guildId.guildId) {
      if (null != store4.getGuild(guildId.guildId)) {
        c16 = true;
        let obj = dependencyMap[guildId.guildId];
        if (obj == null) {
          obj = {};
        }
        dependencyMap[guildId.guildId] = obj;
        let flag = false;
        c16 = true;
        obj = dependencyMap[guildId.guildId];
        if (obj == null) {
          obj = {};
        }
        dependencyMap[guildId.guildId] = obj;
        const members = guildId.members;
        for (const item10017 of members) {
          let tmp5 = item10017;
          let tmp6 = dependencyMap;
          if (null == dependencyMap[arg0.guildId][item10017.userId]) {
            flag = true;
            let tmp7 = dependencyMap;
            let tmp8 = item10017;
            dependencyMap[arg0.guildId][tmp5.userId] = tmp5;
          }
          continue;
        }
        return flag;
      }
    }
    return false;
  },
  MESSAGE_CREATE: handleIncomingMessage,
  MESSAGE_UPDATE: handleIncomingMessage,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    const item = pins.forEach((message) => {
      callback(message.message);
    });
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function hangdleMemberSafetyGuildMemberSearchSuccess(arg0) {
    ({ guildId, members } = arg0);
    const mapped = members.map((member) => member.member);
    closure_1 = undefined;
    let guild;
    closure_1 = tmp;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      guild = store4.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = mapped.forEach((user) => {
          const obj = { userId: user.user.id, nick: user.nick, guildId, avatar: user.avatar, avatarDecoration: guildId(guild[12]).parseAvatarDecorationData(user.avatar_decoration_data), guildRoles: closure_1_7.getUnsafeMutableRoles(guild.id), roles: null, premiumSince: null, isPending: null, joinedAt: null, communicationDisabledUntil: null, flags: null, fullProfileLoadedTimestamp: null, unusualDMActivityUntil: null, collectibles: null, displayNameStyles: null };
          ({ roles: obj[6], premium_since: obj[7], pending: obj[8], joined_at: obj[9], communication_disabled_until: obj[10], flags: obj[11] } = user);
          let prop;
          if (table[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj[12] = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj[13] = unusual_dm_activity_until;
          let tmp5Result = tmp5(tmp6[13]);
          obj[14] = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = tmp5(tmp6[14]);
          obj[15] = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          table[user.user.id] = closure_1_26(obj);
          if (null != table[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[closure_1_24.GUILD] = tmp4;
              items[closure_1_24.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_1_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = tmp5(tmp6[8]).isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = tmp5(tmp6[8]);
              }
              if (result) {
                closure_1_15[joined] = tmp9.communicationDisabledUntil;
                sum = sum + 1;
                closure_1_19[joined] = sum;
              }
            }
          }
          closure_1_23(guildId, table[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag = true;
      }
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    instance = instance.instance;
    let obj = getEmbeddedActivityLocationChannelId;
    const embeddedActivityLocationGuildId = obj.getEmbeddedActivityLocationGuildId(instance.location);
    let tmp3 = null != embeddedActivityLocationGuildId;
    if (tmp3) {
      const participants = instance.participants;
      obj = { id: null, members: null };
      obj[0] = embeddedActivityLocationGuildId;
      const found = participants.filter(isActivityParticipantValidGuildMemberDefault);
      obj[1] = found.map((member) => member.member);
      tmp3 = buildMembers(obj);
    }
    return tmp3;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(channelId) {
    const channel = store2.getChannel(channelId.channelId);
    const resolved = channelId.resolved;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let members;
    if (resolved != null) {
      members = resolved.members;
    }
    let tmp4 = null != members && null != guild_id;
    if (tmp4) {
      const obj = { id: null, members: null };
      obj[0] = guild_id;
      const _Object = Object;
      const entries = Object.entries(resolved.members);
      const mapped = entries.map((arg0) => {
        [tmp, tmp2] = arg0;
        let tmp3;
        if (resolved != null) {
          const users = resolved.users;
          if (users != null) {
            tmp3 = users[tmp];
          }
        }
        if (null != tmp3) {
          const obj = {};
          const merged = Object.assign(tmp2);
          obj.user = tmp3;
          return obj;
        }
      });
      obj[1] = mapped.filter((arg0) => null != arg0);
      tmp4 = buildMembers(obj);
    }
    return tmp4;
  }
};
let tmp2 = new timestampDefault("GuildMemberStore");
let result = set.fileFinishedImporting("stores/GuildMemberStore.tsx");

export default guildMemberStore;
export const getUserCommunicationDisabledVersion = function getUserCommunicationDisabledVersion(arg0, arg1) {
  const items = [];
  items[constants.GUILD] = arg0;
  items[constants.USER] = arg1;
  const joined = items.join("-");
  let num = -1;
  if (joined in table2) {
    num = table2[joined];
  }
  return num;
};
export const getCommunicationDisabledUserKey = function getCommunicationDisabledUserKey(arg0, arg1) {
  const items = [];
  items[constants.GUILD] = arg0;
  items[constants.USER] = arg1;
  return items.join("-");
};
export const getUserIdFromCommunicationDisabledUserKey = function getUserIdFromCommunicationDisabledUserKey(arg0) {
  return arg0.split("-")[constants.USER];
};
export const getGuildIdFromCommunicationDisabledUserKey = function getGuildIdFromCommunicationDisabledUserKey(arg0) {
  return arg0.split("-")[constants.GUILD];
};