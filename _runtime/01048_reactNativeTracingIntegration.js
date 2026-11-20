// _runtime/01048_reactNativeTracingIntegration.js
import startIdleSpan from "01021_startIdleSpan.js";
import _mod1027 from "metro/01027__.js";
import _mod1029 from "metro/01029__.js";
import _mod1051 from "metro/01051__.js";
import wrapExpoRouter from "01052_wrapExpoRouter.js";
import _mod1053 from "metro/01053__.js";
import sentryTraceGesture from "01055_sentryTraceGesture.js";

const require = globalThis.__r;

for (const key10013 in require("DEFAULT")) {
  arg5[key10013] = require("DEFAULT")[key10013];
  continue;
}
for (const key10017 in require("TimeToInitialDisplay")) {
  arg5[key10017] = require("TimeToInitialDisplay")[key10017];
  continue;
}

export const reactNativeTracingIntegration = _mod1027.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1027.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1027.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1027.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1029.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1051.reactNativeNavigationIntegration;
export const wrapExpoRouter = wrapExpoRouter.wrapExpoRouter;
export const startIdleNavigationSpan = startIdleSpan.startIdleNavigationSpan;
export const startIdleSpan = startIdleSpan.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = startIdleSpan.getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = _mod1053.ReactNativeProfiler;
export const sentryTraceGesture = sentryTraceGesture.sentryTraceGesture;
