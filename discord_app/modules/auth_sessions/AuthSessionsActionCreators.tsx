// === Module 14949: AuthSessionsActionCreators ===

// Module 14949 (AuthSessionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _fetchAuthSessions() {
  closure_1 = tmp2;
  closure_0 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.AUTH_SESSIONS, rejectWithError: false });
  closure_128_0 = value;
  const body = closure_128_0.body;
  if (body != null) {
    const user_sessions = body.user_sessions;
  }
  if (null != user_sessions) {
    closure_129_1(closure_129_2[3]).dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: closure_128_0.body.user_sessions });
    closure_129_1(closure_129_2[3]);
  }
  return closure_128_0;
};
let closure_6 = async function _logOutSessions(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c4 = 2;
      let num2 = 0;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp2;
          closure_129_0 = length;
          let HTTP;
          closure_129_1 = undefined;
          const _Array = Array;
          if (Array.isArray(length)) {
            let items = length;
            if (num2 === length.length) {
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else {
            items = [length];
            closure_129_0 = items;
          }
          HTTP = HTTPUtils.HTTP;
          num2 = HTTP.post;
          const request = { url: constants.AUTH_SESSIONS_LOGOUT, body: null, rejectWithError: false };
          const obj1 = { session_id_hashes: items };
          request.body = obj1;
          num2(request);
          c3 = 1;
          c4 = 1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_129_1 = value;
        obj = closure_130_1(closure_130_2[3]);
        const obj3 = { type: "LOGOUT_AUTH_SESSIONS_SUCCESS", sessionIdHashes: closure_129_0 };
        obj.dispatch(obj3);
        c4 = 3;
        const obj4 = { value: closure_129_1, done: true };
        return obj4;
      }
    } catch (tmp18) {
      c4 = tmp;
      throw tmp18;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsActionCreators.tsx");

export const fetchAuthSessions = function fetchAuthSessions() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearAuthSessions = function clearAuthSessions() {
  DispatcherDefault.dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: [] });
};
export const logOutSessions = function logOutSessions() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};