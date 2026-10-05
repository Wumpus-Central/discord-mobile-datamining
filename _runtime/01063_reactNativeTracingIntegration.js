// === Module 1063: reactNativeTracingIntegration ===

// Module 1063 (reactNativeTracingIntegration)
import DEFAULT from "DEFAULT" /* 1031 */;
import DEFAULT_NAVIGATION_SPAN_NAME from "DEFAULT_NAVIGATION_SPAN_NAME" /* 1036 */;
import _mod1042 from "module_1042" /* 1042 */;
import _mod1044 from "module_1044" /* 1044 */;
import weakMap from "weakMap" /* 1064 */;
import _mod1066 from "module_1066" /* 1066 */;
import ReactNativeProfiler from "ReactNativeProfiler" /* 1067 */;
import DEFAULT_BREADCRUMB_CATEGORY from "DEFAULT_BREADCRUMB_CATEGORY" /* 1069 */;

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