// _runtime/01023_reactRouterV6BrowserTracingIntegration.js
import _mod1024 from "metro/01024__.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";
import feedbackAsyncIntegration from "00900_feedbackAsyncIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV6BrowserTracingIntegration = function reactRouterV6BrowserTracingIntegration(
  instrumentPageLoad,
) {
  const obj = _mod1024;
  return obj.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "6");
};
export const withSentryReactRouterV6Routing = function withSentryReactRouterV6Routing(arg0) {
  const obj = _mod1024;
  return obj.createV6CompatibleWithSentryReactRouterRouting(arg0, "6");
};
export const wrapCreateBrowserRouterV6 = function wrapCreateBrowserRouterV6(arg0) {
  const obj = _mod1024;
  return obj.createV6CompatibleWrapCreateBrowserRouter(arg0, "6");
};
export const wrapCreateMemoryRouterV6 = function wrapCreateMemoryRouterV6(arg0) {
  const obj = _mod1024;
  return obj.createV6CompatibleWrapCreateMemoryRouter(arg0, "6");
};
export const wrapUseRoutesV6 = function wrapUseRoutesV6(arg0) {
  const obj = _mod1024;
  return obj.createV6CompatibleWrapUseRoutes(arg0, "6");
};
