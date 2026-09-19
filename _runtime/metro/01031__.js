// === Module 1031: ? ===

// Module 1031
import _mod682 from "module_682" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;
import startIdleSpan from "startIdleSpan" /* 1025 */;
import module_867 from "module_867" /* 867 */;

const ReactNativeTracing = "ReactNativeTracing";
const defaultReactNativeTracingOptions = { traceFetch: null, traceXHR: true, enableHTTPTimings: true };
defaultReactNativeTracingOptions.traceFetch = module_867.isWeb();

export const INTEGRATION_NAME = "ReactNativeTracing";
export { defaultReactNativeTracingOptions };
export const reactNativeTracingIntegration = (arg0) => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let merged1;
  let fn2;
  let url;
  let obj2 = { currentRoute: "Array" };
  let fn = obj.beforeStartSpan;
  const merged = Object.assign(Object.assign({}, url), obj);
  if (null === fn) {
    fn = (arg0) => arg0;
  }
  let obj3 = { beforeStartSpan: fn, finalTimeoutMs: null, idleTimeoutMs: null };
  let finalTimeout = obj.finalTimeoutMs;
  if (null === finalTimeout) {
    finalTimeout = obj2(merged1[1]).defaultIdleOptions.finalTimeout;
  }
  obj3.finalTimeoutMs = finalTimeout;
  let idleTimeout = obj.idleTimeoutMs;
  if (null === idleTimeout) {
    idleTimeout = obj2(merged1[1]).defaultIdleOptions.idleTimeout;
  }
  obj3.idleTimeoutMs = idleTimeout;
  merged1 = Object.assign(merged, obj3);
  fn2 = merged1.shouldCreateSpanForRequest;
  const devServer = obj2(merged1[2]).getDevServer();
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
      const result = startIdleSpan.addDefaultOpForSpanFrom(getOptions);
      startIdleSpan.addThreadInfoToSpan(getOptions);
      const obj4 = { traceFetch: merged1.traceFetch, traceXHR: merged1.traceXHR, shouldCreateSpanForRequest: merged1.shouldCreateSpanForRequest, tracePropagationTargets: null };
      let tracePropagationTargets = getOptions.getOptions().tracePropagationTargets;
      if (!tracePropagationTargets) {
        let tmp5;
        if (!tmpResult.isWeb()) {
          const items = [/.*/];
          tmp5 = items;
        }
        tracePropagationTargets = tmp5;
        tmpResult = module_867;
      }
      obj4.tracePropagationTargets = tracePropagationTargets;
      const result1 = feedbackAsyncIntegration.instrumentOutgoingRequests(getOptions, obj4);
    },
    processEvent(contexts) {
      let currentRoute = contexts.contexts;
      if (currentRoute) {
        currentRoute = obj2.currentRoute;
      }
      if (currentRoute) {
        const _Object = Object;
        const obj = { view_names: null };
        const items = [obj2.currentRoute];
        obj.view_names = items;
        contexts.contexts.app = Object.assign(obj, contexts.contexts.app);
      }
      return contexts;
    },
    options: merged1,
    state: obj2,
    setCurrentRoute(componentName) {
      obj2.currentRoute = componentName;
    }
  };
};
export const getCurrentReactNativeTracingIntegration = function getCurrentReactNativeTracingIntegration() {
  const client = _mod682.getClient();
  if (client) {
    return client.getIntegrationByName(ReactNativeTracing);
  }
};
export const getReactNativeTracingIntegration = function getReactNativeTracingIntegration(getIntegrationByName) {
  return getIntegrationByName.getIntegrationByName(ReactNativeTracing);
};