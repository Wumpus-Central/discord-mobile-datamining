// === Module 1051: ? ===

// Module 1051
import debugSymbolicatorIntegration from "debugSymbolicatorIntegration" /* 676 */;
import _mod867 from "module_867" /* 867 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 889 */;
import reactNativeTracingIntegration from "reactNativeTracingIntegration" /* 1052 */;

require = arg1;
const dependencyMap = arg6;

export const getDefaultIntegrations = function getDefaultIntegrations(patchGlobalPromise) {
  const items = [];
  const push = items.push;
  const obj2 = debugSymbolicatorIntegration;
  if (notWebResult) {
    const obj3 = { patchGlobalPromise: patchGlobalPromise.patchGlobalPromise };
    push(obj2.reactNativeErrorHandlersIntegration(obj3));
    items.push(debugSymbolicatorIntegration.nativeLinkedErrorsIntegration());
    const tmpResult = debugSymbolicatorIntegration;
  } else {
    push(obj2.browserApiErrorsIntegration());
    items.push(debugSymbolicatorIntegration.browserGlobalHandlersIntegration());
    const tmpResult34 = debugSymbolicatorIntegration;
    items.push(debugSymbolicatorIntegration.browserLinkedErrorsIntegration());
    if (patchGlobalPromise.enableAutoSessionTracking) {
      items.push(feedbackAsyncIntegration.browserSessionIntegration());
      const tmpResult36 = feedbackAsyncIntegration;
    }
    const tmpResult35 = debugSymbolicatorIntegration;
  }
  notWebResult = _mod867.notWeb();
  items.push(debugSymbolicatorIntegration.inboundFiltersIntegration());
  const tmpResult37 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.functionToStringIntegration());
  const tmpResult38 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.breadcrumbsIntegration());
  const tmpResult39 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.dedupeIntegration());
  const tmpResult40 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.httpContextIntegration());
  const tmpResult41 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.nativeReleaseIntegration());
  const tmpResult42 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.eventOriginIntegration());
  const tmpResult43 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.sdkInfoIntegration());
  const tmpResult44 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.reactNativeInfoIntegration());
  const tmpResult45 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.createReactNativeRewriteFrames());
  if (patchGlobalPromise.enableNative) {
    items.push(debugSymbolicatorIntegration.deviceContextIntegration());
    const tmpResult47 = debugSymbolicatorIntegration;
    items.push(debugSymbolicatorIntegration.modulesLoaderIntegration());
    let enableLogs = patchGlobalPromise.enableLogs;
    if (enableLogs) {
      enableLogs = "native" !== patchGlobalPromise.logsOrigin;
    }
    if (enableLogs) {
      items.push(debugSymbolicatorIntegration.logEnricherIntegration());
      const tmpResult49 = debugSymbolicatorIntegration;
      items.push(feedbackAsyncIntegration.consoleLoggingIntegration());
      const tmpResult50 = feedbackAsyncIntegration;
    }
    if (patchGlobalPromise.attachScreenshot) {
      items.push(debugSymbolicatorIntegration.screenshotIntegration());
      const tmpResult51 = debugSymbolicatorIntegration;
    }
    if (patchGlobalPromise.attachViewHierarchy) {
      items.push(debugSymbolicatorIntegration.viewHierarchyIntegration());
      const tmpResult52 = debugSymbolicatorIntegration;
    }
    if (typeof patchGlobalPromise.profilesSampleRate === "number") {
      items.push(debugSymbolicatorIntegration.hermesProfilingIntegration());
      const tmpResult53 = debugSymbolicatorIntegration;
    }
    const tmpResult48 = debugSymbolicatorIntegration;
  }
  const tracesSampleRate = patchGlobalPromise.tracesSampleRate;
  let tmp26 = typeof tracesSampleRate === "number";
  if (typeof tracesSampleRate !== "number") {
    tmp26 = typeof patchGlobalPromise.tracesSampler === "function";
  }
  let enableNative = tmp26;
  if (tmp26) {
    enableNative = patchGlobalPromise.enableAppStartTracking;
  }
  if (enableNative) {
    enableNative = patchGlobalPromise.enableNative;
  }
  if (enableNative) {
    items.push(debugSymbolicatorIntegration.appStartIntegration());
    const tmpResult54 = debugSymbolicatorIntegration;
  }
  const tmpResult46 = debugSymbolicatorIntegration;
  let enableNative2 = tmp26;
  if (tmp26) {
    enableNative2 = patchGlobalPromise.enableNativeFramesTracking;
  }
  if (enableNative2) {
    enableNative2 = patchGlobalPromise.enableNative;
  }
  const nativeFramesIntegrations = debugSymbolicatorIntegration.createNativeFramesIntegrations(enableNative2);
  if (nativeFramesIntegrations) {
    items.push(nativeFramesIntegrations);
  }
  let enableStallTracking = tmp26;
  if (tmp26) {
    enableStallTracking = patchGlobalPromise.enableStallTracking;
  }
  if (enableStallTracking) {
    items.push(debugSymbolicatorIntegration.stallTrackingIntegration());
    const tmpResult56 = debugSymbolicatorIntegration;
  }
  let enableUserInteractionTracing = tmp26;
  if (tmp26) {
    enableUserInteractionTracing = patchGlobalPromise.enableUserInteractionTracing;
  }
  if (enableUserInteractionTracing) {
    items.push(debugSymbolicatorIntegration.userInteractionIntegration());
    const tmpResult57 = debugSymbolicatorIntegration;
  }
  let enableAutoPerformanceTracing = tmp26;
  if (tmp26) {
    enableAutoPerformanceTracing = patchGlobalPromise.enableAutoPerformanceTracing;
  }
  if (enableAutoPerformanceTracing) {
    items.push(debugSymbolicatorIntegration.appRegistryIntegration());
    const tmpResult58 = debugSymbolicatorIntegration;
    items.push(reactNativeTracingIntegration.reactNativeTracingIntegration());
    const tmpResult59 = reactNativeTracingIntegration;
  }
  if (tmp26) {
    items.push(debugSymbolicatorIntegration.timeToDisplayIntegration());
    const tmpResult60 = debugSymbolicatorIntegration;
  }
  if (patchGlobalPromise.enableCaptureFailedRequests) {
    items.push(debugSymbolicatorIntegration.httpClientIntegration());
    const tmpResult61 = debugSymbolicatorIntegration;
  }
  const tmpResult55 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.expoContextIntegration());
  if (patchGlobalPromise.spotlight) {
    let spotlight;
    if (typeof patchGlobalPromise.spotlight === "string") {
      spotlight = patchGlobalPromise.spotlight;
    }
    const obj4 = { sidecarUrl: spotlight };
    items.push(debugSymbolicatorIntegration.spotlightIntegration(obj4));
    const tmpResult63 = debugSymbolicatorIntegration;
  }
  const replaysOnErrorSampleRate = patchGlobalPromise.replaysOnErrorSampleRate;
  let notWebResult1 = typeof replaysOnErrorSampleRate === "number";
  if (typeof replaysOnErrorSampleRate !== "number") {
    notWebResult1 = typeof patchGlobalPromise.replaysSessionSampleRate === "number";
  }
  let tmp40 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysOnErrorSampleRate === "number";
  if (!tmp40) {
    tmp40 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysSessionSampleRate === "number";
    const tmp41 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysSessionSampleRate === "number";
  }
  let tmp42 = !notWebResult1;
  if (!notWebResult1) {
    tmp42 = tmp40;
  }
  if (tmp42) {
    const _experiments = patchGlobalPromise._experiments;
    let prop;
    if (null !== _experiments) {
      if (undefined !== _experiments) {
        prop = _experiments.replaysOnErrorSampleRate;
      }
    }
    patchGlobalPromise.replaysOnErrorSampleRate = prop;
    const _experiments2 = patchGlobalPromise._experiments;
    let prop1;
    if (null !== _experiments2) {
      if (undefined !== _experiments2) {
        prop1 = _experiments2.replaysSessionSampleRate;
      }
    }
    patchGlobalPromise.replaysSessionSampleRate = prop1;
  }
  if (!notWebResult1) {
    notWebResult1 = tmp40;
  }
  if (notWebResult1) {
    notWebResult1 = _mod867.notWeb();
    const tmpResult64 = _mod867;
  }
  if (notWebResult1) {
    items.push(debugSymbolicatorIntegration.mobileReplayIntegration());
    const tmpResult65 = debugSymbolicatorIntegration;
  }
  const tmpResult62 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.primitiveTagIntegration());
  return items;
};