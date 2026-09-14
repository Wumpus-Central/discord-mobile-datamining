// discord_app/modules/app_database/system/StartupData.native.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import NativeAppDatabaseModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
