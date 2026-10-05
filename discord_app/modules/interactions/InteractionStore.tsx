// === Module 7600: InteractionStore ===

// Module 7600 (InteractionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import Server from "Server" /* 1985 */;
import InteractionTypes from "InteractionTypes" /* 5120 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let closure_10, closure_13, closure_8, closure_9;

function deleteNonce(nonce) {
  if (null == closure_13[nonce]) {
    const tmp3 = closure_8[nonce];
    delete closure_8[nonce];
    if (null != closure_10[nonce]) {
      delete closure_9[closure_10[nonce]];
    }
    delete closure_10[nonce];
    const _Date = Date;
    closure_13[nonce] = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp3 };
    const obj = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp3 };
  } else {
    delete closure_13[nonce];
  }
}
const result = 5 * DurationsDefault.Millis.MINUTE;
const metroRequire = result;
const result1 = 10 * DurationsDefault.Millis.SECOND;
const metroImportAll = {};
const React4 = {};
const authStore = {};
let modalKey;
let c12;
const Store = get_initializedDefault.Store;
class InteractionStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore);
  }
  getInteraction(message) {
    let tmp2 = null;
    if (null != closure_9[message.id]) {
      tmp2 = closure_8[tmp];
    }
    return tmp2;
  }
  getMessageInteractionStates() {
    const obj = {};
    const entries = Object.entries(closure_8);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let tmp6 = tmp5[1];
      let tmp8 = closure_10[tmp5[0]];
      if (null != tmp8) {
        obj[tmp9] = tmp6.state;
      }
      continue;
    }
    return obj;
  }
  canQueueInteraction(c1, nonce) {
    let tmp2 = null != tmp && null != closure_8[tmp] && closure_8[tmp].state !== InteractionTypes.InteractionState.FAILED;
    if (!tmp2) {
      tmp2 = null != closure_8[nonce] && closure_8[nonce].state !== InteractionTypes.InteractionState.FAILED;
      const tmp9 = null != closure_8[nonce] && closure_8[nonce].state !== InteractionTypes.InteractionState.FAILED;
    }
    return !tmp2;
  }
  getIFrameModalApplicationId() {
    return c12;
  }
  getIFrameModalKey() {
    return modalKey;
  }
  getInteractionDebugContext(nonce) {
    if (null != nonce) {
      if (null != closure_8[nonce]) {
        return { interaction: closure_8[nonce], messageId: closure_10[nonce] };
      } else {
        let tmp5;
        if (null != closure_13[nonce]) {
          const obj = { interaction: null, messageId: null };
          ({ interaction: obj.interaction, messageId: obj.messageId } = closure_13[nonce]);
          tmp5 = obj;
        }
        return tmp5;
      }
    }
  }
}
const prototype = InteractionStore.prototype;
InteractionStore.displayName = "InteractionStore";
let obj = {
  LOGOUT: function handleInit() {
    closure_8 = {};
    closure_9 = {};
    closure_10 = {};
    closure_13 = {};
    const timerId = setInterval(() => {
      const timestamp = Date.now();
      const entries = Object.entries(closure_1_13);
      const tmp3 = entries[Symbol.iterator]();
      while (tmp3 !== undefined) {
        let tmp6 = _slicedToArray(tmp4, 2);
        if (timestamp - tmp6[1].insertedAt > result1) {
          delete closure_1_13[tmp7];
        }
        continue;
      }
    }, metroRequire);
  },
  INTERACTION_QUEUE: function handleInteractionQueue(arg0) {
    let data;
    let messageId;
    let nonce;
    let onCancel;
    let onCreate;
    let onFailure;
    let onSuccess;
    ({ nonce, messageId } = arg0);
    ({ data, onCreate, onCancel, onSuccess, onFailure } = arg0);
    if (null != messageId) {
      closure_9[messageId] = nonce;
      closure_10[nonce] = messageId;
    }
    closure_8[nonce] = { state: InteractionTypes.InteractionState.QUEUED, data, onCreate, onCancel, onSuccess, onFailure };
    ({ state: InteractionTypes.InteractionState.QUEUED, data, onCreate, onCancel, onSuccess, onFailure });
  },
  INTERACTION_CREATE: function handleInteractionCreate(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      if (null != closure_8[nonce]) {
        if (closure_8[nonce].state === InteractionTypes.InteractionState.QUEUED) {
          closure_8[nonce].state = InteractionTypes.InteractionState.CREATED;
          const onCreate = tmp3.onCreate;
          if (onCreate != null) {
            onCreate(tmp);
          }
        }
      }
      return false;
    }
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    if (null != nonce) {
      if (null != closure_8[nonce]) {
        const onSuccess = tmp10.onSuccess;
        if (onSuccess != null) {
          onSuccess();
        }
        if (null == closure_13[nonce]) {
          const tmp4 = closure_8[nonce];
          delete closure_8[nonce];
          if (null != closure_10[nonce]) {
            delete closure_9[closure_10[nonce]];
          }
          delete closure_10[nonce];
          const _Date = Date;
          closure_13[nonce] = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp4 };
          const obj = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp4 };
        } else {
          delete closure_13[nonce];
        }
      }
    }
  },
  INTERACTION_FAILURE: function handleInteractionFailure(arg0) {
    let errorCode;
    let errorMessage;
    let nonce;
    let reasonCode;
    let status;
    ({ nonce, errorCode, errorMessage, status, reasonCode } = arg0);
    if (null == nonce) {
      return false;
    } else if (null == closure_8[nonce]) {
      return false;
    } else {
      const onFailure = tmp21.onFailure;
      if (onFailure != null) {
        onFailure(errorCode, errorMessage, status, reasonCode);
      }
      if (closure_8[nonce].data.interactionType === Server.InteractionTypes.APPLICATION_COMMAND) {
        if (null == closure_13[nonce]) {
          const tmp15 = closure_8[nonce];
          delete closure_8[nonce];
          if (null != closure_10[nonce]) {
            delete closure_9[closure_10[nonce]];
          }
          delete closure_10[nonce];
          const _Date = Date;
          closure_13[nonce] = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp15 };
          const obj2 = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp15 };
        } else {
          delete closure_13[nonce];
        }
      } else {
        const obj = { state: InteractionTypes.InteractionState.FAILED, errorCode, errorMessage, reasonCode };
        const merged = Object.assign(tmp21);
        closure_8[nonce] = obj;
      }
    }
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    if (null == message.nonce) {
      return false;
    } else if (null == closure_8[message.nonce]) {
      return false;
    } else {
      const onSuccess = tmp10.onSuccess;
      if (onSuccess != null) {
        onSuccess();
      }
      const nonce = message.nonce;
      if (null == closure_13[nonce]) {
        const tmp4 = closure_8[nonce];
        delete closure_8[nonce];
        if (null != closure_10[nonce]) {
          delete closure_9[closure_10[nonce]];
        }
        delete closure_10[nonce];
        const _Date = Date;
        closure_13[nonce] = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp4 };
        const obj = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp4 };
      } else {
        delete closure_13[nonce];
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
      if (null != closure_8[nonce]) {
        const onSuccess = tmp10.onSuccess;
        if (onSuccess != null) {
          onSuccess();
        }
        if (null == closure_13[nonce]) {
          const tmp4 = closure_8[nonce];
          delete closure_8[nonce];
          if (null != closure_10[nonce]) {
            delete closure_9[closure_10[nonce]];
          }
          delete closure_10[nonce];
          const _Date = Date;
          closure_13[nonce] = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp4 };
          const obj = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp4 };
        } else {
          delete closure_13[nonce];
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
      if (null != closure_8[nonce]) {
        const onSuccess = tmp10.onSuccess;
        if (onSuccess != null) {
          onSuccess();
        }
        if (null == closure_13[nonce]) {
          const tmp4 = closure_8[nonce];
          delete closure_8[nonce];
          if (null != closure_10[nonce]) {
            delete closure_9[closure_10[nonce]];
          }
          delete closure_10[nonce];
          const _Date = Date;
          closure_13[nonce] = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp4 };
          const obj = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp4 };
        } else {
          delete closure_13[nonce];
        }
      }
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    let interaction;
    let messageId;
    const participants = instance.instance.participants;
    const sessionId = AuthenticationStore.getSessionId();
    const id = AuthenticationStore.getId();
    const found = participants.find((user_id) => user_id.user_id === closure_1 && user_id.session_id === closure_0);
    if (null != found) {
      if (null != found.nonce) {
        if (null == closure_13[found.nonce]) {
          messageId = closure_10[found.nonce];
          interaction = closure_8[found.nonce];
        } else {
          ({ messageId, interaction } = closure_13[found.nonce]);
        }
        const tmp4 = null != interaction && null != messageId;
        if (tmp4) {
          const nonce = found.nonce;
          if (null == closure_13[nonce]) {
            const tmp7 = closure_8[nonce];
            delete closure_8[nonce];
            if (null != closure_10[nonce]) {
              delete closure_9[closure_10[nonce]];
            }
            delete closure_10[nonce];
            const _Date = Date;
            closure_13[nonce] = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp7 };
            const obj = { insertedAt: Date.now(), nonce, messageId: closure_10[nonce], interaction: tmp7 };
          } else {
            delete closure_13[nonce];
          }
          const tmp12 = null != messageId && "channelId" in interaction.data;
          if (tmp12) {
            const obj2 = MessageActionCreatorsDefault;
            obj2.deleteMessage(interaction.data.channelId, messageId, true);
          }
        }
      }
    }
  }
};
const interactionStore = new InteractionStore(DispatcherDefault, obj);
const result2 = size.fileFinishedImporting("modules/interactions/InteractionStore.tsx");

export default interactionStore;
export const STALE_INTERACTION_INTERVAL = result;
export const STALE_INTERACTION_DURATION = result1;