// === Module 8531: _fetchProfile ===

// Module 8531 (_fetchProfile)
import timestampDefault from "timestamp" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import sendRequest from "sendRequest" /* 530 */;
import ImpressionNames from "ImpressionNames" /* 663 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef4665 from "module_4665" /* 4665 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createdAt" /* 1930 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import { Endpoints } from "ME" /* 676 */;
import { PSEUDO_GUILD_IDS } from "INVITE" /* 677 */;

require = arg1;
function _fetchProfile() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (logger === 2) {
        logger = 3;
        HermesBuiltin.throwTypeError();
      } else {
        let dispatchResult = globalThis;
        if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            logger = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                logger = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c4 = tmp3;
                c3 = tmp7;
                let callback2;
                dependencyMap = undefined;
                c3 = undefined;
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                c7 = undefined;
                logger = undefined;
                closure_9 = undefined;
                dispatchResult = callback;
                obj1 = callback2;
                if (callback2 === undefined) {
                  obj1 = {};
                }
                ({ type: c1, withMutualGuilds: c2, withMutualFriendsCount: c3, withMutualFriends: c4, guildId: c5, connectionsRoleId: c6, joinRequestId: c7, abortSignal: c8 } = obj1);
                closure_9 = dependencyMap;
                closure_10 = undefined;
                closure_11 = undefined;
                closure_12 = undefined;
                c7 = 1;
                logger = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp7) {
              if (arg0 === 1) {
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                logger = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                dispatchResult = c3;
                dispatchResult = c4;
                const _Date = Date;
                closure_10 = Date.now();
                dispatchResult = callback2;
                dispatchResult = dependencyMap;
                const obj3 = { type: "USER_PROFILE_FETCH_START", userId: null, guildId: null, withMutualFriends: null };
                dispatchResult = callback;
                obj3[1] = callback;
                dispatchResult = c5;
                obj3[2] = c5;
                dispatchResult = c4;
                obj3[3] = c4;
                dispatchResult = callback2(709).dispatch(obj3);
                dispatchResult = c3;
                c6 = 1;
                dispatchResult = c5;
                let tmp68;
                if (null != c5) {
                  if (!c7.includes(c5)) {
                    tmp68 = c5;
                  }
                }
                closure_11 = tmp68;
                const HTTP = callback(530).HTTP;
                let obj4 = { url: null, query: null, signal: null, rejectWithError: true };
                obj4[0] = c6.USER_PROFILE(callback);
                const obj5 = { type: null, with_mutual_guilds: null, with_mutual_friends: null, with_mutual_friends_count: null, guild_id: null, connections_role_id: null, join_request_id: null };
                obj5[0] = callback2;
                obj5[1] = dependencyMap;
                obj5[2] = c4;
                let tmp79 = c3;
                if (c3) {
                  let tmp82 = null == c4;
                  if (!tmp82) {
                    tmp82 = !c4;
                  }
                  tmp79 = tmp82;
                }
                obj5[3] = tmp79;
                obj5[4] = closure_11;
                obj5[5] = c6;
                obj5[6] = c7;
                obj4[1] = obj5;
                obj4[2] = logger;
                c7 = 3;
                logger = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = HTTP.get(obj4);
                return obj6;
              }
            } else if (2 === tmp7) {
              c6 = 0;
              closure_13 = c5;
              let tmp39 = null != closure_13;
              if (tmp39) {
                let body;
                if (closure_13 != null) {
                  body = closure_13.body;
                }
                tmp39 = null != body;
              }
              if (tmp39) {
                const _HermesInternal = HermesInternal;
                logger.warn("fetchProfile error: " + closure_13.body.code + " - " + closure_13.body.message);
              }
              let obj7 = callback2(709);
              obj7 = { type: "USER_PROFILE_FETCH_FAILURE", apiError: null, fetchStartedAt: null, userId: null, guildId: null };
              const aPIError = new callback(4342).APIError(closure_13);
              obj7[1] = aPIError;
              obj7[2] = closure_10;
              obj7[3] = callback;
              obj7[4] = c5;
              obj7.dispatch(obj7);
              throw closure_13;
            } else if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              logger = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = arg1;
              return obj8;
            } else {
              dispatchResult = c3;
              closure_12 = arg1;
              if (closure_9 != null) {
                dispatchResult(closure_12.body, c5);
              }
              obj = callback2(709);
              const obj9 = { type: "USER_UPDATE", user: null };
              obj9[1] = closure_12.body.user;
              obj.dispatch(obj9);
              obj2 = callback2(709);
              const obj10 = { type: "USER_PROFILE_FETCH_SUCCESS", userProfile: null, fetchStartedAt: null, guildId: null };
              obj10[1] = closure_12.body;
              obj10[2] = closure_10;
              obj10[3] = c5;
              obj2.dispatch(obj10);
              let tmp25 = null != c5;
              if (tmp25) {
                tmp25 = null != closure_12.body.guild_member;
              }
              if (tmp25) {
                obj4 = callback2(709);
                const obj11 = { type: "GUILD_MEMBER_PROFILE_UPDATE", guildId: null, guildMember: null };
                obj11[1] = c5;
                obj11[2] = closure_12.body.guild_member;
                obj4.dispatch(obj11);
              }
              c6 = 0;
              logger = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp91) {
            c5 = tmp91;
            if (tmp4 === c6) {
              logger = tmp2;
              throw tmp91;
            } else {
              c7 = dispatchResult;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
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
function _fetchMutualFriends() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              closure_2 = tmp7;
              let lib;
              obj1 = { type: "MUTUAL_FRIENDS_FETCH_START", userId: null };
              obj1[1] = callback;
              lib(closure_1_2[7]).dispatch(obj1);
              c5 = 1;
              const HTTP = callback(closure_1_2[6]).HTTP;
              const obj2 = { url: null, oldFormErrors: true, signal: null, rejectWithError: null };
              obj2[0] = c6.USER_RELATIONSHIPS(callback);
              obj2[2] = lib;
              const obj9 = lib(closure_1_2[7]);
              obj2[3] = callback(closure_1_2[6]).rejectWithMigratedError();
              c6 = 2;
              c7 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_2 = closure_4;
            let body;
            if (closure_2 != null) {
              body = closure_2.body;
            }
            if (null != body) {
              const _HermesInternal = HermesInternal;
              logger.warn("fetchMutualFriends error: " + closure_2.body.code + " - " + closure_2.body.message);
            }
            obj3 = lib(closure_2[7]);
            const obj4 = { type: "MUTUAL_FRIENDS_FETCH_FAILURE", userId: null };
            obj4[1] = callback;
            obj3.dispatch(obj4);
            throw closure_2;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            lib = arg1;
            obj = lib(closure_2[7]);
            const obj6 = { type: "MUTUAL_FRIENDS_FETCH_SUCCESS", userId: null, mutualFriends: null };
            obj6[1] = callback;
            obj6[2] = lib.body;
            obj.dispatch(obj6);
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp32) {
          closure_4 = tmp32;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp32;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = new timestampDefault("UserProfileModalActionCreators");
const tmp2 = new timestampDefault("UserProfileModalActionCreators");
const result = require("set").fileFinishedImporting("actions/UserActionCreators.tsx");

export const fetchCurrentUser = function fetchCurrentUser() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _require;
  const withAnalyticsToken = obj.withAnalyticsToken;
  _require = tmp;
  const HTTP = _require(530).HTTP;
  obj = { url: Endpoints.ME, query: { with_analytics_token: tmp }, oldFormErrors: true, rejectWithError: _require(530).rejectWithMigratedError() };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = closure_1_1(closure_1_2[7]);
    obj = { type: "CURRENT_USER_UPDATE", user: body.body, analyticsToken: null };
    let analytics_token;
    if (closure_0) {
      analytics_token = body.body.analytics_token;
    }
    obj[2] = analytics_token;
    obj.dispatch(obj);
    return new closure_1_4(body.body);
  });
};
export const acceptAgreements = function acceptAgreements() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  let obj = _modDef4665;
  obj = { url: Endpoints.USER_AGREEMENTS, trackedActionData: null, body: null, oldFormErrors: true, rejectWithError: null };
  obj = { event: ImpressionNames.NetworkActionNames.USER_ACCEPT_AGREEMENTS };
  obj[1] = obj;
  obj[2] = { terms: flag, privacy: flag2 };
  obj[4] = sendRequest.rejectWithMigratedError();
  const obj4 = sendRequest;
  return obj.patch(obj).then(() => true, () => false);
};
export const setFlag = function setFlag(arg0, arg1) {
  const currentUser = authStore.getCurrentUser();
  _modDef38(null != currentUser, "setFlag: user cannot be undefined");
  const flags = currentUser.flags;
  if (arg1) {
    let tmp4 = flags | arg0;
  } else {
    tmp4 = flags & ~arg0;
  }
  const HTTP = sendRequest.HTTP;
  const obj = { url: Endpoints.ME, oldFormErrors: true, body: { flags: tmp4 }, rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.patch(obj);
};
export const getUser = function getUser(arg0) {
  const _require = arg0;
  const user = authStore.getUser(arg0);
  if (null != user) {
    let resolved = Promise.resolve(user);
  } else {
    const HTTP = _require(530).HTTP;
    let obj = { url: null, oldFormErrors: true, rejectWithError: null };
    obj[0] = Endpoints.USER(arg0);
    obj[2] = _require(530).rejectWithMigratedError();
    const value = HTTP.get(obj);
    resolved = value.then((body) => {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { type: "USER_UPDATE", user: body.body };
      obj.dispatch(obj);
      return closure_1_5.getUser(closure_0);
    });
    const obj2 = _require(530);
  }
  return resolved;
};
export const insertStaticUser = function insertStaticUser(id) {
  let obj = dispatcherDefault;
  obj = { type: "USER_UPDATE", user: id };
  obj.dispatch(obj);
  return authStore.getUser(id.id);
};
export const fetchProfile = function fetchProfile(id, guildMember, arg2) {
  const self = this;
  const apply = _fetchProfile.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchMutualFriends = function fetchMutualFriends() {
  const self = this;
  const apply = _fetchMutualFriends.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};