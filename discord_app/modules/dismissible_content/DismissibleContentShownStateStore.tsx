// === Module 1949: DismissibleContentShownStateStore ===

// Module 1949 (DismissibleContentShownStateStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 1948 */;
import isActionRequiredDefault from "isActionRequired" /* 1953 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 1950 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1951 */;

require = fn;
function withContent(currentlyShown, content) {
  let tmp = found;
  if (found === undefined) {
    tmp = null;
  }
  if (null == content) {
    return currentlyShown;
  } else {
    currentlyShown = currentlyShown.currentlyShown;
    currentlyShown.add(content.content);
    const recentlyShown = currentlyShown.recentlyShown;
    found = recentlyShown.filter((item) => item !== content.content);
    found.unshift(content.content);
    found.splice(5);
    currentlyShown.recentlyShown = found;
    if (null != content.groupName) {
      const currentlyShownGroup = currentlyShown.currentlyShownGroup;
      currentlyShownGroup.add(content.groupName);
    }
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    if (!CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(content.content)) {
      currentlyShown.shownFatigableCandidate = content;
      const prevFatigableCandidate = currentlyShown.prevFatigableCandidate;
      content = undefined;
      if (prevFatigableCandidate != null) {
        content = prevFatigableCandidate.content;
      }
      if (content !== content.content) {
        currentlyShown.prevFatigableCandidate = content;
        const _Date = Date;
        const date = new Date();
        currentlyShown.lastWinnerTime = date.getTime();
      }
    }
    const onAdded = content.onAdded;
    if (onAdded != null) {
      onAdded(tmp);
    }
    return currentlyShown;
  }
}
function withUpdateWinner(candidates) {
  if (0 === candidates.candidates.size) {
    return candidates;
  } else {
    const _Date2 = Date;
    const date = new Date();
    let hasItem = null != candidates.prevFatigableCandidate;
    const diff = date.getTime() - candidates.lastWinnerTime;
    if (hasItem) {
      candidates = candidates.candidates;
      hasItem = candidates.has(candidates.prevFatigableCandidate.content);
    }
    if (hasItem) {
      hasItem = null == candidates.shownFatigableCandidate;
    }
    if (hasItem) {
      if (!tmp2) {
        taskRunner.unschedule();
        value = undefined;
        if (null != candidates.prevFatigableCandidate) {
          let candidates2 = candidates.candidates;
          value = candidates2.get(candidates.prevFatigableCandidate.content);
        }
        const require = value;
        let candidates3 = candidates.candidates;
        let items = [];
        HermesBuiltin.arraySpread(candidates3.keys(), 0);
        let shownFatigableCandidate = candidates.shownFatigableCandidate;
        let found = items.filter((item) => {
          let content;
          if (obj != null) {
            content = obj.content;
          }
          return item !== content;
        });
        if (null != shownFatigableCandidate) {
          if (null != shownFatigableCandidate.content) {
            let currentlyShown = candidates.currentlyShown;
            currentlyShown.delete(shownFatigableCandidate.content);
          }
          if (null != shownFatigableCandidate.groupName) {
            let currentlyShownGroup = candidates.currentlyShownGroup;
            currentlyShownGroup.delete(shownFatigableCandidate.groupName);
          }
          let shownFatigableCandidate2 = candidates.shownFatigableCandidate;
          let content;
          if (shownFatigableCandidate2 != null) {
            content = shownFatigableCandidate2.content;
          }
          if (content === shownFatigableCandidate.content) {
            candidates.shownFatigableCandidate = null;
          }
        }
        withContent(candidates, value, found);
      }
      return candidates;
    }
    if (null == candidates.shownFatigableCandidate) {
      let scheduledResult = taskRunner.scheduled();
      if (!scheduledResult) {
        const _Date = Date;
        let tmp20 = null == candidates.shownFatigableCandidate;
        if (tmp20) {
          tmp20 = tmp19 - candidates.lastWinnerTime < 3600000;
        }
        scheduledResult = tmp20;
        const date1 = new Date();
      }
      if (!scheduledResult) {
        taskRunner.schedule(() => {
          value(dependencyMap[5]).batchUpdates(() => {
            state.setState((candidates) => {
              let obj = {};
              const merged = Object.assign(candidates);
              obj.candidates = new Map(candidates.candidates);
              const map = new Map(candidates.candidates);
              obj.currentlyShown = new Set(candidates.currentlyShown);
              const set = new Set(candidates.currentlyShown);
              obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
              candidates = obj.candidates;
              const items = [...candidates.keys()];
              let hasItem = null !== obj.prevFatigableCandidate;
              if (hasItem) {
                const candidates2 = obj.candidates;
                hasItem = candidates2.has(obj.prevFatigableCandidate.content);
              }
              if (hasItem) {
                hasItem = obj.candidates.size > 1;
              }
              let found = items;
              if (hasItem) {
                found = items.filter((item) => {
                  const prevFatigableCandidate = obj.prevFatigableCandidate;
                  let content;
                  if (prevFatigableCandidate != null) {
                    content = prevFatigableCandidate.content;
                  }
                  return item !== content;
                });
              }
              const candidates3 = obj.candidates;
              value = candidates3.get(found[Math.floor(Math, Math.random(Math) * found.length)]);
              obj = value;
              const candidates4 = obj.candidates;
              const items1 = [...candidates4.keys()];
              const shownFatigableCandidate = obj.shownFatigableCandidate;
              const found1 = items1.filter((item) => {
                let content;
                if (obj != null) {
                  content = obj.content;
                }
                return item !== content;
              });
              if (null != shownFatigableCandidate) {
                if (null != shownFatigableCandidate.content) {
                  const currentlyShown = obj.currentlyShown;
                  currentlyShown.delete(shownFatigableCandidate.content);
                }
                if (null != shownFatigableCandidate.groupName) {
                  const currentlyShownGroup = obj.currentlyShownGroup;
                  currentlyShownGroup.delete(shownFatigableCandidate.groupName);
                }
                const shownFatigableCandidate2 = obj.shownFatigableCandidate;
                let content;
                if (shownFatigableCandidate2 != null) {
                  content = shownFatigableCandidate2.content;
                }
                if (content === shownFatigableCandidate.content) {
                  obj.shownFatigableCandidate = null;
                }
              }
              closure_1_8(obj, value, found1);
              return obj;
            });
          });
        }, 250);
      }
    }
    tmp2 = diff > 300000;
  }
}
const taskRunner = new fn(1952).TaskRunner();
let identity = fn(1244);
let closure_6 = identity.createWithEqualityFn(function initState() {
  const obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
  const map = new Map();
  obj.currentlyShown = new Set();
  const set = new Set();
  obj.currentlyShownGroup = new Set();
  return obj;
});
let closure_7 = false;
const Store = initializeDefault.Store;
class DismissibleContentShownStateStore extends Store {
}
const prototype = DismissibleContentShownStateStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(LoginRequiredActionStore, UserRequiredActionStore);
  const items = [LoginRequiredActionStore, UserRequiredActionStore];
  this.syncWith(items, () => self.setHasRequiredAction());
};
prototype["setHasRequiredAction"] = function setHasRequiredAction() {
  closure_7 = isActionRequiredDefault(LoginRequiredActionStore, UserRequiredActionStore);
};
DismissibleContentShownStateStore.displayName = "DismissibleContentShownStateStore";
identity = {
  CONNECTION_OPEN() {
    ReactBatchUpdates.batchUpdates(() => {
      state.setState(() => {
        const obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
        const map = new Map();
        obj.currentlyShown = new Set();
        const set = new Set();
        obj.currentlyShownGroup = new Set();
        obj.postConnectionOpen = true;
        return obj;
      });
    });
    taskRunner.unschedule();
  },
  LOGOUT() {
    ReactBatchUpdates.batchUpdates(() => {
      state.setState(() => {
        const obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
        const map = new Map();
        obj.currentlyShown = new Set();
        const set = new Set();
        obj.currentlyShownGroup = new Set();
        obj.postConnectionOpen = true;
        return obj;
      });
    });
    taskRunner.unschedule();
  }
};
const dismissibleContentShownStateStore = new DismissibleContentShownStateStore(DispatcherDefault, identity);
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentShownStateStore.tsx");

export default function useDismissibleContentShownStateStore(arg0, arg1) {
  return closure_6(arg0, arg1);
};
export const isInCooldown = function isInCooldown() {
  const state = closure_6.getState();
  new Date();
  let tmp4 = null == state.shownFatigableCandidate;
  if (tmp4) {
    tmp4 = tmp3 - state.lastWinnerTime < 3600000;
  }
  return tmp4;
};
export const isStateInCooldown = function isStateInCooldown(shownFatigableCandidate) {
  new Date();
  let tmp3 = null == shownFatigableCandidate.shownFatigableCandidate;
  if (tmp3) {
    tmp3 = tmp2 - shownFatigableCandidate.lastWinnerTime < 3600000;
  }
  return tmp3;
};
export const addCandidateContent = function addCandidateContent(content) {
  _require = content;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  closure_1 = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(content.content);
  require("ReactBatchUpdates").batchUpdates(() => {
    state.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      const set = new Set(candidates.currentlyShown);
      obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
      if (!closure_2_7) {
        if (closure_1_1) {
          withContent(obj, content);
        } else {
          candidates = obj.candidates;
          const result = candidates.set(content.content, content);
          withUpdateWinner(obj);
        }
      }
      return obj;
    });
  });
};
export const removeCandidateContent = function removeCandidateContent(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  require("ReactBatchUpdates").batchUpdates(() => {
    state.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      const set = new Set(candidates.currentlyShown);
      obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
      if (closure_1_1) {
        const candidates2 = obj.candidates;
        candidates2.delete(closure_1_0.content);
        if (null != closure_1_0) {
          if (null != closure_1_0.content) {
            const currentlyShown2 = obj.currentlyShown;
            currentlyShown2.delete(closure_1_0.content);
          }
          if (null != closure_1_0.groupName) {
            const currentlyShownGroup2 = obj.currentlyShownGroup;
            currentlyShownGroup2.delete(closure_1_0.groupName);
          }
          const shownFatigableCandidate2 = obj.shownFatigableCandidate;
          let content;
          if (shownFatigableCandidate2 != null) {
            content = shownFatigableCandidate2.content;
          }
          if (content === closure_1_0.content) {
            obj.shownFatigableCandidate = null;
          }
        }
        withUpdateWinner(obj);
      } else {
        candidates = obj.candidates;
        candidates.delete(closure_1_0.content);
        if (null != closure_1_0) {
          if (null != closure_1_0.content) {
            const currentlyShown = obj.currentlyShown;
            currentlyShown.delete(closure_1_0.content);
          }
          if (null != closure_1_0.groupName) {
            const currentlyShownGroup = obj.currentlyShownGroup;
            currentlyShownGroup.delete(closure_1_0.groupName);
          }
          const shownFatigableCandidate = obj.shownFatigableCandidate;
          let content1;
          if (shownFatigableCandidate != null) {
            content1 = shownFatigableCandidate.content;
          }
          if (content1 === closure_1_0.content) {
            obj.shownFatigableCandidate = null;
          }
        }
      }
      return obj;
    });
  });
};
export const getLastShownDismissibleContent = function getLastShownDismissibleContent() {
  let first = closure_6.getState().recentlyShown[0];
  if (first == null) {
    first = null;
  }
  return first;
};
export const getCurrentFatigableWinner = function getCurrentFatigableWinner() {
  const shownFatigableCandidate = closure_6.getState().shownFatigableCandidate;
  let content;
  if (shownFatigableCandidate != null) {
    content = shownFatigableCandidate.content;
  }
  if (content == null) {
    content = null;
  }
  return content;
};
export const isContentShown = function isContentShown(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
  const currentlyShown = closure_6.getState().currentlyShown;
  return currentlyShown.has(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
};
export const useIsContentShown = function useIsContentShown(USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) {
  closure_0 = USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
  return closure_6((currentlyShown) => {
    currentlyShown = currentlyShown.currentlyShown;
    return currentlyShown.has(closure_0);
  });
};
export const useIsAnyContentShown = function useIsAnyContentShown(arg0) {
  closure_0 = arg0;
  return closure_6((arg0) => {
    let currentlyShown = arg0;
    return currentlyShown.some((item) => {
      currentlyShown = currentlyShown.currentlyShown;
      return currentlyShown.has(item);
    });
  });
};
export const isAnyContentShown = function isAnyContentShown(arr) {
  const currentlyShown = closure_6.getState().currentlyShown;
  return arr.find((item) => currentlyShown.has(item));
};
export const getCurrentlyShownCounts = function getCurrentlyShownCounts() {
  const items = [...closure_6.getState().currentlyShown];
  const items1 = [
    closure_6.getState().currentlyShown.size,
    items.filter((item) => {
      const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
      return !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(item);
    }).length
  ];
  return items1;
};
export const reset = function reset() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState(() => {
      const obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
      const map = new Map();
      obj.currentlyShown = new Set();
      const set = new Set();
      obj.currentlyShownGroup = new Set();
      obj.postConnectionOpen = true;
      return obj;
    });
  });
  taskRunner.unschedule();
};
export const resetFatigueCooldown = function resetFatigueCooldown() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      const set = new Set(candidates.currentlyShown);
      obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
      obj.prevFatigableCandidate = null;
      obj.lastWinnerTime = 0;
      return obj;
    });
  });
};
export const isPostConnectionOpen = function isPostConnectionOpen() {
  return closure_6.getState().postConnectionOpen;
};
export { dismissibleContentShownStateStore };