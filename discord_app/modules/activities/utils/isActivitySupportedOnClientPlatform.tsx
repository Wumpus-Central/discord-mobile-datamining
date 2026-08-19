// discord_app/modules/activities/utils/isActivitySupportedOnClientPlatform.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import obj1322 from "../../../utils/PlatformUtils.tsx";
import PermissionOverwriteType from "../../../flow/Server.tsx";

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