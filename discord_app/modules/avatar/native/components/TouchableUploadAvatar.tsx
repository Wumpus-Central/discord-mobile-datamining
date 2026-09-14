// === Module 17560: TouchableUploadAvatar ===

// Module 17560 (TouchableUploadAvatar)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import Pressables from "Pressables" /* 5204 */;
import FastImageDefault from "FastImage" /* 5668 */;
import _modDef12903 from "module_12903" /* 12903 */;
import _modDef13951 from "module_13951" /* 13951 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = { avatarContainer: { display: "flex", paddingTop: 24 }, defaultLogoStyle: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 96 }, uploadedAvatarStyle: { width: 200, height: 200, borderRadius: 100, position: "relative" }, avatarWrapper: null, uploadAvatarWrapper: null, uploadAvatarIcon: null };
let size = { borderColor: nativeDefault.colors.BORDER_MUTED, borderStyle: "dashed", borderWidth: 2, borderRadius: nativeDefault.radii.round, width: 200, height: 200, justifyContent: "center", alignItems: "center", position: "relative", overflow: "visible" };
obj2.avatarWrapper = size;
const size1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, tintColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", right: 10, top: 10, width: 40, height: 40, flex: 1, justifyContent: "center" };
obj2.uploadAvatarWrapper = size1;
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 96 };
obj2.uploadAvatarIcon = { tintColor: nativeDefault.colors.WHITE, alignSelf: "center" };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/avatar/native/components/TouchableUploadAvatar.tsx");

export default function TouchableUploadAvatar(onSelectAvatar) {
  ({ avatarSource, showPendingAvatar } = onSelectAvatar);
  if (showPendingAvatar === undefined) {
    showPendingAvatar = false;
  }
  const tmp = closure_6();
  if (!showPendingAvatar) {
    let tmp3 = _modDef13951;
  } else {
    tmp3 = avatarSource;
  }
  if (showPendingAvatar) {
    if (null != avatarSource) {
      let defaultLogoStyle = tmp.uploadedAvatarStyle;
    }
    const obj = { style: tmp.avatarContainer, children: null };
    const obj2 = { onPress: onSelectAvatar.onSelectAvatar, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t["70lEQe"]);
    const obj3 = { style: tmp.avatarWrapper, children: null };
    const obj4 = { resizeMode: "contain", style: defaultLogoStyle, source: tmp3 };
    const items = [React4(FastImageDefault, obj4), ];
    const obj5 = { style: tmp.uploadAvatarWrapper, children: null };
    const obj6 = { size: native.Icon.Sizes.MEDIUM, source: _modDef12903, style: tmp.uploadAvatarIcon };
    obj5.children = React4(native.Icon, obj6);
    items[1] = React4(View, obj5);
    obj3.children = items;
    obj2.children = hasOwnProperty(View, obj3);
    obj.children = React4(Pressables.PressableOpacity, obj2);
    return React4(View, obj);
  }
  defaultLogoStyle = tmp.defaultLogoStyle;
};