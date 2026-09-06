// === Module 7399: LibraryApplicationUtils ===

// Module 7399 (LibraryApplicationUtils)
import UserSettings from "UserSettings" /* 1935 */;
import _slicedToArray from "module_32" /* 32 */;
import UserStore from "UserStore" /* 1371 */;
import SKUStore from "SKUStore" /* 5510 */;

require = fn;
const Constants = fn(1074);
({ LibraryApplicationFlags: hasOwnProperty, LocalDispatchApplicationStates: metroRequire, StatusTypes: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("utils/LibraryApplicationUtils.tsx");

export const getComboId = function getComboId(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
};
export const convertComboId = function convertComboId(str) {
  const tmp = _slicedToArray(str.split(":"), 2);
  return { applicationId: tmp[0], branchId: tmp[1] };
};
export const shouldShareApplicationActivity = function shouldShareApplicationActivity(application_id, LibraryApplicationStore) {
  const ShowCurrentGame = UserSettings.ShowCurrentGame;
  if (ShowCurrentGame.getSetting()) {
    const StatusSetting = UserSettings.StatusSetting;
    if (StatusSetting.getSetting() !== constants3.INVISIBLE) {
      const activeLibraryApplication = LibraryApplicationStore.getActiveLibraryApplication(application_id);
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
      if (type.type !== tmp2.UPDATING) {
        let tmp3 = null;
      }
      tmp = tmp3;
    }
    tmp3 = type;
  }
  return tmp;
};
export const getCombinedProgress = function getCombinedProgress(arr) {
  return arr.reduce((total, type) => {
    let tmp = null;
    if (null != type) {
      if (type.type !== constants.INSTALLING) {
        if (type.type !== tmp2.UPDATING) {
          let tmp3 = null;
        }
        tmp = tmp3;
      }
      tmp3 = type;
    }
    let tmp4 = total;
    if (null != tmp) {
      tmp4 = total;
      if (type.type !== constants.UP_TO_DATE) {
        const obj = { total: null, progress: null };
        const _Number = Number;
        obj.total = total.total + Number(tmp.total);
        const _Number2 = Number;
        obj.progress = total.progress + Number(tmp.progress);
        tmp4 = obj;
      }
    }
    return tmp4;
  }, { total: 0, progress: 0 });
};
export const isUserEntitledToLibraryApplication = function isUserEntitledToLibraryApplication(libraryApplication) {
  let isEntitledResult = libraryApplication.isDiscordApplication();
  if (isEntitledResult) {
    isEntitledResult = libraryApplication.isEntitled(UserStore.getCurrentUser(), SKUStore);
  }
  return isEntitledResult;
};