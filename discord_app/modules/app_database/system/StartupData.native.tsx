// discord_app/modules/app_database/system/StartupData.native.tsx
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/app_database/system/StartupData.native.tsx");

export const getUserId = function getUserId() {
  if (obj.isAndroid()) {
    let userId = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx").getConstants().userId;
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
  obj = require("../../../utils/PlatformUtils.tsx") /* set */;
};
export const setUserId = function setUserId(id) {
  if (obj.isAndroid()) {
    require("../../../../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx").setUserId(id);
    const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeAppDatabaseModule.tsx");
  } else {
    const DCDAppDatabase = NativeModules.DCDAppDatabase;
    DCDAppDatabase.setUserId(id);
  }
};