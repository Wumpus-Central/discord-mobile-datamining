// _runtime/01027_reactRouterV7BrowserTracingIntegration.js
import _mod1024 from "metro/01024__.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";
import feedbackAsyncIntegration from "00900_feedbackAsyncIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reactRouterV7BrowserTracingIntegration = function reactRouterV7BrowserTracingIntegration(
  instrumentPageLoad,
) {
  const obj = _mod1024;
  return obj.createReactRouterV6CompatibleTracingIntegration(instrumentPageLoad, "7");
};
export const withSentryReactRouterV7Routing = function withSentryReactRouterV7Routing(arg0) {
  const obj = _mod1024;
  return obj.createV6CompatibleWithSentryReactRouterRouting(arg0, "7");
};
export const wrapCreateBrowserRouterV7 = function wrapCreateBrowserRouterV7(arg0) {
  const obj = _mod1024;
  return obj.createV6CompatibleWrapCreateBrowserRouter(arg0, "7");
};
export const wrapCreateMemoryRouterV7 = function wrapCreateMemoryRouterV7(arg0) {
  const obj = _mod1024;
  return obj.createV6CompatibleWrapCreateMemoryRouter(arg0, "7");
};
export const wrapUseRoutesV7 = function wrapUseRoutesV7(arg0) {
  const obj = _mod1024;
  return obj.createV6CompatibleWrapUseRoutes(arg0, "7");
};
