// === Module 8552: BadgeDirectoryActionCreators ===

// Module 8552 (BadgeDirectoryActionCreators)
import HTTPUtils from "HTTPUtils" /* 1285 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1388 */;
import Dispatcher from "Dispatcher" /* 572 */;

require = fn;
function urlUserId(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = arg0;
  if (arg0 === id) {
    tmp3 = timestampProducer;
  }
  return tmp3;
}
let closure_10 = async function _fetchBadgeDirectory(arg0) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_0 = closure_0;
          let obj5 = closure_1;
          if (closure_1 === undefined) {
            obj5 = {};
          }
          closure_131_1 = obj5;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          let body;
          closure_131_8 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "Path", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            let id = closure_131_0;
            if (closure_131_0 == null) {
              const currentUser = closure_132_4.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
            }
            closure_131_2 = id;
            if (null != closure_131_2) {
              const currentUser1 = closure_132_4.getCurrentUser();
              let id1;
              if (currentUser1 != null) {
                id1 = currentUser1.id;
              }
              closure_131_3 = id1;
              let str2 = "other";
              if (null != closure_131_3) {
                str2 = "other";
                if (closure_131_2 === closure_131_3) {
                  str2 = "self";
                }
              }
              closure_131_4 = "viewed_user:" + str2;
              let str3 = "initial";
              if (true === closure_131_1.isRetry) {
                str3 = "retry";
              }
              closure_131_5 = "attempt:" + str3;
              const _Date3 = Date;
              closure_131_6 = Date.now();
              const obj9 = { type: "BADGE_DIRECTORY_FETCH_START", userId: closure_131_2 };
              closure_132_1(closure_132_2[3]).dispatch(obj9);
              c6 = 1;
              const HTTP = closure_132_0(closure_132_2[4]).HTTP;
              const obj12 = { url: closure_132_5.USER_BADGES(closure_132_9(closure_131_2)), rejectWithError: true };
              c7 = 3;
              c8 = 1;
              const obj13 = { value: HTTP.get(obj12), done: false };
              return obj13;
            }
          }
        } else {
          if (2 === tmp7) {
            c6 = 0;
            closure_131_9 = closure_5;
            const obj14 = { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: null };
            items = [closure_131_4, "result:failure", "catalog_state:unknown", closure_131_5];
            obj14.tags = items;
            const _Date2 = Date;
            closure_132_1(closure_132_2[5]).distribution(obj14, Date.now() - closure_131_6);
            const obj6 = closure_132_1(closure_132_2[5]);
            const obj15 = { type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: closure_131_2 };
            closure_132_1(closure_132_2[3]).dispatch(obj15);
            const obj8 = closure_132_1(closure_132_2[3]);
            closure_132_1(closure_132_2[7]).captureException(closure_131_9);
            const obj10 = closure_132_1(closure_132_2[7]);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            body = value.body;
            const items1 = [closure_131_4, "result:success", , ];
            let str = "non_empty";
            if (0 === body.badges.length) {
              str = "empty";
            }
            items1[2] = "catalog_state:" + str;
            items1[3] = closure_131_5;
            closure_131_8 = items1;
            const obj16 = { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: closure_131_8 };
            const _Date = Date;
            closure_132_1(closure_132_2[5]).distribution(obj16, Date.now() - closure_131_6);
            const obj = closure_132_1(closure_132_2[5]);
            const obj17 = { type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: closure_131_2, badges: body.badges, requestedAt: closure_131_6 };
            closure_132_1(closure_132_2[3]).dispatch(obj17);
            c6 = 0;
            const obj3 = closure_132_1(closure_132_2[3]);
          }
          c6 = 0;
          c8 = 3;
          const obj18 = { value, done: true };
          return obj18;
        }
        c8 = 3;
      }
    } catch (tmp76) {
      closure_5 = tmp76;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp76;
      } else {
        c7 = tmp;
      }
    }
  }
};
function fetchBadge() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _fetchBadge(arg0) {
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
          closure_132_1(closure_132_2[7]).captureException(closure_131_3);
          const obj4 = closure_132_1(closure_132_2[7]);
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
let closure_13 = async function _requestBadgeSummary(arg0) {
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
    value = closure_133_8.get(closure_132_0);
    let backoff;
    if (value != null) {
      backoff = value.backoff;
    }
    closure_3 = backoff;
    if (backoff == null) {
      const MINUTE = closure_133_1(closure_133_2[9]).Millis.MINUTE;
      closure_3 = new closure_133_1(closure_133_2[8])(MINUTE, closure_133_1(closure_133_2[9]).Millis.HOUR, true);
      closure_133_1(closure_133_2[8]);
      new closure_133_1(closure_133_2[8])(MINUTE, closure_133_1(closure_133_2[9]).Millis.HOUR, true);
    }
    closure_132_4 = closure_3;
    const obj6 = { backoff: closure_132_4, gateUntil: null };
    const _Date = Date;
    const timestamp = Date.now();
    obj6.gateUntil = timestamp + closure_132_4.fail();
    const result = closure_133_8.set(closure_132_0, obj6);
    closure_133_1(closure_133_2[7]).captureException(closure_132_5);
    c9 = 3;
    closure_133_1(closure_133_2[7]);
  } else if (arg0 === 1) {
    c9 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_132_3 = value;
    closure_133_8.delete(closure_132_0);
    closure_133_1(closure_133_2[3]).dispatch({ type: "BADGE_SUMMARY_FETCH_SUCCESS", userId: closure_132_1, badge: closure_132_3.body, requestedAt: closure_132_2 });
    c7 = 0;
    closure_133_1(closure_133_2[3]);
  }
  return value;
};
let closure_14 = async function _ackBadge(arg0) {
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
          closure_130_1(closure_130_2[7]).captureException(closure_129_2);
          const obj4 = closure_130_1(closure_130_2[7]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const obj7 = { type: "BADGE_ACK_SUCCESS", userId: closure_129_1, badgeId: closure_129_0 };
          closure_130_1(closure_130_2[3]).dispatch(obj7);
          closure_130_11(closure_129_0, closure_129_1);
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
const Constants = fn(1072);
({ Endpoints: hasOwnProperty, ME: closure_6 } = Constants);
const map = new Map();
const map1 = new Map();
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  map.clear();
  map1.clear();
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/BadgeDirectoryActionCreators.tsx");

export function fetchBadgeDirectory() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
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
    value = map.get(combined);
    if (null != value) {
      return value;
    } else {
      const value2 = map1.get(combined);
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
          const apply = closure_1_13.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(combined, GIFTING, tmp).finally(() => {
          if (map.get(combined) === cleanupPromise) {
            map.delete(combined);
          }
        });
        const result = map.set(combined, cleanupPromise);
        return cleanupPromise;
      }
    }
  }
}
export function ackBadge() {
  const self = this;
  const apply = closure_14.apply;
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