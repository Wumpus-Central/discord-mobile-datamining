// === Module 4688: StartupData ===

// Module 4688 (StartupData)
import NativeAppDatabaseModuleDefault from "NativeAppDatabaseModule" /* 4689 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export function getUserId() {
  const userId = NativeAppDatabaseModuleDefault.getConstants().userId;
  let tmp = null;
  if (null != userId) {
    tmp = userId;
  }
  return tmp;
}
export function setUserId(id) {
  NativeAppDatabaseModuleDefault.setUserId(id);
}