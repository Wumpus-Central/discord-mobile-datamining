// === Module 10775: useEmbeddedAppCSP ===

// Module 10775 (useEmbeddedAppCSP)
import c from "c" /* 576 */;
import getURLForApplication from "getURLForApplication" /* 5623 */;
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment" /* 10774 */;
import EmbeddedAppCSPActionCreators from "EmbeddedAppCSPActionCreators" /* 10776 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore" /* 10773 */;

require = fn;
const initialize = fn(504);
let obj2 = {
  getQueryId(arg0) {
    let combined = null;
    if (null != arg0) {
      const _HermesInternal = HermesInternal;
      combined = "embedded-app-csp:" + arg0;
    }
    return combined;
  },
  get(arg0) {
    let policy = null;
    if (null != arg0) {
      policy = EmbeddedAppCSPStore.getPolicy(arg0);
    }
    return policy;
  },
  load: null
};
let closure_2 = asyncGeneratorStep(async (arg0) => {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: "+352" };
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
          const obj4 = { value, done: true };
          return obj4;
        } else if (null != closure_0) {
          c2 = 1;
          c1 = 1;
          const obj5 = { value: EmbeddedAppCSPActionCreators.fetchEmbeddedAppCSP(tmp5), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "IconComponent", done: "+352" };
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
});
obj2.load = function load() {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
const fetchStore = initialize.createFetchStore(EmbeddedAppCSPStore, obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/csp/useEmbeddedAppCSP.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useEmbeddedAppCSP(url) {
  const cResult = c.c(10);
  const isEmbeddedAppFramePolicyEnabled = EmbeddedAppFramePolicyExperiment.useIsEmbeddedAppFramePolicyEnabled("useEmbeddedAppCSP");
  if (cResult[0] === isEmbeddedAppFramePolicyEnabled) {
    if (cResult[1] === url) {
      let tmp5 = cResult[2];
    }
    ({ data, error } = fetchStore(tmp5));
    if (isEmbeddedAppFramePolicyEnabled) {
      if (null != tmp5) {
        if (null != data) {
          if (cResult[5] === data) {
          }
          const obj3 = { status: "ready", policy: data, routerOrigin: tmp5 };
          cResult[5] = data;
          cResult[6] = tmp5;
          cResult[7] = obj3;
        } else if (cResult[8] !== error) {
          const tmp13 = null != error ? { status: "failed" } : { status: "loading" };
          cResult[8] = error;
          cResult[9] = tmp13;
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { status: "developer-served" };
        cResult[4] = obj4;
      }
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { status: "not-enforced" };
        cResult[3] = obj5;
        let tmp11 = obj5;
      } else {
        tmp11 = cResult[3];
      }
      return tmp11;
    }
    const tmp8 = fetchStore(tmp5);
  }
  let applicationRouterOrigin = null;
  if (isEmbeddedAppFramePolicyEnabled) {
    applicationRouterOrigin = null;
    if (null != url) {
      applicationRouterOrigin = getURLForApplication.getApplicationRouterOrigin(url);
      const tmpResult = getURLForApplication;
    }
  }
  cResult[0] = isEmbeddedAppFramePolicyEnabled;
  cResult[1] = url;
  cResult[2] = applicationRouterOrigin;
  tmp5 = applicationRouterOrigin;
}) : (function useEmbeddedAppCSP(url) {
  const isEmbeddedAppFramePolicyEnabled = EmbeddedAppFramePolicyExperiment.useIsEmbeddedAppFramePolicyEnabled("useEmbeddedAppCSP");
  let applicationRouterOrigin = null;
  if (isEmbeddedAppFramePolicyEnabled) {
    applicationRouterOrigin = null;
    if (null != url) {
      applicationRouterOrigin = getURLForApplication.getApplicationRouterOrigin(url);
      const tmpResult = getURLForApplication;
    }
  }
  const data = fetchStore(applicationRouterOrigin).data;
  if (isEmbeddedAppFramePolicyEnabled) {
    if (null == applicationRouterOrigin) {
      let obj2 = { status: "developer-served" };
    } else if (null != data) {
      const obj3 = { status: "ready", policy: data, routerOrigin: applicationRouterOrigin };
    } else {
      obj2 = null != tmp7 ? { status: "failed" } : { status: "loading" };
    }
  } else {
    return { status: "not-enforced" };
  }
  const tmp6 = fetchStore(applicationRouterOrigin);
});
export const useEmbeddedAppCSPPolicy = fetchStore;