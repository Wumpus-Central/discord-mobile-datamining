// discord_app/modules/build_overrides/ApplyBuildOverrideUtils.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import BuildOverrideUtils from "BuildOverrideUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c1, c6, c7;

let obj = function _applyStaffBuildOverride() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0;
    let obj11;
    let obj4;
    let obj5;
    let value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            value = undefined;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: obj11.getAPIEndpoint(closure_2_5),
              body: obj4,
              headers: obj5,
              oldFormErrors: true,
              rejectWithError: false,
            };
            const put = HTTP.put;
            obj11 = BuildOverrideUtils;
            obj4 = { overrides: value, version: BuildOverrideUtils.APP_VERSION };
            token = token.getToken();
            let Authorization = token;
            if (token == null) {
              Authorization = "";
            }
            obj5 = { Authorization };
            c6 = 2;
            c7 = 1;
            const obj6 = { value: put(request), done: false };
            return obj6;
          }
        } else if (1 === c6) {
          c5 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else if (2 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c6 = 3;
            c7 = 1;
            const obj9 = { value: closure_131_2(value), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        value = tmp12;
        if (0 === c5) {
          c7 = 3;
          throw tmp12;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _applyPublicBuildOverride() {
  let token;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0;
    let obj10;
    let obj4;
    let value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            value = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: obj10.getAPIEndpoint("/__development/link"),
              body: obj4,
              oldFormErrors: true,
              rejectWithError: false,
            };
            const put = HTTP.put;
            obj10 = BuildOverrideUtils;
            obj4 = { payload: value, token: token.getToken(), version: BuildOverrideUtils.APP_VERSION };
            c5 = 2;
            c6 = 1;
            const obj5 = { value: put(request), done: false };
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c5 = 3;
            c6 = 1;
            const obj8 = { value: closure_130_2(value), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp11) {
        value = tmp11;
        if (0 === c4) {
          c6 = 3;
          throw tmp11;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _clearBuildOverride() {
  obj = _asyncToGenerator(async () => {
    let c2;
    let c3;
    let closure_1;
    let obj9;
    const value = tmp4;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: obj9.getAPIEndpoint(closure_2_5), oldFormErrors: true, rejectWithError: false };
    const del = HTTP.del;
    obj9 = BuildOverrideUtils;
    await del(obj4);
    await closure_129_2(value);
    return value;
  });
  return obj(...arguments);
};
let c5 = "/__development/build_overrides";
let closure_0 = _asyncToGenerator(async (arg0) => {
  closure_0 = arg0;
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 1;
          const _default = closure_0(c1[2]).default;
          c1 = 1;
          const obj4 = { value: _default.setBuildOverrideCookieHeader(closure_0.headers["set-cookie"]), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp7) {
      c1 = 3;
      throw tmp7;
    }
  }
});
const f107706 = function () {
  return closure_0(...arguments);
};
const result = size.fileFinishedImporting("modules/build_overrides/ApplyBuildOverrideUtils.tsx");

export const applyStaffBuildOverride = function applyStaffBuildOverride() {
  return obj(...arguments);
};
export const applyPublicBuildOverride = function applyPublicBuildOverride() {
  return obj(...arguments);
};
export const clearBuildOverride = function clearBuildOverride() {
  return obj(...arguments);
};
export const getPublicBuildOverrideLink = function getPublicBuildOverrideLink(body) {
  let obj2;
  let str;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: obj2.getAPIEndpoint("/__development/create_build_override_link"),
    body,
    headers: { Authorization: str },
    oldFormErrors: true,
    rejectWithError: false,
  };
  const post = HTTP.post;
  obj2 = BuildOverrideUtils;
  str = AuthenticationStore.getToken();
  if (str == null) {
    str = "";
  }
  const postResult = post(request);
  return postResult.then(
    (body) => ({ url: body.body.url, error: false }),
    (status) => {
      if (400 === status.status) {
        obj = { url: false, error: status.body };
        const obj2 = { url: false, error: status.body };
      } else {
        obj = { url: false, error: "Error making API request (" + status.status + ")" };
        const _HermesInternal = HermesInternal;
      }
      return obj;
    },
  );
};
