// discord_app/modules/interactions/InteractionStore.tsx
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import { Store } from "initialize";

const require = arg1;
function deleteNonce(first) {
  if (null == dependencyMap4[first]) {
    delete tmp[tmp2];
    if (null != dependencyMap3[first]) {
      delete tmp[tmp3];
    }
    delete tmp[tmp2];
    const obj = { insertedAt: null, nonce: null, messageId: null, interaction: null };
    const _Date = Date;
    obj[0] = Date.now();
    obj[1] = first;
    obj[2] = dependencyMap3[first];
    obj[3] = dependencyMap[first];
    dependencyMap4[first] = obj;
  } else {
    delete tmp[tmp2];
  }
}
const result = 5 * require("set").Millis.MINUTE;
const result1 = 10 * require("set").Millis.SECOND;
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let c11;
let c12;
let closure_13 = {};
class InteractionStore extends Store {
}
const prototype = InteractionStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, ensureGuildLoaded);
};
prototype["getInteraction"] = function getInteraction(closure_0) {
  let tmp2 = null;
  if (null != dependencyMap2[closure_0.id]) {
    tmp2 = dependencyMap[tmp];
  }
  return tmp2;
};
prototype["getMessageInteractionStates"] = function getMessageInteractionStates() {
  const obj = {};
  const entries = Object.entries(closure_8);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let tmp6 = tmp5[1];
    let tmp7 = dependencyMap3;
    let tmp8 = dependencyMap3[tmp5[0]];
    if (null != tmp8) {
      let tmp10 = tmp8;
      let tmp11 = tmp6;
      obj[tmp9] = tmp6.state;
    }
    continue;
  }
  return obj;
};
prototype["canQueueInteraction"] = function canQueueInteraction(c1, closure_9) {
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = null != dependencyMap[tmp];
  }
  if (tmp2) {
    tmp2 = dependencyMap[tmp].state !== require(4510) /* InteractionState */.InteractionState.FAILED;
  }
  if (!tmp2) {
    let tmp9 = null != dependencyMap[closure_9];
    if (tmp9) {
      tmp9 = dependencyMap[closure_9].state !== require(4510) /* InteractionState */.InteractionState.FAILED;
    }
    tmp2 = tmp9;
  }
  return !tmp2;
};
prototype["getIFrameModalApplicationId"] = function getIFrameModalApplicationId() {
  return c12;
};
prototype["getIFrameModalKey"] = function getIFrameModalKey() {
  return c11;
};
prototype["getInteractionDebugContext"] = function getInteractionDebugContext(nonce) {
  if (null != nonce) {
    if (null != dependencyMap[nonce]) {
      let obj = { interaction: null, messageId: null };
      obj[0] = tmp2;
      obj[1] = dependencyMap3[nonce];
      return obj;
    } else {
      let tmp5;
      if (null != dependencyMap4[nonce]) {
        obj = { interaction: null, messageId: null };
        ({ interaction: obj[0], messageId: obj[1] } = tmp4);
        tmp5 = obj;
      }
      return tmp5;
    }
  }
};
InteractionStore.displayName = "InteractionStore";
const interactionStore = new InteractionStore(require("dispatcher"), {
  LOGOUT: function handleInit() {
    let closure_8 = {};
    let closure_9 = {};
    let closure_10 = {};
    let closure_13 = {};
    const timerId = setInterval(() => {
      const timestamp = Date.now();
      const entries = Object.entries(closure_13);
      while (tmp5 !== undefined) {
        let tmp7 = callback;
        let tmp8 = callback(tmp6, 2);
        let tmp10 = closure_7;
        if (timestamp - tmp8[1].insertedAt > closure_7) {
          let tmp11 = closure_13;
          let tmp12 = tmp9;
          delete tmp2[tmp];
        }
        continue;
      }
    }, closure_6);
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
    closure_8[nonce] = { state: require(4510) /* InteractionState */.InteractionState.QUEUED, data, onCreate, onCancel, onSuccess, onFailure };
  },
  INTERACTION_CREATE: function handleInteractionCreate(nonce) {
    nonce = nonce.nonce;
    if (null == nonce) {
      return false;
    } else {
      if (null != dependencyMap[nonce]) {
        if (tmp3.state === require(4510) /* InteractionState */.InteractionState.QUEUED) {
          tmp3.state = tmp4(4510).InteractionState.CREATED;
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
          obj[0] = Date.now();
          obj[1] = nonce;
          obj[2] = dependencyMap3[nonce];
          obj[3] = dependencyMap[nonce];
          dependencyMap4[nonce] = obj;
        } else {
          delete tmp[tmp2];
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
    } else if (null == dependencyMap[nonce]) {
      return false;
    } else {
      const onFailure = tmp27.onFailure;
      if (onFailure != null) {
        onFailure(errorCode, errorMessage, status, reasonCode);
      }
      if (tmp27.data.interactionType === require(1906) /* PermissionOverwriteType */.InteractionTypes.APPLICATION_COMMAND) {
        if (null == dependencyMap4[nonce]) {
          delete tmp[tmp2];
          if (null != dependencyMap3[nonce]) {
            delete tmp[tmp3];
          }
          delete tmp[tmp2];
          let obj = { insertedAt: null, nonce: null, messageId: null, interaction: null };
          const _Date = Date;
          obj[0] = Date.now();
          obj[1] = nonce;
          obj[2] = dependencyMap3[nonce];
          obj[3] = dependencyMap[nonce];
          dependencyMap4[nonce] = obj;
        } else {
          delete tmp[tmp2];
        }
      } else {
        obj = {};
        const merged = Object.assign(tmp27);
        obj.state = require(4510) /* InteractionState */.InteractionState.FAILED;
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
        obj[0] = Date.now();
        obj[1] = nonce;
        obj[2] = dependencyMap3[nonce];
        obj[3] = dependencyMap[nonce];
        dependencyMap4[nonce] = obj;
      } else {
        delete tmp[tmp2];
      }
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    if (null == channel.getChannel(channelId.channelId)) {
      return false;
    } else {
      const _Object = Object;
      const entries = Object.entries(closure_8);
      const tmp16 = entries[Symbol.iterator]();
      while (tmp16 !== undefined) {
        let tmp4 = callback;
        let tmp5 = callback(tmp2, 2);
        let first = tmp5[0];
        let tmp7 = require;
        let tmp8 = dependencyMap;
        if (tmp5[1].state === require(4510) /* InteractionState */.InteractionState.FAILED) {
          let tmp9 = deleteNonce;
          let tmp10 = first;
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
          obj[0] = Date.now();
          obj[1] = nonce;
          obj[2] = dependencyMap3[nonce];
          obj[3] = dependencyMap[nonce];
          dependencyMap4[nonce] = obj;
        } else {
          delete tmp[tmp2];
        }
      }
    }
  },
  INTERACTION_IFRAME_MODAL_CLOSE: function handleIFrameModalClose() {
    let c11;
    let c12;
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
          obj[0] = Date.now();
          obj[1] = nonce;
          obj[2] = dependencyMap3[nonce];
          obj[3] = dependencyMap[nonce];
          dependencyMap4[nonce] = obj;
        } else {
          delete tmp[tmp2];
        }
      }
    }
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function handleEmbeddedActivityUpdateV2(instance) {
    let interaction;
    let messageId;
    let sessionId;
    let importDefault;
    const participants = instance.instance.participants;
    sessionId = store.getSessionId();
    importDefault = store.getId();
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
            obj[0] = Date.now();
            obj[1] = nonce;
            obj[2] = dependencyMap3[nonce];
            obj[3] = dependencyMap[nonce];
            dependencyMap4[nonce] = obj;
          } else {
            delete tmp[tmp2];
          }
          let tmp18 = null != messageId;
          if (tmp18) {
            tmp18 = "channelId" in interaction.data;
          }
          if (tmp18) {
            importDefault(6826).deleteMessage(interaction.data.channelId, messageId, true);
            const obj2 = importDefault(6826);
          }
        }
        tmp7 = null != interaction && null != messageId;
      }
    }
  }
});
const result2 = require("ensureGuildLoaded").fileFinishedImporting("modules/interactions/InteractionStore.tsx");

export default interactionStore;
export const STALE_INTERACTION_INTERVAL = result;
export const STALE_INTERACTION_DURATION = result1;