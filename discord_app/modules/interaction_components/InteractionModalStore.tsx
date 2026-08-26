// === Module 13939: getModalState ===

// Module 13939 (getModalState)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import trackInviteDefault from "trackInvite" /* 7129 */;

const require = arg1;
let obj = { IN_FLIGHT: 0, [0]: "IN_FLIGHT", ERRORED: 1, [1]: "ERRORED", SUCCEEDED: 2, [2]: "SUCCEEDED" };
const Store = initializeDefault.Store;
class InteractionModalStore extends Store {
}
InteractionModalStore.prototype["getModalState"] = function getModalState(first) {
  let tmp = null;
  if (first === closure_3) {
    tmp = closure_4;
  }
  return tmp;
};
InteractionModalStore.displayName = "InteractionModalStore";
obj = {
  LOGOUT: function handleInit() {
    c3 = null;
    c4 = null;
    c5 = null;
    c6 = null;
    c7 = null;
    return true;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(nonce) {
    if (nonce.nonce === c7) {
      trackInviteDefault.deleteMessage(c6, c5, true);
      c5 = null;
      c6 = null;
      c7 = null;
      obj = trackInviteDefault;
    }
    return false;
  },
  INTERACTION_IFRAME_MODAL_CREATE: function handleInteractionIframeModalCreate(nonce) {
    if (nonce.nonce === c7) {
      trackInviteDefault.deleteMessage(c6, c5, true);
      c5 = null;
      c6 = null;
      c7 = null;
      obj = trackInviteDefault;
    }
    return false;
  },
  INTERACTION_QUEUE: function handleInteractionQueue(nonce) {
    nonce = nonce.nonce;
    ({ data, preflight } = nonce);
    let startTimeout;
    const interactionType = data.interactionType;
    if (nonce(1955).InteractionTypes.APPLICATION_COMMAND === interactionType) {
      const messageId = nonce.messageId;
      const channelId = data.channelId;
      return false;
    } else if (tmp(1955).InteractionTypes.MODAL_SUBMIT === interactionType) {
      let tmp7 = null == nonce;
      if (!tmp7) {
        tmp7 = IN_FLIGHT === obj.ERRORED;
      }
      if (!tmp7) {
        tmp7 = IN_FLIGHT === obj.SUCCEEDED;
      }
      startTimeout(38)(tmp7, "cannot submit multiple modals at once");
      IN_FLIGHT = obj.IN_FLIGHT;
      startTimeout = function startTimeout(arg0) {

      };
      if (null != preflight) {
        const _setTimeout2 = setTimeout;
        let timerId = setTimeout(() => {
          let tmp2 = closure_1_3 === closure_0;
          if (tmp2) {
            tmp2 = closure_1_4 === closure_1_8.IN_FLIGHT;
          }
          if (tmp2) {
            closure_1_0(closure_1_2[2]).setFailed(closure_0);
            obj = closure_1_0(closure_1_2[2]);
          }
        }, 2 * tmp3(687).Millis.MINUTE);
        preflight.then(() => {
          const result = 10 * startTimeout(closure_1_2[3]).Millis.SECOND;
          if (typeof startTimeout !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const timerId = setTimeout(() => {
            let tmp2 = closure_1_3 === closure_0;
            if (tmp2) {
              tmp2 = closure_1_4 === closure_1_8.IN_FLIGHT;
            }
            if (tmp2) {
              closure_1_0(closure_1_2[2]).setFailed(closure_0);
              obj = closure_1_0(closure_1_2[2]);
            }
          }, result);
        }).catch(() => nonce(closure_1_2[2]).setFailed(nonce));
        const nextPromise = preflight.then(() => {
          const result = 10 * startTimeout(closure_1_2[3]).Millis.SECOND;
          if (typeof startTimeout !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const timerId = setTimeout(() => {
            let tmp2 = closure_1_3 === closure_0;
            if (tmp2) {
              tmp2 = closure_1_4 === closure_1_8.IN_FLIGHT;
            }
            if (tmp2) {
              closure_1_0(closure_1_2[2]).setFailed(closure_0);
              obj = closure_1_0(closure_1_2[2]);
            }
          }, result);
        });
      } else {
        const _setTimeout = setTimeout;
        const timerId1 = setTimeout(() => {
          let tmp2 = closure_1_3 === closure_0;
          if (tmp2) {
            tmp2 = closure_1_4 === closure_1_8.IN_FLIGHT;
          }
          if (tmp2) {
            closure_1_0(closure_1_2[2]).setFailed(closure_0);
            obj = closure_1_0(closure_1_2[2]);
          }
        }, 10 * tmp3(687).Millis.SECOND);
      }
      return true;
    } else {
      return false;
    }
    tmp = nonce;
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    let flag = null != nonce;
    if (flag) {
      flag = nonce === closure_3;
    }
    if (flag) {
      const SUCCEEDED = obj.SUCCEEDED;
      flag = true;
    }
    return flag;
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    nonce = nonce.nonce;
    let flag = null != nonce;
    if (flag) {
      flag = nonce === closure_3;
    }
    if (flag) {
      const ERRORED = obj.ERRORED;
      flag = true;
    }
    return flag;
  }
};
const interactionModalStore = new InteractionModalStore(dispatcherDefault, obj);
let result = require("set").fileFinishedImporting("modules/interaction_components/InteractionModalStore.tsx");

export default interactionModalStore;
export const InteractionModalState = obj;