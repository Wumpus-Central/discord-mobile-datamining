// _runtime/01063_reactNativeTracingIntegration.js
import DEFAULT from "01031_DEFAULT.js";
import DEFAULT_NAVIGATION_SPAN_NAME from "01036_DEFAULT_NAVIGATION_SPAN_NAME.js";
import _mod1042 from "metro/01042__.js";
import _mod1044 from "metro/01044__.js";
import weakMap from "01064_weakMap.js";
import _mod1066 from "metro/01066__.js";
import ReactNativeProfiler from "01067_ReactNativeProfiler.js";
import DEFAULT_BREADCRUMB_CATEGORY from "01069_DEFAULT_BREADCRUMB_CATEGORY.js";

for (const key10013 in DEFAULT) {
  exports[key10013] = DEFAULT[key10013];
  continue;
}
for (const key10017 in weakMap) {
  exports[key10017] = weakMap[key10017];
  continue;
}
const ReactNativeProfiler_export = ReactNativeProfiler.ReactNativeProfiler;

export const reactNativeTracingIntegration = _mod1042.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1042.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1042.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1042.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1044.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1066.reactNativeNavigationIntegration;
export const startIdleNavigationSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleNavigationSpan;
export const startIdleSpan = DEFAULT_NAVIGATION_SPAN_NAME.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = DEFAULT_NAVIGATION_SPAN_NAME.getDefaultIdleNavigationSpanOptions;
export { ReactNativeProfiler_export as ReactNativeProfiler };
export const sentryTraceGesture = DEFAULT_BREADCRUMB_CATEGORY.sentryTraceGesture;
