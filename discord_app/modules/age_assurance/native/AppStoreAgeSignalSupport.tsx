// discord_app/modules/age_assurance/native/AppStoreAgeSignalSupport.tsx
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2 = 26;
let c3 = 2;
const result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalSupport.tsx");

export const MIN_AGE_GATE = 13;
export const ADULT_AGE_GATE = 18;
export const isAppStoreAgeSignalSupported = function isAppStoreAgeSignalSupported() {
  if (obj.isMetaQuest()) {
    return false;
  } else {
    let tmpResult = DeviceUtils;
    if (tmpResult.getIsRunningOnSimulator()) {
      return false;
    } else {
      tmpResult = DeviceUtils;
      const parts = tmpResult.getSystemVersion().split(".");
      const _parseInt = parseInt;
      const parsed = parseInt(parts[0], 10);
      let str3 = parts[1];
      if (str3 == null) {
        str3 = "0";
      }
      const parsed1 = parseInt(str3, 10);
      const str = tmpResult.getSystemVersion();
      if (tmpResult1.isIOS()) {
        let tmp9 = parsed > c2;
        if (!tmp9) {
          let tmp10 = parsed === c2;
          if (tmp10) {
            tmp10 = parsed1 >= c3;
          }
          tmp9 = tmp10;
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = parsed >= 23;
      }
      return tmp8;
    }
  }
  obj = MetaQuestUtils;
};
