// === Module 8197: BadgeDirectoryActionCreators ===

// Module 8197 (BadgeDirectoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1371 */;

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
let closure_8 = async function _fetchBadgeDirectory(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          closure_131_1 = obj1;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          let body;
          closure_131_8 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj2 = { value, done: true };
            return obj2;
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
              let obj10 = closure_132_1(closure_132_2[3]);
              const obj3 = { type: "BADGE_DIRECTORY_FETCH_START", userId: closure_131_2 };
              obj10.dispatch(obj3);
              c6 = 1;
              const HTTP = closure_132_0(closure_132_2[4]).HTTP;
              const obj4 = { url: closure_132_5.USER_BADGES(closure_132_7(closure_131_2)), rejectWithError: true };
              c7 = 3;
              c8 = 1;
              let obj5 = { value: HTTP.get(obj4), done: false };
              return obj5;
            }
          }
        } else {
          if (2 === tmp7) {
            c6 = 0;
            closure_131_9 = closure_5;
            obj5 = closure_132_1(closure_132_2[5]);
            const obj6 = { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: null };
            const items = [closure_131_4, "result:failure", "catalog_state:unknown", closure_131_5];
            obj6.tags = items;
            const _Date2 = Date;
            obj5.distribution(obj6, Date.now() - closure_131_6);
            let obj7 = closure_132_1(closure_132_2[3]);
            obj7 = { type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: closure_131_2 };
            obj7.dispatch(obj7);
            let obj9 = closure_132_1(closure_132_2[7]);
            obj9.captureException(closure_131_9);
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
            obj = closure_132_1(closure_132_2[5]);
            const obj8 = { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: closure_131_8 };
            const _Date = Date;
            obj.distribution(obj8, Date.now() - closure_131_6);
            obj2 = closure_132_1(closure_132_2[3]);
            obj9 = { type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: closure_131_2, badges: body.badges };
            obj2.dispatch(obj9);
            c6 = 0;
          }
          c6 = 0;
          c8 = 3;
          obj10 = { value, done: true };
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
        c7 = tmp;
      }
    }
  }
};
let closure_9 = async function _fetchBadge(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
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
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj1 = { url: hasOwnProperty.USER_BADGE(urlUserId(tmp26), tmp39), rejectWithError: true };
            c7 = 2;
            c8 = 1;
            const obj2 = { value: HTTP.get(obj1), done: false };
            return obj2;
          }
          tmp39 = closure_0;
        }
      } else {
        if (1 === tmp7) {
          c6 = 0;
          closure_131_2 = closure_5;
          let obj3 = closure_132_1(closure_132_2[7]);
          obj3.captureException(closure_131_2);
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_131_1 = value;
          obj = closure_132_1(closure_132_2[3]);
          obj3 = { type: "BADGE_FETCH_SUCCESS", userId: closure_131_0, badge: closure_131_1.body };
          obj.dispatch(obj3);
          c6 = 0;
        }
        c6 = 0;
        c8 = 3;
        const obj4 = { value, done: true };
        return obj4;
      }
      c8 = 3;
    } catch (tmp31) {
      closure_5 = tmp31;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp31;
      } else {
        c7 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ Endpoints: hasOwnProperty, ME: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/BadgeDirectoryActionCreators.tsx");

export const fetchBadgeDirectory = function fetchBadgeDirectory() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchBadge = function fetchBadge() {
  const self = this;
  const apply = closure_9.apply;
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