// === Module 10658: MediaKeyboardEmptyState ===

// Module 10658 (MediaKeyboardEmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import SettingsIcon from "SettingsIcon" /* 7380 */;
import CameraIcon from "CameraIcon" /* 10653 */;
import _modDef10659 from "module_10659" /* 10659 */;
import _modDef10660 from "module_10660" /* 10660 */;
import noop from "module_19" /* 19 */;

require = fn;
class MediaKeyboardEmptyState {
  constructor(arg0) {
    ({ actionIcon, actionLabel, actionPress, imageSource, label } = global);
    tmp = closure_8();
    obj = { style: tmp.container, children: null };
    items = [, , ];
    items[0] = jsx(Image, { source: imageSource });
    obj = { variant: "text-sm/semibold", color: "text-muted", style: tmp.label, children: label };
    items[1] = jsx(closure_0(closure_2[6]).Text, obj);
    items[2] = jsx(closure_0(closure_2[7]).Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress });
    obj.children = items;
    return jsxs(View, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const NativePermissionStatus = fn(4770).NativePermissionStatus;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, label: null };
createStyles = { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
createStyles.container = createStyles;
createStyles.label = { textAlign: "center", marginVertical: nativeDefault.space.PX_16 };
const React6 = createStyles.createStyles(createStyles);
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
          let obj = { actionIcon: timestampProducer(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
          const intl3 = util.intl;
          obj.actionLabel = intl3.string(util.t.JuXTi6);
          obj.actionPress = tmp2;
          obj.imageSource = _modDef10659;
          const intl4 = util.intl;
          obj.label = intl4.string(util.t["5g7NcN"]);
          return timestampProducer(MediaKeyboardEmptyState, obj);
        } else if (showCameraButton) {
          obj = { actionIcon: timestampProducer(CameraIcon.CameraIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
          const intl = util.intl;
          obj.actionLabel = intl.string(util.t.tpoWUd);
          obj.actionPress = tmp;
          obj.imageSource = _modDef10660;
          const intl2 = util.intl;
          obj.label = intl2.string(util.t.YOvRBZ);
          return timestampProducer(MediaKeyboardEmptyState, obj);
        }
      }
    }
  }
  obj = { actionIcon: timestampProducer(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
  const intl5 = util.intl;
  obj.actionLabel = intl5.string(util.t["457oeG"]);
  obj.actionPress = photosEmpty.onPressPrivacySettings;
  obj.imageSource = _modDef10659;
  const intl6 = util.intl;
  obj.label = intl6.string(util.t["8p9jGu"]);
  return timestampProducer(MediaKeyboardEmptyState, obj);
};