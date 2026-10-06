// === Module 14849: AdsVideoUtils ===

// Module 14849 (AdsVideoUtils)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let closure_2 = [-1000, -1003, -1004, -1008];
const result = size.fileFinishedImporting("modules/quests/native/AdsVideoUtils.tsx");

export const isSourceError = function isSourceError(error) {
  let code;
  let errorException;
  let isIOSResult;
  if (error != null) {
    code = error.error.code;
  }
  if (error != null) {
    errorException = error.error.errorException;
  }
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    let hasItem;
    if (errorException != null) {
      hasItem = errorException.includes("Source error");
    }
    isIOSResult = hasItem;
  } else {
    const tmpResult = PlatformUtils;
    isIOSResult = tmpResult.isIOS();
    if (isIOSResult) {
      const hasItem1 = null != code && closure_2.includes(code);
      isIOSResult = hasItem1;
    }
  }
  return isIOSResult;
};