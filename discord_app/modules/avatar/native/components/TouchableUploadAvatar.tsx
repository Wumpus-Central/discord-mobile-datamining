// === Module 17445: TouchableUploadAvatar ===

// Module 17445 (TouchableUploadAvatar)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 1178 */;
import PressableBase from "PressableBase" /* 5123 */;
import preloadDefault from "preload" /* 5587 */;
import registerAssetDefault from "registerAsset" /* 12773 */;
import registerAssetDefault2 from "registerAsset" /* 13862 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { avatarContainer: { display: "flex", paddingTop: 24 }, defaultLogoStyle: null, uploadedAvatarStyle: null, avatarWrapper: null, uploadAvatarWrapper: null, uploadAvatarIcon: null };
createCacheKey = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT, width: 96 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 200, height: 200, borderRadius: 100, position: "relative" };
createCacheKey[3] = { borderColor: ThemesDefault.colors.BORDER_MUTED, borderStyle: "dashed", borderWidth: 2, borderRadius: ThemesDefault.radii.round, width: 200, height: 200, justifyContent: "center", alignItems: "center", position: "relative", overflow: "visible" };
let obj1 = { borderColor: ThemesDefault.colors.BORDER_MUTED, borderStyle: "dashed", borderWidth: 2, borderRadius: ThemesDefault.radii.round, width: 200, height: 200, justifyContent: "center", alignItems: "center", position: "relative", overflow: "visible" };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.round, tintColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", right: 10, top: 10, width: 40, height: 40, flex: 1, justifyContent: "center" };
let obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.round, tintColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", right: 10, top: 10, width: 40, height: 40, flex: 1, justifyContent: "center" };
createCacheKey[5] = { tintColor: ThemesDefault.colors.WHITE, alignSelf: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj3 = { tintColor: ThemesDefault.colors.WHITE, alignSelf: "center" };
const result = require("set").fileFinishedImporting("modules/avatar/native/components/TouchableUploadAvatar.tsx");

export default function TouchableUploadAvatar(onSelectAvatar) {
  ({ avatarSource, showPendingAvatar } = onSelectAvatar);
  if (showPendingAvatar === undefined) {
    showPendingAvatar = false;
  }
  const tmp = callback3();
  if (!showPendingAvatar) {
    let tmp3 = registerAssetDefault2;
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
    obj1 = { resizeMode: "contain", style: null, source: null };
    obj1[1] = defaultLogoStyle;
    obj1[2] = tmp3;
    const items = [callback(preloadDefault, obj1), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.uploadAvatarWrapper;
    const obj3 = { size: null, source: null, style: null };
    obj3[0] = Button.Icon.Sizes.MEDIUM;
    obj3[1] = registerAssetDefault;
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