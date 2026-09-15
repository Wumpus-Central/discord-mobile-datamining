// === Module 10791: MediaKeyboardEmptyState ===

// Module 10791 (MediaKeyboardEmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4635 */;
import components_Button_Button from "components/Button/Button" /* 5059 */;
import SettingsIcon from "SettingsIcon" /* 7487 */;
import CameraIcon from "CameraIcon" /* 10786 */;
import _modDef10792 from "module_10792" /* 10792 */;
import _modDef10793 from "module_10793" /* 10793 */;
import noop from "module_19" /* 19 */;

require = fn;
class MediaKeyboardEmptyState {
  constructor(arg0) {
    ({ actionIcon, actionLabel, actionPress, imageSource, label } = global);
    tmp = closure_8();
    obj = { style: tmp.container, children: null };
    items = [, , ];
    items[0] = jsx(Image, { source: imageSource });
    obj1 = { variant: "text-sm/semibold", color: "text-muted", style: tmp.label, children: label };
    items[1] = jsx(closure_0(closure_2[6]).Text, obj1);
    items[2] = jsx(closure_0(closure_2[7]).Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress });
    obj.children = items;
    return jsxs(View, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const NativePermissionStatus = fn(4849).NativePermissionStatus;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" }, label: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
obj2.label = { textAlign: "center", marginVertical: nativeDefault.space.PX_16 };
const React6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default MediaKeyboardEmptyState;
export const getMediaEmptyStateComponentOrNull = function getMediaEmptyStateComponentOrNull(photosEmpty) {
  ({ photoPermissionStatus, showCameraButton } = photosEmpty);
  if (showCameraButton === undefined) {
    showCameraButton = true;
  }
  if (photoPermissionStatus !== NativePermissionStatus.DENIED) {
    if (photoPermissionStatus !== NativePermissionStatus.RESTRICTED) {
      if (photosEmpty.photosEmpty) {
        if (photoPermissionStatus === NativePermissionStatus.LIMITED) {
          const obj2 = { actionIcon: timestampProducer(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
          const intl3 = util.intl;
          obj2.actionLabel = intl3.string(util.t.JuXTi6);
          obj2.actionPress = tmp2;
          obj2.imageSource = _modDef10792;
          const intl4 = util.intl;
          obj2.label = intl4.string(util.t["5g7NcN"]);
          return timestampProducer(MediaKeyboardEmptyState, obj2);
        } else if (showCameraButton) {
          const obj = { actionIcon: timestampProducer(CameraIcon.CameraIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
          const intl = util.intl;
          obj.actionLabel = intl.string(util.t.tpoWUd);
          obj.actionPress = tmp;
          obj.imageSource = _modDef10793;
          const intl2 = util.intl;
          obj.label = intl2.string(util.t.YOvRBZ);
          return timestampProducer(MediaKeyboardEmptyState, obj);
        }
      }
    }
  }
  const obj3 = { actionIcon: timestampProducer(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
  const intl5 = util.intl;
  obj3.actionLabel = intl5.string(util.t["457oeG"]);
  obj3.actionPress = photosEmpty.onPressPrivacySettings;
  obj3.imageSource = _modDef10792;
  const intl6 = util.intl;
  obj3.label = intl6.string(util.t["8p9jGu"]);
  return timestampProducer(MediaKeyboardEmptyState, obj3);
};