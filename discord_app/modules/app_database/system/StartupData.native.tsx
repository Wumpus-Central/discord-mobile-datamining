// discord_app/modules/app_database/system/StartupData.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import obj1322 from "../../../utils/PlatformUtils.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

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
  obj = obj1322;
};
export const setUserId = function setUserId(id) {
  if (obj.isAndroid()) {
    enforcingDefault.setUserId(id);
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
  obj = obj1322;
};