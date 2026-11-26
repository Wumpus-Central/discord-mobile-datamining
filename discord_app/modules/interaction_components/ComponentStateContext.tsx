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
  } else if (Server.ComponentType.MENU_ACTION_ITEM === type) {
    return type.style !== Server.MenuActionItemStyle.LINK;
  } else {
    if (Server.ComponentType.STRING_SELECT !== type) {
      if (Server.ComponentType.USER_SELECT !== type) {
        if (Server.ComponentType.ROLE_SELECT !== type) {
          if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
            if (Server.ComponentType.CHANNEL_SELECT !== type) {
              if (Server.ComponentType.TEXT_INPUT !== type) {
                if (Server.ComponentType.FILE_UPLOAD !== type) {
                  if (Server.ComponentType.RADIO_GROUP !== type) {
                    if (Server.ComponentType.CHECKBOX_GROUP !== type) {
                      const CHECKBOX = Server.ComponentType.CHECKBOX;
                    }
                  }
                }
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
function useShouldDisableInteractiveComponents(channel_id) {
  const channel = ChannelStore.getChannel(channel_id);
  items = [GuildVerificationStore];
  const items1 = [channel];
  const stateFromStores = channel(504).useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let canChatInGuildResult = null == guild_id;
    if (!canChatInGuildResult) {
      canChatInGuildResult = GuildVerificationStore.canChatInGuild(channel.guild_id);
    }
    return canChatInGuildResult;
  }, items1);
  const obj2 = channel(504);
  const items2 = [LurkingStore];
  const items3 = [channel];
  const stateFromStores1 = channel(504).useStateFromStores(items2, () => {
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(channel.guild_id);
    }
    return isLurkingResult;
  }, items3);
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
  const obj5 = channel(8827);
  const isThreadModerator = channel(7628).useIsThreadModerator(channel);
  const tmpResult = channel(7628);
  let tmp9 = !stateFromStores;
  const canUnarchiveThread = channel(7628).useCanUnarchiveThread(channel);
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
function useGetActionComponentStateForMessage(channel_id, arg1) {
  _require = channel_id;
  items = [InteractionStore];
  const items1 = [channel_id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => InteractionStore.getInteraction(closure_0), items1);
  const tmp2 = useShouldDisableInteractiveComponents(channel_id.channel_id) || arg1;
  dependencyMap = tmp2;
  const items2 = [stateFromStores, tmp2];
  return noop.useCallback((id) => getActionComponentState(stateFromStores, id, closure_2), items2);
}
function getModalActionComponentState() {
  return InteractionComponentTypes.ActionComponentState.NORMAL;
}
function useComponentStateForMessage(channel_id, arg1, id) {
  _require = channel_id;
  const id2 = id;
  items = [LocalInteractionComponentStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => LocalInteractionComponentStateStore.getInteractionComponentState(id.id, id2.id));
  let obj = require("initialize");
  const items1 = [InteractionStore];
  const items2 = [channel_id];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => InteractionStore.getInteraction(closure_0), items2);
  const tmp3 = useShouldDisableInteractiveComponents(channel_id.channel_id) || arg1;
  const message = noop.useContext(closure_20).message;
  closure_129_0 = message;
  const items3 = [message];
  callback = noop.useCallback((customId, localState) => {
    if (null != id) {
      if (null != customId.customId) {
        const channel = ChannelStore.getChannel(id.channel_id);
        if (null != channel) {
          const obj3 = { componentType: customId.type, messageId: null, messageFlags: null, customId: null, componentId: null, applicationId: null, channelId: null, guildId: null, localState: null };
          ({ id: obj2.messageId, flags: obj2.messageFlags } = id);
          ({ customId: obj2.customId, id: obj2.componentId } = customId);
          id = id.applicationId;
          if (id == null) {
            id = id.author.id;
          }
          obj3.applicationId = id;
          ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
          obj3.localState = localState;
          const result = InteractionUtils.executeMessageComponentInteraction(obj3);
        }
      }
    }
  }, items3);
  closure_130_0 = id;
  closure_130_1 = stateFromStores;
  const context = noop.useContext(closure_20);
  closure_130_2 = context;
  const items4 = [id, context];
  const callback1 = noop.useCallback((arg0) => {
    let str = "message";
    if (null != closure_2.modal) {
      str = "modal";
    }
    const tmpResult = id(closure_2[18])(id, arg0, str);
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
  }, items4);
  closure_130_3 = callback1;
  const items5 = [context.validators, callback1, stateFromStores, id.id];
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
  }, items5);
  const validationErrors = context.validationErrors;
  let tmp8;
  if (validationErrors != null) {
    tmp8 = validationErrors[id.id];
  }
  if (tmp8 == null) {
    tmp8 = null;
  }
  const obj4 = { state: stateFromStores, executeStateUpdate: null, isDisabled: null, visualState: null, error: null };
  const items6 = [id, callback, callback1];
  obj4.executeStateUpdate = noop.useCallback((arg0) => {
    let flag = callback1(arg0);
    if (flag) {
      callback(closure_1, arg0);
      flag = true;
    }
    return flag;
  }, items6);
  let tmp9 = tmp3;
  if (tmp3) {
    tmp9 = isInteractionComponent(id);
  }
  obj4.isDisabled = tmp9;
  obj4.visualState = getActionComponentState(stateFromStores1, id, tmp3);
  obj4.error = tmp8;
  return obj4;
}
function useComponentStateForModal(customId, id, arg2) {
  _require = customId;
  importDefault = id;
  dependencyMap = arg2;
  items = [LocalInteractionComponentStateStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => LocalInteractionComponentStateStore.getInteractionComponentState(customId.customId, id.id));
  closure_129_0 = id;
  closure_129_1 = stateFromStores;
  const context = callback.useContext(closure_20);
  closure_129_2 = context;
  const items1 = [id, context];
  callback = callback.useCallback((arg0) => {
    let str = "message";
    if (null != closure_2.modal) {
      str = "modal";
    }
    const tmpResult = id(closure_2[18])(id, arg0, str);
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
      const obj2 = { type: "SET_INTERACTION_COMPONENT_STATE", rootContainerId: customId.customId, componentId: id.id, state };
      DispatcherDefault.dispatch(obj2);
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
  let obj = require("initialize");
  return { state: stateFromStores, executeStateUpdate: callback1, isDisabled: false, visualState: require("InteractionComponentTypes").ActionComponentState.NORMAL, error: tmp7 };
}
const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/ComponentStateContext.tsx");

export { getActionComponentState };
export { useShouldDisableInteractiveComponents };
export function useExecuteComponentInteraction() {
  const message = noop.useContext(closure_20).message;
  items = [message];
  return noop.useCallback((customId, localState) => {
    if (null != id) {
      if (null != customId.customId) {
        const channel = ChannelStore.getChannel(id.channel_id);
        if (null != channel) {
          const obj3 = { componentType: customId.type, messageId: null, messageFlags: null, customId: null, componentId: null, applicationId: null, channelId: null, guildId: null, localState: null };
          ({ id: obj2.messageId, flags: obj2.messageFlags } = id);
          ({ customId: obj2.customId, id: obj2.componentId } = customId);
          id = id.applicationId;
          if (id == null) {
            id = id.author.id;
          }
          obj3.applicationId = id;
          ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
          obj3.localState = localState;
          const result = InteractionUtils.executeMessageComponentInteraction(obj3);
        }
      }
    }
  }, items);
}
export function ComponentStateContextProvider(children) {
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
  items = [message, modal, applicationWidget, flag, validators, validationErrors, setValidationErrors];
  return <redux.Provider value={validationErrors.useMemo(() => {
    if (null != ApplicationWidget) {
      const obj5 = { useComponentState: useComponentStateForMessage.bind(null, tmp, flag), useGetActionComponentState: useGetActionComponentStateForMessage.bind(null, tmp, flag), channelId: null, containerId: null, message: null, validators: null, getParents: null };
      ({ channel_id: obj3.channelId, id: obj3.containerId } = tmp);
      obj5.message = tmp;
      obj5.validators = validators;
      obj5.getParents = function getParents(arg0) {
        return message(applicationWidget[21]).getParents(ApplicationWidget.components, arg0);
      };
      return obj5;
    } else if (null != modal) {
      const obj6 = {
        useComponentState: useComponentStateForModal.bind(null, modal),
        useGetActionComponentState() {
            return closure_1_17;
          },
        channelId: null,
        containerId: null,
        modal: null,
        validators: null,
        validationErrors: null,
        setValidationErrors: null,
        getParents: null
      };
      ({ channelId: obj2.channelId, customId: obj2.containerId } = modal);
      obj6.modal = modal;
      obj6.validators = validators;
      obj6.validationErrors = validationErrors;
      obj6.setValidationErrors = setValidationErrors;
      obj6.getParents = function getParents(arg0) {
        return message(applicationWidget[21]).getParents(components.components, arg0);
      };
      return obj6;
    } else if (null != applicationWidget) {
      const obj = {
        () => {
            const error = new Error("" + "ApplicationWidget" + " does not support state");
            throw error;
          },
        () => {
            const error = new Error("" + "ApplicationWidget" + " does not support state");
            throw error;
          },
        containerId: null,
        applicationWidget: null,
        validators: null,
        validationErrors: null,
        setValidationErrors: null,
        getParents: null
      };
      const _HermesInternal = HermesInternal;
      obj.containerId = "app-widget-" + applicationWidget.applicationId;
      obj.applicationWidget = applicationWidget;
      obj.validators = validators;
      obj.validationErrors = validationErrors;
      obj.setValidationErrors = setValidationErrors;
      ApplicationWidget = "ApplicationWidget";
      obj.getParents = () => {
        const error = new Error("" + ApplicationWidget + " does not support parents");
        throw error;
      };
      return obj;
    } else {
      const _Error = Error;
      let error = new Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
      throw error;
    }
  }, items)}>{children.children}</redux.Provider>;
}
export function useComponentState(style, arg1) {
  const context = noop.useContext(closure_20);
  return context.useComponentState(style, arg1);
}
export function useGetActionComponentState() {
  const context = noop.useContext(closure_20);
  return context.useGetActionComponentState();
}
export function useComponentStateContext() {
  return noop.useContext(closure_20);
}
export function useComponentContainerId() {
  return noop.useContext(closure_20).containerId;
}
export function useComponentError(component) {
  const validationErrors = noop.useContext(closure_20).validationErrors;
  let tmp;
  if (validationErrors != null) {
    tmp = validationErrors[component.id];
  }
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
}