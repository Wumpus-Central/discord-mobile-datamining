// === Module 15631: UserProfileTryItOutEditForm ===

// Module 15631 (UserProfileTryItOutEditForm)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import native from "native" /* 4569 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7794 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 7796 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 7813 */;
import useProfileThemeDefault from "useProfileTheme" /* 7855 */;
import useUserProfileColors from "useUserProfileColors" /* 7866 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7869 */;
import useBadgesDefault from "useBadges" /* 7870 */;
import userSettingToActivity from "userSettingToActivity" /* 9012 */;
import UserProfileGradientContainerDefault from "UserProfileGradientContainer" /* 10773 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 10774 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10814 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 14371 */;
import EditUserProfileAvatarDefault from "EditUserProfileAvatar" /* 14377 */;
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell" /* 14422 */;
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell" /* 15632 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7787 */;

require = fn;
function EditableBanner(user) {
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6769)(analyticsLocations(6789).EDIT_BANNER).analyticsLocations;
  const items = [analyticsLocations, user];
  const callback = noop.useCallback(() => {
    const obj2 = { user, analyticsLocations, onBannerChange: null, isTryItOut: true };
    const obj = ActionSheetActionCreatorsDefault;
    obj2.onBannerChange = UserProfileActionCreators.setTryItOutBanner;
    obj.openLazy(asyncRequireImpl(14360, dependencyMap.paths), "Change Banner", obj2);
  }, items);
  let obj = { value: analyticsLocations, children: null };
  let obj2 = {};
  const tmp2 = analyticsLocations(6769);
  const merged1 = Object.assign(merged);
  obj2.user = user;
  obj2.onPressEdit = callback;
  const intl = user(1115).intl;
  obj2.editButtonAccessibilityLabel = intl.string(user(1115).t.VqsHy0);
  obj2.bannerSafeArea = 12;
  obj2.isUserProfileEditingRefresh = true;
  obj.children = closure_7(analyticsLocations(14358), obj2);
  return closure_7(user(6769).AnalyticsLocationProvider, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutEditForm.tsx");

export default function UserProfileTryItOutEditForm(currentUser) {
  currentUser = currentUser.currentUser;
  const tmp3 = UserProfileSharedStylesDefault();
  const tmp4 = UserProfileEditFormSharedStylesDefault();
  const tmp5 = useSafeAreaInsetsDefault();
  const floatingUpsellHeight = UserProfileFloatingUpsell.useFloatingUpsellHeight();
  ({ height, onLayout } = floatingUpsellHeight);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    tryItOutChanges = tryItOutChanges.getTryItOutChanges();
    return { tryItOutAvatar: tryItOutChanges.tryItOutAvatar, tryItOutBanner: tryItOutChanges.tryItOutBanner, tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors, tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles };
  });
  ({ tryItOutThemeColors, tryItOutAvatar, tryItOutBanner, tryItOutDisplayNameStyles } = stateFromStoresObject);
  let str = currentUser.id;
  if (str == null) {
    str = "";
  }
  const tmp9Result = useDisplayProfileDefault(str);
  const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
  const tmp6Result = userSettingToActivity;
  const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: currentUser.id, image: tryItOutAvatar });
  const obj3 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmp6Result3 = RecentAvatarUtils;
  const tmp13 = useBadgesDefault(tmp9Result);
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user: currentUser, displayProfile: tmp9Result, pendingThemeColors: tryItOutThemeColors, isPreview: true }));
  const tmp14 = useProfileThemeDefault({ user: currentUser, displayProfile: tmp9Result, pendingThemeColors: tryItOutThemeColors, isPreview: true });
  const userProfileColors = useUserProfileColors.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
  const sum = tmp5.bottom + height;
  const obj4 = { backgroundColor: avatarBackground };
  let str2 = currentUser.globalName;
  const sum1 = sum + nativeDefault.space.PX_16;
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmp9Result != null) {
    str3 = tmp9Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  const obj5 = { theme, primaryColor, secondaryColor, children: null };
  const obj6 = { style: null, children: null };
  const items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  obj6.style = items1;
  const obj7 = { children: null };
  const items2 = [React5(hasOwnProperty, { style: tmp4.bounceOffset }), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj8 = { style: tmp4.bounceOffset };
  const tmp6Result4 = useUserProfileColors;
  const items3 = [React5(EditableBanner, { user: currentUser, displayProfile: tmp9Result, pendingAvatarSrc, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors }), ];
  const obj10 = { children: null };
  const obj11 = { style: null, children: React5(EditUserProfileAvatarDefault, { user: currentUser, disableStatus: true, statusStyle: obj4, isTryItOut: true, isUserProfileEditingRefresh: true }) };
  const items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj4;
  obj11.style = items4;
  const items5 = [React5(hasOwnProperty, obj11), ];
  const obj12 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj12.containerStyle = items6;
  const tmpResult = UserProfileGradientContainerDefault;
  const items7 = [React5(UserProfileCustomStatusBubbleDefault, { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true }), React5(UserProfilePrimaryInfoDefault, { user: currentUser, displayName: str2, pronouns: str3, badges: tmp13, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles })];
  obj12.children = items7;
  items5[1] = React6(UserProfileGradientContainerDefault, obj12);
  obj10.children = items5;
  items3[1] = React6(hasOwnProperty, obj10);
  obj9.children = items3;
  items2[1] = React6(tmpResult, obj9);
  obj7.children = items2;
  const items8 = [React6(React4, obj7), React5(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout })];
  obj6.children = items8;
  obj5.children = React6(hasOwnProperty, obj6);
  return React5(native.ThemeContextProvider, obj5);
};