// === Module 9529: isActivitySupportedOnClientPlatform ===

// Module 9529 (isActivitySupportedOnClientPlatform)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import Server from "Server" /* 1894 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = Server.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = PlatformUtils;
    const EmbeddedActivitySupportedPlatforms = Server.EmbeddedActivitySupportedPlatforms;
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