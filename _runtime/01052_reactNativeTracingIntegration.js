// _runtime/01052_reactNativeTracingIntegration.js
import startIdleSpan from "01025_startIdleSpan.js";
import INTEGRATION_NAME from "01031_INTEGRATION_NAME.js";
import reactNavigationIntegration from "01033_reactNavigationIntegration.js";
import reactNativeNavigationIntegration from "01055_reactNativeNavigationIntegration.js";
import _isNativeReflectConstruct from "01056__isNativeReflectConstruct.js";
import addGestureBreadcrumb from "01058_addGestureBreadcrumb.js";

for (const key10013 in require("metro/01020__.js")) {
  let tmp2 = key10013;
  arg5[key10013] = require("metro/01020__.js")[key10013];
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
