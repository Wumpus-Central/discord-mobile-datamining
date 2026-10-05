// discord_app/utils/LibraryApplicationUtils.tsx
import UserSettings from "../modules/user_settings/UserSettings.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import UserStore from "../stores/UserStore.tsx";
import SKUStore from "../stores/game_store/SKUStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({
  LibraryApplicationFlags: hasOwnProperty,
  LocalDispatchApplicationStates: metroRequire,
  StatusTypes: metroImportDefault,
} = Constants);
const result = size.fileFinishedImporting("utils/LibraryApplicationUtils.tsx");

export const getComboId = function getComboId(applicationId, branchId) {
  return "" + applicationId + ":" + branchId;
};
export const convertComboId = function convertComboId(str) {
  const tmp = _slicedToArray(str.split(":"), 2);
  return { applicationId: tmp[0], branchId: tmp[1] };
};
export const shouldShareApplicationActivity = function shouldShareApplicationActivity(
  applicationId,
  LibraryApplicationStore,
) {
  const ShowCurrentGame = UserSettings.ShowCurrentGame;
  if (ShowCurrentGame.getSetting()) {
    const StatusSetting = UserSettings.StatusSetting;
    if (StatusSetting.getSetting() !== metroImportDefault.INVISIBLE) {
      const activeLibraryApplication = LibraryApplicationStore.getActiveLibraryApplication(applicationId);
      const tmp7 = null == activeLibraryApplication || !activeLibraryApplication.hasFlag(hasOwnProperty.PRIVATE);
      return tmp7;
    }
  }
  return false;
};
export const calculateProgressPercentage = function calculateProgressPercentage(arg0, arg1) {
  let num = 100;
  if (0 !== arg1) {
    num = (arg0 / arg1) * 100;
  }
  return num;
};
export const shouldShowGameInLibrary = function shouldShowGameInLibrary(arg0, hasFlag, enabled) {
  let tmp = null != hasFlag;
  if (tmp) {
    enabled = enabled.enabled;
    let tmp3 = !enabled;
    if (enabled) {
      tmp3 = !hasFlag.hasFlag(hasOwnProperty.PRIVATE);
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
    if (type.type !== metroRequire.INSTALLING) {
      let tmp3;
      if (type.type !== metroRequire.UPDATING) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    tmp3 = type;
  }
  return tmp;
};
export const getCombinedProgress = function getCombinedProgress(arr) {
  return arr.reduce(
    (total, type) => {
      let tmp = null;
      if (null != type) {
        if (type.type !== constants.INSTALLING) {
          let tmp3;
          if (type.type !== constants.UPDATING) {
            tmp3 = null;
          }
          tmp = tmp3;
        }
        tmp3 = type;
      }
      let tmp4 = total;
      if (null != tmp) {
        tmp4 = total;
        if (type.type !== constants.UP_TO_DATE) {
          const _Number = Number;
          const _Number2 = Number;
          tmp4 = { total: total.total + Number(tmp.total), progress: total.progress + Number(tmp.progress) };
          const obj = { total: total.total + Number(tmp.total), progress: total.progress + Number(tmp.progress) };
        }
      }
      return tmp4;
    },
    { total: 0, progress: 0 },
  );
};
export const isUserEntitledToLibraryApplication = function isUserEntitledToLibraryApplication(libraryApplication) {
  const isEntitledResult =
    libraryApplication.isDiscordApplication() && libraryApplication.isEntitled(UserStore.getCurrentUser(), SKUStore);
  return isEntitledResult;
};
