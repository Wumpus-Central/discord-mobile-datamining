// discord_app/modules/interactions/InteractionStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import Server from "../../flow/Server.tsx";
import InteractionTypes from "InteractionTypes.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
function deleteNonce(nonce) {
  if (null == dependencyMap4[nonce]) {
    delete tmp[tmp2];
    if (null != dependencyMap3[nonce]) {
      delete tmp[tmp3];
    }
    delete tmp[tmp2];
    const obj = { insertedAt: null, nonce: null, messageId: null, interaction: null };
    const _Date = Date;
    obj.insertedAt = Date.now();
    obj.nonce = nonce;
    obj.messageId = dependencyMap3[nonce];
    obj.interaction = dependencyMap[nonce];
    dependencyMap4[nonce] = obj;
  } else {
    delete tmp[tmp2];
  }
}
const result = 5 * DurationsDefault.Millis.MINUTE;
const metroRequire = result;
const result1 = 10 * DurationsDefault.Millis.SECOND;
const dependencyMap = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
let modalKey;
let c12;
const dependencyMap4 = {};
const Store = initializeDefault.Store;
class InteractionStore extends Store {}
const prototype = InteractionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, ChannelStore);
};
prototype["getInteraction"] = function getInteraction(message) {
  let tmp2 = null;
  if (null != dependencyMap2[message.id]) {
    tmp2 = dependencyMap[tmp];
  }
  return tmp2;
};
prototype["getMessageInteractionStates"] = function getMessageInteractionStates() {
  const obj = {};
  const entries = Object.entries(closure_8);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let tmp6 = tmp5[1];
    let tmp8 = dependencyMap3[tmp5[0]];
    if (null != tmp8) {
      obj[tmp9] = tmp6.state;
    }
    continue;
  }
  return obj;
};
prototype["canQueueInteraction"] = function canQueueInteraction(arg0, arg1) {
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = null != dependencyMap[tmp];
  }
  if (tmp2) {
    tmp2 = dependencyMap[tmp].state !== InteractionTypes.InteractionState.FAILED;
  }
  if (!tmp2) {
    let tmp9 = null != dependencyMap[arg1];
    if (tmp9) {
      tmp9 = dependencyMap[arg1].state !== InteractionTypes.InteractionState.FAILED;
    }
    tmp2 = tmp9;
  }
  return !tmp2;
};
prototype["getIFrameModalApplicationId"] = function getIFrameModalApplicationId() {
  return c12;
};
prototype["getIFrameModalKey"] = function getIFrameModalKey() {
  return modalKey;
};
prototype["getInteractionDebugContext"] = function getInteractionDebugContext(nonce) {
  if (null != nonce) {
    if (null != dependencyMap[nonce]) {
      let obj = { interaction: tmp2, messageId: dependencyMap3[nonce] };
      return obj;
    } else {
      let tmp5;
      if (null != dependencyMap4[nonce]) {
        obj = { interaction: null, messageId: null };
        ({ interaction: obj.interaction, messageId: obj.messageId } = tmp4);
        tmp5 = obj;
      }
      return tmp5;
    }
  }
};
InteractionStore.displayName = "InteractionStore";
const interactionStore = new InteractionStore(DispatcherDefault, {
  LOGOUT: function handleInit() {
    closure_8 = {};
    closure_9 = {};
    closure_10 = {};
    closure_13 = {};
    const timerId = setInterval(() => {
      const timestamp = Date.now();
      const entries = Object.entries(dependencyMap4);
      while (tmp5 !== undefined) {
        let tmp8 = _slicedToArray(tmp6, 2);
        if (timestamp - tmp8[1].insertedAt > result1) {
          delete tmp2[tmp];
        }
        continue;
      }
    }, result);
  },
  INTERACTION_QUEUE: function handleInteractionQueue(arg0) {
    ({ nonce, messageId } = arg0);
    ({ data, onCreate, onCancel, onSuccess, onFailure } = arg0);
    if (null != messageId) {
      closure_9[messageId] = nonce;
      closure_10[nonce] = messageId;
    }
    closure_8[nonce] = {
      state: InteractionTypes.InteractionState.QUEUED,
      data,
      onCreate,
      onCancel,
      onSuccess,
      onFailure,
    };
  },
  INTERACTION_CREATE: function handleInteractionCreate(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      if (null != dependencyMap[nonce]) {
        if (tmp3.state === InteractionTypes.InteractionState.QUEUED) {
          tmp3.state = tmp4(4790).InteractionState.CREATED;
          const onCreate = tmp3.onCreate;
          if (onCreate != null) {
            onCreate(tmp);
          }
        }
        tmp4 = require;
      }
      return false;
    }
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    if (null != nonce) {
      if (null != dependencyMap[nonce]) {
        const onSuccess = tmp16.onSuccess;
        if (onSuccess != null) {
          onSuccess();
        }
        if (null == dependencyMap4[nonce]) {
          delete tmp[tmp2];
          if (null != dependencyMap3[nonce]) {
            delete tmp[tmp3];
          }
          delete tmp[tmp2];
          const obj = { insertedAt: null, nonce: null, messageId: null, interaction: null };
          const _Date = Date;
          obj.insertedAt = Date.now();
          obj.nonce = nonce;
          obj.messageId = dependencyMap3[nonce];
          obj.interaction = dependencyMap[nonce];
          dependencyMap4[nonce] = obj;
        } else {
          delete tmp[tmp2];
        }
      }
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(arg0) {
    ({ nonce, errorCode, errorMessage, status, reasonCode } = arg0);
    if (null == nonce) {
      return false;
    } else if (null == dependencyMap[nonce]) {
      return false;
    } else {
      const onFailure = tmp27.onFailure;
      if (onFailure != null) {
        onFailure(errorCode, errorMessage, status, reasonCode);
      }
      if (tmp27.data.interactionType === Server.InteractionTypes.APPLICATION_COMMAND) {
        if (null == dependencyMap4[nonce]) {
          delete tmp[tmp2];
          if (null != dependencyMap3[nonce]) {
            delete tmp[tmp3];
          }
          delete tmp[tmp2];
          let obj = { insertedAt: null, nonce: null, messageId: null, interaction: null };
          const _Date = Date;
          obj.insertedAt = Date.now();
          obj.nonce = nonce;
          obj.messageId = dependencyMap3[nonce];
          obj.interaction = dependencyMap[nonce];
          dependencyMap4[nonce] = obj;
        } else {
          delete tmp[tmp2];
        }
      } else {
        obj = {};
        const merged = Object.assign(tmp27);
        obj.state = InteractionTypes.InteractionState.FAILED;
        obj.errorCode = errorCode;
        obj.errorMessage = errorMessage;
        obj.reasonCode = reasonCode;
        dependencyMap[nonce] = obj;
      }
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    if (null == message.nonce) {
      return false;
    } else if (null == dependencyMap[message.nonce]) {
      return false;
    } else {
      const onSuccess = tmp16.onSuccess;
      if (onSuccess != null) {
        onSuccess();
      }
      const nonce = message.nonce;
      if (null == dependencyMap4[nonce]) {
        delete tmp[tmp2];
        if (null != dependencyMap3[nonce]) {
          delete tmp[tmp3];
        }
        delete tmp[tmp2];
        const obj = { insertedAt: null, nonce: null, messageId: null, interaction: null };
        const _Date = Date;
        obj.insertedAt = Date.now();
        obj.nonce = nonce;
        obj.messageId = dependencyMap3[nonce];
        obj.interaction = dependencyMap[nonce];
        dependencyMap4[nonce] = obj;
      } else {
        delete tmp[tmp2];
      }
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    if (null == ChannelStore.getChannel(channelId.channelId)) {
      return false;
    } else {
      const _Object = Object;
      const entries = Object.entries(closure_8);
      const tmp16 = entries[Symbol.iterator]();
      while (tmp16 !== undefined) {
        let tmp5 = _slicedToArray(tmp2, 2);
        let first = tmp5[0];
        if (tmp5[1].state === InteractionTypes.InteractionState.FAILED) {
          let tmp11 = deleteNonce(first);
        }
        continue;
      }
    }
  },
  INTERACTION_IFRAME_MODAL_CREATE: function handleIFrameModalCreate(nonce) {
    nonce = nonce.nonce;
    const id = nonce.application.id;
    if (null != nonce) {
      if (null != dependencyMap[nonce]) {
        const onSuccess = tmp16.onSuccess;
        if (onSuccess != null) {
          onSuccess();
        }
        if (null == dependencyMap4[nonce]) {
          delete tmp[tmp2];
          if (null != dependencyMap3[nonce]) {
            delete tmp[tmp3];
          }
          delete tmp[tmp2];
          const obj = { insertedAt: null, nonce: null, messageId: null, interaction: null };
          const _Date = Date;
          obj.insertedAt = Date.now();
          obj.nonce = nonce;
          obj.messageId = dependencyMap3[nonce];
          obj.interaction = dependencyMap[nonce];
          dependencyMap4[nonce] = obj;
        } else {
          delete tmp[tmp2];
        }
      }
    }
  },
  INTERACTION_IFRAME_MODAL_CLOSE: function handleIFrameModalClose() {
    modalKey = undefined;
    c12 = undefined;
  },
  INTERACTION_IFRAME_MODAL_KEY_CREATE: function handleIFrameModalKeyCreate(modalKey) {
    modalKey = modalKey.modalKey;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(nonce) {
    nonce = nonce.nonce;
    if (null != nonce) {
      if (null != dependencyMap[nonce]) {
        const onSuccess = tmp16.onSuccess;
        if (onSuccess != null) {
          onSuccess();
        }
        if (null == dependencyMap4[nonce]) {
          delete tmp[tmp2];
          if (null != dependencyMap3[nonce]) {
            delete tmp[tmp3];
          }
          delete tmp[tmp2];
          const obj = { insertedAt: null, nonce: null, messageId: null, interaction: null };
          const _Date = Date;
          obj.insertedAt = Date.now();
          obj.nonce = nonce;
          obj.messageId = dependencyMap3[nonce];
          obj.interaction = dependencyMap[nonce];
          dependencyMap4[nonce] = obj;
        } else {
          delete tmp[tmp2];
        }
      }
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    const participants = instance.instance.participants;
    const sessionId = AuthenticationStore.getSessionId();
    const id = AuthenticationStore.getId();
    const found = participants.find((user_id) => {
      let tmp = user_id.user_id === closure_1;
      if (tmp) {
        tmp = user_id.session_id === closure_0;
      }
      return tmp;
    });
    if (null != found) {
      if (null != found.nonce) {
        if (null == dependencyMap4[found.nonce]) {
          messageId = dependencyMap3[found.nonce];
          interaction = dependencyMap[found.nonce];
        } else {
          ({ messageId, interaction } = tmp23);
        }
        if (tmp7) {
          const nonce = found.nonce;
          if (null == dependencyMap4[nonce]) {
            delete tmp[tmp2];
            if (null != dependencyMap3[nonce]) {
              delete tmp[tmp3];
            }
            delete tmp[tmp2];
            const obj = { insertedAt: null, nonce: null, messageId: null, interaction: null };
            const _Date = Date;
            obj.insertedAt = Date.now();
            obj.nonce = nonce;
            obj.messageId = dependencyMap3[nonce];
            obj.interaction = dependencyMap[nonce];
            dependencyMap4[nonce] = obj;
          } else {
            delete tmp[tmp2];
          }
          let tmp18 = null != messageId;
          if (tmp18) {
            tmp18 = "channelId" in interaction.data;
          }
          if (tmp18) {
            MessageActionCreatorsDefault.deleteMessage(interaction.data.channelId, messageId, true);
          }
        }
        tmp7 = null != interaction && null != messageId;
      }
    }
  },
});
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/interactions/InteractionStore.tsx");

export default interactionStore;
export const STALE_INTERACTION_INTERVAL = result;
export const STALE_INTERACTION_DURATION = result1;
