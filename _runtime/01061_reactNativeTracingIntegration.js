// === Module 1061: reactNativeTracingIntegration ===

// Module 1061 (reactNativeTracingIntegration)
import startIdleSpan from "startIdleSpan" /* 1034 */;
import _mod1040 from "module_1040" /* 1040 */;
import _mod1042 from "module_1042" /* 1042 */;
import _mod1064 from "module_1064" /* 1064 */;
import wrapExpoRouter from "wrapExpoRouter" /* 1065 */;
import _mod1066 from "module_1066" /* 1066 */;
import sentryTraceGesture from "sentryTraceGesture" /* 1068 */;

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