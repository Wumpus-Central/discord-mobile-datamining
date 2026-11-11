// === Module 10150: ICYMIActionCreators ===

// Module 10150 (ICYMIActionCreators)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import UserSettings from "UserSettings" /* 5068 */;
import DiscoverRequestState from "DiscoverRequestState" /* 10146 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 10147 */;
import ICYMIExperiment from "ICYMIExperiment" /* 10153 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10151 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import Dispatcher_mod from "Dispatcher" /* 572 */;

require = fn;
function notifyDiscoverRequestListeners() {
  for (const item10005 of set) {
    let item10005Result = item10005();
    continue;
  }
}
function setDiscoverUser(arg0) {
  if (id !== arg0) {
    c13 = null;
    closure_12 = {};
    if (_null != null) {
      _null.abort();
    }
    closure_16 = {};
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.resetSession();
    id = arg0;
    authSessionIdHash = null;
  }
}
function setDiscoverAuthSessionIdHash(arg0) {
  if (null != arg0) {
    let tmp2 = null != authSessionIdHash;
    if (tmp2) {
      tmp2 = authSessionIdHash !== arg0;
    }
    if (tmp2) {
      c13 = null;
      closure_12 = {};
      if (_null != null) {
        _null.abort();
      }
      closure_16 = {};
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      discoverRequestGuard.resetSession();
    }
    authSessionIdHash = arg0;
  }
}
let closure_20 = async function _dispatchDiscoverPickerCommit() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    await Dispatcher.dispatch({ type: "DISCOVER_PICKER_COMMIT", identity });
    if (1 === tmp7) {
      c4 = 0;
      closure_129_0 = closure_3;
      closure_130_1(closure_130_2[7]).captureException(closure_129_0);
      c6 = 3;
      closure_130_1(closure_130_2[7]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c4 = 0;
    }
    return value;
  })();
};
function fetchDiscoverDehydrated(arg0) {
  ({ isInitialLoad: require, isReloading: importDefault, isDiscoverPickerCommit } = arg0);
  closure_4 = undefined;
  AuthenticationStore = undefined;
  UserStore = undefined;
  authSessionIdHash = undefined;
  closure_8 = undefined;
  c9 = undefined;
  closure_13 = undefined;
  closure_10 = function isSameUser() {
    let isAuthenticatedResult = closure_6 === closure_16;
    if (isAuthenticatedResult) {
      isAuthenticatedResult = null != id;
    }
    if (isAuthenticatedResult) {
      isAuthenticatedResult = AuthenticationStore.isAuthenticated();
    }
    if (isAuthenticatedResult) {
      isAuthenticatedResult = AuthenticationStore.getId() === id;
    }
    if (isAuthenticatedResult) {
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      isAuthenticatedResult = id === id;
    }
    if (isAuthenticatedResult) {
      authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
      if (authSessionIdHash == null) {
        authSessionIdHash = null;
      }
      isAuthenticatedResult = authSessionIdHash === authSessionIdHash.authSessionIdHash;
    }
    return isAuthenticatedResult;
  };
  function canRun() {
    let canRunResult = closure_10();
    if (canRunResult) {
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      canRunResult = discoverRequestGuard.canRun(closure_7, WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled("fetchDehydrated"));
    }
    return canRunResult;
  }
  function canApply() {
    let canRunResult = closure_10();
    if (canRunResult) {
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      canRunResult = discoverRequestGuard.canRun(closure_7, WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled("fetchDehydrated"));
    }
    if (canRunResult) {
      canRunResult = closure_5 === closure_12;
    }
    if (canRunResult) {
      const discoverRequestGuard2 = DiscoverRequestState.discoverRequestGuard;
      canRunResult = discoverRequestGuard2.matches(closure_7);
    }
    return canRunResult;
  }
  closure_14 = async function _runRequest() {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_5 = tmp3;
            let picks = tmp8;
            closure_132_0 = undefined;
            closure_132_1 = undefined;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            let signal;
            closure_132_5 = undefined;
            c8 = 1;
            c9 = 1;
            const obj7 = { value, done: false };
            return obj7;
          }
        } else {
          if (1 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              if (closure_133_11()) {
                if (closure_133_2) {
                  closure_0 = closure_133_4;
                  if (closure_133_4 == null) {
                    closure_0 = c13;
                  }
                  closure_132_0 = closure_0;
                  if (closure_133_12()) {
                    const obj11 = { type: "DISCOVER_REQUEST_STARTED", identity: closure_133_7 };
                    c8 = 2;
                    c9 = 1;
                    const obj14 = { value: dependencyMap(572).dispatch(obj11), done: false };
                    return obj14;
                  }
                }
              }
              c9 = 3;
              c7 = 0;
              if (c9 === closure_133_9) {
                c9 = null;
              }
              let tmp27 = closure_133_1;
              if (closure_133_1) {
                tmp27 = closure_133_10();
              }
              if (tmp27) {
                dependencyMap(572).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
                const obj2 = dependencyMap(572);
              }
              c9 = 3;
              const obj16 = { value, done: true };
              return obj16;
            }
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj17 = { value, done: true };
              return obj17;
            } else {
              closure_133_8 = true;
            }
          } else if (3 === tmp8) {
            c7 = 0;
            if (c9 === closure_133_9) {
              c9 = null;
            }
            let tmp80 = closure_133_1;
            if (closure_133_1) {
              tmp80 = closure_133_10();
            }
            if (tmp80) {
              dependencyMap(572).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
              const obj10 = dependencyMap(572);
            }
            throw closure_6;
          } else if (4 === tmp8) {
            c7 = 1;
            dependencyMap.return();
            throw closure_6;
          } else if (5 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              if (c9 === closure_133_9) {
                c9 = null;
              }
              let tmp66 = closure_133_1;
              if (closure_133_1) {
                tmp66 = closure_133_10();
              }
              if (tmp66) {
                dependencyMap(572).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
                const obj8 = dependencyMap(572);
              }
              c9 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              closure_132_5 = value;
              if (closure_133_12()) {
                if (null != closure_132_0) {
                  if (null != closure_132_5.body.error_code) {
                    const _Error = Error;
                    const error = new Error("Discover refresh failed");
                    throw error;
                  }
                }
                const obj19 = { type: "LOAD_ICYMI_DEHYDRATED", items: closure_132_5.body.items, loadId: closure_132_5.body.load_id, startTime: closure_132_3, isReloading: closure_133_1, isInitialLoad: null, discoverRequest: null };
                let tmp55 = null != closure_132_0;
                if (!tmp55) {
                  tmp55 = closure_133_0;
                }
                obj19.isInitialLoad = tmp55;
                obj19.discoverRequest = closure_133_7;
                c8 = 6;
                c9 = 1;
                const obj20 = { value: dependencyMap(572).dispatch(obj19), done: false };
                return obj20;
              } else {
                c7 = 0;
                if (c9 === closure_133_9) {
                  c9 = null;
                }
                let tmp36 = closure_133_1;
                if (closure_133_1) {
                  tmp36 = closure_133_10();
                }
                if (tmp36) {
                  dependencyMap(572).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
                  const obj4 = dependencyMap(572);
                }
                c9 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            let tmp13 = closure_133_12();
            if (tmp13) {
              tmp13 = c13 === closure_132_0;
            }
            if (tmp13) {
              c13 = null;
            }
            c7 = 0;
            if (c9 === closure_133_9) {
              c9 = null;
            }
            let tmp18 = closure_133_1;
            if (closure_133_1) {
              tmp18 = closure_133_10();
            }
            if (tmp18) {
              dependencyMap(572).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
              const obj = dependencyMap(572);
            }
          }
          if (closure_133_11()) {
            if (closure_133_1) {
              dependencyMap(572).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
              const obj12 = dependencyMap(572);
            }
            c7 = 1;
            const _URLSearchParams = URLSearchParams;
            const uRLSearchParams = new URLSearchParams();
            closure_132_1 = uRLSearchParams;
            picks = undefined;
            if (closure_132_0 != null) {
              picks = closure_132_0.picks;
            }
            dependencyMap = picks;
            if (picks == null) {
              dependencyMap = picks.getPicks();
            }
            closure_3 = dependencyMap;
            closure_3 = dependencyMap;
            dependencyMap = dependencyMap[Symbol.iterator]();
            while (dependencyMap !== undefined) {
              c7 = 2;
              closure_132_2 = tmp120;
              let appendResult = closure_132_1.append("game_ids", closure_132_2);
              c7 = 1;
              continue;
            }
            if (null != closure_132_0) {
              closure_132_1.append("refresh", "true");
            }
            const _Date = Date;
            closure_132_3 = Date.now();
            const _AbortController = AbortController;
            const abortController = new AbortController();
            closure_133_9 = abortController;
            c9 = closure_133_9;
            signal = closure_133_9.signal;
            c8 = 5;
            c9 = 1;
            const obj21 = {
              value: closure_0(10152).withDiscoverRequestDeadline(closure_133_9, () => {
                        const HTTP = closure_0(1282).HTTP;
                        const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: dependencyMap.toString(), rejectWithError: false, signal, timeout: { deadline: closure_0(10152).DISCOVER_REQUEST_DEADLINE_MS } };
                        return HTTP.get(request);
                      }),
              done: false
            };
            return obj21;
          }
        }
      } catch (tmp145) {
        closure_6 = tmp145;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp145;
        } else if (tmp === tmp147) {
          c8 = tmp2;
        } else {
          c8 = tmp5;
        }
      }
    }
  };
  closure_15 = async function _captureRequestErrors() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = tmp9;
            c3 = 2;
            c4 = 3;
            c5 = 1;
            const obj6 = {
              value: (function runRequest() {
                        const self = this;
                        const apply = closure_1_14.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      })(),
              done: false
            };
            return obj6;
          }
        } else if (1 === tmp9) {
          c3 = 0;
          closure_10 = closure_10 - 1;
          notifyDiscoverRequestListeners();
          throw tmp44;
        } else {
          if (2 === tmp9) {
            c3 = 1;
            if (closure_129_8) {
              if (closure_129_12()) {
                c3 = 3;
                const obj7 = { type: "DISCOVER_REQUEST_FAILED", identity: closure_129_7 };
                c4 = 5;
                c5 = 1;
                const obj8 = { value: tmp4(tmp44[6]).dispatch(obj7), done: false };
                return obj8;
              }
            }
          } else if (3 === tmp9) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_10 = closure_10 - 1;
              notifyDiscoverRequestListeners();
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              c3 = 1;
            }
          } else {
            if (4 === tmp9) {
              c3 = 1;
              closure_128_0 = tmp44;
              tmp4(tmp44[7]).captureException(closure_128_0);
              const obj2 = tmp4(tmp44[7]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c3 = 1;
            }
            c3 = 0;
            closure_10 = closure_10 - 1;
            notifyDiscoverRequestListeners();
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c3 = 0;
          closure_10 = closure_10 - 1;
          notifyDiscoverRequestListeners();
          c5 = 3;
        }
      } catch (tmp44) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp44;
        } else if (tmp2 === tmp46) {
          c4 = tmp2;
        } else if (tmp === tmp46) {
          c4 = tmp;
        } else {
          c4 = tmp6;
        }
      }
    }
  };
  let currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = null;
  if (isDiscoverPickerCommit) {
    tmp3 = closure_13;
  }
  closure_4 = tmp3;
  AuthenticationStore = canApply;
  UserStore = closure_16;
  let discoverRequestGuard = require("DiscoverRequestState").discoverRequestGuard;
  discoverRequestGuard.observeGate(require("WaterwheelsDiscoverExperiment").getWaterwheelsDiscoverEnabled("fetchDehydrated"));
  let discoverRequestGuard2 = require("DiscoverRequestState").discoverRequestGuard;
  if (id == null) {
    id = null;
  }
  authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
  if (authSessionIdHash == null) {
    authSessionIdHash = null;
  }
  authSessionIdHash = discoverRequestGuard2.capture(id, authSessionIdHash);
  closure_8 = false;
  c9 = null;
  closure_13 = closure_8;
  closure_10 = closure_10 + 1;
  const tmp6 = (function captureRequestErrors() {
    const self = this;
    const apply = closure_15.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  closure_8 = tmp6;
  notifyDiscoverRequestListeners();
  return tmp6;
}
const Endpoints = fn(1072).Endpoints;
let closure_8 = Promise.resolve();
let c9 = null;
let c10 = 0;
const set = new Set();
let closure_12 = {};
let c13 = null;
let tmp3 = null;
if (AuthenticationStore.isAuthenticated()) {
  let id = AuthenticationStore.getId();
  if (id == null) {
    id = null;
  }
  tmp3 = id;
}
id = tmp3;
let tmp5 = null;
if (null != tmp3) {
  let authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
  if (authSessionIdHash == null) {
    authSessionIdHash = null;
  }
  tmp5 = authSessionIdHash;
}
function resetDiscoverAccount() {
  c13 = null;
  closure_12 = {};
  if (_null != null) {
    _null.abort();
  }
  closure_16 = {};
  const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
  discoverRequestGuard.resetSession();
  id = null;
  authSessionIdHash = null;
}
authSessionIdHash = tmp5;
let closure_16 = {};
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("LOGOUT", resetDiscoverAccount);
let Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("LOGIN_SUCCESS", resetDiscoverAccount);
let Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("LOGIN_RESET", (isMultiAccount) => {
  if (!isMultiAccount.isMultiAccount) {
    c13 = null;
    closure_12 = {};
    if (_null != null) {
      _null.abort();
    }
    closure_16 = {};
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.resetSession();
    id = null;
    authSessionIdHash = null;
  }
});
let Dispatcher = Dispatcher_mod;
const subscription3 = Dispatcher.subscribe("AGE_GATE_LOGOUT_UNDERAGE_NEW_USER", resetDiscoverAccount);
let Dispatcher = Dispatcher_mod;
const subscription4 = Dispatcher.subscribe("CLOSE_SUSPENDED_USER", resetDiscoverAccount);
let Dispatcher = Dispatcher_mod;
const subscription5 = Dispatcher.subscribe("CONNECTION_CLOSED", (code) => {
  if (4004 === code.code) {
    c13 = null;
    closure_12 = {};
    if (_null != null) {
      _null.abort();
    }
    closure_16 = {};
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.resetSession();
    id = null;
    authSessionIdHash = null;
  }
});
let Dispatcher = Dispatcher_mod;
const subscription6 = Dispatcher.subscribe("CONNECTION_OPEN", (authSessionIdHash) => {
  authSessionIdHash = authSessionIdHash.authSessionIdHash;
  id = authSessionIdHash.user.id;
  if (id !== id) {
    c13 = null;
    closure_12 = {};
    if (_null != null) {
      _null.abort();
    }
    closure_16 = {};
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.resetSession();
    authSessionIdHash = null;
  }
  if (null != authSessionIdHash) {
    let tmp7 = null != authSessionIdHash;
    if (tmp7) {
      tmp7 = authSessionIdHash !== authSessionIdHash;
    }
    if (tmp7) {
      c13 = null;
      closure_12 = {};
      if (_null != null) {
        _null.abort();
      }
      closure_16 = {};
      const discoverRequestGuard2 = DiscoverRequestState.discoverRequestGuard;
      discoverRequestGuard2.resetSession();
    }
  }
});
let Dispatcher = Dispatcher_mod;
const subscription7 = Dispatcher.subscribe("AUTH_SESSION_CHANGE", (authSessionIdHash) => {
  authSessionIdHash = authSessionIdHash.authSessionIdHash;
  if (null != authSessionIdHash) {
    let tmp2 = null != authSessionIdHash;
    if (tmp2) {
      tmp2 = authSessionIdHash !== authSessionIdHash;
    }
    if (tmp2) {
      c13 = null;
      closure_12 = {};
      if (_null != null) {
        _null.abort();
      }
      closure_16 = {};
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      discoverRequestGuard.resetSession();
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/ICYMIActionCreators.tsx");

export default {
  fetchPopularGuildsFromCategories(stateFromStoresArray1, sum) {
    closure_0 = stateFromStoresArray1;
    closure_1 = sum;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const offset = tmp3;
              const category_ids = tmp7;
              let guilds;
              c3 = 1;
              const HTTP = category_ids(tmp24[10]).HTTP;
              const request = { url: constants.GRAVITY_TOPIC_GUILDS, body: null, rejectWithError: false };
              const obj5 = { category_ids, offset };
              request.body = obj5;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = tmp24;
            offset(tmp24[7]).captureException(closure_128_1);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            guilds = value.body.guilds;
            const obj8 = { type: "LOAD_ICYMI_POPULAR_GUILDS", categoryIds: closure_129_0, guilds, offset: closure_129_1 };
            offset(tmp24[6]).dispatch(obj8);
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp24) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp24;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  subscribeDiscoverRequests(arg0) {
    closure_0 = arg0;
    set.add(arg0);
    return () => {
      set.delete(closure_0);
    };
  },
  hasDiscoverRequestInFlight() {
    return c10 > 0;
  },
  fetchDehydrated(arg0) {
    if (arg0 === undefined) {
      let obj = {};
    }
    return (async () => {
      if (constants === 2) {
        constants = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          constants = 2;
          if (0 === currentUser) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp3;
              closure_130_0 = undefined;
              closure_130_1 = undefined;
              closure_130_2 = undefined;
              closure_130_3 = undefined;
              ({ isInitialLoad: closure_130_0, isReloading } = obj);
              closure_130_1 = isReloading;
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              _null = id;
              if (id == null) {
                _null = null;
              }
              setDiscoverUser(_null);
              setDiscoverAuthSessionIdHash(authSessionIdHash.getAuthSessionIdHash());
              let isDiscoverPickerCommit = tmp63.isDiscoverPickerCommit;
              if (isDiscoverPickerCommit) {
                isDiscoverPickerCommit = null != closure_1_14;
              }
              if (isDiscoverPickerCommit) {
                if (closure_1_9 != null) {
                  closure_1_9.abort();
                }
                closure_12 = {};
                { picks: null }.picks = tmp45.getPicks();
                const discoverRequestGuard = _null(tmp5[5]).discoverRequestGuard;
                discoverRequestGuard.observeGate(_null(tmp5[8]).getWaterwheelsDiscoverEnabled("fetchDehydrated"));
                const discoverRequestGuard2 = _null(tmp5[5]).discoverRequestGuard;
                discoverRequestGuard2.commitPicker();
                const discoverRequestGuard3 = _null(tmp5[5]).discoverRequestGuard;
                authSessionIdHash = obj5.getAuthSessionIdHash();
                let _null2 = authSessionIdHash;
                if (authSessionIdHash == null) {
                  _null2 = null;
                }
                function dispatchDiscoverPickerCommit() {
                  const self = this;
                  const apply = closure_1_20.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                }
                const result = dispatchDiscoverPickerCommit(discoverRequestGuard3.capture(closure_1_14, _null2));
                const obj7 = { picks: null };
                const obj8 = _null(tmp5[8]);
              }
              if (obj9.icymiEnabled("fetchDehydrated")) {
                if (tmp36Result.getWaterwheelsDiscoverEnabled("fetchDehydrated")) {
                  constants = 3;
                  const obj10 = { value: fetchDiscoverDehydrated(tmp63), done: true };
                  return obj10;
                } else if (!tmp63.isDiscoverPickerCommit) {
                  if (isReloading) {
                    _null2(tmp5[6]).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
                    const obj11 = _null2(tmp5[6]);
                  }
                  authSessionIdHash = 1;
                  const _Date = Date;
                  closure_130_2 = Date.now();
                  const HTTP = tmp36(tmp5[10]).HTTP;
                  const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: null, rejectWithError: false };
                  const obj12 = { refresh: obj.forceRefresh };
                  request.query = obj12;
                  currentUser = 2;
                  constants = 1;
                  const obj13 = { value: HTTP.get(request), done: false };
                  return obj13;
                }
                tmp36Result = tmp36(tmp5[8]);
              }
              obj5 = authSessionIdHash;
              obj9 = _null(tmp5[11]);
            }
          } else {
            if (1 === tmp8) {
              authSessionIdHash = 0;
              closure_130_4 = tmp45;
              _null2(tmp5[7]).captureException(closure_130_4);
              const obj4 = _null2(tmp5[7]);
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                constants = 3;
                throw value;
              } else if (arg0 === 2) {
                authSessionIdHash = 0;
                constants = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                closure_130_3 = value;
                const obj15 = { type: "LOAD_ICYMI_DEHYDRATED", items: closure_130_3.body.items, loadId: closure_130_3.body.load_id, startTime: closure_130_2, isReloading: closure_130_1, isInitialLoad: closure_130_0 };
                currentUser = 3;
                constants = 1;
                const obj16 = { value: _null2(tmp5[6]).dispatch(obj15), done: false };
                return obj16;
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 !== 2) {
              authSessionIdHash = 0;
            }
            authSessionIdHash = 0;
            constants = 3;
            obj = { value, done: true };
            return obj;
          }
          constants = 3;
        } catch (tmp45) {
          if (tmp4 === authSessionIdHash) {
            constants = tmp2;
            throw tmp45;
          } else {
            currentUser = tmp;
          }
        }
      }
    })();
  },
  gravityJoinGuild(items, icymi_info_modal) {
    closure_1 = icymi_info_modal;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const _location = tmp3;
              items = tmp7;
              if (obj8.icymiEnabled("gravityJoinGuild")) {
                if (0 !== items.length) {
                  c3 = 1;
                  const HTTP = items(tmp20[10]).HTTP;
                  const request = { url: constants.GRAVITY_JOIN_GUILD, body: null, rejectWithError: false };
                  const obj5 = { guild_ids: tmp16, location: _location };
                  request.body = obj5;
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: HTTP.post(request), done: false };
                  return obj6;
                }
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp20;
            _location(tmp20[7]).captureException(closure_128_0);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp20) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp20;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  fetchForNotification(channel_id, message_id) {
    closure_0 = channel_id;
    closure_1 = message_id;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              message_id = tmp3;
              channel_id = tmp7;
              closure_128_0 = undefined;
              if (obj11.icymiEnabled("fetchInitial")) {
                c3 = 1;
                const HTTP = tmp35(tmp26[10]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: null, rejectWithError: false };
                const obj5 = { message_items: null, activity_items: null };
                const obj6 = { channel_id, message_id };
                items = [obj6];
                obj5.message_items = items;
                obj5.activity_items = [];
                request.body = obj5;
                c4 = 2;
                c5 = 1;
                const obj7 = { value: HTTP.post(request), done: false };
                return obj7;
              }
              obj11 = channel_id(tmp26[11]);
              tmp35 = channel_id;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = tmp26;
              message_id(tmp26[7]).captureException(closure_128_1);
              const obj4 = message_id(tmp26[7]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              closure_128_0 = value;
              if (0 !== closure_128_0.body.message_items.length) {
                const obj9 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: closure_128_0.body.message_items[0] };
                message_id(tmp26[6]).dispatch(obj9);
                c3 = 0;
                const obj = message_id(tmp26[6]);
              }
            }
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          c5 = 3;
        } catch (tmp26) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp26;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  fetchForStatusNotification(customStatusItem) {
    if (obj.icymiEnabled("fetchInitialStatus")) {
      const obj3 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem };
      Dispatcher.dispatch(obj3);
    }
    obj = ICYMIExperiment;
  },
  fetchHydrated(arg0, dependencyMap2, arg2) {
    closure_0 = arg0;
    closure_1 = dependencyMap2;
    closure_2 = arg2;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const endingIndex = tmp3;
              const startingIndex = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              if (obj15.icymiEnabled("fetchHydrated")) {
                const messageItems = tmp33.messageItems;
                closure_128_0 = messageItems;
                const activityItems = tmp33.activityItems;
                closure_128_1 = activityItems;
                if (0 === messageItems.length) {
                  if (0 === activityItems.length) {
                    const obj8 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: [], requestActivityItems: [], messageItems: [], activityItems: [], startingIndex, endingIndex };
                    endingIndex(tmp33[6]).dispatch(obj8);
                    const obj6 = endingIndex(tmp33[6]);
                  }
                }
                c3 = 1;
                const HTTP = startingIndex(tmp33[10]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: null, rejectWithError: false };
                const obj9 = { message_items: messageItems, activity_items: activityItems };
                request.body = obj9;
                c4 = 2;
                c5 = 1;
                const obj10 = { value: HTTP.post(request), done: false };
                return obj10;
              }
              obj15 = startingIndex(tmp33[11]);
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_4 = tmp33;
              endingIndex(tmp33[7]).captureException(closure_128_4);
              const obj2 = endingIndex(tmp33[7]);
              closure_128_3 = startingIndex(tmp33[12]).generateHydrationId(closure_129_0, closure_129_1);
              const obj3 = startingIndex(tmp33[12]);
              const obj11 = { type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: closure_128_3 };
              endingIndex(tmp33[6]).dispatch(obj11);
              const obj4 = endingIndex(tmp33[6]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_2 = value;
              const obj12 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: closure_128_0, requestActivityItems: closure_128_1, messageItems: closure_128_2.body.message_items, activityItems: closure_128_2.body.activity_items, startingIndex: closure_129_0, endingIndex: closure_129_1 };
              endingIndex(tmp33[6]).dispatch(obj12);
              c3 = 0;
              const obj13 = endingIndex(tmp33[6]);
            }
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c5 = 3;
        } catch (tmp33) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp33;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  getGuildChannelScores() {
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              if (obj9.icymiEnabled("guildChannelScores")) {
                c3 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj5 = { url: constants.GRAVITY_CUSTOM_SCORES, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.get(obj5), done: false };
                return obj6;
              }
              obj9 = ICYMIExperiment;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              closure_129_1(closure_129_2[7]).captureException(closure_128_1);
              const obj4 = closure_129_1(closure_129_2[7]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              const obj7 = { type: "LOAD_ICYMI_CUSTOM_SCORES", scores: closure_128_0.body };
              closure_129_1(closure_129_2[6]).dispatch(obj7);
              c3 = 0;
              const obj = closure_129_1(closure_129_2[6]);
            }
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
          c5 = 3;
        } catch (tmp24) {
          closure_2 = tmp24;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp24;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  getRecommendedGuilds() {
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              if (obj9.icymiEnabled("recommendedGuilds")) {
                c3 = 1;
                const HTTP = HTTPUtils.HTTP;
                const obj5 = { url: constants.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.get(obj5), done: false };
                return obj6;
              }
              obj9 = ICYMIExperiment;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = closure_2;
              closure_129_1(closure_129_2[7]).captureException(closure_128_1);
              const obj4 = closure_129_1(closure_129_2[7]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              const obj7 = { type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: closure_128_0.body.guilds };
              closure_129_1(closure_129_2[6]).dispatch(obj7);
              c3 = 0;
              const obj = closure_129_1(closure_129_2[6]);
            }
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
          c5 = 3;
        } catch (tmp24) {
          closure_2 = tmp24;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp24;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  getMediaForCurrentStatus() {
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if (obj9.icymiEnabled("mediaForCurrentStatus")) {
                const CustomStatusSetting = UserSettings.CustomStatusSetting;
                const setting = CustomStatusSetting.getSetting();
                closure_128_0 = setting;
                if (null != setting) {
                  if (null != setting.createdAtMs) {
                    c3 = 1;
                    const HTTP = HTTPUtils.HTTP;
                    const obj5 = { url: constants.GRAVITY_ATTACHMENTS, rejectWithError: false };
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: HTTP.get(obj5), done: false };
                    return obj6;
                  }
                }
              }
              obj9 = ICYMIExperiment;
            }
          } else {
            if (1 === tmp8) {
              c3 = 0;
              closure_128_2 = closure_2;
              closure_129_1(closure_129_2[7]).captureException(closure_128_2);
              const obj4 = closure_129_1(closure_129_2[7]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_1 = value;
              const obj7 = { type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA", attachments: closure_128_1.body.attachments, createdAtMs: null };
              const _Number = Number;
              obj7.createdAtMs = Number(closure_128_0.createdAtMs);
              closure_129_1(closure_129_2[6]).dispatch(obj7);
              c3 = 0;
              const obj = closure_129_1(closure_129_2[6]);
            }
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          }
          c5 = 3;
        } catch (tmp28) {
          closure_2 = tmp28;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp28;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  },
  reloadICYMITab() {
    Dispatcher.dispatch({ type: "RELOAD_ICYMI" });
  },
  loadHydratedAttempt(hydrationId) {
    Dispatcher.dispatch({ type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId });
  },
  openICYMITab() {
    Dispatcher.dispatch({ type: "ICYMI_TAB_OPENED" });
  },
  closeICYMITab() {
    Dispatcher.dispatch({ type: "ICYMI_TAB_CLOSED" });
  },
  startItemsDwell(items) {
    Dispatcher.dispatch({ type: "ICYMI_ITEMS_DWELL_START", items });
  },
  triggerItemsLongImpression(items) {
    Dispatcher.dispatch({ type: "ICYMI_ITEMS_LONG_IMPRESSION", items });
  },
  ackGravityItems(items, override) {
    return Dispatcher.dispatch({ type: "ICYMI_ACK_ITEMS", items, override });
  },
  gravityScrollEvent(timestamp) {
    return Dispatcher.dispatch({ type: "ICYMI_SCROLL_EVENT", timestamp });
  },
  setFilters(filters) {
    return Dispatcher.dispatch({ type: "SET_ICYMI_FILTERS", filters });
  },
  giveFeedback() {
    return Dispatcher.dispatch({ type: "ICYMI_FEEDBACK_GIVEN" });
  },
  addedRecommendedGuild() {
    return Dispatcher.dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" });
  },
  setVideosMuted(muted) {
    Dispatcher.dispatch({ type: "ICYMI_SET_VIDEOS_MUTED", muted });
  },
  setTabFocused(isFocused) {
    Dispatcher.dispatch({ type: "ICYMI_SET_FOCUSED_TAB", focused: isFocused });
  },
  setCardHeight(itemId, height) {
    Dispatcher.dispatch({ type: "ICYMI_SET_CARD_HEIGHT", itemId, height });
  },
  takeSurvey() {
    let timestamp = arg0;
    if (arg0 === undefined) {
      const _Date = Date;
      timestamp = Date.now();
    }
    Dispatcher.dispatch({ type: "ICYMI_TAKE_SURVEY", takenAt: timestamp });
  },
  itemInteracted(id, hotwheels_gaming_activity, open_profile) {
    Dispatcher.dispatch({ type: "ICYMI_ITEM_INTERACTED", itemId: id, itemType: hotwheels_gaming_activity, actionType: open_profile });
  },
  feedItemActioned(arg0) {
    const merged = Object.assign(arg0);
    Dispatcher.dispatch({ type: "ICYMI_FEED_ITEM_ACTIONED" });
  },
  feedFilterActioned(arg0) {
    const merged = Object.assign(arg0);
    Dispatcher.dispatch({ type: "ICYMI_FEED_FILTER_ACTIONED" });
  },
  feedPageActioned(arg0) {
    const merged = Object.assign(arg0);
    Dispatcher.dispatch({ type: "ICYMI_FEED_PAGE_ACTIONED" });
  }
};