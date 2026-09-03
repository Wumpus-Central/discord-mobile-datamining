// === Module 9461: isActivitySupportedOnClientPlatform ===

// Module 9461 (isActivitySupportedOnClientPlatform)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = tmp(1954).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = tmp(1234);
    const EmbeddedActivitySupportedPlatforms = tmp(1954).EmbeddedActivitySupportedPlatforms;
    IOS = tmp(1234).isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = tmp(1234).isAndroid();
  }
  let flag;
  if (arr != null) {
    flag = arr.includes(IOS);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};