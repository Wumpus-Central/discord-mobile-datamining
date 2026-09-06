// === Module 17445: TouchableUploadAvatar ===

// Module 17445 (TouchableUploadAvatar)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Pressables from "Pressables" /* 5123 */;
import FastImageDefault from "FastImage" /* 5587 */;
import _modDef12773 from "module_12773" /* 12773 */;
import _modDef13862 from "module_13862" /* 13862 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { avatarContainer: { display: "flex", paddingTop: 24 }, defaultLogoStyle: null, uploadedAvatarStyle: null, avatarWrapper: null, uploadAvatarWrapper: null, uploadAvatarIcon: null };
createStyles = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 96 };
createStyles.defaultLogoStyle = createStyles;
createStyles.uploadedAvatarStyle = { width: 200, height: 200, borderRadius: 100, position: "relative" };
let size = { borderColor: nativeDefault.colors.BORDER_MUTED, borderStyle: "dashed", borderWidth: 2, borderRadius: nativeDefault.radii.round, width: 200, height: 200, justifyContent: "center", alignItems: "center", position: "relative", overflow: "visible" };
createStyles.avatarWrapper = size;
const size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, tintColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", right: 10, top: 10, width: 40, height: 40, flex: 1, justifyContent: "center" };
createStyles.uploadAvatarWrapper = size1;
createStyles.uploadAvatarIcon = { tintColor: nativeDefault.colors.WHITE, alignSelf: "center" };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/native/components/TouchableUploadAvatar.tsx");

export default function TouchableUploadAvatar(onSelectAvatar) {
  ({ avatarSource, showPendingAvatar } = onSelectAvatar);
  if (showPendingAvatar === undefined) {
    showPendingAvatar = false;
  }
  const tmp = closure_6();
  if (!showPendingAvatar) {
    let tmp3 = _modDef13862;
  } else {
    tmp3 = avatarSource;
  }
  if (showPendingAvatar) {
    if (null != avatarSource) {
      let defaultLogoStyle = tmp.uploadedAvatarStyle;
    }
    let obj = { style: tmp.avatarContainer, children: null };
    obj = { onPress: onSelectAvatar.onSelectAvatar, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["70lEQe"]);
    obj = { style: tmp.avatarWrapper, children: null };
    const obj1 = { resizeMode: "contain", style: defaultLogoStyle, source: tmp3 };
    const items = [React4(FastImageDefault, obj1), ];
    const obj2 = { style: tmp.uploadAvatarWrapper, children: null };
    const obj3 = { size: native.Icon.Sizes.MEDIUM, source: _modDef12773, style: tmp.uploadAvatarIcon };
    obj2.children = React4(native.Icon, obj3);
    items[1] = React4(View, obj2);
    obj.children = items;
    obj.children = hasOwnProperty(View, obj);
    obj.children = React4(Pressables.PressableOpacity, obj);
    return React4(View, obj);
  }
  defaultLogoStyle = tmp.defaultLogoStyle;
};