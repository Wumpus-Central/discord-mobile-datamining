// === Module 15022: AdsVideoUtils ===

// Module 15022 (AdsVideoUtils)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

let closure_2 = [-1000, -1003, -1004, -1008];
const result = size.fileFinishedImporting("modules/quests/native/AdsVideoUtils.tsx");

export const isSourceError = function isSourceError(error) {
  if (error != null) {
    const code = error.error.code;
  }
  if (error != null) {
    const errorException = error.error.errorException;
  }
  if (obj.isAndroid()) {
    let hasItem;
    if (errorException != null) {
      hasItem = errorException.includes("Source error");
    }
    let isIOSResult = hasItem;
  } else {
    isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      let hasItem1 = null != code;
      if (hasItem1) {
        hasItem1 = closure_2.includes(code);
      }
      isIOSResult = hasItem1;
    }
    const tmpResult = PlatformUtils;
  }
  return isIOSResult;
};