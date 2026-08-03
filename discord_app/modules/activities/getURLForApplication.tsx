// === Module 10659: getURLForApplication ===

// Module 10659 (getURLForApplication)
import reset from "reset";
import initialize from "initialize";

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
    if (reset.inTestModeForEmbeddedApplication(arg0)) {
      activityUrlOverride = tmp4.testModeOriginURL;
    } else {
      const _window = window;
      activityUrlOverride = null;
      if (null != ACTIVITY_APPLICATION_HOST) {
        const _HermesInternal = HermesInternal;
        activityUrlOverride = "https://" + arg0 + "." + ACTIVITY_APPLICATION_HOST;
      }
    }
    tmp4 = reset;
  }
  return activityUrlOverride;
};
export const getNonTestModeUrlForApplication = function getNonTestModeUrlForApplication(arg0) {
  let combined = null;
  if (null != ACTIVITY_APPLICATION_HOST) {
    const _HermesInternal = HermesInternal;
    combined = "https://" + arg0 + "." + ACTIVITY_APPLICATION_HOST;
  }
  return combined;
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