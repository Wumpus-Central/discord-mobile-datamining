import { dispatcher } from "../../../Dispatcher.tsx";
// discord_app/modules/activities/native/getDefaultOrientationLockState.tsx
import DCDDeviceManager from "DCDDeviceManager";
import isMetaQuest from "isMetaQuest";

DCDDeviceManager = DCDDeviceManager.isIpadOS();
isMetaQuest = isMetaQuest.isMetaQuest();
const result = require("dispatcher").fileFinishedImporting("modules/activities/native/getDefaultOrientationLockState.tsx");

export function getIsTabletActivitySurface() {
  let tmp = DCDDeviceManager;
  if (!DCDDeviceManager) {
    tmp = isMetaQuest;
  }
  return tmp;
}
export const setOrientationLockState = function setOrientationLockState(embeddedActivityConfig) {
  if (arg1 == null) {
    if (null != embeddedActivityConfig) {
      let tmp2 = DCDDeviceManager;
      if (!DCDDeviceManager) {
        tmp2 = isMetaQuest;
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
    let obj = dispatcher;
    obj = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId: null, lockState: null };
    obj[1] = embeddedActivityConfig.id;
    obj[2] = tmp;
    obj.dispatch(obj);
  }
};
export const getDefaultOrientationLockState = function getDefaultOrientationLockState(application) {
  if (null != application) {
    let tmp = DCDDeviceManager;
    if (!DCDDeviceManager) {
      tmp = isMetaQuest;
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