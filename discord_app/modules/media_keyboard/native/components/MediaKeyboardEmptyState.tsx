// discord_app/modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import SettingsIcon from "../../../../design/components/Icon/native/redesign/generated/SettingsIcon.tsx";
import CameraIcon from "../../../../design/components/Icon/native/redesign/generated/CameraIcon.tsx";
import registerAssetDefault from "../../../../../_runtime/10250_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/10251_registerAsset.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { NativePermissionStatus } from "../../../native_permissions/NativePermissionConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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