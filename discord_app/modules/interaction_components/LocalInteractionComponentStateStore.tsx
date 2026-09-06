// discord_app/modules/interaction_components/LocalInteractionComponentStateStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import LimitedMapDefault from "../../lib/LimitedMap.tsx";

let closure_0 = new LimitedMapDefault(196606);
let closure_1 = 0;
const tmp2 = new LimitedMapDefault(196606);
let closure_2 = new LimitedMapDefault(196606);
const tmp3 = new LimitedMapDefault(196606);
let closure_3 = new LimitedMapDefault(196606);
const Store = initializeDefault.Store;
class LocalInteractionComponentStateStore extends Store {}
const prototype = LocalInteractionComponentStateStore.prototype;
prototype["getInteractionComponentStates"] = function getInteractionComponentStates() {
  return closure_0;
};
prototype["getInteractionComponentStateVersion"] = function getInteractionComponentStateVersion() {
  return closure_1;
};
prototype["getInteractionComponentState"] = function getInteractionComponentState(customId, id) {
  value = closure_0.get(customId);
  let tmp = null;
  if (null != value) {
    value = value.get(id);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
LocalInteractionComponentStateStore.displayName = "LocalInteractionComponentStateStore";
const localInteractionComponentStateStore = new LocalInteractionComponentStateStore(DispatcherDefault, {
  LOGOUT: function handleInit() {
    closure_0.clear();
    closure_2.clear();
    closure_3.clear();
    closure_1 = closure_1 + 1;
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function handleQueueActionComponentState(state) {
    ({ messageId, nonce, componentId } = state);
    const result = closure_2.set(messageId, nonce);
    const result1 = closure_3.set(nonce, { messageId, componentId });
    let map = closure_0.get(messageId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result2 = map.set(componentId, state.state);
    const result3 = closure_0.set(messageId, map);
    closure_1 = closure_1 + 1;
  },
  SET_INTERACTION_COMPONENT_STATE: function handleSetInteractionComponentState(rootContainerId) {
    rootContainerId = rootContainerId.rootContainerId;
    ({ componentId, state } = rootContainerId);
    let map = closure_0.get(rootContainerId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(componentId, state);
    const result1 = closure_0.set(rootContainerId, map);
    closure_1 = closure_1 + 1;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    if (closure_0.has(id)) {
      value = closure_2.get(id);
      if (null != value) {
        closure_3.delete(value);
      }
      closure_2.delete(id);
      closure_0.delete(id);
      closure_1 = closure_1 + 1;
    } else {
      return false;
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (closure_0.has(message.id)) {
        const id = message.id;
        value = closure_2.get(id);
        if (null != value) {
          closure_3.delete(value);
        }
        closure_2.delete(id);
        closure_0.delete(id);
        closure_1 = closure_1 + 1;
      }
    }
    return false;
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      value = closure_3.get(nonce);
      if (null == value) {
        return false;
      } else {
        closure_2.delete(value.messageId);
        closure_3.delete(nonce);
        closure_1 = closure_1 + 1;
      }
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      value = closure_3.get(nonce);
      if (null == value) {
        return false;
      } else {
        ({ componentId, messageId } = value);
        value = closure_0.get(messageId);
        if (null != value) {
          if (value.has(componentId)) {
            value.delete(componentId);
            if (0 === value.size) {
              closure_0.delete(messageId);
            }
            closure_1 = closure_1 + 1;
          }
        }
      }
    }
  },
  CLEAR_INTERACTION_MODAL_STATE: function handleClearInteractionModalState(customId) {
    closure_0.delete(customId.customId);
    closure_1 = closure_1 + 1;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/LocalInteractionComponentStateStore.tsx");

export default localInteractionComponentStateStore;
