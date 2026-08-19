// === Module 10969: _applyStaffBuildOverride ===

// Module 10969 (_applyStaffBuildOverride)
import importDefaultResult from "asyncGeneratorStep" /* 5 */;
import closure_4 from "fetchFingerprint" /* 1218 */;

let closure_0 = arg1;
function _applyStaffBuildOverride() {
  const self = this;
  const tmp = importDefaultResult((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const callback2 = tmp7;
              let callback;
              c5 = 1;
              const HTTP = callback(closure_1_1[3]).HTTP;
              obj1 = { url: null, body: null, headers: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = callback(closure_1_1[4]).getAPIEndpoint(c5);
              const obj2 = { overrides: null, version: null };
              obj2[0] = callback;
              obj2[1] = callback(closure_1_1[4]).APP_VERSION;
              obj1[1] = obj2;
              const token = closure_1_4.getToken();
              c1 = token;
              if (token == null) {
                c1 = "";
              }
              const obj3 = { Authorization: null };
              obj3[0] = c1;
              obj1[2] = obj3;
              c6 = 2;
              c7 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.put(obj1);
              return obj4;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = closure_4;
            return obj5;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              callback = arg1;
              c6 = 3;
              c7 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = callback2(callback);
              return obj7;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = callback;
            return obj;
          }
        } catch (tmp15) {
          closure_4 = tmp15;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp15;
          } else {
            c6 = tmp;
          }
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
function _applyPublicBuildOverride() {
  const self = this;
  const tmp = importDefaultResult((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback2 = tmp3;
              closure_1 = tmp7;
              let callback;
              let token = 1;
              const HTTP = callback(closure_1_1[3]).HTTP;
              obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = callback(closure_1_1[4]).getAPIEndpoint("/__development/link");
              const obj2 = { payload: null, token: null, version: null };
              obj2[0] = callback;
              obj2[1] = token.getToken();
              obj2[2] = callback(closure_1_1[4]).APP_VERSION;
              obj1[1] = obj2;
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.put(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            token = 0;
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = closure_3;
            return obj4;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              token = 0;
              c6 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              callback = arg1;
              c5 = 3;
              c6 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = callback2(callback);
              return obj6;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            token = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            token = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = callback;
            return obj;
          }
        } catch (tmp14) {
          closure_3 = tmp14;
          if (tmp4 === token) {
            c6 = tmp2;
            throw tmp14;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _clearBuildOverride() {
  const self = this;
  const tmp = importDefaultResult(function*() {
    closure_1 = tmp2;
    const HTTP = closure_1_0(closure_1_1[3]).HTTP;
    obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
    obj1[0] = closure_1_0(closure_1_1[4]).getAPIEndpoint(closure_1_5);
    closure_0 = yield HTTP.del(obj1);
    yield v0(closure_0);
    return closure_0;
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
let c3 = importDefaultResult;
let c5 = "/__development/build_overrides";
closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c2 = 0;
  c1 = 0;
  return (function*(arg0) {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        table = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = 1;
            table = 1;
            obj1 = { value: null, done: false };
            obj1[0] = lib(table[2]).default.setBuildOverrideCookieHeader(lib.headers["set-cookie"]);
            return obj1;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          table = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        table = tmp;
        throw tmp8;
      }
    }
  })();
});
const f86855 = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
const result = require("set").fileFinishedImporting("modules/build_overrides/ApplyBuildOverrideUtils.tsx");

export const applyStaffBuildOverride = function applyStaffBuildOverride(arg0) {
  const self = this;
  const apply = _applyStaffBuildOverride.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const applyPublicBuildOverride = function applyPublicBuildOverride(payload) {
  const self = this;
  const apply = _applyPublicBuildOverride.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearBuildOverride = function clearBuildOverride() {
  const self = this;
  const apply = _clearBuildOverride.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPublicBuildOverrideLink = function getPublicBuildOverrideLink(arg0) {
  const HTTP = callback(530).HTTP;
  let obj = { url: callback(4290).getAPIEndpoint("/__development/create_build_override_link"), body: arg0, headers: null, oldFormErrors: true, rejectWithError: false };
  let str = token.getToken();
  if (str == null) {
    str = "";
  }
  obj[2] = { Authorization: str };
  const obj2 = callback(4290);
  return HTTP.post(obj).then((body) => ({ url: body.body.url, error: false }), (status) => {
    if (400 === status.status) {
      let obj = { url: false, error: null };
      obj[1] = status.body;
    } else {
      obj = { url: false, error: null };
      const _HermesInternal = HermesInternal;
      obj[1] = "Error making API request (" + status.status + ")";
    }
    return obj;
  });
};