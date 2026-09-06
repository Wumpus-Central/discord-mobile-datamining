// === Module 1016: reactRouterV7BrowserTracingIntegration ===

// Module 1016 (reactRouterV7BrowserTracingIntegration)
import computeLocationKey from "computeLocationKey" /* 1013 */;
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 682 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV7BrowserTracingIntegration = function reactRouterV7BrowserTracingIntegration(instrumentPageLoad) {
  return computeLocationKey.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
};
export const withSentryReactRouterV7Routing = function withSentryReactRouterV7Routing(arg0) {
  return computeLocationKey.createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
};
export const wrapCreateBrowserRouterV7 = function wrapCreateBrowserRouterV7(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
};
export const wrapCreateMemoryRouterV7 = function wrapCreateMemoryRouterV7(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
};
export const wrapUseRoutesV7 = function wrapUseRoutesV7(arg0) {
  return computeLocationKey.createV6CompatibleWrapUseRoutes(arg0, "7");
};