// discord_app/modules/activities/getURLForApplication.tsx
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import TestModeStore from "../../stores/game_store/TestModeStore.tsx";
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/getURLForApplication.tsx");

export default function getURLForApplication(arg0) {
  const state = DeveloperActivityShelfStore.getState();
  let useActivityUrlOverride = state.useActivityUrlOverride;
  if (useActivityUrlOverride) {
    useActivityUrlOverride = null != state.activityUrlOverride;
  }
  if (useActivityUrlOverride) {
    useActivityUrlOverride = "" !== state.activityUrlOverride;
  }
  if (useActivityUrlOverride) {
    let activityUrlOverride = DeveloperActivityShelfStore.getState().activityUrlOverride;
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
}
export function getNonTestModeUrlForApplication(arg0) {
  if (null == ACTIVITY_APPLICATION_HOST) {
    return null;
  } else if (ACTIVITY_APPLICATION_HOST.startsWith("//")) {
    const _URL = URL;
    const _window = window;
    const _window2 = window;
    const _HermesInternal2 = HermesInternal;
    const uRL = new URL(ACTIVITY_APPLICATION_HOST, "" + window.location.protocol + "//" + window.location.host);
    const _HermesInternal3 = HermesInternal;
    uRL.hostname = "" + arg0 + "." + uRL.hostname;
    return uRL.origin;
  } else {
    const _HermesInternal = HermesInternal;
    return "https://" + arg0 + "." + ACTIVITY_APPLICATION_HOST;
  }
}
export function getApplicationRouterOrigin(embeddedAppUrl) {
  const toURLSafeResult = URLUtilsDefault.toURLSafe(embeddedAppUrl);
  if (null == toURLSafeResult) {
    return null;
  } else {
    const first = _slicedToArray(_slicedToArray(toURLSafeResult.hostname.split(".", 1), 1)[0].split("--", 1), 1)[0];
    const _window3 = window;
    let origin = null;
    if (null != ACTIVITY_APPLICATION_HOST) {
      if (ACTIVITY_APPLICATION_HOST.startsWith("//")) {
        const _URL = URL;
        const _window = window;
        const _window2 = window;
        const _HermesInternal2 = HermesInternal;
        const uRL = new URL(ACTIVITY_APPLICATION_HOST, "" + window.location.protocol + "//" + window.location.host);
        const _HermesInternal3 = HermesInternal;
        uRL.hostname = "" + first + "." + uRL.hostname;
        origin = uRL.origin;
      } else {
        const _HermesInternal = HermesInternal;
        origin = "https://" + first + "." + ACTIVITY_APPLICATION_HOST;
      }
    }
    let origin2 = null;
    if (null != origin) {
      const toURLSafeResult1 = URLUtilsDefault.toURLSafe(origin);
      let origin1;
      if (toURLSafeResult1 != null) {
        origin1 = toURLSafeResult1.origin;
      }
      origin2 = null;
      if (origin1 === toURLSafeResult.origin) {
        origin2 = toURLSafeResult.origin;
      }
      const tmpResult = URLUtilsDefault;
    }
    return origin2;
  }
}
export function isUsingDevShelfActivityUrlOverride() {
  const state = DeveloperActivityShelfStore.getState();
  let useActivityUrlOverride = state.useActivityUrlOverride;
  if (useActivityUrlOverride) {
    useActivityUrlOverride = null != state.activityUrlOverride;
  }
  if (useActivityUrlOverride) {
    useActivityUrlOverride = "" !== state.activityUrlOverride;
  }
  return useActivityUrlOverride;
}
