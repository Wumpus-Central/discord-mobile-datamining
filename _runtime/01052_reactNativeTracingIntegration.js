// _runtime/01052_reactNativeTracingIntegration.js
import startIdleSpan from "01025_startIdleSpan.js";
import _mod1031 from "metro/01031__.js";
import _mod1033 from "metro/01033__.js";
import _mod1055 from "metro/01055__.js";
import _mod1056 from "metro/01056__.js";
import sentryTraceGesture from "01058_sentryTraceGesture.js";

for (const key10013 in require("DEFAULT")) {
  arg5[key10013] = require("DEFAULT")[key10013];
  continue;
}
for (const key10017 in require("TimeToInitialDisplay")) {
  arg5[key10017] = require("TimeToInitialDisplay")[key10017];
  continue;
}

export const reactNativeTracingIntegration = _mod1031.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1031.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1031.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1031.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1033.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1055.reactNativeNavigationIntegration;
export const startIdleNavigationSpan = startIdleSpan.startIdleNavigationSpan;
export const startIdleSpan = startIdleSpan.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = startIdleSpan.getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = _mod1056.ReactNativeProfiler;
export const sentryTraceGesture = sentryTraceGesture.sentryTraceGesture;
