// === Module 10679: getURLForApplication ===

// Module 10679 (getURLForApplication)
import closure_0 from "reset" /* 7734 */;
import closure_1 from "initialize" /* 7732 */;

const result = require("set").fileFinishedImporting("modules/activities/getURLForApplication.tsx");

export default function getURLForApplication(arg0) {
  const state = store.getState();
  let useActivityUrlOverride = state.useActivityUrlOverride;
  if (useActivityUrlOverride) {
    useActivityUrlOverride = null != state.activityUrlOverride;
  }
  if (useActivityUrlOverride) {
    useActivityUrlOverride = "" !== state.activityUrlOverride;
  }
  if (useActivityUrlOverride) {
    let activityUrlOverride = store.getState().activityUrlOverride;
  } else {
    if (closure_0.inTestModeForEmbeddedApplication(arg0)) {
      activityUrlOverride = tmp4.testModeOriginURL;
    } else {
      const _window = window;
      activityUrlOverride = null;
      if (null != ACTIVITY_APPLICATION_HOST) {
        if (ACTIVITY_APPLICATION_HOST.startsWith("//")) {
          const _URL = URL;
          const _window2 = window;
          const uRL = new URL(ACTIVITY_APPLICATION_HOST, window.location.href);
          const _HermesInternal2 = HermesInternal;
          uRL.hostname = "" + arg0 + "." + uRL.hostname;
          activityUrlOverride = uRL.origin;
        } else {
          const _HermesInternal = HermesInternal;
          activityUrlOverride = "https://" + arg0 + "." + ACTIVITY_APPLICATION_HOST;
        }
      }
    }
    tmp4 = closure_0;
  }
  return activityUrlOverride;
};
export const getNonTestModeUrlForApplication = function getNonTestModeUrlForApplication(arg0) {
  if (null == ACTIVITY_APPLICATION_HOST) {
    return null;
  } else if (ACTIVITY_APPLICATION_HOST.startsWith("//")) {
    const _URL = URL;
    const _window = window;
    const uRL = new URL(ACTIVITY_APPLICATION_HOST, window.location.href);
    const _HermesInternal2 = HermesInternal;
    uRL.hostname = "" + arg0 + "." + uRL.hostname;
    return uRL.origin;
  } else {
    const _HermesInternal = HermesInternal;
    return "https://" + arg0 + "." + ACTIVITY_APPLICATION_HOST;
  }
};
export const isUsingDevShelfActivityUrlOverride = function isUsingDevShelfActivityUrlOverride() {
  const state = store.getState();
  let useActivityUrlOverride = state.useActivityUrlOverride;
  if (useActivityUrlOverride) {
    useActivityUrlOverride = null != state.activityUrlOverride;
  }
  if (useActivityUrlOverride) {
    useActivityUrlOverride = "" !== state.activityUrlOverride;
  }
  return useActivityUrlOverride;
};