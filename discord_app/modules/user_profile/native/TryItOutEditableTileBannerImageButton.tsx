// === Module 16502: TryItOutEditableTileBannerImageButton ===

// Module 16502 (TryItOutEditableTileBannerImageButton)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import UserSettings from "UserSettings" /* 4834 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8749 */;
import UserProfileEditingAccessibilityUtils from "UserProfileEditingAccessibilityUtils" /* 16494 */;
import useDesaturatedUserColorValueDefault from "useDesaturatedUserColorValue" /* 16503 */;
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase" /* 16504 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import UserProfileStore from "UserProfileStore" /* 7765 */;

require = fn;
function EditableTileBannerImageButtonBase(bannerChange) {
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
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ColorUtils = fn(1091);
let closure_9 = ColorUtils.hex2int(nativeDefault.unsafe_rawColors.PRIMARY_800);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/TryItOutEditableTileBannerImageButton.tsx");

export default function TryItOutEditableTileBannerImageButton(onPress) {
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
  return <EditableTileBannerImageButtonBase userId={user.id} bannerChange={stateFromStoresObject.tryItOutBanner} currentProfileBanner={stateFromStoresObject.currentProfileBanner} onPress={onPress.onPress} />;
};