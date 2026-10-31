// === Module 10889: EmbeddedAppCSPActionCreators ===

// Module 10889 (EmbeddedAppCSPActionCreators)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _readPolicy(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp4;
          closure_1 = tmp8;
          closure_129_0 = closure_0;
          let body;
          c4 = 2;
          const HTTP = HTTPUtils.HTTP;
          const obj5 = { url: null, rejectWithError: true };
          const _HermesInternal = HermesInternal;
          obj5.url = "" + closure_0 + "/.discord/csp.json";
          c5 = 3;
          c6 = 1;
          const obj6 = { value: HTTP.get(obj5), done: false };
          return obj6;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_130_4.delete(closure_129_0);
        throw closure_3;
      } else if (2 === tmp8) {
        c4 = 1;
        closure_129_2 = closure_3;
        closure_130_1(closure_130_2[3]).captureException(closure_129_2);
        throw closure_129_2;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        closure_130_4.delete(closure_129_0);
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        body = value.body;
        const obj8 = { type: "EMBEDDED_APP_CSP_FETCH_SUCCESS", routerOrigin: closure_129_0, policy: body };
        closure_130_1(closure_130_2[2]).dispatch(obj8);
        c4 = 0;
        closure_130_4.delete(closure_129_0);
        c6 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp45) {
      closure_3 = tmp45;
      if (tmp5 === c4) {
        c6 = tmp3;
        throw tmp45;
      } else if (tmp2 === tmp47) {
        c5 = tmp2;
      } else {
        c5 = tmp;
      }
    }
  }
};
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppCSPActionCreators.tsx");

export function fetchEmbeddedAppCSP(applicationRouterOrigin) {
  value = map.get(applicationRouterOrigin);
  if (null == value) {
    const tmp2 = (function readPolicy() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(applicationRouterOrigin);
    const result = map.set(applicationRouterOrigin, tmp2);
    value = tmp2;
  }
  return value;
}