// === Module 8022: getInteractionComponentStates ===

// Module 8022 (getInteractionComponentStates)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import LimitedMapDefault from "LimitedMap" /* 8023 */;

let closure_0 = new LimitedMapDefault(196606);
let c1 = 0;
const tmp2 = new LimitedMapDefault(196606);
let closure_2 = new LimitedMapDefault(196606);
const tmp3 = new LimitedMapDefault(196606);
let closure_3 = new LimitedMapDefault(196606);
const Store = initializeDefault.Store;
class LocalInteractionComponentStateStore extends Store {
}
const prototype = LocalInteractionComponentStateStore.prototype;
prototype["getInteractionComponentStates"] = function getInteractionComponentStates() {
  return closure_0;
};
prototype["getInteractionComponentStateVersion"] = function getInteractionComponentStateVersion() {
  return c1;
};
prototype["getInteractionComponentState"] = function getInteractionComponentState(closure_0, id) {
  let value = store.get(closure_0);
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
const localInteractionComponentStateStore = new LocalInteractionComponentStateStore(dispatcherDefault, {
  LOGOUT: function handleInit() {
    store.clear();
    store2.clear();
    store3.clear();
    closure_1 = closure_1 + 1;
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function handleQueueActionComponentState(state) {
    ({ messageId, nonce, componentId } = state);
    const result = store2.set(messageId, nonce);
    const result1 = store3.set(nonce, { messageId, componentId });
    let map = store.get(messageId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result2 = map.set(componentId, state.state);
    const result3 = store.set(messageId, map);
    closure_1 = closure_1 + 1;
  },
  SET_INTERACTION_COMPONENT_STATE: function handleSetInteractionComponentState(rootContainerId) {
    rootContainerId = rootContainerId.rootContainerId;
    ({ componentId, state } = rootContainerId);
    let map = store.get(rootContainerId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(componentId, state);
    const result1 = store.set(rootContainerId, map);
    closure_1 = closure_1 + 1;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    if (store.has(id)) {
      const value = store2.get(id);
      if (null != value) {
        store3.delete(value);
      }
      store2.delete(id);
      obj.delete(id);
      closure_1 = closure_1 + 1;
    } else {
      return false;
    }
    obj = store;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (store.has(message.id)) {
        const id = message.id;
        const value = store2.get(id);
        if (null != value) {
          store3.delete(value);
        }
        store2.delete(id);
        obj.delete(id);
        closure_1 = closure_1 + 1;
      }
      obj = store;
    }
    return false;
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      const value = store3.get(nonce);
      if (null == value) {
        return false;
      } else {
        store2.delete(value.messageId);
        obj.delete(nonce);
        closure_1 = closure_1 + 1;
      }
      obj = store3;
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      let value = store3.get(nonce);
      if (null == value) {
        return false;
      } else {
        ({ componentId, messageId } = value);
        value = store.get(messageId);
        if (null != value) {
          if (value.has(componentId)) {
            value.delete(componentId);
            if (0 === value.size) {
              store.delete(messageId);
            }
            closure_1 = closure_1 + 1;
          }
        }
      }
    }
  },
  CLEAR_INTERACTION_MODAL_STATE: function handleClearInteractionModalState(customId) {
    store.delete(customId.customId);
    closure_1 = closure_1 + 1;
  }
});
let obj = {
  LOGOUT: function handleInit() {
    store.clear();
    store2.clear();
    store3.clear();
    closure_1 = closure_1 + 1;
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function handleQueueActionComponentState(state) {
    ({ messageId, nonce, componentId } = state);
    const result = store2.set(messageId, nonce);
    const result1 = store3.set(nonce, { messageId, componentId });
    let map = store.get(messageId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result2 = map.set(componentId, state.state);
    const result3 = store.set(messageId, map);
    closure_1 = closure_1 + 1;
  },
  SET_INTERACTION_COMPONENT_STATE: function handleSetInteractionComponentState(rootContainerId) {
    rootContainerId = rootContainerId.rootContainerId;
    ({ componentId, state } = rootContainerId);
    let map = store.get(rootContainerId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(componentId, state);
    const result1 = store.set(rootContainerId, map);
    closure_1 = closure_1 + 1;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    if (store.has(id)) {
      const value = store2.get(id);
      if (null != value) {
        store3.delete(value);
      }
      store2.delete(id);
      obj.delete(id);
      closure_1 = closure_1 + 1;
    } else {
      return false;
    }
    obj = store;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (store.has(message.id)) {
        const id = message.id;
        const value = store2.get(id);
        if (null != value) {
          store3.delete(value);
        }
        store2.delete(id);
        obj.delete(id);
        closure_1 = closure_1 + 1;
      }
      obj = store;
    }
    return false;
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      const value = store3.get(nonce);
      if (null == value) {
        return false;
      } else {
        store2.delete(value.messageId);
        obj.delete(nonce);
        closure_1 = closure_1 + 1;
      }
      obj = store3;
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      let value = store3.get(nonce);
      if (null == value) {
        return false;
      } else {
        ({ componentId, messageId } = value);
        value = store.get(messageId);
        if (null != value) {
          if (value.has(componentId)) {
            value.delete(componentId);
            if (0 === value.size) {
              store.delete(messageId);
            }
            closure_1 = closure_1 + 1;
          }
        }
      }
    }
  },
  CLEAR_INTERACTION_MODAL_STATE: function handleClearInteractionModalState(customId) {
    store.delete(customId.customId);
    closure_1 = closure_1 + 1;
  }
};
const tmp4 = new LimitedMapDefault(196606);
let result = require("set").fileFinishedImporting("modules/interaction_components/LocalInteractionComponentStateStore.tsx");

export default localInteractionComponentStateStore;