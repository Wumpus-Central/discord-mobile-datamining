// discord_app/modules/interaction_components/ComponentStateContext.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import Server from "../../flow/Server.tsx";
import InteractionTypes from "../interactions/InteractionTypes.tsx";
import InteractionComponentTypes from "InteractionComponentTypes.tsx";
import useMountEffectDefault from "../../hooks/useMountEffect.tsx";
import InteractionUtils from "../interactions/InteractionUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import InteractionStore_mod from "../interactions/InteractionStore.tsx";
import LurkingStore from "../lurker_mode/LurkingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildVerificationStore from "../../stores/GuildVerificationStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

function isInteractionComponent(type) {
  type = type.type;
  if (Server.ComponentType.BUTTON === type) {
    return type.style !== Server.ButtonStyle.LINK;
  } else {
    if (Server.ComponentType.STRING_SELECT !== type) {
      if (Server.ComponentType.USER_SELECT !== type) {
        if (Server.ComponentType.ROLE_SELECT !== type) {
          if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
            if (Server.ComponentType.CHANNEL_SELECT !== type) {
              if (Server.ComponentType.ACTION_ROW !== type) {
                const TEXT_INPUT = Server.ComponentType.TEXT_INPUT;
              }
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}
function getActionComponentState(interaction, id) {
  let flag = shouldDisableInteractiveComponents;
  if (shouldDisableInteractiveComponents === undefined) {
    flag = false;
  }
  let DISABLED = InteractionComponentTypes.ActionComponentState.NORMAL;
  let DISABLED2 = DISABLED;
  const tmp3 = null != interaction && interaction.state !== InteractionTypes.InteractionState.FAILED;
  if (tmp3) {
    if (interaction.data.interactionType === Server.InteractionTypes.MESSAGE_COMPONENT) {
      if (interaction.data.componentId === id.id) {
        DISABLED = InteractionComponentTypes.ActionComponentState.LOADING;
      }
      DISABLED2 = DISABLED;
    }
    if (isInteractionComponent(id)) {
      DISABLED = InteractionComponentTypes.ActionComponentState.DISABLED;
    }
  }
  if (flag) {
    flag = isInteractionComponent(id);
  }
  if (flag) {
    DISABLED2 = InteractionComponentTypes.ActionComponentState.DISABLED;
  }
  return DISABLED2;
}
let InteractionStore = InteractionStore_mod;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp17;
      let tmp20;
      let tmp4;
      let tmp7;
      const obj = require("react");
      const cResult = obj.c(13);
      if (cResult[0] !== arg0) {
        const channel = ChannelStore.getChannel(arg0);
        cResult[0] = arg0;
        cResult[1] = channel;
        tmp4 = channel;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildVerificationStore];
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
        const items1 = [tmp4];
        cResult[3] = tmp4;
        cResult[4] = I;
        cResult[5] = items1;
        tmp10 = items1;
      } else {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
        tmp10 = cResult[5];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp7, I, tmp10);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
        const items2 = [LurkingStore];
        cResult[6] = items2;
        tmp12 = items2;
      } else {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
      }
      if (cResult[7] !== tmp4) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
        const items3 = [tmp4];
        cResult[7] = tmp4;
        cResult[8] = tmp15;
        cResult[9] = items3;
        tmp14 = items3;
      } else {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
        tmp14 = cResult[9];
      }
      const tmpResult6 = require("get initialized");
      const stateFromStores1 = tmpResult6.useStateFromStores(tmp12, tmp15, tmp14);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
        const items4 = [GuildMemberStore, UserStore];
        cResult[10] = items4;
        tmp17 = items4;
      } else {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
      }
      const tmp19 = cResult[11];
      if (tmp4 != null) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
      }
      if (tmp19 !== undefined) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
        if (tmp4 != null) {
          class I {
            constructor() {
              let guild_id;
              if (closure_0 != null) {
                guild_id = closure_0.guild_id;
              }
              const canChatInGuildResult =
                null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
              return canChatInGuildResult;
            }
          }
        }
        const fn = function b() {
          const currentUser = UserStore.getCurrentUser();
          let guild_id;
          if (closure_0 != null) {
            guild_id = closure_0.guild_id;
          }
          let flag = null;
          if (null != guild_id) {
            flag = null;
            if (null != currentUser) {
              let guild_id1;
              const getMember = GuildMemberStore.getMember;
              if (closure_0 != null) {
                guild_id1 = closure_0.guild_id;
              }
              const member = getMember(guild_id1, currentUser.id);
              let isPending;
              if (member != null) {
                isPending = member.isPending;
              }
              flag = isPending;
            }
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        };
        cResult[11] = tmp21;
        cResult[12] = fn;
        tmp20 = fn;
      } else {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
      }
      const tmpResult7 = require("get initialized");
      const stateFromStores2 = tmpResult7.useStateFromStores(tmp17, tmp20);
      const useCurrentUserCommunicationDisabled =
        require("useUserCommunicationDisabled").useCurrentUserCommunicationDisabled;
      require("useUserCommunicationDisabled");
      if (tmp4 != null) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
      }
      _slicedToArray(useCurrentUserCommunicationDisabled(undefined), 2)[1];
      const tmpResult9 = require("ThreadHooks");
      const isThreadModerator = tmpResult9.useIsThreadModerator(tmp4);
      let tmp27 = !stateFromStores;
      const tmpResult10 = require("ThreadHooks");
      const canUnarchiveThread = tmpResult10.useCanUnarchiveThread(tmp4);
      if (stateFromStores) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
      }
      if (!tmp27) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
      }
      if (!tmp27) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
        if (tmp4 != null) {
          class I {
            constructor() {
              let guild_id;
              if (closure_0 != null) {
                guild_id = closure_0.guild_id;
              }
              const canChatInGuildResult =
                null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
              return canChatInGuildResult;
            }
          }
        }
        if (tmp28) {
          class I {
            constructor() {
              let guild_id;
              if (closure_0 != null) {
                guild_id = closure_0.guild_id;
              }
              const canChatInGuildResult =
                null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
              return canChatInGuildResult;
            }
          }
        }
        tmp27 = tmp28;
      }
      if (!tmp27) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
        if (tmp4 != null) {
          class I {
            constructor() {
              let guild_id;
              if (closure_0 != null) {
                guild_id = closure_0.guild_id;
              }
              const canChatInGuildResult =
                null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
              return canChatInGuildResult;
            }
          }
        }
        if (tmp29) {
          class I {
            constructor() {
              let guild_id;
              if (closure_0 != null) {
                guild_id = closure_0.guild_id;
              }
              const canChatInGuildResult =
                null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
              return canChatInGuildResult;
            }
          }
        }
        tmp27 = tmp29;
      }
      if (!tmp27) {
        class I {
          constructor() {
            let guild_id;
            if (closure_0 != null) {
              guild_id = closure_0.guild_id;
            }
            const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(closure_0.guild_id);
            return canChatInGuildResult;
          }
        }
      }
      return tmp27;
    }
  : (arg0) => {
      const channel = ChannelStore.getChannel(arg0);
      const items = [GuildVerificationStore];
      const items1 = [channel];
      const obj2 = channel(504);
      const stateFromStores = obj2.useStateFromStores(
        items,
        () => {
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          const canChatInGuildResult = null == guild_id || GuildVerificationStore.canChatInGuild(channel.guild_id);
          return canChatInGuildResult;
        },
        items1,
      );
      const items2 = [LurkingStore];
      const items3 = [channel];
      const obj3 = channel(504);
      const stateFromStores1 = obj3.useStateFromStores(
        items2,
        () => {
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          const isLurkingResult = null != guild_id && LurkingStore.isLurking(channel.guild_id);
          return isLurkingResult;
        },
        items3,
      );
      const items4 = [GuildMemberStore, UserStore];
      const obj4 = channel(504);
      const stateFromStores2 = obj4.useStateFromStores(items4, () => {
        const currentUser = UserStore.getCurrentUser();
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        let flag = null;
        if (null != guild_id) {
          flag = null;
          if (null != currentUser) {
            let guild_id1;
            const getMember = GuildMemberStore.getMember;
            if (channel != null) {
              guild_id1 = channel.guild_id;
            }
            const member = getMember(guild_id1, currentUser.id);
            let isPending;
            if (member != null) {
              isPending = member.isPending;
            }
            flag = isPending;
          }
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      });
      let guild_id;
      const useCurrentUserCommunicationDisabled = channel(7636).useCurrentUserCommunicationDisabled;
      channel(7636);
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const tmp8 = _slicedToArray(useCurrentUserCommunicationDisabled(guild_id), 2)[1];
      const tmpResult = channel(6772);
      const isThreadModerator = tmpResult.useIsThreadModerator(channel);
      let tmp11 = !stateFromStores;
      const tmpResult2 = channel(6772);
      const canUnarchiveThread = tmpResult2.useCanUnarchiveThread(channel);
      if (stateFromStores) {
        tmp11 = stateFromStores1;
      }
      if (!tmp11) {
        tmp11 = stateFromStores2;
      }
      if (!tmp11) {
        let isLockedThreadResult;
        if (channel != null) {
          isLockedThreadResult = channel.isLockedThread();
        }
        if (isLockedThreadResult) {
          isLockedThreadResult = !isThreadModerator;
        }
        tmp11 = isLockedThreadResult;
      }
      if (!tmp11) {
        let isArchivedThreadResult;
        if (channel != null) {
          isArchivedThreadResult = channel.isArchivedThread();
        }
        if (isArchivedThreadResult) {
          isArchivedThreadResult = !canUnarchiveThread;
        }
        tmp11 = isArchivedThreadResult;
      }
      if (!tmp11) {
        tmp11 = tmp8;
      }
      return tmp11;
    };
let closure_15 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1) => {
      let context;
      _require = id;
      let closure_1 = arg1;
      let obj = require("react");
      const cResult = obj.c(15);
      context = react.useContext(closure_19);
      if (cResult[0] === id) {
        let tmp3;
        if (cResult[1] === context) {
          tmp3 = cResult[2];
        }
        let closure_3 = tmp3;
        if (cResult[3] === context.validators) {
          if (cResult[4] === arg1) {
            let tmp4;
            if (cResult[5] === tmp3) {
              tmp4 = cResult[6];
            }
            if (cResult[7] === id.id) {
              if (cResult[8] === context.validators) {
                if (cResult[9] === arg1) {
                  let tmp5;
                  if (cResult[10] === tmp3) {
                    tmp5 = cResult[11];
                  }
                  const effect = react.useEffect(tmp4, tmp5);
                  const validationErrors = context.validationErrors;
                  let tmp8;
                  if (validationErrors != null) {
                    tmp8 = validationErrors[id.id];
                  }
                  if (tmp8 == null) {
                    tmp8 = null;
                  }
                  if (cResult[12] === tmp8) {
                    let tmp9;
                    if (cResult[13] === tmp3) {
                      tmp9 = cResult[14];
                    }
                    return tmp9;
                  }
                  const obj3 = { error: tmp8, validate: tmp3 };
                  cResult[12] = tmp8;
                  cResult[13] = tmp3;
                  cResult[14] = obj3;
                  tmp9 = obj3;
                }
              }
            }
            const items = [context.validators, tmp3, arg1, id.id];
            cResult[7] = id.id;
            cResult[8] = context.validators;
            cResult[9] = arg1;
            cResult[10] = tmp3;
            cResult[11] = items;
            tmp5 = items;
          }
        }
        const fn2 = function c() {
          function currentValidate() {
            return closure_1_3(closure_1_1);
          }
          let validators = context.validators;
          if (validators != null) {
            validators.add(currentValidate);
          }
          return () => {
            const validators = context.validators;
            if (validators != null) {
              validators.delete(currentValidate);
            }
          };
        };
        cResult[3] = context.validators;
        cResult[4] = arg1;
        cResult[5] = tmp3;
        cResult[6] = fn2;
        tmp4 = fn2;
      }
      const fn = function l(arg0) {
        let str = "message";
        const tmp = closure_1(context[18]);
        const tmp2 = id;
        if (null != context.modal) {
          str = "modal";
        }
        const tmpResult = tmp(tmp2, arg0, str);
        id = tmpResult;
        const setValidationErrors = context.setValidationErrors;
        if (setValidationErrors != null) {
          setValidationErrors((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = id;
            return obj;
          });
        }
        return null == tmpResult;
      };
      cResult[0] = id;
      cResult[1] = context;
      cResult[2] = fn;
      tmp3 = fn;
    }
  : (id, arg1) => {
      let closure_0 = id;
      let closure_1 = arg1;
      const context = react.useContext(closure_19);
      const items = [id, context];
      const validate = react.useCallback((arg0) => {
        let str = "message";
        const tmp = closure_1(context[18]);
        const tmp2 = id;
        if (null != context.modal) {
          str = "modal";
        }
        const tmpResult = tmp(tmp2, arg0, str);
        id = tmpResult;
        const setValidationErrors = context.setValidationErrors;
        if (setValidationErrors != null) {
          setValidationErrors((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[id.id] = id;
            return obj;
          });
        }
        return null == tmpResult;
      }, items);
      const items1 = [context.validators, validate, arg1, id.id];
      const effect = react.useEffect(() => {
        function currentValidate() {
          return validate(closure_1_1);
        }
        let validators = context.validators;
        if (validators != null) {
          validators.add(currentValidate);
        }
        return () => {
          const validators = context.validators;
          if (validators != null) {
            validators.delete(currentValidate);
          }
        };
      }, items1);
      const validationErrors = context.validationErrors;
      let error;
      if (validationErrors != null) {
        error = validationErrors[id.id];
      }
      if (error == null) {
        error = null;
      }
      return { error, validate };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1, id2) => {
      let error;
      let first;
      let validate;
      _require = id;
      importDefault = id2;
      let obj = require("react");
      const cResult = obj.c(30);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocalInteractionComponentStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id2.id) {
        let tmp6;
        let tmp8;
        let tmp11;
        let tmp10;
        if (cResult[2] === id.id) {
          tmp6 = cResult[3];
        }
        const tmpResult = require("get initialized");
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [InteractionStore];
          cResult[4] = items1;
          tmp8 = items1;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== id) {
          const fn2 = function _() {
            return InteractionStore.getInteraction(id);
          };
          const items2 = [id];
          cResult[5] = id;
          cResult[6] = fn2;
          cResult[7] = items2;
          tmp11 = items2;
          tmp10 = fn2;
        } else {
          tmp10 = cResult[6];
          tmp11 = cResult[7];
        }
        const tmpResult2 = require("get initialized");
        const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10, tmp11);
        const tmp14 = closure_15(id.channel_id) || arg1;
        ({ error, validate } = closure_16(id2, stateFromStores));
        id = id.applicationId;
        closure_16(id2, stateFromStores);
        if (id == null) {
          id = id.author.id;
        }
        if (cResult[8] === id) {
          if (cResult[9] === id2.customId) {
            if (cResult[10] === id2.id) {
              if (cResult[11] === id2.type) {
                if (cResult[12] === id.channel_id) {
                  if (cResult[13] === id.flags) {
                    if (cResult[14] === id.id) {
                      let tmp18;
                      if (cResult[15] === validate) {
                        tmp18 = cResult[16];
                      }
                      if (cResult[17] === id2) {
                        let tmp19;
                        if (cResult[18] === tmp14) {
                          tmp19 = cResult[19];
                        }
                        if (cResult[20] === id2) {
                          if (cResult[21] === tmp14) {
                            let tmp22;
                            if (cResult[22] === stateFromStores1) {
                              tmp22 = cResult[23];
                            }
                            if (cResult[24] === error) {
                              if (cResult[25] === tmp18) {
                                if (cResult[26] === stateFromStores) {
                                  if (cResult[27] === tmp19) {
                                    let tmp25;
                                    if (cResult[28] === tmp22) {
                                      tmp25 = cResult[29];
                                    }
                                    return tmp25;
                                  }
                                }
                              }
                            }
                            const obj2 = {
                              state: stateFromStores,
                              executeStateUpdate: tmp18,
                              isDisabled: tmp19,
                              visualState: tmp22,
                              error,
                            };
                            cResult[24] = error;
                            cResult[25] = tmp18;
                            cResult[26] = stateFromStores;
                            cResult[27] = tmp19;
                            cResult[28] = tmp22;
                            cResult[29] = obj2;
                            tmp25 = obj2;
                          }
                        }
                        const tmp24 = getActionComponentState(stateFromStores1, id2, tmp14);
                        cResult[20] = id2;
                        cResult[21] = tmp14;
                        cResult[22] = stateFromStores1;
                        cResult[23] = tmp24;
                        tmp22 = tmp24;
                      }
                      const tmp20 = tmp14 && isInteractionComponent(id2);
                      cResult[17] = id2;
                      cResult[18] = tmp14;
                      cResult[19] = tmp20;
                      tmp19 = tmp20;
                    }
                  }
                }
              }
            }
          }
        }
        class T {
          constructor(localState) {
            if (validate(localState)) {
              const channel = ChannelStore.getChannel(id.channel_id);
              const tmp5 = null != channel && null != id2.customId;
              if (tmp5) {
                const obj3 = {
                  componentType: id2.type,
                  messageId: null,
                  messageFlags: null,
                  customId: null,
                  componentId: null,
                  applicationId: id,
                  channelId: null,
                  guildId: null,
                  localState,
                };
                ({ id: obj2.messageId, flags: obj2.messageFlags } = id);
                ({ customId: obj2.customId, id: obj2.componentId } = id2);
                ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
                const obj = InteractionUtils;
                const result = obj.executeMessageComponentInteraction(obj3);
              }
              return true;
            } else {
              return false;
            }
          }
        }
        cResult[8] = id;
        cResult[9] = id2.customId;
        cResult[10] = id2.id;
        cResult[11] = id2.type;
        cResult[12] = id.channel_id;
        cResult[13] = id.flags;
        cResult[14] = id.id;
        cResult[15] = validate;
        cResult[16] = T;
        tmp18 = T;
      }
      const fn = function c() {
        return LocalInteractionComponentStateStore.getInteractionComponentState(id.id, id2.id);
      };
      cResult[1] = id2.id;
      cResult[2] = id.id;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (channel_id, arg1, type) => {
      let items3;
      let tmp5;
      let validate;
      _require = channel_id;
      let obj = require("get initialized");
      const items = [LocalInteractionComponentStateStore];
      const stateFromStores = obj.useStateFromStores(items, () =>
        LocalInteractionComponentStateStore.getInteractionComponentState(channel_id.id, type.id),
      );
      const obj2 = require("get initialized");
      const items1 = [InteractionStore];
      const items2 = [channel_id];
      const stateFromStores1 = obj2.useStateFromStores(
        items1,
        () => InteractionStore.getInteraction(channel_id),
        items2,
      );
      const tmp3 = closure_15(channel_id.channel_id) || arg1;
      const tmp4 = closure_16(type, stateFromStores);
      validate = tmp4.validate;
      let id = channel_id.applicationId;
      const error = tmp4.error;
      if (id == null) {
        id = channel_id.author.id;
      }
      let obj3 = {
        state: stateFromStores,
        executeStateUpdate: react.useCallback((localState) => {
          if (validate(localState)) {
            const channel = ChannelStore.getChannel(channel_id.channel_id);
            const tmp5 = null != channel && null != type.customId;
            if (tmp5) {
              const obj3 = {
                componentType: type.type,
                messageId: null,
                messageFlags: null,
                customId: null,
                componentId: null,
                applicationId: id,
                channelId: null,
                guildId: null,
                localState,
              };
              ({ id: obj2.messageId, flags: obj2.messageFlags } = channel_id);
              ({ customId: obj2.customId, id: obj2.componentId } = type);
              ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
              const obj = InteractionUtils;
              const result = obj.executeMessageComponentInteraction(obj3);
            }
            return true;
          } else {
            return false;
          }
        }, items3),
        isDisabled: tmp5,
        visualState: getActionComponentState(stateFromStores1, type, tmp3),
        error,
      };
      items3 = [, , , , , , ,];
      ({ channel_id: arr4[0], flags: arr4[1], id: arr4[2] } = channel_id);
      ({ customId: arr4[3], type: arr4[4], id: arr4[5] } = type);
      items3[6] = id;
      items3[7] = validate;
      tmp5 = tmp3 && isInteractionComponent(type);
      return obj3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (customId, id, arg2) => {
      let closure_2;
      let closure_5;
      let error;
      let first;
      let user;
      let validate;
      _require = customId;
      importDefault = id;
      dependencyMap = arg2;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocalInteractionComponentStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id.id) {
        let tmp6;
        if (cResult[2] === customId.customId) {
          tmp6 = cResult[3];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
        const first1 = stateFromStores(validate.useState(arg2), 1)[0];
        ({ error, validate } = closure_16(id, stateFromStores));
        closure_16(id, stateFromStores);
        if (cResult[4] === id.id) {
          if (cResult[5] === customId.customId) {
            let tmp13;
            if (cResult[6] === validate) {
              tmp13 = cResult[7];
            }
            InteractionStore = tmp13;
            if (cResult[8] === tmp13) {
              if (cResult[9] === arg2) {
                let tmp14;
                if (cResult[10] === stateFromStores) {
                  tmp14 = cResult[11];
                }
                useMountEffectDefault(tmp14);
                class A {
                  constructor() {
                    if (null == stateFromStores) {
                      closure_5(closure_2);
                    }
                  }
                }
                let tmp17 = stateFromStores;
                if (stateFromStores == null) {
                  tmp17 = first1;
                }
                if (tmp17 == null) {
                  tmp17 = null;
                }
                if (cResult[12] === error) {
                  if (cResult[13] === tmp13) {
                    let tmp18;
                    if (cResult[14] === tmp17) {
                      tmp18 = cResult[15];
                    }
                    return tmp18;
                  }
                }
                let obj2 = {
                  state: tmp17,
                  executeStateUpdate: tmp13,
                  isDisabled: false,
                  visualState: tmp(5122).ActionComponentState.NORMAL,
                  error,
                };
                class S {
                  constructor(state) {
                    let tmp = null == state;
                    if (!tmp) {
                      const obj2 = {
                        type: "SET_INTERACTION_COMPONENT_STATE",
                        rootContainerId: customId.customId,
                        componentId: user.id,
                        state,
                      };
                      const obj = DispatcherDefault;
                      obj.dispatch(obj2);
                      tmp = validate(state);
                    }
                    return tmp;
                  }
                }
                cResult[13] = tmp13;
                cResult[14] = tmp17;
                cResult[15] = obj2;
                tmp18 = obj2;
              }
            }
            class A {
              constructor() {
                if (null == stateFromStores) {
                  closure_5(closure_2);
                }
              }
            }
            cResult[8] = tmp13;
            cResult[9] = arg2;
            cResult[10] = stateFromStores;
            cResult[11] = A;
            tmp14 = A;
          }
        }
        class S {
          constructor(state) {
            let tmp = null == state;
            if (!tmp) {
              const obj2 = {
                type: "SET_INTERACTION_COMPONENT_STATE",
                rootContainerId: customId.customId,
                componentId: user.id,
                state,
              };
              const obj = DispatcherDefault;
              obj.dispatch(obj2);
              tmp = validate(state);
            }
            return tmp;
          }
        }
        cResult[4] = id.id;
        cResult[5] = customId.customId;
        cResult[6] = validate;
        cResult[7] = S;
        tmp13 = S;
      }
      const fn = function c() {
        return LocalInteractionComponentStateStore.getInteractionComponentState(customId.customId, user.id);
      };
      cResult[1] = id.id;
      cResult[2] = customId.customId;
      cResult[3] = fn;
      tmp6 = fn;
    }
  : (customId, id, arg2) => {
      let closure_2;
      let user;
      let validate;
      _require = customId;
      importDefault = id;
      dependencyMap = arg2;
      let tmp = _require;
      let obj = require("get initialized");
      const items = [LocalInteractionComponentStateStore];
      let stateFromStores = obj.useStateFromStores(items, () =>
        LocalInteractionComponentStateStore.getInteractionComponentState(customId.customId, user.id),
      );
      const first = stateFromStores(validate.useState(arg2), 1)[0];
      const tmp5 = closure_16(id, stateFromStores);
      validate = tmp5.validate;
      const items1 = [customId.customId, id.id, validate];
      const error = tmp5.error;
      const executeStateUpdate = validate.useCallback((state) => {
        let tmp = null == state;
        if (!tmp) {
          const obj2 = {
            type: "SET_INTERACTION_COMPONENT_STATE",
            rootContainerId: customId.customId,
            componentId: user.id,
            state,
          };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
          tmp = validate(state);
        }
        return tmp;
      }, items1);
      useMountEffectDefault(() => {
        if (null == stateFromStores) {
          callback(closure_2);
        }
      });
      if (stateFromStores == null) {
        stateFromStores = first;
      }
      if (stateFromStores == null) {
        stateFromStores = null;
      }
      let obj2 = {
        state: stateFromStores,
        executeStateUpdate,
        isDisabled: false,
        visualState: tmp(5122).ActionComponentState.NORMAL,
        error,
      };
      return obj2;
    };
const redux = react.createContext(null);
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const validationErrors = react.useContext(redux).validationErrors;
      let tmp;
      if (validationErrors != null) {
        tmp = validationErrors[arg0.id];
      }
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    }
  : (arg0) => {
      const validationErrors = react.useContext(redux).validationErrors;
      let tmp;
      if (validationErrors != null) {
        tmp = validationErrors[arg0.id];
      }
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    };
let fn = () => react.useContext(redux);
let fn2 = () => react.useContext(redux).containerId;
const result2 = size.fileFinishedImporting("modules/interaction_components/ComponentStateContext.tsx");

export { getActionComponentState };
export const useShouldDisableInteractiveComponents = tmp2;
export const ComponentStateContextProvider = function ComponentStateContextProvider(message) {
  message = message.message;
  const modal = message.modal;
  const applicationWidget = message.applicationWidget;
  const validators = message.validators;
  const validationErrors = message.validationErrors;
  const setValidationErrors = message.setValidationErrors;
  let flag = message.shouldDisableInteractiveComponents;
  const children = message.children;
  if (flag === undefined) {
    flag = false;
  }
  const items = [message, modal, applicationWidget, flag, validators, validationErrors, setValidationErrors];
  return (
    <redux.Provider
      value={validationErrors.useMemo(function () {
        let ApplicationWidget_str;
        let components;
        if (null != ApplicationWidget_str) {
          ({ channel_id: obj3.channelId, id: obj3.containerId } = ApplicationWidget_str);
          const obj5 = {
            useComponentState: closure_1_17.bind(null, ApplicationWidget_str, flag),
            channelId: null,
            containerId: null,
            message: ApplicationWidget_str,
            validators,
            getParents(arg0) {
              const obj = message(applicationWidget[22]);
              return obj.getParents(ApplicationWidget_str.components, arg0);
            },
          };
          return obj5;
        } else if (null != modal) {
          ({ channelId: obj2.channelId, customId: obj2.containerId } = modal);
          const obj6 = {
            useComponentState: closure_1_18.bind(null, modal),
            channelId: null,
            containerId: null,
            modal,
            validators,
            validationErrors,
            setValidationErrors,
            getParents(arg0) {
              const obj = message(applicationWidget[22]);
              return obj.getParents(components.components, arg0);
            },
          };
          return obj6;
        } else if (null != applicationWidget) {
          let obj = {
            useComponentState: () => {
              const error = new Error("" + ApplicationWidget_str + " does not support state");
              throw error;
            },
            containerId: "app-widget-" + applicationWidget.applicationId,
            applicationWidget,
            validators,
            validationErrors,
            setValidationErrors,
            getParents: () => {
              const error = new Error("" + "ApplicationWidget" + " does not support parents");
              throw error;
            },
          };
          ApplicationWidget_str = "ApplicationWidget";
          const _HermesInternal = HermesInternal;
          return obj;
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          let error = new Error(
            "ComponentStateContextProvider requires at least one of message, modal, or applicationWidget",
          );
          throw error;
        }
      }, items)}
    >
      {children}
    </redux.Provider>
  );
};
export const useComponentState = function useComponentState(type, arg1) {
  const context = react.useContext(redux);
  return context.useComponentState(type, arg1);
};
export const useComponentStateContext = fn;
export const useComponentContainerId = fn2;
export const useComponentError = tmp5;
