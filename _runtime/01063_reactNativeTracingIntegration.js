// _runtime/01063_reactNativeTracingIntegration.js
import startIdleSpan from "01036_startIdleSpan.js";
import _mod1042 from "metro/01042__.js";
import _mod1044 from "metro/01044__.js";
import _mod1066 from "metro/01066__.js";
import _mod1067 from "metro/01067__.js";
import sentryTraceGesture from "01069_sentryTraceGesture.js";

const require = globalThis.__r;

for (const key10013 in require("DEFAULT")) {
  arg5[key10013] = require("DEFAULT")[key10013];
  continue;
}
for (const key10017 in require("TimeToInitialDisplay")) {
  arg5[key10017] = require("TimeToInitialDisplay")[key10017];
  continue;
}

export const reactNativeTracingIntegration = _mod1042.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1042.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1042.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1042.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1044.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1066.reactNativeNavigationIntegration;
export const startIdleNavigationSpan = startIdleSpan.startIdleNavigationSpan;
export const startIdleSpan = startIdleSpan.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = startIdleSpan.getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = _mod1067.ReactNativeProfiler;
export const sentryTraceGesture = sentryTraceGesture.sentryTraceGesture;
