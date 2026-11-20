// === Module 1048: reactNativeTracingIntegration ===

// Module 1048 (reactNativeTracingIntegration)
import startIdleSpan from "startIdleSpan" /* 1021 */;
import _mod1027 from "module_1027" /* 1027 */;
import _mod1029 from "module_1029" /* 1029 */;
import _mod1051 from "module_1051" /* 1051 */;
import wrapExpoRouter from "wrapExpoRouter" /* 1052 */;
import _mod1053 from "module_1053" /* 1053 */;
import sentryTraceGesture from "sentryTraceGesture" /* 1055 */;

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