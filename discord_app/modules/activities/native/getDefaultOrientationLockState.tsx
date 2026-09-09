// discord_app/modules/activities/native/getDefaultOrientationLockState.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import useWindowSizeClassifier from "../../screen/native/useWindowSizeClassifier.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/native/getDefaultOrientationLockState.tsx");

export const getIsTabletActivitySurface = function getIsTabletActivitySurface() {
  const size = useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true });
  const bound = Math.min(size.width, size.height);
  return bound > useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE;
};
export const setOrientationLockState = function setOrientationLockState(embeddedActivityConfig, arg1) {
  if (arg1 == null) {
    if (null != embeddedActivityConfig) {
      let obj = useWindowDimensions;
      const size = obj.getWindowDimensions({ ignoreKeyboard: true });
      const _Math = Math;
      const bound = Math.min(size.width, size.height);
      if (bound > useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
        const embeddedActivityConfig2 = embeddedActivityConfig.embeddedActivityConfig;
        let prop;
        if (embeddedActivityConfig2 != null) {
          prop = embeddedActivityConfig2.tablet_default_orientation_lock_state;
        }
        let default_orientation_lock_state = prop;
      } else {
        embeddedActivityConfig = embeddedActivityConfig.embeddedActivityConfig;
        if (embeddedActivityConfig != null) {
          default_orientation_lock_state = embeddedActivityConfig.default_orientation_lock_state;
        }
      }
    }
  }
  if (null != arg1) {
    obj = {
      type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
      applicationId: embeddedActivityConfig.id,
      lockState: tmp,
    };
    DispatcherDefault.dispatch(obj);
  }
};
export const getDefaultOrientationLockState = function getDefaultOrientationLockState(application) {
  if (null != application) {
    const size = useWindowDimensions.getWindowDimensions({ ignoreKeyboard: true });
    const _Math = Math;
    const bound = Math.min(size.width, size.height);
    if (bound > useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
      const embeddedActivityConfig2 = application.embeddedActivityConfig;
      let prop;
      if (embeddedActivityConfig2 != null) {
        prop = embeddedActivityConfig2.tablet_default_orientation_lock_state;
      }
      let default_orientation_lock_state = prop;
    } else {
      const embeddedActivityConfig = application.embeddedActivityConfig;
      if (embeddedActivityConfig != null) {
        default_orientation_lock_state = embeddedActivityConfig.default_orientation_lock_state;
      }
    }
    return default_orientation_lock_state;
  }
};
