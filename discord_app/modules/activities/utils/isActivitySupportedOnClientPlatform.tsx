// discord_app/modules/activities/utils/isActivitySupportedOnClientPlatform.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Server from "../../../flow/Server.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = Server.EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = PlatformUtils;
    const EmbeddedActivitySupportedPlatforms = Server.EmbeddedActivitySupportedPlatforms;
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
