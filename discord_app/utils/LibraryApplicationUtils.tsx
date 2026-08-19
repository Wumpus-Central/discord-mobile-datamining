// === Module 4520: getComboId ===

// Module 4520 (getComboId)
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import addSku from "addSku" /* 4521 */;
import ME from "ME" /* 676 */;

require = fn;
({ LibraryApplicationFlags: c5, LocalDispatchApplicationStates: closure_6, StatusTypes: error } = ME);
const result = require("obj132").fileFinishedImporting("utils/LibraryApplicationUtils.tsx");

export const getComboId = function getComboId(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
};
export const convertComboId = function convertComboId(str) {
  const tmp = callback(str.split(":"), 2);
  return { applicationId: tmp[0], branchId: tmp[1] };
};
export const shouldShareApplicationActivity = function shouldShareApplicationActivity(application_id, closure_7) {
  const ShowCurrentGame = explicitContentFromProto.ShowCurrentGame;
  if (ShowCurrentGame.getSetting()) {
    const StatusSetting = explicitContentFromProto.StatusSetting;
    if (StatusSetting.getSetting() !== constants3.INVISIBLE) {
      activeLibraryApplication = activeLibraryApplication.getActiveLibraryApplication(application_id);
      let tmp7 = null == activeLibraryApplication;
      if (!tmp7) {
        tmp7 = !activeLibraryApplication.hasFlag(constants.PRIVATE);
      }
      return tmp7;
    }
  }
  return false;
};
export const calculateProgressPercentage = function calculateProgressPercentage(arg0, arg1) {
  let num = 100;
  if (0 !== arg1) {
    num = arg0 / arg1 * 100;
  }
  return num;
};
export const shouldShowGameInLibrary = function shouldShowGameInLibrary(arg0, hasFlag, enabled) {
  let tmp = null != hasFlag;
  if (tmp) {
    enabled = enabled.enabled;
    let tmp3 = !enabled;
    if (enabled) {
      tmp3 = !hasFlag.hasFlag(constants.PRIVATE);
    }
    if (tmp3) {
      tmp3 = !hasFlag.isHidden();
    }
    tmp = tmp3;
  }
  return tmp;
};
export const convertToTransitionState = function convertToTransitionState(type) {
  let tmp = null;
  if (null != type) {
    if (type.type !== constants2.INSTALLING) {
      if (type.type !== constants2.UPDATING) {
        let tmp3 = null;
      }
      tmp = tmp3;
    }
    tmp3 = type;
  }
  return tmp;
};
export const getCombinedProgress = function getCombinedProgress(arr) {
  return arr.reduce((acc, item, index) => {
    let tmp = null;
    if (null != item) {
      if (item.type !== constants.INSTALLING) {
        if (item.type !== constants.UPDATING) {
          let tmp3 = null;
        }
        tmp = tmp3;
      }
      tmp3 = item;
    }
    let tmp4 = acc;
    if (null != tmp) {
      tmp4 = acc;
      if (item.type !== constants.UP_TO_DATE) {
        const obj = { total: null, progress: null };
        const _Number = Number;
        obj[0] = acc.total + Number(tmp.total);
        const _Number2 = Number;
        obj[1] = acc.progress + Number(tmp.progress);
        tmp4 = obj;
      }
    }
    return tmp4;
  }, { total: 0, progress: 0 });
};
export const isUserEntitledToLibraryApplication = function isUserEntitledToLibraryApplication(closure_10) {
  let isEntitledResult = closure_10.isDiscordApplication();
  if (isEntitledResult) {
    isEntitledResult = closure_10.isEntitled(currentUser.getCurrentUser(), closure_4);
  }
  return isEntitledResult;
};