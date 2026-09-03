// === Module 9620: getIsTabletActivitySurface ===

// Module 9620 (getIsTabletActivitySurface)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4457 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;

let closure_2 = DCDDeviceManager.isIpadOS();
let closure_3 = isMetaQuest.isMetaQuest();
const result = set.fileFinishedImporting("modules/activities/native/getDefaultOrientationLockState.tsx");

export function getIsTabletActivitySurface() {
  let tmp = closure_2;
  if (!closure_2) {
    tmp = closure_3;
  }
  return tmp;
}
export const setOrientationLockState = function setOrientationLockState(embeddedActivityConfig) {
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
    let obj = dispatcherDefault;
    obj = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: null, lockState: null };
    obj[1] = embeddedActivityConfig.id;
    obj[2] = tmp;
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