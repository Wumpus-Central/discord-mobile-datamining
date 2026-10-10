// discord_app/modules/interaction_components/ComponentStateContext.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Server from "../../flow/Server.tsx";
import useMountEffectDefault from "../../hooks/useMountEffect.tsx";
import InteractionTypes from "../../../discord_common/js/shared/shared-constants/InteractionTypes.tsx";
import interactions_InteractionTypes from "../interactions/InteractionTypes.tsx";
import InteractionComponentTypes from "InteractionComponentTypes.tsx";
import InteractionUtils from "../interactions/InteractionUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import InteractionStore from "../interactions/InteractionStore.tsx";
import LurkingStore from "../lurker_mode/LurkingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildVerificationStore from "../../stores/GuildVerificationStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore.tsx";

require = fn;
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
  let LOADING = InteractionComponentTypes.ActionComponentState.NORMAL;
  let tmp3 = null != interaction;
  if (tmp3) {
    tmp3 = interaction.state !== interactions_InteractionTypes.InteractionState.FAILED;
  }
  let DISABLED = LOADING;
  if (!tmp3) {
    if (flag) {
      flag = isInteractionComponent(id);
    }
    if (flag) {
      DISABLED = InteractionComponentTypes.ActionComponentState.DISABLED;
    }
    return DISABLED;
  } else {
    if (interaction.data.interactionType !== InteractionTypes.InteractionTypes.MESSAGE_COMPONENT) {
      if (isInteractionComponent(id)) {
        LOADING = InteractionComponentTypes.ActionComponentState.DISABLED;
      }
    }
    LOADING = InteractionComponentTypes.ActionComponentState.LOADING;
  }
}
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldDisableInteractiveComponents(arg0) {
      const cResult = require("c").c(13);
      if (cResult[0] !== arg0) {
        const channel = ChannelStore.getChannel(arg0);
        cResult[0] = arg0;
        cResult[1] = channel;
        let tmp4 = channel;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildVerificationStore];
        cResult[2] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
        const items1 = [tmp4];
        cResult[3] = tmp4;
        cResult[4] = I;
        cResult[5] = items1;
        let tmp10 = items1;
      } else {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
        tmp10 = cResult[5];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp7, I, tmp10);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
        const items2 = [LurkingStore];
        cResult[6] = items2;
        const tmp12 = items2;
      } else {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
      }
      if (cResult[7] !== tmp4) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
        const items3 = [tmp4];
        cResult[7] = tmp4;
        cResult[8] = tmp15;
        cResult[9] = items3;
        let tmp14 = items3;
      } else {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
        tmp14 = cResult[9];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp12, tmp15, tmp14);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
        const items4 = [GuildMemberStore, UserStore];
        cResult[10] = items4;
        const tmp17 = items4;
      } else {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
      }
      if (tmp4 != null) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
      }
      if (cResult[11] !== undefined) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
        if (tmp4 != null) {
          class I {
            constructor() {
              tmp = closure_0;
              guild_id = undefined;
              if (closure_0 != null) {
                guild_id = tmp.guild_id;
              }
              canChatInGuildResult = null == guild_id;
              if (!canChatInGuildResult) {
                tmp4 = closure_9;
                canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
              }
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
              if (closure_0 != null) {
                guild_id1 = closure_0.guild_id;
              }
              const member = GuildMemberStore.getMember(guild_id1, currentUser.id);
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
        cResult[11] = tmp20;
        cResult[12] = fn;
        const tmp19 = fn;
      } else {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
      }
      const tmpResult6 = require("initialize");
      const stateFromStores2 = require("initialize").useStateFromStores(tmp17, tmp19);
      const tmpResult7 = require("initialize");
      if (tmp4 != null) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
      }
      _slicedToArray(require("useUserCommunicationDisabled").useCurrentUserCommunicationDisabled(undefined), 2)[1];
      const tmpResult8 = require("useUserCommunicationDisabled");
      const isThreadModerator = require("ThreadHooks").useIsThreadModerator(tmp4);
      const tmpResult9 = require("ThreadHooks");
      let tmp25 = !stateFromStores;
      const canUnarchiveThread = require("ThreadHooks").useCanUnarchiveThread(tmp4);
      if (stateFromStores) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
      }
      if (!tmp25) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
      }
      if (!tmp25) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
        if (tmp4 != null) {
          class I {
            constructor() {
              tmp = closure_0;
              guild_id = undefined;
              if (closure_0 != null) {
                guild_id = tmp.guild_id;
              }
              canChatInGuildResult = null == guild_id;
              if (!canChatInGuildResult) {
                tmp4 = closure_9;
                canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
              }
              return canChatInGuildResult;
            }
          }
        }
        if (tmp26) {
          class I {
            constructor() {
              tmp = closure_0;
              guild_id = undefined;
              if (closure_0 != null) {
                guild_id = tmp.guild_id;
              }
              canChatInGuildResult = null == guild_id;
              if (!canChatInGuildResult) {
                tmp4 = closure_9;
                canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
              }
              return canChatInGuildResult;
            }
          }
        }
        tmp25 = tmp26;
      }
      if (!tmp25) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
        if (tmp4 != null) {
          class I {
            constructor() {
              tmp = closure_0;
              guild_id = undefined;
              if (closure_0 != null) {
                guild_id = tmp.guild_id;
              }
              canChatInGuildResult = null == guild_id;
              if (!canChatInGuildResult) {
                tmp4 = closure_9;
                canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
              }
              return canChatInGuildResult;
            }
          }
        }
        if (tmp27) {
          class I {
            constructor() {
              tmp = closure_0;
              guild_id = undefined;
              if (closure_0 != null) {
                guild_id = tmp.guild_id;
              }
              canChatInGuildResult = null == guild_id;
              if (!canChatInGuildResult) {
                tmp4 = closure_9;
                canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
              }
              return canChatInGuildResult;
            }
          }
        }
        tmp25 = tmp27;
      }
      if (!tmp25) {
        class I {
          constructor() {
            tmp = closure_0;
            guild_id = undefined;
            if (closure_0 != null) {
              guild_id = tmp.guild_id;
            }
            canChatInGuildResult = null == guild_id;
            if (!canChatInGuildResult) {
              tmp4 = closure_9;
              canChatInGuildResult = closure_9.canChatInGuild(tmp.guild_id);
            }
            return canChatInGuildResult;
          }
        }
      }
      return tmp25;
    }
  : function useShouldDisableInteractiveComponents(arg0) {
      const channel = ChannelStore.getChannel(arg0);
      const items = [GuildVerificationStore];
      const items1 = [channel];
      const stateFromStores = channel(504).useStateFromStores(
        items,
        () => {
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          let canChatInGuildResult = null == guild_id;
          if (!canChatInGuildResult) {
            canChatInGuildResult = GuildVerificationStore.canChatInGuild(channel.guild_id);
          }
          return canChatInGuildResult;
        },
        items1,
      );
      const obj2 = channel(504);
      const items2 = [LurkingStore];
      const items3 = [channel];
      const stateFromStores1 = channel(504).useStateFromStores(
        items2,
        () => {
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          let isLurkingResult = null != guild_id;
          if (isLurkingResult) {
            isLurkingResult = LurkingStore.isLurking(channel.guild_id);
          }
          return isLurkingResult;
        },
        items3,
      );
      const obj3 = channel(504);
      const items4 = [GuildMemberStore, UserStore];
      const stateFromStores2 = channel(504).useStateFromStores(items4, () => {
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
            if (channel != null) {
              guild_id1 = channel.guild_id;
            }
            const member = GuildMemberStore.getMember(guild_id1, currentUser.id);
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
      const obj4 = channel(504);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const obj5 = channel(7994);
      const isThreadModerator = channel(6971).useIsThreadModerator(channel);
      const tmpResult = channel(6971);
      let tmp9 = !stateFromStores;
      const canUnarchiveThread = channel(6971).useCanUnarchiveThread(channel);
      if (stateFromStores) {
        tmp9 = stateFromStores1;
      }
      if (!tmp9) {
        tmp9 = stateFromStores2;
      }
      if (!tmp9) {
        let isLockedThreadResult;
        if (channel != null) {
          isLockedThreadResult = channel.isLockedThread();
        }
        if (isLockedThreadResult) {
          isLockedThreadResult = !isThreadModerator;
        }
        tmp9 = isLockedThreadResult;
      }
      if (!tmp9) {
        let isArchivedThreadResult;
        if (channel != null) {
          isArchivedThreadResult = channel.isArchivedThread();
        }
        if (isArchivedThreadResult) {
          isArchivedThreadResult = !canUnarchiveThread;
        }
        tmp9 = isArchivedThreadResult;
      }
      if (!tmp9) {
        tmp9 = _slicedToArray(obj5.useCurrentUserCommunicationDisabled(guild_id), 2)[1];
      }
      return tmp9;
    };
let closure_15 = tmp2;
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useComponentValidatorState(id, arg1) {
      _require = id;
      closure_1 = arg1;
      const cResult = require("c").c(15);
      context = noop.useContext(closure_19);
      if (cResult[0] === id) {
        if (cResult[1] === context) {
          let tmp3 = cResult[2];
        }
        closure_3 = tmp3;
        if (cResult[3] === context.validators) {
          if (cResult[4] === arg1) {
            if (cResult[5] === tmp3) {
              let tmp4 = cResult[6];
            }
            if (cResult[7] === id.id) {
              if (cResult[8] === context.validators) {
                if (cResult[9] === arg1) {
                  if (cResult[10] === tmp3) {
                    let tmp5 = cResult[11];
                  }
                  const effect = noop.useEffect(tmp4, tmp5);
                  const validationErrors = context.validationErrors;
                  let tmp8;
                  if (validationErrors != null) {
                    tmp8 = validationErrors[id.id];
                  }
                  if (tmp8 == null) {
                    tmp8 = null;
                  }
                  if (cResult[12] === tmp8) {
                    if (cResult[13] === tmp3) {
                      let tmp9 = cResult[14];
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
      const fn = function s(arg0) {
        let str = "message";
        if (null != context.modal) {
          str = "modal";
        }
        const tmpResult = closure_1(context[19])(id, arg0, str);
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
      let obj = require("c");
    }
  : function useComponentValidatorState(id, arg1) {
      closure_0 = id;
      closure_1 = arg1;
      const context = noop.useContext(closure_19);
      const items = [id, context];
      const validate = noop.useCallback((arg0) => {
        let str = "message";
        if (null != context.modal) {
          str = "modal";
        }
        const tmpResult = closure_1(context[19])(id, arg0, str);
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
      const effect = noop.useEffect(() => {
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
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useComponentStateForMessage(id, arg1, id2) {
      _require = id;
      importDefault = id2;
      const cResult = require("c").c(30);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocalInteractionComponentStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id2.id) {
        if (cResult[2] === id.id) {
          let tmp6 = cResult[3];
        }
        const stateFromStores = tmp(validate[16]).useStateFromStores(first, tmp6);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [InteractionStore];
          cResult[4] = items1;
          let tmp8 = items1;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== id) {
          class E {
            constructor() {
              return closure_5.getInteraction(closure_0);
            }
          }
          const items2 = [id];
          cResult[5] = id;
          cResult[6] = E;
          cResult[7] = items2;
          let tmp11 = items2;
        } else {
          class E {
            constructor() {
              return closure_5.getInteraction(closure_0);
            }
          }
          tmp11 = cResult[7];
        }
        const tmpResult = tmp(validate[16]);
        const stateFromStores1 = tmp(validate[16]).useStateFromStores(tmp8, E, tmp11);
        closure_15(id.channel_id) || arg1;
        const tmpResult2 = tmp(validate[16]);
        ({ error, validate } = closure_16(id2, stateFromStores));
        const applicationId = id.applicationId;
        if (applicationId == null) {
          class E {
            constructor() {
              return closure_5.getInteraction(closure_0);
            }
          }
        }
        if (cResult[8] === applicationId) {
          class E {
            constructor() {
              return closure_5.getInteraction(closure_0);
            }
          }
        }
        class T {
          constructor(arg0) {
            if (validate(id)) {
              tmp = closure_7;
              tmp2 = closure_0;
              channel = closure_7.getChannel(closure_0.channel_id);
              tmp4 = null;
              tmp5 = null != channel;
              if (tmp5) {
                tmp6 = closure_1;
                tmp5 = null != closure_1.customId;
              }
              if (tmp5) {
                tmp7 = closure_0;
                tmp8 = closure_2;
                obj = closure_0(closure_2[20]);
                obj1 = {
                  componentType: null,
                  messageId: null,
                  messageFlags: null,
                  customId: null,
                  componentId: null,
                  applicationId: null,
                  channelId: null,
                  guildId: null,
                  localState: null,
                };
                tmp9 = closure_1;
                obj1.componentType = closure_1.type;
                ({ id: obj2.messageId, flags: obj2.messageFlags } = tmp2);
                ({ customId: obj2.customId, id: obj2.componentId } = closure_1);
                tmp10 = id;
                obj1.applicationId = id;
                ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
                obj1.localState = id;
                result = obj.executeMessageComponentInteraction(obj1);
              }
              flag2 = true;
              return true;
            } else {
              flag = false;
              return false;
            }
          }
        }
        cResult[8] = applicationId;
        cResult[9] = id2.customId;
        cResult[10] = id2.id;
        cResult[11] = id2.type;
        cResult[12] = id.channel_id;
        cResult[13] = id.flags;
        cResult[14] = id.id;
        cResult[15] = validate;
        cResult[16] = T;
        const tmp16 = closure_16(id2, stateFromStores);
      }
      const fn = function c() {
        return LocalInteractionComponentStateStore.getInteractionComponentState(id.id, id2.id);
      };
      cResult[1] = id2.id;
      cResult[2] = id.id;
      cResult[3] = fn;
      tmp6 = fn;
      let obj = require("c");
    }
  : function useComponentStateForMessage(channel_id, arg1, type) {
      _require = channel_id;
      const items = [LocalInteractionComponentStateStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        LocalInteractionComponentStateStore.getInteractionComponentState(channel_id.id, type.id),
      );
      let obj = require("initialize");
      const items1 = [InteractionStore];
      const items2 = [channel_id];
      const stateFromStores1 = require("initialize").useStateFromStores(
        items1,
        () => InteractionStore.getInteraction(closure_0),
        items2,
      );
      const tmp3 = closure_15(channel_id.channel_id) || arg1;
      const tmp4 = closure_16(type, stateFromStores);
      validate = tmp4.validate;
      let id = channel_id.applicationId;
      if (id == null) {
        id = channel_id.author.id;
      }
      let obj3 = { state: stateFromStores, executeStateUpdate: null, isDisabled: null, visualState: null, error: null };
      const items3 = [, , , , , , ,];
      ({ channel_id: arr4[0], flags: arr4[1], id: arr4[2] } = channel_id);
      ({ customId: arr4[3], type: arr4[4], id: arr4[5] } = type);
      items3[6] = id;
      items3[7] = validate;
      obj3.executeStateUpdate = noop.useCallback((localState) => {
        if (validate(localState)) {
          const channel = ChannelStore.getChannel(channel_id.channel_id);
          let tmp5 = null != channel;
          if (tmp5) {
            tmp5 = null != type.customId;
          }
          if (tmp5) {
            const obj3 = {
              componentType: type.type,
              messageId: null,
              messageFlags: null,
              customId: null,
              componentId: null,
              applicationId: null,
              channelId: null,
              guildId: null,
              localState: null,
            };
            ({ id: obj2.messageId, flags: obj2.messageFlags } = channel_id);
            ({ customId: obj2.customId, id: obj2.componentId } = type);
            obj3.applicationId = id;
            ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
            obj3.localState = localState;
            const result = InteractionUtils.executeMessageComponentInteraction(obj3);
          }
          return true;
        } else {
          return false;
        }
      }, items3);
      let tmp5 = tmp3;
      if (tmp3) {
        tmp5 = isInteractionComponent(type);
      }
      obj3.isDisabled = tmp5;
      obj3.visualState = getActionComponentState(stateFromStores1, type, tmp3);
      obj3.error = tmp4.error;
      return obj3;
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useComponentStateForModal(customId, id, arg2) {
      _require = customId;
      importDefault = id;
      dependencyMap = arg2;
      const cResult = require("c").c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LocalInteractionComponentStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id.id) {
        if (cResult[2] === customId.customId) {
          let tmp6 = cResult[3];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp6);
        const tmpResult = tmp(504);
        ({ error, validate } = closure_16(id, stateFromStores));
        if (cResult[4] === id.id) {
          if (cResult[5] === customId.customId) {
            if (cResult[6] === validate) {
              let tmp12 = cResult[7];
            }
            InteractionStore = tmp12;
            if (cResult[8] === tmp12) {
              if (cResult[9] === arg2) {
                if (cResult[10] === stateFromStores) {
                  let tmp13 = cResult[11];
                }
                useMountEffectDefault(tmp13);
                class A {
                  constructor() {
                    if (null == closure_3) {
                      tmp = closure_5;
                      tmp2 = closure_2;
                      tmp3 = closure_5(closure_2);
                    }
                    return;
                  }
                }
                let first1 = stateFromStores;
                if (stateFromStores == null) {
                  first1 = stateFromStores(validate.useState(arg2), 1)[0];
                }
                if (first1 == null) {
                  first1 = null;
                }
                if (cResult[12] === error) {
                  if (cResult[13] === tmp12) {
                    if (cResult[14] === first1) {
                      let tmp17 = cResult[15];
                    }
                    return tmp17;
                  }
                }
                let obj2 = {
                  state: first1,
                  executeStateUpdate: tmp12,
                  isDisabled: false,
                  visualState: tmp(5445).ActionComponentState.NORMAL,
                  error,
                };
                class S {
                  constructor(arg0) {
                    tmp = null == customId;
                    if (!tmp) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = closure_1(closure_2[21]);
                      obj1 = {
                        type: "SET_INTERACTION_COMPONENT_STATE",
                        rootContainerId: null,
                        componentId: null,
                        state: null,
                      };
                      tmp4 = closure_0;
                      obj1.rootContainerId = closure_0.customId;
                      tmp5 = closure_1;
                      obj1.componentId = closure_1.id;
                      obj1.state = customId;
                      dispatchResult = obj.dispatch(obj1);
                      tmp7 = validate;
                      tmp = validate(customId);
                    }
                    return tmp;
                  }
                }
                cResult[13] = tmp12;
                cResult[14] = first1;
                cResult[15] = obj2;
                tmp17 = obj2;
              }
            }
            class A {
              constructor() {
                if (null == closure_3) {
                  tmp = closure_5;
                  tmp2 = closure_2;
                  tmp3 = closure_5(closure_2);
                }
                return;
              }
            }
            cResult[8] = tmp12;
            cResult[9] = arg2;
            cResult[10] = stateFromStores;
            cResult[11] = A;
            tmp13 = A;
          }
        }
        class S {
          constructor(arg0) {
            tmp = null == customId;
            if (!tmp) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[21]);
              obj1 = { type: "SET_INTERACTION_COMPONENT_STATE", rootContainerId: null, componentId: null, state: null };
              tmp4 = closure_0;
              obj1.rootContainerId = closure_0.customId;
              tmp5 = closure_1;
              obj1.componentId = closure_1.id;
              obj1.state = customId;
              dispatchResult = obj.dispatch(obj1);
              tmp7 = validate;
              tmp = validate(customId);
            }
            return tmp;
          }
        }
        cResult[4] = id.id;
        cResult[5] = customId.customId;
        cResult[6] = validate;
        cResult[7] = S;
        tmp12 = S;
        const tmp11 = closure_16(id, stateFromStores);
      }
      const fn = function c() {
        return LocalInteractionComponentStateStore.getInteractionComponentState(customId.customId, user.id);
      };
      cResult[1] = id.id;
      cResult[2] = customId.customId;
      cResult[3] = fn;
      tmp6 = fn;
      let obj = require("c");
    }
  : function useComponentStateForModal(customId, id, arg2) {
      _require = customId;
      importDefault = id;
      dependencyMap = arg2;
      const items = [LocalInteractionComponentStateStore];
      let stateFromStores = require("initialize").useStateFromStores(items, () =>
        LocalInteractionComponentStateStore.getInteractionComponentState(customId.customId, user.id),
      );
      const tmp4 = closure_16(id, stateFromStores);
      const validate = tmp4.validate;
      const items1 = [customId.customId, id.id, validate];
      const executeStateUpdate = validate.useCallback((state) => {
        let tmp = null == state;
        if (!tmp) {
          const obj2 = {
            type: "SET_INTERACTION_COMPONENT_STATE",
            rootContainerId: customId.customId,
            componentId: user.id,
            state,
          };
          DispatcherDefault.dispatch(obj2);
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
        stateFromStores = stateFromStores(validate.useState(arg2), 1)[0];
      }
      if (stateFromStores == null) {
        stateFromStores = null;
      }
      let obj = require("initialize");
      return {
        state: stateFromStores,
        executeStateUpdate,
        isDisabled: false,
        visualState: require("InteractionComponentTypes").ActionComponentState.NORMAL,
        error: tmp4.error,
      };
    };
const redux = noop.createContext(null);
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
function useComponentStateContext() {
  return noop.useContext(closure_19);
}
function useComponentContainerId() {
  return noop.useContext(closure_19).containerId;
}
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/interaction_components/ComponentStateContext.tsx");

export { getActionComponentState };
export const useShouldDisableInteractiveComponents = tmp2;
export const ComponentStateContextProvider = function ComponentStateContextProvider(children) {
  const message = children.message;
  const modal = children.modal;
  const applicationWidget = children.applicationWidget;
  const validators = children.validators;
  const validationErrors = children.validationErrors;
  const setValidationErrors = children.setValidationErrors;
  let flag = children.shouldDisableInteractiveComponents;
  if (flag === undefined) {
    flag = false;
  }
  const items = [message, modal, applicationWidget, flag, validators, validationErrors, setValidationErrors];
  return (
    <redux.Provider
      value={validationErrors.useMemo(() => {
        if (null != ApplicationWidget) {
          const obj5 = {
            useComponentState: closure_1_17.bind(null, tmp, flag),
            channelId: null,
            containerId: null,
            message: null,
            validators: null,
            getParents: null,
          };
          ({ channel_id: obj3.channelId, id: obj3.containerId } = tmp);
          obj5.message = tmp;
          obj5.validators = validators;
          obj5.getParents = function getParents(arg0) {
            return message(applicationWidget[23]).getParents(ApplicationWidget.components, arg0);
          };
          return obj5;
        } else if (null != modal) {
          const obj6 = {
            useComponentState: closure_1_18.bind(null, modal),
            channelId: null,
            containerId: null,
            modal: null,
            validators: null,
            validationErrors: null,
            setValidationErrors: null,
            getParents: null,
          };
          ({ channelId: obj2.channelId, customId: obj2.containerId } = modal);
          obj6.modal = modal;
          obj6.validators = validators;
          obj6.validationErrors = validationErrors;
          obj6.setValidationErrors = setValidationErrors;
          obj6.getParents = function getParents(arg0) {
            return message(applicationWidget[23]).getParents(components.components, arg0);
          };
          return obj6;
        } else if (null != applicationWidget) {
          const obj = {
            useComponentState: null,
            containerId: null,
            applicationWidget: null,
            validators: null,
            validationErrors: null,
            setValidationErrors: null,
            getParents: null,
          };
          ApplicationWidget = "ApplicationWidget";
          obj.useComponentState = () => {
            const error = new Error("" + ApplicationWidget + " does not support state");
            throw error;
          };
          const _HermesInternal = HermesInternal;
          obj.containerId = "app-widget-" + applicationWidget.applicationId;
          obj.applicationWidget = applicationWidget;
          obj.validators = validators;
          obj.validationErrors = validationErrors;
          obj.setValidationErrors = setValidationErrors;
          obj.getParents = () => {
            const error = new Error("" + "ApplicationWidget" + " does not support parents");
            throw error;
          };
          return obj;
        } else {
          const _Error = Error;
          let error = new Error(
            "ComponentStateContextProvider requires at least one of message, modal, or applicationWidget",
          );
          throw error;
        }
      }, items)}
    >
      {children.children}
    </redux.Provider>
  );
};
export const useComponentState = function useComponentState(type, arg1) {
  const context = noop.useContext(closure_19);
  return context.useComponentState(type, arg1);
};
export { useComponentStateContext };
export { useComponentContainerId };
export const useComponentError = ReactCompilerGating.isReactCompilerEnabled()
  ? function useComponentError(arg0) {
      const validationErrors = noop.useContext(closure_19).validationErrors;
      let tmp;
      if (validationErrors != null) {
        tmp = validationErrors[arg0.id];
      }
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    }
  : function useComponentError(arg0) {
      const validationErrors = noop.useContext(closure_19).validationErrors;
      let tmp;
      if (validationErrors != null) {
        tmp = validationErrors[arg0.id];
      }
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    };
