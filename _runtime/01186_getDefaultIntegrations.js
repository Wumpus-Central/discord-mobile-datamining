// _runtime/01186_getDefaultIntegrations.js
import debugSymbolicatorIntegration from "00811_debugSymbolicatorIntegration.js";
import isHermesEnabled from "01002_isHermesEnabled.js";

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
    let tmpResult = tmp(811);
    items.push(tmpResult.nativeLinkedErrorsIntegration());
  } else {
    push(obj2.browserApiErrorsIntegration());
    tmpResult = tmp(811);
    items.push(tmpResult.browserGlobalHandlersIntegration());
    items.push(tmp(811).browserLinkedErrorsIntegration());
    if (patchGlobalPromise.enableAutoSessionTracking) {
      items.push(tmp(1024).browserSessionIntegration());
      const tmpResult2 = tmp(1024);
    }
    const tmpResult1 = tmp(811);
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
    items.push(tmp(811).deviceContextIntegration());
    const tmpResult13 = tmp(811);
    items.push(tmp(811).modulesLoaderIntegration());
    let enableLogs = patchGlobalPromise.enableLogs;
    if (enableLogs) {
      enableLogs = "native" !== patchGlobalPromise.logsOrigin;
    }
    if (enableLogs) {
      items.push(tmp(811).logEnricherIntegration());
      const tmpResult15 = tmp(811);
      items.push(tmp(1024).consoleLoggingIntegration());
      const tmpResult16 = tmp(1024);
    }
    if (patchGlobalPromise.attachScreenshot) {
      items.push(tmp(811).screenshotIntegration());
      const tmpResult17 = tmp(811);
    }
    if (patchGlobalPromise.attachViewHierarchy) {
      items.push(tmp(811).viewHierarchyIntegration());
      const tmpResult18 = tmp(811);
    }
    if (typeof patchGlobalPromise.profilesSampleRate === "number") {
      items.push(tmp(811).hermesProfilingIntegration());
      const tmpResult19 = tmp(811);
    }
    const tmpResult14 = tmp(811);
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
    items.push(tmp(811).appStartIntegration());
    const tmpResult20 = tmp(811);
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
    items.push(tmp(811).stallTrackingIntegration());
    const tmpResult22 = tmp(811);
  }
  let enableUserInteractionTracing = tmp26;
  if (tmp26) {
    enableUserInteractionTracing = patchGlobalPromise.enableUserInteractionTracing;
  }
  if (enableUserInteractionTracing) {
    items.push(tmp(811).userInteractionIntegration());
    const tmpResult23 = tmp(811);
  }
  let enableAutoPerformanceTracing = tmp26;
  if (tmp26) {
    enableAutoPerformanceTracing = patchGlobalPromise.enableAutoPerformanceTracing;
  }
  if (enableAutoPerformanceTracing) {
    items.push(tmp(811).appRegistryIntegration());
    const tmpResult24 = tmp(811);
    items.push(tmp(1187).reactNativeTracingIntegration());
    const tmpResult25 = tmp(1187);
  }
  if (tmp26) {
    items.push(tmp(811).timeToDisplayIntegration());
    const tmpResult26 = tmp(811);
  }
  if (patchGlobalPromise.enableCaptureFailedRequests) {
    items.push(tmp(811).httpClientIntegration());
    const tmpResult27 = tmp(811);
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
    items.push(tmp(811).spotlightIntegration(obj));
    const tmpResult29 = tmp(811);
  }
  const replaysOnErrorSampleRate = patchGlobalPromise.replaysOnErrorSampleRate;
  let notWebResult1 = typeof replaysOnErrorSampleRate === "number";
  if (typeof replaysOnErrorSampleRate !== "number") {
    notWebResult1 = typeof patchGlobalPromise.replaysSessionSampleRate === "number";
  }
  let tmp40 =
    patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysOnErrorSampleRate === "number";
  if (!tmp40) {
    tmp40 =
      patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysSessionSampleRate === "number";
    const tmp41 =
      patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysSessionSampleRate === "number";
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
    notWebResult1 = tmp(1002).notWeb();
    const tmpResult30 = tmp(1002);
  }
  if (notWebResult1) {
    items.push(tmp(811).mobileReplayIntegration());
    const tmpResult31 = tmp(811);
  }
  const tmpResult28 = debugSymbolicatorIntegration;
  items.push(debugSymbolicatorIntegration.primitiveTagIntegration());
  return items;
};
