// discord_app/stores/GuildMemberStore.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
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
import embeddedActivityLocationUtils from "../modules/activities/utils/embeddedActivityLocationUtils.tsx";
import ImpersonateStore from "../modules/impersonate/ImpersonateStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildRoleStore from "GuildRoleStore.tsx";
import GuildStore from "GuildStore.tsx";
import size from "../../_runtime/metro/00002__.js";

function trackCommunicationDisabled(guildId, tmp10Result) {
  if (null != tmp10Result.communicationDisabledUntil) {
    if (obj2.isMemberCommunicationDisabled(tmp10Result)) {
      const items = [];
      items[constants.GUILD] = guildId;
      items[constants.USER] = tmp10Result.userId;
      const joined = items.join("-");
      let result = dependencyMap3[joined] !== tmp10Result.communicationDisabledUntil;
      if (result) {
        tmp10Result = CommunicationDisabledUtils;
        result = tmp10Result.isMemberCommunicationDisabled(tmp10Result);
      }
      if (result) {
        dependencyMap3[joined] = tmp10Result.communicationDisabledUntil;
        const sum = sum1 + 1;
        sum1 = sum;
        closure_19[joined] = sum;
      }
    }
    obj2 = CommunicationDisabledUtils;
  }
  removeCommunicationDisabled(guildId, tmp10Result.userId);
}
function removeCommunicationDisabled(guildId, userId) {
  if (null != userId) {
    const items = [];
    items[constants.GUILD] = guildId;
    items[constants.USER] = userId;
    const joined = items.join("-");
    if (null != dependencyMap3[joined]) {
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
    delete tmp[tmp2];
  } else {
    for (const key10003 in closure_15) {
      if (key10003.split("-")[constants.GUILD] !== arg0) {
        continue;
      } else {
        sum1 = sum1 + 1;
        closure_19[key10003] = sum1;
        if (key10003.split("-")[constants.USER] === AuthenticationStore.getId()) {
          let tmp10 = closure_3(key10003.split("-")[constants.GUILD]);
        }
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
    return {
      colorString: null,
      colorStrings: null,
      colorRoleId: "call",
      hoistRoleId: "mn",
      iconRoleId: "fileFinishedImporting",
      highestRoleId: "accessible",
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
    obj = {
      colorString,
      colorStrings: null,
      colorRoleId: null,
      iconRoleId: null,
      hoistRoleId: null,
      highestRoleId: null,
    };
    let colorStrings;
    if (tmp != null) {
      colorStrings = tmp.colorStrings;
    }
    if (colorStrings == null) {
      colorStrings = null;
    }
    obj.colorStrings = colorStrings;
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    obj.colorRoleId = id;
    let id1;
    if (tmp3 != null) {
      id1 = tmp3.id;
    }
    obj.iconRoleId = id1;
    let id2;
    if (tmp2 != null) {
      id2 = tmp2.id;
    }
    obj.hoistRoleId = id2;
    let id3;
    if (tmp4 != null) {
      id3 = tmp4.id;
    }
    obj.highestRoleId = id3;
    return obj;
  }
}
function createMember(guildRoles) {
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
  } = guildRoles);
  const tmp3 = computeDerivedMemberState(guildRoles.guildRoles, roles);
  obj = {
    userId,
    nick,
    guildId,
    avatar,
    avatarDecoration,
    roles,
    colorString: tmp3.colorString,
    colorStrings: tmp3.colorStrings,
    colorRoleId: tmp3.colorRoleId,
    iconRoleId: tmp3.iconRoleId,
    hoistRoleId: tmp3.hoistRoleId,
    highestRoleId: tmp3.highestRoleId,
    premiumSince,
    isPending,
    joinedAt,
    communicationDisabledUntil,
    unusualDMActivityUntil,
    fullProfileLoadedTimestamp,
    flags,
    collectibles,
    displayNameStyles,
  };
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
    obj.flags = FlagUtils.addFlag(num2, GuildMemberFlags.BYPASSES_VERIFICATION);
    const tmp4Result = FlagUtils;
  }
  if (null == obj[guildId]) {
    return obj;
  } else {
    if (userId === AuthenticationStore.getId()) {
      if (!ImpersonateStore.isViewingRoles(guildId)) {
        if (!ImpersonateStore.isFullServerPreview(guildId)) {
          if (null != dependencyMap[guildId]) {
            delete tmp[tmp2];
          }
        }
      }
      const viewingRoles = ImpersonateStore.getViewingRoles(guildId);
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(ImpersonateStore.getMemberOptions(guildId));
      if (null != viewingRoles) {
        keys = SnowflakeUtilsDefault.keys;
        keys = keys(viewingRoles);
      } else {
        keys = [];
      }
      obj.roles = keys;
      dependencyMap[guildId] = obj;
    }
    return obj;
  }
  obj2 = FlagUtils;
}
function handleCachedGuilds(guilds) {
  const iter = guilds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.member) {
      if (null == dependencyMap2[tmp2.id]) {
        let member = tmp2.member;
      } else {
        member = {};
        let merged = Object.assign(tmp2.member);
        member.roles = tmp2.member.roles;
      }
      dependencyMap2[tmp2.id] = member;
      if (null != obj[tmp2.id]) {
        let tmp11 = obj[tmp2.id];
        let tmp12 = tmp11;
        if (null != tmp11[tmp2.member.userId]) {
          obj = {};
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
        avatarDecoration: AvatarDecorationUtils.parseAvatarDecorationData(tmp3),
        guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
        roles: tmp4,
        premiumSince: tmp5,
        isPending: tmp6,
        joinedAt: tmp7,
        communicationDisabledUntil: tmp8,
        unusualDMActivityUntil: tmp9,
        fullProfileLoadedTimestamp: null,
        flags: null,
        collectibles: null,
        displayNameStyles: null,
      };
      let prop;
      if (tmp13[user.id] != null) {
        prop = tmp35.fullProfileLoadedTimestamp;
      }
      obj.fullProfileLoadedTimestamp = prop;
      obj.flags = tmp10;
      obj.collectibles = tmp11;
      obj.displayNameStyles = tmp12;
      tmp13[user.id] = createMember(obj);
      if (null != tmp13[user.id].communicationDisabledUntil) {
        let tmp32Result = CommunicationDisabledUtils;
        if (tmp32Result.isMemberCommunicationDisabled(tmp15)) {
          const items = [];
          items[constants.GUILD] = guildId;
          items[constants.USER] = tmp15.userId;
          const joined = items.join("-");
          let result = dependencyMap3[joined] !== tmp15.communicationDisabledUntil;
          if (result) {
            tmp32Result = CommunicationDisabledUtils;
            result = tmp32Result.isMemberCommunicationDisabled(tmp15);
          }
          if (result) {
            dependencyMap3[joined] = tmp15.communicationDisabledUntil;
            const sum = sum1 + 1;
            sum1 = sum;
            closure_19[joined] = sum;
          }
        }
      }
      removeCommunicationDisabled(guildId, tmp13[user.id].userId);
    }
  }
}
function batchUpdateGuildMembers(guildId, members) {
  closure_0 = guildId;
  closure_1 = tmp;
  if (null == obj[guildId]) {
    return false;
  } else {
    const guild = GuildStore.getGuild(guildId);
    if (null == guild) {
      const _HermesInternal = HermesInternal;
      logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
      let flag = false;
    } else {
      const item = members.forEach((user) => {
        obj = {
          userId: user.user.id,
          nick: user.nick,
          guildId,
          avatar: user.avatar,
          avatarDecoration: AvatarDecorationUtils.parseAvatarDecorationData(user.avatar_decoration_data),
          guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
          roles: null,
          premiumSince: null,
          isPending: null,
          joinedAt: null,
          communicationDisabledUntil: null,
          flags: null,
          fullProfileLoadedTimestamp: null,
          unusualDMActivityUntil: null,
          collectibles: null,
          displayNameStyles: null,
        };
        ({
          roles: obj.roles,
          premium_since: obj.premiumSince,
          pending: obj.isPending,
          joined_at: obj.joinedAt,
          communication_disabled_until: obj.communicationDisabledUntil,
          flags: obj.flags,
        } = user);
        let prop;
        if (dependencyMap[user.user.id] != null) {
          prop = tmp2.fullProfileLoadedTimestamp;
        }
        obj.fullProfileLoadedTimestamp = prop;
        let unusual_dm_activity_until = user.unusual_dm_activity_until;
        if (unusual_dm_activity_until == null) {
          let prop1;
          if (tmp2 != null) {
            prop1 = tmp2.unusualDMActivityUntil;
          }
          unusual_dm_activity_until = prop1;
        }
        obj.unusualDMActivityUntil = unusual_dm_activity_until;
        let tmp5Result = mappers;
        obj.collectibles = tmp5Result.parseServerUserCollectibles(user.collectibles);
        tmp5Result = DisplayNameStylesUtils;
        obj.displayNameStyles = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
        dependencyMap[user.user.id] = createMember(obj);
        if (null != dependencyMap[user.user.id].communicationDisabledUntil) {
          if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
            const items = [];
            items[constants.GUILD] = guildId;
            items[constants.USER] = tmp9.userId;
            const joined = items.join("-");
            let result = closure_15[joined] !== tmp9.communicationDisabledUntil;
            if (result) {
              result = CommunicationDisabledUtils.isMemberCommunicationDisabled(tmp9);
              const tmp5Result2 = CommunicationDisabledUtils;
            }
            if (result) {
              closure_15[joined] = tmp9.communicationDisabledUntil;
              const sum = sum1 + 1;
              sum1 = sum;
              closure_19[joined] = sum;
            }
          }
          tmp5Result1 = CommunicationDisabledUtils;
        }
        removeCommunicationDisabled(guildId, dependencyMap[user.user.id].userId);
      });
      closure_18 = closure_18 + 1;
      flag = true;
    }
    return flag;
  }
}
function getAvatarDecorationFromServerMember(nextResult) {
  return AvatarDecorationUtils.parseAvatarDecorationData(nextResult.avatar_decoration_data);
}
function buildMembers(guild) {
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
      let tmp8 = tmp25[id2];
      let tmp9 = tmp8;
      obj = {
        userId: id2,
        nick: nextResult.nick,
        guildId: guild.id,
        avatar: nextResult.avatar,
        avatarDecoration: null,
        guildRoles: null,
        roles: null,
        premiumSince: null,
        isPending: null,
        joinedAt: null,
        communicationDisabledUntil: null,
        fullProfileLoadedTimestamp: null,
        flags: null,
        unusualDMActivityUntil: null,
        collectibles: null,
        displayNameStyles: null,
      };
      let tmp7 = id2;
      obj.avatarDecoration = getAvatarDecorationFromServerMember(nextResult);
      obj.guildRoles = GuildRoleStore.getUnsafeMutableRoles(guild.id);
      ({
        roles: obj.roles,
        premium_since: obj.premiumSince,
        pending: obj.isPending,
        joined_at: obj.joinedAt,
        communication_disabled_until: obj.communicationDisabledUntil,
      } = nextResult);
      let prop;
      if (tmp8 != null) {
        prop = tmp8.fullProfileLoadedTimestamp;
      }
      obj.fullProfileLoadedTimestamp = prop;
      ({ flags: obj.flags, unusual_dm_activity_until } = tmp6);
      if (unusual_dm_activity_until == null) {
        let prop1;
        if (tmp9 != null) {
          prop1 = tmp9.unusualDMActivityUntil;
        }
        unusual_dm_activity_until = prop1;
      }
      obj.unusualDMActivityUntil = unusual_dm_activity_until;
      let obj2 = mappers;
      obj.collectibles = obj2.parseServerUserCollectibles(tmp6.collectibles);
      let obj3 = DisplayNameStylesUtils;
      obj.displayNameStyles = obj3.parseServerDisplayNameStyles(tmp6.display_name_styles);
      let tmp10Result = createMember(obj);
      tmp25[tmp7] = tmp10Result;
      let tmp23 = trackCommunicationDisabled(id, tmp10Result);
      continue;
    }
    return true;
  }
}
function handleGuildRoleUpdateOrDelete(guildId) {
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
      const keys = SnowflakeUtilsDefault.keys(tmp);
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
            let roles = tmp7.roles;
            roles = roles.filter((item) => item !== guildId.roleId);
            obj = {
              userId: tmp5,
              nick: null,
              guildId: null,
              avatar: null,
              avatarDecoration: null,
              guildRoles: null,
              roles: null,
              premiumSince: null,
              isPending: null,
              joinedAt: null,
              flags: null,
              fullProfileLoadedTimestamp: null,
              collectibles: null,
              displayNameStyles: null,
            };
            obj.nick = tmp7.nick;
            obj.guildId = guildId.guildId;
            ({ avatar: obj.avatar, avatarDecoration: obj.avatarDecoration } = tmp7);
            obj.guildRoles = GuildRoleStore.getUnsafeMutableRoles(guild.id);
            obj.roles = roles;
            ({
              premiumSince: obj.premiumSince,
              isPending: obj.isPending,
              joinedAt: obj.joinedAt,
              flags: obj.flags,
            } = tmp7);
            let prop;
            if (tmp7 != null) {
              prop = tmp7.fullProfileLoadedTimestamp;
            }
            obj.fullProfileLoadedTimestamp = prop;
            ({ collectibles: obj.collectibles, displayNameStyles: obj.displayNameStyles } = tmp7);
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
        nick: tmp[id].nick,
        guildId,
        avatar: null,
        avatarDecoration: null,
        guildRoles: null,
        roles: null,
        premiumSince: null,
        isPending: null,
        joinedAt: null,
        communicationDisabledUntil: null,
        fullProfileLoadedTimestamp: null,
        flags: null,
        collectibles: null,
        displayNameStyles: null,
      };
      ({ avatar: obj.avatar, avatarDecoration: obj.avatarDecoration } = tmp[id]);
      obj.guildRoles = GuildRoleStore.getUnsafeMutableRoles(guild.id);
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
      } = tmp[id]);
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
        obj = { id: guild_id, members: null };
        const _Object = Object;
        const entries = Object.entries(resolved.members);
        const mapped = entries.map((item) => {
          [tmp, tmp2] = item;
          let tmp3;
          if (resolved != null) {
            const users = resolved.users;
            if (users != null) {
              tmp3 = users[tmp];
            }
          }
          if (null != tmp3) {
            obj = {};
            const merged = Object.assign(tmp2);
            obj.user = tmp3;
            return obj;
          }
        });
        obj.members = mapped.filter((item) => null != item);
        tmp4 = buildMembers(obj);
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
    obj = { id: guildId, members: null };
    const _Object = Object;
    const entries = Object.entries(resolved.members);
    const mapped = entries.map((item) => {
      [tmp, tmp2] = item;
      let tmp3;
      if (resolved != null) {
        const users = resolved.users;
        if (users != null) {
          tmp3 = users[tmp];
        }
      }
      if (null != tmp3) {
        obj = {};
        const merged = Object.assign(tmp2);
        obj.user = tmp3;
        return obj;
      }
    });
    obj.members = mapped.filter((item) => null != item);
    tmp3 = buildMembers(obj);
  }
  if (!tmp3) {
    tmp3 = c1;
  }
  return tmp3;
}
function mergeMessageResolvedMembers(channel_id) {
  const channel = ChannelStore.getChannel(channel_id.channel_id);
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
        obj = { id: guild_id, members: null };
        const _Object = Object;
        const entries = Object.entries(resolved.members);
        const mapped = entries.map((item) => {
          [tmp, tmp2] = item;
          let tmp3;
          if (resolved != null) {
            const users = resolved.users;
            if (users != null) {
              tmp3 = users[tmp];
            }
          }
          if (null != tmp3) {
            obj = {};
            const merged = Object.assign(tmp2);
            obj.user = tmp3;
            return obj;
          }
        });
        obj.members = mapped.filter((item) => null != item);
        tmp4 = buildMembers(obj);
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
    obj = { id: guild_id, members: null };
    let _Object = Object;
    let entries = Object.entries(resolved.members);
    let mapped = entries.map((item) => {
      [tmp, tmp2] = item;
      let tmp3;
      if (resolved != null) {
        const users = resolved.users;
        if (users != null) {
          tmp3 = users[tmp];
        }
      }
      if (null != tmp3) {
        obj = {};
        const merged = Object.assign(tmp2);
        obj.user = tmp3;
        return obj;
      }
    });
    obj.members = mapped.filter((item) => null != item);
    buildMembers(obj);
  }
  tmp5 = null != members && null != guild_id;
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
const logger = new LoggerDefault("GuildMemberStore");
let obj = {};
let closure_12 = {};
let dependencyMap = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
let c16 = false;
let sum1 = 0;
let closure_18 = 0;
let closure_19 = {};
const dependencyMap4 = {};
let closure_21 = { added: [], removed: [] };
const constants = { GUILD: 0, [0]: "GUILD", USER: 1, [1]: "USER" };
const Store = initializeDefault.Store;
class GuildMemberStore extends Store {}
const prototype = GuildMemberStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelStore, GuildRoleStore, GuildStore, ImpersonateStore);
};
prototype["getMutableAllGuildsAndMembers"] = function getMutableAllGuildsAndMembers() {
  return obj;
};
prototype["memberOf"] = function memberOf(userId) {
  closure_0 = userId;
  obj = _modDef12(obj);
  const found = obj.toPairs().filter((item) => {
    [, tmp] = item;
    return null != tmp[closure_0];
  });
  const toPairsResult = obj.toPairs();
  return found
    .map((item) => {
      [tmp] = item;
      return tmp;
    })
    .value();
};
prototype["getNicknameGuildsMapping"] = function getNicknameGuildsMapping(id) {
  obj = {};
  for (const key10006 in obj) {
    let tmp6 = obj[key10006][arg0];
    let nick;
    if (tmp6 != null) {
      nick = tmp6.nick;
    }
    if (null == nick) {
      continue;
    } else {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
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
      return null != obj[arg0] && null != obj[arg0][arg1];
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
prototype["isCurrentUserGuest"] = function isCurrentUserGuest(guildId) {
  if (null == guildId) {
    return false;
  } else {
    const id = AuthenticationStore.getId();
    if (null != obj[guildId]) {
      if (null != tmp4[id]) {
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
};
prototype["getMemberIds"] = function getMemberIds(id) {
  if (null == id) {
    return [];
  } else {
    if (null == obj[id]) {
      let items = [];
    } else {
      obj = SnowflakeUtilsDefault;
      items = obj.keys(tmp2);
    }
    return items;
  }
};
prototype["getMembers"] = function getMembers(arg0) {
  if (null == arg0) {
    return [];
  } else {
    if (null == obj[arg0]) {
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
  if (null != obj[guildId]) {
    tmp2 = tmp[id];
  }
  return tmp2;
};
prototype["getMember"] = function getMember(guildId, id) {
  const trueMember = this.getTrueMember(guildId, id);
  let tmp2 = trueMember;
  if (null != trueMember) {
    tmp2 = trueMember;
    if (id === AuthenticationStore.getId()) {
      if (ImpersonateStore.isViewingRoles(guildId)) {
        let tmp5 = dependencyMap[guildId];
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
};
prototype["getSelfMember"] = function getSelfMember(id) {
  return this.getMember(id, AuthenticationStore.getId());
};
prototype["getSelfMemberJoinedAt"] = function getSelfMemberJoinedAt(id) {
  if (null != closure_12[id]) {
    return tmp;
  } else {
    const self = this;
    const selfMember = this.getSelfMember(id);
    if (null != selfMember) {
      if (null != selfMember.joinedAt) {
        const _Date = Date;
        const date = new Date(selfMember.joinedAt);
        closure_12[id] = date;
        return date;
      }
    }
    return null;
  }
};
prototype["getCachedSelfMember"] = function getCachedSelfMember(id) {
  let tmp = dependencyMap2[id];
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
  return sum1;
};
prototype["getPendingRoleUpdates"] = function getPendingRoleUpdates(arg0) {
  let tmp = dependencyMap4[arg0];
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
  if (null != dependencyMap4[arg0]) {
    obj = _modDef12;
    differenceResult = obj.difference(_modDef12.union(roles, tmp2.added), tmp2.removed);
  }
  return differenceResult;
};
prototype["getMemberVersion"] = function getMemberVersion() {
  return closure_18;
};
GuildMemberStore.displayName = "GuildMemberStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    if (c16) {
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
      closure_30({ id, members: id.members });
      const activity_instances = id.activity_instances;
      if (activity_instances != null) {
        const item = activity_instances.forEach((participants) => {
          participants = participants.participants;
          obj = { id, members: null };
          const found = participants.filter(isActivityParticipantValidGuildMemberDefault);
          obj.members = found.map((member) => member.member);
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
  CACHE_LOADED: function handleCacheLoaded(guildMembers) {
    c16 = true;
    obj = {};
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
        obj = dependencyMap4[guildId];
        if (obj == null) {
          obj = {};
        }
        const obj2 = _modDef12;
        let added = obj.added;
        if (added == null) {
          added = [];
        }
        let items = removedRoleIds;
        if (removedRoleIds == null) {
          items = [];
        }
        obj = { added: obj2.difference(_modDef12.union(added, addedRoleIds), items), removed: null };
        const tmp4Result = _modDef12;
        let removed = obj.removed;
        if (removed == null) {
          removed = [];
        }
        const unionResult = _modDef12.union(added, addedRoleIds);
        if (addedRoleIds == null) {
          addedRoleIds = [];
        }
        obj.removed = tmp4Result.difference(tmp4Result.union(removed, removedRoleIds), addedRoleIds);
        dependencyMap4[guildId] = obj;
        obj = {
          userId: id,
          guildId,
          nick: null,
          avatar: null,
          avatarDecoration: null,
          guildRoles: null,
          roles: null,
          premiumSince: null,
          isPending: null,
          joinedAt: null,
          flags: null,
          fullProfileLoadedTimestamp: null,
          collectibles: null,
          displayNameStyles: null,
        };
        ({ nick: obj7.nick, avatar: obj7.avatar, avatarDecoration: obj7.avatarDecoration } = tmp3);
        obj.guildRoles = GuildRoleStore.getUnsafeMutableRoles(guild.id);
        if (roles == null) {
          roles = tmp3.roles;
        }
        obj.roles = roles;
        ({ premiumSince: obj7.premiumSince, isPending: obj7.isPending, joinedAt: obj7.joinedAt } = tmp3);
        if (flags == null) {
          flags = tmp3.flags;
        }
        obj.flags = flags;
        ({
          fullProfileLoadedTimestamp: obj7.fullProfileLoadedTimestamp,
          collectibles: obj7.collectibles,
          displayNameStyles: obj7.displayNameStyles,
        } = tmp3);
        tmp2[id] = createMember(obj);
        const unionResult1 = tmp4Result.union(removed, removedRoleIds);
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
      if (null != tmp3[id]) {
        delete tmp[tmp2];
        removeCommunicationDisabled(guildId, id);
        closure_18 = closure_18 + 1;
      }
    }
  },
  GUILD_MEMBER_REMOVE_LOCAL: function handleGuildMemberRemoveLocal(arg0) {
    ({ guildId, userId } = arg0);
    if (null != obj[guildId]) {
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
    guild = undefined;
    closure_1 = tmp;
    if (null == obj[guildId]) {
      return false;
    } else {
      guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = found.forEach((user) => {
          obj = {
            userId: user.user.id,
            nick: user.nick,
            guildId,
            avatar: user.avatar,
            avatarDecoration: AvatarDecorationUtils.parseAvatarDecorationData(user.avatar_decoration_data),
            guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
            roles: null,
            premiumSince: null,
            isPending: null,
            joinedAt: null,
            communicationDisabledUntil: null,
            flags: null,
            fullProfileLoadedTimestamp: null,
            unusualDMActivityUntil: null,
            collectibles: null,
            displayNameStyles: null,
          };
          ({
            roles: obj.roles,
            premium_since: obj.premiumSince,
            pending: obj.isPending,
            joined_at: obj.joinedAt,
            communication_disabled_until: obj.communicationDisabledUntil,
            flags: obj.flags,
          } = user);
          let prop;
          if (dependencyMap[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj.fullProfileLoadedTimestamp = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj.unusualDMActivityUntil = unusual_dm_activity_until;
          let tmp5Result = mappers;
          obj.collectibles = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = DisplayNameStylesUtils;
          obj.displayNameStyles = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          dependencyMap[user.user.id] = createMember(obj);
          if (null != dependencyMap[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[constants.GUILD] = guildId;
              items[constants.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = CommunicationDisabledUtils.isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = CommunicationDisabledUtils;
              }
              if (result) {
                closure_15[joined] = tmp9.communicationDisabledUntil;
                const sum = sum1 + 1;
                sum1 = sum;
                closure_19[joined] = sum;
              }
            }
            tmp5Result1 = CommunicationDisabledUtils;
          }
          removeCommunicationDisabled(guildId, dependencyMap[user.user.id].userId);
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
      guild = undefined;
      closure_1 = tmp4;
      if (null == obj[guildId]) {
        flag = false;
      } else {
        guild = GuildStore.getGuild(guildId);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
          let flag3 = false;
        } else {
          const item = found.forEach((user) => {
            obj = {
              userId: user.user.id,
              nick: user.nick,
              guildId,
              avatar: user.avatar,
              avatarDecoration: AvatarDecorationUtils.parseAvatarDecorationData(user.avatar_decoration_data),
              guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
              roles: null,
              premiumSince: null,
              isPending: null,
              joinedAt: null,
              communicationDisabledUntil: null,
              flags: null,
              fullProfileLoadedTimestamp: null,
              unusualDMActivityUntil: null,
              collectibles: null,
              displayNameStyles: null,
            };
            ({
              roles: obj.roles,
              premium_since: obj.premiumSince,
              pending: obj.isPending,
              joined_at: obj.joinedAt,
              communication_disabled_until: obj.communicationDisabledUntil,
              flags: obj.flags,
            } = user);
            let prop;
            if (dependencyMap[user.user.id] != null) {
              prop = tmp2.fullProfileLoadedTimestamp;
            }
            obj.fullProfileLoadedTimestamp = prop;
            let unusual_dm_activity_until = user.unusual_dm_activity_until;
            if (unusual_dm_activity_until == null) {
              let prop1;
              if (tmp2 != null) {
                prop1 = tmp2.unusualDMActivityUntil;
              }
              unusual_dm_activity_until = prop1;
            }
            obj.unusualDMActivityUntil = unusual_dm_activity_until;
            let tmp5Result = mappers;
            obj.collectibles = tmp5Result.parseServerUserCollectibles(user.collectibles);
            tmp5Result = DisplayNameStylesUtils;
            obj.displayNameStyles = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
            dependencyMap[user.user.id] = createMember(obj);
            if (null != dependencyMap[user.user.id].communicationDisabledUntil) {
              if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
                const items = [];
                items[constants.GUILD] = guildId;
                items[constants.USER] = tmp9.userId;
                const joined = items.join("-");
                let result = closure_15[joined] !== tmp9.communicationDisabledUntil;
                if (result) {
                  result = CommunicationDisabledUtils.isMemberCommunicationDisabled(tmp9);
                  const tmp5Result2 = CommunicationDisabledUtils;
                }
                if (result) {
                  closure_15[joined] = tmp9.communicationDisabledUntil;
                  const sum = sum1 + 1;
                  sum1 = sum;
                  closure_19[joined] = sum;
                }
              }
              tmp5Result1 = CommunicationDisabledUtils;
            }
            removeCommunicationDisabled(guildId, dependencyMap[user.user.id].userId);
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
    let guild;
    closure_1 = tmp;
    if (null == obj[guildId]) {
      return false;
    } else {
      guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = owners.forEach((user) => {
          obj = {
            userId: user.user.id,
            nick: user.nick,
            guildId,
            avatar: user.avatar,
            avatarDecoration: AvatarDecorationUtils.parseAvatarDecorationData(user.avatar_decoration_data),
            guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
            roles: null,
            premiumSince: null,
            isPending: null,
            joinedAt: null,
            communicationDisabledUntil: null,
            flags: null,
            fullProfileLoadedTimestamp: null,
            unusualDMActivityUntil: null,
            collectibles: null,
            displayNameStyles: null,
          };
          ({
            roles: obj.roles,
            premium_since: obj.premiumSince,
            pending: obj.isPending,
            joined_at: obj.joinedAt,
            communication_disabled_until: obj.communicationDisabledUntil,
            flags: obj.flags,
          } = user);
          let prop;
          if (dependencyMap[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj.fullProfileLoadedTimestamp = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj.unusualDMActivityUntil = unusual_dm_activity_until;
          let tmp5Result = mappers;
          obj.collectibles = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = DisplayNameStylesUtils;
          obj.displayNameStyles = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          dependencyMap[user.user.id] = createMember(obj);
          if (null != dependencyMap[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[constants.GUILD] = guildId;
              items[constants.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = CommunicationDisabledUtils.isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = CommunicationDisabledUtils;
              }
              if (result) {
                closure_15[joined] = tmp9.communicationDisabledUntil;
                const sum = sum1 + 1;
                sum1 = sum;
                closure_19[joined] = sum;
              }
            }
            tmp5Result1 = CommunicationDisabledUtils;
          }
          removeCommunicationDisabled(guildId, dependencyMap[user.user.id].userId);
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
          arr = arr.push(first.moderator_report.reported_member);
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
    closure_1 = tmp2;
    if (null == obj[guildId]) {
      return false;
    } else {
      guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        warnResult = logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = reduced.forEach((user) => {
          obj = {
            userId: user.user.id,
            nick: user.nick,
            guildId,
            avatar: user.avatar,
            avatarDecoration: AvatarDecorationUtils.parseAvatarDecorationData(user.avatar_decoration_data),
            guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
            roles: null,
            premiumSince: null,
            isPending: null,
            joinedAt: null,
            communicationDisabledUntil: null,
            flags: null,
            fullProfileLoadedTimestamp: null,
            unusualDMActivityUntil: null,
            collectibles: null,
            displayNameStyles: null,
          };
          ({
            roles: obj.roles,
            premium_since: obj.premiumSince,
            pending: obj.isPending,
            joined_at: obj.joinedAt,
            communication_disabled_until: obj.communicationDisabledUntil,
            flags: obj.flags,
          } = user);
          let prop;
          if (dependencyMap[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj.fullProfileLoadedTimestamp = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj.unusualDMActivityUntil = unusual_dm_activity_until;
          let tmp5Result = mappers;
          obj.collectibles = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = DisplayNameStylesUtils;
          obj.displayNameStyles = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          dependencyMap[user.user.id] = createMember(obj);
          if (null != dependencyMap[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[constants.GUILD] = guildId;
              items[constants.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = CommunicationDisabledUtils.isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = CommunicationDisabledUtils;
              }
              if (result) {
                closure_15[joined] = tmp9.communicationDisabledUntil;
                const sum = sum1 + 1;
                sum1 = sum;
                closure_19[joined] = sum;
              }
            }
            tmp5Result1 = CommunicationDisabledUtils;
          }
          removeCommunicationDisabled(guildId, dependencyMap[user.user.id].userId);
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
    if (null == obj[guildId]) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guildId);
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
          tmp16.roles = roles.filter((item) => item !== roleId);
          const tmp4 = computeDerivedMemberState(GuildRoleStore.getUnsafeMutableRoles(guild.id), tmp16.roles);
          obj = {};
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
    if (null == obj[guildId]) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guildId);
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
          const tmp5 = computeDerivedMemberState(GuildRoleStore.getUnsafeMutableRoles(guild.id), tmp17.roles);
          obj = {};
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
          avatarDecoration: AvatarDecorationUtils.parseAvatarDecorationData(guildMember.avatar_decoration_data),
          guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
          roles: null,
          premiumSince: null,
          isPending: null,
          joinedAt: null,
          communicationDisabledUntil: null,
          unusualDMActivityUntil: null,
          flags: null,
          fullProfileLoadedTimestamp: null,
          collectibles: null,
          displayNameStyles: null,
        };
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
        obj.fullProfileLoadedTimestamp = Date.now();
        obj.collectibles = mappers.parseServerUserCollectibles(guildMember.collectibles);
        obj.displayNameStyles = DisplayNameStylesUtils.parseServerDisplayNameStyles(guildMember.display_name_styles);
        tmp[guildMember.user.id] = createMember(obj);
        if (null != tmp[guildMember.user.id].communicationDisabledUntil) {
          let tmp18Result = CommunicationDisabledUtils;
          if (tmp18Result.isMemberCommunicationDisabled(tmp22)) {
            const items = [];
            items[constants.GUILD] = guildId;
            items[constants.USER] = tmp22.userId;
            const joined = items.join("-");
            let result = dependencyMap3[joined] !== tmp22.communicationDisabledUntil;
            if (result) {
              tmp18Result = CommunicationDisabledUtils;
              result = tmp18Result.isMemberCommunicationDisabled(tmp22);
            }
            if (result) {
              dependencyMap3[joined] = tmp22.communicationDisabledUntil;
              const sum = sum1 + 1;
              sum1 = sum;
              closure_19[joined] = sum;
            }
          }
        }
        removeCommunicationDisabled(guildId, tmp[guildMember.user.id].userId);
      }
    }
  },
  IMPERSONATE_UPDATE: handleImpersonateUpdate,
  IMPERSONATE_STOP: handleImpersonateUpdate,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(members) {
    let flag = members.members.length > 0;
    if (flag) {
      ({ guildId, members } = members);
      let guild;
      closure_1 = tmp2;
      if (null == obj[guildId]) {
        flag = false;
      } else {
        guild = GuildStore.getGuild(guildId);
        if (null == guild) {
          const _HermesInternal = HermesInternal;
          logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
          let flag3 = false;
        } else {
          const item = members.forEach((user) => {
            obj = {
              userId: user.user.id,
              nick: user.nick,
              guildId,
              avatar: user.avatar,
              avatarDecoration: AvatarDecorationUtils.parseAvatarDecorationData(user.avatar_decoration_data),
              guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
              roles: null,
              premiumSince: null,
              isPending: null,
              joinedAt: null,
              communicationDisabledUntil: null,
              flags: null,
              fullProfileLoadedTimestamp: null,
              unusualDMActivityUntil: null,
              collectibles: null,
              displayNameStyles: null,
            };
            ({
              roles: obj.roles,
              premium_since: obj.premiumSince,
              pending: obj.isPending,
              joined_at: obj.joinedAt,
              communication_disabled_until: obj.communicationDisabledUntil,
              flags: obj.flags,
            } = user);
            let prop;
            if (dependencyMap[user.user.id] != null) {
              prop = tmp2.fullProfileLoadedTimestamp;
            }
            obj.fullProfileLoadedTimestamp = prop;
            let unusual_dm_activity_until = user.unusual_dm_activity_until;
            if (unusual_dm_activity_until == null) {
              let prop1;
              if (tmp2 != null) {
                prop1 = tmp2.unusualDMActivityUntil;
              }
              unusual_dm_activity_until = prop1;
            }
            obj.unusualDMActivityUntil = unusual_dm_activity_until;
            let tmp5Result = mappers;
            obj.collectibles = tmp5Result.parseServerUserCollectibles(user.collectibles);
            tmp5Result = DisplayNameStylesUtils;
            obj.displayNameStyles = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
            dependencyMap[user.user.id] = createMember(obj);
            if (null != dependencyMap[user.user.id].communicationDisabledUntil) {
              if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
                const items = [];
                items[constants.GUILD] = guildId;
                items[constants.USER] = tmp9.userId;
                const joined = items.join("-");
                let result = closure_15[joined] !== tmp9.communicationDisabledUntil;
                if (result) {
                  result = CommunicationDisabledUtils.isMemberCommunicationDisabled(tmp9);
                  const tmp5Result2 = CommunicationDisabledUtils;
                }
                if (result) {
                  closure_15[joined] = tmp9.communicationDisabledUntil;
                  const sum = sum1 + 1;
                  sum1 = sum;
                  closure_19[joined] = sum;
                }
              }
              tmp5Result1 = CommunicationDisabledUtils;
            }
            removeCommunicationDisabled(guildId, dependencyMap[user.user.id].userId);
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
      if (null != GuildStore.getGuild(guildId.guildId)) {
        c16 = true;
        obj = obj[guildId.guildId];
        if (obj == null) {
          obj = {};
        }
        obj[guildId.guildId] = obj;
        let flag = false;
        c16 = true;
        obj = obj[guildId.guildId];
        if (obj == null) {
          obj = {};
        }
        obj[guildId.guildId] = obj;
        const members = guildId.members;
        for (const item10017 of members) {
          if (null == obj[arg0.guildId][item10017.userId]) {
            flag = true;
            obj[arg0.guildId][item10017.userId] = item10017;
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
    ({ guildId, members } = arg0);
    const mapped = members.map((member) => member.member);
    let guild;
    dependencyMap = tmp;
    if (null == obj[guildId]) {
      return false;
    } else {
      guild = GuildStore.getGuild(guildId);
      if (null == guild) {
        const _HermesInternal = HermesInternal;
        logger.warn("Guild " + guildId + " not found during batchUpdateGuildMembers.");
        let flag = false;
      } else {
        const item = mapped.forEach((user) => {
          obj = {
            userId: user.user.id,
            nick: user.nick,
            guildId,
            avatar: user.avatar,
            avatarDecoration: AvatarDecorationUtils.parseAvatarDecorationData(user.avatar_decoration_data),
            guildRoles: GuildRoleStore.getUnsafeMutableRoles(guild.id),
            roles: null,
            premiumSince: null,
            isPending: null,
            joinedAt: null,
            communicationDisabledUntil: null,
            flags: null,
            fullProfileLoadedTimestamp: null,
            unusualDMActivityUntil: null,
            collectibles: null,
            displayNameStyles: null,
          };
          ({
            roles: obj.roles,
            premium_since: obj.premiumSince,
            pending: obj.isPending,
            joined_at: obj.joinedAt,
            communication_disabled_until: obj.communicationDisabledUntil,
            flags: obj.flags,
          } = user);
          let prop;
          if (dependencyMap[user.user.id] != null) {
            prop = tmp2.fullProfileLoadedTimestamp;
          }
          obj.fullProfileLoadedTimestamp = prop;
          let unusual_dm_activity_until = user.unusual_dm_activity_until;
          if (unusual_dm_activity_until == null) {
            let prop1;
            if (tmp2 != null) {
              prop1 = tmp2.unusualDMActivityUntil;
            }
            unusual_dm_activity_until = prop1;
          }
          obj.unusualDMActivityUntil = unusual_dm_activity_until;
          let tmp5Result = mappers;
          obj.collectibles = tmp5Result.parseServerUserCollectibles(user.collectibles);
          tmp5Result = DisplayNameStylesUtils;
          obj.displayNameStyles = tmp5Result.parseServerDisplayNameStyles(user.display_name_styles);
          dependencyMap[user.user.id] = createMember(obj);
          if (null != dependencyMap[user.user.id].communicationDisabledUntil) {
            if (tmp5Result1.isMemberCommunicationDisabled(tmp9)) {
              const items = [];
              items[constants.GUILD] = guildId;
              items[constants.USER] = tmp9.userId;
              const joined = items.join("-");
              let result = closure_15[joined] !== tmp9.communicationDisabledUntil;
              if (result) {
                result = CommunicationDisabledUtils.isMemberCommunicationDisabled(tmp9);
                const tmp5Result2 = CommunicationDisabledUtils;
              }
              if (result) {
                closure_15[joined] = tmp9.communicationDisabledUntil;
                const sum = sum1 + 1;
                sum1 = sum;
                closure_19[joined] = sum;
              }
            }
            tmp5Result1 = CommunicationDisabledUtils;
          }
          removeCommunicationDisabled(guildId, dependencyMap[user.user.id].userId);
        });
        closure_18 = closure_18 + 1;
        flag = true;
      }
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    instance = instance.instance;
    obj = embeddedActivityLocationUtils;
    const embeddedActivityLocationGuildId = obj.getEmbeddedActivityLocationGuildId(instance.location);
    let tmp3 = null != embeddedActivityLocationGuildId;
    if (tmp3) {
      const participants = instance.participants;
      obj = { id: embeddedActivityLocationGuildId, members: null };
      const found = participants.filter(isActivityParticipantValidGuildMemberDefault);
      obj.members = found.map((member) => member.member);
      tmp3 = buildMembers(obj);
    }
    return tmp3;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(channelId) {
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
      obj = { id: guild_id, members: null };
      const _Object = Object;
      const entries = Object.entries(resolved.members);
      const mapped = entries.map((item) => {
        [tmp, tmp2] = item;
        let tmp3;
        if (resolved != null) {
          const users = resolved.users;
          if (users != null) {
            tmp3 = users[tmp];
          }
        }
        if (null != tmp3) {
          obj = {};
          const merged = Object.assign(tmp2);
          obj.user = tmp3;
          return obj;
        }
      });
      obj.members = mapped.filter((item) => null != item);
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
