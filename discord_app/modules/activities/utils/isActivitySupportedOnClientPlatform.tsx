// discord_app/modules/activities/utils/isActivitySupportedOnClientPlatform.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import EmbeddedActivitySupportedPlatforms2 from "../../../../discord_common/js/shared/shared-constants/EmbeddedActivitySupportedPlatforms.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = EmbeddedActivitySupportedPlatforms2.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = PlatformUtils;
    const EmbeddedActivitySupportedPlatforms = EmbeddedActivitySupportedPlatforms2.EmbeddedActivitySupportedPlatforms;
    IOS = PlatformUtils.isAndroid()
      ? EmbeddedActivitySupportedPlatforms.ANDROID
      : EmbeddedActivitySupportedPlatforms.WEB;
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
}
