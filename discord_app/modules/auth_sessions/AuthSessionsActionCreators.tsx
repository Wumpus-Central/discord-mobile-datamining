// === Module 14773: AuthSessionsActionCreators ===

// Module 14773 (AuthSessionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _fetchAuthSessions() {
  obj = _asyncToGenerator(async () => {
    let c2;
    let c3;
    let closure_1;
    let user_sessions;
    const value = tmp4;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.AUTH_SESSIONS, rejectWithError: false };
    await HTTP.get(obj4);
    const body = value.body;
    if (body != null) {
      user_sessions = body.user_sessions;
    }
    if (null != user_sessions) {
      const obj7 = { type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: value.body.user_sessions };
      obj = closure_129_1(closure_129_2[3]);
      obj.dispatch(obj7);
    }
    return value;
  });
  return obj(...arguments);
};
obj = function _logOutSessions() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    const length = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj4;
      value = tmp;
      let items = length;
      const _Array = Array;
      if (Array.isArray(length)) {
        items = length;
        if (0 === length.length) {
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } else {
        items = [length];
      }
      const HTTP = HTTPUtils.HTTP;
      const request = { url: constants.AUTH_SESSIONS_LOGOUT, body: obj4, rejectWithError: false };
      obj4 = { session_id_hashes: items };
      await HTTP.post(request);
      const obj7 = { type: "LOGOUT_AUTH_SESSIONS_SUCCESS", sessionIdHashes: items };
      obj = closure_130_1(closure_130_2[3]);
      obj.dispatch(obj7);
      return value;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/auth_sessions/AuthSessionsActionCreators.tsx");

export const fetchAuthSessions = function fetchAuthSessions() {
  return obj(...arguments);
};
export const clearAuthSessions = function clearAuthSessions() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: [] });
};
export const logOutSessions = function logOutSessions() {
  return obj(...arguments);
};