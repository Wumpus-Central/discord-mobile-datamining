// === Module 8727: isActivitySupportedOnClientPlatform ===

// Module 8727 (isActivitySupportedOnClientPlatform)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;

const result = obj132.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = PermissionOverwriteType.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = obj1322;
    const EmbeddedActivitySupportedPlatforms = PermissionOverwriteType.EmbeddedActivitySupportedPlatforms;
    IOS = obj1322.isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = obj1322.isAndroid();
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