// discord_app/modules/activities/utils/isActivitySupportedOnClientPlatform.tsx
import set from "../../../../_runtime/00002_set.js";

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
}
