// === Module 7897: getInteractionComponentStates ===

// Module 7897 (getInteractionComponentStates)
import { Store } from "initialize";

let c0 = new require("LimitedMap")(196606);
let c1 = 0;
let tmp2 = new require("LimitedMap")(196606);
let tmp3 = new require("LimitedMap")(196606);
let c3 = new require("LimitedMap")(196606);
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
  let value = tmp2.get(closure_0);
  let tmp = null;
  if (null != value) {
    value = value.get(id);
    if (value == null) {
      value = null;
    }
    tmp = value;
    tmp2 = id;
  }
  return tmp;
};
LocalInteractionComponentStateStore.displayName = "LocalInteractionComponentStateStore";
const localInteractionComponentStateStore = new LocalInteractionComponentStateStore(require("dispatcher"), {
  LOGOUT: function handleInit() {
    tmp2.clear();
    tmp3.clear();
    tmp4.clear();
    closure_1 = closure_1 + 1;
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function handleQueueActionComponentState(state) {
    let componentId;
    let messageId;
    let nonce;
    ({ messageId, nonce, componentId } = state);
    const result = tmp3.set(messageId, nonce);
    const result1 = tmp4.set(nonce, { messageId, componentId });
    let map = tmp2.get(messageId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
      tmp3 = globalThis;
      tmp4 = new.target;
    }
    const result2 = map.set(componentId, state.state);
    const result3 = tmp2.set(messageId, map);
    closure_1 = closure_1 + 1;
  },
  SET_INTERACTION_COMPONENT_STATE: function handleSetInteractionComponentState(rootContainerId) {
    let componentId;
    let state;
    rootContainerId = rootContainerId.rootContainerId;
    ({ componentId, state } = rootContainerId);
    let map = tmp2.get(rootContainerId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(componentId, state);
    const result1 = tmp2.set(rootContainerId, map);
    closure_1 = closure_1 + 1;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    if (tmp2.has(id)) {
      const value = tmp3.get(id);
      if (null != value) {
        tmp4.delete(value);
      }
      tmp3.delete(id);
      obj.delete(id);
      closure_1 = closure_1 + 1;
    } else {
      return false;
    }
    obj = tmp2;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (tmp2.has(message.id)) {
        const id = message.id;
        const value = tmp3.get(id);
        if (null != value) {
          tmp4.delete(value);
        }
        tmp3.delete(id);
        obj.delete(id);
        closure_1 = closure_1 + 1;
      }
      obj = tmp2;
    }
    return false;
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      const value = tmp4.get(nonce);
      if (null == value) {
        return false;
      } else {
        tmp3.delete(value.messageId);
        obj.delete(nonce);
        closure_1 = closure_1 + 1;
      }
      obj = tmp4;
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    let componentId;
    let messageId;
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      let value = tmp4.get(nonce);
      if (null == value) {
        return false;
      } else {
        ({ componentId, messageId } = value);
        value = tmp2.get(messageId);
        if (null != value) {
          if (value.has(componentId)) {
            value.delete(componentId);
            if (0 === value.size) {
              tmp2.delete(messageId);
            }
            closure_1 = closure_1 + 1;
          }
        }
      }
    }
  },
  CLEAR_INTERACTION_MODAL_STATE: function handleClearInteractionModalState(customId) {
    tmp2.delete(customId.customId);
    closure_1 = closure_1 + 1;
  }
});
let obj = {
  LOGOUT: function handleInit() {
    tmp2.clear();
    tmp3.clear();
    tmp4.clear();
    closure_1 = closure_1 + 1;
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function handleQueueActionComponentState(state) {
    let componentId;
    let messageId;
    let nonce;
    ({ messageId, nonce, componentId } = state);
    const result = tmp3.set(messageId, nonce);
    const result1 = tmp4.set(nonce, { messageId, componentId });
    let map = tmp2.get(messageId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
      tmp3 = globalThis;
      tmp4 = new.target;
    }
    const result2 = map.set(componentId, state.state);
    const result3 = tmp2.set(messageId, map);
    closure_1 = closure_1 + 1;
  },
  SET_INTERACTION_COMPONENT_STATE: function handleSetInteractionComponentState(rootContainerId) {
    let componentId;
    let state;
    rootContainerId = rootContainerId.rootContainerId;
    ({ componentId, state } = rootContainerId);
    let map = tmp2.get(rootContainerId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const result = map.set(componentId, state);
    const result1 = tmp2.set(rootContainerId, map);
    closure_1 = closure_1 + 1;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    if (tmp2.has(id)) {
      const value = tmp3.get(id);
      if (null != value) {
        tmp4.delete(value);
      }
      tmp3.delete(id);
      obj.delete(id);
      closure_1 = closure_1 + 1;
    } else {
      return false;
    }
    obj = tmp2;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (tmp2.has(message.id)) {
        const id = message.id;
        const value = tmp3.get(id);
        if (null != value) {
          tmp4.delete(value);
        }
        tmp3.delete(id);
        obj.delete(id);
        closure_1 = closure_1 + 1;
      }
      obj = tmp2;
    }
    return false;
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      const value = tmp4.get(nonce);
      if (null == value) {
        return false;
      } else {
        tmp3.delete(value.messageId);
        obj.delete(nonce);
        closure_1 = closure_1 + 1;
      }
      obj = tmp4;
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    let componentId;
    let messageId;
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      let value = tmp4.get(nonce);
      if (null == value) {
        return false;
      } else {
        ({ componentId, messageId } = value);
        value = tmp2.get(messageId);
        if (null != value) {
          if (value.has(componentId)) {
            value.delete(componentId);
            if (0 === value.size) {
              tmp2.delete(messageId);
            }
            closure_1 = closure_1 + 1;
          }
        }
      }
    }
  },
  CLEAR_INTERACTION_MODAL_STATE: function handleClearInteractionModalState(customId) {
    tmp2.delete(customId.customId);
    closure_1 = closure_1 + 1;
  }
};
let tmp4 = new require("LimitedMap")(196606);
let result = require("dispatcher").fileFinishedImporting("modules/interaction_components/LocalInteractionComponentStateStore.tsx");

export default localInteractionComponentStateStore;