// discord_app/modules/app_database/system/StartupData.native.tsx
import { NativeModules } from "get ActivityIndicator";
import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";

const result = require("enforcing").fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    let userId = enforcing.getConstants().userId;
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
  obj = set;
};
export const setUserId = function setUserId(id) {
  if (obj.isAndroid()) {
    enforcing.setUserId(id);
    const obj2 = enforcing;
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
};