// === Module 1972: getUserId ===

// Module 1972 (getUserId)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set2 from "set" /* 500 */;
import enforcingDefault from "enforcing" /* 1973 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    let userId = enforcingDefault.getConstants().userId;
    let tmp6 = null;
    if (null != userId) {
      tmp6 = userId;
    }
    return tmp6;
  } else {
    userId = NativeModules.DCDAppDatabase.userId;
    if (userId == null) {
      userId = null;
    }
    return userId;
  }
  obj = set2;
};
export const setUserId = function setUserId(id) {
  if (obj.isAndroid()) {
    enforcingDefault.setUserId(id);
    const obj2 = enforcingDefault;
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
};