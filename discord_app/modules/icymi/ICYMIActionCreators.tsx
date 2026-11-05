// === Module 9070: ICYMIActionCreators ===

// Module 9070 (ICYMIActionCreators)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import UserSettings from "UserSettings" /* 4968 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9072 */;
import ICYMIExperiment from "ICYMIExperiment" /* 9074 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 9071 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import Dispatcher_mod from "Dispatcher" /* 572 */;

require = fn;
function setDiscoverUser(arg0) {
  if (id !== arg0) {
    c9 = null;
    closure_8 = {};
    closure_12 = {};
    id = arg0;
    authSessionIdHash = null;
  }
}
function fetchDiscoverDehydrated(arg0) {
  ({ isInitialLoad: require, isReloading: importDefault, isDiscoverPickerCommit } = arg0);
  closure_4 = undefined;
  UserStore = undefined;
  closure_6 = undefined;
  closure_9 = undefined;
  closure_7 = function isSameUser() {
    let tmp = closure_6 === closure_12;
    if (tmp) {
      tmp = null != id;
    }
    if (tmp) {
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp = id === id;
    }
    return tmp;
  };
  function canApply() {
    let waterwheelsDiscoverEnabled = closure_6 === closure_12;
    if (waterwheelsDiscoverEnabled) {
      waterwheelsDiscoverEnabled = null != id;
    }
    if (waterwheelsDiscoverEnabled) {
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      waterwheelsDiscoverEnabled = id === id;
    }
    if (waterwheelsDiscoverEnabled) {
      waterwheelsDiscoverEnabled = WaterwheelsDiscoverExperiment.getWaterwheelsDiscoverEnabled("fetchDehydrated");
    }
    return waterwheelsDiscoverEnabled;
  }
  closure_10 = async function _runRequest() {
    closure_5 = tmp4;
    await value;
    if (1 === tmp8) {
      if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c9 = 3;
        return { value, done: true };
      } else {
        if (closure_133_8()) {
          closure_0 = closure_133_4;
          if (closure_133_4 == null) {
            closure_0 = c9;
          }
          closure_132_0 = closure_0;
          if (closure_133_1) {
            dependencyMap(isDiscoverPickerCommit[5]).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
            dependencyMap(isDiscoverPickerCommit[5]);
          }
          c7 = 1;
          const _URLSearchParams = URLSearchParams;
          const uRLSearchParams = new URLSearchParams();
          closure_132_1 = uRLSearchParams;
          let picks;
          if (closure_132_0 != null) {
            picks = closure_132_0.picks;
          }
          dependencyMap = picks;
          if (picks == null) {
            dependencyMap = picks.getPicks();
          }
          closure_3 = dependencyMap;
          isDiscoverPickerCommit = dependencyMap[Symbol.iterator]();
          while (isDiscoverPickerCommit !== undefined) {
            closure_132_2 = tmp89;
            let appendResult = closure_132_1.append("game_ids", closure_132_2);
            c7 = 1;
            continue;
          }
          if (null != closure_132_0) {
            closure_132_1.append("refresh", "true");
          }
          const _Date = Date;
          closure_132_3 = Date.now();
          const HTTP = closure_0(isDiscoverPickerCommit[7]).HTTP;
          const request = { url: tmp105.GRAVITY_ITEMS_DEHYDRATED, query: closure_132_1.toString(), rejectWithError: false };
          c8 = 4;
          c9 = 1;
          return { value: HTTP.get(request), done: false };
        }
        c9 = 3;
      }
    } else if (2 === tmp8) {
      c7 = 0;
      let tmp57 = closure_133_1;
      if (closure_133_1) {
        tmp57 = closure_133_7();
      }
      if (tmp57) {
        dependencyMap(isDiscoverPickerCommit[5]).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
        dependencyMap(isDiscoverPickerCommit[5]);
      }
      throw tmp105;
    } else if (3 === tmp8) {
      c7 = 1;
      isDiscoverPickerCommit.return();
      throw tmp105;
    } else if (4 === tmp8) {
      if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        let tmp45 = closure_133_1;
        if (closure_133_1) {
          tmp45 = closure_133_7();
        }
        if (tmp45) {
          dependencyMap(isDiscoverPickerCommit[5]).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
          dependencyMap(isDiscoverPickerCommit[5]);
        }
        c9 = 3;
        return { value, done: true };
      } else {
        closure_132_4 = value;
        if (closure_133_8()) {
          if (closure_133_5 === c8) {
            const obj13 = { type: "LOAD_ICYMI_DEHYDRATED", items: closure_132_4.body.items, loadId: closure_132_4.body.load_id, startTime: closure_132_3, isReloading: closure_133_1, isInitialLoad: null };
            let tmp36 = null != closure_132_0;
            if (!tmp36) {
              tmp36 = closure_133_0;
            }
            obj13.isInitialLoad = tmp36;
            c8 = 5;
            c9 = 1;
            return { value: dependencyMap(isDiscoverPickerCommit[5]).dispatch(obj13), done: false };
          }
        }
        c7 = 0;
        let tmp38 = closure_133_1;
        if (closure_133_1) {
          tmp38 = closure_133_7();
        }
        if (tmp38) {
          dependencyMap(isDiscoverPickerCommit[5]).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
          dependencyMap(isDiscoverPickerCommit[5]);
        }
        c9 = 3;
        return { value: "HermesInternal", done: null };
      }
    } else if (arg0 === 1) {
      c9 = 3;
      throw value;
    } else if (arg0 !== 2) {
      let tmp12 = closure_133_8();
      if (tmp12) {
        tmp12 = closure_133_5 === c8;
      }
      if (tmp12) {
        tmp12 = c9 === closure_132_0;
      }
      if (tmp12) {
        c9 = null;
      }
      c7 = 0;
      let tmp19 = closure_133_1;
      if (closure_133_1) {
        tmp19 = closure_133_7();
      }
      if (tmp19) {
        dependencyMap(isDiscoverPickerCommit[5]).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
        dependencyMap(isDiscoverPickerCommit[5]);
      }
    }
    let tmp26 = closure_133_1;
    if (closure_133_1) {
      tmp26 = closure_133_7();
    }
    if (tmp26) {
      dependencyMap(isDiscoverPickerCommit[5]).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
      dependencyMap(isDiscoverPickerCommit[5]);
    }
    return value;
  };
  closure_11 = async function _captureRequestErrors() {
    await (function runRequest() {
      const self = this;
      const apply = closure_1_10.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp16;
      tmp3(tmp16[8]).captureException(closure_128_0);
      c5 = 3;
      tmp3(tmp16[8]);
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  };
  let currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = null;
  if (isDiscoverPickerCommit) {
    tmp3 = closure_9;
  }
  closure_4 = tmp3;
  UserStore = canApply;
  closure_6 = closure_12;
  closure_9 = closure_7;
  const tmp4 = (function captureRequestErrors() {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  closure_7 = tmp4;
  return tmp4;
}
const Endpoints = fn(1072).Endpoints;
let closure_7 = Promise.resolve();
let closure_8 = {};
let c9 = null;
let tmp2 = null;
if (AuthenticationStore.isAuthenticated()) {
  let id = AuthenticationStore.getId();
  if (id == null) {
    id = null;
  }
  tmp2 = id;
}
id = tmp2;
let tmp4 = null;
if (null != tmp2) {
  let authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
  if (authSessionIdHash == null) {
    authSessionIdHash = null;
  }
  tmp4 = authSessionIdHash;
}
function resetDiscoverAccount() {
  c9 = null;
  closure_8 = {};
  closure_12 = {};
  id = null;
  authSessionIdHash = null;
}
authSessionIdHash = tmp4;
let closure_12 = {};
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("LOGOUT", resetDiscoverAccount);
let Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("LOGIN_SUCCESS", resetDiscoverAccount);
let Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("LOGIN_RESET", (isMultiAccount) => {
  if (!isMultiAccount.isMultiAccount) {
    c9 = null;
    closure_8 = {};
    closure_12 = {};
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
    c9 = null;
    closure_8 = {};
    closure_12 = {};
    id = null;
    authSessionIdHash = null;
  }
});
let Dispatcher = Dispatcher_mod;
const subscription6 = Dispatcher.subscribe("CONNECTION_OPEN", (authSessionIdHash) => {
  authSessionIdHash = authSessionIdHash.authSessionIdHash;
  id = authSessionIdHash.user.id;
  if (id !== id) {
    c9 = null;
    closure_8 = {};
    closure_12 = {};
    authSessionIdHash = null;
  }
  if (null != authSessionIdHash) {
    let tmp3 = null != authSessionIdHash;
    if (tmp3) {
      tmp3 = authSessionIdHash !== authSessionIdHash;
    }
    if (tmp3) {
      c9 = null;
      closure_8 = {};
      closure_12 = {};
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
      c9 = null;
      closure_8 = {};
      closure_12 = {};
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIActionCreators.tsx");

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
              const HTTP = category_ids(tmp24[7]).HTTP;
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
            offset(tmp24[8]).captureException(closure_128_1);
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
            offset(tmp24[5]).dispatch(obj8);
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
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              ({ isInitialLoad: closure_129_0, isReloading } = obj);
              closure_129_1 = isReloading;
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              let _null = id;
              if (id == null) {
                _null = null;
              }
              setDiscoverUser(_null);
              let isDiscoverPickerCommit = tmp49.isDiscoverPickerCommit;
              if (isDiscoverPickerCommit) {
                isDiscoverPickerCommit = null != closure_1_10;
              }
              if (isDiscoverPickerCommit) {
                closure_8 = {};
                { picks: null }.picks = picks.getPicks();
                const obj5 = { picks: null };
              }
              if (obj6.icymiEnabled("fetchDehydrated")) {
                if (tmp22Result.getWaterwheelsDiscoverEnabled("fetchDehydrated")) {
                  constants = 3;
                  const obj7 = { value: fetchDiscoverDehydrated(tmp49), done: true };
                  return obj7;
                } else if (!tmp49.isDiscoverPickerCommit) {
                  if (isReloading) {
                    tmp5(tmp3[5]).dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
                    const obj8 = tmp5(tmp3[5]);
                  }
                  picks = 1;
                  const _Date = Date;
                  closure_129_2 = Date.now();
                  const HTTP = tmp22(tmp3[7]).HTTP;
                  const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: null, rejectWithError: false };
                  const obj9 = { refresh: obj.forceRefresh };
                  request.query = obj9;
                  currentUser = 2;
                  constants = 1;
                  const obj10 = { value: HTTP.get(request), done: false };
                  return obj10;
                }
                tmp22Result = tmp22(tmp3[6]);
              }
              obj6 = _null(tmp3[9]);
            }
          } else {
            if (1 === tmp8) {
              picks = 0;
              closure_129_4 = closure_3;
              tmp5(tmp3[8]).captureException(closure_129_4);
              const obj4 = tmp5(tmp3[8]);
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                constants = 3;
                throw value;
              } else if (arg0 === 2) {
                picks = 0;
                constants = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                closure_129_3 = value;
                const obj12 = { type: "LOAD_ICYMI_DEHYDRATED", items: closure_129_3.body.items, loadId: closure_129_3.body.load_id, startTime: closure_129_2, isReloading: closure_129_1, isInitialLoad: closure_129_0 };
                currentUser = 3;
                constants = 1;
                const obj13 = { value: tmp5(tmp3[5]).dispatch(obj12), done: false };
                return obj13;
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 !== 2) {
              picks = 0;
            }
            picks = 0;
            constants = 3;
            obj = { value, done: true };
            return obj;
          }
          constants = 3;
        } catch (tmp31) {
          closure_3 = tmp31;
          if (tmp4 === picks) {
            constants = tmp2;
            throw tmp31;
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
                  const HTTP = items(tmp20[7]).HTTP;
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
            _location(tmp20[8]).captureException(closure_128_0);
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
                const HTTP = tmp35(tmp26[7]).HTTP;
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
              obj11 = channel_id(tmp26[9]);
              tmp35 = channel_id;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_1 = tmp26;
              message_id(tmp26[8]).captureException(closure_128_1);
              const obj4 = message_id(tmp26[8]);
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
                message_id(tmp26[5]).dispatch(obj9);
                c3 = 0;
                const obj = message_id(tmp26[5]);
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
                    endingIndex(tmp33[5]).dispatch(obj8);
                    const obj6 = endingIndex(tmp33[5]);
                  }
                }
                c3 = 1;
                const HTTP = startingIndex(tmp33[7]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: null, rejectWithError: false };
                const obj9 = { message_items: messageItems, activity_items: activityItems };
                request.body = obj9;
                c4 = 2;
                c5 = 1;
                const obj10 = { value: HTTP.post(request), done: false };
                return obj10;
              }
              obj15 = startingIndex(tmp33[9]);
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_4 = tmp33;
              endingIndex(tmp33[8]).captureException(closure_128_4);
              const obj2 = endingIndex(tmp33[8]);
              closure_128_3 = startingIndex(tmp33[10]).generateHydrationId(closure_129_0, closure_129_1);
              const obj3 = startingIndex(tmp33[10]);
              const obj11 = { type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId: closure_128_3 };
              endingIndex(tmp33[5]).dispatch(obj11);
              const obj4 = endingIndex(tmp33[5]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_2 = value;
              const obj12 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: closure_128_0, requestActivityItems: closure_128_1, messageItems: closure_128_2.body.message_items, activityItems: closure_128_2.body.activity_items, startingIndex: closure_129_0, endingIndex: closure_129_1 };
              endingIndex(tmp33[5]).dispatch(obj12);
              c3 = 0;
              const obj13 = endingIndex(tmp33[5]);
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
              closure_129_1(closure_129_2[8]).captureException(closure_128_1);
              const obj4 = closure_129_1(closure_129_2[8]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              const obj7 = { type: "LOAD_ICYMI_CUSTOM_SCORES", scores: closure_128_0.body };
              closure_129_1(closure_129_2[5]).dispatch(obj7);
              c3 = 0;
              const obj = closure_129_1(closure_129_2[5]);
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
              closure_129_1(closure_129_2[8]).captureException(closure_128_1);
              const obj4 = closure_129_1(closure_129_2[8]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              const obj7 = { type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: closure_128_0.body.guilds };
              closure_129_1(closure_129_2[5]).dispatch(obj7);
              c3 = 0;
              const obj = closure_129_1(closure_129_2[5]);
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
              closure_129_1(closure_129_2[8]).captureException(closure_128_2);
              const obj4 = closure_129_1(closure_129_2[8]);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_1 = value;
              const obj7 = { type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA", attachments: closure_128_1.body.attachments, createdAtMs: null };
              const _Number = Number;
              obj7.createdAtMs = Number(closure_128_0.createdAtMs);
              closure_129_1(closure_129_2[5]).dispatch(obj7);
              c3 = 0;
              const obj = closure_129_1(closure_129_2[5]);
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
  clearReadStates() {
    return Dispatcher.dispatch({ type: "CLEAR_ICYMI_READ_STATES" });
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