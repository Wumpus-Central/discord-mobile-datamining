// === Module 8450: MIN_AGE_GATE ===

// Module 8450 (MIN_AGE_GATE)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1608 */;

let c2 = 26;
let c3 = 2;
const result = set.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalSupport.tsx");

export const MIN_AGE_GATE = 13;
export const ADULT_AGE_GATE = 18;
export const isAppStoreAgeSignalSupported = function isAppStoreAgeSignalSupported() {
  if (obj.isMetaQuest()) {
    return false;
  } else {
    let tmpResult = tmp(4539);
    if (tmpResult.getIsRunningOnSimulator()) {
      return false;
    } else {
      tmpResult = tmp(4539);
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
  obj = isMetaQuest;
};