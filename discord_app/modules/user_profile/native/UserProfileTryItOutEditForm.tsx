// discord_app/modules/user_profile/native/UserProfileTryItOutEditForm.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import RecentAvatarUtils from "../../recent_avatars/RecentAvatarUtils.tsx";
import useDisplayProfileDefault from "../hooks/useDisplayProfile.tsx";
import useProfileThemeDefault from "../hooks/useProfileTheme.tsx";
import useUserProfileColors from "../hooks/native/useUserProfileColors.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import useBadgesDefault from "../hooks/useBadges.tsx";
import DiceIcon from "../../../design/components/Icon/native/redesign/generated/DiceIcon.tsx";
import userSettingToActivity from "../../custom_status/utils/userSettingToActivity.tsx";
import UserProfileGradientContainerDefault from "UserProfileGradientContainer.tsx";
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble.tsx";
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo.tsx";
import ThemeContextProvider_RootThemeContextProvider from "../../../design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx";
import useOpenChangeBannerActionSheetDefault from "../hooks/native/useOpenChangeBannerActionSheet.tsx";
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton.tsx";
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles.tsx";
import UserProfilePremiumTryItOutMobileRefreshExperiment from "../experiments/UserProfilePremiumTryItOutMobileRefreshExperiment.tsx";
import usePremiumTryItOutPresetShuffleDefault from "../hooks/usePremiumTryItOutPresetShuffle.tsx";
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields.tsx";
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell.tsx";
import EditUserProfileAvatarDefault from "EditUserProfileAvatar.tsx";
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function EditableBanner(user) {
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  const obj = { value: analyticsLocations, children: null };
  const obj2 = {};
  const tmp3 = useOpenChangeBannerActionSheetDefault({ user, analyticsLocations, isTryItOut: true });
  const merged1 = Object.assign(merged);
  obj2.user = user;
  obj2.onPressEdit = tmp3;
  const intl = util.intl;
  obj2.editButtonAccessibilityLabel = intl.string(util.t.VqsHy0);
  obj2.bannerSafeArea = 12;
  obj2.isUserProfileEditingRefresh = true;
  obj.children = React5(UserProfileEditBannerButtonDefault, obj2);
  return React5(useAnalyticsLocations.AnalyticsLocationProvider, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
let closure_6 = fn(7371).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutEditForm.tsx");

export default function UserProfileTryItOutEditForm(initialTarget) {
  const currentUser = initialTarget.currentUser;
  const tmp3 = UserProfileSharedStylesDefault();
  const tmp4 = UserProfileEditFormSharedStylesDefault();
  const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
  const tmp6 = usePremiumTryItOutPresetShuffleDefault();
  const tmp7 = useSafeAreaInsetsDefault();
  const floatingUpsellHeight = UserProfileFloatingUpsell.useFloatingUpsellHeight();
  ({ height, onLayout } = floatingUpsellHeight);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    tryItOutChanges = tryItOutChanges.getTryItOutChanges();
    return {
      tryItOutAvatar: tryItOutChanges.tryItOutAvatar,
      tryItOutBanner: tryItOutChanges.tryItOutBanner,
      tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors,
      tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles,
    };
  });
  ({ tryItOutThemeColors, tryItOutAvatar, tryItOutBanner, tryItOutDisplayNameStyles } = stateFromStoresObject);
  let str = currentUser.id;
  if (str == null) {
    str = "";
  }
  const tmp10Result = useDisplayProfileDefault(str);
  const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
  const tmp5Result = userSettingToActivity;
  const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: currentUser.id, image: tryItOutAvatar });
  const obj4 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmp5Result3 = RecentAvatarUtils;
  const tmp14 = useBadgesDefault(tmp10Result);
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({
    user: currentUser,
    displayProfile: tmp10Result,
    pendingThemeColors: tryItOutThemeColors,
    isPreview: true,
  }));
  const tmp15 = useProfileThemeDefault({
    user: currentUser,
    displayProfile: tmp10Result,
    pendingThemeColors: tryItOutThemeColors,
    isPreview: true,
  });
  const userProfileColors = useUserProfileColors.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (null == customStatusActivity) {
    num = closure_6;
  }
  const sum = tmp7.bottom + height;
  const obj5 = { backgroundColor: userProfileColors.avatarBackground };
  let str2 = currentUser.globalName;
  const sum1 = sum + nativeDefault.space.PX_16;
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp10Result != null) {
    str3 = tmp10Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  const obj6 = { theme, primaryColor, secondaryColor, children: null };
  const obj7 = { style: null, children: null };
  const items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  obj7.style = items1;
  const items2 = [React5(React4, { style: tmp4.bounceOffset })];
  const obj9 = {
    fallbackBackground: gradientFallbackBackground,
    primaryColor,
    secondaryColor,
    containerStyle: { backgroundColor: gradientSecondaryBackground },
    children: null,
  };
  const obj8 = { style: tmp4.bounceOffset };
  const tmp5Result4 = useUserProfileColors;
  const items3 = [
    React5(EditableBanner, {
      user: currentUser,
      displayProfile: tmp10Result,
      pendingAvatarSrc,
      pendingBanner: tryItOutBanner,
      pendingThemeColors: tryItOutThemeColors,
    }),
  ];
  const obj10 = {
    style: null,
    children: React5(EditUserProfileAvatarDefault, {
      user: currentUser,
      disableStatus: true,
      statusStyle: obj5,
      isTryItOut: true,
      isUserProfileEditingRefresh: true,
    }),
  };
  const items4 = [, , ,];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj5;
  obj10.style = items4;
  const items5 = [React5(React4, obj10)];
  const obj11 = {
    fallbackBackground: gradientFallbackBackground,
    primaryColor,
    secondaryColor,
    containerStyle: null,
    children: null,
  };
  const items6 = [, ,];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: num, paddingBottom: sum1 };
  obj11.containerStyle = items6;
  const tmpResult = UserProfileGradientContainerDefault;
  const items7 = [
    React5(UserProfileCustomStatusBubbleDefault, {
      customStatusActivity,
      hasCustomProfileTheme: null != primaryColor,
      style: tmp3.customStatusBubble,
      emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble,
    }),
    React5(UserProfilePrimaryInfoDefault, {
      user: currentUser,
      displayName: str2,
      pronouns: str3,
      badges: tmp14,
      badgeContainerBackground: containerBackground,
      displayNameAccessibilityRole: "header",
      pendingDisplayNameStyles: tryItOutDisplayNameStyles,
    }),
  ];
  const obj13 = { style: null, children: null };
  const items8 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  obj13.style = items8;
  let tmp19Result =
    "inline" === obj.useTryItOutMobileRefreshConfig("UserProfileTryItOutEditForm").shuffleButtonLocation;
  if (tmp19Result) {
    const obj14 = { icon: null, text: null, variant: "secondary", onPress: null };
    const obj15 = { size: "sm", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
    obj14.icon = React5(DiceIcon.DiceIcon, obj15);
    const intl = util.intl;
    obj14.text = intl.string(util.t.VzqqFC);
    obj14.onPress = tmp6;
    tmp19Result = React5(components_Button_Button.Button, obj14);
  }
  const obj16 = { children: null };
  const obj17 = { children: null };
  const items9 = [
    tmp19Result,
    React5(UserProfileTryItOutFieldsDefault, { currentUser, mode: "edit", initialTarget: initialTarget.initialTarget }),
  ];
  obj13.children = items9;
  items7[2] = React6(React4, obj13);
  obj11.children = items7;
  items5[1] = React6(UserProfileGradientContainerDefault, obj11);
  obj17.children = items5;
  items3[1] = React6(React4, obj17);
  obj9.children = items3;
  items2[1] = React6(tmpResult, obj9);
  obj16.children = items2;
  const items10 = [React6(React3, obj16)];
  const obj12 = {
    customStatusActivity,
    hasCustomProfileTheme: null != primaryColor,
    style: tmp3.customStatusBubble,
    emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble,
  };
  const tmpResult2 = UserProfileGradientContainerDefault;
  items10[1] = React5(ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme, {
    children: React5(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout }),
  });
  obj7.children = items10;
  obj6.children = React6(React4, obj7);
  return React5(native.ThemeContextProvider, obj6);
}
