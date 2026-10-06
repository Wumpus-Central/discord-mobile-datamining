// discord_app/modules/messages/useMessageAuthor.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import UserUtilsDefault from "../../utils/UserUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c3, c4, dependencyMap;

function useNullableMessageAuthor(message) {
  let c2;
  let guild;
  let stateFromStores6;
  let tmp26;
  let tmp60;
  let tmp63;
  let tmp65;
  let user;
  if (closure_9) {
    let first;
    let tmp33;
    let tmp38;
    let closure_0 = message;
    const obj9 = react;
    const cResult = obj9.c(36);
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [c3];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== message) {
      const fn = function h() {
        let channel = null;
        if (null != closure_0) {
          channel = guild_id.getChannel(tmp.channel_id);
        }
        return channel;
      };
      cResult[1] = message;
      cResult[2] = fn;
      tmp33 = fn;
    } else {
      tmp33 = cResult[2];
    }
    const tmp27Result = get_initialized;
    const stateFromStores = tmp27Result.useStateFromStores(first, tmp33);
    let id;
    if (message != null) {
      const author = message.author;
      if (author != null) {
        id = author.id;
      }
    }
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [c4];
      cResult[3] = items1;
      tmp38 = items1;
    } else {
      tmp38 = cResult[3];
    }
    if (cResult[4] === guild_id) {
      let tmp40;
      let tmp42;
      let tmp45;
      let tmp44;
      let tmp52;
      let tmp55;
      let tmp58;
      if (cResult[5] === id) {
        tmp40 = cResult[6];
      }
      const tmp27Result6 = get_initialized;
      const stateFromStores1 = tmp27Result6.useStateFromStores(tmp38, tmp40);
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UserStore];
        cResult[7] = items2;
        tmp42 = items2;
      } else {
        tmp42 = cResult[7];
      }
      if (cResult[8] !== id) {
        const fn3 = function p() {
          return user.getUser(id);
        };
        const items3 = [id];
        cResult[8] = id;
        cResult[9] = fn3;
        cResult[10] = items3;
        tmp45 = items3;
        tmp44 = fn3;
      } else {
        tmp44 = cResult[9];
        tmp45 = cResult[10];
      }
      const tmp27Result7 = get_initialized;
      let stateFromStores2 = tmp27Result7.useStateFromStores(tmp42, tmp44, tmp45);
      let bot;
      const useName2 = stateFromStores6(4728).useName;
      stateFromStores6(4728);
      const tmp47 = stateFromStores6;
      if (message != null) {
        bot = message.author.bot;
      }
      if (bot) {
        let author1;
        if (message != null) {
          author1 = message.author;
        }
        stateFromStores2 = author1;
      }
      const name2 = useName2(stateFromStores2);
      const _Symbol4 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [GuildStore];
        cResult[11] = items4;
        tmp52 = items4;
      } else {
        tmp52 = cResult[11];
      }
      if (cResult[12] !== guild_id) {
        class I {
          constructor() {
            return guild.getGuild(guild_id);
          }
        }
        const items5 = [guild_id];
        cResult[12] = guild_id;
        cResult[13] = I;
        cResult[14] = items5;
        tmp55 = items5;
      } else {
        class I {
          constructor() {
            return guild.getGuild(guild_id);
          }
        }
        tmp55 = cResult[14];
      }
      const tmp27Result8 = get_initialized;
      const stateFromStores3 = tmp27Result8.useStateFromStores(tmp52, I, tmp55);
      if (stateFromStores1 != null) {
        class I {
          constructor() {
            return guild.getGuild(guild_id);
          }
        }
      }
      c4 = tmp57;
      const _Symbol5 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return guild.getGuild(guild_id);
          }
        }
        const items6 = [GuildRoleStore];
        cResult[15] = items6;
        tmp58 = items6;
      } else {
        class I {
          constructor() {
            return guild.getGuild(guild_id);
          }
        }
      }
      if (cResult[16] === guild_id) {
        let tmp62;
        class I {
          constructor() {
            return guild.getGuild(guild_id);
          }
        }
        const tmp27Result9 = get_initialized;
        const stateFromStores4 = tmp27Result9.useStateFromStores(tmp58, P, tmp60);
        const _Symbol6 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              return guild.getGuild(guild_id);
            }
          }
          const items7 = [RelationshipStore];
          cResult[20] = items7;
          tmp62 = items7;
        } else {
          class I {
            constructor() {
              return guild.getGuild(guild_id);
            }
          }
        }
        if (cResult[21] === stateFromStores) {
          class I {
            constructor() {
              return guild.getGuild(guild_id);
            }
          }
          const tmp27Result10 = get_initialized;
          const stateFromStores5 = tmp27Result10.useStateFromStores(tmp62, tmp63);
          if (cResult[24] === guild_id) {
            class I {
              constructor() {
                return guild.getGuild(guild_id);
              }
            }
            const tmp66 = tmp47(5312)(tmp65);
            if (null != message) {
              class I {
                constructor() {
                  return guild.getGuild(guild_id);
                }
              }
              const obj2 = {
                user: message.author,
                channel: stateFromStores,
                guild: stateFromStores3,
                memberColorRole: stateFromStores4,
                userName: name2,
                member: stateFromStores1,
                friendNickname: stateFromStores5,
                displayNameStyles: tmp66,
              };
              cResult[27] = stateFromStores;
              cResult[28] = tmp66;
              cResult[29] = stateFromStores5;
              cResult[30] = stateFromStores3;
              cResult[31] = stateFromStores1;
              cResult[32] = stateFromStores4;
              cResult[33] = message.author;
              cResult[34] = name2;
              const tmp70 = computeMessageAuthor(obj2);
              class P {
                constructor() {
                  role = undefined;
                  if (null != guild_id) {
                    if (null != c4) {
                      role = role.getRole(tmp, tmp3);
                    }
                  }
                  return role;
                }
              }
              cResult[35] = tmp70;
            }
            tmp26 = tmp67;
          }
          const obj3 = { userId: id, guildId: guild_id };
          cResult[24] = guild_id;
          cResult[25] = id;
          cResult[26] = obj3;
          tmp65 = obj3;
        }
        const fn4 = function x() {
          nickname = null;
          if (null != id) {
            let isPrivateResult;
            if (stateFromStores != null) {
              isPrivateResult = stateFromStores.isPrivate();
            }
            nickname = null;
            if (isPrivateResult) {
              nickname = nickname.getNickname(tmp);
            }
          }
          return nickname;
        };
        cResult[21] = stateFromStores;
        cResult[22] = id;
        cResult[23] = fn4;
        tmp63 = fn4;
      }
      class P {
        constructor() {
          role = undefined;
          if (null != guild_id) {
            if (null != c4) {
              role = role.getRole(tmp, tmp3);
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
      tmp60 = items8;
    }
    const fn2 = function v() {
      let member = null;
      if (null != guild_id) {
        member = null;
        if (null != id) {
          member = _undefined.getMember(tmp, tmp3);
        }
      }
      return member;
    };
    cResult[5] = id;
    cResult[6] = fn2;
    tmp40 = fn2;
  } else {
    class I {
      constructor() {
        return guild.getGuild(guild_id);
      }
    }
    const tmp3 = dependencyMap;
    const items9 = [c3];
    const obj = get_initialized;
    stateFromStores6 = obj.useStateFromStores(items9, () => {
      let channel = null;
      if (null != _require) {
        channel = ChannelStore.getChannel(tmp.channel_id);
      }
      return channel;
    });
    if (message != null) {
      class I {
        constructor() {
          return guild.getGuild(guild_id);
        }
      }
      if (tmp8 != null) {
        class I {
          constructor() {
            return guild.getGuild(guild_id);
          }
        }
      }
    }
    dependencyMap = tmp7;
    if (stateFromStores6 != null) {
      class I {
        constructor() {
          return guild.getGuild(guild_id);
        }
      }
    }
    c3 = tmp9;
    const items10 = [c4];
    const tmp2Result = get_initialized;
    const stateFromStores7 = tmp2Result.useStateFromStores(items10, () => {
      let member = null;
      if (null != c3) {
        member = null;
        if (null != c2) {
          member = GuildMemberStore.getMember(tmp, tmp3);
        }
      }
      return member;
    });
    const items11 = [UserStore];
    const items12 = [undefined];
    const tmp2Result5 = get_initialized;
    let stateFromStores8 = tmp2Result5.useStateFromStores(items11, () => UserStore.getUser(c2), items12);
    class P {
      constructor() {
        role = undefined;
        if (null != guild_id) {
          if (null != c4) {
            role = role.getRole(tmp, tmp3);
          }
        }
        return role;
      }
    }
    const useName = stateFromStores6(4728).useName;
    stateFromStores6(4728);
    if (message != null) {
      class I {
        constructor() {
          return guild.getGuild(guild_id);
        }
      }
    }
    if (undefined) {
      class I {
        constructor() {
          return guild.getGuild(guild_id);
        }
      }
      if (message != null) {
        class I {
          constructor() {
            return guild.getGuild(guild_id);
          }
        }
      }
      stateFromStores8 = tmp16;
    }
    const name = useName(stateFromStores8);
    const items13 = [GuildStore];
    const items14 = [undefined];
    const tmp2Result6 = get_initialized;
    const stateFromStores9 = tmp2Result6.useStateFromStores(items13, () => GuildStore.getGuild(c3), items14);
    if (stateFromStores7 != null) {
      class I {
        constructor() {
          return guild.getGuild(guild_id);
        }
      }
    }
    c4 = tmp20;
    const items15 = [GuildRoleStore];
    const items16 = [undefined, undefined];
    const tmp2Result7 = get_initialized;
    const stateFromStores10 = tmp2Result7.useStateFromStores(
      items15,
      () => {
        role = undefined;
        if (null != c3) {
          if (null != c4) {
            role = GuildRoleStore.getRole(tmp, tmp3);
          }
        }
        return role;
      },
      items16,
    );
    const items17 = [RelationshipStore];
    const tmp2Result8 = get_initialized;
    const stateFromStores11 = tmp2Result8.useStateFromStores(items17, () => {
      nickname = null;
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
    tmp26 = null;
    if (null != message) {
      class I {
        constructor() {
          return guild.getGuild(guild_id);
        }
      }
      const obj5 = {
        user: message.author,
        channel: stateFromStores6,
        guild: stateFromStores9,
        memberColorRole: stateFromStores10,
        userName: name,
        member: stateFromStores7,
        friendNickname: stateFromStores11,
        displayNameStyles: tmp25,
      };
      tmp26 = computeMessageAuthor(obj5);
    }
  }
  return tmp26;
}
function getUserAuthor(user, channel) {
  let displayNameStyles;
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
  const obj = { user, channel, guild, memberColorRole: role, member, friendNickname: nickname, displayNameStyles };
  displayNameStyles = undefined;
  if (user != null) {
    displayNameStyles = user.displayNameStyles;
  }
  return computeMessageAuthor(obj);
}
function computeMessageAuthor(channel) {
  let displayNameStyles;
  let friendNickname;
  let guild;
  let id2;
  let member;
  let memberColorRole;
  let name;
  let primaryGuild;
  let user;
  let userName;
  ({ user, guild, memberColorRole, member, userName, friendNickname, displayNameStyles } = channel);
  let str = "???";
  channel = channel.channel;
  if (null != user) {
    if (userName == null) {
      const obj = UserUtilsDefault;
      userName = obj.getName(user);
    }
    str = userName;
  }
  let id;
  if (user != null) {
    id = user.id;
  }
  if (null != id) {
    let obj7;
    if (null != channel) {
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      if (null == id1) {
        if (friendNickname == null) {
          friendNickname = str;
        }
        obj7 = { nick: friendNickname, colorString: null, colorStrings: null, displayNameStyles };
        const obj3 = { nick: friendNickname, colorString: null, colorStrings: null, displayNameStyles };
      } else if (null == member) {
        obj7 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
        const obj4 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
      } else {
        let nick = member.nick;
        if (nick == null) {
          nick = str;
        }
        obj7 = {
          nick,
          colorString: null,
          colorStrings: null,
          colorRoleName: name,
          colorRoleId: id2,
          iconRoleId: null,
          guildMemberAvatar: null,
          guildMemberAvatarDecoration: null,
          primaryGuild,
          guildId: guild.id,
          authorId: user.id,
          displayNameStyles,
        };
        ({ colorString: obj2.colorString, colorStrings: obj2.colorStrings } = member);
        name = undefined;
        if (memberColorRole != null) {
          name = memberColorRole.name;
        }
        id2 = undefined;
        if (memberColorRole != null) {
          id2 = memberColorRole.id;
        }
        ({
          iconRoleId: obj2.iconRoleId,
          avatar: obj2.guildMemberAvatar,
          avatarDecoration: obj2.guildMemberAvatarDecoration,
        } = member);
        primaryGuild = user.primaryGuild;
      }
    }
    return obj7;
  }
  obj7 = { nick: str, colorString: null, colorStrings: null, displayNameStyles };
}
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message, arg1) => {
      let tmp = arg1;
      const tmp2 = useNullableMessageAuthor(message);
      _modDef38(null != tmp2, "Result cannot be null because the message is not null");
      if (arg1 == null) {
        tmp = tmp2;
      }
      return tmp;
    }
  : (message, arg1) => {
      let tmp = arg1;
      const tmp2 = useNullableMessageAuthor(message);
      _modDef38(null != tmp2, "Result cannot be null because the message is not null");
      if (arg1 == null) {
        tmp = tmp2;
      }
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const tmp = closure_11(arg0, arg1);
      _modDef38(null != tmp, "Result cannot be null because user and channel are not null");
      return tmp;
    }
  : (arg0, arg1) => {
      const tmp = closure_11(arg0, arg1);
      _modDef38(null != tmp, "Result cannot be null because user and channel are not null");
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, guild_id) => {
      let first;
      _require = guild_id;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(29);
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
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guild_id) {
        let tmp8;
        let tmp10;
        let tmp13;
        let tmp12;
        let tmp16;
        if (cResult[2] === id) {
          tmp8 = cResult[3];
        }
        const tmpResult = tmp(guild_id[9]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [GuildStore];
          cResult[4] = items1;
          tmp10 = items1;
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
          tmp13 = items2;
          tmp12 = fn;
        } else {
          tmp12 = cResult[6];
          tmp13 = cResult[7];
        }
        const tmpResult4 = tmp(guild_id[9]);
        const stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp12, tmp13);
        let colorRoleId;
        if (stateFromStores != null) {
          colorRoleId = stateFromStores.colorRoleId;
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items3 = [GuildRoleStore];
          cResult[8] = items3;
          tmp16 = items3;
        } else {
          tmp16 = cResult[8];
        }
        if (cResult[9] === guild_id) {
          let tmp18;
          let tmp19;
          let tmp21;
          if (cResult[10] === colorRoleId) {
            tmp18 = cResult[11];
            tmp19 = cResult[12];
          }
          const tmpResult5 = tmp(guild_id[9]);
          const stateFromStores2 = tmpResult5.useStateFromStores(tmp16, tmp18, tmp19);
          const _Symbol3 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const items4 = [RelationshipStore];
            cResult[13] = items4;
            tmp21 = items4;
          } else {
            tmp21 = cResult[13];
          }
          if (cResult[14] === guild_id) {
            let tmp23;
            if (cResult[15] === id) {
              tmp23 = cResult[16];
            }
            const tmpResult6 = tmp(guild_id[9]);
            const stateFromStores3 = tmpResult6.useStateFromStores(tmp21, tmp23);
            const obj6 = id(guild_id[10]);
            const name = obj6.useName(id);
            const tmp25 = id;
            if (cResult[17] === guild_id) {
              let tmp27;
              if (cResult[18] === id) {
                tmp27 = cResult[19];
              }
              const tmp28 = tmp25(guild_id[11])(tmp27);
              if (cResult[20] === guild_id) {
                if (cResult[21] === tmp28) {
                  if (cResult[22] === stateFromStores3) {
                    if (cResult[23] === stateFromStores1) {
                      if (cResult[24] === stateFromStores) {
                        if (cResult[25] === stateFromStores2) {
                          if (cResult[26] === id) {
                            let tmp29;
                            if (cResult[27] === name) {
                              tmp29 = cResult[28];
                            }
                            return tmp29;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj2 = {
                user: id,
                channel: guild_id,
                guild: stateFromStores1,
                memberColorRole: stateFromStores2,
                member: stateFromStores,
                userName: name,
                friendNickname: stateFromStores3,
                displayNameStyles: tmp28,
              };
              const tmp31 = computeMessageAuthor(obj2);
              cResult[20] = guild_id;
              cResult[21] = tmp28;
              cResult[22] = stateFromStores3;
              class S {
                constructor() {
                  let member = null;
                  if (null != guild_id) {
                    member = null;
                    if (null != id) {
                      member = GuildMemberStore.getMember(tmp, tmp3);
                    }
                  }
                  return member;
                }
              }
              cResult[24] = stateFromStores;
              cResult[25] = stateFromStores2;
              cResult[26] = id;
              cResult[27] = name;
              cResult[28] = tmp31;
              tmp29 = tmp31;
            }
            const obj3 = { userId: id, guildId: guild_id };
            cResult[17] = guild_id;
            cResult[18] = id;
            cResult[19] = obj3;
            tmp27 = obj3;
          }
          const fn3 = function k() {
            let nickname = null;
            if (null != id) {
              let isPrivateResult;
              if (guild_id != null) {
                isPrivateResult = guild_id.isPrivate();
              }
              nickname = null;
              if (isPrivateResult) {
                nickname = RelationshipStore.getNickname(tmp);
              }
            }
            return nickname;
          };
          cResult[14] = guild_id;
          cResult[15] = id;
          cResult[16] = fn3;
          tmp23 = fn3;
        }
        const fn2 = function p() {
          let role;
          if (null != guild_id) {
            if (null != colorRoleId) {
              role = GuildRoleStore.getRole(tmp, tmp3);
            }
          }
          return role;
        };
        const items5 = [guild_id, colorRoleId];
        cResult[9] = guild_id;
        class S {
          constructor() {
            let member = null;
            if (null != guild_id) {
              member = null;
              if (null != id) {
                member = GuildMemberStore.getMember(tmp, tmp3);
              }
            }
            return member;
          }
        }
        cResult[10] = colorRoleId;
        cResult[11] = fn2;
        cResult[12] = items5;
        tmp19 = items5;
        tmp18 = fn2;
      }
      class S {
        constructor() {
          let member = null;
          if (null != guild_id) {
            member = null;
            if (null != id) {
              member = GuildMemberStore.getMember(tmp, tmp3);
            }
          }
          return member;
        }
      }
      cResult[1] = guild_id;
      cResult[2] = id;
      cResult[3] = S;
      tmp8 = S;
    }
  : (id, channel) => {
      _require = channel;
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const tmp3 = _require;
      const items = [GuildMemberStore];
      const obj = require("get initialized");
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
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildStore.getGuild(guild_id), items2);
      if (stateFromStores != null) {
        colorRoleId = stateFromStores.colorRoleId;
      }
      const items3 = [GuildRoleStore];
      const items4 = [guild_id, colorRoleId];
      const tmp3Result = tmp3(guild_id[9]);
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
      const items5 = [RelationshipStore];
      const tmp3Result2 = tmp3(guild_id[9]);
      const stateFromStores3 = tmp3Result2.useStateFromStores(items5, () => {
        let nickname = null;
        if (null != id) {
          let isPrivateResult;
          if (channel != null) {
            isPrivateResult = channel.isPrivate();
          }
          nickname = null;
          if (isPrivateResult) {
            nickname = RelationshipStore.getNickname(tmp);
          }
        }
        return nickname;
      });
      const obj5 = id(guild_id[10]);
      const name = obj5.useName(id);
      const obj3 = {
        user: id,
        channel,
        guild: stateFromStores1,
        memberColorRole: stateFromStores2,
        member: stateFromStores,
        userName: name,
        friendNickname: stateFromStores3,
        displayNameStyles: id(guild_id[11])({ userId: id, guildId: guild_id }),
      };
      return computeMessageAuthor(obj3);
    };
let closure_11 = tmp4;
const result = size.fileFinishedImporting("modules/messages/useMessageAuthor.tsx");

export default tmp2;
export { useNullableMessageAuthor };
export const getMessageAuthor = function getMessageAuthor(message) {
  return getUserAuthor(message.author, ChannelStore.getChannel(message.channel_id));
};
export const useUserNickAndColor = tmp3;
export const useNullableUserAuthor = tmp4;
export { getUserAuthor };
