// === Module 9365: isActivitySupportedOnClientPlatform ===

// Module 9365 (isActivitySupportedOnClientPlatform)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = tmp(1955).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = tmp(500);
    const EmbeddedActivitySupportedPlatforms = tmp(1955).EmbeddedActivitySupportedPlatforms;
    IOS = tmp(500).isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = tmp(500).isAndroid();
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