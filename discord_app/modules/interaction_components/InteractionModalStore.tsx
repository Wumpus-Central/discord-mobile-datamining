// === Module 14162: InteractionModalStore ===

// Module 14162 (InteractionModalStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import InteractionActionCreators from "InteractionActionCreators" /* 7800 */;
import size from "module_2" /* 2 */;

let ERRORED, c3, c5, c6, c7;

const InteractionModalState = { IN_FLIGHT: 0, [0]: "IN_FLIGHT", ERRORED: 1, [1]: "ERRORED", SUCCEEDED: 2, [2]: "SUCCEEDED" };
const Store = get_initializedDefault.Store;
class InteractionModalStore extends Store {
  getModalState(arg0) {
    let tmp = null;
    if (arg0 === c3) {
      tmp = ERRORED;
    }
    return tmp;
  }
}
const prototype = InteractionModalStore.prototype;
InteractionModalStore.displayName = "InteractionModalStore";
const obj2 = {
  LOGOUT: function handleInit() {
    c3 = null;
    ERRORED = null;
    c5 = null;
    c6 = null;
    c7 = null;
    return true;
  },
  INTERACTION_MODAL_CREATE: function handleInteractionModalCreate(nonce) {
    if (nonce.nonce === c7) {
      const obj = MessageActionCreatorsDefault;
      obj.deleteMessage(c6, c5, true);
      c5 = null;
      c6 = null;
      c7 = null;
    }
    return false;
  },
  INTERACTION_IFRAME_MODAL_CREATE: function handleInteractionIframeModalCreate(nonce) {
    if (nonce.nonce === c7) {
      const obj = MessageActionCreatorsDefault;
      obj.deleteMessage(c6, c5, true);
      c5 = null;
      c6 = null;
      c7 = null;
    }
    return false;
  },
  INTERACTION_QUEUE: function handleInteractionQueue(nonce) {
    let IN_FLIGHT;
    let data;
    let obj;
    let preflight;
    const f143603 = () => {
      const tmp2 = nonce === closure_1_0 && IN_FLIGHT === constants.IN_FLIGHT;
      if (tmp2) {
        const obj = nonce(dependencyMap[2]);
        obj.setFailed(closure_1_0);
      }
    };
    nonce = nonce.nonce;
    ({ data, preflight } = nonce);
    let startTimeout;
    const interactionType = data.interactionType;
    const messageId = nonce.messageId;
    const tmp = nonce;
    if (nonce(1985).InteractionTypes.APPLICATION_COMMAND === interactionType) {
      const channelId = data.channelId;
      return false;
    } else if (tmp(1985).InteractionTypes.MODAL_SUBMIT === interactionType) {
      let tmp7 = null == nonce;
      const tmp4 = startTimeout(38);
      if (!tmp7) {
        tmp7 = IN_FLIGHT === obj.ERRORED;
      }
      if (!tmp7) {
        tmp7 = IN_FLIGHT === obj.SUCCEEDED;
      }
      tmp4(tmp7, "cannot submit multiple modals at once");
      IN_FLIGHT = obj.IN_FLIGHT;
      startTimeout = function startTimeout(dependencyMap) {

      };
      if (null != preflight) {
        const _setTimeout2 = setTimeout;
        let timerId = setTimeout(f143603, 2 * tmp3(1102).Millis.MINUTE);
        const nextPromise = preflight.then(() => {
          if (typeof startTimeout === "function") {
            let tmp2 = globalThis;
            const _setTimeout = setTimeout;
            const timerId = setTimeout(f143603, tmp);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
        nextPromise.catch(() => {
          const obj = InteractionActionCreators;
          return obj.setFailed(nonce);
        });
      } else {
        let _setTimeout = setTimeout;
        const timerId1 = setTimeout(f143603, 10 * tmp3(1102).Millis.SECOND);
      }
      return true;
    } else {
      return false;
    }
  },
  INTERACTION_SUCCESS: function handleInteractionSuccess(nonce) {
    nonce = nonce.nonce;
    let flag = null != nonce && nonce === c3;
    if (flag) {
      ERRORED = obj.SUCCEEDED;
      flag = true;
    }
    return flag;
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    nonce = nonce.nonce;
    let flag = null != nonce && nonce === c3;
    if (flag) {
      ERRORED = obj.ERRORED;
      flag = true;
    }
    return flag;
  }
};
const interactionModalStore = new InteractionModalStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/interaction_components/InteractionModalStore.tsx");

export default interactionModalStore;
export { InteractionModalState };