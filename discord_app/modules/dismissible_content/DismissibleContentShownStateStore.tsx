// discord_app/modules/dismissible_content/DismissibleContentShownStateStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import react from "../../../_runtime/00576_react.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import react_native from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig.tsx";
import DismissibleContentServerArbitrationConstants from "server/DismissibleContentServerArbitrationConstants.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import isActionRequiredDefault from "../core/isActionRequired.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import LoginRequiredActionStore from "../auth/LoginRequiredActionStore.tsx";
import UserRequiredActionStore from "../../stores/UserRequiredActionStore.tsx";
import Constants from "../../Constants.tsx";
import 01254__ from "../../../_runtime/metro/01254__.js";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let body, closure_3, closure_4, context, dependencyMap;

let metroImportDefault;
let metroRequire;
const f85678 = (item) => {
  content = undefined;
  if (content != null) {
    content = content.content;
  }
  return item !== content;
};
const f85680 = () => {
  state.setState(() => {
    obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: new Set(), currentlyShownGroup: new Set(), lastWinnerTime: 0, postConnectionOpen: true };
    new Map();
    new Set();
    new Set();
    return obj;
  });
};
function withContent(currentlyShown, content) {
  let found;
  let closure_0 = content;
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
        const self = this;
        const self2 = this;
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
let obj = function _arbitrateCandidates() {
  let pending;
  obj = _asyncToGenerator(async (context, arg1) => {
    context = arg1;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let items;
      let obj8;
      function addWeightsToClientCandidates(arr) {
        return arr.map((content) => ({ content, weight: 1 }));
      }
      function validateArbitrationResponseCandidates(found, candidates) {
        const mapped = candidates.map((content) => content.content);
        found = mapped.filter((item, index) => mapped.indexOf(item) !== index);
        if (found.length > 0) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const self3 = this;
          const self4 = this;
          const error = new Error("Duplicate content in dismissible content arbitration response: " + found.join(", "));
          throw error;
        } else {
          const found1 = mapped.filter((item) => !found.includes(item));
          if (found1.length > 0) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            const error1 = new Error("Unexpected content in dismissible content arbitration response: " + found1.join(", "));
            throw error1;
          } else {
            return candidates;
          }
        }
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let found;
          c5 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              body = undefined;
              found = context.filter((item) => set.has(item));
              const tmp28 = addWeightsToClientCandidates(context.filter((item) => !set.has(item)));
              candidates = tmp28;
              if (0 === found.length) {
                c5 = 3;
                return { value: { context, candidates: tmp28, outcome: "client-only" }, done: true };
              } else if (pending.pending) {
                c5 = 3;
                return { value: { context, candidates: tmp28, outcome: "server-backoff" }, done: true };
              } else {
                c4 = 1;
                const HTTP = require("HTTPUtils").HTTP;
                const request = { url: constants.DISMISSIBLE_CONTENT_ARBITRATE, body: obj8, oldFormErrors: true, rejectWithError: true };
                const post = HTTP.post;
                c3 = 2;
                c5 = 1;
                obj8 = { candidates: found.map((content) => ({ content })) };
                const obj9 = { value: post(request), done: false };
                return obj9;
              }
            }
          } else if (1 === tmp4) {
            c4 = 0;
            c5 = 3;
            return { value: { context, candidates, outcome: "server-failure" }, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            return { value, done: true };
          } else {
            body = value;
            candidates = body.body.candidates;
            validateArbitrationResponseCandidates(found, candidates);
            const obj13 = { context, candidates: items, outcome: "server-success" };
            items = [];
            HermesBuiltin.arraySpread(items, candidates, HermesBuiltin.arraySpread(items, candidates, 0));
            c4 = 0;
            c5 = 3;
            return { value: obj13, done: true };
          }
        } catch (tmp11) {
          if (0 === c4) {
            c5 = 3;
            throw tmp11;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function withUpdateWinner(candidates, content) {
  let items;
  let items2;
  let items3;
  let obj8;
  if (0 === candidates.candidates.size) {
    return { state: candidates, arbitration: { type: "settled" } };
  } else {
    let tmp14;
    let tmp22;
    const _Date2 = Date;
    const self4 = this;
    const self3 = this;
    let hasItem = null != candidates.prevFatigableCandidate;
    const date = new Date();
    const diff = date.getTime() - candidates.lastWinnerTime;
    if (hasItem) {
      candidates = candidates.candidates;
      hasItem = candidates.has(candidates.prevFatigableCandidate.content);
    }
    if (hasItem) {
      hasItem = null == candidates.shownFatigableCandidate;
    }
    if (hasItem) {
      if (diff <= 300000) {
        obj = { state: null, arbitration: null };
        if (batchInvocationManager.isInvoking()) {
          let obj4;
          obj.state = candidates;
          if (null != content) {
            const obj3 = { type: "request", candidates: items };
            items = [content];
            obj4 = obj3;
          } else {
            obj4 = { type: "unchanged" };
          }
          obj.arbitration = obj4;
          tmp14 = obj;
        } else {
          let value;
          if (null != candidates.prevFatigableCandidate) {
            const candidates2 = candidates.candidates;
            value = candidates2.get(candidates.prevFatigableCandidate.content);
          }
          const candidates3 = candidates.candidates;
          const items1 = [];
          HermesBuiltin.arraySpread(items1, candidates3.keys(), 0);
          const shownFatigableCandidate = candidates.shownFatigableCandidate;
          const found = items1.filter(f85678);
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
          tmp14 = obj;
        }
      }
      return tmp14;
    }
    if (null != candidates.shownFatigableCandidate) {
      let obj5;
      if (diff <= 300000) {
        obj5 = { state: candidates, arbitration: { type: "settled" } };
      }
      tmp14 = obj5;
    }
    if (batchInvocationManager.isPending()) {
      const obj6 = { state: candidates, arbitration: obj8 };
      if (null != content) {
        const obj7 = { type: "request", candidates: items2 };
        items2 = [content];
        obj8 = obj7;
      } else {
        obj8 = { type: "unchanged" };
      }
      tmp22 = obj6;
    } else {
      const _Date = Date;
      const self2 = this;
      const self = this;
      let tmp19 = null == candidates.shownFatigableCandidate;
      new Date();
      if (tmp19) {
        tmp19 = tmp18 - candidates.lastWinnerTime < 3600000;
      }
      const obj9 = { state: candidates, arbitration: null };
      if (tmp19) {
        obj9.arbitration = { type: "unchanged" };
        tmp22 = obj9;
      } else {
        const candidates4 = candidates.candidates;
        const obj10 = { type: "request", candidates: items3 };
        items3 = [];
        HermesBuiltin.arraySpread(items3, candidates4.keys(), 0);
        obj9.arbitration = obj10;
        tmp22 = obj9;
      }
    }
    obj5 = tmp22;
  }
}
function applyWinnerUpdateResult(c2) {
  let flag = c3;
  if (c3 === undefined) {
    flag = false;
  }
  if ("settled" === dependencyMap.arbitration.type) {
    closure_10 = {};
    c11 = null;
    closure_9.succeed();
    batchInvocationManager.reset();
  } else if (flag) {
    closure_9.succeed();
  }
  if ("request" === dependencyMap.arbitration.type) {
    const isPendingResult = batchInvocationManager.isPending();
    const tmp8 = !isPendingResult && !batchInvocationManager.isInvoking() && closure_9.fails >= 3;
    if (tmp8) {
      closure_9.succeed();
    }
    if (closure_10 === closure_10) {
      if (!batchInvocationManager.isPending()) {
        c11 = { epoch: tmp13, source: "candidate" };
        obj = { epoch: tmp13, source: "candidate" };
      }
      const queueResult = batchInvocationManager.queue(tmp12);
      queueResult.catch(metroImportDefault);
    }
  }
}
function invalidateArbitration() {
  closure_10 = {};
  c11 = null;
  closure_9.succeed();
  batchInvocationManager.reset();
}
function isInCooldown() {
  const state = closure_12.getState();
  new Date();
  return null == state.shownFatigableCandidate && tmp3 - state.lastWinnerTime < 3600000;
}
const SERVER_ARBITRATION_CANDIDATES = DismissibleContentServerArbitrationConstants.SERVER_ARBITRATION_CANDIDATES;
({ Endpoints: metroRequire, NOOP: metroImportDefault } = Constants);
const set = new Set(SERVER_ARBITRATION_CANDIDATES);
let tmp5 = new BackoffDefault(1000, 60000);
let closure_9 = tmp5;
let closure_10 = {};
let c11 = null;
let closure_12 = module_1254.createWithEqualityFn(function initState() {
  obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: new Set(), currentlyShownGroup: new Set(), lastWinnerTime: 0, postConnectionOpen: false };
  new Map();
  new Set();
  new Set();
  return obj;
});
let closure_13 = false;
const BatchInvocationManager = Timers.BatchInvocationManager;
let _require = _asyncToGenerator(async (arg0) => {
  let tmp;
  let tmp4;
  let value;
  function arbitrateCandidates() {
    return closure_1_15(...arguments);
  }
  function applyArbitrateCandidatesResult(outcome) {
    const tmp = "client-only" !== outcome.outcome && "server-success" !== outcome.outcome;
    if (!tmp) {
      closure_9.succeed();
    }
    if ("server-failure" === outcome.outcome) {
      state = state.getState();
      const _Date = Date;
      const self = this;
      const self2 = this;
      let tmp4 = null == state.shownFatigableCandidate;
      new Date();
      if (tmp4) {
        tmp4 = tmp13 - state.lastWinnerTime < 3600000;
      }
      if (tmp4) {
        closure_9.succeed();
      } else if (closure_9.fails >= 3) {
        closure_9.cancel();
      } else {
        closure_9.fail(() => {
          const candidates = state.getState().candidates;
          const items = [...candidates.keys()];
          let epoch = outcome.context.epoch;
          if (epoch === undefined) {
            epoch = closure_2_10;
          }
          if (epoch === closure_2_10) {
            const queueResult = pending.queue(items);
            queueResult.catch(closure_2_7);
          }
        });
      }
    }
  }
  closure_0 = arg0;
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      let closure_2;
      let closure_1;
      let c1;
      let num = 2;
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp4;
          closure_1 = tmp;
          closure_0 = undefined;
          c1 = undefined;
          c11 = null;
          if (null != c11) {
            if (c11.epoch === closure_1_10) {
              const str = "retry";
              if ("retry" === c11.source) {
                if (isInCooldown()) {
                  const succeedResult = closure_1_9.succeed();
                }
              }
              c3 = 1;
              c4 = 1;
              const obj4 = { value: arbitrateCandidates(tmp35, c11), done: false };
              return obj4;
            }
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_0 = value;
        if (closure_0.context.epoch === closure_1_10) {
          if ("retry" === closure_0.context.source) {
            let tmp5 = closure_2;
            if (isInCooldown()) {
              const succeedResult1 = closure_1_9.succeed();
            }
          }
          let tmp7 = closure_1;
          const tmp10 = applyArbitrateCandidatesResult(closure_0);
          c1 = false;
          obj = closure_0(closure_2[10]);
          obj.batchUpdates(() => {
            state.setState((candidates) => {
              function nextFatigableContent(prevFatigableCandidate, candidates) {
                const found = candidates.filter((weight) => {
                  candidates = prevFatigableCandidate.candidates;
                  weight = weight.weight;
                  const hasItem = candidates.has(weight.content) && weight > 0;
                  return hasItem;
                });
                let hasItem = null !== prevFatigableCandidate.prevFatigableCandidate;
                if (hasItem) {
                  candidates = prevFatigableCandidate.candidates;
                  hasItem = candidates.has(prevFatigableCandidate.prevFatigableCandidate.content);
                }
                if (hasItem) {
                  hasItem = found.length > 1;
                }
                let found1 = found;
                if (hasItem) {
                  found1 = found.filter((content) => {
                    prevFatigableCandidate = prevFatigableCandidate.prevFatigableCandidate;
                    let content1;
                    content = content.content;
                    if (prevFatigableCandidate != null) {
                      content1 = prevFatigableCandidate.content;
                    }
                    return content !== content1;
                  });
                }
                const reduced = found1.reduce((acc, weight) => acc + weight.weight, 0);
                if (Number.isFinite(reduced)) {
                  if (reduced > 0) {
                    const _Math = Math;
                    let result = Math.random() * reduced;
                    for (const item10035 of found1) {
                      let diff = result - item10035.weight;
                      result = diff;
                      if (diff < 0) {
                        let candidates2 = prevFatigableCandidate.candidates;
                        let value = candidates2.get(item10035.content);
                        obj.return();
                        return value;
                      }
                    }
                  }
                }
              }
              obj = { candidates: new Map(candidates.candidates), currentlyShown: new Set(candidates.currentlyShown), currentlyShownGroup: new Set(candidates.currentlyShownGroup) };
              const merged = Object.assign(candidates);
              new Map(candidates.candidates);
              new Set(candidates.currentlyShown);
              new Set(candidates.currentlyShownGroup);
              const tmp5 = nextFatigableContent(obj, candidates.candidates);
              if (!closure_2_9.pending) {
                let tmp7 = null;
                closure_1 = null != tmp5;
                closure_0 = tmp5;
                candidates = obj.candidates;
                const items = [];
                HermesBuiltin.arraySpread(items, candidates.keys(), 0);
                const shownFatigableCandidate = obj.shownFatigableCandidate;
                let found = items.filter(f85678);
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
                closure_2_14(obj, tmp5, found);
              }
              return obj;
            });
          });
          const tmp14 = c1;
          if (tmp14) {
            invalidateArbitration();
          }
        }
      }
      c4 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp25) {
      c4 = 3;
      throw tmp25;
    }
  }
});
const batchInvocationManager = new BatchInvocationManager(function() {
  return closure_0(...arguments);
}, { delay: 250, maxConcurrentInvocations: 1 });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let closure_0 = arg0;
  obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function n(currentlyShown) {
      currentlyShown = currentlyShown.currentlyShown;
      return currentlyShown.has(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return closure_12(tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  return closure_12((currentlyShown) => {
    currentlyShown = currentlyShown.currentlyShown;
    return currentlyShown.has(closure_0);
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let closure_0 = arg0;
  obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function n(arg0) {
      closure_0 = arg0;
      return closure_0.some((item) => {
        currentlyShown = currentlyShown.currentlyShown;
        return currentlyShown.has(item);
      });
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return closure_12(tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  return closure_12((arg0) => {
    closure_0 = arg0;
    return closure_0.some((item) => {
      currentlyShown = currentlyShown.currentlyShown;
      return currentlyShown.has(item);
    });
  });
});
function isStateInCooldown(shownFatigableCandidate) {
  new Date();
  return null == shownFatigableCandidate.shownFatigableCandidate && tmp2 - shownFatigableCandidate.lastWinnerTime < 3600000;
}
function reset() {
  obj = react_native;
  obj.batchUpdates(f85680);
  closure_10 = {};
  c11 = null;
  closure_9.succeed();
  batchInvocationManager.reset();
}
const Store = get_initializedDefault.Store;
class DismissibleContentShownStateStore extends Store {
  initialize() {
    const self = this;
    this.waitFor(LoginRequiredActionStore, UserRequiredActionStore);
    const items = [LoginRequiredActionStore, UserRequiredActionStore];
    this.syncWith(items, () => self.setHasRequiredAction());
  }
  setHasRequiredAction() {
    closure_13 = isActionRequiredDefault(LoginRequiredActionStore, UserRequiredActionStore);
  }
}
const prototype = DismissibleContentShownStateStore.prototype;
DismissibleContentShownStateStore.displayName = "DismissibleContentShownStateStore";
obj = {
  CONNECTION_OPEN() {
    obj = react_native;
    obj.batchUpdates(f85680);
    closure_10 = {};
    c11 = null;
    closure_9.succeed();
    batchInvocationManager.reset();
  },
  LOGOUT() {
    let state;
    obj = react_native;
    obj.batchUpdates(f85680);
    closure_10 = {};
    c11 = null;
    closure_9.succeed();
    batchInvocationManager.reset();
  }
};
const dismissibleContentShownStateStore = new DismissibleContentShownStateStore(DispatcherDefault, obj);
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentShownStateStore.tsx");

export default (arg0, arg1) => closure_12(arg0, arg1);
export { isInCooldown };
export { isStateInCooldown };
export const addCandidateContent = function addCandidateContent(content) {
  let c2;
  _require = content;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let closure_1 = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(content.content);
  dependencyMap = null;
  obj = require("react-native");
  obj.batchUpdates(() => {
    state.setState((candidates) => {
      obj = { candidates: new Map(candidates.candidates), currentlyShown: new Set(candidates.currentlyShown), currentlyShownGroup: new Set(candidates.currentlyShownGroup) };
      const merged = Object.assign(candidates);
      new Map(candidates.candidates);
      new Set(candidates.currentlyShown);
      let tmp5 = obj;
      new Set(candidates.currentlyShownGroup);
      if (!closure_2_13) {
        if (closure_1_1) {
          withContent(obj, content);
          state = obj;
        } else {
          candidates = obj.candidates;
          const result = candidates.set(content.content, content);
          const tmp10 = withUpdateWinner(obj, content.content);
          closure_2 = tmp10;
          state = tmp10.state;
        }
        tmp5 = state;
      }
      return tmp5;
    });
  });
  if (null != dependencyMap) {
    applyWinnerUpdateResult(dependencyMap);
  }
};
export const removeCandidateContent = function removeCandidateContent(arg0, arg1) {
  let c2;
  let closure_0;
  let state;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = null;
  let c3 = false;
  let c4 = false;
  obj = require("react-native");
  obj.batchUpdates(() => {
    state.setState((candidates) => {
      obj = { candidates: new Map(candidates.candidates), currentlyShown: new Set(candidates.currentlyShown), currentlyShownGroup: new Set(candidates.currentlyShownGroup) };
      const merged = Object.assign(candidates);
      new Map(candidates.candidates);
      new Set(candidates.currentlyShown);
      const shownFatigableCandidate = obj.shownFatigableCandidate;
      content = undefined;
      new Set(candidates.currentlyShownGroup);
      if (shownFatigableCandidate != null) {
        content = shownFatigableCandidate.content;
      }
      closure_3 = content === content.content;
      if (closure_1_1) {
        const candidates2 = obj.candidates;
        candidates2.delete(content.content);
        if (null != content) {
          if (null != content.content) {
            const currentlyShown2 = obj.currentlyShown;
            currentlyShown2.delete(content.content);
          }
          if (null != content.groupName) {
            const currentlyShownGroup2 = obj.currentlyShownGroup;
            currentlyShownGroup2.delete(content.groupName);
          }
          const shownFatigableCandidate3 = obj.shownFatigableCandidate;
          let content1;
          if (shownFatigableCandidate3 != null) {
            content1 = shownFatigableCandidate3.content;
          }
          if (content1 === content.content) {
            obj.shownFatigableCandidate = null;
          }
        }
        const tmp13Result = withUpdateWinner(obj, null);
        closure_2 = tmp13Result;
        return tmp13Result.state;
      } else {
        candidates = obj.candidates;
        candidates.delete(content.content);
        if (null != content) {
          if (null != content.content) {
            const currentlyShown = obj.currentlyShown;
            currentlyShown.delete(content.content);
          }
          if (null != content.groupName) {
            const currentlyShownGroup = obj.currentlyShownGroup;
            currentlyShownGroup.delete(content.groupName);
          }
          const shownFatigableCandidate2 = obj.shownFatigableCandidate;
          let content2;
          if (shownFatigableCandidate2 != null) {
            content2 = shownFatigableCandidate2.content;
          }
          if (content2 === content.content) {
            obj.shownFatigableCandidate = null;
          }
        }
        closure_4 = closure_3 || 0 === obj.candidates.size;
        return obj;
      }
    });
  });
  if (null != dependencyMap) {
    applyWinnerUpdateResult(dependencyMap, c3);
  } else {
    const tmp2 = c4;
    if (tmp2) {
      closure_10 = {};
      c11 = null;
      closure_9.succeed();
      batchInvocationManager.reset();
    }
  }
};
export const getLastShownDismissibleContent = function getLastShownDismissibleContent() {
  let first = closure_12.getState().recentlyShown[0];
  if (first == null) {
    first = null;
  }
  return first;
};
export const getCurrentFatigableWinner = function getCurrentFatigableWinner() {
  const shownFatigableCandidate = closure_12.getState().shownFatigableCandidate;
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
  const currentlyShown = closure_12.getState().currentlyShown;
  return currentlyShown.has(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
};
export const useIsContentShown = tmp7;
export const useIsAnyContentShown = tmp8;
export const isAnyContentShown = function isAnyContentShown(arr) {
  const currentlyShown = closure_12.getState().currentlyShown;
  return arr.find((item) => currentlyShown.has(item));
};
export const getCurrentlyShownCounts = function getCurrentlyShownCounts() {
  const items = [...closure_12.getState().currentlyShown];
  const items1 = [, ];
  const length = items.filter((item) => {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require("DismissibleContentFatigueConfig").CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    return !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(item);
  }).length;
  items1[0] = closure_12.getState().currentlyShown.size;
  items1[1] = length;
  return items1;
};
export { reset };
export const resetFatigueCooldown = function resetFatigueCooldown() {
  let state;
  obj = react_native;
  obj.batchUpdates(() => {
    state.setState((candidates) => {
      obj = { candidates: new Map(candidates.candidates), currentlyShown: new Set(candidates.currentlyShown), currentlyShownGroup: new Set(candidates.currentlyShownGroup), prevFatigableCandidate: null, lastWinnerTime: 0 };
      const merged = Object.assign(candidates);
      new Map(candidates.candidates);
      new Set(candidates.currentlyShown);
      new Set(candidates.currentlyShownGroup);
      return obj;
    });
  });
};
export const isPostConnectionOpen = function isPostConnectionOpen() {
  return closure_12.getState().postConnectionOpen;
};
export { dismissibleContentShownStateStore };