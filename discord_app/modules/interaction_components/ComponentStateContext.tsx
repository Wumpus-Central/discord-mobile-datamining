// discord_app/modules/interaction_components/ComponentStateContext.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "useMountLayoutEffect";
import deleteNonce from "deleteNonce";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import recomputeGuild from "recomputeGuild";
import mergeGuildAvatar from "mergeGuildAvatar";
import getInteractionComponentStates from "getInteractionComponentStates";
import { jsx } from "set";
import { PermissionOverwriteType } from "../../flow/Server.tsx";
import { ActionComponentState } from "InteractionComponentTypes.tsx";

const require = arg1;
function isInteractionComponent(type) {
  type = type.type;
  if (PermissionOverwriteType.ComponentType.BUTTON === type) {
    return type.style !== tmp(1954).ButtonStyle.LINK;
  } else {
    if (tmp(1954).ComponentType.STRING_SELECT !== type) {
      if (tmp(1954).ComponentType.USER_SELECT !== type) {
        if (tmp(1954).ComponentType.ROLE_SELECT !== type) {
          if (tmp(1954).ComponentType.MENTIONABLE_SELECT !== type) {
            if (tmp(1954).ComponentType.CHANNEL_SELECT !== type) {
              if (tmp(1954).ComponentType.ACTION_ROW !== type) {
                const TEXT_INPUT = tmp(1954).ComponentType.TEXT_INPUT;
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
  let LOADING = ActionComponentState.ActionComponentState.NORMAL;
  let tmp3 = null != interaction;
  if (tmp3) {
    tmp3 = interaction.state !== tmp(4592).InteractionState.FAILED;
  }
  let DISABLED = LOADING;
  if (!tmp3) {
    if (flag) {
      flag = isInteractionComponent(id);
    }
    if (flag) {
      DISABLED = tmp(4594).ActionComponentState.DISABLED;
    }
    return DISABLED;
  } else {
    if (interaction.data.interactionType !== tmp(1954).InteractionTypes.MESSAGE_COMPONENT) {
      if (isInteractionComponent(id)) {
        LOADING = tmp(4594).ActionComponentState.DISABLED;
      }
    }
    LOADING = tmp(4594).ActionComponentState.LOADING;
  }
}
function useShouldDisableInteractiveComponents(channel_id) {
  channel = channel.getChannel(channel_id);
  const items = [recomputeGuild];
  const items1 = [channel];
  const stateFromStores = channel(589).useStateFromStores(items, () => {
    let guild_id;
    if (channel != null) {
      guild_id = tmp.guild_id;
    }
    let canChatInGuildResult = null == guild_id;
    if (!canChatInGuildResult) {
      canChatInGuildResult = outer1_9.canChatInGuild(tmp.guild_id);
    }
    return canChatInGuildResult;
  }, items1);
  const obj2 = channel(589);
  const items2 = [initialize];
  const items3 = [channel];
  const stateFromStores1 = channel(589).useStateFromStores(items2, () => {
    let guild_id;
    if (channel != null) {
      guild_id = tmp.guild_id;
    }
    let isLurkingResult = null != guild_id;
    if (isLurkingResult) {
      isLurkingResult = outer1_6.isLurking(tmp.guild_id);
    }
    return isLurkingResult;
  }, items3);
  const obj3 = channel(589);
  const items4 = [trackCommunicationDisabled, mergeGuildAvatar];
  const stateFromStores2 = channel(589).useStateFromStores(items4, () => {
    const currentUser = outer1_10.getCurrentUser();
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
        const member = outer1_8.getMember(guild_id1, currentUser.id);
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
  const obj4 = channel(589);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmpResult = tmp(5951);
  const isThreadModerator = tmpResult.useIsThreadModerator(channel);
  tmpResult = tmp(5951);
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
    tmp9 = callback(obj5.useCurrentUserCommunicationDisabled(guild_id), 2)[1];
  }
  return tmp9;
}
function useComponentStateForMessage(channel_id, arg1, id) {
  let _require = channel_id;
  let stateFromStores = id;
  let obj = _require(callback[13]);
  const items = [getInteractionComponentStates];
  stateFromStores = obj.useStateFromStores(items, () => outer1_11.getInteractionComponentState(id.id, stateFromStores.id));
  const items1 = [deleteNonce];
  const items2 = [channel_id];
  const stateFromStores1 = _require(callback[13]).useStateFromStores(items1, () => outer1_5.getInteraction(closure_0), items2);
  const tmp3 = useShouldDisableInteractiveComponents(channel_id.channel_id) || arg1;
  _require = id;
  const context = importAllResult.useContext(closure_18);
  callback = context;
  const items3 = [id, context];
  callback = importAllResult.useCallback((arg0) => {
    let str = "message";
    if (null != context.modal) {
      str = "modal";
    }
    const tmpResult = stateFromStores(context[16])(closure_0, arg0, str);
    closure_0 = tmpResult;
    const setValidationErrors = context.setValidationErrors;
    if (setValidationErrors != null) {
      setValidationErrors((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[tmpResult.id] = tmpResult;
        return obj;
      });
    }
    return null == tmpResult;
  }, items3);
  id = callback;
  const items4 = [context.validators, callback, stateFromStores, id.id];
  const effect = importAllResult.useEffect(() => {
    function currentValidate() {
      return callback(closure_1);
    }
    let validators = context.validators;
    if (validators != null) {
      validators.add(currentValidate);
    }
    return () => {
      const validators = outer1_2.validators;
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
  obj = {
    state: stateFromStores,
    executeStateUpdate: importAllResult.useCallback((arg0) => {
      if (callback(arg0)) {
        const channel = outer1_7.getChannel(id.channel_id);
        let tmp5 = null != channel;
        if (tmp5) {
          tmp5 = null != stateFromStores.customId;
        }
        if (tmp5) {
          let obj = id(callback[17]);
          obj = { componentType: null, messageId: null, messageFlags: null, customId: null, componentId: null, applicationId: null, channelId: null, guildId: null, localState: null };
          obj[0] = stateFromStores.type;
          ({ id: obj2[1], flags: obj2[2] } = id);
          ({ customId: obj2[3], id: obj2[4] } = stateFromStores);
          obj[5] = id;
          ({ id: obj2[6], guild_id: obj2[7] } = channel);
          obj[8] = arg0;
          const result = obj.executeMessageComponentInteraction(obj);
        }
        return true;
      } else {
        return false;
      }
    }, items5),
    isDisabled: null,
    visualState: null,
    error: null
  };
  items5 = [, , , , , , , ];
  ({ channel_id: arr6[0], flags: arr6[1], id: arr6[2] } = channel_id);
  ({ customId: arr6[3], type: arr6[4], id: arr6[5] } = id);
  items5[6] = id;
  items5[7] = callback;
  let tmp8 = tmp3;
  if (tmp3) {
    tmp8 = isInteractionComponent(id);
  }
  obj[2] = tmp8;
  obj[3] = getActionComponentState(stateFromStores1, id, tmp3);
  obj[4] = tmp7;
  return obj;
}
function useComponentStateForModal(customId, id) {
  let _require = customId;
  let stateFromStores = id;
  let context = arg2;
  let obj = _require(context[13]);
  const items = [getInteractionComponentStates];
  stateFromStores = obj.useStateFromStores(items, () => outer1_11.getInteractionComponentState(id.customId, stateFromStores.id));
  let callback = stateFromStores;
  _require = id;
  context = undefined;
  callback = undefined;
  context = callback.useContext(closure_18);
  const items1 = [id, context];
  callback = callback.useCallback((arg0) => {
    let str = "message";
    if (null != context.modal) {
      str = "modal";
    }
    const tmpResult = stateFromStores(context[16])(closure_0, arg0, str);
    closure_0 = tmpResult;
    const setValidationErrors = context.setValidationErrors;
    if (setValidationErrors != null) {
      setValidationErrors((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[tmpResult.id] = tmpResult;
        return obj;
      });
    }
    return null == tmpResult;
  }, items1);
  const items2 = [context.validators, callback, stateFromStores, id.id];
  const effect = callback.useEffect(() => {
    function currentValidate() {
      return callback(closure_1);
    }
    let validators = context.validators;
    if (validators != null) {
      validators.add(currentValidate);
    }
    return () => {
      const validators = outer1_2.validators;
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
  const callback1 = callback.useCallback((arg0) => {
    let tmp = null == arg0;
    if (!tmp) {
      let obj = stateFromStores(context[18]);
      obj = { type: "SET_INTERACTION_COMPONENT_STATE", rootContainerId: null, componentId: null, state: null };
      obj[1] = id.customId;
      obj[2] = stateFromStores.id;
      obj[3] = arg0;
      obj.dispatch(obj);
      tmp = callback(arg0);
    }
    return tmp;
  }, items3);
  stateFromStores(context[19])(() => {
    if (null == callback) {
      callback1(context);
    }
  });
  if (stateFromStores == null) {
    stateFromStores = callback(callback.useState(arg2), 1)[0];
  }
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  obj = { state: stateFromStores, executeStateUpdate: callback1, isDisabled: false, visualState: _require(tmp2[11]).ActionComponentState.NORMAL, error: tmp7 };
  return obj;
}
let c4 = importAllResult;
let context = importAllResult.createContext(null);
let result = require("deleteNonce").fileFinishedImporting("modules/interaction_components/ComponentStateContext.tsx");

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
  return <redux.Provider value={validationErrors.useMemo(() => {
    if (null != ApplicationWidget) {
      let obj = { useComponentState: null, channelId: null, containerId: null, message: null, validators: null, getParents: null };
      obj[0] = outer1_16.bind(null, tmp, flag);
      ({ channel_id: obj3[1], id: obj3[2] } = tmp);
      obj[3] = tmp;
      obj[4] = validators;
      obj[5] = function getParents(arg0) {
        return ApplicationWidget(outer1_2[20]).getParents(ApplicationWidget.components, arg0);
      };
      return obj;
    } else if (null != modal) {
      obj = { useComponentState: null, channelId: null, containerId: null, modal: null, validators: null, validationErrors: null, setValidationErrors: null, getParents: null };
      obj[0] = outer1_17.bind(null, tmp18);
      ({ channelId: obj2[1], customId: obj2[2] } = tmp18);
      obj[3] = tmp18;
      obj[4] = validators;
      obj[5] = validationErrors;
      obj[6] = setValidationErrors;
      obj[7] = function getParents(arg0) {
        return ApplicationWidget(outer1_2[20]).getParents(components.components, arg0);
      };
      return obj;
    } else if (null != applicationWidget) {
      obj = { useComponentState: null, containerId: null, applicationWidget: null, validators: null, validationErrors: null, setValidationErrors: null, getParents: null };
      ApplicationWidget = "ApplicationWidget";
      obj[0] = () => {
        const error = new Error("" + ApplicationWidget + " does not support state");
        throw error;
      };
      const _HermesInternal = HermesInternal;
      obj[1] = "app-widget-" + tmp19.applicationId;
      obj[2] = tmp19;
      obj[3] = validators;
      obj[4] = validationErrors;
      obj[5] = setValidationErrors;
      obj[6] = () => {
        const error = new Error("" + "ApplicationWidget" + " does not support parents");
        throw error;
      };
      return obj;
    } else {
      const _Error = Error;
      let error = new Error("ComponentStateContextProvider requires at least one of message, modal, or applicationWidget");
      throw error;
    }
  }, items)}>{arg0.children}</redux.Provider>;
};
export const useComponentState = function useComponentState(type, arg1) {
  const context = importAllResult.useContext(closure_18);
  return context.useComponentState(type, arg1);
};
export const useComponentStateContext = function useComponentStateContext() {
  return importAllResult.useContext(closure_18);
};
export const useComponentContainerId = function useComponentContainerId() {
  return importAllResult.useContext(closure_18).containerId;
};
export const useComponentError = function useComponentError(component) {
  const validationErrors = importAllResult.useContext(closure_18).validationErrors;
  let tmp;
  if (validationErrors != null) {
    tmp = validationErrors[component.id];
  }
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};