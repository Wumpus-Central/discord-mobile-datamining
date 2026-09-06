// === Module 11790: ApplyBuildOverrideUtils ===

// Module 11790 (ApplyBuildOverrideUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

let closure_6 = async function _applyStaffBuildOverride(overrides) {
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
            closure_130_0 = undefined;
            c5 = 1;
            const HTTP = closure_2_0(1272).HTTP;
            const request = { url: closure_2_0(1362).getAPIEndpoint(closure_2_5), body: null, headers: null, oldFormErrors: true, rejectWithError: false };
            const obj1 = { overrides, version: closure_2_0(1362).APP_VERSION };
            request.body = obj1;
            token = token.getToken();
            Authorization = token;
            if (token == null) {
              Authorization = "";
            }
            const obj2 = { Authorization };
            request.headers = obj2;
            c6 = 2;
            c7 = 1;
            const obj3 = { value: HTTP.put(request), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_130_0 = value;
            c6 = 3;
            c7 = 1;
            const obj6 = { value: closure_131_2(closure_130_0), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: closure_130_0, done: true };
          return obj;
        }
      } catch (tmp15) {
        value = tmp15;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp15;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_7 = async function _applyPublicBuildOverride(payload) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = undefined;
            c4 = 1;
            const HTTP = closure_2_0(1272).HTTP;
            const request = { url: closure_2_0(1362).getAPIEndpoint("/__development/link"), body: null, oldFormErrors: true, rejectWithError: false };
            const obj1 = { payload, token: token.getToken(), version: closure_2_0(1362).APP_VERSION };
            request.body = obj1;
            c5 = 2;
            c6 = 1;
            const obj2 = { value: HTTP.put(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_129_0 = value;
            c5 = 3;
            c6 = 1;
            const obj5 = { value: closure_130_2(closure_129_0), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: closure_129_0, done: true };
          return obj;
        }
      } catch (tmp14) {
        value = tmp14;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp14;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_8 = async function _clearBuildOverride() {
  closure_1 = tmp2;
  const HTTP = React(1272).HTTP;
  closure_128_0 = await HTTP.del({ url: closure_2_0(1362).getAPIEndpoint(closure_2_5), oldFormErrors: true, rejectWithError: false });
  await closure_129_2(closure_128_0);
  return closure_128_0;
};
let c5 = "/__development/build_overrides";
let closure_0 = asyncGeneratorStep(async (arg0, value) => {
  if (dependencyMap === 2) {
    dependencyMap = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      dependencyMap = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 1;
          dependencyMap = 1;
          const obj1 = { value: closure_0(dependencyMap[2]).default.setBuildOverrideCookieHeader(closure_0.headers["set-cookie"]), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        dependencyMap = 3;
        throw value;
      } else if (arg0 === 2) {
        dependencyMap = 3;
        obj = { value, done: true };
        return obj;
      } else {
        dependencyMap = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp8) {
      dependencyMap = tmp;
      throw tmp8;
    }
  }
});
const f91799 = function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/build_overrides/ApplyBuildOverrideUtils.tsx");

export const applyStaffBuildOverride = function applyStaffBuildOverride() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const applyPublicBuildOverride = function applyPublicBuildOverride() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearBuildOverride = function clearBuildOverride() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPublicBuildOverrideLink = function getPublicBuildOverrideLink(body) {
  const HTTP = closure_0(1272).HTTP;
  const request = { url: closure_0(1362).getAPIEndpoint("/__development/create_build_override_link"), body, headers: null, oldFormErrors: true, rejectWithError: false };
  let str = AuthenticationStore.getToken();
  if (str == null) {
    str = "";
  }
  request.headers = { Authorization: str };
  const obj2 = closure_0(1362);
  return HTTP.post(request).then((body) => ({ url: body.body.url, error: false }), (status) => {
    if (400 === status.status) {
      let obj = { url: false, error: status.body };
    } else {
      obj = { url: false, error: null };
      const _HermesInternal = HermesInternal;
      obj.error = "Error making API request (" + status.status + ")";
    }
    return obj;
  });
};