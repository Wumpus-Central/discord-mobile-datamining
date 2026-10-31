// === Module 11790: isActivitySupportedOnClientPlatform ===

// Module 11790 (isActivitySupportedOnClientPlatform)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import EmbeddedActivitySupportedPlatforms2 from "EmbeddedActivitySupportedPlatforms" /* 2020 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = EmbeddedActivitySupportedPlatforms2.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = PlatformUtils;
    const EmbeddedActivitySupportedPlatforms = EmbeddedActivitySupportedPlatforms2.EmbeddedActivitySupportedPlatforms;
    IOS = PlatformUtils.isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = PlatformUtils.isAndroid();
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