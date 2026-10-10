// === Module 10047: MediaKeyboardEmptyState ===

// Module 10047 (MediaKeyboardEmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import FastImageDefault from "FastImage" /* 6156 */;
import SettingsIcon from "SettingsIcon" /* 7091 */;
import CameraIcon from "CameraIcon" /* 10042 */;
import _modDef10048 from "module_10048" /* 10048 */;
import _modDef10049 from "module_10049" /* 10049 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const NativePermissionStatus = fn(7482).NativePermissionStatus;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" }, label: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
obj2.label = { textAlign: "center", marginVertical: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaKeyboardEmptyState(arg0) {
  const cResult = c.c(14);
  ({ actionIcon, actionLabel, actionPress, imageSource, label } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== imageSource) {
    const obj2 = { source: imageSource };
    const tmp8 = hasOwnProperty(FastImageDefault, obj2);
    cResult[0] = imageSource;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === label) {
    if (cResult[3] === tmp4.label) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === actionIcon) {
      if (cResult[6] === actionLabel) {
        if (cResult[7] === actionPress) {
          let tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.container) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp9) {
              if (cResult[12] === tmp11) {
                let tmp14 = cResult[13];
              }
              return tmp14;
            }
          }
        }
        const obj3 = { style: tmp4.container, children: null };
        const items = [tmp5, tmp9, tmp11];
        obj3.children = items;
        const tmp17 = timestampProducer(View, obj3);
        cResult[9] = tmp4.container;
        cResult[10] = tmp5;
        cResult[11] = tmp9;
        cResult[12] = tmp11;
        cResult[13] = tmp17;
        tmp14 = tmp17;
      }
    }
    const obj4 = { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress };
    const tmp13 = hasOwnProperty(components_Button_Button.Button, obj4);
    cResult[5] = actionIcon;
    cResult[6] = actionLabel;
    cResult[7] = actionPress;
    cResult[8] = tmp13;
    tmp11 = tmp13;
  }
  const tmp10 = hasOwnProperty(Text_Text.Text, { variant: "text-sm/semibold", color: "text-muted", style: tmp4.label, children: label });
  cResult[2] = label;
  cResult[3] = tmp4.label;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj5 = { variant: "text-sm/semibold", color: "text-muted", style: tmp4.label, children: label };
}) : (function MediaKeyboardEmptyState(arg0) {
  ({ actionIcon, actionLabel, actionPress, imageSource, label } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const items = [hasOwnProperty(FastImageDefault, { source: imageSource }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/semibold", color: "text-muted", style: tmp.label, children: label }), hasOwnProperty(components_Button_Button.Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress })];
  obj.children = items;
  return timestampProducer(View, obj);
});
let closure_8 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default tmp4;
export const getMediaEmptyStateComponentOrNull = function getMediaEmptyStateComponentOrNull(photosEmpty) {
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
          obj2.imageSource = _modDef10048;
          const intl4 = util.intl;
          obj2.label = intl4.string(util.t["5g7NcN"]);
          return hasOwnProperty(closure_8, obj2);
        } else if (showCameraButton) {
          const obj = { actionIcon: hasOwnProperty(CameraIcon.CameraIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
          const intl = util.intl;
          obj.actionLabel = intl.string(util.t.tpoWUd);
          obj.actionPress = tmp;
          obj.imageSource = _modDef10049;
          const intl2 = util.intl;
          obj.label = intl2.string(util.t.YOvRBZ);
          return hasOwnProperty(closure_8, obj);
        }
      }
    }
  }
  const obj3 = { actionIcon: hasOwnProperty(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: null, actionPress: null, imageSource: null, label: null };
  const intl5 = util.intl;
  obj3.actionLabel = intl5.string(util.t["457oeG"]);
  obj3.actionPress = photosEmpty.onPressPrivacySettings;
  obj3.imageSource = _modDef10048;
  const intl6 = util.intl;
  obj3.label = intl6.string(util.t["8p9jGu"]);
  return hasOwnProperty(closure_8, obj3);
};