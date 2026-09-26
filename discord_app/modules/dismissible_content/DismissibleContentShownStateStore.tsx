// === Module 2035: DismissibleContentShownStateStore ===

// Module 2035 (DismissibleContentShownStateStore)
import initializeDefault from "initialize" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import isActionRequiredDefault from "isActionRequired" /* 2041 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 2036 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2037 */;

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
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = content(2034).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
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
function addWeightsToClientCandidates(arr) {
  return arr.map((content) => ({ content, weight: 1 }));
}
let closure_16 = async function _arbitrateCandidates(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c5 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp17;
            closure_130_0 = context;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            if ((function isServerArbitrationEnabled() {
              const DismissibleContentServerArbitrationExperiment = closure_1_0(closure_1_2[8]).DismissibleContentServerArbitrationExperiment;
              return DismissibleContentServerArbitrationExperiment.getConfig({ location: "DismissibleContentShownStateStore" }).enabled;
            })()) {
              let found = closure_0.filter((item) => set.has(item));
              closure_130_1 = found;
              const tmp12 = addWeightsToClientCandidates(closure_0.filter((item) => !set.has(item)));
              closure_130_2 = tmp12;
              if (0 === found.length) {
                const obj4 = { context, candidates: tmp12, outcome: "client-only" };
                c5 = 3;
                const obj5 = { value: obj4, done: true };
                return obj5;
              } else if (pending.pending) {
                const obj6 = { context, candidates: tmp12, outcome: "server-backoff" };
                c5 = 3;
                const obj7 = { value: obj6, done: true };
                return obj7;
              } else {
                c4 = 1;
                const HTTP = closure_2_0(dependencyMap[9]).HTTP;
                const request = { url: constants.DISMISSIBLE_CONTENT_ARBITRATE, body: null, oldFormErrors: true, rejectWithError: true };
                const obj8 = { candidates: found.map((content) => ({ content })) };
                request.body = obj8;
                c3 = 2;
                c5 = 1;
                const obj9 = { value: HTTP.post(request), done: false };
                return obj9;
              }
            } else {
              const obj10 = { context, candidates: addWeightsToClientCandidates(closure_0), outcome: "client-only" };
              c5 = 3;
              const obj11 = { value: obj10, done: true };
              return obj11;
            }
          }
        } else if (1 === tmp6) {
          c4 = 0;
          const obj12 = { context: closure_130_0, candidates: closure_130_2, outcome: "server-failure" };
          c5 = 3;
          const obj13 = { value: obj12, done: true };
          return obj13;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c5 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_130_3 = value;
          const candidates = closure_130_3.body.candidates;
          (function validateArbitrationResponseCandidates(arg0, candidates) {
            closure_0 = arg0;
            const mapped = candidates.map((content) => content.content);
            const found = mapped.filter((item, index) => mapped.indexOf(item) !== index);
            if (found.length > 0) {
              const _Error2 = Error;
              const _HermesInternal2 = HermesInternal;
              const error = new Error("Duplicate content in dismissible content arbitration response: " + found.join(", "));
              throw error;
            } else {
              const found1 = mapped.filter((item) => !closure_0.includes(item));
              if (found1.length > 0) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error1 = new Error("Unexpected content in dismissible content arbitration response: " + found1.join(", "));
                throw error1;
              } else {
                return candidates;
              }
            }
          })(closure_130_1, candidates);
          closure_130_4 = candidates;
          const obj15 = { context: closure_130_0, candidates: null, outcome: "server-success" };
          const items = [];
          HermesBuiltin.arraySpread(closure_130_4, HermesBuiltin.arraySpread(closure_130_2, 0));
          obj15.candidates = items;
          c4 = 0;
          c5 = 3;
          const obj = { value: obj15, done: true };
          return obj;
        }
      } catch (tmp16) {
        if (tmp3 === c4) {
          c5 = tmp2;
          throw tmp16;
        } else {
          c3 = tmp;
        }
        tmp17 = c4;
      }
    }
  })();
};
function withUpdateWinner(candidates, content) {
  if (0 === candidates.candidates.size) {
    const obj2 = { state: candidates, arbitration: { type: "settled" } };
    return obj2;
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
        const obj = { state: null, arbitration: null };
        if (batchInvocationManager.isInvoking()) {
          obj.state = candidates;
          if (null != content) {
            const obj3 = { type: "request", candidates: null };
            const items = [content];
            obj3.candidates = items;
            let obj4 = obj3;
          } else {
            obj4 = { type: "unchanged" };
          }
          obj.arbitration = obj4;
        } else {
          value = undefined;
          if (null != candidates.prevFatigableCandidate) {
            const candidates2 = candidates.candidates;
            value = candidates2.get(candidates.prevFatigableCandidate.content);
          }
          const candidates3 = candidates.candidates;
          const items1 = [];
          HermesBuiltin.arraySpread(candidates3.keys(), 0);
          const shownFatigableCandidate = candidates.shownFatigableCandidate;
          const found = items1.filter((item) => {
            content = undefined;
            if (content != null) {
              content = content.content;
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
        const obj5 = { state: candidates, arbitration: { type: "settled" } };
      }
    }
    if (!batchInvocationManager.isPending()) {
      const _Date = Date;
      let tmp22 = null == candidates.shownFatigableCandidate;
      if (tmp22) {
        tmp22 = tmp21 - candidates.lastWinnerTime < 3600000;
      }
      const obj6 = { state: candidates, arbitration: null };
      if (tmp22) {
        obj6.arbitration = { type: "unchanged" };
      } else {
        const obj7 = { type: "request", candidates: null };
        const candidates4 = candidates.candidates;
        const items2 = [];
        HermesBuiltin.arraySpread(candidates4.keys(), 0);
        obj7.candidates = items2;
        obj6.arbitration = obj7;
      }
      const date1 = new Date();
    }
    const obj8 = { state: candidates, arbitration: null };
    if (null != content) {
      const obj9 = { type: "request", candidates: null };
      const items3 = [content];
      obj9.candidates = items3;
      let obj10 = obj9;
    } else {
      obj10 = { type: "unchanged" };
    }
    obj8.arbitration = obj10;
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
    let tmp8 = !isPendingResult;
    if (!isPendingResult) {
      tmp8 = !batchInvocationManager.isInvoking();
    }
    if (tmp8) {
      tmp8 = closure_9.fails >= 3;
    }
    if (tmp8) {
      closure_9.succeed();
    }
    if (closure_10 === closure_10) {
      if (!batchInvocationManager.isPending()) {
        const obj = { epoch: tmp13, source: "candidate" };
        c11 = obj;
      }
      batchInvocationManager.queue(tmp12).catch(React5);
      const queueResult = batchInvocationManager.queue(tmp12);
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
  let tmp4 = null == state.shownFatigableCandidate;
  if (tmp4) {
    tmp4 = tmp3 - state.lastWinnerTime < 3600000;
  }
  return tmp4;
}
const Constants = fn(1074);
({ Endpoints: metroRequire, NOOP: closure_7 } = Constants);
let set = new Set(fn(2038).SERVER_ARBITRATION_CANDIDATES);
let closure_9 = new BackoffDefault(1000, 60000);
let closure_10 = {};
let c11 = null;
const identity = fn(1243);
let closure_12 = identity.createWithEqualityFn(function initState() {
  const obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
  const map = new Map();
  obj.currentlyShown = new Set();
  set = new Set();
  obj.currentlyShownGroup = new Set();
  return obj;
});
let closure_13 = false;
let closure_0 = asyncGeneratorStep(async (arg0) => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
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
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          c11 = null;
          if (null != c11) {
            if (tmp38.epoch === closure_1_10) {
              if ("retry" === tmp38.source) {
                if (isInCooldown()) {
                  closure_1_9.succeed();
                }
              }
              c3 = 1;
              c4 = 1;
              const obj4 = {
                value: (function arbitrateCandidates() {
                              const self = this;
                              const apply = closure_1_16.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(tmp37, tmp38),
                done: false
              };
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
        closure_129_0 = value;
        if (closure_129_0.context.epoch === closure_1_10) {
          if ("retry" !== closure_129_0.context.source) {
            (function applyArbitrateCandidatesResult(outcome) {
              let tmp = "client-only" !== outcome.outcome;
              if (tmp) {
                tmp = "server-success" !== outcome.outcome;
              }
              if (!tmp) {
                closure_9.succeed();
              }
              if ("server-failure" === outcome.outcome) {
                state = state.getState();
                const _Date = Date;
                let tmp4 = null == state.shownFatigableCandidate;
                if (tmp4) {
                  tmp4 = tmp15 - state.lastWinnerTime < 3600000;
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
                      if (!pending.isPending()) {
                        { epoch: null, source: "retry" }.epoch = epoch;
                        obj2 = { epoch: null, source: "retry" };
                      }
                      pending.queue(items).catch(closure_2_7);
                      const queueResult = pending.queue(items);
                    }
                  });
                }
                const date = new Date();
              }
            })(closure_129_0);
            closure_129_1 = false;
            closure_0(tmp5[11]).batchUpdates(() => {
              state.setState((candidates) => {
                const obj = {};
                const merged = Object.assign(candidates);
                obj.candidates = new Map(candidates.candidates);
                const map = new Map(candidates.candidates);
                obj.currentlyShown = new Set(candidates.currentlyShown);
                set = new Set(candidates.currentlyShown);
                obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
                const tmp5 = (function nextFatigableContent(prevFatigableCandidate, candidates) {
                  const found = candidates.filter((content) => {
                    candidates = prevFatigableCandidate.candidates;
                    let hasItem = candidates.has(content.content);
                    if (hasItem) {
                      hasItem = content.weight > 0;
                    }
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
                      content = undefined;
                      if (prevFatigableCandidate != null) {
                        content = prevFatigableCandidate.content;
                      }
                      return content.content !== content;
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
                          let candidates2 = arg0.candidates;
                          value = candidates2.get(item10035.content);
                          obj.return();
                          return value;
                        }
                      }
                    }
                  }
                })(obj, candidates.candidates);
                if (!closure_2_9.pending) {
                  closure_1 = null != tmp5;
                  let content = tmp5;
                  candidates = obj.candidates;
                  const items = [];
                  HermesBuiltin.arraySpread(candidates.keys(), 0);
                  const shownFatigableCandidate = obj.shownFatigableCandidate;
                  let found = items.filter((item) => {
                    content = undefined;
                    if (content != null) {
                      content = content.content;
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
                    content = undefined;
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
            if (closure_129_1) {
              invalidateArbitration();
            }
            let obj = closure_0(tmp5[11]);
          }
          closure_1_9.succeed();
        }
      }
      c4 = 3;
    } catch (tmp26) {
      c4 = tmp;
      throw tmp26;
    }
  }
});
const batchInvocationManager = new fn(2040).BatchInvocationManager(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}, { delay: 250, maxConcurrentInvocations: 1 });
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
  closure_13 = isActionRequiredDefault(LoginRequiredActionStore, UserRequiredActionStore);
};
DismissibleContentShownStateStore.displayName = "DismissibleContentShownStateStore";
const dismissibleContentShownStateStore = new DismissibleContentShownStateStore(DispatcherDefault, {
  CONNECTION_OPEN() {
    closure_0(1248).batchUpdates(() => {
      state.setState(() => {
        const obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
        const map = new Map();
        obj.currentlyShown = new Set();
        set = new Set();
        obj.currentlyShownGroup = new Set();
        obj.postConnectionOpen = true;
        return obj;
      });
    });
    closure_10 = {};
    c11 = null;
    closure_9.succeed();
    batchInvocationManager.reset();
  },
  LOGOUT() {
    closure_0(1248).batchUpdates(() => {
      state.setState(() => {
        const obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
        const map = new Map();
        obj.currentlyShown = new Set();
        set = new Set();
        obj.currentlyShownGroup = new Set();
        obj.postConnectionOpen = true;
        return obj;
      });
    });
    closure_10 = {};
    c11 = null;
    closure_9.succeed();
    batchInvocationManager.reset();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentShownStateStore.tsx");

export default function useDismissibleContentShownStateStore(arg0, arg1) {
  return closure_12(arg0, arg1);
};
export { isInCooldown };
export const isStateInCooldown = function isStateInCooldown(shownFatigableCandidate) {
  new Date();
  let tmp3 = null == shownFatigableCandidate.shownFatigableCandidate;
  if (tmp3) {
    tmp3 = tmp2 - shownFatigableCandidate.lastWinnerTime < 3600000;
  }
  return tmp3;
};
export const addCandidateContent = function addCandidateContent(content) {
  closure_0 = content;
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = closure_0(2034).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  closure_1 = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(content.content);
  dependencyMap = null;
  closure_0(1248).batchUpdates(() => {
    state.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      set = new Set(candidates.currentlyShown);
      obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
      if (closure_2_13) {
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
    applyWinnerUpdateResult(dependencyMap);
  }
  let obj = closure_0(1248);
};
export const removeCandidateContent = function removeCandidateContent(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  dependencyMap = null;
  c3 = false;
  c4 = false;
  closure_0(1248).batchUpdates(() => {
    state.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      set = new Set(candidates.currentlyShown);
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
    applyWinnerUpdateResult(dependencyMap, c3);
  } else if (c4) {
    closure_10 = {};
    c11 = null;
    closure_9.succeed();
    batchInvocationManager.reset();
  }
  let obj = closure_0(1248);
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
export const useIsContentShown = function useIsContentShown(USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) {
  closure_0 = USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
  return closure_12((currentlyShown) => {
    currentlyShown = currentlyShown.currentlyShown;
    return currentlyShown.has(closure_0);
  });
};
export const useIsAnyContentShown = function useIsAnyContentShown(arg0) {
  closure_0 = arg0;
  return closure_12((arg0) => {
    let currentlyShown = arg0;
    return currentlyShown.some((item) => {
      currentlyShown = currentlyShown.currentlyShown;
      return currentlyShown.has(item);
    });
  });
};
export const isAnyContentShown = function isAnyContentShown(arr) {
  const currentlyShown = closure_12.getState().currentlyShown;
  return arr.find((item) => currentlyShown.has(item));
};
export const getCurrentlyShownCounts = function getCurrentlyShownCounts() {
  const items = [...closure_12.getState().currentlyShown];
  const items1 = [
    closure_12.getState().currentlyShown.size,
    items.filter((item) => {
      const CONTENT_TYPES_WITH_BYPASS_FATIGUE = closure_1_0(dependencyMap[7]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
      return !CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(item);
    }).length
  ];
  return items1;
};
export const reset = function reset() {
  closure_0(1248).batchUpdates(() => {
    state.setState(() => {
      const obj = { candidates: new Map(), shownFatigableCandidate: null, prevFatigableCandidate: null, recentlyShown: [], currentlyShown: null, currentlyShownGroup: null, lastWinnerTime: 0, postConnectionOpen: false };
      const map = new Map();
      obj.currentlyShown = new Set();
      set = new Set();
      obj.currentlyShownGroup = new Set();
      obj.postConnectionOpen = true;
      return obj;
    });
  });
  closure_10 = {};
  c11 = null;
  closure_9.succeed();
  batchInvocationManager.reset();
};
export const resetFatigueCooldown = function resetFatigueCooldown() {
  closure_0(1248).batchUpdates(() => {
    state.setState((candidates) => {
      const obj = {};
      const merged = Object.assign(candidates);
      obj.candidates = new Map(candidates.candidates);
      const map = new Map(candidates.candidates);
      obj.currentlyShown = new Set(candidates.currentlyShown);
      set = new Set(candidates.currentlyShown);
      obj.currentlyShownGroup = new Set(candidates.currentlyShownGroup);
      obj.prevFatigableCandidate = null;
      obj.lastWinnerTime = 0;
      return obj;
    });
  });
};
export const isPostConnectionOpen = function isPostConnectionOpen() {
  return closure_12.getState().postConnectionOpen;
};
export { dismissibleContentShownStateStore };