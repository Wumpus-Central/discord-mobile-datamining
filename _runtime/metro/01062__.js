// === Module 1062: ? ===

// Module 1062
import debugSymbolicatorIntegration from "debugSymbolicatorIntegration" /* 687 */;
import _mod878 from "module_878" /* 878 */;
import feedbackAsyncIntegration from "feedbackAsyncIntegration" /* 900 */;
import reactNativeTracingIntegration from "reactNativeTracingIntegration" /* 1063 */;


export const getDefaultIntegrations = function getDefaultIntegrations(patchGlobalPromise) {
  const items = [];
  const push = items.push;
  const obj = _mod878;
  const notWebResult = obj.notWeb();
  const obj2 = debugSymbolicatorIntegration;
  if (notWebResult) {
    const obj3 = { patchGlobalPromise: patchGlobalPromise.patchGlobalPromise };
    push(obj2.reactNativeErrorHandlersIntegration(obj3));
    const push5 = items.push;
    const tmpResult = debugSymbolicatorIntegration;
    push5(tmpResult.nativeLinkedErrorsIntegration());
  } else {
    push(obj2.browserApiErrorsIntegration());
    const push2 = items.push;
    const tmpResult34 = debugSymbolicatorIntegration;
    push2(tmpResult34.browserGlobalHandlersIntegration());
    const push3 = items.push;
    const tmpResult35 = debugSymbolicatorIntegration;
    push3(tmpResult35.browserLinkedErrorsIntegration());
    if (patchGlobalPromise.enableAutoSessionTracking) {
      const push4 = items.push;
      const tmpResult36 = feedbackAsyncIntegration;
      push4(tmpResult36.browserSessionIntegration());
    }
  }
  const push6 = items.push;
  const tmpResult37 = debugSymbolicatorIntegration;
  push6(tmpResult37.inboundFiltersIntegration());
  const push7 = items.push;
  const tmpResult38 = debugSymbolicatorIntegration;
  push7(tmpResult38.functionToStringIntegration());
  const push8 = items.push;
  const tmpResult39 = debugSymbolicatorIntegration;
  push8(tmpResult39.breadcrumbsIntegration());
  const push9 = items.push;
  const tmpResult40 = debugSymbolicatorIntegration;
  push9(tmpResult40.dedupeIntegration());
  const push10 = items.push;
  const tmpResult41 = debugSymbolicatorIntegration;
  push10(tmpResult41.httpContextIntegration());
  const push11 = items.push;
  const tmpResult42 = debugSymbolicatorIntegration;
  push11(tmpResult42.nativeReleaseIntegration());
  const push12 = items.push;
  const tmpResult43 = debugSymbolicatorIntegration;
  push12(tmpResult43.eventOriginIntegration());
  const push13 = items.push;
  const tmpResult44 = debugSymbolicatorIntegration;
  push13(tmpResult44.sdkInfoIntegration());
  const push14 = items.push;
  const tmpResult45 = debugSymbolicatorIntegration;
  push14(tmpResult45.reactNativeInfoIntegration());
  const push15 = items.push;
  const tmpResult46 = debugSymbolicatorIntegration;
  push15(tmpResult46.createReactNativeRewriteFrames());
  if (patchGlobalPromise.enableNative) {
    const push16 = items.push;
    const tmpResult47 = debugSymbolicatorIntegration;
    push16(tmpResult47.deviceContextIntegration());
    const push17 = items.push;
    const tmpResult48 = debugSymbolicatorIntegration;
    push17(tmpResult48.modulesLoaderIntegration());
    const enableLogs = patchGlobalPromise.enableLogs && "native" !== patchGlobalPromise.logsOrigin;
    if (enableLogs) {
      const push18 = items.push;
      const tmpResult49 = debugSymbolicatorIntegration;
      push18(tmpResult49.logEnricherIntegration());
      const push19 = items.push;
      const tmpResult50 = feedbackAsyncIntegration;
      push19(tmpResult50.consoleLoggingIntegration());
    }
    if (patchGlobalPromise.attachScreenshot) {
      const push20 = items.push;
      const tmpResult51 = debugSymbolicatorIntegration;
      push20(tmpResult51.screenshotIntegration());
    }
    if (patchGlobalPromise.attachViewHierarchy) {
      const push21 = items.push;
      const tmpResult52 = debugSymbolicatorIntegration;
      push21(tmpResult52.viewHierarchyIntegration());
    }
    if (typeof patchGlobalPromise.profilesSampleRate === "number") {
      const push33 = items.push;
      const tmpResult53 = debugSymbolicatorIntegration;
      push33(tmpResult53.hermesProfilingIntegration());
    }
  }
  const tmp27 = (typeof patchGlobalPromise.tracesSampleRate === "number" || typeof patchGlobalPromise.tracesSampler === "function") && patchGlobalPromise.enableAppStartTracking && patchGlobalPromise.enableNative;
  if (tmp27) {
    const push22 = items.push;
    const tmpResult54 = debugSymbolicatorIntegration;
    push22(tmpResult54.appStartIntegration());
  }
  let enableNative = tmp26;
  const createNativeFramesIntegrations = debugSymbolicatorIntegration.createNativeFramesIntegrations;
  debugSymbolicatorIntegration;
  if (typeof patchGlobalPromise.tracesSampleRate === "number" || typeof patchGlobalPromise.tracesSampler === "function") {
    enableNative = patchGlobalPromise.enableNativeFramesTracking;
  }
  if (enableNative) {
    enableNative = patchGlobalPromise.enableNative;
  }
  const nativeFramesIntegrations = createNativeFramesIntegrations(enableNative);
  if (nativeFramesIntegrations) {
    items.push(nativeFramesIntegrations);
  }
  const tmp32 = (typeof patchGlobalPromise.tracesSampleRate === "number" || typeof patchGlobalPromise.tracesSampler === "function") && patchGlobalPromise.enableStallTracking;
  if (tmp32) {
    const push23 = items.push;
    const tmpResult56 = debugSymbolicatorIntegration;
    push23(tmpResult56.stallTrackingIntegration());
  }
  const tmp34 = (typeof patchGlobalPromise.tracesSampleRate === "number" || typeof patchGlobalPromise.tracesSampler === "function") && patchGlobalPromise.enableUserInteractionTracing;
  if (tmp34) {
    const push24 = items.push;
    const tmpResult57 = debugSymbolicatorIntegration;
    push24(tmpResult57.userInteractionIntegration());
  }
  const tmp36 = (typeof patchGlobalPromise.tracesSampleRate === "number" || typeof patchGlobalPromise.tracesSampler === "function") && patchGlobalPromise.enableAutoPerformanceTracing;
  if (tmp36) {
    const push25 = items.push;
    const tmpResult58 = debugSymbolicatorIntegration;
    push25(tmpResult58.appRegistryIntegration());
    const push26 = items.push;
    const tmpResult59 = reactNativeTracingIntegration;
    push26(tmpResult59.reactNativeTracingIntegration());
  }
  if (typeof patchGlobalPromise.tracesSampleRate === "number" || typeof patchGlobalPromise.tracesSampler === "function") {
    const push27 = items.push;
    const tmpResult60 = debugSymbolicatorIntegration;
    push27(tmpResult60.timeToDisplayIntegration());
  }
  if (patchGlobalPromise.enableCaptureFailedRequests) {
    const push28 = items.push;
    const tmpResult61 = debugSymbolicatorIntegration;
    push28(tmpResult61.httpClientIntegration());
  }
  const push29 = items.push;
  const tmpResult62 = debugSymbolicatorIntegration;
  push29(tmpResult62.expoContextIntegration());
  if (patchGlobalPromise.spotlight) {
    let spotlight;
    if (typeof patchGlobalPromise.spotlight === "string") {
      spotlight = patchGlobalPromise.spotlight;
    }
    const push30 = items.push;
    const obj4 = { sidecarUrl: spotlight };
    const tmpResult63 = debugSymbolicatorIntegration;
    push30(tmpResult63.spotlightIntegration(obj4));
  }
  let notWebResult1 = typeof patchGlobalPromise.replaysOnErrorSampleRate === "number" || typeof patchGlobalPromise.replaysSessionSampleRate === "number";
  let tmp45 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysOnErrorSampleRate === "number";
  if (!tmp45) {
    tmp45 = patchGlobalPromise._experiments && typeof patchGlobalPromise._experiments.replaysSessionSampleRate === "number";
  }
  const tmp47 = !notWebResult1 && tmp45;
  if (tmp47) {
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
    notWebResult1 = tmp45;
  }
  if (notWebResult1) {
    const tmpResult64 = _mod878;
    notWebResult1 = tmpResult64.notWeb();
  }
  if (notWebResult1) {
    const push31 = items.push;
    const tmpResult65 = debugSymbolicatorIntegration;
    push31(tmpResult65.mobileReplayIntegration());
  }
  const push32 = items.push;
  const tmpResult66 = debugSymbolicatorIntegration;
  push32(tmpResult66.primitiveTagIntegration());
  return items;
};