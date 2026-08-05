// _runtime/01147_reactRouterV6BrowserTracingIntegration.js
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";
import feedbackAsyncIntegration from "feedbackAsyncIntegration";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV6BrowserTracingIntegration = function reactRouterV6BrowserTracingIntegration(instrumentPageLoad) {
  return require("01148_computeLocationKey.js") /* computeLocationKey */.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
};
export const withSentryReactRouterV6Routing = function withSentryReactRouterV6Routing(arg0) {
  return require("01148_computeLocationKey.js") /* computeLocationKey */.createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
};
export const wrapCreateBrowserRouterV6 = function wrapCreateBrowserRouterV6(arg0) {
  return require("01148_computeLocationKey.js") /* computeLocationKey */.createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
};
export const wrapCreateMemoryRouterV6 = function wrapCreateMemoryRouterV6(arg0) {
  return require("01148_computeLocationKey.js") /* computeLocationKey */.createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
};
export const wrapUseRoutesV6 = function wrapUseRoutesV6(arg0) {
  return require("01148_computeLocationKey.js") /* computeLocationKey */.createV6CompatibleWrapUseRoutes(arg0, "6");
};