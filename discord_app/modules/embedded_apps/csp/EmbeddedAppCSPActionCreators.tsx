// discord_app/modules/embedded_apps/csp/EmbeddedAppCSPActionCreators.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _fetchEmbeddedAppCSP(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          let body;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj5 = { url: null, rejectWithError: true };
          const _HermesInternal = HermesInternal;
          obj5.url = "" + closure_0 + "/.discord/csp.json";
          c5 = 2;
          c6 = 1;
          const obj6 = { value: HTTP.get(obj5), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        closure_130_1(closure_130_2[3]).captureException(closure_129_2);
        throw closure_129_2;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        body = value.body;
        const obj8 = { type: "EMBEDDED_APP_CSP_FETCH_SUCCESS", routerOrigin: closure_129_0, policy: body };
        closure_130_1(closure_130_2[2]).dispatch(obj8);
        c4 = 0;
        c6 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      }
    } catch (tmp24) {
      closure_3 = tmp24;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp24;
      } else {
        c5 = tmp;
      }
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/csp/EmbeddedAppCSPActionCreators.tsx");

export function fetchEmbeddedAppCSP() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
