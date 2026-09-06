// === Module 1052: reactNativeTracingIntegration ===

// Module 1052 (reactNativeTracingIntegration)
import startIdleSpan from "startIdleSpan" /* 1025 */;
import INTEGRATION_NAME from "INTEGRATION_NAME" /* 1031 */;
import reactNavigationIntegration from "reactNavigationIntegration" /* 1033 */;
import reactNativeNavigationIntegration from "reactNativeNavigationIntegration" /* 1055 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 1056 */;
import addGestureBreadcrumb from "addGestureBreadcrumb" /* 1058 */;

for (const key10013 in require("module_1020")) {
  let tmp2 = key10013;
  arg5[key10013] = require("module_1020")[key10013];
  continue;
}
for (const key10017 in require("TimeToInitialDisplay")) {
  let tmp3 = key10017;
  arg5[key10017] = require("TimeToInitialDisplay")[key10017];
  continue;
}

export const reactNativeTracingIntegration = INTEGRATION_NAME.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = INTEGRATION_NAME.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = INTEGRATION_NAME.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = INTEGRATION_NAME.getReactNativeTracingIntegration;
export const reactNavigationIntegration = reactNavigationIntegration.reactNavigationIntegration;
export const reactNativeNavigationIntegration = reactNativeNavigationIntegration.reactNativeNavigationIntegration;
export const startIdleNavigationSpan = startIdleSpan.startIdleNavigationSpan;
export const startIdleSpan = startIdleSpan.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = startIdleSpan.getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = _isNativeReflectConstruct.ReactNativeProfiler;
export const sentryTraceGesture = addGestureBreadcrumb.sentryTraceGesture;