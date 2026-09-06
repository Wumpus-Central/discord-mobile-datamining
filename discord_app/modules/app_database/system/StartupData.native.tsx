// === Module 2004: StartupData ===

// Module 2004 (StartupData)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativeAppDatabaseModuleDefault from "NativeAppDatabaseModule" /* 2005 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    let userId = NativeAppDatabaseModuleDefault.getConstants().userId;
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
  obj = PlatformUtils;
};
export const setUserId = function setUserId(id) {
  if (obj.isAndroid()) {
    NativeAppDatabaseModuleDefault.setUserId(id);
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
  obj = PlatformUtils;
};