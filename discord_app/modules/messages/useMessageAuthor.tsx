// discord_app/modules/messages/useMessageAuthor.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = fn;
function useNullableMessageAuthor(message) {
  _require = message;
  let obj = require("initialize");
  const items = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let channel = null;
    if (null != closure_0) {
      channel = ChannelStore.getChannel(tmp.channel_id);
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
        member = GuildMemberStore.getMember(tmp, tmp3);
      }
    }
    return member;
  });
  tmpResult = tmp(tmp2[7]);
  const items2 = [UserStore];
  const items3 = [id];
  let stateFromStores2 = tmpResult.useStateFromStores(items2, () => UserStore.getUser(id), items3);
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
  const items4 = [GuildStore];
  const items5 = [guild_id];
  colorRoleId = undefined;
  const stateFromStores3 = require("initialize").useStateFromStores(
    items4,
    () => GuildStore.getGuild(guild_id),
    items5,
  );
  if (stateFromStores1 != null) {
    colorRoleId = stateFromStores1.colorRoleId;
  }
  const tmpResult1 = require("initialize");
  const items6 = [GuildRoleStore];
  const items7 = [guild_id, colorRoleId];
  const stateFromStores4 = require("initialize").useStateFromStores(
    items6,
    () => {
      let role;
      if (null != guild_id) {
        if (null != colorRoleId) {
          role = GuildRoleStore.getRole(tmp, tmp3);
        }
      }
      return role;
    },
    items7,
  );
  const tmpResult2 = require("initialize");
  const items8 = [RelationshipStore];
  const stateFromStores5 = require("initialize").useStateFromStores(items8, () => {
    let nickname = null;
    if (null != id) {
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = obj.isPrivate();
      }
      nickname = null;
      if (isPrivateResult) {
        nickname = RelationshipStore.getNickname(tmp);
      }
      obj = stateFromStores;
    }
    return nickname;
  });
  let tmp16 = null;
  if (null != message) {
    obj = {
      user: message.author,
      channel: stateFromStores,
      guild: stateFromStores3,
      memberColorRole: stateFromStores4,
      userName: name,
      member: stateFromStores1,
      friendNickname: stateFromStores5,
      displayNameStyles: tmp15,
    };
    tmp16 = computeMessageAuthor(obj);
  }
  return tmp16;
}
function useNullableUserAuthor(author, channel) {
  _require = channel;
  let id;
  if (author != null) {
    id = author.id;
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let obj = require("initialize");
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = GuildMemberStore.getMember(tmp, tmp3);
      }
    }
    return member;
  });
  const items1 = [GuildStore];
  const items2 = [guild_id];
  let colorRoleId;
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => GuildStore.getGuild(guild_id),
    items2,
  );
  if (stateFromStores != null) {
    colorRoleId = stateFromStores.colorRoleId;
  }
  let tmp3Result = tmp3(tmp4[7]);
  const items3 = [GuildRoleStore];
  const items4 = [guild_id, colorRoleId];
  const stateFromStores2 = tmp3Result.useStateFromStores(
    items3,
    () => {
      let role;
      if (null != guild_id) {
        if (null != colorRoleId) {
          role = GuildRoleStore.getRole(tmp, tmp3);
        }
      }
      return role;
    },
    items4,
  );
  tmp3Result = tmp3(tmp4[7]);
  const items5 = [RelationshipStore];
  const stateFromStores3 = tmp3Result.useStateFromStores(items5, () => {
    let nickname = null;
    if (null != id) {
      let isPrivateResult;
      if (closure_0 != null) {
        isPrivateResult = obj.isPrivate();
      }
      nickname = null;
      if (isPrivateResult) {
        nickname = RelationshipStore.getNickname(tmp);
      }
      obj = closure_0;
    }
    return nickname;
  });
  const obj2 = require("initialize");
  obj = {
    user: author,
    channel,
    guild: stateFromStores1,
    memberColorRole: stateFromStores2,
    member: stateFromStores,
    userName: id(guild_id[8]).useName(author),
    friendNickname: stateFromStores3,
    displayNameStyles: null,
  };
  let displayNameStyles;
  if (author != null) {
    displayNameStyles = author.displayNameStyles;
  }
  obj.displayNameStyles = displayNameStyles;
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
  const guild = GuildStore.getGuild(guild_id);
  if (null != guild_id) {
    member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(guild_id, id);
    }
  }
  let role;
  if (null != guild_id) {
    let colorRoleId;
    if (member != null) {
      colorRoleId = member.colorRoleId;
    }
    if (null != colorRoleId) {
      role = GuildRoleStore.getRole(guild_id, member.colorRoleId);
    }
  }
  let nickname = null;
  if (null != id) {
    nickname = null;
    if (null != channel) {
      nickname = null;
      if (channel.isPrivate()) {
        nickname = RelationshipStore.getNickname(id);
      }
    }
  }
  const obj = {
    user,
    channel,
    guild,
    memberColorRole: role,
    member,
    friendNickname: nickname,
    displayNameStyles: null,
  };
  let displayNameStyles;
  if (user != null) {
    displayNameStyles = user.displayNameStyles;
  }
  obj.displayNameStyles = displayNameStyles;
  return computeMessageAuthor(obj);
}
function computeMessageAuthor(channel) {
  ({ user, guild, memberColorRole, member, userName, friendNickname, displayNameStyles } = channel);
  let str = "???";
  if (null != user) {
    if (userName == null) {
      let obj = UserUtilsDefault;
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
        obj = { nick: friendNickname, colorString: null, colorStrings: null, displayNameStyles };
        let obj1 = obj;
      } else if (null == member) {
        obj = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
        obj1 = obj;
      } else {
        let nick = member.nick;
        if (nick == null) {
          nick = str;
        }
        obj1 = {
          nick,
          colorString: null,
          colorStrings: null,
          colorRoleName: null,
          colorRoleId: null,
          iconRoleId: null,
          guildMemberAvatar: null,
          guildMemberAvatarDecoration: null,
          primaryGuild: null,
          guildId: null,
          authorId: null,
          displayNameStyles: null,
        };
        ({ colorString: obj2.colorString, colorStrings: obj2.colorStrings } = member);
        let name;
        if (memberColorRole != null) {
          name = memberColorRole.name;
        }
        obj1.colorRoleName = name;
        let id2;
        if (memberColorRole != null) {
          id2 = memberColorRole.id;
        }
        obj1.colorRoleId = id2;
        ({
          iconRoleId: obj2.iconRoleId,
          avatar: obj2.guildMemberAvatar,
          avatarDecoration: obj2.guildMemberAvatarDecoration,
        } = member);
        const primaryGuild = user.primaryGuild;
        obj1.primaryGuild = primaryGuild;
        obj1.guildId = guild.id;
        obj1.authorId = user.id;
        obj1.displayNameStyles = displayNameStyles;
      }
    }
    return obj1;
  }
  obj1 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useMessageAuthor.tsx");

export default function useMessageNickAndColor(message, arg1) {
  let tmp = arg1;
  const tmp2 = useNullableMessageAuthor(message);
  _modDef38(null != tmp2, "Result cannot be null because the message is not null");
  if (arg1 == null) {
    tmp = tmp2;
  }
  return tmp;
}
export { useNullableMessageAuthor };
export const getMessageAuthor = function getMessageAuthor(message) {
  return getUserAuthor(message.author, ChannelStore.getChannel(message.channel_id));
};
export const useUserNickAndColor = function useUserNickAndColor(author, channel) {
  _modDef38(true, "Result cannot be null because user and channel are not null");
  return useNullableUserAuthor(author, channel);
};
export { useNullableUserAuthor };
export { getUserAuthor };
