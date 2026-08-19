// === Module 4814: useNullableMessageAuthor ===

// Module 4814 (useNullableMessageAuthor)
import _modDef38 from "module_38" /* 38 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
function useNullableMessageAuthor(message) {
  const _require = message;
  let obj = _require(id[7]);
  const items = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel = null;
    if (null != closure_0) {
      channel = guild_id.getChannel(tmp.channel_id);
    }
    return channel;
  });
  id = undefined;
  if (message != null) {
    let author = message.author;
    if (author != null) {
      id = author.id;
    }
  }
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  let tmpResult = tmp(tmp2[7]);
  const items1 = [colorRoleId];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let member = null;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = colorRoleId.getMember(tmp, tmp3);
      }
    }
    return member;
  });
  tmpResult = tmp(tmp2[7]);
  const items2 = [closure_8];
  const items3 = [id];
  let stateFromStores2 = tmpResult.useStateFromStores(items2, () => closure_1_8.getUser(id), items3);
  let bot;
  if (message != null) {
    bot = message.author.bot;
  }
  if (bot) {
    author = undefined;
    if (message != null) {
      author = message.author;
    }
    stateFromStores2 = author;
  }
  const name = stateFromStores(id[8]).useName(stateFromStores2);
  const obj4 = stateFromStores(id[8]);
  const items4 = [closure_6];
  const items5 = [guild_id];
  colorRoleId = undefined;
  const stateFromStores3 = _require(id[7]).useStateFromStores(items4, () => closure_1_6.getGuild(guild_id), items5);
  if (stateFromStores1 != null) {
    colorRoleId = stateFromStores1.colorRoleId;
  }
  const tmpResult1 = _require(id[7]);
  const items6 = [closure_5];
  const items7 = [guild_id, colorRoleId];
  const stateFromStores4 = _require(id[7]).useStateFromStores(items6, () => {
    let role;
    if (null != guild_id) {
      if (null != colorRoleId) {
        role = closure_1_5.getRole(tmp, tmp3);
      }
    }
    return role;
  }, items7);
  const tmpResult2 = _require(id[7]);
  const items8 = [closure_7];
  const stateFromStores5 = _require(id[7]).useStateFromStores(items8, () => {
    let nickname = null;
    if (null != id) {
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = stateFromStores.isPrivate();
      }
      nickname = null;
      if (isPrivateResult) {
        nickname = closure_1_7.getNickname(tmp);
      }
    }
    return nickname;
  });
  let tmp16 = null;
  if (null != message) {
    obj = { user: null, channel: null, guild: null, memberColorRole: null, userName: null, member: null, friendNickname: null, displayNameStyles: null };
    obj[0] = message.author;
    obj[1] = stateFromStores;
    obj[2] = stateFromStores3;
    obj[3] = stateFromStores4;
    obj[4] = name;
    obj[5] = stateFromStores1;
    obj[6] = stateFromStores5;
    obj[7] = tmp15;
    tmp16 = computeMessageAuthor(obj);
  }
  return tmp16;
}
function useNullableUserAuthor(author, channel) {
  const _require = channel;
  let id;
  if (author != null) {
    id = author.id;
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let obj = _require(guild_id[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = closure_1_4.getMember(tmp, tmp3);
      }
    }
    return member;
  });
  const items1 = [closure_6];
  const items2 = [guild_id];
  let colorRoleId;
  const stateFromStores1 = _require(guild_id[7]).useStateFromStores(items1, () => closure_1_6.getGuild(guild_id), items2);
  if (stateFromStores != null) {
    colorRoleId = stateFromStores.colorRoleId;
  }
  let tmp3Result = tmp3(tmp4[7]);
  const items3 = [closure_5];
  const items4 = [guild_id, colorRoleId];
  const stateFromStores2 = tmp3Result.useStateFromStores(items3, () => {
    let role;
    if (null != guild_id) {
      if (null != colorRoleId) {
        role = closure_1_5.getRole(tmp, tmp3);
      }
    }
    return role;
  }, items4);
  tmp3Result = tmp3(tmp4[7]);
  const items5 = [closure_7];
  const stateFromStores3 = tmp3Result.useStateFromStores(items5, () => {
    let nickname = null;
    if (null != id) {
      let isPrivateResult;
      if (_private != null) {
        isPrivateResult = _private.isPrivate();
      }
      nickname = null;
      if (isPrivateResult) {
        nickname = closure_1_7.getNickname(tmp);
      }
    }
    return nickname;
  });
  const obj2 = _require(guild_id[7]);
  obj = { user: author, channel, guild: stateFromStores1, memberColorRole: stateFromStores2, member: stateFromStores, userName: id(guild_id[8]).useName(author), friendNickname: stateFromStores3, displayNameStyles: null };
  let displayNameStyles;
  if (author != null) {
    displayNameStyles = author.displayNameStyles;
  }
  obj[7] = displayNameStyles;
  return computeMessageAuthor(obj);
}
function getUserAuthor(user, channel) {
  let id;
  if (user != null) {
    id = user.id;
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let member = null;
  guild = guild.getGuild(guild_id);
  if (null != guild_id) {
    member = null;
    if (null != id) {
      member = member.getMember(guild_id, id);
    }
  }
  let role;
  if (null != guild_id) {
    let colorRoleId;
    if (member != null) {
      colorRoleId = member.colorRoleId;
    }
    if (null != colorRoleId) {
      role = role.getRole(guild_id, member.colorRoleId);
    }
  }
  let nickname = null;
  if (null != id) {
    nickname = null;
    if (null != channel) {
      nickname = null;
      if (channel.isPrivate()) {
        nickname = nickname.getNickname(id);
      }
    }
  }
  const obj = { user, channel, guild, memberColorRole: role, member, friendNickname: nickname, displayNameStyles: null };
  let displayNameStyles;
  if (user != null) {
    displayNameStyles = user.displayNameStyles;
  }
  obj[6] = displayNameStyles;
  return computeMessageAuthor(obj);
}
function computeMessageAuthor(channel) {
  ({ user, guild, memberColorRole, member, userName, friendNickname, displayNameStyles } = channel);
  let str = "???";
  if (null != user) {
    if (userName == null) {
      let obj = nameFromUserDefault;
      userName = obj.getName(user);
    }
    str = userName;
  }
  let id;
  if (user != null) {
    id = user.id;
  }
  if (null != id) {
    if (null != channel.channel) {
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      if (null == id1) {
        if (friendNickname == null) {
          friendNickname = str;
        }
        obj = { nick: null, colorString: null, colorStrings: null, displayNameStyles: null };
        obj[0] = friendNickname;
        obj[3] = displayNameStyles;
        obj1 = obj;
      } else if (null == member) {
        obj = { nick: null, colorString: null, colorStrings: null, displayNameStyles: null };
        obj[0] = str;
        obj[3] = displayNameStyles;
        obj1 = obj;
      } else {
        let nick = member.nick;
        if (nick == null) {
          nick = str;
        }
        obj1 = { nick: null, colorString: null, colorStrings: null, colorRoleName: null, colorRoleId: null, iconRoleId: null, guildMemberAvatar: null, guildMemberAvatarDecoration: null, primaryGuild: null, guildId: null, authorId: null, displayNameStyles: null };
        obj1[0] = nick;
        ({ colorString: obj2[1], colorStrings: obj2[2] } = member);
        let name;
        if (memberColorRole != null) {
          name = memberColorRole.name;
        }
        obj1[3] = name;
        let id2;
        if (memberColorRole != null) {
          id2 = memberColorRole.id;
        }
        obj1[4] = id2;
        ({ iconRoleId: obj2[5], avatar: obj2[6], avatarDecoration: obj2[7] } = member);
        const primaryGuild = user.primaryGuild;
        obj1[8] = primaryGuild;
        obj1[9] = guild.id;
        obj1[10] = user.id;
        obj1[11] = displayNameStyles;
      }
    }
    return obj1;
  }
  obj1 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
}
const result = require("obj132").fileFinishedImporting("modules/messages/useMessageAuthor.tsx");

export default function useMessageNickAndColor(message) {
  let tmp = arg1;
  const tmp2 = useNullableMessageAuthor(message);
  _modDef38(null != tmp2, "Result cannot be null because the message is not null");
  if (arg1 == null) {
    tmp = tmp2;
  }
  return tmp;
};
export { useNullableMessageAuthor };
export const getMessageAuthor = function getMessageAuthor(message) {
  return getUserAuthor(message.author, channel.getChannel(message.channel_id));
};
export const useUserNickAndColor = function useUserNickAndColor(author, channel) {
  _modDef38(true, "Result cannot be null because user and channel are not null");
  return useNullableUserAuthor(author, channel);
};
export { useNullableUserAuthor };
export { getUserAuthor };