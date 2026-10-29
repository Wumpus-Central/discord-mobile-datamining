// === Module 1025: reactRouterV7BrowserTracingIntegration ===

// Module 1025 (reactRouterV7BrowserTracingIntegration)
import computeLocationKey from "computeLocationKey" /* 1022 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 898 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function reactRouterV7BrowserTracingIntegration(instrumentPageLoad) {
  return computeLocationKey.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
}
export function withSentryReactRouterV7Routing(arg0) {
  return computeLocationKey.createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
}
export function wrapCreateBrowserRouterV7(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
}
export function wrapCreateMemoryRouterV7(arg0) {
  return computeLocationKey.createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
}
export function wrapUseRoutesV7(arg0) {
  return computeLocationKey.createV6CompatibleWrapUseRoutes(arg0, "7");
}