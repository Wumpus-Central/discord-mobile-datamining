// === Module 14377: isSourceError ===

// Module 14377 (isSourceError)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;

let closure_2 = [-1000, -1003, -1004, -1008];
const result = obj132.fileFinishedImporting("modules/quests/native/AdsVideoUtils.tsx");

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
    isIOSResult = obj1322.isIOS();
    if (isIOSResult) {
      let hasItem1 = null != code;
      if (hasItem1) {
        hasItem1 = closure_2.includes(code);
      }
      isIOSResult = hasItem1;
    }
    const tmpResult = obj1322;
  }
  return isIOSResult;
};