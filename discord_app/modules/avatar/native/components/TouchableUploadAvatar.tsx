// discord_app/modules/avatar/native/components/TouchableUploadAvatar.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/12205_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/13290_registerAsset.js";
import { preload } from "../../../../components_native/common/FastImage.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { avatarContainer: { display: "flex", paddingTop: 24 }, defaultLogoStyle: null, uploadedAvatarStyle: null, avatarWrapper: null, uploadAvatarWrapper: null, uploadAvatarIcon: null };
createCacheKey = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, width: 96 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 200, height: 200, borderRadius: 100, position: "relative" };
createCacheKey[3] = { borderColor: require("Themes").colors.BORDER_MUTED, borderStyle: "dashed", borderWidth: 2, borderRadius: require("Themes").radii.round, width: 200, height: 200, justifyContent: "center", alignItems: "center", position: "relative", overflow: "visible" };
let obj1 = { borderColor: require("Themes").colors.BORDER_MUTED, borderStyle: "dashed", borderWidth: 2, borderRadius: require("Themes").radii.round, width: 200, height: 200, justifyContent: "center", alignItems: "center", position: "relative", overflow: "visible" };
createCacheKey[4] = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.round, tintColor: require("Themes").colors.BACKGROUND_BASE_LOW, position: "absolute", right: 10, top: 10, width: 40, height: 40, flex: 1, justifyContent: "center" };
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.round, tintColor: require("Themes").colors.BACKGROUND_BASE_LOW, position: "absolute", right: 10, top: 10, width: 40, height: 40, flex: 1, justifyContent: "center" };
createCacheKey[5] = { tintColor: require("Themes").colors.WHITE, alignSelf: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { tintColor: require("Themes").colors.WHITE, alignSelf: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/avatar/native/components/TouchableUploadAvatar.tsx");

export default function TouchableUploadAvatar(onSelectAvatar) {
  let avatarSource;
  let showPendingAvatar;
  ({ avatarSource, showPendingAvatar } = onSelectAvatar);
  if (showPendingAvatar === undefined) {
    showPendingAvatar = false;
  }
  const tmp = createCacheKey();
  if (!showPendingAvatar) {
    let tmp3 = registerAsset;
  } else {
    tmp3 = avatarSource;
  }
  if (showPendingAvatar) {
    if (null != avatarSource) {
      let defaultLogoStyle = tmp.uploadedAvatarStyle;
    }
    let obj = { style: null, children: null };
    obj[0] = tmp.avatarContainer;
    obj = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    obj[0] = onSelectAvatar.onSelectAvatar;
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t["70lEQe"]);
    obj = { style: null, children: null };
    obj[0] = tmp.avatarWrapper;
    const obj1 = { resizeMode: "contain", style: null, source: null };
    obj1[1] = defaultLogoStyle;
    obj1[2] = tmp3;
    const items = [callback(preload, obj1), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.uploadAvatarWrapper;
    const obj3 = { size: null, source: null, style: null };
    obj3[0] = Button.Icon.Sizes.MEDIUM;
    obj3[1] = registerAsset;
    obj3[2] = tmp.uploadAvatarIcon;
    obj2[1] = callback(Button.Icon, obj3);
    items[1] = callback(View, obj2);
    obj[1] = items;
    obj[3] = callback2(View, obj);
    obj[1] = callback(PressableBase.PressableOpacity, obj);
    return callback(View, obj);
  }
  defaultLogoStyle = tmp.defaultLogoStyle;
};