// discord_app/modules/user_profile/native/TryItOutEditableTileBannerImageButton.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useDisplayProfileDefault from "../hooks/useDisplayProfile.tsx";
import UserProfileEditingAccessibilityUtils from "../UserProfileEditingAccessibilityUtils.tsx";
import useDesaturatedUserColorValueDefault from "../../colors/useDesaturatedUserColorValue.tsx";
import UserProfileEditableTileBaseDefault from "UserProfileEditableTileBase.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

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
  obj3.accessibilityValue = UserProfileEditingAccessibilityUtils.getBannerAccessibleValue(
    bannerChange,
    currentProfileBanner,
  );
  if (null != previewBanner) {
    const obj4 = { source: null, style: null, resizeMode: "cover" };
    const tmp5Result2 = FastImageDefault;
    obj4.source = AvatarUtils.makeSource(previewBanner);
    obj4.style = React3.absoluteFill;
    let tmp9Result = <tmp5Result2 source={null} style={null} resizeMode="cover" />;
    const tmpResult2 = AvatarUtils;
  } else {
    const obj5 = { style: null };
    const items1 = [React3.absoluteFill];
    const obj6 = { backgroundColor: useDesaturatedUserColorValueDefault(primaryColor).hex };
    items1[1] = obj6;
    obj5.style = items1;
    tmp9Result = <React4 style={null} />;
  }
  obj3.children = tmp9Result;
  return (
    <tmp5Result onPress={onPress} accessibilityLabel={null} accessibilityValue={null}>
      {null}
    </tmp5Result>
  );
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
  const stateFromStoresObject = user(504).useStateFromStoresObject(
    items,
    () => {
      const obj = {
        tryItOutBanner: UserProfileSettingsStore.getTryItOutChanges().tryItOutBanner,
        currentProfileBanner: null,
      };
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let banner;
      if (userProfile != null) {
        banner = userProfile.banner;
      }
      obj.currentProfileBanner = banner;
      return obj;
    },
    items1,
  );
  return (
    <EditableTileBannerImageButtonBase
      userId={user.id}
      bannerChange={stateFromStoresObject.tryItOutBanner}
      currentProfileBanner={stateFromStoresObject.currentProfileBanner}
      onPress={onPress.onPress}
    />
  );
}
