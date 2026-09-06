// discord_app/modules/interaction_components/ComponentStateContext.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Server from "../../flow/Server.tsx";
import InteractionComponentTypes from "InteractionComponentTypes.tsx";
import useMountEffectDefault from "../../hooks/useMountEffect.tsx";
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
    return type.style !== tmp(1894).ButtonStyle.LINK;
  } else {
    if (tmp(1894).ComponentType.STRING_SELECT !== type) {
      if (tmp(1894).ComponentType.USER_SELECT !== type) {
        if (tmp(1894).ComponentType.ROLE_SELECT !== type) {
          if (tmp(1894).ComponentType.MENTIONABLE_SELECT !== type) {
            if (tmp(1894).ComponentType.CHANNEL_SELECT !== type) {
              if (tmp(1894).ComponentType.ACTION_ROW !== type) {
                const TEXT_INPUT = tmp(1894).ComponentType.TEXT_INPUT;
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
function getActionComponentState(interaction, id, shouldDisableInteractiveComponents) {
  let flag = shouldDisableInteractiveComponents;
  if (shouldDisableInteractiveComponents === undefined) {
    flag = false;
  }
  let LOADING = InteractionComponentTypes.ActionComponentState.NORMAL;
  let tmp3 = null != interaction;
  if (tmp3) {
    tmp3 = interaction.state !== tmp(4790).InteractionState.FAILED;
  }
  let DISABLED = LOADING;
  if (!tmp3) {
    if (flag) {
      flag = isInteractionComponent(id);
    }
    if (flag) {
      DISABLED = tmp(4792).ActionComponentState.DISABLED;
    }
    return DISABLED;
  } else {
    if (interaction.data.interactionType !== tmp(1894).InteractionTypes.MESSAGE_COMPONENT) {
      if (isInteractionComponent(id)) {
        LOADING = tmp(4792).ActionComponentState.DISABLED;
      }
    }
    LOADING = tmp(4792).ActionComponentState.LOADING;
  }
}
function useShouldDisableInteractiveComponents(channel_id) {
  const channel = ChannelStore.getChannel(channel_id);
  const items = [GuildVerificationStore];
  const items1 = [channel];
  const stateFromStores = channel(504).useStateFromStores(
    items,
    () => {
      let guild_id;
      if (channel != null) {
        guild_id = tmp.guild_id;
      }
      let canChatInGuildResult = null == guild_id;
      if (!canChatInGuildResult) {
        canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp.guild_id);
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
        guild_id = tmp.guild_id;
      }
      let isLurkingResult = null != guild_id;
      if (isLurkingResult) {
        isLurkingResult = LurkingStore.isLurking(tmp.guild_id);
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
      guild_id = tmp2.guild_id;
    }
    let flag = null;
    if (null != guild_id) {
      flag = null;
      if (null != currentUser) {
        let guild_id1;
        if (tmp2 != null) {
          guild_id1 = tmp2.guild_id;
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
  let tmpResult = tmp(7269);
  const isThreadModerator = tmpResult.useIsThreadModerator(channel);
  tmpResult = tmp(7269);
  let tmp9 = !stateFromStores;
  const canUnarchiveThread = tmpResult.useCanUnarchiveThread(channel);
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
}
function useComponentStateForMessage(channel_id, arg1, id) {
  _require = channel_id;
  let obj = require("initialize");
  const items = [LocalInteractionComponentStateStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    LocalInteractionComponentStateStore.getInteractionComponentState(channel_id.id, id.id),
  );
  const items1 = [InteractionStore];
  const items2 = [channel_id];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => InteractionStore.getInteraction(closure_0),
    items2,
  );
  const tmp3 = useShouldDisableInteractiveComponents(channel_id.channel_id) || arg1;
  closure_129_0 = id;
  closure_129_1 = stateFromStores;
  const context = noop.useContext(closure_18);
  closure_129_2 = context;
  const items3 = [id, context];
  callback = noop.useCallback((arg0) => {
    let str = "message";
    if (null != closure_2.modal) {
      str = "modal";
    }
    const tmpResult = id(closure_2[16])(id, arg0, str);
    id = tmpResult;
    const setValidationErrors = closure_2.setValidationErrors;
    if (setValidationErrors != null) {
      setValidationErrors((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[id.id] = id;
        return obj;
      });
    }
    return null == tmpResult;
  }, items3);
  closure_129_3 = callback;
  const items4 = [context.validators, callback, stateFromStores, id.id];
  const effect = noop.useEffect(() => {
    function currentValidate() {
      return stateFromStores(id);
    }
    validators = validators.validators;
    if (validators != null) {
      validators.add(currentValidate);
    }
    return () => {
      validators = validators.validators;
      if (validators != null) {
        validators.delete(currentValidate);
      }
    };
  }, items4);
  const validationErrors = context.validationErrors;
  let tmp7;
  if (validationErrors != null) {
    tmp7 = validationErrors[id.id];
  }
  if (tmp7 == null) {
    tmp7 = null;
  }
  id = channel_id.applicationId;
  if (id == null) {
    id = channel_id.author.id;
  }
  obj = { state: stateFromStores, executeStateUpdate: null, isDisabled: null, visualState: null, error: null };
  const items5 = [, , , , , , ,];
  ({ channel_id: arr6[0], flags: arr6[1], id: arr6[2] } = channel_id);
  ({ customId: arr6[3], type: arr6[4], id: arr6[5] } = id);
  items5[6] = id;
  items5[7] = callback;
  obj.executeStateUpdate = noop.useCallback((localState) => {
    if (callback(localState)) {
      const channel = ChannelStore.getChannel(channel_id.channel_id);
      let tmp5 = null != channel;
      if (tmp5) {
        tmp5 = null != id.customId;
      }
      if (tmp5) {
        const obj = {
          componentType: id.type,
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
        ({ customId: obj2.customId, id: obj2.componentId } = id);
        obj.applicationId = id;
        ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
        obj.localState = localState;
        const result = obj.executeMessageComponentInteraction(obj);
      }
      return true;
    } else {
      return false;
    }
  }, items5);
  let tmp8 = tmp3;
  if (tmp3) {
    tmp8 = isInteractionComponent(id);
  }
  obj.isDisabled = tmp8;
  obj.visualState = getActionComponentState(stateFromStores1, id, tmp3);
  obj.error = tmp7;
  return obj;
}
function useComponentStateForModal(customId, id, arg2) {
  _require = customId;
  importDefault = id;
  dependencyMap = arg2;
  let obj = require("initialize");
  const items = [LocalInteractionComponentStateStore];
  let stateFromStores = obj.useStateFromStores(items, () =>
    LocalInteractionComponentStateStore.getInteractionComponentState(customId.customId, id.id),
  );
  closure_129_0 = id;
  closure_129_1 = stateFromStores;
  const context = callback.useContext(closure_18);
  closure_129_2 = context;
  const items1 = [id, context];
  callback = callback.useCallback((arg0) => {
    let str = "message";
    if (null != closure_2.modal) {
      str = "modal";
    }
    const tmpResult = id(closure_2[16])(id, arg0, str);
    id = tmpResult;
    const setValidationErrors = closure_2.setValidationErrors;
    if (setValidationErrors != null) {
      setValidationErrors((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[id.id] = id;
        return obj;
      });
    }
    return null == tmpResult;
  }, items1);
  closure_129_3 = callback;
  const items2 = [context.validators, callback, stateFromStores, id.id];
  const effect = callback.useEffect(() => {
    function currentValidate() {
      return stateFromStores(id);
    }
    validators = validators.validators;
    if (validators != null) {
      validators.add(currentValidate);
    }
    return () => {
      validators = validators.validators;
      if (validators != null) {
        validators.delete(currentValidate);
      }
    };
  }, items2);
  const validationErrors = context.validationErrors;
  let tmp7;
  if (validationErrors != null) {
    tmp7 = validationErrors[id.id];
  }
  if (tmp7 == null) {
    tmp7 = null;
  }
  const items3 = [customId.customId, id.id, callback];
  const callback1 = callback.useCallback((state) => {
    let tmp = null == state;
    if (!tmp) {
      const obj = {
        type: "SET_INTERACTION_COMPONENT_STATE",
        rootContainerId: customId.customId,
        componentId: id.id,
        state,
      };
      obj.dispatch(obj);
      tmp = callback(state);
    }
    return tmp;
  }, items3);
  useMountEffectDefault(() => {
    if (null == stateFromStores) {
      callback1(closure_2);
    }
  });
  if (stateFromStores == null) {
    stateFromStores = stateFromStores(callback.useState(arg2), 1)[0];
  }
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  obj = {
    state: stateFromStores,
    executeStateUpdate: callback1,
    isDisabled: false,
    visualState: require("InteractionComponentTypes").ActionComponentState.NORMAL,
    error: tmp7,
  };
  return obj;
}
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/ComponentStateContext.tsx");

export { getActionComponentState };
export { useShouldDisableInteractiveComponents };
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
          let obj = {
            useComponentState: useComponentStateForMessage.bind(null, tmp, flag),
            channelId: null,
            containerId: null,
            message: null,
            validators: null,
            getParents: null,
          };
          ({ channel_id: obj3.channelId, id: obj3.containerId } = tmp);
          obj.message = tmp;
          obj.validators = validators;
          obj.getParents = function getParents(arg0) {
            return message(applicationWidget[20]).getParents(ApplicationWidget.components, arg0);
          };
          return obj;
        } else if (null != modal) {
          obj = {
            useComponentState: useComponentStateForModal.bind(null, tmp18),
            channelId: null,
            containerId: null,
            modal: null,
            validators: null,
            validationErrors: null,
            setValidationErrors: null,
            getParents: null,
          };
          ({ channelId: obj2.channelId, customId: obj2.containerId } = tmp18);
          obj.modal = tmp18;
          obj.validators = validators;
          obj.validationErrors = validationErrors;
          obj.setValidationErrors = setValidationErrors;
          obj.getParents = function getParents(arg0) {
            return message(applicationWidget[20]).getParents(components.components, arg0);
          };
          return obj;
        } else if (null != applicationWidget) {
          obj = {
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
          obj.containerId = "app-widget-" + tmp19.applicationId;
          obj.applicationWidget = tmp19;
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
      {arg0.children}
    </redux.Provider>
  );
};
export const useComponentState = function useComponentState(type, arg1) {
  const context = noop.useContext(closure_18);
  return context.useComponentState(type, arg1);
};
export const useComponentStateContext = function useComponentStateContext() {
  return noop.useContext(closure_18);
};
export const useComponentContainerId = function useComponentContainerId() {
  return noop.useContext(closure_18).containerId;
};
export const useComponentError = function useComponentError(component) {
  const validationErrors = noop.useContext(closure_18).validationErrors;
  let tmp;
  if (validationErrors != null) {
    tmp = validationErrors[component.id];
  }
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
