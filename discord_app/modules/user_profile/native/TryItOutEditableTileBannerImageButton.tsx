// === Module 14913: TryItOutEditableTileBannerImageButton ===

// Module 14913 (TryItOutEditableTileBannerImageButton)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import UserSettings from "UserSettings" /* 2041 */;
import FastImageDefault from "FastImage" /* 6156 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8310 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 14912 */;
import useDesaturatedUserColorValueDefault from "useDesaturatedUserColorValue" /* 14914 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 14915 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8284 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ColorUtils = fn(1103);
let closure_9 = ColorUtils.hex2int(nativeDefault.unsafe_rawColors.PRIMARY_800);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditableTileBannerImageButtonBase(userId) {
  const cResult = c.c(12);
  ({ bannerChange, currentProfileBanner, onPress } = userId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const obj3 = useDisplayProfileDefault(userId.userId);
  if (obj3 != null) {
    let tmp11 = !stateFromStores;
    if (!stateFromStores) {
      tmp11 = setting;
    }
    const previewBanner = obj3.getPreviewBanner(bannerChange, tmp11, 600);
  }
  let primaryColor;
  if (obj3 != null) {
    primaryColor = obj3.primaryColor;
  }
  if (primaryColor == null) {
    primaryColor = closure_9;
  }
  const tmp9Result = UserProfileEditableTileBaseDefault;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.yiRnNO);
    cResult[2] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === bannerChange) {
    if (cResult[4] === currentProfileBanner) {
      let tmp16 = cResult[5];
    }
    if (null != previewBanner) {
      const obj2 = { source: null, style: null, resizeMode: "cover" };
      const tmp9Result2 = FastImageDefault;
      obj2.source = AvatarUtils.makeSource(previewBanner);
      obj2.style = React3.absoluteFill;
      let tmp21 = <tmp9Result2 source={null} style={null} resizeMode="cover" />;
      let tmp22 = jsx;
      const tmpResult3 = AvatarUtils;
    } else {
      const obj4 = { style: null };
      const items1 = [React3.absoluteFill, ];
      const obj5 = { backgroundColor: useDesaturatedUserColorValueDefault(primaryColor).hex };
      items1[1] = obj5;
      obj4.style = items1;
      tmp21 = <React4 style={null} />;
      tmp22 = jsx;
    }
    if (cResult[6] === tmp9Result) {
      if (cResult[7] === onPress) {
        if (cResult[8] === tmp14) {
          if (cResult[9] === tmp16) {
            if (cResult[10] === tmp21) {
              let tmp26 = cResult[11];
            }
            return tmp26;
          }
        }
      }
    }
    const obj6 = { onPress, accessibilityLabel: tmp14, accessibilityValue: tmp16, children: tmp21 };
    const tmp22Result = tmp22(tmp9Result, obj6);
    cResult[6] = tmp9Result;
    cResult[7] = onPress;
    cResult[8] = tmp14;
    cResult[9] = tmp16;
    cResult[10] = tmp21;
    cResult[11] = tmp22Result;
    tmp26 = tmp22Result;
  }
  const tmpResult = initialize;
  const bannerAccessibleValue = UserProfileEditingAccessibilityUtils.getBannerAccessibleValue(bannerChange, currentProfileBanner);
  cResult[3] = bannerChange;
  cResult[4] = currentProfileBanner;
  cResult[5] = bannerAccessibleValue;
  tmp16 = bannerAccessibleValue;
  const tmpResult4 = UserProfileEditingAccessibilityUtils;
}) : (function EditableTileBannerImageButtonBase(bannerChange) {
  bannerChange = bannerChange.bannerChange;
  ({ userId, currentProfileBanner, onPress } = bannerChange);
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const GifAutoPlay = UserSettings.GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const obj2 = useDisplayProfileDefault(userId);
  let previewBanner;
  if (obj2 != null) {
    let tmp7 = !stateFromStores;
    if (!stateFromStores) {
      tmp7 = setting;
    }
    previewBanner = obj2.getPreviewBanner(bannerChange, tmp7, 600);
  }
  let primaryColor;
  if (obj2 != null) {
    primaryColor = obj2.primaryColor;
  }
  if (primaryColor == null) {
    primaryColor = closure_9;
  }
  const obj3 = { onPress, accessibilityLabel: null, accessibilityValue: null, children: null };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.yiRnNO);
  const tmp5Result = UserProfileEditableTileBaseDefault;
  obj3.accessibilityValue = UserProfileEditingAccessibilityUtils.getBannerAccessibleValue(bannerChange, currentProfileBanner);
  if (null != previewBanner) {
    const obj4 = { source: null, style: null, resizeMode: "cover" };
    const tmp5Result2 = FastImageDefault;
    obj4.source = AvatarUtils.makeSource(previewBanner);
    obj4.style = React3.absoluteFill;
    let tmp9Result = <tmp5Result2 source={null} style={null} resizeMode="cover" />;
    const tmpResult2 = AvatarUtils;
  } else {
    const obj5 = { style: null };
    const items1 = [React3.absoluteFill, ];
    const obj6 = { backgroundColor: useDesaturatedUserColorValueDefault(primaryColor).hex };
    items1[1] = obj6;
    obj5.style = items1;
    tmp9Result = <React4 style={null} />;
  }
  obj3.children = tmp9Result;
  return <tmp5Result onPress={onPress} accessibilityLabel={null} accessibilityValue={null}>{null}</tmp5Result>;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/TryItOutEditableTileBannerImageButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TryItOutEditableTileBannerImageButton(user) {
  const cResult = user(576).c(9);
  user = user.user;
  const onPress = user.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore, UserProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function o() {
      const obj = { tryItOutBanner: UserProfileSettingsStore.getTryItOutChanges().tryItOutBanner, currentProfileBanner: null };
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let banner;
      if (userProfile != null) {
        banner = userProfile.banner;
      }
      obj.currentProfileBanner = banner;
      return obj;
    };
    const items1 = [user.id];
    cResult[1] = user.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = user(576);
  const stateFromStoresObject = user(504).useStateFromStoresObject(first, tmp7, tmp8);
  ({ tryItOutBanner, currentProfileBanner } = stateFromStoresObject);
  if (cResult[4] === currentProfileBanner) {
    if (cResult[5] === onPress) {
      if (cResult[6] === tryItOutBanner) {
        if (cResult[7] === user.id) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = <closure_10 userId={user.id} bannerChange={tryItOutBanner} currentProfileBanner={currentProfileBanner} onPress={onPress} />;
  cResult[4] = currentProfileBanner;
  cResult[5] = onPress;
  cResult[6] = tryItOutBanner;
  cResult[7] = user.id;
  cResult[8] = tmp11;
  tmp10 = tmp11;
  const obj2 = { userId: user.id, bannerChange: tryItOutBanner, currentProfileBanner, onPress };
  const tmpResult = user(504);
}) : (function TryItOutEditableTileBannerImageButton(onPress) {
  const user = onPress.user;
  const items = [UserProfileSettingsStore, UserProfileStore];
  const items1 = [user.id];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => {
    const obj = { tryItOutBanner: UserProfileSettingsStore.getTryItOutChanges().tryItOutBanner, currentProfileBanner: null };
    const userProfile = UserProfileStore.getUserProfile(user.id);
    let banner;
    if (userProfile != null) {
      banner = userProfile.banner;
    }
    obj.currentProfileBanner = banner;
    return obj;
  }, items1);
  return <closure_10 userId={user.id} bannerChange={stateFromStoresObject.tryItOutBanner} currentProfileBanner={stateFromStoresObject.currentProfileBanner} onPress={onPress.onPress} />;
});