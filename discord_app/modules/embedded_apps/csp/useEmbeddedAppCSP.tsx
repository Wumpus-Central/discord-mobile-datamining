// discord_app/modules/embedded_apps/csp/useEmbeddedAppCSP.tsx
import getURLForApplication from "../../activities/getURLForApplication.tsx";
import EmbeddedAppFramePolicyExperiment from "EmbeddedAppFramePolicyExperiment.tsx";
import EmbeddedAppCSPActionCreators from "EmbeddedAppCSPActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import EmbeddedAppCSPStore from "EmbeddedAppCSPStore.tsx";

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
  get(applicationRouterOrigin) {
    let policy = null;
    if (null != applicationRouterOrigin) {
      policy = EmbeddedAppCSPStore.getPolicy(applicationRouterOrigin);
    }
    return policy;
  },
  load: null,
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/csp/useEmbeddedAppCSP.tsx");

export default function useEmbeddedAppCSP(assetURL) {
  const isEmbeddedAppFramePolicyEnabled =
    EmbeddedAppFramePolicyExperiment.useIsEmbeddedAppFramePolicyEnabled("useEmbeddedAppCSP");
  let applicationRouterOrigin = null;
  if (isEmbeddedAppFramePolicyEnabled) {
    applicationRouterOrigin = null;
    if (null != assetURL) {
      applicationRouterOrigin = getURLForApplication.getApplicationRouterOrigin(assetURL);
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
}
export const useEmbeddedAppCSPPolicy = fetchStore;
