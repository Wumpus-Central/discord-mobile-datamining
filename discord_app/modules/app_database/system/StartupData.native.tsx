// === Module 2004: StartupData ===

// Module 2004 (StartupData)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import NativeAppDatabaseModuleDefault from "NativeAppDatabaseModule" /* 2005 */;
import size from "module_2" /* 2 */;

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    const userId = NativeAppDatabaseModuleDefault.getConstants().userId;
    let tmp6 = null;
    if (null != userId) {
      tmp6 = userId;
    }
    return tmp6;
  } else {
    let userId1 = NativeModules.DCDAppDatabase.userId;
    if (userId1 == null) {
      userId1 = null;
    }
    return userId1;
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