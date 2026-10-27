// _runtime/01061_reactNativeTracingIntegration.js
import startIdleSpan from "01034_startIdleSpan.js";
import _mod1040 from "metro/01040__.js";
import _mod1042 from "metro/01042__.js";
import _mod1064 from "metro/01064__.js";
import wrapExpoRouter from "01065_wrapExpoRouter.js";
import _mod1066 from "metro/01066__.js";
import sentryTraceGesture from "01068_sentryTraceGesture.js";

const require = globalThis.__r;

for (const key10013 in require("DEFAULT")) {
  arg5[key10013] = require("DEFAULT")[key10013];
  continue;
}
for (const key10017 in require("TimeToInitialDisplay")) {
  arg5[key10017] = require("TimeToInitialDisplay")[key10017];
  continue;
}

export const reactNativeTracingIntegration = _mod1040.reactNativeTracingIntegration;
export const REACT_NATIVE_TRACING_INTEGRATION_NAME = _mod1040.INTEGRATION_NAME;
export const getCurrentReactNativeTracingIntegration = _mod1040.getCurrentReactNativeTracingIntegration;
export const getReactNativeTracingIntegration = _mod1040.getReactNativeTracingIntegration;
export const reactNavigationIntegration = _mod1042.reactNavigationIntegration;
export const reactNativeNavigationIntegration = _mod1064.reactNativeNavigationIntegration;
export const wrapExpoRouter = wrapExpoRouter.wrapExpoRouter;
export const startIdleNavigationSpan = startIdleSpan.startIdleNavigationSpan;
export const startIdleSpan = startIdleSpan.startIdleSpan;
export const getDefaultIdleNavigationSpanOptions = startIdleSpan.getDefaultIdleNavigationSpanOptions;
export const ReactNativeProfiler = _mod1066.ReactNativeProfiler;
export const sentryTraceGesture = sentryTraceGesture.sentryTraceGesture;
