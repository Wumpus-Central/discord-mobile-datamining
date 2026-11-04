// === Module 16785: UserProfileTryItOutEditForm ===

// Module 16785 (UserProfileTryItOutEditForm)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import native from "native" /* 5207 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7462 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8881 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8898 */;
import useProfileThemeDefault from "useProfileTheme" /* 8941 */;
import useUserProfileColors from "useUserProfileColors" /* 8952 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8955 */;
import useBadgesDefault from "useBadges" /* 8956 */;
import DiceIcon from "DiceIcon" /* 9676 */;
import userSettingToActivity from "userSettingToActivity" /* 11582 */;
import UserProfileGradientContainerDefault from "UserProfileGradientContainer" /* 11583 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 11584 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 11601 */;
import ThemeContextProvider_RootThemeContextProvider from "ThemeContextProvider/RootThemeContextProvider" /* 12253 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16680 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16693 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 16696 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 16702 */;
import usePremiumTryItOutPresetShuffleDefault from "usePremiumTryItOutPresetShuffle" /* 16752 */;
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields" /* 16775 */;
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell" /* 16786 */;
import EditUserProfileAvatarDefault from "EditUserProfileAvatar" /* 16787 */;
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell" /* 16789 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8872 */;

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
  obj.children = metroImportDefault(UserProfileEditBannerButtonDefault, obj2);
  return metroImportDefault(useAnalyticsLocations.AnalyticsLocationProvider, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
let closure_6 = fn(7513).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
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
  items = [UserProfileSettingsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    tryItOutChanges = tryItOutChanges.getTryItOutChanges();
    return { tryItOutAvatar: tryItOutChanges.tryItOutAvatar, tryItOutBanner: tryItOutChanges.tryItOutBanner, tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors, tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles };
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
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user: currentUser, displayProfile: tmp10Result, pendingThemeColors: tryItOutThemeColors, isPreview: true }));
  const tmp15 = useProfileThemeDefault({ user: currentUser, displayProfile: tmp10Result, pendingThemeColors: tryItOutThemeColors, isPreview: true });
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
  const items2 = [metroImportDefault(React4, { style: tmp4.bounceOffset }), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj8 = { style: tmp4.bounceOffset };
  const tmp5Result4 = useUserProfileColors;
  const items3 = [metroImportDefault(EditableBanner, { user: currentUser, displayProfile: tmp10Result, pendingAvatarSrc, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors }), ];
  const obj10 = { style: null, children: metroImportDefault(EditUserProfileAvatarDefault, { user: currentUser, disableStatus: true, statusStyle: obj5, isTryItOut: true, isUserProfileEditingRefresh: true }) };
  const items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj5;
  obj10.style = items4;
  const items5 = [metroImportDefault(React4, obj10), ];
  const obj11 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: num, paddingBottom: sum1 };
  obj11.containerStyle = items6;
  const tmpResult = UserProfileGradientContainerDefault;
  const items7 = [metroImportDefault(UserProfileCustomStatusBubbleDefault, { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble }), metroImportDefault(UserProfilePrimaryInfoDefault, { user: currentUser, displayName: str2, pronouns: str3, badges: tmp14, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles }), ];
  const obj13 = { style: null, children: null };
  const items8 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  obj13.style = items8;
  let tmp19Result = "inline" === obj.useTryItOutMobileRefreshConfig("UserProfileTryItOutEditForm").shuffleButtonLocation;
  if (tmp19Result) {
    const obj14 = { icon: null, text: null, variant: "secondary", onPress: null };
    const obj15 = { size: "sm", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
    obj14.icon = metroImportDefault(DiceIcon.DiceIcon, obj15);
    const intl = util.intl;
    obj14.text = intl.string(util.t.VzqqFC);
    obj14.onPress = tmp6;
    tmp19Result = metroImportDefault(components_Button_Button.Button, obj14);
  }
  const obj16 = { children: null };
  const obj17 = { children: null };
  const items9 = [tmp19Result, metroImportDefault(UserProfileTryItOutFieldsDefault, { currentUser, mode: "edit", initialTarget: initialTarget.initialTarget })];
  obj13.children = items9;
  items7[2] = React5(React4, obj13);
  obj11.children = items7;
  items5[1] = React5(UserProfileGradientContainerDefault, obj11);
  obj17.children = items5;
  items3[1] = React5(React4, obj17);
  obj9.children = items3;
  items2[1] = React5(tmpResult, obj9);
  obj16.children = items2;
  const items10 = [React5(React3, obj16), ];
  const obj12 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble };
  const tmpResult2 = UserProfileGradientContainerDefault;
  items10[1] = metroImportDefault(ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme, { children: metroImportDefault(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout }) });
  obj7.children = items10;
  obj6.children = React5(React4, obj7);
  return metroImportDefault(native.ThemeContextProvider, obj6);
};