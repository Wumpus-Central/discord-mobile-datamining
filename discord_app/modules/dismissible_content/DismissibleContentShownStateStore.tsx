// discord_app/modules/dismissible_content/DismissibleContentShownStateStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ReactBatchUpdates from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig.tsx";
import isActionRequiredDefault from "../core/isActionRequired.tsx";
import LoginRequiredActionStore from "../auth/LoginRequiredActionStore.tsx";
import UserRequiredActionStore from "../../stores/UserRequiredActionStore.tsx";

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
function withUpdateWinner(candidates, content) {
  if (0 === candidates.candidates.size) {
    let obj = { state: candidates, arbitration: { type: "settled" } };
    return obj;
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
      if (!tmp3) {
        obj = { state: null, arbitration: null };
        if (batchInvocationManager.isInvoking()) {
          obj.state = candidates;
          if (null != content) {
            obj = { type: "request", candidates: null };
            const items = [content];
            obj.candidates = items;
            let obj1 = obj;
          } else {
            obj1 = { type: "unchanged" };
          }
          obj.arbitration = obj1;
        } else {
          value = undefined;
          if (null != candidates.prevFatigableCandidate) {
            const candidates2 = candidates.candidates;
            value = candidates2.get(candidates.prevFatigableCandidate.content);
          }
          const require = value;
          const candidates3 = candidates.candidates;
          const items1 = [];
          HermesBuiltin.arraySpread(candidates3.keys(), 0);
          const shownFatigableCandidate = candidates.shownFatigableCandidate;
          const found = items1.filter((item) => {
            let content;
            if (obj != null) {
              content = obj.content;
            }
            return item !== content;
          });
          if (null != shownFatigableCandidate) {
            if (null != shownFatigableCandidate.content) {
              const currentlyShown = candidates.currentlyShown;
              currentlyShown.delete(shownFatigableCandidate.content);
            }
            if (null != shownFatigableCandidate.groupName) {
              const currentlyShownGroup = candidates.currentlyShownGroup;
              currentlyShownGroup.delete(shownFatigableCandidate.groupName);
            }
            const shownFatigableCandidate2 = candidates.shownFatigableCandidate;
            content = undefined;
            if (shownFatigableCandidate2 != null) {
              content = shownFatigableCandidate2.content;
            }
            if (content === shownFatigableCandidate.content) {
              candidates.shownFatigableCandidate = null;
            }
          }
          withContent(candidates, value, found);
          obj.state = candidates;
          obj.arbitration = { type: "settled" };
          return obj;
        }
      }
    }
    if (null != candidates.shownFatigableCandidate) {
      if (!tmp3) {
        const obj2 = { state: candidates, arbitration: { type: "settled" } };
      }
    }
    if (!batchInvocationManager.isPending()) {
      const _Date = Date;
      let tmp22 = null == candidates.shownFatigableCandidate;
      if (tmp22) {
        tmp22 = tmp21 - candidates.lastWinnerTime < 3600000;
      }
      const obj3 = { state: candidates, arbitration: null };
      if (tmp22) {
        obj3.arbitration = { type: "unchanged" };
      } else {
        const obj4 = { type: "request", candidates: null };
        const candidates4 = candidates.candidates;
        const items2 = [];
        HermesBuiltin.arraySpread(candidates4.keys(), 0);
        obj4.candidates = items2;
        obj3.arbitration = obj4;
      }
      const date1 = new Date();
    }
    const obj5 = { state: candidates, arbitration: null };
    if (null != content) {
      const obj6 = { type: "request", candidates: null };
      const items3 = [content];
      obj6.candidates = items3;
      let obj7 = obj6;
    } else {
      obj7 = { type: "unchanged" };
    }
    obj5.arbitration = obj7;
  }
}
const NOOP = fn(1074).NOOP;
let identity = fn(1244);
let closure_6 = identity.createWithEqualityFn(function initState() {
  const obj = {
    candidates: new Map(),
    shownFatigableCandidate: null,
    prevFatigableCandidate: null,
    recentlyShown: [],
    currentlyShown: null,
    currentlyShownGroup: null,
    lastWinnerTime: 0,
    postConnectionOpen: false,
  };
  const map = new Map();
  obj.currentlyShown = new Set();
  const set = new Set();
  obj.currentlyShownGroup = new Set();
  return obj;
});
let closure_7 = false;
const batchInvocationManager = new fn(1952).BatchInvocationManager(
  (arg0) => {
    const resolved = Promise.resolve(arg0);
    return resolved.then((result) => {
      closure_0 = result;
      c1 = false;
      closure_0(dependencyMap[6]).batchUpdates(() => {
        state.setState((candidates) => {
          let obj = {};
          const merged = Object.assign(candidates);
          obj.candidates = new Map(candidates.candidates);
          const map = new Map(candidates.candidates);
          obj.currentlyShown = new Set(candidates.currentlyShown);
          const set = new Set(candidates.currentlyShown);
          obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
          let arr = closure_1_0;
          if (closure_1_0 === undefined) {
            candidates = obj.candidates;
            const items = [];
            HermesBuiltin.arraySpread(candidates.keys(), 0);
            arr = items;
          }
          const found = arr.filter((item) => {
            const candidates = obj.candidates;
            return candidates.has(item);
          });
          let hasItem = null !== obj.prevFatigableCandidate;
          if (hasItem) {
            const candidates2 = obj.candidates;
            hasItem = candidates2.has(obj.prevFatigableCandidate.content);
          }
          if (hasItem) {
            hasItem = found.length > 1;
          }
          let found1 = found;
          if (hasItem) {
            found1 = found.filter((item) => {
              const prevFatigableCandidate = obj.prevFatigableCandidate;
              let content;
              if (prevFatigableCandidate != null) {
                content = prevFatigableCandidate.content;
              }
              return item !== content;
            });
          }
          const candidates3 = obj.candidates;
          value = candidates3.get(found1[Math.floor(Math, Math.random(Math) * found1.length)]);
          closure_1 = null != value;
          obj = value;
          const candidates4 = obj.candidates;
          const items1 = [...candidates4.keys()];
          const shownFatigableCandidate = obj.shownFatigableCandidate;
          const found2 = items1.filter((item) => {
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
          closure_2_8(obj, value, found2);
          return obj;
        });
      });
      if (c1) {
        navigation.reset();
      }
      let obj = closure_0(dependencyMap[6]);
    });
  },
  { delay: 250, maxConcurrentInvocations: 1 },
);
const Store = initializeDefault.Store;
class DismissibleContentShownStateStore extends Store {}
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
        const obj = {
          candidates: new Map(),
          shownFatigableCandidate: null,
          prevFatigableCandidate: null,
          recentlyShown: [],
          currentlyShown: null,
          currentlyShownGroup: null,
          lastWinnerTime: 0,
          postConnectionOpen: false,
        };
        const map = new Map();
        obj.currentlyShown = new Set();
        const set = new Set();
        obj.currentlyShownGroup = new Set();
        obj.postConnectionOpen = true;
        return obj;
      });
    });
    batchInvocationManager.reset();
  },
  LOGOUT() {
    ReactBatchUpdates.batchUpdates(() => {
      state.setState(() => {
        const obj = {
          candidates: new Map(),
          shownFatigableCandidate: null,
          prevFatigableCandidate: null,
          recentlyShown: [],
          currentlyShown: null,
          currentlyShownGroup: null,
          lastWinnerTime: 0,
          postConnectionOpen: false,
        };
        const map = new Map();
        obj.currentlyShown = new Set();
        const set = new Set();
        obj.currentlyShownGroup = new Set();
        obj.postConnectionOpen = true;
        return obj;
      });
    });
    batchInvocationManager.reset();
  },
};
const dismissibleContentShownStateStore = new DismissibleContentShownStateStore(DispatcherDefault, identity);
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentShownStateStore.tsx");

export default function useDismissibleContentShownStateStore(arg0, arg1) {
  return closure_6(arg0, arg1);
}
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
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE =
    require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  closure_1 = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(content.content);
  dependencyMap = null;
  require("ReactBatchUpdates").batchUpdates(() => {
    state.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      const set = new Set(candidates.currentlyShown);
      obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
      if (closure_2_7) {
        return obj;
      } else if (closure_1_1) {
        withContent(obj, content);
        state = obj;
      } else {
        candidates = obj.candidates;
        const result = candidates.set(content.content, content);
        const tmp9 = withUpdateWinner(obj, content.content);
        closure_2 = tmp9;
        state = tmp9.state;
      }
      const set1 = new Set(candidates.currentlyShownGroup);
    });
  });
  if (null != dependencyMap) {
    let tmp3 = "settled" === dependencyMap.arbitration.type;
    if (!tmp3) {
      tmp3 = "request" === tmp9.arbitration.type && false;
      const tmp2 = "request" === tmp9.arbitration.type && false;
    }
    if (tmp3) {
      batchInvocationManager.reset();
    }
    if ("request" === dependencyMap.arbitration.type) {
      batchInvocationManager.queue(tmp9.arbitration.candidates).catch(NOOP);
      const queueResult = batchInvocationManager.queue(tmp9.arbitration.candidates);
    }
  }
  let obj = require("ReactBatchUpdates");
};
export const removeCandidateContent = function removeCandidateContent(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = null;
  c3 = false;
  c4 = false;
  require("ReactBatchUpdates").batchUpdates(() => {
    state.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      const set = new Set(candidates.currentlyShown);
      obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
      const shownFatigableCandidate = obj.shownFatigableCandidate;
      content = undefined;
      if (shownFatigableCandidate != null) {
        content = shownFatigableCandidate.content;
      }
      closure_3 = content === content.content;
      if (closure_1_1) {
        const candidates2 = obj.candidates;
        candidates2.delete(tmp6.content);
        if (null != tmp6) {
          if (null != tmp6.content) {
            const currentlyShown2 = obj.currentlyShown;
            currentlyShown2.delete(tmp6.content);
          }
          if (null != tmp6.groupName) {
            const currentlyShownGroup2 = obj.currentlyShownGroup;
            currentlyShownGroup2.delete(tmp6.groupName);
          }
          const shownFatigableCandidate3 = obj.shownFatigableCandidate;
          let content1;
          if (shownFatigableCandidate3 != null) {
            content1 = shownFatigableCandidate3.content;
          }
          if (content1 === tmp6.content) {
            obj.shownFatigableCandidate = null;
          }
        }
        const tmp12Result = withUpdateWinner(obj, null);
        closure_2 = tmp12Result;
        return tmp12Result.state;
      } else {
        candidates = obj.candidates;
        candidates.delete(tmp6.content);
        if (null != tmp6) {
          if (null != tmp6.content) {
            const currentlyShown = obj.currentlyShown;
            currentlyShown.delete(tmp6.content);
          }
          if (null != tmp6.groupName) {
            const currentlyShownGroup = obj.currentlyShownGroup;
            currentlyShownGroup.delete(tmp6.groupName);
          }
          const shownFatigableCandidate2 = obj.shownFatigableCandidate;
          let content2;
          if (shownFatigableCandidate2 != null) {
            content2 = shownFatigableCandidate2.content;
          }
          if (content2 === tmp6.content) {
            obj.shownFatigableCandidate = null;
          }
        }
        let tmp11 = closure_3;
        if (!closure_3) {
          tmp11 = 0 === obj.candidates.size;
        }
        closure_4 = tmp11;
        return obj;
      }
      const set1 = new Set(candidates.currentlyShownGroup);
    });
  });
  if (null != dependencyMap) {
    let tmp7 = "settled" === dependencyMap.arbitration.type;
    if (!tmp7) {
      tmp7 = "request" === tmp5.arbitration.type && tmp6;
      const tmp8 = "request" === tmp5.arbitration.type && tmp6;
    }
    if (tmp7) {
      batchInvocationManager.reset();
    }
    if ("request" === dependencyMap.arbitration.type) {
      batchInvocationManager.queue(tmp5.arbitration.candidates).catch(NOOP);
      const queueResult = batchInvocationManager.queue(tmp5.arbitration.candidates);
    }
  } else if (c4) {
    batchInvocationManager.reset();
  }
  let obj = require("ReactBatchUpdates");
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
      const CONTENT_TYPES_WITH_BYPASS_FATIGUE =
        require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
      return !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(item);
    }).length,
  ];
  return items1;
};
export const reset = function reset() {
  ReactBatchUpdates.batchUpdates(() => {
    state.setState(() => {
      const obj = {
        candidates: new Map(),
        shownFatigableCandidate: null,
        prevFatigableCandidate: null,
        recentlyShown: [],
        currentlyShown: null,
        currentlyShownGroup: null,
        lastWinnerTime: 0,
        postConnectionOpen: false,
      };
      const map = new Map();
      obj.currentlyShown = new Set();
      const set = new Set();
      obj.currentlyShownGroup = new Set();
      obj.postConnectionOpen = true;
      return obj;
    });
  });
  batchInvocationManager.reset();
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
