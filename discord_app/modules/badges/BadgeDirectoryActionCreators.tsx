// discord_app/modules/badges/BadgeDirectoryActionCreators.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import Dispatcher from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let backoff, set;

let hasOwnProperty;
let metroRequire;
function urlUserId(body) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = body;
  if (body === id) {
    tmp3 = metroRequire;
  }
  return tmp3;
}
let obj = function _fetchBadgeDirectory() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_3;
    let closure_4;
    let closure_5;
    let closure_6;
    let items;
    let obj5;
    let userId;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (1 === c7) {
      if (arg0 === 1) {
        let c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        let id = closure_0;
        if (closure_0 == null) {
          const currentUser = closure_132_4.getCurrentUser();
          id = undefined;
          if (currentUser != null) {
            id = currentUser.id;
          }
        }
        userId = id;
        if (null != userId) {
          const currentUser1 = closure_132_4.getCurrentUser();
          let id1;
          if (currentUser1 != null) {
            id1 = currentUser1.id;
          }
          let str2 = "other";
          if (null != id1) {
            str2 = "other";
            if (userId === id1) {
              str2 = "self";
            }
          }
          closure_4 = "viewed_user:" + str2;
          let str3 = "initial";
          if (true === obj5.isRetry) {
            str3 = "retry";
          }
          closure_5 = "attempt:" + str3;
          const _Date3 = Date;
          closure_6 = Date.now();
          const obj10 = { type: "BADGE_DIRECTORY_FETCH_START", userId };
          const obj9 = closure_132_1(closure_132_2[3]);
          obj9.dispatch(obj10);
          let c6 = 1;
          const HTTP = closure_132_0(closure_132_2[4]).HTTP;
          const obj11 = { url: closure_132_5.USER_BADGES(closure_132_9(userId)), rejectWithError: true };
          const get = HTTP.get;
          c7 = 3;
          c8 = 1;
          const obj12 = { value: get(obj11), done: false };
          return obj12;
        }
      }
    } else if (2 === c7) {
      c6 = 0;
      let closure_9 = closure_5;
      const obj13 = { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: items };
      const distribution2 = closure_132_1(closure_132_2[5]).distribution;
      const tmp27 = closure_132_1(closure_132_2[5]);
      items = [closure_4, "result:failure", "catalog_state:unknown", closure_5];
      const _Date2 = Date;
      distribution2(obj13, Date.now() - closure_6);
      const obj14 = { type: "BADGE_DIRECTORY_FETCH_FAILURE", userId };
      const obj6 = closure_132_1(closure_132_2[3]);
      obj6.dispatch(obj14);
      const obj8 = closure_132_1(closure_132_2[7]);
      obj8.captureException(closure_9);
    } else if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 0;
      c8 = 3;
      const obj15 = { value, done: true };
      return obj15;
    } else {
      const body = value.body;
      const items1 = [closure_4, "result:success", ,];
      let str = "non_empty";
      if (0 === body.badges.length) {
        str = "empty";
      }
      items1[2] = "catalog_state:" + str;
      items1[3] = closure_5;
      obj = { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: items1 };
      const distribution = closure_132_1(closure_132_2[5]).distribution;
      const tmp10 = closure_132_1(closure_132_2[5]);
      const _Date = Date;
      distribution(obj, Date.now() - closure_6);
      const obj16 = { type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId, badges: body.badges };
      const obj2 = closure_132_1(closure_132_2[3]);
      obj2.dispatch(obj16);
      c6 = 0;
    }
    await "IconComponent";
    closure_4 = tmp;
    obj5 = closure_1;
    if (closure_1 === undefined) {
      obj5 = {};
    }
    return "Set";
  });
  return obj(...arguments);
};
obj = function _fetchBadge() {
  obj = _asyncToGenerator(async (userId, arg1) => {
    let body = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              userId = undefined;
              body = undefined;
              id = body;
              const tmp35 = userId;
              if (body == null) {
                currentUser = currentUser.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
              }
              userId = id;
              if (null != id) {
                c6 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c7 = 2;
                c8 = 1;
                const obj5 = { url: closure_2_5.USER_BADGE(urlUserId(tmp23), tmp35), rejectWithError: true };
                const obj6 = { value: get(obj5), done: false };
                return obj6;
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            let closure_2 = closure_5;
            const obj4 = closure_132_1(closure_132_2[7]);
            obj4.captureException(closure_2);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj8 = { type: "BADGE_FETCH_SUCCESS", userId, badge: body.body };
            obj = closure_132_1(closure_132_2[3]);
            obj.dispatch(obj8);
            c6 = 0;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp28) {
          closure_5 = tmp28;
          if (0 === c6) {
            c8 = 3;
            throw tmp28;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _requestBadgeSummary() {
  obj = _asyncToGenerator(async (arg0, userId, arg2) => {
    let closure_0 = arg0;
    let body = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function (arg0, value, arg2) {
      let timestamp;
      if (c9 === 2) {
        c9 = 3;
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
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              userId = body;
              body = undefined;
              backoff = undefined;
              c7 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: closure_2_5.USER_BADGE(urlUserId(body), userId),
                query: { with_progress: false },
                rejectWithError: true,
              };
              const get = HTTP.get;
              c8 = 2;
              c9 = 1;
              const obj4 = { value: get(request), done: false };
              return obj4;
            }
          } else {
            if (1 === c8) {
              c7 = 0;
              closure_4 = closure_6;
              value = closure_133_8.get(closure_0);
              backoff = undefined;
              if (value != null) {
                backoff = value.backoff;
              }
              if (backoff == null) {
                const tmp26 = closure_133_1(closure_133_2[8]);
                const MINUTE = closure_133_1(closure_133_2[9]).Millis.MINUTE;
                const self = this;
                const self2 = this;
                backoff = new tmp26(MINUTE, closure_133_1(closure_133_2[9]).Millis.HOUR, true);
                const tmp262 = new tmp26(MINUTE, closure_133_1(closure_133_2[9]).Millis.HOUR, true);
              }
              const _Date = Date;
              const obj6 = { backoff, gateUntil: timestamp + backoff.fail() };
              set = closure_133_8.set;
              timestamp = Date.now();
              const result = set(closure_0, obj6);
              const obj5 = closure_133_1(closure_133_2[7]);
              obj5.captureException(closure_4);
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              body = value;
              closure_133_8.delete(closure_0);
              const obj8 = { type: "BADGE_SUMMARY_FETCH_SUCCESS", userId, badge: body.body };
              obj = closure_133_1(closure_133_2[3]);
              obj.dispatch(obj8);
              c7 = 0;
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp47) {
          closure_6 = tmp47;
          if (0 === c7) {
            c9 = 3;
            throw tmp47;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ Endpoints: hasOwnProperty, ME: metroRequire } = Constants);
const map = new Map();
const map1 = new Map();
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  map.clear();
  map1.clear();
});
let result = size.fileFinishedImporting("modules/badges/BadgeDirectoryActionCreators.tsx");

export const fetchBadgeDirectory = function fetchBadgeDirectory() {
  return obj(...arguments);
};
export const fetchBadge = function fetchBadge() {
  return obj(...arguments);
};
export const fetchBadgeSummary = function fetchBadgeSummary(GIFTING, id) {
  function requestBadgeSummary() {
    return obj(...arguments);
  }
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
    const value = map.get(combined);
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
        const promise = requestBadgeSummary(combined, GIFTING, tmp);
        const cleanupPromise = promise.finally(() => {
          if (map.get(combined) === cleanupPromise) {
            map.delete(combined);
          }
        });
        const result = map.set(combined, cleanupPromise);
        return cleanupPromise;
      }
    }
  }
};
export const markBadgeDirectoryBadgeIndicatorSeen = function markBadgeDirectoryBadgeIndicatorSeen(badgeId) {
  obj = Dispatcher;
  const obj2 = { type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId };
  obj.dispatch(obj2);
};
