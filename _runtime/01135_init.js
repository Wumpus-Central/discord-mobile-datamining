// _runtime/01135_init.js
import feedbackAsyncIntegration from "feedbackAsyncIntegration";

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
    obj[1] = require("feedbackAsyncIntegration").__proto__;
    Object.defineProperty(exports, "__proto__", obj);
  }
  const _Object3 = Object;
  const keys = Object.keys(require("feedbackAsyncIntegration"));
  const item = keys.forEach((key10009) => {
    if ("default" === key10009) {
      if (!tmp) {
        exports[key10009] = require("01024_feedbackAsyncIntegration.js") /* feedbackAsyncIntegration */[key10009];
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

export const init = require("init").init;
export const captureReactException = require("captureReactException").captureReactException;
export const reactErrorHandler = require("captureReactException").reactErrorHandler;
export const Profiler = require("_isNativeReflectConstruct").Profiler;
export const useProfiler = require("_isNativeReflectConstruct").useProfiler;
export const withProfiler = require("_isNativeReflectConstruct").withProfiler;
export const ErrorBoundary = require("_isNativeReflectConstruct").ErrorBoundary;
export const withErrorBoundary = require("_isNativeReflectConstruct").withErrorBoundary;
export const createReduxEnhancer = require("createReduxEnhancer").createReduxEnhancer;
export const reactRouterV3BrowserTracingIntegration = require("reactRouterV3BrowserTracingIntegration").reactRouterV3BrowserTracingIntegration;
export const tanstackRouterBrowserTracingIntegration = require("tanstackRouterBrowserTracingIntegration").tanstackRouterBrowserTracingIntegration;
export const reactRouterV4BrowserTracingIntegration = require("instrumentReactRouter").reactRouterV4BrowserTracingIntegration;
export const reactRouterV5BrowserTracingIntegration = require("instrumentReactRouter").reactRouterV5BrowserTracingIntegration;
export const withSentryRouting = require("instrumentReactRouter").withSentryRouting;
export const reactRouterV6BrowserTracingIntegration = require("reactRouterV6BrowserTracingIntegration").reactRouterV6BrowserTracingIntegration;
export const withSentryReactRouterV6Routing = require("reactRouterV6BrowserTracingIntegration").withSentryReactRouterV6Routing;
export const wrapCreateBrowserRouterV6 = require("reactRouterV6BrowserTracingIntegration").wrapCreateBrowserRouterV6;
export const wrapCreateMemoryRouterV6 = require("reactRouterV6BrowserTracingIntegration").wrapCreateMemoryRouterV6;
export const wrapUseRoutesV6 = require("reactRouterV6BrowserTracingIntegration").wrapUseRoutesV6;
export const reactRouterV7BrowserTracingIntegration = require("reactRouterV7BrowserTracingIntegration").reactRouterV7BrowserTracingIntegration;
export const withSentryReactRouterV7Routing = require("reactRouterV7BrowserTracingIntegration").withSentryReactRouterV7Routing;
export const wrapCreateBrowserRouterV7 = require("reactRouterV7BrowserTracingIntegration").wrapCreateBrowserRouterV7;
export const wrapCreateMemoryRouterV7 = require("reactRouterV7BrowserTracingIntegration").wrapCreateMemoryRouterV7;
export const wrapUseRoutesV7 = require("reactRouterV7BrowserTracingIntegration").wrapUseRoutesV7;