// discord_app/modules/guild_onboarding_home/native/GuildOnboardingHomeManager.tsx
import _slicedToArray from "_slicedToArray";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import initialize from "initialize";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_8 from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import set from "set";
import { GuildMemberFlags } from "GuildMemberFlags";
import "initialize";

const require = arg1;
let prototype = function GuildOnboardingHomeManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let closure_0 = applyArgumentsResult;
  applyArgumentsResult.onboardingCompleteGuilds = new Set();
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return lib.handlePostConnectionOpen();
    },
    GUILD_MEMBER_UPDATE(arg0) {
      return lib.handleGuildMemberUpdate(arg0);
    },
    GUILD_DELETE(arg0) {
      return lib.handleGuildDelete(arg0);
    },
    CHANNEL_SELECT(arg0) {
      return lib.handleChannelSelect(arg0);
    },
    MESSAGE_CREATE(message) {
      return lib.handleMessageSend(message);
    },
    THREAD_CREATE(arg0) {
      return lib.handleThreadCreate(arg0);
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    const guilds = outer1_9.getGuilds();
    for (const key10007 in guilds) {
      let tmp8 = key10007;
      let tmp9 = outer1_8;
      let selfMember = outer1_8.getSelfMember(key10007);
      let tmp11 = lib;
      let tmp12 = outer1_2;
      let obj = lib(outer1_2[12]);
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      let tmp2 = outer1_13;
      if (!obj.hasFlag(num, outer1_13.COMPLETED_HOME_ACTIONS)) {
        continue;
      } else {
        let tmp3 = lib;
        let onboardingCompleteGuilds = lib.onboardingCompleteGuilds;
        let addResult = onboardingCompleteGuilds.add(key10007);
        continue;
      }
      continue;
    }
    const guildId = outer1_10.getGuildId();
    if (null != guildId) {
      const result = lib._getOrLoadOnboardingMemberActions(guildId);
    }
  };
  applyArgumentsResult.handleGuildMemberUpdate = function handleGuildMemberUpdate(user) {
    let flags;
    let guildId;
    ({ flags, guildId } = user);
    if (user.user.id === outer1_6.getId()) {
      const onboardingCompleteGuilds2 = lib.onboardingCompleteGuilds;
      if (!onboardingCompleteGuilds2.has(guildId)) {
        let obj = lib(outer1_2[12]);
        if (flags == null) {
          flags = 0;
        }
        if (obj.hasFlag(flags, outer1_13.COMPLETED_HOME_ACTIONS)) {
          const onboardingCompleteGuilds = tmp7.onboardingCompleteGuilds;
          onboardingCompleteGuilds.add(guildId);
          const newMemberActions = outer1_11.getNewMemberActions(guildId);
          let num;
          if (newMemberActions != null) {
            num = newMemberActions.length;
          }
          if (num == null) {
            num = 0;
          }
          if (0 !== num) {
            const obj2 = applyArgumentsResult(tmp2[13]);
            const tmp9 = tmp(tmp2[15])(tmp2[14], tmp2.paths);
            obj = { initialPercent: null, numActions: null };
            obj[0] = (num - 1) / num;
            obj[1] = num;
            obj = { animation: null };
            obj[0] = tmp(tmp2[17]).ModalAnimation.FADE;
            obj2.pushLazy(tmp9, obj, tmp(tmp2[16]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY, obj);
          }
        }
      }
      tmp7 = lib;
    }
  };
  applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
    const onboardingCompleteGuilds = lib.onboardingCompleteGuilds;
    onboardingCompleteGuilds.delete(guild.guild.id);
  };
  closure_0 = undefined;
  let importDefault = applyArgumentsResult;
  closure_0 = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      c1 = tmp2;
      ({ guildId: c0, channelId: c1 } = c0);
      yield "ct";
      if (1 === tmp5) {
        if (arg0 === 1) {
          let completedActions = 3;
          throw arg1;
        } else if (arg0 === 2) {
          completedActions = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          if (null != c0) {
            if (null != c1) {
              let memberActions = 2;
              completedActions = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_1._getOrLoadOnboardingMemberActions(c0);
              return obj2;
            }
          }
          completedActions = 3;
        }
      } else if (arg0 === 1) {
        completedActions = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        let closure_2 = arg1;
        memberActions = closure_2.memberActions;
        completedActions = closure_2.completedActions;
        let found;
        if (memberActions != null) {
          found = arr.find((channelId) => channelId.channelId === c1);
        }
        let tmp10;
        if (completedActions != null) {
          tmp10 = tmp9[c1];
        }
        let tmp13 = true !== tmp10;
        if (tmp13) {
          tmp13 = null != found;
        }
        if (tmp13) {
          tmp13 = found.actionType === callback(outer1_2[16]).NewMemberActionTypes.VIEW;
        }
        if (tmp13) {
          const obj = callback(outer1_2[18]);
          const result = obj.completeNewMemberAction(c0, c1);
        }
        arr = memberActions;
      }
      return arg1;
    })();
    iter.next();
    return iter;
  });
  applyArgumentsResult.handleChannelSelect = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  applyArgumentsResult.handleMessageSend = function handleMessageSend(message) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = message);
    if (null != guildId) {
      if (null != channelId) {
        const author = message.message.author;
        let id;
        if (author != null) {
          id = author.id;
        }
        if (id === outer1_6.getId()) {
          const channel = outer1_7.getChannel(channelId);
          let isForumPostResult;
          if (channel != null) {
            isForumPostResult = channel.isForumPost();
          }
          if (isForumPostResult) {
            let parent_id;
            if (channel != null) {
              parent_id = channel.parent_id;
            }
            isForumPostResult = null != parent_id;
          }
          if (isForumPostResult) {
            lib._completeChatAction(guildId, channel.parent_id);
          }
          lib._completeChatAction(guildId, channelId);
        }
      }
    }
  };
  applyArgumentsResult.handleThreadCreate = function handleThreadCreate(arg0) {
    let channel;
    let isNewlyCreated;
    ({ channel, isNewlyCreated } = arg0);
    if (isNewlyCreated) {
      isNewlyCreated = null != channel.parent_id;
    }
    if (isNewlyCreated) {
      channel = outer1_7.getChannel(channel.parent_id);
      let isForumLikeChannelResult;
      if (channel != null) {
        isForumLikeChannelResult = channel.isForumLikeChannel();
      }
      isNewlyCreated = isForumLikeChannelResult;
    }
    if (isNewlyCreated) {
      isNewlyCreated = channel.ownerId === outer1_6.getId();
    }
    if (isNewlyCreated) {
      lib._completeChatAction(channel.guild_id, channel.parent_id);
    }
  };
  closure_0 = undefined;
  importDefault = applyArgumentsResult;
  closure_0 = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (actionType === 2) {
        actionType = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          actionType = 2;
          if (0 === completedActions) {
            if (arg0 === 1) {
              actionType = 3;
              throw arg1;
            } else if (arg0 === 2) {
              actionType = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let memberActions = tmp5;
              let closure_2 = tmp2;
              closure_2 = undefined;
              memberActions = undefined;
              completedActions = undefined;
              actionType = undefined;
              completedActions = 1;
              actionType = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = closure_1._getOrLoadOnboardingMemberActions(callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            actionType = 3;
            throw arg1;
          } else if (arg0 === 2) {
            actionType = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_2 = arg1;
            memberActions = closure_2.memberActions;
            completedActions = closure_2.completedActions;
            let found;
            if (memberActions != null) {
              found = memberActions.find((channelId) => channelId.channelId === closure_1);
            }
            actionType = found;
            let tmp10;
            if (completedActions != null) {
              tmp10 = tmp9[closure_1];
            }
            let tmp13 = true !== tmp10;
            if (tmp13) {
              tmp13 = null != actionType;
            }
            if (tmp13) {
              tmp13 = actionType.actionType === callback(outer1_2[16]).NewMemberActionTypes.CHAT;
            }
            if (tmp13) {
              obj = callback(outer1_2[18]);
              const result = obj.completeNewMemberAction(callback, closure_1);
            }
            actionType = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp31) {
          actionType = tmp;
          throw tmp31;
        }
      }
    })();
  });
  applyArgumentsResult._completeChatAction = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_0 = undefined;
  importDefault = applyArgumentsResult;
  closure_0 = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp5;
              let dependencyMap = tmp2;
              let callback;
              dependencyMap = undefined;
              const obj10 = callback(outer1_2[19]);
              const tmp24 = callback;
              const tmp25 = outer1_2;
              if (!canSeeOnboardingHomeResult) {
                if (!outer1_5.isFullServerPreview(callback)) {
                  c4 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = {};
                  return obj1;
                }
              }
              const selfMember = outer1_8.getSelfMember(tmp23);
              if (null != selfMember) {
                if (tmp24Result.getIsNewMember(tmp23)) {
                  const items = [outer1_1._getOrLoadOnboardingHomeSettings(tmp23), outer1_1._getOrLoadMemberActions(tmp23, selfMember)];
                  v0 = 1;
                  c4 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = Promise.all(items);
                  return obj2;
                }
                tmp24Result = tmp24(tmp25[20]);
              }
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = {};
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            callback = arg1;
            dependencyMap = v0(callback, 2);
            obj = { memberActions: null, completedActions: null };
            obj[0] = 32;
            obj[1] = 5;
            c4 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = obj;
            return obj5;
          }
        } catch (tmp17) {
          c4 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  applyArgumentsResult._getOrLoadOnboardingMemberActions = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_0 = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp4;
              let lib;
              const newMemberActions = outer1_11.getNewMemberActions(lib);
              if (null == newMemberActions) {
                if (!outer1_11.getIsLoading(lib)) {
                  let obj2 = lib(table[20]);
                  if (obj2.getIsNewMember(tmp16)) {
                    table = 1;
                    c3 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = tmp8(tmp9[18]).fetchGuildHomeSettings(tmp16);
                    return obj1;
                  }
                  tmp8 = lib;
                  tmp9 = table;
                }
              }
              c3 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = newMemberActions;
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            let newMemberActions1;
            if (lib != null) {
              newMemberActions1 = lib.newMemberActions;
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = newMemberActions1;
            return obj;
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  applyArgumentsResult._getOrLoadOnboardingHomeSettings = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_0 = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, arg1) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const state = outer1_12.getState(callback);
              const completedActions = state.completedActions;
              let tmp5 = completedActions;
              if (null == completedActions) {
                tmp5 = completedActions;
                if (!tmp20) {
                  let obj1 = callback(outer1_2[12]);
                  const flags = tmp17.flags;
                  let c2 = flags;
                  if (flags == null) {
                    c2 = 0;
                  }
                  tmp5 = completedActions;
                  if (obj1.hasFlag(c2, outer1_13.STARTED_HOME_ACTIONS)) {
                    c4 = 1;
                    c3 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = tmp6(tmp7[18]).fetchNewMemberActions(tmp16);
                    return obj1;
                  }
                  tmp6 = callback;
                  tmp7 = outer1_2;
                }
              }
              tmp16 = callback;
              tmp17 = closure_1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else {
            tmp5 = arg1;
            if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = tmp5;
          return obj2;
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  applyArgumentsResult._getOrLoadMemberActions = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("initialize").fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomeManager.tsx");

export default prototype;