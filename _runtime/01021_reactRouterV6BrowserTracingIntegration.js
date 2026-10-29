// === Module 1021: reactRouterV6BrowserTracingIntegration ===

// Module 1021 (reactRouterV6BrowserTracingIntegration)
import computeLocationKey from "computeLocationKey" /* 1022 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function reactRouterV6BrowserTracingIntegration(instrumentPageLoad) {
  return computeLocationKey.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
}
export function withSentryReactRouterV6Routing(arg0) {
  return computeLocationKey.createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
}
export function wrapCreateBrowserRouterV6(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
}
export function wrapCreateMemoryRouterV6(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
}
export function wrapUseRoutesV6(arg0) {
  return computeLocationKey.createV6CompatibleWrapUseRoutes(arg0, "6");
}