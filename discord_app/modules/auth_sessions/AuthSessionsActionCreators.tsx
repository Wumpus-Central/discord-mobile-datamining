// discord_app/modules/auth_sessions/AuthSessionsActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function _fetchAuthSessions() {
  const self = this;
  const tmp = callback(function*() {
    const callback = tmp2;
    closure_0 = tmp5;
    const HTTP = closure_1_0(530).HTTP;
    obj1 = { url: null, rejectWithError: false };
    obj1[0] = closure_1_4.AUTH_SESSIONS;
    closure_0 = yield HTTP.get(obj1);
    const body = closure_0.body;
    if (body != null) {
      const user_sessions = body.user_sessions;
    }
    if (null != user_sessions) {
      const obj = callback(709);
      const obj4 = { type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: null };
      obj4[1] = closure_0.body.user_sessions;
      obj.dispatch(obj4);
    }
    return closure_0;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _logOutSessions() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          constants = 2;
          let num2 = 0;
          if (0 === c3) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp3;
              let callback2 = tmp2;
              let HTTP;
              callback2 = undefined;
              const _Array = Array;
              if (Array.isArray(items)) {
                items = arr2;
                if (num2 === arr2.length) {
                  constants = 3;
                  return { value: "HermesInternal", done: null };
                }
              } else {
                items = [arr2];
              }
              HTTP = callback(closure_1_2[2]).HTTP;
              num2 = HTTP.post;
              obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = constants.AUTH_SESSIONS_LOGOUT;
              const obj2 = { session_id_hashes: null };
              obj2[0] = items;
              obj1[1] = obj2;
              num2(obj1);
              c3 = 1;
              constants = 1;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            callback2 = arg1;
            obj = callback2(table[3]);
            const obj4 = { type: "LOGOUT_AUTH_SESSIONS_SUCCESS", sessionIdHashes: null };
            obj4[1] = items;
            obj.dispatch(obj4);
            constants = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = callback2;
            return obj5;
          }
        } catch (tmp18) {
          constants = tmp;
          throw tmp18;
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/auth_sessions/AuthSessionsActionCreators.tsx");

export const fetchAuthSessions = function fetchAuthSessions() {
  const self = this;
  const apply = _fetchAuthSessions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearAuthSessions = function clearAuthSessions() {
  dispatcherDefault.dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: [] });
};
export const logOutSessions = function logOutSessions(id_hash) {
  const self = this;
  const apply = _logOutSessions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};