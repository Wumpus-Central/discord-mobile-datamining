// === Module 17370: GuildOnboardingHomeManager ===

// Module 17370 (GuildOnboardingHomeManager)
import FlagUtils from "FlagUtils" /* 1384 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ImpersonateStore from "ImpersonateStore" /* 2014 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4747 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 4748 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
let prototype = function GuildOnboardingHomeManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.onboardingCompleteGuilds = new Set();
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handlePostConnectionOpen();
    },
    GUILD_MEMBER_UPDATE(arg0) {
      return applyArgumentsResult.handleGuildMemberUpdate(arg0);
    },
    GUILD_DELETE(arg0) {
      return applyArgumentsResult.handleGuildDelete(arg0);
    },
    CHANNEL_SELECT(arg0) {
      return applyArgumentsResult.handleChannelSelect(arg0);
    },
    MESSAGE_CREATE(message) {
      return applyArgumentsResult.handleMessageSend(message);
    },
    THREAD_CREATE(arg0) {
      return applyArgumentsResult.handleThreadCreate(arg0);
    }
  };
  applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
    const guilds = GuildStore.getGuilds();
    for (const key10007 in guilds) {
      let selfMember = GuildMemberStore.getSelfMember(key10007);
      let obj = FlagUtils;
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      if (!obj.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
        continue;
      } else {
        let onboardingCompleteGuilds = applyArgumentsResult.onboardingCompleteGuilds;
        let addResult = onboardingCompleteGuilds.add(key10007);
        continue;
      }
      continue;
    }
    const guildId = SelectedGuildStore.getGuildId();
    if (null != guildId) {
      const result = applyArgumentsResult._getOrLoadOnboardingMemberActions(guildId);
    }
  };
  applyArgumentsResult.handleGuildMemberUpdate = function handleGuildMemberUpdate(user) {
    ({ flags, guildId } = user);
    if (user.user.id === AuthenticationStore.getId()) {
      const onboardingCompleteGuilds2 = applyArgumentsResult.onboardingCompleteGuilds;
      if (!onboardingCompleteGuilds2.has(guildId)) {
        let obj = FlagUtils;
        if (flags == null) {
          flags = 0;
        }
        if (obj.hasFlag(flags, GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
          const onboardingCompleteGuilds = tmp7.onboardingCompleteGuilds;
          onboardingCompleteGuilds.add(guildId);
          const newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId);
          let num;
          if (newMemberActions != null) {
            num = newMemberActions.length;
          }
          if (num == null) {
            num = 0;
          }
          if (0 !== num) {
            const obj2 = ModalActionCreatorsDefault;
            const tmp9 = tmp(1896)(17371, tmp2.paths);
            obj = { initialPercent: (num - 1) / num, numActions: num };
            obj = { animation: tmp(1093).ModalAnimation.FADE };
            obj2.pushLazy(tmp9, obj, tmp(12285).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY, obj);
          }
        }
        tmp2 = dependencyMap;
      }
      tmp7 = applyArgumentsResult;
    }
  };
  applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
    const onboardingCompleteGuilds = applyArgumentsResult.onboardingCompleteGuilds;
    onboardingCompleteGuilds.delete(guild.guild.id);
  };
  closure_129_1 = applyArgumentsResult;
  closure_129_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            dependencyMap = tmp5;
            closure_1 = tmp2;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            ({ guildId: closure_129_0, channelId: closure_129_1 } = applyArgumentsResult);
            closure_129_2 = undefined;
            let memberActions;
            let completedActions;
            closure_129_5 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "PX_16", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value, done: true };
              return obj1;
            } else {
              if (null != closure_129_0) {
                if (null != closure_129_1) {
                  c3 = 2;
                  c4 = 1;
                  const obj2 = { value: closure_130_1._getOrLoadOnboardingMemberActions(closure_129_0), done: false };
                  return obj2;
                }
              }
              c4 = 3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_2 = value;
            memberActions = closure_129_2.memberActions;
            completedActions = closure_129_2.completedActions;
            let found;
            if (memberActions != null) {
              found = arr.find((channelId) => channelId.channelId === closure_1_1);
            }
            closure_129_5 = found;
            let tmp10;
            if (completedActions != null) {
              tmp10 = tmp9[closure_129_1];
            }
            let tmp13 = true !== tmp10;
            if (tmp13) {
              tmp13 = null != closure_129_5;
            }
            if (tmp13) {
              tmp13 = closure_129_5.actionType === applyArgumentsResult(12285).NewMemberActionTypes.VIEW;
            }
            if (tmp13) {
              obj = applyArgumentsResult(12284);
              const result = obj.completeNewMemberAction(closure_129_0, closure_129_1);
            }
            arr = memberActions;
          }
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        }
      } catch (tmp38) {
        c4 = tmp;
        throw tmp38;
      }
    }
  });
  applyArgumentsResult.handleChannelSelect = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  applyArgumentsResult.handleMessageSend = function handleMessageSend(message) {
    ({ guildId, channelId } = message);
    if (null != guildId) {
      if (null != channelId) {
        const author = message.message.author;
        let id;
        if (author != null) {
          id = author.id;
        }
        if (id === AuthenticationStore.getId()) {
          const channel = ChannelStore.getChannel(channelId);
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
            applyArgumentsResult._completeChatAction(guildId, channel.parent_id);
          }
          applyArgumentsResult._completeChatAction(guildId, channelId);
        }
      }
    }
  };
  applyArgumentsResult.handleThreadCreate = function handleThreadCreate(arg0) {
    ({ channel, isNewlyCreated } = arg0);
    if (isNewlyCreated) {
      isNewlyCreated = null != channel.parent_id;
    }
    if (isNewlyCreated) {
      channel = ChannelStore.getChannel(channel.parent_id);
      let isForumLikeChannelResult;
      if (channel != null) {
        isForumLikeChannelResult = channel.isForumLikeChannel();
      }
      isNewlyCreated = isForumLikeChannelResult;
    }
    if (isNewlyCreated) {
      isNewlyCreated = channel.ownerId === AuthenticationStore.getId();
    }
    if (isNewlyCreated) {
      applyArgumentsResult._completeChatAction(channel.guild_id, channel.parent_id);
    }
  };
  closure_130_1 = applyArgumentsResult;
  closure_130_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp5;
            closure_130_0 = applyArgumentsResult;
            closure_130_1 = closure_1;
            closure_130_2 = undefined;
            let memberActions;
            let completedActions;
            closure_130_5 = undefined;
            c4 = 1;
            c5 = 1;
            const obj1 = { value: importDefault._getOrLoadOnboardingMemberActions(applyArgumentsResult), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_130_2 = value;
          memberActions = closure_130_2.memberActions;
          completedActions = closure_130_2.completedActions;
          let found;
          if (memberActions != null) {
            found = memberActions.find((channelId) => channelId.channelId === closure_1_1);
          }
          closure_130_5 = found;
          let tmp10;
          if (completedActions != null) {
            tmp10 = tmp9[closure_130_1];
          }
          let tmp13 = true !== tmp10;
          if (tmp13) {
            tmp13 = null != closure_130_5;
          }
          if (tmp13) {
            tmp13 = closure_130_5.actionType === applyArgumentsResult(tmp2[16]).NewMemberActionTypes.CHAT;
          }
          if (tmp13) {
            obj = applyArgumentsResult(tmp2[18]);
            const result = obj.completeNewMemberAction(closure_130_0, closure_130_1);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp31) {
        c5 = tmp;
        throw tmp31;
      }
    }
  });
  applyArgumentsResult._completeChatAction = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_131_1 = applyArgumentsResult;
  closure_131_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            const obj10 = applyArgumentsResult(tmp5[19]);
            const tmp23 = applyArgumentsResult;
            const tmp24 = tmp5;
            if (!canSeeOnboardingHomeResult) {
              if (!fullServerPreview.isFullServerPreview(applyArgumentsResult)) {
                c4 = 3;
                const obj1 = { value: {}, done: true };
                return obj1;
              }
            }
            selfMember = selfMember.getSelfMember(tmp22);
            if (null != selfMember) {
              if (tmp23Result.getIsNewMember(tmp22)) {
                const items = [importDefault._getOrLoadOnboardingHomeSettings(tmp22), importDefault._getOrLoadMemberActions(tmp22, selfMember)];
                v1 = 1;
                c4 = 1;
                const obj2 = { value: Promise.all(items), done: false };
                return obj2;
              }
              tmp23Result = tmp23(tmp24[20]);
            }
            c4 = 3;
            const obj3 = { value: {}, done: true };
            return obj3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_0 = value;
          closure_129_1 = v1(closure_129_0, 2);
          obj = { memberActions: closure_129_1[0], completedActions: closure_129_1[1] };
          c4 = 3;
          const obj5 = { value: obj, done: true };
          return obj5;
        }
      } catch (tmp17) {
        c4 = tmp;
        throw tmp17;
      }
    }
  });
  applyArgumentsResult._getOrLoadOnboardingMemberActions = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_132_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp4;
            closure_129_0 = undefined;
            const newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(applyArgumentsResult);
            if (null == newMemberActions) {
              if (!GuildOnboardingHomeSettingsStore.getIsLoading(applyArgumentsResult)) {
                let obj2 = applyArgumentsResult(dependencyMap[20]);
                if (obj2.getIsNewMember(tmp15)) {
                  dependencyMap = 1;
                  c3 = 1;
                  const obj1 = { value: tmp8(tmp9[18]).fetchGuildHomeSettings(tmp15), done: false };
                  return obj1;
                }
                tmp8 = applyArgumentsResult;
                tmp9 = dependencyMap;
              }
            }
            c3 = 3;
            obj2 = { value: newMemberActions, done: true };
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_129_0 = value;
          let newMemberActions1;
          if (closure_129_0 != null) {
            newMemberActions1 = closure_129_0.newMemberActions;
          }
          c3 = 3;
          obj = { value: newMemberActions1, done: true };
          return obj;
        }
      } catch (tmp10) {
        c3 = tmp;
        throw tmp10;
      }
    }
  });
  applyArgumentsResult._getOrLoadOnboardingHomeSettings = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_133_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            state = state.getState(applyArgumentsResult);
            const completedActions = state.completedActions;
            let tmp5 = completedActions;
            if (null == completedActions) {
              tmp5 = completedActions;
              if (!tmp19) {
                let obj1 = applyArgumentsResult(dependencyMap[12]);
                const flags = tmp16.flags;
                dependencyMap = flags;
                if (flags == null) {
                  dependencyMap = 0;
                }
                tmp5 = completedActions;
                if (obj1.hasFlag(dependencyMap, constants.STARTED_HOME_ACTIONS)) {
                  c4 = 1;
                  c3 = 1;
                  obj1 = { value: tmp6(tmp7[18]).fetchNewMemberActions(tmp15), done: false };
                  return obj1;
                }
                tmp6 = applyArgumentsResult;
                tmp7 = dependencyMap;
              }
            }
            tmp15 = applyArgumentsResult;
            tmp16 = closure_1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else {
          tmp5 = value;
          if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        c3 = 3;
        const obj2 = { value: tmp5, done: true };
        return obj2;
      } catch (tmp10) {
        c3 = tmp;
        throw tmp10;
      }
    }
  });
  applyArgumentsResult._getOrLoadMemberActions = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomeManager.tsx");

export default prototype;