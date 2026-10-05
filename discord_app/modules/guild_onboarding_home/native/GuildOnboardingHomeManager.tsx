// discord_app/modules/guild_onboarding_home/native/GuildOnboardingHomeManager.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import GuildMemberConstants from "../../guild_member/GuildMemberConstants.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildOnboardingHomeTypes from "../GuildOnboardingHomeTypes.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ImpersonateStore from "../../impersonate/ImpersonateStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import GuildOnboardingHomeSettingsStore from "../GuildOnboardingHomeSettingsStore.tsx";
import GuildOnboardingMemberActionStore from "../GuildOnboardingMemberActionStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2, c5, state;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
class GuildOnboardingHomeManager extends AutomaticLifecycleManager {
  constructor() {
    let applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.onboardingCompleteGuilds = new Set();
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handlePostConnectionOpen();
      },
      GUILD_MEMBER_UPDATE(arg0) {
        return require.handleGuildMemberUpdate(arg0);
      },
      GUILD_DELETE(arg0) {
        return require.handleGuildDelete(arg0);
      },
      CHANNEL_SELECT(arg0) {
        return require.handleChannelSelect(arg0);
      },
      MESSAGE_CREATE(message) {
        return require.handleMessageSend(message);
      },
      THREAD_CREATE(arg0) {
        return require.handleThreadCreate(arg0);
      },
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      const guilds = GuildStore.getGuilds();
      for (const key10007 in guilds) {
        let selfMember = GuildMemberStore.getSelfMember(key10007);
        let tmp13 = FlagUtils;
        let num;
        let hasFlag = tmp13.hasFlag;
        if (selfMember != null) {
          num = selfMember.flags;
        }
        if (num == null) {
          num = 0;
        }
        if (!hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
          continue;
        } else {
          let onboardingCompleteGuilds = require.onboardingCompleteGuilds;
          let addResult = onboardingCompleteGuilds.add(key10007);
          continue;
        }
        continue;
      }
      const guildId = SelectedGuildStore.getGuildId();
      if (null != guildId) {
        const result = require._getOrLoadOnboardingMemberActions(guildId);
      }
    };
    applyArgumentsResult.handleGuildMemberUpdate = function handleGuildMemberUpdate(user) {
      let flags;
      let guildId;
      ({ flags, guildId } = user);
      if (user.user.id === AuthenticationStore.getId()) {
        const onboardingCompleteGuilds2 = require.onboardingCompleteGuilds;
        if (!onboardingCompleteGuilds2.has(guildId)) {
          const hasFlag = FlagUtils.hasFlag;
          FlagUtils;
          if (flags == null) {
            flags = 0;
          }
          if (hasFlag(flags, GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
            const onboardingCompleteGuilds = require.onboardingCompleteGuilds;
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
              const pushLazy = ModalActionCreatorsDefault.pushLazy;
              const obj = { initialPercent: (num - 1) / num, numActions: num };
              const tmp11 = asyncRequire(17502, dependencyMap.paths);
              const obj2 = { animation: ConstantsIOS.ModalAnimation.FADE };
              const NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY =
                GuildOnboardingHomeTypes.NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY;
              pushLazy(tmp11, obj, NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY, obj2);
            }
          }
        }
      }
    };
    applyArgumentsResult.handleGuildDelete = function handleGuildDelete(guild) {
      const onboardingCompleteGuilds = require.onboardingCompleteGuilds;
      onboardingCompleteGuilds.delete(guild.guild.id);
    };
    new Set();
    _asyncToGenerator(async (arg0) => {
      let c0;
      let c1;
      let closure_1;
      closure_0 = arg0;
      if (1 === c3) {
        if (arg0 === 1) {
          let c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null != c0) {
          if (null != c1) {
            c3 = 2;
            c4 = 1;
            const obj5 = { value: closure_130_1._getOrLoadOnboardingMemberActions(c0), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        let closure_2 = value;
        const memberActions = closure_2.memberActions;
        const completedActions = closure_2.completedActions;
        let found;
        const arr = memberActions;
        if (memberActions != null) {
          found = arr.find((channelId) => channelId.channelId === closure_1_1);
        }
        let tmp9;
        if (completedActions != null) {
          tmp9 = tmp8[c1];
        }
        const tmp12 =
          true !== tmp9 && null != found && found.actionType === closure_0(closure_2[16]).NewMemberActionTypes.VIEW;
        if (tmp12) {
          const obj = closure_0(closure_2[18]);
          const result = obj.completeNewMemberAction(c0, c1);
        }
      }
      await "IconComponent";
      closure_2 = tmp4;
      ({ guildId: c0, channelId: c1 } = closure_0);
      return "Set";
    });
    applyArgumentsResult.handleChannelSelect = function () {
      return closure_0(...arguments);
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
              require._completeChatAction(guildId, channel.parent_id);
            }
            require._completeChatAction(guildId, channelId);
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
        const channel1 = ChannelStore.getChannel(channel.parent_id);
        let isForumLikeChannelResult;
        if (channel1 != null) {
          isForumLikeChannelResult = channel1.isForumLikeChannel();
        }
        isNewlyCreated = isForumLikeChannelResult;
      }
      if (isNewlyCreated) {
        isNewlyCreated = channel.ownerId === AuthenticationStore.getId();
      }
      if (isNewlyCreated) {
        require._completeChatAction(channel.guild_id, channel.parent_id);
      }
    };
    _asyncToGenerator(async (arg0, arg1) => {
      let closure_2;
      closure_0 = arg0;
      let closure_1 = arg1;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let memberActions;
          let completedActions;
          let found;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp4;
              tmp = undefined;
              memberActions = undefined;
              completedActions = undefined;
              found = undefined;
              c4 = 1;
              c5 = 1;
              const obj4 = { value: applyArgumentsResult._getOrLoadOnboardingMemberActions(closure_0), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp = value;
            memberActions = tmp.memberActions;
            completedActions = tmp.completedActions;
            found = undefined;
            const arr = memberActions;
            if (memberActions != null) {
              found = arr.find((channelId) => channelId.channelId === closure_1_1);
            }
            let tmp9;
            if (completedActions != null) {
              tmp9 = tmp8[closure_1];
            }
            const tmp12 =
              true !== tmp9 && null != found && found.actionType === closure_0(tmp[16]).NewMemberActionTypes.CHAT;
            if (tmp12) {
              const obj = closure_0(tmp[18]);
              const result = obj.completeNewMemberAction(closure_0, closure_1);
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp30) {
          c5 = 3;
          throw tmp30;
        }
      }
    });
    applyArgumentsResult._completeChatAction = function () {
      return closure_0(...arguments);
    };
    _asyncToGenerator(async (arg0) => {
      let closure_1;
      let selfMember;
      let v1;
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp4;
              closure_0 = undefined;
              applyArgumentsResult = undefined;
              const obj10 = closure_0(closure_2[19]);
              const canSeeOnboardingHomeResult = obj10.canSeeOnboardingHome(closure_0);
              const tmp21 = closure_0;
              const tmp22 = closure_2;
              if (!canSeeOnboardingHomeResult) {
                if (!fullServerPreview.isFullServerPreview(closure_0)) {
                  c4 = 3;
                  const obj4 = { value: {}, done: true };
                  return obj4;
                }
              }
              selfMember = selfMember.getSelfMember(tmp20);
              if (null != selfMember) {
                const tmp21Result = tmp21(tmp22[20]);
                if (tmp21Result.getIsNewMember(closure_0)) {
                  const items = [
                    applyArgumentsResult._getOrLoadOnboardingHomeSettings(closure_0),
                    applyArgumentsResult._getOrLoadMemberActions(closure_0, selfMember),
                  ];
                  v1 = 1;
                  c4 = 1;
                  const obj5 = { value: all(items), done: false };
                  return obj5;
                }
              }
              c4 = 3;
              const obj6 = { value: {}, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            applyArgumentsResult = v1(closure_0, 2);
            const obj = { memberActions: applyArgumentsResult[0], completedActions: applyArgumentsResult[1] };
            c4 = 3;
            const obj8 = { value: obj, done: true };
            return obj8;
          }
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    });
    applyArgumentsResult._getOrLoadOnboardingMemberActions = function () {
      return closure_0(...arguments);
    };
    _asyncToGenerator(async (arg0) => {
      let tmp7Result;
      closure_0 = arg0;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_1 = tmp3;
              closure_0 = undefined;
              const newMemberActions = closure_1_11.getNewMemberActions(closure_0);
              if (null == newMemberActions) {
                if (!closure_1_11.getIsLoading(closure_0)) {
                  const obj3 = closure_0(c2[20]);
                  const tmp7 = closure_0;
                  const tmp8 = c2;
                  if (obj3.getIsNewMember(closure_0)) {
                    c2 = 1;
                    c3 = 1;
                    const obj5 = { value: tmp7Result.fetchGuildHomeSettings(closure_0), done: false };
                    tmp7Result = tmp7(tmp8[18]);
                    return obj5;
                  }
                }
              }
              c3 = 3;
              const obj6 = { value: newMemberActions, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            let newMemberActions1;
            if (closure_0 != null) {
              newMemberActions1 = closure_0.newMemberActions;
            }
            c3 = 3;
            const obj = { value: newMemberActions1, done: true };
            return obj;
          }
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
        }
      }
    });
    applyArgumentsResult._getOrLoadOnboardingHomeSettings = function () {
      return closure_0(...arguments);
    };
    let closure_0 = _asyncToGenerator(async (arg0, arg1) => {
      closure_0 = arg0;
      let flags = arg1;
      let c4 = 0;
      let c3 = 0;
      return (async (arg0, value) => {
        let tmp5Result;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let tmp4;
            c3 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                return { value, done: true };
              } else {
                state = state.getState(closure_0);
                const completedActions = state.completedActions;
                tmp4 = completedActions;
                if (null == completedActions) {
                  tmp4 = completedActions;
                  if (!tmp18) {
                    flags = flags.flags;
                    const tmp6 = c2;
                    const tmp7 = closure_0(c2[12]);
                    c2 = flags;
                    const hasFlag = tmp7.hasFlag;
                    if (flags == null) {
                      c2 = 0;
                    }
                    tmp4 = completedActions;
                    if (hasFlag(c2, constants.STARTED_HOME_ACTIONS)) {
                      c4 = 1;
                      c3 = 1;
                      const obj4 = { value: tmp5Result.fetchNewMemberActions(closure_0), done: false };
                      tmp5Result = closure_0(tmp6[18]);
                      return obj4;
                    }
                  }
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else {
              tmp4 = value;
              if (arg0 === 2) {
                c3 = 3;
                return { value, done: true };
              }
            }
            c3 = 3;
            return { value: tmp4, done: true };
          } catch (tmp10) {
            c3 = 3;
            throw tmp10;
          }
        }
      })();
    });
    applyArgumentsResult._getOrLoadMemberActions = function () {
      return closure_0(...arguments);
    };
    return applyArgumentsResult;
  }
}
const guildOnboardingHomeManager = new GuildOnboardingHomeManager();
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomeManager.tsx");

export default guildOnboardingHomeManager;
