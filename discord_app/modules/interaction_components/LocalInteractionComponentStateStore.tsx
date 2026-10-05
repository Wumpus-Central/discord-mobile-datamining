// === Module 7796: LocalInteractionComponentStateStore ===

// Module 7796 (LocalInteractionComponentStateStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LimitedMapDefault from "LimitedMap" /* 7797 */;
import size from "module_2" /* 2 */;

let map;

const React = new LimitedMapDefault(196606);
let closure_1 = 0;
const tmp2 = new LimitedMapDefault(196606);
let closure_2 = new LimitedMapDefault(196606);
const tmp3 = new LimitedMapDefault(196606);
let closure_3 = new LimitedMapDefault(196606);
new LimitedMapDefault(196606);
const Store = get_initializedDefault.Store;
class LocalInteractionComponentStateStore extends Store {
  getInteractionComponentStates() {
    return closure_0;
  }
  getInteractionComponentStateVersion() {
    return closure_1;
  }
  getInteractionComponentState(customId, id) {
    const value = closure_0.get(customId);
    let tmp = null;
    if (null != value) {
      let value2 = value.get(id);
      if (value2 == null) {
        value2 = null;
      }
      tmp = value2;
    }
    return tmp;
  }
}
const prototype = LocalInteractionComponentStateStore.prototype;
LocalInteractionComponentStateStore.displayName = "LocalInteractionComponentStateStore";
const obj = {
  LOGOUT: function handleInit() {
    closure_0.clear();
    closure_2.clear();
    closure_3.clear();
    closure_1 = closure_1 + 1;
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function handleQueueActionComponentState(state) {
    let componentId;
    let messageId;
    let nonce;
    ({ messageId, nonce, componentId } = state);
    state = state.state;
    const result = closure_2.set(messageId, nonce);
    const result1 = closure_3.set(nonce, { messageId, componentId });
    map = closure_0.get(messageId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    const result2 = map.set(componentId, state);
    const result3 = closure_0.set(messageId, map);
    closure_1 = closure_1 + 1;
  },
  SET_INTERACTION_COMPONENT_STATE: function handleSetInteractionComponentState(rootContainerId) {
    let componentId;
    let state;
    rootContainerId = rootContainerId.rootContainerId;
    ({ componentId, state } = rootContainerId);
    map = closure_0.get(rootContainerId);
    if (map == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
    const result = map.set(componentId, state);
    const result1 = closure_0.set(rootContainerId, map);
    closure_1 = closure_1 + 1;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    if (closure_0.has(id)) {
      const value = closure_2.get(id);
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
        const value = closure_2.get(id);
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
      const value = closure_3.get(nonce);
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
    let componentId;
    let messageId;
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      const value = closure_3.get(nonce);
      if (null == value) {
        return false;
      } else {
        ({ componentId, messageId } = value);
        const value2 = closure_0.get(messageId);
        if (null != value2) {
          if (value2.has(componentId)) {
            value2.delete(componentId);
            if (0 === value2.size) {
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
  }
};
const localInteractionComponentStateStore = new LocalInteractionComponentStateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/interaction_components/LocalInteractionComponentStateStore.tsx");

export default localInteractionComponentStateStore;