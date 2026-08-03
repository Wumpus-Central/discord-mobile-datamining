import isHermesEnabled from "isHermesEnabled";

const ReactNativeTracing = "ReactNativeTracing";
let obj = { traceFetch: null, traceXHR: true, enableHTTPTimings: true };
obj[0] = isHermesEnabled.isWeb();

export const INTEGRATION_NAME = "ReactNativeTracing";
export const defaultReactNativeTracingOptions = obj;
export const reactNativeTracingIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let merged1;
  let fn2;
  let url;
  obj = { currentRoute: "r" };
  let fn = obj.beforeStartSpan;
  const merged = Object.assign(Object.assign({}, url), obj);
  if (null === fn) {
    fn = (arg0) => arg0;
  }
  obj = { beforeStartSpan: fn, finalTimeoutMs: null, idleTimeoutMs: null };
  let finalTimeout = obj.finalTimeoutMs;
  if (null === finalTimeout) {
    finalTimeout = obj(merged1[1]).defaultIdleOptions.finalTimeout;
  }
  obj[1] = finalTimeout;
  let idleTimeout = obj.idleTimeoutMs;
  if (null === idleTimeout) {
    idleTimeout = obj(merged1[1]).defaultIdleOptions.idleTimeout;
  }
  obj[2] = idleTimeout;
  merged1 = Object.assign(merged, obj);
  fn2 = merged1.shouldCreateSpanForRequest;
  const devServer = obj(merged1[2]).getDevServer();
  url = undefined;
  if (null !== devServer) {
    if (undefined !== devServer) {
      url = devServer.url;
    }
  }
  if (undefined !== url) {
    fn2 = (str) => {
      const startsWithResult = str.startsWith(url);
      let tmp2 = !startsWithResult;
      if (!startsWithResult) {
        let tmp3Result = !fn2;
        if (fn2) {
          tmp3Result = tmp3(str);
        }
        tmp2 = tmp3Result;
      }
      return tmp2;
    };
  }
  merged1.shouldCreateSpanForRequest = fn2;
  return {
    name: fn2,
    setup(getOptions) {
      obj = obj(merged1[1]);
      const result = obj.addDefaultOpForSpanFrom(getOptions);
      obj(merged1[1]).addThreadInfoToSpan(getOptions);
      const obj2 = obj(merged1[1]);
      const tmp = obj;
      const tmp2 = merged1;
      obj = { traceFetch: merged1.traceFetch, traceXHR: merged1.traceXHR, shouldCreateSpanForRequest: merged1.shouldCreateSpanForRequest, tracePropagationTargets: null };
      let tracePropagationTargets = getOptions.getOptions().tracePropagationTargets;
      if (!tracePropagationTargets) {
        let tmp5;
        if (!tmpResult.isWeb()) {
          const items = [/.*/];
          tmp5 = items;
        }
        tracePropagationTargets = tmp5;
        tmpResult = tmp(tmp2[0]);
      }
      obj[3] = tracePropagationTargets;
      const result1 = obj(merged1[3]).instrumentOutgoingRequests(getOptions, obj);
    },
    processEvent(contexts) {
      let currentRoute = contexts.contexts;
      if (currentRoute) {
        currentRoute = obj.currentRoute;
      }
      if (currentRoute) {
        const _Object = Object;
        obj = { view_names: null };
        const items = [obj.currentRoute];
        obj[0] = items;
        contexts.contexts.app = Object.assign(obj, contexts.contexts.app);
      }
      return contexts;
    },
    options: merged1,
    state: obj,
    setCurrentRoute(componentName) {
      obj.currentRoute = componentName;
    }
  };
};
export const getCurrentReactNativeTracingIntegration = function getCurrentReactNativeTracingIntegration() {
  const client = require(817) /* registerSpanErrorInstrumentation */.getClient();
  if (client) {
    return client.getIntegrationByName(ReactNativeTracing);
  }
  const obj = require(817) /* registerSpanErrorInstrumentation */;
};
export const getReactNativeTracingIntegration = function getReactNativeTracingIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName(ReactNativeTracing);
};