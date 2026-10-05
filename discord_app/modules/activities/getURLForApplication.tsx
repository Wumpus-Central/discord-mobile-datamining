// === Module 8706: getURLForApplication ===

// Module 8706 (getURLForApplication)
import TestModeStore from "TestModeStore" /* 8515 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8513 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/getURLForApplication.tsx");

export default function getURLForApplication(arg0) {
  let activityUrlOverride;
  const state = DeveloperActivityShelfStore.getState();
  const useActivityUrlOverride = state.useActivityUrlOverride && null != state.activityUrlOverride && "" !== state.activityUrlOverride;
  if (useActivityUrlOverride) {
    activityUrlOverride = DeveloperActivityShelfStore.getState().activityUrlOverride;
  } else if (TestModeStore.inTestModeForEmbeddedApplication(arg0)) {
    activityUrlOverride = TestModeStore.testModeOriginURL;
  } else {
    const _window = window;
    activityUrlOverride = null;
    if (null != ACTIVITY_APPLICATION_HOST) {
      if (ACTIVITY_APPLICATION_HOST.startsWith("//")) {
        const _URL = URL;
        const _window2 = window;
        const _window3 = window;
        const _HermesInternal2 = HermesInternal;
        const self = this;
        const self2 = this;
        const uRL = new URL(ACTIVITY_APPLICATION_HOST, "" + window.location.protocol + "//" + window.location.host);
        const _HermesInternal3 = HermesInternal;
        uRL.hostname = "" + arg0 + "." + uRL.hostname;
        activityUrlOverride = uRL.origin;
      } else {
        const _HermesInternal = HermesInternal;
        activityUrlOverride = "https://" + arg0 + "." + ACTIVITY_APPLICATION_HOST;
      }
    }
  }
  return activityUrlOverride;
};
export const getNonTestModeUrlForApplication = function getNonTestModeUrlForApplication(parseCsp) {
  if (null == ACTIVITY_APPLICATION_HOST) {
    return null;
  } else if (ACTIVITY_APPLICATION_HOST.startsWith("//")) {
    const _URL = URL;
    const _window = window;
    const _window2 = window;
    const _HermesInternal2 = HermesInternal;
    const self = this;
    const self2 = this;
    const uRL = new URL(ACTIVITY_APPLICATION_HOST, "" + window.location.protocol + "//" + window.location.host);
    const _HermesInternal3 = HermesInternal;
    uRL.hostname = "" + parseCsp + "." + uRL.hostname;
    return uRL.origin;
  } else {
    const _HermesInternal = HermesInternal;
    return "https://" + parseCsp + "." + ACTIVITY_APPLICATION_HOST;
  }
};
export const isUsingDevShelfActivityUrlOverride = function isUsingDevShelfActivityUrlOverride() {
  const state = DeveloperActivityShelfStore.getState();
  const useActivityUrlOverride = state.useActivityUrlOverride && null != state.activityUrlOverride && "" !== state.activityUrlOverride;
  return useActivityUrlOverride;
};