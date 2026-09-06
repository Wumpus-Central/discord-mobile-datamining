// discord_app/modules/interaction_components/InteractionModalStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import InteractionActionCreators from "../interactions/InteractionActionCreators.tsx";

require = fn;
let InteractionModalState = {
  IN_FLIGHT: 0,
  [0]: "IN_FLIGHT",
  ERRORED: 1,
  [1]: "ERRORED",
  SUCCEEDED: 2,
  [2]: "SUCCEEDED",
};
const Store = initializeDefault.Store;
class InteractionModalStore extends Store {}
InteractionModalStore.prototype["getModalState"] = function getModalState(arg0) {
  let tmp = null;
  if (arg0 === c3) {
    tmp = ERRORED;
  }
  return tmp;
};
InteractionModalStore.displayName = "InteractionModalStore";
InteractionModalState = {
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
      MessageActionCreatorsDefault.deleteMessage(c6, c5, true);
      c5 = null;
      c6 = null;
      c7 = null;
    }
    return false;
  },
  INTERACTION_IFRAME_MODAL_CREATE: function handleInteractionIframeModalCreate(nonce) {
    if (nonce.nonce === c7) {
      MessageActionCreatorsDefault.deleteMessage(c6, c5, true);
      c5 = null;
      c6 = null;
      c7 = null;
    }
    return false;
  },
  INTERACTION_QUEUE: function handleInteractionQueue(nonce) {
    nonce = nonce.nonce;
    ({ data, preflight } = nonce);
    let startTimeout;
    const interactionType = data.interactionType;
    if (nonce(1894).InteractionTypes.APPLICATION_COMMAND === interactionType) {
      const messageId = nonce.messageId;
      const channelId = data.channelId;
      return false;
    } else if (tmp(1894).InteractionTypes.MODAL_SUBMIT === interactionType) {
      let tmp7 = null == nonce;
      if (!tmp7) {
        tmp7 = IN_FLIGHT === obj.ERRORED;
      }
      if (!tmp7) {
        tmp7 = IN_FLIGHT === obj.SUCCEEDED;
      }
      startTimeout(38)(tmp7, "cannot submit multiple modals at once");
      IN_FLIGHT = obj.IN_FLIGHT;
      startTimeout = function startTimeout(dependencyMap) {};
      if (null != preflight) {
        const _setTimeout2 = setTimeout;
        let timerId = setTimeout(() => {
          let tmp2 = nonce === closure_1_0;
          if (tmp2) {
            tmp2 = IN_FLIGHT === constants.IN_FLIGHT;
          }
          if (tmp2) {
            nonce(dependencyMap[2]).setFailed(closure_1_0);
            const obj = nonce(dependencyMap[2]);
          }
        }, 2 * tmp3(1090).Millis.MINUTE);
        preflight
          .then(() => {
            if (typeof startTimeout === "function") {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => {
                let tmp2 = nonce === closure_1_0;
                if (tmp2) {
                  tmp2 = IN_FLIGHT === constants.IN_FLIGHT;
                }
                if (tmp2) {
                  nonce(dependencyMap[2]).setFailed(closure_1_0);
                  const obj = nonce(dependencyMap[2]);
                }
              }, tmp);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          })
          .catch(() => InteractionActionCreators.setFailed(nonce));
        const nextPromise = preflight.then(() => {
          if (typeof startTimeout === "function") {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              let tmp2 = nonce === closure_1_0;
              if (tmp2) {
                tmp2 = IN_FLIGHT === constants.IN_FLIGHT;
              }
              if (tmp2) {
                nonce(dependencyMap[2]).setFailed(closure_1_0);
                const obj = nonce(dependencyMap[2]);
              }
            }, tmp);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        });
      } else {
        let _setTimeout = setTimeout;
        const timerId1 = setTimeout(() => {
          let tmp2 = nonce === closure_1_0;
          if (tmp2) {
            tmp2 = IN_FLIGHT === constants.IN_FLIGHT;
          }
          if (tmp2) {
            nonce(dependencyMap[2]).setFailed(closure_1_0);
            const obj = nonce(dependencyMap[2]);
          }
        }, 10 * tmp3(1090).Millis.SECOND);
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
      flag = nonce === c3;
    }
    if (flag) {
      ERRORED = obj.SUCCEEDED;
      flag = true;
    }
    return flag;
  },
  INTERACTION_FAILURE: function handleInteractionFailure(nonce) {
    nonce = nonce.nonce;
    let flag = null != nonce;
    if (flag) {
      flag = nonce === c3;
    }
    if (flag) {
      ERRORED = obj.ERRORED;
      flag = true;
    }
    return flag;
  },
};
const interactionModalStore = new InteractionModalStore(DispatcherDefault, InteractionModalState);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/InteractionModalStore.tsx");

export default interactionModalStore;
export { InteractionModalState };
