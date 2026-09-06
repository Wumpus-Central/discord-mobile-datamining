// === Module 1012: reactRouterV6BrowserTracingIntegration ===

// Module 1012 (reactRouterV6BrowserTracingIntegration)
import computeLocationKey from "computeLocationKey" /* 1013 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV6BrowserTracingIntegration = function reactRouterV6BrowserTracingIntegration(instrumentPageLoad) {
  return computeLocationKey.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
};
export const withSentryReactRouterV6Routing = function withSentryReactRouterV6Routing(arg0) {
  return computeLocationKey.createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
};
export const wrapCreateBrowserRouterV6 = function wrapCreateBrowserRouterV6(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
};
export const wrapCreateMemoryRouterV6 = function wrapCreateMemoryRouterV6(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
};
export const wrapUseRoutesV6 = function wrapUseRoutesV6(arg0) {
  return computeLocationKey.createV6CompatibleWrapUseRoutes(arg0, "6");
};