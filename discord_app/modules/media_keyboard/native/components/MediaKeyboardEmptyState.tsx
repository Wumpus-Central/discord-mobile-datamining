// discord_app/modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import SettingsIcon from "SettingsIcon" /* 7355 */;
import CameraIcon from "CameraIcon" /* 10287 */;
import registerAssetDefault from "registerAsset" /* 10293 */;
import registerAssetDefault2 from "registerAsset" /* 10294 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { NativePermissionStatus } from "NativePermissionStatus" /* 4839 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
class MediaKeyboardEmptyState {
  constructor(arg0) {
    ({ actionIcon, actionLabel, actionPress, imageSource, label } = global);
    tmp = closure_8();
    obj = { style: tmp.container, children: null };
    items = [, , ];
    items[0] = jsx(Image, { source: imageSource });
    obj = { variant: "text-sm/semibold", color: "text-muted", style: tmp.label, children: label };
    items[1] = jsx(require("Text").Text, obj);
    items[2] = jsx(require("Button").Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress });
    obj[1] = items;
    return jsxs(View, obj);
  }
}
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, label: null };
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_8, marginVertical: ThemesDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginVertical: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj1 = { textAlign: "center", marginVertical: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default MediaKeyboardEmptyState;
export const getMediaEmptyStateComponentOrNull = function getMediaEmptyStateComponentOrNull(photosEmpty) {
  ({ photoPermissionStatus, showCameraButton } = photosEmpty);
  if (showCameraButton === undefined) {
    showCameraButton = true;
  }
  if (photoPermissionStatus !== NativePermissionStatus.DENIED) {
    if (photoPermissionStatus !== tmp3.RESTRICTED) {
      if (photosEmpty.photosEmpty) {
        if (photoPermissionStatus === tmp3.LIMITED) {
          let obj = { actionIcon: null, actionLabel: null, actionPress: null, imageSource: null, label: null };
          obj[0] = callback(SettingsIcon.SettingsIcon, { color: "white", size: "sm" });
          const intl3 = getSystemLocale.intl;
          obj[1] = intl3.string(getSystemLocale.t.JuXTi6);
          obj[2] = tmp2;
          obj[3] = registerAssetDefault;
          const intl4 = getSystemLocale.intl;
          obj[4] = intl4.string(getSystemLocale.t["5g7NcN"]);
          return callback(MediaKeyboardEmptyState, obj);
        } else if (showCameraButton) {
          obj = { actionIcon: null, actionLabel: null, actionPress: null, imageSource: null, label: null };
          obj[0] = callback(CameraIcon.CameraIcon, { color: "white", size: "sm" });
          const intl = getSystemLocale.intl;
          obj[1] = intl.string(getSystemLocale.t.tpoWUd);
          obj[2] = tmp;
          obj[3] = registerAssetDefault2;
          const intl2 = getSystemLocale.intl;
          obj[4] = intl2.string(getSystemLocale.t.YOvRBZ);
          return callback(MediaKeyboardEmptyState, obj);
        }
      }
    }
  }
  obj = { actionIcon: callback(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
  const intl5 = getSystemLocale.intl;
  obj[1] = intl5.string(getSystemLocale.t["457oeG"]);
  obj[2] = photosEmpty.onPressPrivacySettings;
  obj[3] = registerAssetDefault;
  const intl6 = getSystemLocale.intl;
  obj[4] = intl6.string(getSystemLocale.t["8p9jGu"]);
  return callback(MediaKeyboardEmptyState, obj);
};