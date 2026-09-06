// === Module 8181: UserActionCreators ===

// Module 8181 (UserActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import AnalyticsSchema from "AnalyticsSchema" /* 1336 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserRecord from "UserRecord" /* 1385 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_9 = async function _fetchProfile(arg0) {
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
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          closure_131_8 = undefined;
          closure_131_9 = undefined;
          closure_131_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          ({ type: closure_131_1, withMutualGuilds: closure_131_2, withMutualFriendsCount: closure_131_3, withMutualFriends: closure_131_4, guildId: closure_131_5, connectionsRoleId: closure_131_6, joinRequestId: closure_131_7, abortSignal: closure_131_8 } = obj1);
          closure_131_9 = closure_2;
          closure_131_10 = undefined;
          closure_131_11 = undefined;
          closure_131_12 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          const _Date = Date;
          closure_131_10 = Date.now();
          const obj3 = { type: "USER_PROFILE_FETCH_START", userId: closure_131_0, guildId: closure_131_5, withMutualFriends: closure_131_4 };
          closure_132_1(closure_132_2[7]).dispatch(obj3);
          c6 = 1;
          let tmp68;
          if (null != closure_131_5) {
            if (!closure_132_7.includes(closure_131_5)) {
              tmp68 = closure_131_5;
            }
          }
          closure_131_11 = tmp68;
          const HTTP = closure_132_0(closure_132_2[6]).HTTP;
          const request = { url: closure_132_6.USER_PROFILE(closure_131_0), query: null, signal: null, rejectWithError: true };
          let obj4 = { type: closure_131_1, with_mutual_guilds: closure_131_2, with_mutual_friends: closure_131_4, with_mutual_friends_count: null, guild_id: null, connections_role_id: null, join_request_id: null };
          let tmp79 = closure_131_3;
          if (closure_131_3) {
            let tmp82 = null == closure_131_4;
            if (!tmp82) {
              tmp82 = !closure_131_4;
            }
            tmp79 = tmp82;
          }
          obj4.with_mutual_friends_count = tmp79;
          obj4.guild_id = closure_131_11;
          obj4.connections_role_id = closure_131_6;
          obj4.join_request_id = closure_131_7;
          request.query = obj4;
          request.signal = closure_131_8;
          c7 = 3;
          c8 = 1;
          const obj5 = { value: HTTP.get(request), done: false };
          return obj5;
        }
      } else if (2 === tmp7) {
        c6 = 0;
        closure_131_13 = closure_5;
        let tmp39 = null != closure_131_13;
        if (tmp39) {
          let body;
          if (closure_131_13 != null) {
            body = closure_131_13.body;
          }
          tmp39 = null != body;
        }
        if (tmp39) {
          const _HermesInternal = HermesInternal;
          closure_132_8.warn("fetchProfile error: " + closure_131_13.body.code + " - " + closure_131_13.body.message);
        }
        let obj7 = closure_132_1(closure_132_2[7]);
        const obj6 = { type: "USER_PROFILE_FETCH_FAILURE", apiError: null, fetchStartedAt: null, userId: null, guildId: null };
        const aPIError = new closure_132_0(closure_132_2[11]).APIError(closure_131_13);
        obj6.apiError = aPIError;
        obj6.fetchStartedAt = closure_131_10;
        obj6.userId = closure_131_0;
        obj6.guildId = closure_131_5;
        obj7.dispatch(obj6);
        throw closure_131_13;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        obj7 = { value, done: true };
        return obj7;
      } else {
        closure_131_12 = value;
        if (closure_131_9 != null) {
          tmp101(closure_131_12.body, closure_131_5);
        }
        obj = closure_132_1(closure_132_2[7]);
        const obj8 = { type: "USER_UPDATE", user: closure_131_12.body.user };
        obj.dispatch(obj8);
        obj2 = closure_132_1(closure_132_2[7]);
        const obj9 = { type: "USER_PROFILE_FETCH_SUCCESS", userProfile: closure_131_12.body, fetchStartedAt: closure_131_10, guildId: closure_131_5 };
        obj2.dispatch(obj9);
        let tmp25 = null != closure_131_5;
        if (tmp25) {
          tmp25 = null != closure_131_12.body.guild_member;
        }
        if (tmp25) {
          obj4 = closure_132_1(closure_132_2[7]);
          const obj10 = { type: "GUILD_MEMBER_PROFILE_UPDATE", guildId: closure_131_5, guildMember: closure_131_12.body.guild_member };
          obj4.dispatch(obj10);
        }
        c6 = 0;
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp91) {
      closure_5 = tmp91;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp91;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_10 = async function _fetchMutualFriends() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = userId;
            closure_130_1 = undefined;
            const obj1 = { type: "MUTUAL_FRIENDS_FETCH_START", userId };
            DispatcherDefault.dispatch(obj1);
            c5 = 1;
            const HTTP = require("HTTPUtils").HTTP;
            const obj2 = { url: Endpoints.USER_RELATIONSHIPS(userId), oldFormErrors: true, signal, rejectWithError: null };
            obj2.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
            c6 = 2;
            c7 = 1;
            let obj3 = { value: HTTP.get(obj2), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_2 = closure_4;
          let body;
          if (closure_130_2 != null) {
            body = closure_130_2.body;
          }
          if (null != body) {
            const _HermesInternal = HermesInternal;
            closure_131_8.warn("fetchMutualFriends error: " + closure_130_2.body.code + " - " + closure_130_2.body.message);
          }
          obj3 = closure_131_1(closure_131_2[7]);
          const obj4 = { type: "MUTUAL_FRIENDS_FETCH_FAILURE", userId: closure_130_0 };
          obj3.dispatch(obj4);
          throw closure_130_2;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_1 = value;
          obj = closure_131_1(closure_131_2[7]);
          const obj6 = { type: "MUTUAL_FRIENDS_FETCH_SUCCESS", userId: closure_130_0, mutualFriends: closure_130_1.body };
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
};
const Endpoints = fn(1074).Endpoints;
const PSEUDO_GUILD_IDS = fn(1075).PSEUDO_GUILD_IDS;
let closure_8 = new LoggerDefault("UserProfileModalActionCreators");
const size = fn(2);
const result = size.fileFinishedImporting("actions/UserActionCreators.tsx");

export const fetchCurrentUser = function fetchCurrentUser() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const withAnalyticsToken = obj.withAnalyticsToken;
  _require = tmp;
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.ME, query: { with_analytics_token: tmp }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
  value = HTTP.get(request);
  return value.then((body) => {
    const obj = { type: "CURRENT_USER_UPDATE", user: body.body, analyticsToken: null };
    let analytics_token;
    if (closure_0) {
      analytics_token = body.body.analytics_token;
    }
    obj.analyticsToken = analytics_token;
    obj.dispatch(obj);
    return new UserRecord(body.body);
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
  const request = { url: Endpoints.USER_AGREEMENTS, trackedActionData: null, body: null, oldFormErrors: true, rejectWithError: null };
  const obj = { event: AnalyticsSchema.NetworkActionNames.USER_ACCEPT_AGREEMENTS };
  request.trackedActionData = obj;
  request.body = { terms: flag, privacy: flag2 };
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  return obj.patch(request).then(() => true, () => false);
};
export const setFlag = function setFlag(HAS_UNREAD_URGENT_MESSAGES, arg1) {
  const currentUser = UserStore.getCurrentUser();
  _modDef38(null != currentUser, "setFlag: user cannot be undefined");
  const flags = currentUser.flags;
  if (arg1) {
    let tmp4 = flags | HAS_UNREAD_URGENT_MESSAGES;
  } else {
    tmp4 = flags & ~HAS_UNREAD_URGENT_MESSAGES;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.ME, oldFormErrors: true, body: { flags: tmp4 }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.patch(request);
};
export const getUser = function getUser(userId) {
  _require = userId;
  const user = UserStore.getUser(userId);
  if (null != user) {
    let resolved = Promise.resolve(user);
  } else {
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: Endpoints.USER(userId), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    value = HTTP.get(obj);
    resolved = value.then((body) => {
      const obj = { type: "USER_UPDATE", user: body.body };
      obj.dispatch(obj);
      return UserStore.getUser(closure_0);
    });
    const obj2 = require("HTTPUtils");
  }
  return resolved;
};
export const insertStaticUser = function insertStaticUser(user) {
  const obj = { type: "USER_UPDATE", user };
  obj.dispatch(obj);
  return UserStore.getUser(user.id);
};
export const fetchProfile = function fetchProfile() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchMutualFriends = function fetchMutualFriends() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};