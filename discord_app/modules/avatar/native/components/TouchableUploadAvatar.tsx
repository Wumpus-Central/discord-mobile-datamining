// === Module 17580: TouchableUploadAvatar ===

// Module 17580 (TouchableUploadAvatar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Pressables from "Pressables" /* 5909 */;
import FastImageDefault from "FastImage" /* 5974 */;
import AssetRegistryDefault from "AssetRegistry" /* 12442 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13675 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
let size1;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatarContainer: { display: "flex", paddingTop: 24 }, defaultLogoStyle: obj2, uploadedAvatarStyle: { width: 200, height: 200, borderRadius: 100, position: "relative" }, avatarWrapper: size, uploadAvatarWrapper: size1, uploadAvatarIcon: obj3 };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 96 };
createStyles = createStyles.createStyles;
size = { borderColor: nativeDefault.colors.BORDER_MUTED, borderStyle: "dashed", borderWidth: 2, borderRadius: nativeDefault.radii.round, width: 200, height: 200, justifyContent: "center", alignItems: "center", position: "relative", overflow: "visible" };
size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, tintColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", right: 10, top: 10, width: 40, height: 40, flex: 1, justifyContent: "center" };
obj3 = { tintColor: nativeDefault.colors.WHITE, alignSelf: "center" };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let avatarSource;
  let items;
  let onSelectAvatar;
  let showPendingAvatar;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(19);
  ({ avatarSource, showPendingAvatar, onSelectAvatar } = arg0);
  const tmp5 = closure_6();
  if (!(undefined !== showPendingAvatar && showPendingAvatar)) {
    tmp7 = AssetRegistryDefault2;
  } else {
    tmp7 = avatarSource;
  }
  if (undefined !== showPendingAvatar && showPendingAvatar) {
    let defaultLogoStyle;
    let first;
    if (null != avatarSource) {
      defaultLogoStyle = tmp5.uploadedAvatarStyle;
    }
    const _Symbol = Symbol;
    const avatarContainer = tmp5.avatarContainer;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t["70lEQe"]);
      cResult[0] = stringResult;
      first = stringResult;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === tmp7) {
      let tmp13;
      let tmp17;
      if (cResult[2] === defaultLogoStyle) {
        tmp13 = cResult[3];
      }
      if (cResult[4] !== tmp5.uploadAvatarIcon) {
        const obj2 = { size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault, style: tmp5.uploadAvatarIcon };
        const Icon = native.Icon;
        const tmp20 = React3(Icon, obj2);
        cResult[4] = tmp5.uploadAvatarIcon;
        cResult[5] = tmp20;
        tmp17 = tmp20;
      } else {
        tmp17 = cResult[5];
      }
      if (cResult[6] === tmp5.uploadAvatarWrapper) {
        let tmp21;
        if (cResult[7] === tmp17) {
          tmp21 = cResult[8];
        }
        if (cResult[9] === tmp5.avatarWrapper) {
          if (cResult[10] === tmp13) {
            let tmp25;
            if (cResult[11] === tmp21) {
              tmp25 = cResult[12];
            }
            if (cResult[13] === onSelectAvatar) {
              let tmp29;
              if (cResult[14] === tmp25) {
                tmp29 = cResult[15];
              }
              if (cResult[16] === tmp5.avatarContainer) {
                let tmp32;
                if (cResult[17] === tmp29) {
                  tmp32 = cResult[18];
                }
                return tmp32;
              }
              const obj3 = { style: avatarContainer, children: tmp29 };
              const tmp35 = React3(View, obj3);
              cResult[16] = tmp5.avatarContainer;
              cResult[17] = tmp29;
              cResult[18] = tmp35;
              tmp32 = tmp35;
            }
            const obj4 = { onPress: onSelectAvatar, accessibilityRole: "button", accessibilityLabel: first, children: tmp25 };
            const tmp31 = React3(Pressables.PressableOpacity, obj4);
            cResult[13] = onSelectAvatar;
            cResult[14] = tmp25;
            cResult[15] = tmp31;
            tmp29 = tmp31;
          }
        }
        const obj5 = { style: tmp5.avatarWrapper, children: items };
        items = [tmp13, tmp21];
        const tmp28 = hasOwnProperty(View, obj5);
        cResult[9] = tmp5.avatarWrapper;
        cResult[10] = tmp13;
        cResult[11] = tmp21;
        cResult[12] = tmp28;
        tmp25 = tmp28;
      }
      const obj6 = { style: tmp5.uploadAvatarWrapper, children: tmp17 };
      const tmp24 = React3(View, obj6);
      cResult[6] = tmp5.uploadAvatarWrapper;
      cResult[7] = tmp17;
      cResult[8] = tmp24;
      tmp21 = tmp24;
    }
    const obj7 = { resizeMode: "contain", style: defaultLogoStyle, source: tmp7 };
    const tmp16 = React3(FastImageDefault, obj7);
    cResult[1] = tmp7;
    cResult[2] = defaultLogoStyle;
    cResult[3] = tmp16;
    tmp13 = tmp16;
  }
  defaultLogoStyle = tmp5.defaultLogoStyle;
}) : ((onSelectAvatar) => {
  let Icon;
  let PressableOpacity;
  let avatarSource;
  let intl;
  let items;
  let obj2;
  let obj3;
  let obj6;
  let showPendingAvatar;
  let tmp3;
  ({ avatarSource, showPendingAvatar } = onSelectAvatar);
  if (showPendingAvatar === undefined) {
    showPendingAvatar = false;
  }
  onSelectAvatar = onSelectAvatar.onSelectAvatar;
  const tmp = closure_6();
  if (!showPendingAvatar) {
    tmp3 = AssetRegistryDefault2;
  } else {
    tmp3 = avatarSource;
  }
  if (showPendingAvatar) {
    let defaultLogoStyle;
    if (null != avatarSource) {
      defaultLogoStyle = tmp.uploadedAvatarStyle;
    }
    const obj = { style: tmp.avatarContainer, children: React3(PressableOpacity, obj2) };
    obj2 = { onPress: onSelectAvatar, accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t["70lEQe"]), children: hasOwnProperty(View, obj3) };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { style: tmp.avatarWrapper, children: items };
    const obj4 = { resizeMode: "contain", style: defaultLogoStyle, source: tmp3 };
    items = [React3(FastImageDefault, obj4), ];
    const obj5 = { style: tmp.uploadAvatarWrapper, children: React3(Icon, obj6) };
    obj6 = { size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault, style: tmp.uploadAvatarIcon };
    Icon = native.Icon;
    items[1] = React3(View, obj5);
    return React3(View, obj);
  }
  defaultLogoStyle = tmp.defaultLogoStyle;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/avatar/native/components/TouchableUploadAvatar.tsx");

export default tmp5;