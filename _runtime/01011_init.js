// === Module 1011: init ===

// Module 1011 (init)
import _mod1012 from "module_1012" /* 1012 */;
import captureReactException from "captureReactException" /* 1013 */;
import _mod1014 from "module_1014" /* 1014 */;
import _mod1017 from "module_1017" /* 1017 */;
import _mod1019 from "module_1019" /* 1019 */;
import reactRouterV3BrowserTracingIntegration from "reactRouterV3BrowserTracingIntegration" /* 1020 */;
import tanstackRouterBrowserTracingIntegration from "tanstackRouterBrowserTracingIntegration" /* 1021 */;
import instrumentReactRouter from "instrumentReactRouter" /* 1022 */;
import reactRouterV6BrowserTracingIntegration from "reactRouterV6BrowserTracingIntegration" /* 1023 */;
import reactRouterV7BrowserTracingIntegration from "reactRouterV7BrowserTracingIntegration" /* 1027 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;

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

export const init = _mod1012.init;
export const captureReactException = captureReactException.captureReactException;
export const reactErrorHandler = captureReactException.reactErrorHandler;
export const Profiler = _mod1014.Profiler;
export const useProfiler = _mod1014.useProfiler;
export const withProfiler = _mod1014.withProfiler;
export const ErrorBoundary = _mod1017.ErrorBoundary;
export const withErrorBoundary = _mod1017.withErrorBoundary;
export const createReduxEnhancer = _mod1019.createReduxEnhancer;
export const reactRouterV3BrowserTracingIntegration = reactRouterV3BrowserTracingIntegration.reactRouterV3BrowserTracingIntegration;
export const tanstackRouterBrowserTracingIntegration = tanstackRouterBrowserTracingIntegration.tanstackRouterBrowserTracingIntegration;
export const reactRouterV4BrowserTracingIntegration = instrumentReactRouter.reactRouterV4BrowserTracingIntegration;
export const reactRouterV5BrowserTracingIntegration = instrumentReactRouter.reactRouterV5BrowserTracingIntegration;
export const withSentryRouting = instrumentReactRouter.withSentryRouting;
export const reactRouterV6BrowserTracingIntegration = reactRouterV6BrowserTracingIntegration.reactRouterV6BrowserTracingIntegration;
export const withSentryReactRouterV6Routing = reactRouterV6BrowserTracingIntegration.withSentryReactRouterV6Routing;
export const wrapCreateBrowserRouterV6 = reactRouterV6BrowserTracingIntegration.wrapCreateBrowserRouterV6;
export const wrapCreateMemoryRouterV6 = reactRouterV6BrowserTracingIntegration.wrapCreateMemoryRouterV6;
export const wrapUseRoutesV6 = reactRouterV6BrowserTracingIntegration.wrapUseRoutesV6;
export const reactRouterV7BrowserTracingIntegration = reactRouterV7BrowserTracingIntegration.reactRouterV7BrowserTracingIntegration;
export const withSentryReactRouterV7Routing = reactRouterV7BrowserTracingIntegration.withSentryReactRouterV7Routing;
export const wrapCreateBrowserRouterV7 = reactRouterV7BrowserTracingIntegration.wrapCreateBrowserRouterV7;
export const wrapCreateMemoryRouterV7 = reactRouterV7BrowserTracingIntegration.wrapCreateMemoryRouterV7;
export const wrapUseRoutesV7 = reactRouterV7BrowserTracingIntegration.wrapUseRoutesV7;