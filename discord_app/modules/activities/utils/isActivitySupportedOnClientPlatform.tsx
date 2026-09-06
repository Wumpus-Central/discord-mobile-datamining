// discord_app/modules/activities/utils/isActivitySupportedOnClientPlatform.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/isActivitySupportedOnClientPlatform.tsx");

export default function isActivitySupportedOnClientPlatform(arr) {
  if (obj.isIOS()) {
    let IOS = tmp(1894).EmbeddedActivitySupportedPlatforms.IOS;
  } else {
    const tmpResult = tmp(1115);
    const EmbeddedActivitySupportedPlatforms = tmp(1894).EmbeddedActivitySupportedPlatforms;
    IOS = tmp(1115).isAndroid() ? EmbeddedActivitySupportedPlatforms.ANDROID : EmbeddedActivitySupportedPlatforms.WEB;
    const isAndroidResult = tmp(1115).isAndroid();
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
