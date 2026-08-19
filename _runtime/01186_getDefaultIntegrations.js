// _runtime/01186_getDefaultIntegrations.js
import debugSymbolicatorIntegration from "00811_debugSymbolicatorIntegration.js";
import isHermesEnabled from "01002_isHermesEnabled.js";
import feedbackAsyncIntegration from "01024_feedbackAsyncIntegration.js";
import reactNativeTracingIntegration from "01187_reactNativeTracingIntegration.js";

require = arg1;
const dependencyMap = arg6;
arg5.getDefaultIntegrations = function getDefaultIntegrations(patchGlobalPromise) {
  const items = [];
  let obj = isHermesEnabled;
  const push = items.push;
  const obj2 = debugSymbolicatorIntegration;
  if (notWebResult) {
    obj = { patchGlobalPromise: null };
    obj[0] = patchGlobalPromise.patchGlobalPromise;
    push(obj2.reactNativeErrorHandlersIntegration(obj));
    let tmpResult = debugSymbolicatorIntegration;
    items.push(tmpResult.nativeLinkedErrorsIntegration());
  } else {
    push(obj2.browserApiErrorsIntegration());
    tmpResult = debugSymbolicatorIntegration;
    items.push(tmpResult.browserGlobalHandlersIntegration());
    items.push(debugSymbolicatorIntegration.browserLinkedErrorsIntegration());
    if (patchGlobalPromise.enableAutoSessionTracking) {
      items.push(feedbackAsyncIntegration.browserSessionIntegration());
      const tmpResult2 = feedbackAsyncIntegration;
    }
    const tmpResult1 = debugSymbolicatorIntegration;
  }
  notWebResult = obj.notWeb();
  items.push(debugSymbolicatorIntegration.inboundFiltersIntegration());
  const tmpResult3 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.functionToStringIntegration());
  const tmpResult4 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.breadcrumbsIntegration());
  const tmpResult5 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.dedupeIntegration());
  const tmpResult6 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.httpContextIntegration());
  const tmpResult7 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.nativeReleaseIntegration());
  const tmpResult8 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.eventOriginIntegration());
  const tmpResult9 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.sdkInfoIntegration());
  const tmpResult10 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.reactNativeInfoIntegration());
  const tmpResult11 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.createReactNativeRewriteFrames());
  if (patchGlobalPromise.enableNative) {
    items.push(debugSymbolicatorIntegration.deviceContextIntegration());
    const tmpResult13 = debugSymbolicatorIntegration;
    items.push(debugSymbolicatorIntegration.modulesLoaderIntegration());
    let enableLogs = patchGlobalPromise.enableLogs;
    if (enableLogs) {
      enableLogs = "native" !== patchGlobalPromise.logsOrigin;
    }
    if (enableLogs) {
      items.push(debugSymbolicatorIntegration.logEnricherIntegration());
      const tmpResult15 = debugSymbolicatorIntegration;
      items.push(feedbackAsyncIntegration.consoleLoggingIntegration());
      const tmpResult16 = feedbackAsyncIntegration;
    }
    if (patchGlobalPromise.attachScreenshot) {
      items.push(debugSymbolicatorIntegration.screenshotIntegration());
      const tmpResult17 = debugSymbolicatorIntegration;
    }
    if (patchGlobalPromise.attachViewHierarchy) {
      items.push(debugSymbolicatorIntegration.viewHierarchyIntegration());
      const tmpResult18 = debugSymbolicatorIntegration;
    }
    if (typeof patchGlobalPromise.profilesSampleRate === "number") {
      items.push(debugSymbolicatorIntegration.hermesProfilingIntegration());
      const tmpResult19 = debugSymbolicatorIntegration;
    }
    const tmpResult14 = debugSymbolicatorIntegration;
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
    const tmpResult20 = debugSymbolicatorIntegration;
  }
  const tmpResult12 = debugSymbolicatorIntegration;
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
    const tmpResult22 = debugSymbolicatorIntegration;
  }
  let enableUserInteractionTracing = tmp26;
  if (tmp26) {
    enableUserInteractionTracing = patchGlobalPromise.enableUserInteractionTracing;
  }
  if (enableUserInteractionTracing) {
    items.push(debugSymbolicatorIntegration.userInteractionIntegration());
    const tmpResult23 = debugSymbolicatorIntegration;
  }
  let enableAutoPerformanceTracing = tmp26;
  if (tmp26) {
    enableAutoPerformanceTracing = patchGlobalPromise.enableAutoPerformanceTracing;
  }
  if (enableAutoPerformanceTracing) {
    items.push(debugSymbolicatorIntegration.appRegistryIntegration());
    const tmpResult24 = debugSymbolicatorIntegration;
    items.push(reactNativeTracingIntegration.reactNativeTracingIntegration());
    const tmpResult25 = reactNativeTracingIntegration;
  }
  if (tmp26) {
    items.push(debugSymbolicatorIntegration.timeToDisplayIntegration());
    const tmpResult26 = debugSymbolicatorIntegration;
  }
  if (patchGlobalPromise.enableCaptureFailedRequests) {
    items.push(debugSymbolicatorIntegration.httpClientIntegration());
    const tmpResult27 = debugSymbolicatorIntegration;
  }
  const tmpResult21 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.expoContextIntegration());
  if (patchGlobalPromise.spotlight) {
    let spotlight;
    if (typeof patchGlobalPromise.spotlight === "string") {
      spotlight = patchGlobalPromise.spotlight;
    }
    obj = { sidecarUrl: null };
    obj[0] = spotlight;
    items.push(debugSymbolicatorIntegration.spotlightIntegration(obj));
    const tmpResult29 = debugSymbolicatorIntegration;
  }
  const replaysOnErrorSampleRate = patchGlobalPromise.replaysOnErrorSampleRate;
  let notWebResult1 = typeof replaysOnErrorSampleRate === "number";
  if (typeof replaysOnErrorSampleRate !== "number") {
    notWebResult1 = typeof patchGlobalPromise.replaysSessionSampleRate === "number";
  }
  let tmp40 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysOnErrorSampleRate === "number";
  if (!tmp40) {
    tmp40 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysSessionSampleRate === "number";
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
    notWebResult1 = isHermesEnabled.notWeb();
    const tmpResult30 = isHermesEnabled;
  }
  if (notWebResult1) {
    items.push(debugSymbolicatorIntegration.mobileReplayIntegration());
    const tmpResult31 = debugSymbolicatorIntegration;
  }
  const tmpResult28 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.primitiveTagIntegration());
  return items;
};