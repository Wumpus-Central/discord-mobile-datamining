// === Module 6262: BadgeDirectoryActionCreators ===

// Module 6262 (BadgeDirectoryActionCreators)
import HTTPUtils from "HTTPUtils" /* 1284 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1386 */;
import Dispatcher from "Dispatcher" /* 572 */;

require = fn;
function urlUserId(userId) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = userId;
  if (userId === id) {
    tmp3 = timestampProducer;
  }
  return tmp3;
}
function requestBadgeDirectory() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _requestBadgeDirectory() {
  let isRetry = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    closure_4 = tmp3;
    closure_3 = tmp5;
    closure_131_0 = userId;
    closure_131_1 = isRetry;
    currentUser = currentUser.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    let str2 = "other";
    if (null != id) {
      str2 = "other";
      if (userId === id) {
        str2 = "self";
      }
    }
    closure_131_2 = "viewed_user:" + str2;
    let str3 = "initial";
    if (true === isRetry.isRetry) {
      str3 = "retry";
    }
    closure_131_3 = "attempt:" + str3;
    const _Date4 = Date;
    closure_131_4 = Date.now();
    Dispatcher.dispatch({ type: "BADGE_DIRECTORY_FETCH_START", userId });
    const HTTP = HTTPUtils.HTTP;
    await HTTP.get({ url: closure_2_5.USER_BADGES(urlUserId(userId)), rejectWithError: true });
    if (1 === tmp8) {
      c6 = 0;
      closure_131_8 = closure_5;
      const obj10 = { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: null };
      items = [closure_131_2, "result:failure", "catalog_state:unknown", closure_131_3];
      obj10.tags = items;
      const _Date2 = Date;
      closure_132_1(closure_132_2[5]).distribution(obj10, Date.now() - closure_131_4);
      closure_132_1(closure_132_2[5]);
      closure_132_1(closure_132_2[3]).dispatch({ type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: closure_131_0 });
      if (true === closure_131_1.isAutomatic) {
        value = closure_132_8.get(closure_131_0);
        let backoff;
        if (value != null) {
          backoff = value.backoff;
        }
        closure_2 = backoff;
        if (backoff == null) {
          const MINUTE = closure_132_1(closure_132_2[8]).Millis.MINUTE;
          closure_2 = new closure_132_1(closure_132_2[7])(MINUTE, closure_132_1(closure_132_2[8]).Millis.HOUR, true);
          closure_132_1(closure_132_2[7]);
          new closure_132_1(closure_132_2[7])(MINUTE, closure_132_1(closure_132_2[8]).Millis.HOUR, true);
        }
        closure_131_7 = closure_2;
        const obj14 = { backoff: closure_131_7, gateUntil: null };
        const _Date3 = Date;
        const timestamp = Date.now();
        obj14.gateUntil = timestamp + closure_131_7.fail();
        const result = closure_132_8.set(closure_131_0, obj14);
      }
      closure_132_1(closure_132_2[3]);
      closure_132_1(closure_132_2[9]).captureException(closure_131_8);
      c8 = 3;
      closure_132_1(closure_132_2[9]);
    } else if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const body = value.body;
      const items1 = [closure_131_2, "result:success", , ];
      let str = "non_empty";
      if (0 === body.badges.length) {
        str = "empty";
      }
      items1[2] = "catalog_state:" + str;
      items1[3] = closure_131_3;
      closure_131_6 = items1;
      const _Date = Date;
      closure_132_1(closure_132_2[5]).distribution({ name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: closure_131_6 }, Date.now() - closure_131_4);
      closure_132_1(closure_132_2[5]);
      closure_132_1(closure_132_2[3]).dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: closure_131_0, badges: body.badges, requestedAt: closure_131_4 });
      closure_132_8.delete(closure_131_0);
      c6 = 0;
      closure_132_1(closure_132_2[3]);
      { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: closure_131_6 };
    }
    return value;
  })();
};
function fetchBadge() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _fetchBadge(arg0) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          let id = closure_1;
          if (closure_1 == null) {
            currentUser = currentUser.getCurrentUser();
            id = undefined;
            if (currentUser != null) {
              id = currentUser.id;
            }
          }
          closure_131_0 = id;
          if (null != id) {
            const _Date = Date;
            closure_131_1 = Date.now();
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: hasOwnProperty.USER_BADGE(urlUserId(tmp28), closure_0), rejectWithError: true };
            c7 = 2;
            c8 = 1;
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          }
        }
      } else {
        if (1 === tmp8) {
          c6 = 0;
          closure_131_3 = closure_5;
          closure_132_1(closure_132_2[9]).captureException(closure_131_3);
          const obj4 = closure_132_1(closure_132_2[9]);
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_131_2 = value;
          const obj7 = { type: "BADGE_FETCH_SUCCESS", userId: closure_131_0, badge: closure_131_2.body, requestedAt: closure_131_1 };
          closure_132_1(closure_132_2[3]).dispatch(obj7);
          c6 = 0;
          const obj = closure_132_1(closure_132_2[3]);
        }
        c6 = 0;
        c8 = 3;
        const obj8 = { value, done: true };
        return obj8;
      }
      c8 = 3;
    } catch (tmp33) {
      closure_5 = tmp33;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp33;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_16 = async function _requestBadgeSummary(arg0) {
  closure_5 = tmp3;
  closure_4 = tmp5;
  closure_132_0 = closure_0;
  closure_132_1 = closure_2;
  const _Date2 = Date;
  closure_132_2 = Date.now();
  const HTTP = HTTPUtils.HTTP;
  const request = { url: hasOwnProperty.USER_BADGE(urlUserId(closure_2), closure_1), query: { with_progress: false }, rejectWithError: true };
  await HTTP.get(request);
  if (1 === tmp8) {
    c7 = 0;
    closure_132_5 = closure_6;
    value = closure_133_10.get(closure_132_0);
    let backoff;
    if (value != null) {
      backoff = value.backoff;
    }
    closure_3 = backoff;
    if (backoff == null) {
      const MINUTE = closure_133_1(closure_133_2[8]).Millis.MINUTE;
      closure_3 = new closure_133_1(closure_133_2[7])(MINUTE, closure_133_1(closure_133_2[8]).Millis.HOUR, true);
      closure_133_1(closure_133_2[7]);
      new closure_133_1(closure_133_2[7])(MINUTE, closure_133_1(closure_133_2[8]).Millis.HOUR, true);
    }
    closure_132_4 = closure_3;
    const obj6 = { backoff: closure_132_4, gateUntil: null };
    const _Date = Date;
    const timestamp = Date.now();
    obj6.gateUntil = timestamp + closure_132_4.fail();
    const result = closure_133_10.set(closure_132_0, obj6);
    closure_133_1(closure_133_2[9]).captureException(closure_132_5);
    c9 = 3;
    closure_133_1(closure_133_2[9]);
  } else if (arg0 === 1) {
    c9 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_132_3 = value;
    closure_133_10.delete(closure_132_0);
    closure_133_1(closure_133_2[3]).dispatch({ type: "BADGE_SUMMARY_FETCH_SUCCESS", userId: closure_132_1, badge: closure_132_3.body, requestedAt: closure_132_2 });
    c7 = 0;
    closure_133_1(closure_133_2[3]);
  }
  return value;
};
let closure_17 = async function _ackBadge(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          closure_129_1 = id;
          if (null != id) {
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: hasOwnProperty.USER_BADGE_ACK(closure_0), rejectWithError: true };
            c5 = 2;
            c6 = 1;
            const obj6 = { value: HTTP.post(obj5), done: false };
            return obj6;
          }
        }
      } else {
        if (1 === tmp8) {
          c4 = 0;
          closure_129_2 = closure_3;
          closure_130_1(closure_130_2[9]).captureException(closure_129_2);
          const obj4 = closure_130_1(closure_130_2[9]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const obj7 = { type: "BADGE_ACK_SUCCESS", userId: closure_129_1, badgeId: closure_129_0 };
          closure_130_1(closure_130_2[3]).dispatch(obj7);
          closure_130_14(closure_129_0, closure_129_1);
          c4 = 0;
          const obj = closure_130_1(closure_130_2[3]);
        }
        c4 = 0;
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      }
      c6 = 3;
    } catch (tmp32) {
      closure_3 = tmp32;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp32;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Constants = fn(1071);
({ Endpoints: hasOwnProperty, ME: closure_6 } = Constants);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  map.clear();
  map1.clear();
  map2.clear();
  map3.clear();
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/BadgeDirectoryActionCreators.tsx");

export function fetchBadgeDirectory(id, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let tmp = id;
  id = undefined;
  dependencyMap = undefined;
  if (id == null) {
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  id = tmp;
  if (null == tmp) {
    return Promise.resolve();
  } else if (true !== obj.isAutomatic) {
    return requestBadgeDirectory(tmp, obj);
  } else {
    value = map.get(tmp);
    let request;
    if (value != null) {
      request = value.request;
    }
    if (null != request) {
      return request;
    } else {
      const value2 = map1.get(tmp);
      let num;
      if (value2 != null) {
        num = value2.gateUntil;
      }
      if (num == null) {
        num = 0;
      }
      const _Date = Date;
      if (Date.now() < num) {
        let obj2 = { type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: tmp };
        id(572).dispatch(obj2);
        return Promise.resolve();
      } else {
        const _Symbol = Symbol;
        const SymbolResult = Symbol();
        dependencyMap = SymbolResult;
        const tmp9 = (async () => {
          if (c4 === 2) {
            c4 = 3;
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
              c4 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_0 = tmp3;
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj4 = { value: requestBadgeDirectory(id, obj), done: false };
                  return obj4;
                }
              } else if (1 === tmp7) {
                c3 = 0;
                value = map.get(closure_128_1);
                let token;
                if (value != null) {
                  token = value.token;
                }
                if (token === closure_128_2) {
                  map.delete(closure_128_1);
                }
                throw closure_2;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                const value3 = map.get(closure_128_1);
                let token1;
                if (value3 != null) {
                  token1 = value3.token;
                }
                if (token1 === closure_128_2) {
                  map.delete(closure_128_1);
                }
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
                const value4 = map.get(closure_128_1);
                let token2;
                if (value4 != null) {
                  token2 = value4.token;
                }
                if (token2 === closure_128_2) {
                  map.delete(closure_128_1);
                }
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp43) {
              closure_2 = tmp43;
              if (tmp4 === c3) {
                c4 = tmp2;
                throw tmp43;
              } else {
                c1 = tmp;
              }
            }
          }
        })();
        let obj4 = { request: tmp9, token: SymbolResult };
        const result = map.set(tmp, obj4);
        return tmp9;
      }
    }
  }
}
export { fetchBadge };
export function fetchBadgeSummary(GIFTING, id) {
  let tmp = id;
  if (id == null) {
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  if (null == tmp) {
    return Promise.resolve();
  } else {
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp + "#" + GIFTING;
    value = map2.get(combined);
    if (null != value) {
      return value;
    } else {
      const value2 = map3.get(combined);
      let num;
      if (value2 != null) {
        num = value2.gateUntil;
      }
      if (num == null) {
        num = 0;
      }
      const _Date = Date;
      if (Date.now() < num) {
        return Promise.resolve();
      } else {
        const cleanupPromise = (function requestBadgeSummary() {
          const self = this;
          const apply = closure_1_16.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(combined, GIFTING, tmp).finally(() => {
          if (map2.get(combined) === cleanupPromise) {
            map2.delete(combined);
          }
        });
        const result = map2.set(combined, cleanupPromise);
        return cleanupPromise;
      }
    }
  }
}
export function ackBadge() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function markBadgeDirectoryBadgeIndicatorSeen(badgeId) {
  Dispatcher.dispatch({ type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId });
}