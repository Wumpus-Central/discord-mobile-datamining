// _runtime/01132_init.js
import init from "01133_init.js";
import captureReactException from "01134_captureReactException.js";
import _isNativeReflectConstruct from "01135__isNativeReflectConstruct.js";
import _isNativeReflectConstruct2 from "01138__isNativeReflectConstruct.js";
import createReduxEnhancer from "01140_createReduxEnhancer.js";
import reactRouterV3BrowserTracingIntegration from "01141_reactRouterV3BrowserTracingIntegration.js";
import tanstackRouterBrowserTracingIntegration from "01142_tanstackRouterBrowserTracingIntegration.js";
import instrumentReactRouter from "01143_instrumentReactRouter.js";
import reactRouterV6BrowserTracingIntegration from "01144_reactRouterV6BrowserTracingIntegration.js";
import reactRouterV7BrowserTracingIntegration from "01148_reactRouterV7BrowserTracingIntegration.js";
import feedbackAsyncIntegration from "01021_feedbackAsyncIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let call = hasOwnProperty.call;
if (typeof call === "unknown") {
  let hasOwnPropertyResult = hasOwnProperty("__proto__");
} else {
  hasOwnPropertyResult = call(feedbackAsyncIntegration, "__proto__");
}
if (!hasOwnPropertyResult) {
  if (hasOwnPropertyResult) {
    const _Object2 = Object;
    const obj = { enumerable: true, value: null };
    obj[1] = feedbackAsyncIntegration.__proto__;
    Object.defineProperty(exports, "__proto__", obj);
  }
  const _Object3 = Object;
  const keys = Object.keys(feedbackAsyncIntegration);
  const item = keys.forEach((key10009) => {
    if ("default" === key10009) {
      if (!tmp) {
        exports[key10009] = feedbackAsyncIntegration[key10009];
      }
    } else {
      const _Object = Object;
      const call = hasOwnProperty.call;
      typeof call === "unknown" ? hasOwnProperty(key10009) : call(exports, key10009);
      const tmp3 = exports;
    }
  });
} else {
  let _Object = Object;
  const call2 = hasOwnProperty2.call;
  if (typeof call2 === "unknown") {
    let hasOwnProperty2Result = hasOwnProperty2("__proto__");
  } else {
    hasOwnProperty2Result = call2(exports, "__proto__");
  }
}

export const init = init.init;
export const captureReactException = captureReactException.captureReactException;
export const reactErrorHandler = captureReactException.reactErrorHandler;
export const Profiler = _isNativeReflectConstruct.Profiler;
export const useProfiler = _isNativeReflectConstruct.useProfiler;
export const withProfiler = _isNativeReflectConstruct.withProfiler;
export const ErrorBoundary = _isNativeReflectConstruct2.ErrorBoundary;
export const withErrorBoundary = _isNativeReflectConstruct2.withErrorBoundary;
export const createReduxEnhancer = createReduxEnhancer.createReduxEnhancer;
export const reactRouterV3BrowserTracingIntegration =
  reactRouterV3BrowserTracingIntegration.reactRouterV3BrowserTracingIntegration;
export const tanstackRouterBrowserTracingIntegration =
  tanstackRouterBrowserTracingIntegration.tanstackRouterBrowserTracingIntegration;
export const reactRouterV4BrowserTracingIntegration = instrumentReactRouter.reactRouterV4BrowserTracingIntegration;
export const reactRouterV5BrowserTracingIntegration = instrumentReactRouter.reactRouterV5BrowserTracingIntegration;
export const withSentryRouting = instrumentReactRouter.withSentryRouting;
export const reactRouterV6BrowserTracingIntegration =
  reactRouterV6BrowserTracingIntegration.reactRouterV6BrowserTracingIntegration;
export const withSentryReactRouterV6Routing = reactRouterV6BrowserTracingIntegration.withSentryReactRouterV6Routing;
export const wrapCreateBrowserRouterV6 = reactRouterV6BrowserTracingIntegration.wrapCreateBrowserRouterV6;
export const wrapCreateMemoryRouterV6 = reactRouterV6BrowserTracingIntegration.wrapCreateMemoryRouterV6;
export const wrapUseRoutesV6 = reactRouterV6BrowserTracingIntegration.wrapUseRoutesV6;
export const reactRouterV7BrowserTracingIntegration =
  reactRouterV7BrowserTracingIntegration.reactRouterV7BrowserTracingIntegration;
export const withSentryReactRouterV7Routing = reactRouterV7BrowserTracingIntegration.withSentryReactRouterV7Routing;
export const wrapCreateBrowserRouterV7 = reactRouterV7BrowserTracingIntegration.wrapCreateBrowserRouterV7;
export const wrapCreateMemoryRouterV7 = reactRouterV7BrowserTracingIntegration.wrapCreateMemoryRouterV7;
export const wrapUseRoutesV7 = reactRouterV7BrowserTracingIntegration.wrapUseRoutesV7;
