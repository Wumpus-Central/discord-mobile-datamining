// === Module 8939: urlUserId ===

// Module 8939 (urlUserId)
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

const require = fn;
function urlUserId(arg0) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = arg0;
  if (arg0 === id) {
    tmp3 = closure_6;
  }
  return tmp3;
}
function _fetchBadgeDirectory() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === body) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let authStore = tmp3;
              let id1 = tmp7;
              obj1 = undefined;
              if (obj1 === undefined) {
                obj1 = {};
              }
              dependencyMap = undefined;
              id1 = undefined;
              authStore = undefined;
              closure_5 = undefined;
              c6 = undefined;
              body = undefined;
              c8 = undefined;
              body = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw body;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = body;
                return obj2;
              } else {
                dependencyMap = callback;
                if (callback == null) {
                  const currentUser = authStore.getCurrentUser();
                  let id;
                  if (currentUser != null) {
                    id = currentUser.id;
                  }
                  dependencyMap = id;
                }
                if (null != dependencyMap) {
                  const currentUser1 = authStore.getCurrentUser();
                  id1 = undefined;
                  if (currentUser1 != null) {
                    id1 = currentUser1.id;
                  }
                  let str2 = "other";
                  if (null != id1) {
                    str2 = "other";
                    if (dependencyMap === id1) {
                      str2 = "self";
                    }
                  }
                  authStore = "viewed_user:" + str2;
                  let str3 = "initial";
                  if (true === obj1.isRetry) {
                    str3 = "retry";
                  }
                  closure_5 = "attempt:" + str3;
                  const _Date3 = Date;
                  c6 = Date.now();
                  let obj10 = obj1(709);
                  const obj3 = { type: "BADGE_DIRECTORY_FETCH_START", userId: null };
                  obj3[1] = dependencyMap;
                  obj10.dispatch(obj3);
                  c6 = 1;
                  const HTTP = callback(530).HTTP;
                  const obj4 = { url: null, rejectWithError: true };
                  obj4[0] = closure_5.USER_BADGES(body(dependencyMap));
                  body = 3;
                  c8 = 1;
                  let obj5 = { value: null, done: false };
                  obj5[0] = HTTP.get(obj4);
                  return obj5;
                }
              }
            } else {
              if (2 === tmp7) {
                c6 = 0;
                closure_9 = closure_5;
                obj5 = obj1(5006);
                const obj6 = { name: null, tags: null };
                obj6[0] = callback(5011).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH;
                const items = [authStore, "result:failure", "catalog_state:unknown", closure_5];
                obj6[1] = items;
                const _Date2 = Date;
                obj5.distribution(obj6, Date.now() - c6);
                let obj7 = obj1(709);
                obj7 = { type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: null };
                obj7[1] = dependencyMap;
                obj7.dispatch(obj7);
                let obj9 = obj1(1208);
                obj9.captureException(closure_9);
              } else if (arg0 === 1) {
                c8 = 3;
                throw body;
              } else if (arg0 !== 2) {
                body = body.body;
                const items1 = [authStore, "result:success", , ];
                let str = "non_empty";
                if (0 === body.badges.length) {
                  str = "empty";
                }
                items1[2] = "catalog_state:" + str;
                items1[3] = closure_5;
                c8 = items1;
                obj = obj1(5006);
                const obj8 = { name: null, tags: null };
                obj8[0] = callback(5011).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH;
                obj8[1] = c8;
                const _Date = Date;
                obj.distribution(obj8, Date.now() - c6);
                obj2 = obj1(709);
                obj9 = { type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: null, badges: null };
                obj9[1] = dependencyMap;
                obj9[2] = body.badges;
                obj2.dispatch(obj9);
                c6 = 0;
              }
              c6 = 0;
              c8 = 3;
              obj10 = { value: null, done: true };
              obj10[0] = body;
              return obj10;
            }
            c8 = 3;
          }
        } catch (tmp75) {
          closure_5 = tmp75;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp75;
          } else {
            body = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchBadge() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              let callback;
              let lib;
              dependencyMap = lib;
              if (lib == null) {
                const currentUser = closure_1_4.getCurrentUser();
                let id;
                if (currentUser != null) {
                  id = currentUser.id;
                }
                dependencyMap = id;
              }
              callback = dependencyMap;
              if (null != dependencyMap) {
                c6 = 1;
                const HTTP = callback(closure_1_2[4]).HTTP;
                obj1 = { url: null, rejectWithError: true };
                obj1[0] = closure_1_5.USER_BADGE(v0(tmp26), tmp40);
                v0 = 2;
                c8 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = HTTP.get(obj1);
                return obj2;
              }
              tmp40 = callback;
            }
          } else {
            if (1 === tmp7) {
              c6 = 0;
              dependencyMap = closure_5;
              let obj3 = lib(1208);
              obj3.captureException(dependencyMap);
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj = lib(709);
              obj3 = { type: "BADGE_FETCH_SUCCESS", userId: null, badge: null };
              obj3[1] = callback;
              obj3[2] = lib.body;
              obj.dispatch(obj3);
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
          c8 = 3;
        } catch (tmp31) {
          closure_5 = tmp31;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp31;
          } else {
            v0 = tmp;
          }
        }
      }
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: c5, ME: closure_6 } = ME);
const result = require("obj132").fileFinishedImporting("modules/badges/BadgeDirectoryActionCreators.tsx");

export const fetchBadgeDirectory = function fetchBadgeDirectory(id) {
  const self = this;
  const apply = _fetchBadgeDirectory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchBadge = function fetchBadge(GIFTING) {
  const self = this;
  const apply = _fetchBadge.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const markBadgeDirectoryBadgeIndicatorSeen = function markBadgeDirectoryBadgeIndicatorSeen(badgeId) {
  const obj = { type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId };
  obj.dispatch(obj);
};