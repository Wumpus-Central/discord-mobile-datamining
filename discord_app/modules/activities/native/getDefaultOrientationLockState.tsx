// === Module 9168: getDefaultOrientationLockState ===

// Module 9168 (getDefaultOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 584 */;
import useWindowDimensions from "useWindowDimensions" /* 1484 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 4746 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/activities/native/getDefaultOrientationLockState.tsx");

export const getIsTabletActivitySurface = function getIsTabletActivitySurface() {
  const obj = useWindowDimensions;
  size = obj.getWindowDimensions({ ignoreKeyboard: true });
  const bound = Math.min(size.width, size.height);
  return bound > useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE;
};
export const setOrientationLockState = function setOrientationLockState(embeddedActivityConfig, arg1) {
  let tmp = arg1;
  if (arg1 == null) {
    let tmp7;
    if (null != embeddedActivityConfig) {
      let default_orientation_lock_state;
      const obj = useWindowDimensions;
      size = obj.getWindowDimensions({ ignoreKeyboard: true });
      const _Math = Math;
      const bound = Math.min(size.width, size.height);
      if (bound > useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
        const embeddedActivityConfig2 = embeddedActivityConfig.embeddedActivityConfig;
        let prop;
        if (embeddedActivityConfig2 != null) {
          prop = embeddedActivityConfig2.tablet_default_orientation_lock_state;
        }
        default_orientation_lock_state = prop;
      } else {
        embeddedActivityConfig = embeddedActivityConfig.embeddedActivityConfig;
        if (embeddedActivityConfig != null) {
          default_orientation_lock_state = embeddedActivityConfig.default_orientation_lock_state;
        }
      }
      tmp7 = default_orientation_lock_state;
    }
    tmp = tmp7;
  }
  if (null != tmp) {
    const obj3 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: embeddedActivityConfig.id, lockState: tmp };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
};
export const getDefaultOrientationLockState = function getDefaultOrientationLockState(application) {
  if (null != application) {
    let default_orientation_lock_state;
    const obj = useWindowDimensions;
    size = obj.getWindowDimensions({ ignoreKeyboard: true });
    const _Math = Math;
    const bound = Math.min(size.width, size.height);
    if (bound > useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
      const embeddedActivityConfig2 = application.embeddedActivityConfig;
      let prop;
      if (embeddedActivityConfig2 != null) {
        prop = embeddedActivityConfig2.tablet_default_orientation_lock_state;
      }
      default_orientation_lock_state = prop;
    } else {
      const embeddedActivityConfig = application.embeddedActivityConfig;
      if (embeddedActivityConfig != null) {
        default_orientation_lock_state = embeddedActivityConfig.default_orientation_lock_state;
      }
    }
    return default_orientation_lock_state;
  }
};