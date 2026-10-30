// _runtime/01049_reactNativeTracingIntegration.js
import startIdleSpan from "01022_startIdleSpan.js";
import _mod1028 from "metro/01028__.js";
import _mod1030 from "metro/01030__.js";
import _mod1052 from "metro/01052__.js";
import wrapExpoRouter from "01053_wrapExpoRouter.js";
import _mod1054 from "metro/01054__.js";
import sentryTraceGesture from "01056_sentryTraceGesture.js";

const require = globalThis.__r;

for (const key10013 in require("DEFAULT")) {
  arg5[key10013] = require("DEFAULT")[key10013];
  continue;
}
for (const key10017 in require("TimeToInitialDisplay")) {
  arg5[key10017] = require("TimeToInitialDisplay")[key10017];
  continue;
}

export const reactNativeTracingIntegration = _mod1028.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1028.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1028.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1028.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1030.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1052.reactNativeNavigationIntegration;
export const wrapExpoRouter = wrapExpoRouter.wrapExpoRouter;
export const startIdleNavigationSpan = startIdleSpan.startIdleNavigationSpan;
export const startIdleSpan = startIdleSpan.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = startIdleSpan.getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = _mod1054.ReactNativeProfiler;
export const sentryTraceGesture = sentryTraceGesture.sentryTraceGesture;
