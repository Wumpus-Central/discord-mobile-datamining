import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _fetchAuthSessions() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp2;
            let closure_0 = tmp5;
            closure_0 = undefined;
            const HTTP = outer1_0(530).HTTP;
            const obj1 = { url: null, rejectWithError: false };
            obj1[0] = outer1_4.AUTH_SESSIONS;
            dependencyMap = 1;
            c3 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          let ok;
          if (closure_0 != null) {
            ok = closure_0.ok;
          }
          if (ok) {
            const body = closure_0.body;
            let user_sessions;
            if (body != null) {
              user_sessions = body.user_sessions;
            }
            ok = null != user_sessions;
          }
          if (ok) {
            obj = callback(709);
            const obj4 = { type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: null };
            obj4[1] = closure_0.body.user_sessions;
            obj.dispatch(obj4);
          }
          c3 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = closure_0;
          return obj5;
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  });
  const _fetchAuthSessions = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
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
              let lib = tmp2;
              let HTTP;
              lib = undefined;
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
              HTTP = callback(outer1_2[2]).HTTP;
              num2 = HTTP.post;
              const obj1 = { url: null, body: null, rejectWithError: false };
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
            lib = arg1;
            let ok;
            if (lib != null) {
              ok = lib.ok;
            }
            if (ok) {
              obj = lib(table[3]);
              const obj4 = { type: "LOGOUT_AUTH_SESSIONS_SUCCESS", sessionIdHashes: null };
              obj4[1] = items;
              obj.dispatch(obj4);
            }
            constants = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = lib;
            return obj5;
          }
        } catch (tmp22) {
          constants = tmp;
          throw tmp22;
        }
      }
    })();
  });
  const _logOutSessions = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/auth_sessions/AuthSessionsActionCreators.tsx");

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
  importDefault(709).dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: [] });
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