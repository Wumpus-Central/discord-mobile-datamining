// discord_app/modules/app_database/system/StartupData.native.tsx
import NativeAppDatabaseModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
