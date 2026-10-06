// === Module 7863: UserActionCreators ===

// Module 7863 (UserActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import RouteConstants from "RouteConstants" /* 1086 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1346 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5089 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserRecord from "UserRecord" /* 1391 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_12, closure_2, closure_5;

let obj = function _fetchProfile() {
  obj = _asyncToGenerator(async function(userId) {
    let aPIError;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let join_request_id;
    let obj9;
    let signal;
    let tmp75;
    if (signal === 2) {
      signal = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (userId === 1) {
        throw value;
      } else if (userId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let connections_role_id;
      try {
        let type;
        let with_mutual_guilds;
        let guildId;
        let closure_9;
        let fetchStartedAt;
        let guild_id;
        signal = 2;
        if (0 === join_request_id) {
          if (userId === 1) {
            signal = 3;
            throw value;
          } else if (userId === 2) {
            signal = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp4;
            type = undefined;
            with_mutual_guilds = undefined;
            c3 = undefined;
            guildId = undefined;
            connections_role_id = undefined;
            join_request_id = undefined;
            signal = undefined;
            closure_9 = undefined;
            let obj6 = closure_1;
            if (closure_1 === undefined) {
              obj6 = {};
            }
            ({ type: c1, withMutualGuilds: c2, withMutualFriendsCount: c3, withMutualFriends: c4, guildId: c5, connectionsRoleId: c6, joinRequestId: c7, abortSignal: c8 } = obj6);
            closure_9 = closure_2;
            fetchStartedAt = undefined;
            guild_id = undefined;
            closure_12 = undefined;
            join_request_id = 1;
            signal = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === join_request_id) {
          if (userId === 1) {
            signal = 3;
            throw value;
          } else if (userId === 2) {
            signal = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const _Date = Date;
            fetchStartedAt = Date.now();
            const obj8 = { type: "USER_PROFILE_FETCH_START", userId, guildId, withMutualFriends: tmp };
            const obj16 = closure_132_1(closure_132_2[7]);
            obj16.dispatch(obj8);
            connections_role_id = 1;
            let tmp64;
            if (null != guildId) {
              if (!closure_132_7.includes(guildId)) {
                tmp64 = guildId;
              }
            }
            guild_id = tmp64;
            const HTTP = closure_132_0(closure_132_2[6]).HTTP;
            const request = { url: closure_132_6.USER_PROFILE(userId), query: obj9, signal, rejectWithError: true };
            const get = HTTP.get;
            obj9 = { type, with_mutual_guilds, with_mutual_friends: tmp, with_mutual_friends_count: tmp75, guild_id, connections_role_id, join_request_id };
            tmp75 = c3;
            if (tmp75) {
              const tmp78 = null == tmp || !tmp;
              tmp75 = tmp78;
            }
            join_request_id = 3;
            signal = 1;
            const obj10 = { value: get(request), done: false };
            return obj10;
          }
        } else if (2 === join_request_id) {
          connections_role_id = 0;
          let closure_13 = closure_5;
          let tmp36 = null != closure_13;
          if (tmp36) {
            let body;
            if (closure_13 != null) {
              body = closure_13.body;
            }
            tmp36 = null != body;
          }
          if (tmp36) {
            const _HermesInternal = HermesInternal;
            closure_132_8.warn("fetchProfile error: " + closure_13.body.code + " - " + closure_13.body.message);
          }
          const obj11 = { type: "USER_PROFILE_FETCH_FAILURE", apiError: aPIError, fetchStartedAt, userId, guildId };
          const dispatch = closure_132_1(closure_132_2[7]).dispatch;
          const self = this;
          const self2 = this;
          const tmp49 = closure_132_1(closure_132_2[7]);
          aPIError = new closure_132_0(closure_132_2[11]).APIError(closure_13);
          dispatch(obj11);
          throw closure_13;
        } else if (userId === 1) {
          signal = 3;
          throw value;
        } else if (userId === 2) {
          connections_role_id = 0;
          signal = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_12 = value;
          if (closure_9 != null) {
            tmp96(closure_12.body, guildId);
          }
          const obj13 = { type: "USER_UPDATE", user: closure_12.body.user };
          obj = closure_132_1(closure_132_2[7]);
          obj.dispatch(obj13);
          const obj14 = { type: "USER_PROFILE_FETCH_SUCCESS", userProfile: closure_12.body, fetchStartedAt, guildId };
          const obj3 = closure_132_1(closure_132_2[7]);
          obj3.dispatch(obj14);
          const tmp22 = null != guildId && null != closure_12.body.guild_member;
          if (tmp22) {
            const obj15 = { type: "GUILD_MEMBER_PROFILE_UPDATE", guildId, guildMember: closure_12.body.guild_member };
            const obj5 = closure_132_1(closure_132_2[7]);
            obj5.dispatch(obj15);
          }
          connections_role_id = 0;
          signal = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp87) {
        closure_5 = tmp87;
        if (0 === connections_role_id) {
          signal = 3;
          throw tmp87;
        } else {
          join_request_id = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchMutualFriends() {
  obj = _asyncToGenerator(async (userId, signal) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj12;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              signal = undefined;
              const obj5 = { type: "MUTUAL_FRIENDS_FETCH_START", userId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c5 = 1;
              const HTTP = require("HTTPUtils").HTTP;
              const get = HTTP.get;
              const obj6 = { url: Endpoints.USER_RELATIONSHIPS(userId), oldFormErrors: true, signal, rejectWithError: obj12.rejectWithMigratedError() };
              c6 = 2;
              c7 = 1;
              obj12 = require("HTTPUtils");
              const obj7 = { value: get(obj6), done: false };
              return obj7;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_2 = closure_4;
            let body;
            if (closure_2 != null) {
              body = closure_2.body;
            }
            if (null != body) {
              const _HermesInternal = HermesInternal;
              closure_131_8.warn("fetchMutualFriends error: " + closure_2.body.code + " - " + closure_2.body.message);
            }
            const obj8 = { type: "MUTUAL_FRIENDS_FETCH_FAILURE", userId };
            const obj4 = closure_131_1(closure_131_2[7]);
            obj4.dispatch(obj8);
            throw closure_2;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            signal = value;
            const obj11 = { type: "MUTUAL_FRIENDS_FETCH_SUCCESS", userId, mutualFriends: signal.body };
            obj = closure_131_1(closure_131_2[7]);
            obj.dispatch(obj11);
            c5 = 0;
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp29) {
          closure_4 = tmp29;
          if (0 === c5) {
            c7 = 3;
            throw tmp29;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const PSEUDO_GUILD_IDS = RouteConstants.PSEUDO_GUILD_IDS;
let closure_8 = new LoggerDefault("UserProfileModalActionCreators");
const tmp2 = new LoggerDefault("UserProfileModalActionCreators");
const result = size.fileFinishedImporting("actions/UserActionCreators.tsx");

export const fetchCurrentUser = function fetchCurrentUser() {
  let closure_0;
  let obj3;
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const withAnalyticsToken = obj.withAnalyticsToken;
  const tmp = undefined !== withAnalyticsToken && withAnalyticsToken;
  _require = tmp;
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.ME, query: { with_analytics_token: tmp }, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
  const get = HTTP.get;
  obj3 = require("HTTPUtils");
  const value = get(request);
  return value.then((body) => {
    let analytics_token;
    obj = { type: "CURRENT_USER_UPDATE", user: body.body, analyticsToken: analytics_token };
    analytics_token = undefined;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (closure_0) {
      analytics_token = body.body.analytics_token;
    }
    dispatch(obj);
    const tmp4 = new UserRecord(body.body);
    return tmp4;
  });
};
export const acceptAgreements = function acceptAgreements() {
  let obj3;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  const request = { url: Endpoints.USER_AGREEMENTS, trackedActionData: { event: AnalyticsSchema.NetworkActionNames.USER_ACCEPT_AGREEMENTS }, body: { terms: flag, privacy: flag2 }, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
  const patch = TrackedHTTPUtilsDefault.patch;
  ({ event: AnalyticsSchema.NetworkActionNames.USER_ACCEPT_AGREEMENTS });
  obj3 = HTTPUtils;
  const patchResult = patch(request);
  return patchResult.then(() => true, () => false);
};
export const setFlag = function setFlag(HAS_UNREAD_URGENT_MESSAGES, arg1) {
  let obj2;
  let tmp5;
  const currentUser = UserStore.getCurrentUser();
  _modDef38(null != currentUser, "setFlag: user cannot be undefined");
  const flags = currentUser.flags;
  const tmp4 = arg1;
  if (tmp4) {
    tmp5 = flags | HAS_UNREAD_URGENT_MESSAGES;
  } else {
    tmp5 = flags & ~HAS_UNREAD_URGENT_MESSAGES;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.ME, oldFormErrors: true, body: { flags: tmp5 }, rejectWithError: obj2.rejectWithMigratedError() };
  const patch = HTTP.patch;
  obj2 = HTTPUtils;
  return patch(request);
};
export const getUser = function getUser(userId) {
  let obj2;
  let resolved;
  _require = userId;
  const user = UserStore.getUser(userId);
  if (null != user) {
    resolved = Promise.resolve(user);
  } else {
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: Endpoints.USER(userId), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const get = HTTP.get;
    obj2 = require("HTTPUtils");
    const value = get(obj);
    resolved = value.then((body) => {
      obj = DispatcherDefault;
      const obj2 = { type: "USER_UPDATE", user: body.body };
      obj.dispatch(obj2);
      return UserStore.getUser(userId);
    });
  }
  return resolved;
};
export const insertStaticUser = function insertStaticUser(user) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_UPDATE", user };
  obj.dispatch(obj2);
  return UserStore.getUser(user.id);
};
export const fetchProfile = function fetchProfile() {
  return obj(...arguments);
};
export const fetchMutualFriends = function fetchMutualFriends() {
  return obj(...arguments);
};