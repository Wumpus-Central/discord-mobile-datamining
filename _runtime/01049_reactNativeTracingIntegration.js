// === Module 1049: reactNativeTracingIntegration ===

// Module 1049 (reactNativeTracingIntegration)
import startIdleSpan from "startIdleSpan" /* 1022 */;
import _mod1028 from "module_1028" /* 1028 */;
import _mod1030 from "module_1030" /* 1030 */;
import _mod1052 from "module_1052" /* 1052 */;
import wrapExpoRouter from "wrapExpoRouter" /* 1053 */;
import _mod1054 from "module_1054" /* 1054 */;
import sentryTraceGesture from "sentryTraceGesture" /* 1056 */;

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