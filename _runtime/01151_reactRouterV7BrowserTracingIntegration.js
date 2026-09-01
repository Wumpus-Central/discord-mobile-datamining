// _runtime/01151_reactRouterV7BrowserTracingIntegration.js
import computeLocationKey from "01148_computeLocationKey.js";
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";
import feedbackAsyncIntegration from "01024_feedbackAsyncIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV7BrowserTracingIntegration = function reactRouterV7BrowserTracingIntegration(
  instrumentPageLoad,
) {
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
