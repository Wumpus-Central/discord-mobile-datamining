// === Module 10389: MediaKeyboardEmptyState ===

// Module 10389 (MediaKeyboardEmptyState)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import SettingsIcon from "SettingsIcon" /* 6883 */;
import CameraIcon from "CameraIcon" /* 10384 */;
import AssetRegistryDefault from "AssetRegistry" /* 10390 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10391 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ Image: c3, View: closure_4 } = react_native);
const NativePermissionStatus = NativePermissionConstants.NativePermissionStatus;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, label: obj3 };
obj2 = { marginHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginVertical: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let actionIcon;
  let actionLabel;
  let actionPress;
  let imageSource;
  let items;
  let label;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(14);
  ({ actionIcon, actionLabel, actionPress, imageSource, label } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] !== imageSource) {
    const obj2 = { source: imageSource };
    const tmp8 = metroRequire(_false, obj2);
    cResult[0] = imageSource;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === label) {
    let tmp9;
    if (cResult[3] === tmp4.label) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === actionIcon) {
      if (cResult[6] === actionLabel) {
        let tmp11;
        if (cResult[7] === actionPress) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.container) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp9) {
              let tmp14;
              if (cResult[12] === tmp11) {
                tmp14 = cResult[13];
              }
              return tmp14;
            }
          }
        }
        const obj3 = { style: tmp4.container, children: items };
        items = [tmp5, tmp9, tmp11];
        const tmp17 = metroImportDefault(React3, obj3);
        cResult[9] = tmp4.container;
        cResult[10] = tmp5;
        cResult[11] = tmp9;
        cResult[12] = tmp11;
        cResult[13] = tmp17;
        tmp14 = tmp17;
      }
    }
    const obj4 = { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress };
    const tmp13 = metroRequire(components_Button_Button.Button, obj4);
    cResult[5] = actionIcon;
    cResult[6] = actionLabel;
    cResult[7] = actionPress;
    cResult[8] = tmp13;
    tmp11 = tmp13;
  }
  const obj5 = { variant: "text-sm/semibold", color: "text-muted", style: tmp4.label, children: label };
  const tmp10 = metroRequire(Text_Text.Text, obj5);
  cResult[2] = label;
  cResult[3] = tmp4.label;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  let actionIcon;
  let actionLabel;
  let actionPress;
  let imageSource;
  let items;
  let label;
  ({ actionIcon, actionLabel, actionPress, imageSource, label } = arg0);
  const tmp = closure_8();
  const obj = { style: tmp.container, children: items };
  items = [metroRequire(_false, { source: imageSource }), , ];
  const obj2 = { variant: "text-sm/semibold", color: "text-muted", style: tmp.label, children: label };
  items[1] = metroRequire(Text_Text.Text, obj2);
  items[2] = metroRequire(components_Button_Button.Button, { icon: actionIcon, size: "sm", text: actionLabel, onPress: actionPress });
  return metroImportDefault(React3, obj);
});
let closure_9 = tmp6;
const result = size.fileFinishedImporting("modules/media_keyboard/native/components/MediaKeyboardEmptyState.tsx");

export default tmp6;
export const getMediaEmptyStateComponentOrNull = function getMediaEmptyStateComponentOrNull(photosEmpty) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let photoPermissionStatus;
  let showCameraButton;
  ({ photoPermissionStatus, showCameraButton } = photosEmpty);
  photosEmpty = photosEmpty.photosEmpty;
  if (showCameraButton === undefined) {
    showCameraButton = true;
  }
  const onPressPrivacySettings = photosEmpty.onPressPrivacySettings;
  if (photoPermissionStatus !== NativePermissionStatus.DENIED) {
    if (photoPermissionStatus !== NativePermissionStatus.RESTRICTED) {
      if (photosEmpty) {
        if (photoPermissionStatus === NativePermissionStatus.LIMITED) {
          const obj2 = { actionIcon: metroRequire(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: intl3.string(intl7.t.JuXTi6), actionPress: tmp2, imageSource: AssetRegistryDefault, label: intl4.string(intl7.t["5g7NcN"]) };
          intl3 = intl7.intl;
          intl4 = intl7.intl;
          return metroRequire(closure_9, obj2);
        } else if (showCameraButton) {
          const obj = { actionIcon: metroRequire(CameraIcon.CameraIcon, { color: "white", size: "sm" }), actionLabel: intl.string(intl7.t.tpoWUd), actionPress: tmp, imageSource: AssetRegistryDefault2, label: intl2.string(intl7.t.YOvRBZ) };
          intl = intl7.intl;
          intl2 = intl7.intl;
          return metroRequire(closure_9, obj);
        }
      }
    }
  }
  const obj3 = { actionIcon: metroRequire(SettingsIcon.SettingsIcon, { color: "white", size: "sm" }), actionLabel: intl5.string(intl7.t["457oeG"]), actionPress: onPressPrivacySettings, imageSource: AssetRegistryDefault, label: intl6.string(intl7.t["8p9jGu"]) };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  return metroRequire(closure_9, obj3);
};