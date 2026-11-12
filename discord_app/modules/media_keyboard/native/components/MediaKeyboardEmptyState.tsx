// === Module 11591: MediaKeyboardEmptyState ===

// Module 11591 (MediaKeyboardEmptyState)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import FastImageDefault from "FastImage" /* 5957 */;
import SettingsIcon from "SettingsIcon" /* 10500 */;
import CameraIcon from "CameraIcon" /* 11586 */;
import _modDef11592 from "module_11592" /* 11592 */;
import _modDef11593 from "module_11593" /* 11593 */;
import noop from "module_19" /* 19 */;

require = fn;
class MediaKeyboardEmptyState {
  constructor(arg0) {
    ({ actionIcon, actionLabel, actionPress, imageSource, label } = global);
    tmp = closure_7();
    obj = { style: tmp.container, children: null };
    items = [, , ];
    items[0] = jsx(closure_1(closure_2[6]), { source: imageSource });
    obj1 = { variant: "body-sm/semibold", color: "text-muted", style: tmp.label, children: label };
    items[1] = jsx(closure_0(closure_2[7]).Text, obj1);
    items[2] = jsx(closure_0(closure_2[8]).Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress });
    obj.children = items;
    return jsxs(View, obj);
  }
}
const View = fn(17).View;
const NativePermissionStatus = fn(6839).NativePermissionStatus;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" }, label: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
obj2.label = { textAlign: "center", marginVertical: nativeDefault.space.PX_16 };
const metroImportDefault = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default MediaKeyboardEmptyState;
export function getMediaEmptyStateComponentOrNull(photosEmpty) {
  ({ photoPermissionStatus, showCameraButton } = photosEmpty);
  if (showCameraButton === undefined) {
    showCameraButton = true;
  }
  if (photoPermissionStatus !== NativePermissionStatus.DENIED) {
    if (photoPermissionStatus !== NativePermissionStatus.RESTRICTED) {
      if (photosEmpty.photosEmpty) {
        if (photoPermissionStatus === NativePermissionStatus.LIMITED) {
          const obj2 = { actionIcon: hasOwnProperty(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
          const intl3 = util.intl;
          obj2.actionLabel = intl3.string(util.t.JuXTi6);
          obj2.actionPress = tmp2;
          obj2.imageSource = _modDef11592;
          const intl4 = util.intl;
          obj2.label = intl4.string(util.t["5g7NcN"]);
          return hasOwnProperty(MediaKeyboardEmptyState, obj2);
        } else if (showCameraButton) {
          const obj = { actionIcon: hasOwnProperty(CameraIcon.CameraIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
          const intl = util.intl;
          obj.actionLabel = intl.string(util.t.tpoWUd);
          obj.actionPress = tmp;
          obj.imageSource = _modDef11593;
          const intl2 = util.intl;
          obj.label = intl2.string(util.t.YOvRBZ);
          return hasOwnProperty(MediaKeyboardEmptyState, obj);
        }
      }
    }
  }
  const obj3 = { actionIcon: hasOwnProperty(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
  const intl5 = util.intl;
  obj3.actionLabel = intl5.string(util.t["457oeG"]);
  obj3.actionPress = photosEmpty.onPressPrivacySettings;
  obj3.imageSource = _modDef11592;
  const intl6 = util.intl;
  obj3.label = intl6.string(util.t["8p9jGu"]);
  return hasOwnProperty(MediaKeyboardEmptyState, obj3);
}