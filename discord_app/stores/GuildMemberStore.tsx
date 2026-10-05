// discord_app/stores/GuildMemberStore.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import DisplayNameStylesUtils from "../modules/display_name_styles/DisplayNameStylesUtils.tsx";
import AvatarDecorationUtils from "../modules/collectibles/avatar_decorations/AvatarDecorationUtils.tsx";
import mappers from "../modules/collectibles/utils/mappers.tsx";
import isActivityParticipantValidGuildMemberDefault from "../modules/activities/isActivityParticipantValidGuildMember.tsx";
import GuildRoleUtils from "../utils/GuildRoleUtils.tsx";
import useCommunicationDisabledNoticeStore from "../modules/guild_communication_disabled/useCommunicationDisabledNoticeStore.tsx";
import GuildMemberConstants from "../modules/guild_member/GuildMemberConstants.tsx";
import CommunicationDisabledUtils from "../modules/guild_communication_disabled/CommunicationDisabledUtils.tsx";
import GuildLeaderboardTypes from "../modules/guild_space/gaming_leaderboard/GuildLeaderboardTypes.tsx";
import embeddedActivityLocationUtils from "../modules/activities/utils/embeddedActivityLocationUtils.tsx";
import ImpersonateStore from "../modules/impersonate/ImpersonateStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildRoleStore from "GuildRoleStore.tsx";
import GuildStore from "GuildStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_14, hasOwnProperty;

const f85885 = (member) => member.member;
function trackCommunicationDisabled(guildId, tmp10Result) {
  if (null != tmp10Result.communicationDisabledUntil) {
    const obj2 = CommunicationDisabledUtils;
    if (obj2.isMemberCommunicationDisabled(tmp10Result)) {
      const items = [];
      items[constants.GUILD] = guildId;
      items[constants.USER] = tmp10Result.userId;
      const joined = items.join("-");
      let result = closure_15[joined] !== tmp10Result.communicationDisabledUntil;
      if (result) {
        tmp10Result = CommunicationDisabledUtils;
        result = tmp10Result.isMemberCommunicationDisabled(tmp10Result);
      }
      if (result) {
        closure_15[joined] = tmp10Result.communicationDisabledUntil;
        const sum = sum1 + 1;
        sum1 = sum;
        closure_19[joined] = sum;
      }
    }
  }
  removeCommunicationDisabled(guildId, tmp10Result.userId);
}
function removeCommunicationDisabled(guildId, userId) {
  if (null != userId) {
    const items = [];
    items[constants.GUILD] = guildId;
    items[constants.USER] = userId;
    const joined = items.join("-");
    if (null != closure_15[joined]) {
      const sum = sum1 + 1;
      sum1 = sum;
      closure_19[joined] = sum;
    }
    const items1 = [];
    items1[constants.GUILD] = guildId;
    items1[constants.USER] = userId;
    const str2 = items1.join("-");
    if (str2.split("-")[constants.USER] === AuthenticationStore.getId()) {
      closure_3(str2.split("-")[constants.GUILD]);
    }
    delete closure_15[str2];
  } else {
    for (const key10003 in closure_15) {
      if (key10003.split("-")[constants.GUILD] !== guildId) {
        continue;
      } else {
        sum1 = sum1 + 1;
        closure_19[key10003] = sum1;
        if (key10003.split("-")[constants.USER] === AuthenticationStore.getId()) {
          let tmp6 = closure_3(key10003.split("-")[constants.GUILD]);
        }
        delete closure_15[key10003];
        continue;
      }
      continue;
    }
  }
}
function computeDerivedMemberState(unsafeMutableRoles, roles) {
  let colorStrings;
  let id;
  let id1;
  let id2;
  let id3;
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  if (0 === roles.length) {
    return {
      colorString: null,
      colorStrings: null,
      colorRoleId: "concat",
      hoistRoleId: "lj",
      iconRoleId: "key",
      highestRoleId: "userId",
    };
  } else {
    const iter = roles[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp7 = unsafeMutableRoles[iter.next()];
      let tmp8 = tmp7;
      if (null != tmp7) {
        let doesRoleSortHigherResult = null == tmp4;
        if (!doesRoleSortHigherResult) {
          obj = GuildRoleUtils;
          doesRoleSortHigherResult = obj.doesRoleSortHigher(tmp8, tmp4);
        }
        if (doesRoleSortHigherResult) {
          tmp4 = tmp7;
        }
        let tmp15 = tmp8.color > 0;
        if (tmp15) {
          let doesRoleSortHigherResult1 = null == tmp;
          if (!doesRoleSortHigherResult1) {
            let obj2 = GuildRoleUtils;
            doesRoleSortHigherResult1 = obj2.doesRoleSortHigher(tmp8, tmp);
          }
          tmp15 = doesRoleSortHigherResult1;
        }
        if (tmp15) {
          tmp = tmp7;
        }
        let hoist = tmp8.hoist;
        if (hoist) {
          let doesRoleSortHigherResult2 = null == tmp2;
          if (!doesRoleSortHigherResult2) {
            let obj3 = GuildRoleUtils;
            doesRoleSortHigherResult2 = obj3.doesRoleSortHigher(tmp8, tmp2);
          }
          hoist = doesRoleSortHigherResult2;
        }
        if (hoist) {
          tmp2 = tmp7;
        }
        let tmp30 = null != tmp8.icon;
        if (!tmp30) {
          tmp30 = null != tmp8.unicodeEmoji;
        }
        if (tmp30) {
          let doesRoleSortHigherResult3 = null == tmp3;
          if (!doesRoleSortHigherResult3) {
            let obj4 = GuildRoleUtils;
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
    const obj5 = { colorString, colorStrings, colorRoleId: id, iconRoleId: id1, hoistRoleId: id2, highestRoleId: id3 };
    colorStrings = undefined;
    if (tmp != null) {
      colorStrings = tmp.colorStrings;
    }
    if (colorStrings == null) {
      colorStrings = null;
    }
    id = undefined;
    if (tmp != null) {
      id = tmp.id;
    }
    id1 = undefined;
    if (tmp3 != null) {
      id1 = tmp3.id;
    }
    id2 = undefined;
    if (tmp2 != null) {
      id2 = tmp2.id;
    }
    id3 = undefined;
    if (tmp4 != null) {
      id3 = tmp4.id;
    }
    return obj5;
  }
}
function createMember(guildRoles) {
  let avatar;
  let avatarDecoration;
  let collectibles;
  let communicationDisabledUntil;
  let displayNameStyles;
  let flags;
  let fullProfileLoadedTimestamp;
  let gamingLeaderboardData;
  let guildId;
  let isPending;
  let joinedAt;
  let keys;
  let nick;
  let premiumSince;
  let roles;
  let unusualDMActivityUntil;
  let userId;
  let vadColors;
  ({ userId, guildId, roles } = guildRoles);
  ({
    nick,
    avatar,
    avatarDecoration,
    premiumSince,
    isPending,
    joinedAt,
    communicationDisabledUntil,
    unusualDMActivityUntil,
    fullProfileLoadedTimestamp,
    flags,
    collectibles,
    displayNameStyles,
    gamingLeaderboardData,
    vadColors,
  } = guildRoles);
  const tmp = computeDerivedMemberState(guildRoles.guildRoles, roles);
  obj = {
    userId,
    nick,
    guildId,
    avatar,
    avatarDecoration,
    roles,
    colorString: tmp.colorString,
    colorStrings: tmp.colorStrings,
    colorRoleId: tmp.colorRoleId,
    iconRoleId: tmp.iconRoleId,
    hoistRoleId: tmp.hoistRoleId,
    highestRoleId: tmp.highestRoleId,
    premiumSince,
    isPending,
    joinedAt,
    communicationDisabledUntil,
    unusualDMActivityUntil,
    fullProfileLoadedTimestamp,
    flags,
    collectibles,
    displayNameStyles,
    gamingLeaderboardData,
    vadColors,
  };
  let num = obj.flags;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  if (hasFlag(num, GuildMemberFlags.IS_GUEST)) {
    let num2 = obj.flags;
    const addFlag = FlagUtils.addFlag;
    FlagUtils;
    if (num2 == null) {
      num2 = 0;
    }
    obj.flags = addFlag(num2, GuildMemberFlags.BYPASSES_VERIFICATION);
  }
  if (null == obj[guildId]) {
    return obj;
  } else {
    if (userId === AuthenticationStore.getId()) {
      if (!ImpersonateStore.isViewingRoles(guildId)) {
        if (!ImpersonateStore.isFullServerPreview(guildId)) {
          if (null != closure_13[guildId]) {
            delete closure_13[guildId];
          }
        }
      }
      const viewingRoles = ImpersonateStore.getViewingRoles(guildId);
      const obj2 = { roles: keys };
      const merged = Object.assign(obj);
      const merged1 = Object.assign(ImpersonateStore.getMemberOptions(guildId));
      if (null != viewingRoles) {
        const obj3 = SnowflakeUtilsDefault;
        keys = obj3.keys(viewingRoles);
      } else {
        keys = [];
      }
      closure_13[guildId] = obj2;
    }
    return obj;
  }
}
function handleCachedGuilds(guilds) {
  const iter = guilds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.member) {
      let member;
      let id = tmp2.id;
      if (null == closure_14[tmp2.id]) {
        member = tmp2.member;
      } else {
        member = { roles: tmp2.member.roles };
        let merged = Object.assign(tmp2.member);
      }
      closure_14[id] = member;
      if (null != obj[tmp2.id]) {
        let tmp11 = obj[tmp2.id];
        let tmp12 = tmp11;
        if (null != tmp11[tmp2.member.userId]) {
          obj = { roles: tmp2.member.roles };
          let userId = tmp2.member.userId;
          let merged1 = Object.assign(tmp12[tmp2.member.userId]);
          tmp12[userId] = obj;
        }
      }
    }
    continue;
  }
}
function handleGuildMemberUpdate(arg0) {
  let guildId;
  let obj3;
  let prop;
  let user;
  ({ guildId, user } = arg0);
  if (null == obj[guildId]) {
    return false;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
      return false;
    } else {
      obj = {
        userId: user.id,
        nick: tmp,
        guildId,
        avatar: tmp2,
        avatarDecoration: obj3.parseAvatarDecorationData(tmp3),
        guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
        roles: tmp4,
        premiumSince: tmp5,
        isPending: tmp6,
        joinedAt: tmp7,
        communicationDisabledUntil: tmp8,
        unusualDMActivityUntil: tmp9,
        fullProfileLoadedTimestamp: prop,
        flags: tmp10,
        collectibles: tmp11,
        displayNameStyles: tmp12,
        gamingLeaderboardData: tmp13,
        vadColors: tmp14,
      };
      const id = user.id;
      prop = undefined;
      obj3 = AvatarDecorationUtils;
      if (obj[guildId][user.id] != null) {
        prop = tmp37.fullProfileLoadedTimestamp;
      }
      obj[guildId][id] = createMember(obj);
      if (null != obj[guildId][user.id].communicationDisabledUntil) {
        const tmp34Result = CommunicationDisabledUtils;
        if (tmp34Result.isMemberCommunicationDisabled(obj[guildId][user.id])) {
          const items = [];
          items[constants.GUILD] = guildId;
          items[constants.USER] = obj[guildId][user.id].userId;
          const joined = items.join("-");
          let result = closure_15[joined] !== tmp17.communicationDisabledUntil;
          if (result) {
            const tmp34Result2 = CommunicationDisabledUtils;
            result = tmp34Result2.isMemberCommunicationDisabled(tmp17);
          }
          if (result) {
            closure_15[joined] = obj[guildId][user.id].communicationDisabledUntil;
            const sum = sum1 + 1;
            sum1 = sum;
            closure_19[joined] = sum;
          }
        }
      }
      removeCommunicationDisabled(guildId, obj[guildId][user.id].userId);
    }
  }
}
function batchUpdateGuildMembers(guildId, members) {
  let closure_0 = guildId;
  let closure_1 = tmp;
  if (null == obj[guildId]) {
    return false;
  } else {
    let flag;
    const guild = GuildStore.getGuild(guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
      flag = false;
    } else {
      const item = members.forEach((user) => {
        let obj2;
        let prop;
        let tmp5Result;
        let tmp5Result5;
        let tmp5Result6;
        let unusual_dm_activity_until;
        let vad_colors;
        obj = {
          userId: user.user.id,
          nick: user.nick,
          guildId,
          avatar: user.avatar,
          avatarDecoration: obj2.parseAvatarDecorationData(user.avatar_decoration_data),
          guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
          roles: null,
          premiumSince: null,
          isPending: null,
          joinedAt: null,
          communicationDisabledUntil: null,
          flags: null,
          fullProfileLoadedTimestamp: prop,
          unusualDMActivityUntil: unusual_dm_activity_until,
          collectibles: tmp5Result.parseServerUserCollectibles(user.collectibles),
          displayNameStyles: tmp5Result5.parseServerDisplayNameStyles(user.display_name_styles),
          gamingLeaderboardData: tmp5Result6.parseServerMemberGamingLeaderboardData(
            user.member_gaming_leaderboard_data,
          ),
          vadColors: vad_colors,
        };
        const id = user.user.id;
        ({
          roles: obj.roles,
          premium_since: obj.premiumSince,
          pending: obj.isPending,
          joined_at: obj.joinedAt,
          communication_disabled_until: obj.communicationDisabledUntil,
          flags: obj.flags,
        } = user);
        prop = undefined;
        obj2 = AvatarDecorationUtils;
        if (closure_1[user.user.id] != null) {
          prop = tmp2.fullProfileLoadedTimestamp;
        }
        unusual_dm_activity_until = user.unusual_dm_activity_until;
        if (unusual_dm_activity_until == null) {
          let prop1;
          if (closure_1[user.user.id] != null) {
            prop1 = tmp2.unusualDMActivityUntil;
          }
          unusual_dm_activity_until = prop1;
        }
        tmp5Result = mappers;
        tmp5Result5 = DisplayNameStylesUtils;
        vad_colors = user.vad_colors;
        tmp5Result6 = GuildLeaderboardTypes;
        if (vad_colors == null) {
          vad_colors = null;
        }
        closure_1[id] = createMember(obj);
        if (null != closure_1[user.user.id].communicationDisabledUntil) {
          const tmp5Result7 = CommunicationDisabledUtils;
          if (tmp5Result7.isMemberCommunicationDisabled(closure_1[user.user.id])) {
            const items = [];
            items[constants.GUILD] = guildId;
            items[constants.USER] = closure_1[user.user.id].userId;
            const joined = items.join("-");
            let result = closure_15[joined] !== tmp10.communicationDisabledUntil;
            if (result) {
              const tmp5Result8 = CommunicationDisabledUtils;
              result = tmp5Result8.isMemberCommunicationDisabled(tmp10);
            }
            if (result) {
              closure_15[joined] = closure_1[user.user.id].communicationDisabledUntil;
              const sum = sum1 + 1;
              sum1 = sum;
              closure_19[joined] = sum;
            }
          }
        }
        removeCommunicationDisabled(guildId, closure_1[user.user.id].userId);
      });
      closure_18 = closure_18 + 1;
      flag = true;
    }
    return flag;
  }
}
function getAvatarDecorationFromServerMember(nextResult) {
  obj = AvatarDecorationUtils;
  return obj.parseAvatarDecorationData(nextResult.avatar_decoration_data);
}
function buildMembers(guild) {
  let obj2;
  let obj3;
  let obj4;
  let prop;
  let unusual_dm_activity_until;
  let vad_colors;
  const id = guild.id;
  if (!(id in obj)) {
    obj[guild.id] = {};
  }
  guild = GuildStore.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    const members = guild.members;
    const iter = members[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      let id2 = nextResult.user.id;
      let tmp8 = tmp26[id2];
      let tmp9 = tmp8;
      obj = {
        userId: id2,
        nick: nextResult.nick,
        guildId: guild.id,
        avatar: nextResult.avatar,
        avatarDecoration: getAvatarDecorationFromServerMember(nextResult),
        guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
        roles: null,
        premiumSince: null,
        isPending: null,
        joinedAt: null,
        communicationDisabledUntil: null,
        fullProfileLoadedTimestamp: prop,
        flags: null,
        unusualDMActivityUntil: unusual_dm_activity_until,
        collectibles: obj2.parseServerUserCollectibles(tmp6.collectibles),
        displayNameStyles: obj3.parseServerDisplayNameStyles(tmp6.display_name_styles),
        gamingLeaderboardData: obj4.parseServerMemberGamingLeaderboardData(tmp6.member_gaming_leaderboard_data),
        vadColors: vad_colors,
      };
      let tmp7 = id2;
      ({
        roles: obj.roles,
        premium_since: obj.premiumSince,
        pending: obj.isPending,
        joined_at: obj.joinedAt,
        communication_disabled_until: obj.communicationDisabledUntil,
      } = nextResult);
      prop = undefined;
      if (tmp8 != null) {
        prop = tmp8.fullProfileLoadedTimestamp;
      }
      ({ flags: obj.flags, unusual_dm_activity_until } = tmp6);
      if (unusual_dm_activity_until == null) {
        let prop1;
        if (tmp9 != null) {
          prop1 = tmp9.unusualDMActivityUntil;
        }
        unusual_dm_activity_until = prop1;
      }
      obj2 = mappers;
      obj3 = DisplayNameStylesUtils;
      obj4 = GuildLeaderboardTypes;
      vad_colors = tmp6.vad_colors;
      if (vad_colors == null) {
        vad_colors = null;
      }
      let tmp10Result = createMember(obj);
      tmp26[tmp7] = tmp10Result;
      let tmp24 = trackCommunicationDisabled(id, tmp10Result);
      continue;
    }
    return true;
  }
}
function handleGuildRoleUpdateOrDelete(guildId) {
  let prop;
  let closure_0 = guildId;
  if (null == obj[guildId.guildId]) {
    return false;
  } else {
    const guild = GuildStore.getGuild(guildId.guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      logger.warn("Guild " + guildId.guildId + " not found during " + guildId.type + ".");
      return false;
    } else {
      const id = AuthenticationStore.getId();
      const obj2 = SnowflakeUtilsDefault;
      const keys = obj2.keys(tmp);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        let tmp6 = tmp[nextResult];
        let tmp7 = tmp6;
        if (null == tmp6.roles) {
          continue;
        }
        if (tmp5 === id) {
          if ("GUILD_ROLE_DELETE" === guildId.type) {
            let roles1 = tmp7.roles;
            let roles = roles1.filter((item) => item !== roleId.roleId);
            obj = {
              userId: tmp5,
              nick: tmp7.nick,
              guildId: guildId.guildId,
              avatar: null,
              avatarDecoration: null,
              guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
              roles,
              premiumSince: null,
              isPending: null,
              joinedAt: null,
              flags: null,
              fullProfileLoadedTimestamp: prop,
              collectibles: null,
              displayNameStyles: null,
              gamingLeaderboardData: null,
              vadColors: null,
            };
            ({ avatar: obj.avatar, avatarDecoration: obj.avatarDecoration } = tmp7);
            ({
              premiumSince: obj.premiumSince,
              isPending: obj.isPending,
              joinedAt: obj.joinedAt,
              flags: obj.flags,
            } = tmp7);
            prop = undefined;
            if (tmp7 != null) {
              prop = tmp7.fullProfileLoadedTimestamp;
            }
            ({
              collectibles: obj.collectibles,
              displayNameStyles: obj.displayNameStyles,
              gamingLeaderboardData: obj.gamingLeaderboardData,
              vadColors: obj.vadColors,
            } = tmp7);
            tmp[tmp5] = createMember(obj);
            let tmp22 = trackCommunicationDisabled(guildId.guildId, tmp[tmp5]);
          }
        }
        roles = tmp7.roles;
      }
    }
  }
}
function handleImpersonateUpdate(guildId) {
  guildId = guildId.guildId;
  if (null == obj[guildId]) {
    return false;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      logger.warn("Guild " + guildId + " not found during IMPERSONATE_UPDATE.");
      return false;
    } else {
      const id = AuthenticationStore.getId();
      obj = {
        userId: id,
        nick: obj[guildId][id].nick,
        guildId,
        avatar: null,
        avatarDecoration: null,
        guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
        roles: null,
        premiumSince: null,
        isPending: null,
        joinedAt: null,
        communicationDisabledUntil: null,
        fullProfileLoadedTimestamp: null,
        flags: null,
        collectibles: null,
        displayNameStyles: null,
        gamingLeaderboardData: null,
        vadColors: null,
      };
      ({ avatar: obj.avatar, avatarDecoration: obj.avatarDecoration } = obj[guildId][id]);
      ({
        roles: obj.roles,
        premiumSince: obj.premiumSince,
        isPending: obj.isPending,
        joinedAt: obj.joinedAt,
        communicationDisabledUntil: obj.communicationDisabledUntil,
        fullProfileLoadedTimestamp: obj.fullProfileLoadedTimestamp,
        flags: obj.flags,
        collectibles: obj.collectibles,
        displayNameStyles: obj.displayNameStyles,
        gamingLeaderboardData: obj.gamingLeaderboardData,
        vadColors: obj.vadColors,
      } = obj[guildId][id]);
      obj[guildId][id] = createMember(obj);
    }
  }
}
function handleIncomingMessage(arg0) {
  let guildId;
  let mapped;
  let message;
  ({ message, guildId } = arg0);
  let c1 = false;
  const message_snapshots = message.message_snapshots;
  if (message_snapshots != null) {
    const item = message_snapshots.forEach((message) => {
      let mapped;
      message = message.message;
      let resolved;
      if (message != null) {
        resolved = message.resolved;
      }
      const message_reference = channel_id.message_reference;
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
        obj = { id: guild_id, members: mapped.filter((item) => null != item) };
        const _Object = Object;
        const entries = Object.entries(resolved.members);
        mapped = entries.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          let tmp3;
          if (resolved != null) {
            const users = resolved.users;
            if (users != null) {
              tmp3 = users[tmp];
            }
          }
          if (null != tmp3) {
            obj = { user: tmp3 };
            const merged = Object.assign(tmp2);
            return obj;
          }
        });
        tmp4 = buildMembers(obj);
      }
      if (tmp4) {
        c1 = true;
      }
    });
  }
  const resolved = message.resolved;
  let members;
  if (resolved != null) {
    members = resolved.members;
  }
  let tmp3 = null != members && null != guildId;
  if (tmp3) {
    const _Object = Object;
    obj = { id: guildId, members: mapped.filter((item) => null != item) };
    const entries = Object.entries(resolved.members);
    mapped = entries.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      let tmp3;
      if (resolved != null) {
        const users = resolved.users;
        if (users != null) {
          tmp3 = users[tmp];
        }
      }
      if (null != tmp3) {
        obj = { user: tmp3 };
        const merged = Object.assign(tmp2);
        return obj;
      }
    });
    tmp3 = buildMembers(obj);
  }
  if (!tmp3) {
    tmp3 = c1;
  }
  return tmp3;
}
function mergeMessageResolvedMembers(channel_id) {
  let mapped;
  const channel = ChannelStore.getChannel(channel_id.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let c1 = false;
  const message_snapshots = channel_id.message_snapshots;
  if (message_snapshots != null) {
    const item = message_snapshots.forEach((message) => {
      let mapped;
      message = message.message;
      let resolved;
      if (message != null) {
        resolved = message.resolved;
      }
      const message_reference = channel_id.message_reference;
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
        obj = { id: guild_id, members: mapped.filter((item) => null != item) };
        const _Object = Object;
        const entries = Object.entries(resolved.members);
        mapped = entries.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          let tmp3;
          if (resolved != null) {
            const users = resolved.users;
            if (users != null) {
              tmp3 = users[tmp];
            }
          }
          if (null != tmp3) {
            obj = { user: tmp3 };
            const merged = Object.assign(tmp2);
            return obj;
          }
        });
        tmp4 = buildMembers(obj);
      }
      if (tmp4) {
        c1 = true;
      }
    });
  }
  let resolved = channel_id.resolved;
  let members;
  if (resolved != null) {
    members = resolved.members;
  }
  const tmp5 = null != members && null != guild_id;
  if (tmp5) {
    obj = { id: guild_id, members: mapped.filter((item) => null != item) };
    let _Object = Object;
    let entries = Object.entries(resolved.members);
    mapped = entries.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      let tmp3;
      if (resolved != null) {
        const users = resolved.users;
        if (users != null) {
          tmp3 = users[tmp];
        }
      }
      if (null != tmp3) {
        obj = { user: tmp3 };
        const merged = Object.assign(tmp2);
        return obj;
      }
    });
    buildMembers(obj);
  }
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((item) => {
    mergeMessageResolvedMembers(item);
  });
}
function handleLoadSearchResults(data) {
  data = data.data;
  const items = [];
  let item = data.forEach((messages) => {
    messages = messages.messages;
    let item = messages.forEach((arr) => {
      const item = arr.forEach((item) => {
        closure_1_0.push(item);
      });
    });
  });
  const item1 = items.forEach((item) => {
    mergeMessageResolvedMembers(item);
  });
}
let closure_3 = useCommunicationDisabledNoticeStore.clearCommunicationDisabledNotice;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let tmp2 = new LoggerDefault("GuildMemberStore");
const logger = tmp2;
let obj = {};
let closure_12 = {};
const authStore2 = {};
let closure_15 = {};
let c16 = false;
let sum1 = 0;
let closure_18 = 0;
let closure_19 = {};
let closure_20 = {};
let closure_21 = { added: [], removed: [] };
const constants = { GUILD: 0, [0]: "GUILD", USER: 1, [1]: "USER" };
const Store = get_initializedDefault.Store;
class GuildMemberStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, GuildRoleStore, GuildStore, ImpersonateStore);
  }
  getMutableAllGuildsAndMembers() {
    return obj;
  }
  memberOf(userId) {
    let closure_0 = userId;
    obj = _modDef12(obj);
    const toPairsResult = obj.toPairs();
    const found = toPairsResult.filter((item) => {
      let tmp;
      [, tmp] = item;
      return null != tmp[closure_0];
    });
    const iter = found.map((item) => {
      let tmp;
      [tmp] = item;
      return tmp;
    });
    return iter.value();
  }
  getNicknameGuildsMapping(id) {
    obj = {};
    for (const key10006 in obj) {
      let tmp5 = obj[key10006][id];
      let nick;
      if (tmp5 != null) {
        nick = tmp5.nick;
      }
      if (null == nick) {
        continue;
      } else {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        if (!hasOwnProperty.call(obj, nick)) {
          obj[nick] = [];
        }
        let arr = obj[nick];
        let arr2 = arr.push(key10006);
        continue;
      }
      continue;
    }
    return obj;
  }
  getNicknames(id) {
    return Object.keys(this.getNicknameGuildsMapping(id));
  }
  isMember(arg0, arg1) {
    if (null != arg0) {
      if (null != arg1) {
        return null != obj[arg0] && null != obj[arg0][arg1];
      }
    }
    return false;
  }
  isGuestOrLurker(guild_id, id) {
    if (null != guild_id) {
      if (null != id) {
        let tmp4 = null != tmp3;
        if (tmp4) {
          let joinedAt;
          if (obj[guild_id][id] != null) {
            joinedAt = tmp5.joinedAt;
          }
          tmp4 = null == joinedAt;
        }
        return tmp4;
      }
    }
    return false;
  }
  isCurrentUserGuest(guildId) {
    if (null == guildId) {
      return false;
    } else {
      const id = AuthenticationStore.getId();
      if (null != obj[guildId]) {
        if (null != obj[guildId][id]) {
          const flags = tmp4[id].flags;
          let hasFlagResult = null != flags;
          if (hasFlagResult) {
            obj = FlagUtils;
            hasFlagResult = obj.hasFlag(flags, GuildMemberFlags.IS_GUEST);
          }
          return hasFlagResult;
        }
      }
      return false;
    }
  }
  getMemberIds(id) {
    if (null == id) {
      return [];
    } else {
      let items;
      if (null == obj[id]) {
        items = [];
      } else {
        obj = SnowflakeUtilsDefault;
        items = obj.keys(tmp2);
      }
      return items;
    }
  }
  getMembers(arg0) {
    if (null == arg0) {
      return [];
    } else {
      let items;
      if (null == obj[arg0]) {
        items = [];
      } else {
        const _Object = Object;
        items = Object.values(tmp2);
      }
      return items;
    }
  }
  getTrueMember(guildId, id) {
    let tmp2 = null;
    if (null != obj[guildId]) {
      tmp2 = tmp[id];
    }
    return tmp2;
  }
  getMember(guildId, id) {
    const trueMember = this.getTrueMember(guildId, id);
    let tmp2 = trueMember;
    if (null != trueMember) {
      tmp2 = trueMember;
      if (id === AuthenticationStore.getId()) {
        if (ImpersonateStore.isViewingRoles(guildId)) {
          let tmp5 = closure_13[guildId];
          if (tmp5 == null) {
            tmp5 = trueMember;
          }
          tmp2 = tmp5;
        } else {
          tmp2 = trueMember;
        }
      }
    }
    return tmp2;
  }
  getSelfMember(id) {
    return this.getMember(id, AuthenticationStore.getId());
  }
  getSelfMemberJoinedAt(id) {
    if (null != closure_12[id]) {
      return closure_12[id];
    } else {
      const self = this;
      const selfMember = this.getSelfMember(id);
      if (null != selfMember) {
        if (null != selfMember.joinedAt) {
          const _Date = Date;
          const self2 = this;
          const self3 = this;
          const date = new Date(selfMember.joinedAt);
          closure_12[id] = date;
          return date;
        }
      }
      return null;
    }
  }
  getCachedSelfMember(id) {
    let tmp = closure_14[id];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getNick(guildId, id) {
    if (null != guildId) {
      if (null != id) {
        const self = this;
        const member = this.getMember(guildId, id);
        let nick = null;
        if (null != member) {
          nick = member.nick;
        }
        return nick;
      }
    }
    return null;
  }
  getCommunicationDisabledUserMap() {
    return closure_15;
  }
  getCommunicationDisabledVersion() {
    return sum1;
  }
  getPendingRoleUpdates(arg0) {
    let tmp = closure_20[arg0];
    if (tmp == null) {
      tmp = closure_21;
    }
    return tmp;
  }
  getMemberRoleWithPendingUpdates(arg0, arg1) {
    const member = this.getMember(arg0, arg1);
    let roles;
    if (member != null) {
      roles = member.roles;
    }
    if (roles == null) {
      roles = [];
    }
    let differenceResult = roles;
    if (null != closure_20[arg0]) {
      const difference = _modDef12.difference;
      _modDef12;
      obj = _modDef12;
      differenceResult = difference(obj.union(roles, tmp2.added), tmp2.removed);
    }
    return differenceResult;
  }
  getMemberVersion() {
    return closure_18;
  }
}
const prototype = GuildMemberStore.prototype;
GuildMemberStore.displayName = "GuildMemberStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    const tmp = c16;
    if (tmp) {
      c16 = false;
    } else {
      closure_12 = {};
    }
    closure_15 = {};
    guilds = guilds.guilds;
    const item = guilds.forEach((item) => {
      buildMembers(item);
    });
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(guilds) {
    guilds = guilds.guilds;
    let item = guilds.forEach((id) => {
      id = id.id;
      obj = { id, members: id.members };
      closure_30(obj);
      const activity_instances = id.activity_instances;
      if (activity_instances != null) {
        const item = activity_instances.forEach((participants) => {
          let found;
          participants = participants.participants;
          obj = { id, members: found.map(f85885) };
          found = participants.filter(isActivityParticipantValidGuildMemberDefault);
          buildMembers(obj);
        });
      }
    });
  },
  OVERLAY_INITIALIZE: function handleInitialize(guildMembers) {
    obj = {};
    const merged = Object.assign(guildMembers.guildMembers);
    closure_12 = {};
  },
  CACHE_LOADED: function handleCacheLoaded(guilds) {
    c16 = true;
    guilds = guilds.guilds;
    const merged = Object.assign(guilds.guildMembers);
    closure_12 = {};
    closure_14 = {};
    handleCachedGuilds(guilds);
  },
  CACHE_LOADED_LAZY: function handleCacheLoadedLazy(guilds) {
    handleCachedGuilds(guilds.guilds);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    return buildMembers(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    delete obj[guild.id];
    delete closure_12[guild.id];
    removeCommunicationDisabled(guild.id);
  },
  GUILD_MEMBER_ADD: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE_LOCAL: function handleGuildMemberUpdateLocal(arg0) {
    let addedRoleIds;
    let difference2;
    let flags;
    let guildId;
    let removedRoleIds;
    let roles;
    let union2Result;
    ({ guildId, roles, addedRoleIds, removedRoleIds, flags } = arg0);
    const id = AuthenticationStore.getId();
    let tmp3 = null;
    if (null != obj[guildId]) {
      tmp3 = tmp2[id];
    }
    if (null == tmp3) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        return false;
      } else {
        obj = closure_20[guildId];
        if (obj == null) {
          obj = {};
        }
        const difference = _modDef12.difference;
        _modDef12;
        let added = obj.added;
        const union = _modDef12.union;
        _modDef12;
        if (added == null) {
          added = [];
        }
        let items = removedRoleIds;
        const unionResult = union(added, addedRoleIds);
        if (removedRoleIds == null) {
          items = [];
        }
        const obj2 = { added: difference(unionResult, items), removed: difference2(union2Result, addedRoleIds) };
        difference2 = _modDef12.difference;
        _modDef12;
        let removed = obj.removed;
        const union2 = _modDef12.union;
        _modDef12;
        if (removed == null) {
          removed = [];
        }
        union2Result = union2(removed, removedRoleIds);
        if (addedRoleIds == null) {
          addedRoleIds = [];
        }
        closure_20[guildId] = obj2;
        ({ nick: obj3.nick, avatar: obj3.avatar, avatarDecoration: obj3.avatarDecoration } = tmp3);
        const obj5 = {
          userId: id,
          guildId,
          nick: null,
          avatar: null,
          avatarDecoration: null,
          guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
          roles,
          premiumSince: null,
          isPending: null,
          joinedAt: null,
          flags,
          fullProfileLoadedTimestamp: null,
          collectibles: null,
          displayNameStyles: null,
          gamingLeaderboardData: null,
          vadColors: null,
        };
        if (roles == null) {
          roles = tmp3.roles;
        }
        ({ premiumSince: obj3.premiumSince, isPending: obj3.isPending, joinedAt: obj3.joinedAt } = tmp3);
        if (flags == null) {
          flags = tmp3.flags;
        }
        ({
          fullProfileLoadedTimestamp: obj3.fullProfileLoadedTimestamp,
          collectibles: obj3.collectibles,
          displayNameStyles: obj3.displayNameStyles,
          gamingLeaderboardData: obj3.gamingLeaderboardData,
          vadColors: obj3.vadColors,
        } = tmp3);
        obj[guildId][id] = createMember(obj5);
      }
    }
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    let flag = false;
    const iter = arg0.chunks[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = batchUpdateGuildMembers(nextResult.guildId, nextResult.members) || flag;
      flag = tmp3;
      continue;
    }
    return flag;
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    const id = guildId.user.id;
    if (null != obj[guildId]) {
      if (null != obj[guildId][id]) {
        delete obj[guildId][id];
        removeCommunicationDisabled(guildId, id);
        closure_18 = closure_18 + 1;
      }
    }
  },
  GUILD_MEMBER_REMOVE_LOCAL: function handleGuildMemberRemoveLocal(arg0) {
    let guildId;
    let userId;
    ({ guildId, userId } = arg0);
    if (null != obj[guildId]) {
      if (null != obj[guildId][userId]) {
        delete obj[guildId][userId];
        removeCommunicationDisabled(guildId, userId);
        closure_18 = closure_18 + 1;
      }
    }
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    let guild;
    let guildId;
    let members;
    ({ guildId, members } = arg0);
    const mapped = members.map((member) => member.member);
    const found = mapped.filter(guildId(guild[16]).isNotNullish);
    guild = undefined;
    let closure_1 = tmp;
    let flag = false;
    if (null != obj[guildId]) {
      let flag2;
      guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        flag2 = false;
      } else {
        const item = found.forEach((user) => {
          let obj2;
          let prop;
          let tmp5Result;
          let tmp5Result5;
          let tmp5Result6;
          let unusual_dm_activity_until;
          let vad_colors;
          obj = {
            userId: user.user.id,
            nick: user.nick,
            guildId,
            avatar: user.avatar,
            avatarDecoration: obj2.parseAvatarDecorationData(user.avatar_decoration_data),
            guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
            roles: null,
            premiumSince: null,
            isPending: null,
            joinedAt: null,
            communicationDisabledUntil: null,
            flags: null,
            fullProfileLoadedTimestamp: prop,
            unusualDMActivityUntil: unusual_dm_activity_until,
            collectibles: tmp5Result.parseServerUserCollectibles(user.collectibles),
            displayNameStyles: tmp5Result5.parseServerDisplayNameStyles(user.display_name_styles),
            gamingLeaderboardData: tmp5Result6.parseServerMemberGamingLeaderboardData(
              user.member_gaming_leaderboard_data,
            ),
            vadColors: vad_colors,
          };
          const id = user.user.id;
          ({
            roles: obj.roles,
            premium_since: obj.premiumSince,
            pending: obj.isPending,
            joined_at: obj.joinedAt,
            communication_disabled_until: obj.communicationDisabledUntil,
            flags: obj.flags,
          } = user);
          prop = undefined;
          obj2 = AvatarDecorationUtils;
          if (closure_1[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (closure_1[user.user.id] != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          tmp5Result = mappers;
          tmp5Result5 = DisplayNameStylesUtils;
          vad_colors = user.vad_colors;
          tmp5Result6 = GuildLeaderboardTypes;
          if (vad_colors == null) {
            vad_colors = null;
          }
          closure_1[id] = createMember(obj);
          if (null != closure_1[user.user.id].communicationDisabledUntil) {
            const tmp5Result7 = CommunicationDisabledUtils;
            if (tmp5Result7.isMemberCommunicationDisabled(closure_1[user.user.id])) {
              const items = [];
              items[constants.GUILD] = guildId;
              items[constants.USER] = closure_1[user.user.id].userId;
              const joined = items.join("-");
              let result = closure_15[joined] !== tmp10.communicationDisabledUntil;
              if (result) {
                const tmp5Result8 = CommunicationDisabledUtils;
                result = tmp5Result8.isMemberCommunicationDisabled(tmp10);
              }
              if (result) {
                closure_15[joined] = closure_1[user.user.id].communicationDisabledUntil;
                const sum = sum1 + 1;
                sum1 = sum;
                closure_19[joined] = sum;
              }
            }
          }
          removeCommunicationDisabled(guildId, closure_1[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag2 = true;
      }
      flag = flag2;
    }
    return flag;
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    let addedMembers;
    let guild;
    let guildId;
    ({ guildId, addedMembers } = arg0);
    let tmp = null != addedMembers;
    if (tmp) {
      const mapped = addedMembers.map((member) => member.member);
      const found = mapped.filter(guildId(guild[16]).isNotNullish);
      guild = undefined;
      let closure_1 = tmp5;
      let flag = false;
      if (null != obj[guildId]) {
        let flag2;
        guild = GuildStore.getGuild(guildId);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
          flag2 = false;
        } else {
          const item = found.forEach((user) => {
            let obj2;
            let prop;
            let tmp5Result;
            let tmp5Result5;
            let tmp5Result6;
            let unusual_dm_activity_until;
            let vad_colors;
            obj = {
              userId: user.user.id,
              nick: user.nick,
              guildId,
              avatar: user.avatar,
              avatarDecoration: obj2.parseAvatarDecorationData(user.avatar_decoration_data),
              guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
              roles: null,
              premiumSince: null,
              isPending: null,
              joinedAt: null,
              communicationDisabledUntil: null,
              flags: null,
              fullProfileLoadedTimestamp: prop,
              unusualDMActivityUntil: unusual_dm_activity_until,
              collectibles: tmp5Result.parseServerUserCollectibles(user.collectibles),
              displayNameStyles: tmp5Result5.parseServerDisplayNameStyles(user.display_name_styles),
              gamingLeaderboardData: tmp5Result6.parseServerMemberGamingLeaderboardData(
                user.member_gaming_leaderboard_data,
              ),
              vadColors: vad_colors,
            };
            const id = user.user.id;
            ({
              roles: obj.roles,
              premium_since: obj.premiumSince,
              pending: obj.isPending,
              joined_at: obj.joinedAt,
              communication_disabled_until: obj.communicationDisabledUntil,
              flags: obj.flags,
            } = user);
            prop = undefined;
            obj2 = AvatarDecorationUtils;
            if (closure_1[user.user.id] != null) {
              prop = tmp2.fullProfileLoadedTimestamp;
            }
            unusual_dm_activity_until = user.unusual_dm_activity_until;
            if (unusual_dm_activity_until == null) {
              let prop1;
              if (closure_1[user.user.id] != null) {
                prop1 = tmp2.unusualDMActivityUntil;
              }
              unusual_dm_activity_until = prop1;
            }
            tmp5Result = mappers;
            tmp5Result5 = DisplayNameStylesUtils;
            vad_colors = user.vad_colors;
            tmp5Result6 = GuildLeaderboardTypes;
            if (vad_colors == null) {
              vad_colors = null;
            }
            closure_1[id] = createMember(obj);
            if (null != closure_1[user.user.id].communicationDisabledUntil) {
              const tmp5Result7 = CommunicationDisabledUtils;
              if (tmp5Result7.isMemberCommunicationDisabled(closure_1[user.user.id])) {
                const items = [];
                items[constants.GUILD] = guildId;
                items[constants.USER] = closure_1[user.user.id].userId;
                const joined = items.join("-");
                let result = closure_15[joined] !== tmp10.communicationDisabledUntil;
                if (result) {
                  const tmp5Result8 = CommunicationDisabledUtils;
                  result = tmp5Result8.isMemberCommunicationDisabled(tmp10);
                }
                if (result) {
                  closure_15[joined] = closure_1[user.user.id].communicationDisabledUntil;
                  const sum = sum1 + 1;
                  sum1 = sum;
                  closure_19[joined] = sum;
                }
              }
            }
            removeCommunicationDisabled(guildId, closure_1[user.user.id].userId);
          });
          closure_18 = closure_18 + 1;
          flag2 = true;
        }
        flag = flag2;
      }
      tmp = flag;
    }
    return tmp;
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function handleLoadArchivedThreadsSuccess(arg0) {
    let guildId;
    let owners;
    ({ guildId, owners } = arg0);
    let guild;
    let closure_1 = tmp;
    let flag = false;
    if (null != obj[guildId]) {
      let flag2;
      guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        flag2 = false;
      } else {
        const item = owners.forEach((user) => {
          let obj2;
          let prop;
          let tmp5Result;
          let tmp5Result5;
          let tmp5Result6;
          let unusual_dm_activity_until;
          let vad_colors;
          obj = {
            userId: user.user.id,
            nick: user.nick,
            guildId,
            avatar: user.avatar,
            avatarDecoration: obj2.parseAvatarDecorationData(user.avatar_decoration_data),
            guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
            roles: null,
            premiumSince: null,
            isPending: null,
            joinedAt: null,
            communicationDisabledUntil: null,
            flags: null,
            fullProfileLoadedTimestamp: prop,
            unusualDMActivityUntil: unusual_dm_activity_until,
            collectibles: tmp5Result.parseServerUserCollectibles(user.collectibles),
            displayNameStyles: tmp5Result5.parseServerDisplayNameStyles(user.display_name_styles),
            gamingLeaderboardData: tmp5Result6.parseServerMemberGamingLeaderboardData(
              user.member_gaming_leaderboard_data,
            ),
            vadColors: vad_colors,
          };
          const id = user.user.id;
          ({
            roles: obj.roles,
            premium_since: obj.premiumSince,
            pending: obj.isPending,
            joined_at: obj.joinedAt,
            communication_disabled_until: obj.communicationDisabledUntil,
            flags: obj.flags,
          } = user);
          prop = undefined;
          obj2 = AvatarDecorationUtils;
          if (closure_1[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (closure_1[user.user.id] != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          tmp5Result = mappers;
          tmp5Result5 = DisplayNameStylesUtils;
          vad_colors = user.vad_colors;
          tmp5Result6 = GuildLeaderboardTypes;
          if (vad_colors == null) {
            vad_colors = null;
          }
          closure_1[id] = createMember(obj);
          if (null != closure_1[user.user.id].communicationDisabledUntil) {
            const tmp5Result7 = CommunicationDisabledUtils;
            if (tmp5Result7.isMemberCommunicationDisabled(closure_1[user.user.id])) {
              const items = [];
              items[constants.GUILD] = guildId;
              items[constants.USER] = closure_1[user.user.id].userId;
              const joined = items.join("-");
              let result = closure_15[joined] !== tmp10.communicationDisabledUntil;
              if (result) {
                const tmp5Result8 = CommunicationDisabledUtils;
                result = tmp5Result8.isMemberCommunicationDisabled(tmp10);
              }
              if (result) {
                closure_15[joined] = closure_1[user.user.id].communicationDisabledUntil;
                const sum = sum1 + 1;
                sum1 = sum;
                closure_19[joined] = sum;
              }
            }
          }
          removeCommunicationDisabled(guildId, closure_1[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag2 = true;
      }
      flag = flag2;
    }
    return flag;
  },
  LOAD_FORUM_POSTS: function handleLoadForumPosts(guildId) {
    guildId = guildId.guildId;
    const values = Object.values(guildId.threads);
    const reduced = values.reduce((arr, owner) => {
      if (null != owner.owner) {
        arr = arr.push(owner.owner);
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
    let guild;
    let closure_1 = tmp;
    let flag = false;
    if (null != obj[guildId]) {
      let flag2;
      guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        flag2 = false;
      } else {
        const item = reduced.forEach((user) => {
          let obj2;
          let prop;
          let tmp5Result;
          let tmp5Result5;
          let tmp5Result6;
          let unusual_dm_activity_until;
          let vad_colors;
          obj = {
            userId: user.user.id,
            nick: user.nick,
            guildId,
            avatar: user.avatar,
            avatarDecoration: obj2.parseAvatarDecorationData(user.avatar_decoration_data),
            guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
            roles: null,
            premiumSince: null,
            isPending: null,
            joinedAt: null,
            communicationDisabledUntil: null,
            flags: null,
            fullProfileLoadedTimestamp: prop,
            unusualDMActivityUntil: unusual_dm_activity_until,
            collectibles: tmp5Result.parseServerUserCollectibles(user.collectibles),
            displayNameStyles: tmp5Result5.parseServerDisplayNameStyles(user.display_name_styles),
            gamingLeaderboardData: tmp5Result6.parseServerMemberGamingLeaderboardData(
              user.member_gaming_leaderboard_data,
            ),
            vadColors: vad_colors,
          };
          const id = user.user.id;
          ({
            roles: obj.roles,
            premium_since: obj.premiumSince,
            pending: obj.isPending,
            joined_at: obj.joinedAt,
            communication_disabled_until: obj.communicationDisabledUntil,
            flags: obj.flags,
          } = user);
          prop = undefined;
          obj2 = AvatarDecorationUtils;
          if (closure_1[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (closure_1[user.user.id] != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          tmp5Result = mappers;
          tmp5Result5 = DisplayNameStylesUtils;
          vad_colors = user.vad_colors;
          tmp5Result6 = GuildLeaderboardTypes;
          if (vad_colors == null) {
            vad_colors = null;
          }
          closure_1[id] = createMember(obj);
          if (null != closure_1[user.user.id].communicationDisabledUntil) {
            const tmp5Result7 = CommunicationDisabledUtils;
            if (tmp5Result7.isMemberCommunicationDisabled(closure_1[user.user.id])) {
              const items = [];
              items[constants.GUILD] = guildId;
              items[constants.USER] = closure_1[user.user.id].userId;
              const joined = items.join("-");
              let result = closure_15[joined] !== tmp10.communicationDisabledUntil;
              if (result) {
                const tmp5Result8 = CommunicationDisabledUtils;
                result = tmp5Result8.isMemberCommunicationDisabled(tmp10);
              }
              if (result) {
                closure_15[joined] = closure_1[user.user.id].communicationDisabledUntil;
                const sum = sum1 + 1;
                sum1 = sum;
                closure_19[joined] = sum;
              }
            }
          }
          removeCommunicationDisabled(guildId, closure_1[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag2 = true;
      }
      flag = flag2;
    }
    return flag;
  },
  GUILD_ROLE_UPDATE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_DELETE: handleGuildRoleUpdateOrDelete,
  GUILD_ROLE_MEMBER_REMOVE: function handleGuildMemberRoleRemove(arg0) {
    let guildId;
    let roleId;
    let userId;
    ({ guildId, userId, roleId } = arg0);
    if (null == obj[guildId]) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else if (null == obj[guildId][userId]) {
        return false;
      } else {
        const roles = tmp16.roles;
        if (roles.includes(roleId)) {
          const roles1 = tmp16.roles;
          obj[guildId][userId].roles = roles1.filter((item) => item !== roleId);
          const tmp4 = computeDerivedMemberState(
            GuildRoleStore.getUnsafeMutableRoles(guild.id),
            obj[guildId][userId].roles,
          );
          obj = {};
          const merged = Object.assign(tmp16);
          const merged1 = Object.assign(tmp4);
          obj[guildId][userId] = obj;
          return true;
        } else {
          return false;
        }
      }
    }
  },
  GUILD_ROLE_MEMBER_ADD: function handleGuildMemberRoleAdd(arg0) {
    let guildId;
    let roleId;
    let userId;
    ({ guildId, userId, roleId } = arg0);
    if (null == obj[guildId]) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else if (null == obj[guildId][userId]) {
        return false;
      } else {
        const roles = tmp18.roles;
        if (roles.includes(roleId)) {
          return false;
        } else {
          const items = [];
          items[HermesBuiltin.arraySpread(items, obj[guildId][userId].roles, 0)] = roleId;
          obj[guildId][userId].roles = items;
          const tmp6 = computeDerivedMemberState(
            GuildRoleStore.getUnsafeMutableRoles(guild.id),
            obj[guildId][userId].roles,
          );
          obj = {};
          const merged = Object.assign(tmp18);
          const merged1 = Object.assign(tmp6);
          obj[guildId][userId] = obj;
          return true;
        }
      }
    }
  },
  GUILD_MEMBER_PROFILE_UPDATE: function handleGuildMemberProfileUpdate(arg0) {
    let guildId;
    let guildMember;
    let obj3;
    let obj4;
    let obj5;
    let obj6;
    let vad_colors;
    ({ guildMember, guildId } = arg0);
    if (null == obj[guildId]) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during GUILD_MEMBER_UPDATE.");
        return false;
      } else {
        obj = {
          userId: guildMember.user.id,
          nick: guildMember.nick,
          guildId,
          avatar: guildMember.avatar,
          avatarDecoration: obj3.parseAvatarDecorationData(guildMember.avatar_decoration_data),
          guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
          roles: null,
          premiumSince: null,
          isPending: null,
          joinedAt: null,
          communicationDisabledUntil: null,
          unusualDMActivityUntil: null,
          flags: null,
          fullProfileLoadedTimestamp: Date.now(),
          collectibles: obj4.parseServerUserCollectibles(guildMember.collectibles),
          displayNameStyles: obj5.parseServerDisplayNameStyles(guildMember.display_name_styles),
          gamingLeaderboardData: obj6.parseServerMemberGamingLeaderboardData(
            guildMember.member_gaming_leaderboard_data,
          ),
          vadColors: vad_colors,
        };
        const id = guildMember.user.id;
        ({
          roles: obj2.roles,
          premium_since: obj2.premiumSince,
          pending: obj2.isPending,
          joined_at: obj2.joinedAt,
          communication_disabled_until: obj2.communicationDisabledUntil,
          unusual_dm_activity_until: obj2.unusualDMActivityUntil,
          flags: obj2.flags,
        } = guildMember);
        const _Date = Date;
        obj3 = AvatarDecorationUtils;
        obj4 = mappers;
        obj5 = DisplayNameStylesUtils;
        vad_colors = guildMember.vad_colors;
        obj6 = GuildLeaderboardTypes;
        if (vad_colors == null) {
          vad_colors = null;
        }
        obj[guildId][id] = createMember(obj);
        if (null != obj[guildId][guildMember.user.id].communicationDisabledUntil) {
          const tmp20Result = CommunicationDisabledUtils;
          if (tmp20Result.isMemberCommunicationDisabled(obj[guildId][guildMember.user.id])) {
            const items = [];
            items[constants.GUILD] = guildId;
            items[constants.USER] = obj[guildId][guildMember.user.id].userId;
            const joined = items.join("-");
            let result = closure_15[joined] !== tmp3.communicationDisabledUntil;
            if (result) {
              const tmp20Result2 = CommunicationDisabledUtils;
              result = tmp20Result2.isMemberCommunicationDisabled(tmp3);
            }
            if (result) {
              closure_15[joined] = obj[guildId][guildMember.user.id].communicationDisabledUntil;
              const sum = sum1 + 1;
              sum1 = sum;
              closure_19[joined] = sum;
            }
          }
        }
        removeCommunicationDisabled(guildId, obj[guildId][guildMember.user.id].userId);
      }
    }
  },
  IMPERSONATE_UPDATE: handleImpersonateUpdate,
  IMPERSONATE_STOP: handleImpersonateUpdate,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(members) {
    let guildId;
    let tmp = members.members.length > 0;
    if (tmp) {
      ({ guildId, members } = members);
      let guild;
      let closure_1 = tmp3;
      let flag = false;
      if (null != obj[guildId]) {
        let flag2;
        guild = GuildStore.getGuild(guildId);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
          flag2 = false;
        } else {
          const item = members.forEach((user) => {
            let obj2;
            let prop;
            let tmp5Result;
            let tmp5Result5;
            let tmp5Result6;
            let unusual_dm_activity_until;
            let vad_colors;
            obj = {
              userId: user.user.id,
              nick: user.nick,
              guildId,
              avatar: user.avatar,
              avatarDecoration: obj2.parseAvatarDecorationData(user.avatar_decoration_data),
              guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
              roles: null,
              premiumSince: null,
              isPending: null,
              joinedAt: null,
              communicationDisabledUntil: null,
              flags: null,
              fullProfileLoadedTimestamp: prop,
              unusualDMActivityUntil: unusual_dm_activity_until,
              collectibles: tmp5Result.parseServerUserCollectibles(user.collectibles),
              displayNameStyles: tmp5Result5.parseServerDisplayNameStyles(user.display_name_styles),
              gamingLeaderboardData: tmp5Result6.parseServerMemberGamingLeaderboardData(
                user.member_gaming_leaderboard_data,
              ),
              vadColors: vad_colors,
            };
            const id = user.user.id;
            ({
              roles: obj.roles,
              premium_since: obj.premiumSince,
              pending: obj.isPending,
              joined_at: obj.joinedAt,
              communication_disabled_until: obj.communicationDisabledUntil,
              flags: obj.flags,
            } = user);
            prop = undefined;
            obj2 = AvatarDecorationUtils;
            if (closure_1[user.user.id] != null) {
              prop = tmp2.fullProfileLoadedTimestamp;
            }
            unusual_dm_activity_until = user.unusual_dm_activity_until;
            if (unusual_dm_activity_until == null) {
              let prop1;
              if (closure_1[user.user.id] != null) {
                prop1 = tmp2.unusualDMActivityUntil;
              }
              unusual_dm_activity_until = prop1;
            }
            tmp5Result = mappers;
            tmp5Result5 = DisplayNameStylesUtils;
            vad_colors = user.vad_colors;
            tmp5Result6 = GuildLeaderboardTypes;
            if (vad_colors == null) {
              vad_colors = null;
            }
            closure_1[id] = createMember(obj);
            if (null != closure_1[user.user.id].communicationDisabledUntil) {
              const tmp5Result7 = CommunicationDisabledUtils;
              if (tmp5Result7.isMemberCommunicationDisabled(closure_1[user.user.id])) {
                const items = [];
                items[constants.GUILD] = guildId;
                items[constants.USER] = closure_1[user.user.id].userId;
                const joined = items.join("-");
                let result = closure_15[joined] !== tmp10.communicationDisabledUntil;
                if (result) {
                  const tmp5Result8 = CommunicationDisabledUtils;
                  result = tmp5Result8.isMemberCommunicationDisabled(tmp10);
                }
                if (result) {
                  closure_15[joined] = closure_1[user.user.id].communicationDisabledUntil;
                  const sum = sum1 + 1;
                  sum1 = sum;
                  closure_19[joined] = sum;
                }
              }
            }
            removeCommunicationDisabled(guildId, closure_1[user.user.id].userId);
          });
          closure_18 = closure_18 + 1;
          flag2 = true;
        }
        flag = flag2;
      }
      tmp = flag;
    }
    return tmp;
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function handleClearPendingUpdates(guildId) {
    guildId = guildId.guildId;
    if (null == guildId) {
      return false;
    } else {
      delete closure_20[guildId];
    }
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(guildId) {
    if (null != guildId.guildId) {
      if (null != GuildStore.getGuild(guildId.guildId)) {
        c16 = true;
        obj = obj[guildId.guildId];
        const guildId2 = guildId.guildId;
        const tmp10 = obj;
        if (obj == null) {
          obj = {};
        }
        tmp10[guildId2] = obj;
        let flag = false;
        c16 = true;
        let obj2 = obj[guildId.guildId];
        guildId = guildId.guildId;
        const tmp = obj;
        if (obj2 == null) {
          obj2 = {};
        }
        tmp[guildId] = obj2;
        const members = guildId.members;
        for (const item10017 of members) {
          if (null == obj[guildId.guildId][item10017.userId]) {
            flag = true;
            obj[guildId.guildId][item10017.userId] = item10017;
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
      mergeMessageResolvedMembers(message.message);
    });
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function hangdleMemberSafetyGuildMemberSearchSuccess(arg0) {
    let guildId;
    let members;
    ({ guildId, members } = arg0);
    const mapped = members.map((member) => member.member);
    let guild;
    let closure_1 = tmp;
    let flag = false;
    if (null != obj[guildId]) {
      let flag2;
      guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        flag2 = false;
      } else {
        const item = mapped.forEach((user) => {
          let obj2;
          let prop;
          let tmp5Result;
          let tmp5Result5;
          let tmp5Result6;
          let unusual_dm_activity_until;
          let vad_colors;
          obj = {
            userId: user.user.id,
            nick: user.nick,
            guildId,
            avatar: user.avatar,
            avatarDecoration: obj2.parseAvatarDecorationData(user.avatar_decoration_data),
            guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
            roles: null,
            premiumSince: null,
            isPending: null,
            joinedAt: null,
            communicationDisabledUntil: null,
            flags: null,
            fullProfileLoadedTimestamp: prop,
            unusualDMActivityUntil: unusual_dm_activity_until,
            collectibles: tmp5Result.parseServerUserCollectibles(user.collectibles),
            displayNameStyles: tmp5Result5.parseServerDisplayNameStyles(user.display_name_styles),
            gamingLeaderboardData: tmp5Result6.parseServerMemberGamingLeaderboardData(
              user.member_gaming_leaderboard_data,
            ),
            vadColors: vad_colors,
          };
          const id = user.user.id;
          ({
            roles: obj.roles,
            premium_since: obj.premiumSince,
            pending: obj.isPending,
            joined_at: obj.joinedAt,
            communication_disabled_until: obj.communicationDisabledUntil,
            flags: obj.flags,
          } = user);
          prop = undefined;
          obj2 = AvatarDecorationUtils;
          if (closure_1[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (closure_1[user.user.id] != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          tmp5Result = mappers;
          tmp5Result5 = DisplayNameStylesUtils;
          vad_colors = user.vad_colors;
          tmp5Result6 = GuildLeaderboardTypes;
          if (vad_colors == null) {
            vad_colors = null;
          }
          closure_1[id] = createMember(obj);
          if (null != closure_1[user.user.id].communicationDisabledUntil) {
            const tmp5Result7 = CommunicationDisabledUtils;
            if (tmp5Result7.isMemberCommunicationDisabled(closure_1[user.user.id])) {
              const items = [];
              items[constants.GUILD] = guildId;
              items[constants.USER] = closure_1[user.user.id].userId;
              const joined = items.join("-");
              let result = closure_15[joined] !== tmp10.communicationDisabledUntil;
              if (result) {
                const tmp5Result8 = CommunicationDisabledUtils;
                result = tmp5Result8.isMemberCommunicationDisabled(tmp10);
              }
              if (result) {
                closure_15[joined] = closure_1[user.user.id].communicationDisabledUntil;
                const sum = sum1 + 1;
                sum1 = sum;
                closure_19[joined] = sum;
              }
            }
          }
          removeCommunicationDisabled(guildId, closure_1[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag2 = true;
      }
      flag = flag2;
    }
    return flag;
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    let found;
    instance = instance.instance;
    obj = embeddedActivityLocationUtils;
    const embeddedActivityLocationGuildId = obj.getEmbeddedActivityLocationGuildId(instance.location);
    let tmp3 = null != embeddedActivityLocationGuildId;
    if (tmp3) {
      const participants = instance.participants;
      const obj2 = { id: embeddedActivityLocationGuildId, members: found.map(f85885) };
      found = participants.filter(isActivityParticipantValidGuildMemberDefault);
      tmp3 = buildMembers(obj2);
    }
    return tmp3;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(channelId) {
    let mapped;
    const channel = ChannelStore.getChannel(channelId.channelId);
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
      const _Object = Object;
      obj = { id: guild_id, members: mapped.filter((item) => null != item) };
      const entries = Object.entries(resolved.members);
      mapped = entries.map((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        let tmp3;
        if (resolved != null) {
          const users = resolved.users;
          if (users != null) {
            tmp3 = users[tmp];
          }
        }
        if (null != tmp3) {
          obj = { user: tmp3 };
          const merged = Object.assign(tmp2);
          return obj;
        }
      });
      tmp4 = buildMembers(obj);
    }
    return tmp4;
  },
};
const guildMemberStore = new GuildMemberStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/GuildMemberStore.tsx");

export default guildMemberStore;
export const getUserCommunicationDisabledVersion = function getUserCommunicationDisabledVersion(arg0, arg1) {
  const items = [];
  items[constants.GUILD] = arg0;
  items[constants.USER] = arg1;
  const joined = items.join("-");
  let num = -1;
  if (joined in closure_19) {
    num = closure_19[joined];
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
