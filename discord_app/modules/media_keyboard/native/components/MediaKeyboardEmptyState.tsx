import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { NativePermissionStatus } from "NativePermissionStatus";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
class MediaKeyboardEmptyState {
  constructor(arg0) {
    ({ actionIcon, actionLabel, actionPress, imageSource, label } = global);
    tmp = jsxs();
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
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, label: null };
createCacheKey = { marginHorizontal: require("Themes").space.PX_8, marginVertical: require("Themes").space.PX_32, justifyContent: "center", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center", marginVertical: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { textAlign: "center", marginVertical: require("Themes").space.PX_16 };
const result = require("NativePermissionStatus").fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default MediaKeyboardEmptyState;
export const getMediaEmptyStateComponentOrNull = function getMediaEmptyStateComponentOrNull(photosEmpty) {
  let photoPermissionStatus;
  let showCameraButton;
  ({ photoPermissionStatus, showCameraButton } = photosEmpty);
  if (showCameraButton === undefined) {
    showCameraButton = true;
  }
  if (photoPermissionStatus !== NativePermissionStatus.DENIED) {
    if (photoPermissionStatus !== tmp3.RESTRICTED) {
      if (photosEmpty.photosEmpty) {
        if (photoPermissionStatus === tmp3.LIMITED) {
          let obj = { actionIcon: null, actionLabel: null, actionPress: null, imageSource: null, label: null };
          obj[0] = callback(require(5920) /* SettingsIcon */.SettingsIcon, { color: "white", size: "sm" });
          const intl3 = require(1236) /* getSystemLocale */.intl;
          obj[1] = intl3.string(require(1236) /* getSystemLocale */.t.JuXTi6);
          obj[2] = tmp2;
          obj[3] = importDefault(9947);
          const intl4 = require(1236) /* getSystemLocale */.intl;
          obj[4] = intl4.string(require(1236) /* getSystemLocale */.t["5g7NcN"]);
          return callback(MediaKeyboardEmptyState, obj);
        } else if (showCameraButton) {
          obj = { actionIcon: null, actionLabel: null, actionPress: null, imageSource: null, label: null };
          obj[0] = callback(require(9941) /* CameraIcon */.CameraIcon, { color: "white", size: "sm" });
          const intl = require(1236) /* getSystemLocale */.intl;
          obj[1] = intl.string(require(1236) /* getSystemLocale */.t.tpoWUd);
          obj[2] = tmp;
          obj[3] = importDefault(9948);
          const intl2 = require(1236) /* getSystemLocale */.intl;
          obj[4] = intl2.string(require(1236) /* getSystemLocale */.t.YOvRBZ);
          return callback(MediaKeyboardEmptyState, obj);
        }
      }
    }
  }
  obj = { actionIcon: callback(require(5920) /* SettingsIcon */.SettingsIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl5.string(require(1236) /* getSystemLocale */.t["457oeG"]);
  obj[2] = photosEmpty.onPressPrivacySettings;
  obj[3] = importDefault(9947);
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj[4] = intl6.string(require(1236) /* getSystemLocale */.t["8p9jGu"]);
  return callback(MediaKeyboardEmptyState, obj);
};