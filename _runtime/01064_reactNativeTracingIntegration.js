// _runtime/01064_reactNativeTracingIntegration.js
import startIdleSpan from "01037_startIdleSpan.js";
import _mod1043 from "metro/01043__.js";
import _mod1045 from "metro/01045__.js";
import _mod1067 from "metro/01067__.js";
import wrapExpoRouter from "01068_wrapExpoRouter.js";
import _mod1069 from "metro/01069__.js";
import sentryTraceGesture from "01071_sentryTraceGesture.js";

const require = globalThis.__r;

for (const key10013 in require("DEFAULT")) {
  arg5[key10013] = require("DEFAULT")[key10013];
  continue;
}
for (const key10017 in require("TimeToInitialDisplay")) {
  arg5[key10017] = require("TimeToInitialDisplay")[key10017];
  continue;
}

export const reactNativeTracingIntegration = _mod1043.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1043.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1043.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1043.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1045.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1067.reactNativeNavigationIntegration;
export const wrapExpoRouter = wrapExpoRouter.wrapExpoRouter;
export const startIdleNavigationSpan = startIdleSpan.startIdleNavigationSpan;
export const startIdleSpan = startIdleSpan.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = startIdleSpan.getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = _mod1069.ReactNativeProfiler;
export const sentryTraceGesture = sentryTraceGesture.sentryTraceGesture;
