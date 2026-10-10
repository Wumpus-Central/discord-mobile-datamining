// === Module 5627: useMessageAuthor ===

// Module 5627 (useMessageAuthor)
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import GuildStore from "GuildStore" /* 2087 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
function useNullableMessageAuthor(message) {
  let author = message;
  if (closure_9) {
    closure_129_0 = author;
    const cResult = c.c(36);
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [c3];
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== author) {
      const fn = function h() {
        let channel = null;
        if (null != _require) {
          channel = ChannelStore.getChannel(tmp.channel_id);
        }
        return channel;
      };
      cResult[1] = author;
      cResult[2] = fn;
      let tmp31 = fn;
    } else {
      tmp31 = cResult[2];
    }
    const stateFromStores = initialize.useStateFromStores(first, tmp31);
    closure_129_1 = stateFromStores;
    let id;
    if (author != null) {
      const author2 = author.author;
      if (author2 != null) {
        id = author2.id;
      }
    }
    closure_129_2 = id;
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    closure_129_3 = guild_id;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [c4];
      cResult[3] = items1;
      let tmp36 = items1;
    } else {
      tmp36 = cResult[3];
    }
    if (cResult[4] === guild_id) {
      if (cResult[5] === id) {
        let tmp38 = cResult[6];
      }
      const stateFromStores1 = initialize.useStateFromStores(tmp36, tmp38);
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UserStore];
        cResult[7] = items2;
        let tmp40 = items2;
      } else {
        tmp40 = cResult[7];
      }
      if (cResult[8] !== id) {
        class R {
          constructor() {
            return closure_8.getUser(id);
          }
        }
        const items3 = [id];
        cResult[8] = id;
        cResult[9] = R;
        cResult[10] = items3;
        let tmp43 = items3;
      } else {
        class R {
          constructor() {
            return closure_8.getUser(id);
          }
        }
        tmp43 = cResult[10];
      }
      const tmp25Result6 = initialize;
      let stateFromStores2 = initialize.useStateFromStores(tmp40, R, tmp43);
      const tmp25Result7 = initialize;
      const tmp45 = stateFromStores6;
      if (author != null) {
        class R {
          constructor() {
            return closure_8.getUser(id);
          }
        }
      }
      if (undefined) {
        class R {
          constructor() {
            return closure_8.getUser(id);
          }
        }
        if (author != null) {
          class R {
            constructor() {
              return closure_8.getUser(id);
            }
          }
        }
        stateFromStores2 = tmp47;
      }
      const name = stateFromStores6(4962).useName(stateFromStores2);
      const _Symbol4 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return closure_8.getUser(id);
          }
        }
        const items4 = [GuildStore];
        cResult[11] = items4;
        const tmp49 = items4;
      } else {
        class R {
          constructor() {
            return closure_8.getUser(id);
          }
        }
      }
      if (cResult[12] !== guild_id) {
        class F {
          constructor() {
            return closure_6.getGuild(guild_id);
          }
        }
        const items5 = [guild_id];
        cResult[12] = guild_id;
        cResult[13] = F;
        cResult[14] = items5;
        let tmp51 = items5;
      } else {
        class F {
          constructor() {
            return closure_6.getGuild(guild_id);
          }
        }
        tmp51 = cResult[14];
      }
      const obj14 = stateFromStores6(4962);
      const stateFromStores3 = initialize.useStateFromStores(tmp49, F, tmp51);
      if (stateFromStores1 != null) {
        class F {
          constructor() {
            return closure_6.getGuild(guild_id);
          }
        }
      }
      closure_129_4 = tmp53;
      const _Symbol5 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            return closure_6.getGuild(guild_id);
          }
        }
        const items6 = [GuildRoleStore];
        cResult[15] = items6;
        const tmp54 = items6;
      } else {
        class F {
          constructor() {
            return closure_6.getGuild(guild_id);
          }
        }
      }
      if (cResult[16] === guild_id) {
        class F {
          constructor() {
            return closure_6.getGuild(guild_id);
          }
        }
        const stateFromStores4 = initialize.useStateFromStores(tmp54, P, tmp56);
        const _Symbol6 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              return closure_6.getGuild(guild_id);
            }
          }
          const items7 = [RelationshipStore];
          cResult[20] = items7;
          const tmp58 = items7;
        } else {
          class F {
            constructor() {
              return closure_6.getGuild(guild_id);
            }
          }
        }
        if (cResult[21] === stateFromStores) {
          class F {
            constructor() {
              return closure_6.getGuild(guild_id);
            }
          }
          const stateFromStores5 = initialize.useStateFromStores(tmp58, tmp59);
          if (cResult[24] === guild_id) {
            class F {
              constructor() {
                return closure_6.getGuild(guild_id);
              }
            }
            const tmp62 = tmp45(5628)(tmp61);
            if (null == author) {
              class F {
                constructor() {
                  return closure_6.getGuild(guild_id);
                }
              }
            } else {
              class F {
                constructor() {
                  return closure_6.getGuild(guild_id);
                }
              }
              const obj2 = { user: author.author, channel: stateFromStores, guild: stateFromStores3, memberColorRole: stateFromStores4, userName: name, member: stateFromStores1, friendNickname: stateFromStores5, displayNameStyles: tmp62 };
              const tmp66 = computeMessageAuthor(obj2);
              cResult[27] = stateFromStores;
              cResult[28] = tmp62;
              cResult[29] = stateFromStores5;
              cResult[30] = stateFromStores3;
              cResult[31] = stateFromStores1;
              cResult[32] = stateFromStores4;
              author = author.author;
              cResult[33] = author;
              class P {
                constructor() {
                  role = undefined;
                  if (null != guild_id) {
                    if (null != colorRoleId) {
                      tmp4 = closure_5;
                      role = closure_5.getRole(tmp, tmp3);
                    }
                  }
                  return role;
                }
              }
              cResult[35] = tmp66;
            }
          }
          const obj3 = { userId: id, guildId: guild_id };
          cResult[24] = guild_id;
          cResult[25] = id;
          cResult[26] = obj3;
          const tmp25Result10 = initialize;
          tmp61 = obj3;
        }
        const fn3 = function x() {
          let nickname = null;
          if (null != c2) {
            let isPrivateResult;
            if (stateFromStores6 != null) {
              isPrivateResult = stateFromStores6.isPrivate();
            }
            nickname = null;
            if (isPrivateResult) {
              nickname = RelationshipStore.getNickname(tmp);
            }
          }
          return nickname;
        };
        cResult[21] = stateFromStores;
        cResult[22] = id;
        cResult[23] = fn3;
        const tmp25Result9 = initialize;
        tmp59 = fn3;
      }
      class P {
        constructor() {
          role = undefined;
          if (null != guild_id) {
            if (null != colorRoleId) {
              tmp4 = closure_5;
              role = closure_5.getRole(tmp, tmp3);
            }
          }
          return role;
        }
      }
      const items8 = [guild_id, undefined];
      cResult[16] = guild_id;
      cResult[17] = undefined;
      cResult[18] = P;
      cResult[19] = items8;
      const tmp25Result8 = initialize;
      tmp56 = items8;
    }
    const fn2 = function v() {
      let member = null;
      if (null != c3) {
        member = null;
        if (null != c2) {
          member = GuildMemberStore.getMember(tmp, tmp3);
        }
      }
      return member;
    };
    cResult[5] = id;
    cResult[6] = fn2;
    tmp38 = fn2;
    const tmp25Result = initialize;
  } else {
    class F {
      constructor() {
        return closure_6.getGuild(guild_id);
      }
    }
    const items9 = [c3];
    stateFromStores6 = initialize.useStateFromStores(items9, () => {
      let channel = null;
      if (null != _require) {
        channel = ChannelStore.getChannel(tmp.channel_id);
      }
      return channel;
    });
    if (author != null) {
      class F {
        constructor() {
          return closure_6.getGuild(guild_id);
        }
      }
      if (tmp7 != null) {
        class F {
          constructor() {
            return closure_6.getGuild(guild_id);
          }
        }
      }
    }
    dependencyMap = tmp6;
    if (stateFromStores6 != null) {
      class F {
        constructor() {
          return closure_6.getGuild(guild_id);
        }
      }
    }
    c3 = tmp8;
    const items10 = [c4];
    const stateFromStores7 = initialize.useStateFromStores(items10, () => {
      let member = null;
      if (null != c3) {
        member = null;
        if (null != c2) {
          member = GuildMemberStore.getMember(tmp, tmp3);
        }
      }
      return member;
    });
    const tmpResult = initialize;
    const items11 = [UserStore];
    const items12 = [undefined];
    let stateFromStores8 = initialize.useStateFromStores(items11, () => UserStore.getUser(c2), items12);
    class P {
      constructor() {
        role = undefined;
        if (null != guild_id) {
          if (null != colorRoleId) {
            tmp4 = closure_5;
            role = closure_5.getRole(tmp, tmp3);
          }
        }
        return role;
      }
    }
    const tmpResult5 = initialize;
    if (author != null) {
      class F {
        constructor() {
          return closure_6.getGuild(guild_id);
        }
      }
    }
    if (undefined) {
      class F {
        constructor() {
          return closure_6.getGuild(guild_id);
        }
      }
      if (author != null) {
        class F {
          constructor() {
            return closure_6.getGuild(guild_id);
          }
        }
      }
      stateFromStores8 = tmp14;
    }
    const name1 = stateFromStores6(4962).useName(stateFromStores8);
    const obj4 = stateFromStores6(4962);
    const items13 = [GuildStore];
    const items14 = [undefined];
    const stateFromStores9 = initialize.useStateFromStores(items13, () => GuildStore.getGuild(c3), items14);
    if (stateFromStores7 != null) {
      class F {
        constructor() {
          return closure_6.getGuild(guild_id);
        }
      }
    }
    c4 = tmp18;
    const tmpResult6 = initialize;
    const items15 = [GuildRoleStore];
    const items16 = [undefined, undefined];
    const stateFromStores10 = initialize.useStateFromStores(items15, () => {
      let role;
      if (null != c3) {
        if (null != c4) {
          role = GuildRoleStore.getRole(tmp, tmp3);
        }
      }
      return role;
    }, items16);
    const tmpResult7 = initialize;
    const items17 = [RelationshipStore];
    const stateFromStores11 = initialize.useStateFromStores(items17, () => {
      let nickname = null;
      if (null != c2) {
        let isPrivateResult;
        if (stateFromStores6 != null) {
          isPrivateResult = stateFromStores6.isPrivate();
        }
        nickname = null;
        if (isPrivateResult) {
          nickname = RelationshipStore.getNickname(tmp);
        }
      }
      return nickname;
    });
    const obj5 = { userId: undefined, guildId: undefined };
    let tmp24 = null;
    if (null != author) {
      class F {
        constructor() {
          return closure_6.getGuild(guild_id);
        }
      }
      const obj6 = { user: author.author, channel: stateFromStores6, guild: stateFromStores9, memberColorRole: stateFromStores10, userName: name1, member: stateFromStores7, friendNickname: stateFromStores11, displayNameStyles: tmp23 };
      tmp24 = computeMessageAuthor(obj6);
    }
    const tmpResult8 = initialize;
  }
  return tmp24;
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
  guild = GuildStore.getGuild(guild_id);
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
  const obj = { user, channel, guild, memberColorRole: role, member, friendNickname: nickname, displayNameStyles: null };
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
      userName = UserUtilsDefault.getName(user);
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
        const obj3 = { nick: friendNickname, colorString: null, colorStrings: null, displayNameStyles };
        let obj7 = obj3;
      } else if (null == member) {
        const obj4 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
        obj7 = obj4;
      } else {
        let nick = member.nick;
        if (nick == null) {
          nick = str;
        }
        obj7 = { nick, colorString: null, colorStrings: null, colorRoleName: null, colorRoleId: null, iconRoleId: null, guildMemberAvatar: null, guildMemberAvatarDecoration: null, primaryGuild: null, guildId: null, authorId: null, displayNameStyles: null };
        ({ colorString: obj2.colorString, colorStrings: obj2.colorStrings } = member);
        let name;
        if (memberColorRole != null) {
          name = memberColorRole.name;
        }
        obj7.colorRoleName = name;
        let id2;
        if (memberColorRole != null) {
          id2 = memberColorRole.id;
        }
        obj7.colorRoleId = id2;
        ({ iconRoleId: obj2.iconRoleId, avatar: obj2.guildMemberAvatar, avatarDecoration: obj2.guildMemberAvatarDecoration } = member);
        const primaryGuild = user.primaryGuild;
        obj7.primaryGuild = primaryGuild;
        obj7.guildId = guild.id;
        obj7.authorId = user.id;
        obj7.displayNameStyles = displayNameStyles;
      }
    }
    return obj7;
  }
  obj7 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
}
fn(558);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageNickAndColor(message, arg1) {
  let tmp = arg1;
  const tmp2 = useNullableMessageAuthor(message);
  _modDef38(null != tmp2, "Result cannot be null because the message is not null");
  if (arg1 == null) {
    tmp = tmp2;
  }
  return tmp;
}) : (function useMessageNickAndColor(message, arg1) {
  let tmp = arg1;
  const tmp2 = useNullableMessageAuthor(message);
  _modDef38(null != tmp2, "Result cannot be null because the message is not null");
  if (arg1 == null) {
    tmp = tmp2;
  }
  return tmp;
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNullableUserAuthor(id, guild_id) {
  _require = guild_id;
  const cResult = require("c").c(29);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guild_id) {
    if (cResult[2] === id) {
      let tmp8 = cResult[3];
    }
    const stateFromStores = tmp(tmp2[9]).useStateFromStores(first, tmp8);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GuildStore];
      cResult[4] = items1;
      let tmp10 = items1;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== guild_id) {
      const fn = function y() {
        return GuildStore.getGuild(guild_id);
      };
      const items2 = [guild_id];
      cResult[5] = guild_id;
      cResult[6] = fn;
      cResult[7] = items2;
      let tmp13 = items2;
      let tmp12 = fn;
    } else {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    const tmpResult = tmp(tmp2[9]);
    const stateFromStores1 = tmp(tmp2[9]).useStateFromStores(tmp10, tmp12, tmp13);
    let colorRoleId;
    if (stateFromStores != null) {
      colorRoleId = stateFromStores.colorRoleId;
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [GuildRoleStore];
      cResult[8] = items3;
      let tmp16 = items3;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === guild_id) {
      if (cResult[10] === colorRoleId) {
        let tmp18 = cResult[11];
        let tmp19 = cResult[12];
      }
      const stateFromStores2 = tmp(tmp2[9]).useStateFromStores(tmp16, tmp18, tmp19);
      const _Symbol3 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [RelationshipStore];
        cResult[13] = items4;
        let tmp21 = items4;
      } else {
        tmp21 = cResult[13];
      }
      if (cResult[14] === guild_id) {
        if (cResult[15] === id) {
          let tmp23 = cResult[16];
        }
        const stateFromStores3 = tmp(tmp2[9]).useStateFromStores(tmp21, tmp23);
        const tmp25 = id;
        const tmpResult6 = tmp(tmp2[9]);
        const name = id(tmp2[10]).useName(id);
        if (cResult[17] === guild_id) {
          if (cResult[18] === id) {
            const tmp27 = cResult[19];
          }
          const tmp29 = tmp25(tmp2[11])(tmp27);
          if (cResult[20] === guild_id) {
            if (cResult[21] === tmp29) {
              if (cResult[22] === stateFromStores3) {
                if (cResult[23] === stateFromStores1) {
                  if (cResult[24] === stateFromStores) {
                    if (cResult[25] === stateFromStores2) {
                      if (cResult[26] === id) {
                        if (cResult[27] === name) {
                          let tmp30 = cResult[28];
                        }
                        return tmp30;
                      }
                    }
                  }
                }
              }
            }
          }
          const obj2 = { user: id, channel: guild_id, guild: null, memberColorRole: null, member: null, userName: null, friendNickname: null, displayNameStyles: null };
          class I {
            constructor() {
              nickname = null;
              if (null != id) {
                obj = closure_0;
                isPrivateResult = undefined;
                if (closure_0 != null) {
                  isPrivateResult = obj.isPrivate();
                }
                nickname = null;
                if (isPrivateResult) {
                  tmp4 = closure_7;
                  nickname = closure_7.getNickname(tmp);
                }
              }
              return nickname;
            }
          }
          obj2.memberColorRole = stateFromStores2;
          obj2.member = stateFromStores;
          obj2.userName = name;
          obj2.friendNickname = stateFromStores3;
          obj2.displayNameStyles = tmp29;
          const tmp32 = computeMessageAuthor(obj2);
          class R {
            constructor() {
              role = undefined;
              if (null != guild_id) {
                if (null != colorRoleId) {
                  tmp4 = closure_5;
                  role = closure_5.getRole(tmp, tmp3);
                }
              }
              return role;
            }
          }
          cResult[21] = tmp29;
          cResult[22] = stateFromStores3;
          class S {
            constructor() {
              member = null;
              if (null != guild_id) {
                member = null;
                if (null != id) {
                  tmp4 = closure_4;
                  member = closure_4.getMember(tmp, tmp3);
                }
              }
              return member;
            }
          }
          cResult[24] = stateFromStores;
          cResult[25] = stateFromStores2;
          cResult[26] = id;
          cResult[27] = name;
          cResult[28] = tmp32;
          tmp30 = tmp32;
        }
        class I {
          constructor() {
            nickname = null;
            if (null != id) {
              obj = closure_0;
              isPrivateResult = undefined;
              if (closure_0 != null) {
                isPrivateResult = obj.isPrivate();
              }
              nickname = null;
              if (isPrivateResult) {
                tmp4 = closure_7;
                nickname = closure_7.getNickname(tmp);
              }
            }
            return nickname;
          }
        }
        tmp28[0] = id;
        tmp28[1] = guild_id;
        cResult[17] = guild_id;
        cResult[18] = id;
        cResult[19] = tmp28;
        class R {
          constructor() {
            role = undefined;
            if (null != guild_id) {
              if (null != colorRoleId) {
                tmp4 = closure_5;
                role = closure_5.getRole(tmp, tmp3);
              }
            }
            return role;
          }
        }
        const obj6 = id(tmp2[10]);
      }
      class I {
        constructor() {
          nickname = null;
          if (null != id) {
            obj = closure_0;
            isPrivateResult = undefined;
            if (closure_0 != null) {
              isPrivateResult = obj.isPrivate();
            }
            nickname = null;
            if (isPrivateResult) {
              tmp4 = closure_7;
              nickname = closure_7.getNickname(tmp);
            }
          }
          return nickname;
        }
      }
      cResult[14] = guild_id;
      cResult[15] = id;
      cResult[16] = I;
      tmp23 = I;
      const tmpResult5 = tmp(tmp2[9]);
    }
    class R {
      constructor() {
        role = undefined;
        if (null != guild_id) {
          if (null != colorRoleId) {
            tmp4 = closure_5;
            role = closure_5.getRole(tmp, tmp3);
          }
        }
        return role;
      }
    }
    const items5 = [guild_id, colorRoleId];
    cResult[9] = guild_id;
    class S {
      constructor() {
        member = null;
        if (null != guild_id) {
          member = null;
          if (null != id) {
            tmp4 = closure_4;
            member = closure_4.getMember(tmp, tmp3);
          }
        }
        return member;
      }
    }
    cResult[10] = colorRoleId;
    cResult[11] = R;
    cResult[12] = items5;
    tmp19 = items5;
    tmp18 = R;
    const tmpResult4 = tmp(tmp2[9]);
  }
  class S {
    constructor() {
      member = null;
      if (null != guild_id) {
        member = null;
        if (null != id) {
          tmp4 = closure_4;
          member = closure_4.getMember(tmp, tmp3);
        }
      }
      return member;
    }
  }
  cResult[1] = guild_id;
  cResult[2] = id;
  cResult[3] = S;
  tmp8 = S;
  const obj = require("c");
}) : (function useNullableUserAuthor(id, channel) {
  _require = channel;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const items = [GuildMemberStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let member = null;
    if (null != guild_id) {
      member = null;
      if (null != id) {
        member = GuildMemberStore.getMember(tmp, tmp3);
      }
    }
    return member;
  });
  const obj = require("initialize");
  const items1 = [GuildStore];
  const items2 = [guild_id];
  let colorRoleId;
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(guild_id), items2);
  if (stateFromStores != null) {
    colorRoleId = stateFromStores.colorRoleId;
  }
  const obj2 = require("initialize");
  const items3 = [GuildRoleStore];
  const items4 = [guild_id, colorRoleId];
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => {
    let role;
    if (null != guild_id) {
      if (null != colorRoleId) {
        role = GuildRoleStore.getRole(tmp, tmp3);
      }
    }
    return role;
  }, items4);
  const tmp3Result = require("initialize");
  const items5 = [RelationshipStore];
  const stateFromStores3 = require("initialize").useStateFromStores(items5, () => {
    let nickname = null;
    if (null != id) {
      let isPrivateResult;
      if (_private != null) {
        isPrivateResult = _private.isPrivate();
      }
      nickname = null;
      if (isPrivateResult) {
        nickname = RelationshipStore.getNickname(tmp);
      }
    }
    return nickname;
  });
  const tmp3Result2 = require("initialize");
  const name = id(guild_id[10]).useName(id);
  const obj5 = id(guild_id[10]);
  return computeMessageAuthor({ user: id, channel, guild: stateFromStores1, memberColorRole: stateFromStores2, member: stateFromStores, userName: name, friendNickname: stateFromStores3, displayNameStyles: id(guild_id[11])({ userId: id, guildId: guild_id }) });
});
let closure_11 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useMessageAuthor.tsx");

export default tmp2;
export { useNullableMessageAuthor };
export const getMessageAuthor = function getMessageAuthor(message) {
  return getUserAuthor(message.author, ChannelStore.getChannel(message.channel_id));
};
export const useUserNickAndColor = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserNickAndColor(arg0, arg1) {
  const tmp = closure_11(arg0, arg1);
  _modDef38(null != tmp, "Result cannot be null because user and channel are not null");
  return tmp;
}) : (function useUserNickAndColor(arg0, arg1) {
  const tmp = closure_11(arg0, arg1);
  _modDef38(null != tmp, "Result cannot be null because user and channel are not null");
  return tmp;
});
export const useNullableUserAuthor = tmp4;
export { getUserAuthor };