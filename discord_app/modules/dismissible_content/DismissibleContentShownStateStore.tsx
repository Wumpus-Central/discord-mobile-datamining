// discord_app/modules/dismissible_content/DismissibleContentShownStateStore.tsx
import handleUpdateUser from "handleUpdateUser";
import handleRequiredAction from "handleRequiredAction";
import identity from "identity";
import { Store } from "initialize";
import { batchUpdates } from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import { isActionRequired } from "../core/isActionRequired.tsx";
import { set } from "DismissibleContentFatigueConfig.tsx";

const require = arg1;
function withContent(currentlyShown, content) {
  const _require = content;
  if (null == content) {
    return currentlyShown;
  } else {
    currentlyShown = currentlyShown.currentlyShown;
    currentlyShown.add(content.content);
    const recentlyShown = currentlyShown.recentlyShown;
    const found = recentlyShown.filter((arg0) => arg0 !== content.content);
    found.unshift(content.content);
    found.splice(5);
    currentlyShown.recentlyShown = found;
    if (null != content.groupName) {
      const currentlyShownGroup = currentlyShown.currentlyShownGroup;
      currentlyShownGroup.add(content.groupName);
    }
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = _set.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
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
      onAdded();
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
        let value;
        if (null != candidates.prevFatigableCandidate) {
          let candidates2 = candidates.candidates;
          value = candidates2.get(candidates.prevFatigableCandidate.content);
        }
        let shownFatigableCandidate = candidates.shownFatigableCandidate;
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
        withContent(candidates, value);
        const tmp6 = withContent;
      }
      return candidates;
    }
    if (null == candidates.shownFatigableCandidate) {
      let scheduledResult = taskRunner.scheduled();
      if (!scheduledResult) {
        const _Date = Date;
        let tmp17 = null == candidates.shownFatigableCandidate;
        if (tmp17) {
          tmp17 = tmp16 - candidates.lastWinnerTime < 3600000;
        }
        scheduledResult = tmp17;
        const date1 = new Date();
      }
      if (!scheduledResult) {
        obj.schedule(() => {
          callback(table[5]).batchUpdates(() => {
            state.setState((candidates) => {
              const obj = {};
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
                found = items.filter((arg0) => {
                  const prevFatigableCandidate = obj.prevFatigableCandidate;
                  let content;
                  if (prevFatigableCandidate != null) {
                    content = prevFatigableCandidate.content;
                  }
                  return arg0 !== content;
                });
              }
              const candidates3 = obj.candidates;
              const shownFatigableCandidate = obj.shownFatigableCandidate;
              const value = candidates3.get(found[Math.floor(Math, Math.random(Math) * found.length)]);
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
              closure_8(obj, value);
              return obj;
            });
          });
        }, 250);
      }
      obj = taskRunner;
    }
  }
}
const taskRunner = new require("schedule").TaskRunner();
let closure_6 = identity.createWithEqualityFn(function initState() {
  const obj = { candidates: null, shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: null, currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
  obj[0] = new Map();
  obj[3] = [];
  const map = new Map();
  obj[4] = new Set();
  const set = new Set();
  obj[5] = new Set();
  return obj;
});
let c7 = false;
class DismissibleContentShownStateStore extends Store {
}
const prototype = DismissibleContentShownStateStore.prototype;
prototype["initialize"] = function initialize() {
  const self = this;
  this.waitFor(handleUpdateUser, handleRequiredAction);
  const items = [handleUpdateUser, handleRequiredAction];
  this.syncWith(items, () => self.setHasRequiredAction());
};
prototype["setHasRequiredAction"] = function setHasRequiredAction() {
  let closure_7 = isActionRequired(handleUpdateUser, handleRequiredAction);
};
DismissibleContentShownStateStore.displayName = "DismissibleContentShownStateStore";
identity = {
  CONNECTION_OPEN() {
    batchUpdates /* batchUpdates */.batchUpdates(() => {
      state.setState(() => {
        const obj = { candidates: null, shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: null, currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
        obj[0] = new Map();
        obj[3] = [];
        const map = new Map();
        obj[4] = new Set();
        const set = new Set();
        obj[5] = new Set();
        obj.postConnectionOpen = true;
        return obj;
      });
    });
    taskRunner.unschedule();
  },
  LOGOUT() {
    batchUpdates /* batchUpdates */.batchUpdates(() => {
      state.setState(() => {
        const obj = { candidates: null, shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: null, currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
        obj[0] = new Map();
        obj[3] = [];
        const map = new Map();
        obj[4] = new Set();
        const set = new Set();
        obj[5] = new Set();
        obj.postConnectionOpen = true;
        return obj;
      });
    });
    taskRunner.unschedule();
  }
};
const dismissibleContentShownStateStore = new DismissibleContentShownStateStore(require("dispatcher"), identity);
let result = require("schedule").fileFinishedImporting("modules/dismissible_content/DismissibleContentShownStateStore.tsx");

export default function useDismissibleContentShownStateStore(arg0, arg1) {
  return store(arg0, arg1);
};
export const isInCooldown = function isInCooldown() {
  const state = store.getState();
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
  const _require = content;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = _set.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let closure_1 = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(content.content);
  _batchUpdates.batchUpdates(() => {
    outer1_6.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      const set = new Set(candidates.currentlyShown);
      obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
      if (!outer1_7) {
        if (closure_1) {
          outer1_8(obj, content);
        } else {
          candidates = obj.candidates;
          const result = candidates.set(content.content, content);
          outer1_9(obj);
        }
      }
      return obj;
    });
  });
};
export const removeCandidateContent = function removeCandidateContent(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  _batchUpdates.batchUpdates(() => {
    outer1_6.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      const set = new Set(candidates.currentlyShown);
      obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
      if (closure_1) {
        const candidates2 = obj.candidates;
        candidates2.delete(closure_0.content);
        if (null != closure_0) {
          if (null != tmp12.content) {
            const currentlyShown2 = obj.currentlyShown;
            currentlyShown2.delete(tmp12.content);
          }
          if (null != tmp12.groupName) {
            const currentlyShownGroup2 = obj.currentlyShownGroup;
            currentlyShownGroup2.delete(tmp12.groupName);
          }
          const shownFatigableCandidate2 = obj.shownFatigableCandidate;
          let content;
          if (shownFatigableCandidate2 != null) {
            content = shownFatigableCandidate2.content;
          }
          if (content === tmp12.content) {
            obj.shownFatigableCandidate = null;
          }
        }
        outer1_9(obj);
        const tmp11 = outer1_9;
      } else {
        candidates = obj.candidates;
        candidates.delete(closure_0.content);
        if (null != closure_0) {
          if (null != tmp5.content) {
            const currentlyShown = obj.currentlyShown;
            currentlyShown.delete(tmp5.content);
          }
          if (null != tmp5.groupName) {
            const currentlyShownGroup = obj.currentlyShownGroup;
            currentlyShownGroup.delete(tmp5.groupName);
          }
          const shownFatigableCandidate = obj.shownFatigableCandidate;
          let content1;
          if (shownFatigableCandidate != null) {
            content1 = shownFatigableCandidate.content;
          }
          if (content1 === tmp5.content) {
            obj.shownFatigableCandidate = null;
          }
        }
      }
      return obj;
    });
  });
};
export const getLastShownDismissibleContent = function getLastShownDismissibleContent() {
  let first = store.getState().recentlyShown[0];
  if (first == null) {
    first = null;
  }
  return first;
};
export const getCurrentFatigableWinner = function getCurrentFatigableWinner() {
  const shownFatigableCandidate = store.getState().shownFatigableCandidate;
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
  const currentlyShown = store.getState().currentlyShown;
  return currentlyShown.has(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
};
export const useIsContentShown = function useIsContentShown(USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) {
  let closure_0 = USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
  return store((currentlyShown) => {
    currentlyShown = currentlyShown.currentlyShown;
    return currentlyShown.has(closure_0);
  });
};
export const useIsAnyContentShown = function useIsAnyContentShown(arg0) {
  let closure_0 = arg0;
  return store((arg0) => {
    let closure_0 = arg0;
    return closure_0.some((arg0) => {
      currentlyShown = currentlyShown.currentlyShown;
      return currentlyShown.has(arg0);
    });
  });
};
export const isAnyContentShown = function isAnyContentShown(arr) {
  const currentlyShown = store.getState().currentlyShown;
  return arr.find((arg0) => currentlyShown.has(arg0));
};
export const getCurrentlyShownCounts = function getCurrentlyShownCounts() {
  const items = [...closure_6.getState().currentlyShown];
  const items1 = [
    store.getState().currentlyShown.size,
    items.filter((arg0) => {
      const CONTENT_TYPES_WITH_BYPASS_FATIGUE = callback(table[4]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
      return !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(arg0);
    }).length
  ];
  return items1;
};
export const reset = function reset() {
  batchUpdates /* batchUpdates */.batchUpdates(() => {
    state.setState(() => {
      const obj = { candidates: null, shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: null, currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
      obj[0] = new Map();
      obj[3] = [];
      const map = new Map();
      obj[4] = new Set();
      const set = new Set();
      obj[5] = new Set();
      obj.postConnectionOpen = true;
      return obj;
    });
  });
  taskRunner.unschedule();
};
export const resetFatigueCooldown = function resetFatigueCooldown() {
  batchUpdates /* batchUpdates */.batchUpdates(() => {
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
  return store.getState().postConnectionOpen;
};
export { dismissibleContentShownStateStore };