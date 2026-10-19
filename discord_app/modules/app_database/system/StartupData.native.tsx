// === Module 4844: StartupData ===

// Module 4844 (StartupData)
import NativeAppDatabaseModuleDefault from "NativeAppDatabaseModule" /* 4845 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  const userId = NativeAppDatabaseModuleDefault.getConstants().userId;
  let tmp = null;
  if (null != userId) {
    tmp = userId;
  }
  return tmp;
};
export const setUserId = function setUserId(id) {
  NativeAppDatabaseModuleDefault.setUserId(id);
};