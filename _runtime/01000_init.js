// _runtime/01000_init.js
import _mod1001 from "metro/01001__.js";
import captureReactException from "01002_captureReactException.js";
import _mod1003 from "metro/01003__.js";
import _mod1006 from "metro/01006__.js";
import _mod1008 from "metro/01008__.js";
import reactRouterV3BrowserTracingIntegration from "01009_reactRouterV3BrowserTracingIntegration.js";
import tanstackRouterBrowserTracingIntegration from "01010_tanstackRouterBrowserTracingIntegration.js";
import instrumentReactRouter from "01011_instrumentReactRouter.js";
import reactRouterV6BrowserTracingIntegration from "01012_reactRouterV6BrowserTracingIntegration.js";
import reactRouterV7BrowserTracingIntegration from "01016_reactRouterV7BrowserTracingIntegration.js";
import feedbackAsyncIntegration from "00889_feedbackAsyncIntegration.js";

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
    const obj = { enumerable: true, value: feedbackAsyncIntegration.__proto__ };
    Object.defineProperty(exports, "__proto__", obj);
  }
  const _Object3 = Object;
  const keys = Object.keys(feedbackAsyncIntegration);
  const item = keys.forEach((item) => {
    if ("default" === item) {
      if (!tmp) {
        exports[item] = feedbackAsyncIntegration[item];
      }
    } else {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      const call = hasOwnProperty.call;
      typeof call === "unknown" ? hasOwnProperty(item) : call(exports, item);
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

export const init = _mod1001.init;
export const captureReactException = captureReactException.captureReactException;
export const reactErrorHandler = captureReactException.reactErrorHandler;
export const Profiler = _mod1003.Profiler;
export const useProfiler = _mod1003.useProfiler;
export const withProfiler = _mod1003.withProfiler;
export const ErrorBoundary = _mod1006.ErrorBoundary;
export const withErrorBoundary = _mod1006.withErrorBoundary;
export const createReduxEnhancer = _mod1008.createReduxEnhancer;
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
