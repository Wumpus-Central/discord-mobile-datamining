// === Module 9634: getDefaultOrientationLockState ===

// Module 9634 (getDefaultOrientationLockState)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DeviceUtils from "DeviceUtils" /* 4539 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import size from "module_2" /* 2 */;

let closure_2 = DeviceUtils.isIpadOS();
let closure_3 = MetaQuestUtils.isMetaQuest();
const result = size.fileFinishedImporting("modules/activities/native/getDefaultOrientationLockState.tsx");

export function getIsTabletActivitySurface() {
  let tmp = closure_2;
  if (!closure_2) {
    tmp = closure_3;
  }
  return tmp;
}
export const setOrientationLockState = function setOrientationLockState(embeddedActivityConfig, arg1) {
  if (arg1 == null) {
    if (null != embeddedActivityConfig) {
      let tmp2 = closure_2;
      if (!closure_2) {
        tmp2 = closure_3;
      }
      embeddedActivityConfig = embeddedActivityConfig.embeddedActivityConfig;
      if (tmp2) {
        let prop;
        if (!tmp3) {
          prop = embeddedActivityConfig.tablet_default_orientation_lock_state;
        }
        let default_orientation_lock_state = prop;
      } else if (!tmp3) {
        default_orientation_lock_state = embeddedActivityConfig.default_orientation_lock_state;
      }
    }
  }
  if (null != arg1) {
    const obj = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: embeddedActivityConfig.id, lockState: tmp };
    obj.dispatch(obj);
  }
};
export const getDefaultOrientationLockState = function getDefaultOrientationLockState(application) {
  if (null != application) {
    let tmp = closure_2;
    if (!closure_2) {
      tmp = closure_3;
    }
    const embeddedActivityConfig = application.embeddedActivityConfig;
    if (tmp) {
      let prop;
      if (!tmp2) {
        prop = embeddedActivityConfig.tablet_default_orientation_lock_state;
      }
      let default_orientation_lock_state = prop;
    } else if (!tmp2) {
      default_orientation_lock_state = embeddedActivityConfig.default_orientation_lock_state;
    }
    return default_orientation_lock_state;
  }
};