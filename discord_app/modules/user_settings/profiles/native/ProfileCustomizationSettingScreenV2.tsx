// discord_app/modules/user_settings/profiles/native/ProfileCustomizationSettingScreenV2.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import useDisplayProfileDefault from "../../../user_profile/hooks/useDisplayProfile.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useMeasuredLayoutDefault from "../../../screen/native/useMeasuredLayout.tsx";
import GuildIdentityActionCreators from "../../../guild_identity/GuildIdentityActionCreators.tsx";
import useProfileThemeDefault from "../../../user_profile/hooks/useProfileTheme.tsx";
import useFetchCollectiblesCategoriesAndPurchasesDefault from "../../../collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx";
import useUserProfileBannerHeightDefault from "../../../user_profile/hooks/native/useUserProfileBannerHeight.tsx";
import UserProfileFixedBackgroundDefault from "../../../user_profile/native/UserProfileFixedBackground.tsx";
import UserProfileEditFormSharedStylesDefault from "../../../user_profile/native/UserProfileEditFormSharedStyles.tsx";
import useMaybeFetchCollectiblesRecommendationsDefault from "../../../collectibles/hooks/useMaybeFetchCollectiblesRecommendations.tsx";
import useProfileSelectionDefault from "useProfileSelection.tsx";
import useUserProfileEditFormDefault from "useUserProfileEditForm.tsx";
import useGuildProfileEditFormDefault from "useGuildProfileEditForm.tsx";
import useStickyEditFormHeadersDefault from "../../../user_profile/native/useStickyEditFormHeaders.tsx";
import useProfileEditorExitHandlingDefault from "useProfileEditorExitHandling.tsx";
import useConfigureProfileEditorScreenDefault from "useConfigureProfileEditorScreen.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ProfileCustomizationNavigationStore from "../../../profile_customization/ProfileCustomizationNavigationStore.tsx";
import UserProfileSettingsStore from "../../../user_profile/UserProfileSettingsStore.tsx";
import UserProfileStore from "../../../user_profile/UserProfileStore.tsx";
import WidgetStore from "../../../user_profile/WidgetStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import 01654__ from "../../../../../_runtime/metro/01654__.js";

require = fn;
function ProfilePreviewBanner(user) {
  user = user.user;
  const guildId = user.guildId;
  ({ displayProfile, pendingBanner } = user);
  ({ pendingAvatarSrc, pendingThemeColors, pendingAccentColor, disabled } = user);
  const analyticsLocations = guildId(6379)(guildId(6380).EDIT_BANNER).analyticsLocations;
  const tmp3 = guildId(6379);
  items = [UserProfileStore];
  const stateFromStores = user(504).useStateFromStores(items, () => {
    let guildMemberProfile = null;
    if (null != guildId) {
      guildMemberProfile = UserProfileStore.getGuildMemberProfile(user.id, tmp);
    }
    return guildMemberProfile;
  });
  let result = !tmp6;
  if (null != guildId) {
    result = tmp(2174).canUsePremiumGuildMemberProfile(user);
    const tmpResult = tmp(2174);
  }
  if (null != guildId) {
    let banner1;
    if (stateFromStores != null) {
      banner1 = stateFromStores.banner;
    }
    let banner = banner1;
  } else if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  const obj2 = { user, guildId, analyticsLocations, showRemoveBanner: null };
  const obj = user(504);
  const tmpResult3 = guildId(16031);
  obj2.showRemoveBanner = user(6375).showRemoveBanner(pendingBanner, banner);
  const tmp4Result = user(6375);
  const intl = tmp4(1112).intl;
  const string = intl.string;
  const t = tmp4(1112).t;
  if (null != guildId) {
    let stringResult = string(t["95hPAe"]);
  } else {
    stringResult = string(t.VqsHy0);
  }
  const obj3 = { value: analyticsLocations, children: null };
  const obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: null, showEditButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null, isUserProfileEditingRefresh: true };
  let banner2;
  const tmpResult1Result = tmpResult3(obj2);
  if (displayProfile != null) {
    banner2 = displayProfile.banner;
  }
  let num;
  if (null == banner2) {
    num = 12;
  }
  obj4.bannerSafeArea = num;
  obj4.showEditButton = result;
  obj4.onPressEdit = tmpResult1Result;
  obj4.editButtonAccessibilityLabel = stringResult;
  obj4.editDisabled = disabled;
  obj3.children = closure_18(guildId(16047), obj4);
  return closure_18(user(6379).AnalyticsLocationProvider, obj3);
}
function ProfilePreviewFrame(user) {
  user = user.user;
  const guildId = user.guildId;
  ({ displayProfile, pendingChanges, disabled } = user);
  const tmp = closure_22();
  const tmp4 = guildId(9487)();
  const tmp5 = guildId(16049)();
  const customStatusActivity = user(9488).useCustomStatusActivity();
  const obj = user(9488);
  const tmp8 = guildId(9503)(displayProfile);
  const themeContext = user(5104).useThemeContext();
  ({ primaryColor, theme, secondaryColor } = themeContext);
  const obj2 = user(5104);
  const userProfileColors = user(9489).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const obj4 = { backgroundColor: userProfileColors.avatarBackground };
  let num = 0;
  if (null == customStatusActivity) {
    num = closure_17;
  }
  const obj3 = user(9489);
  const pendingAvatarSrc = user(9502).getPendingAvatarSrc({ userId: user.id, image: pendingChanges.pendingAvatar });
  user(504);
  [][0] = GuildMemberStore;
  items = [guildId, user.id];
  if (null != guildId) {
    let str = pendingChanges.pendingNickname;
    if (str == null) {
      str = tmp13;
    }
    if (str == null) {
      str = "";
    }
    let pendingGlobalName = str;
  } else {
    pendingGlobalName = pendingChanges.pendingGlobalName;
  }
  let str2;
  if (displayProfile != null) {
    str2 = displayProfile.getPreviewPronouns(pendingChanges.pendingPronouns);
  }
  if (str2 == null) {
    str2 = "";
  }
  const obj6 = { style: tmp.previewFrame, children: null };
  let str3 = guildId;
  if (guildId == null) {
    str3 = "main";
  }
  const items1 = [closure_18(ProfilePreviewBanner, { user, guildId, displayProfile, pendingAvatarSrc, pendingBanner: pendingChanges.pendingBanner, pendingThemeColors: pendingChanges.pendingThemeColors, pendingAccentColor: pendingChanges.pendingAccentColor, disabled }, "" + user.id + "-" + str3), ];
  const obj8 = { style: null, children: null };
  const items2 = [, , , ];
  ({ profileContentWrapper: arr3[0], profileContent: arr3[1] } = tmp4);
  items2[2] = { paddingTop: num };
  items2[3] = tmp.previewContent;
  obj8.style = items2;
  const obj9 = { style: null, children: closure_18(guildId(16050), { user, guildId, disabled, disableStatus: false, statusStyle: obj4, isUserProfileEditingRefresh: true }) };
  const items3 = [, , , ];
  ({ avatarBackground: arr4[0], avatarPosition: arr4[1] } = tmp4);
  items3[2] = tmp5.avatarContainer;
  items3[3] = obj4;
  obj9.style = items3;
  const items4 = [closure_18(closure_7, obj9), closure_18(guildId(9527), { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp4.customStatusBubble, emojiOnlyStyle: tmp4.emojiOnlyCustomStatusBubble }), closure_18(guildId(9807), { user, guildId, displayName: pendingGlobalName, pronouns: str2, badges: tmp8, badgeContainerBackground: userProfileColors.containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: pendingChanges.pendingDisplayNameStyles, canOpenBadgeDirectory: null == guildId, showsBadgeUnreadDot: null != guildId })];
  obj8.children = items4;
  items1[1] = closure_19(closure_7, obj8);
  obj6.children = items1;
  return closure_19(closure_7, obj6);
}
function ProfileCustomizationSettingScreenV2(currentUser) {
  currentUser = currentUser.currentUser;
  _require = currentUser;
  handleSubmit2 = undefined;
  let id;
  let sharedValue1;
  let handleHeaderLayout;
  let id1;
  useMaybeFetchCollectiblesRecommendationsDefault();
  useFetchCollectiblesCategoriesAndPurchasesDefault();
  let tmp5 = closure_22();
  const tmp6 = UserProfileEditFormSharedStylesDefault();
  let obj = require("native");
  const tmp8 = useSafeAreaInsetsDefault();
  const token = require("useToken").useToken(nativeDefault.colors.BACKGROUND_BASE_LOWEST);
  const field = id1.useField("subsection");
  importDefault = field;
  dependencyMap = tmp11;
  let obj2 = require("useToken");
  ({ hasGuilds, handleSelectMainProfile, handleSelectGuild } = useProfileSelectionDefault());
  const tmp12 = useProfileSelectionDefault();
  const tmp14 = AnalyticsLocationDefault;
  const tmp15 = useUserProfileEditFormDefault();
  const handleSubmit = tmp15.handleSubmit;
  const tmp16 = id(tmp15, handleSubmit);
  const tmp17 = useGuildProfileEditFormDefault();
  ({ guild, handleSubmit: handleSubmit2 } = tmp17);
  const tmp18 = tmp16.isSubmitting || id(tmp17, handleSubmit2).isSubmitting;
  const tmp13 = useAnalyticsLocationsDefault;
  items = [UserProfileSettingsStore, WidgetStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let hasUnsavedChangesResult = WidgetStore.hasUnsavedChanges();
    let showNoticeResult = hasUnsavedChangesResult;
    if (!hasUnsavedChangesResult) {
      showNoticeResult = UserProfileSettingsStore.showNotice();
    }
    const obj2 = { hasUnsavedChanges: showNoticeResult, hasInvalidWidgetChanges: null };
    if (hasUnsavedChangesResult) {
      hasUnsavedChangesResult = !WidgetStore.canSaveChanges();
    }
    obj2.hasInvalidWidgetChanges = hasUnsavedChangesResult;
    return obj2;
  });
  const hasUnsavedChanges = stateFromStoresObject.hasUnsavedChanges;
  const items1 = [field === constants.GUILD, handleSubmit, handleSubmit2];
  const items2 = [field];
  const callback = sharedValue1.useCallback(() => {
    if (c2) {
      let tmp2 = handleSubmit2();
    } else {
      tmp2 = handleSubmit();
    }
    return tmp2;
  }, items1);
  const effect = sharedValue1.useEffect(() => {
    AppAnalyticsUtilsDefault.trackWithMetadata(constants2.SETTINGS_PANE_VIEWED, { settings_type: "user", subsection, destination_pane: constants3.SETTINGS_CUSTOMIZE_PROFILE });
  }, items2);
  let tmp23 = null;
  if (field === constants.GUILD) {
    tmp23 = guild;
  }
  id = undefined;
  if (tmp23 != null) {
    id = tmp23.id;
  }
  const tmp7Result = require("initialize");
  const items3 = [UserProfileSettingsStore];
  const stateFromStores = require("initialize").useStateFromStores(items3, () => UserProfileSettingsStore.getPendingChanges(id));
  const tmp26 = useDisplayProfileDefault(currentUser.id, id);
  const obj3 = { user: currentUser, displayProfile: tmp26, pendingThemeColors: stateFromStores.pendingThemeColors };
  const tmp7Result6 = require("initialize");
  const tmp28 = useMeasuredLayoutDefault();
  const height = tmp28.height;
  let num = 0;
  ({ ref, onLayout, width } = tmp28);
  if (undefined !== height) {
    num = height;
  }
  const tmp27 = useProfileThemeDefault({ user: currentUser, displayProfile: tmp26, pendingThemeColors: stateFromStores.pendingThemeColors });
  const tmp29 = useUserProfileBannerHeightDefault(width);
  const animatedRef = require("../../../../../_runtime/metro/01654__.js").useAnimatedRef();
  const tmp7Result7 = require("../../../../../_runtime/metro/01654__.js");
  const sharedValue = require("../../../../../_runtime/metro/01654__.js").useSharedValue(0);
  const tmp7Result8 = require("../../../../../_runtime/metro/01654__.js");
  sharedValue1 = require("../../../../../_runtime/metro/01654__.js").useSharedValue(0);
  const tmp33 = useStickyEditFormHeadersDefault(sharedValue, animatedRef);
  handleHeaderLayout = tmp33.handleHeaderLayout;
  const items4 = [handleHeaderLayout, sharedValue1];
  ({ headerStyle, scrollHandler } = tmp33);
  const callback1 = obj4.useCallback((nativeEvent) => {
    handleHeaderLayout(nativeEvent);
    const layout = nativeEvent.nativeEvent.layout;
    const result = sharedValue1.set(layout.y + layout.height);
  }, items4);
  const tmp7Result9 = require("../../../../../_runtime/metro/01654__.js");
  const items5 = [closure_25, sharedValue1, sharedValue, xl];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp35, tmp36, tmp37, tmp38] = items5;
  class ProfileCustomizationSettingScreenV2Tsx1 {
    constructor() {
      value = closure_0.get();
      value1 = closure_1.get();
      bound = Math.min(closure_2, Math.max(0, value + closure_2 - value1));
      obj = { top: Math.max(0, value - value1), borderTopLeftRadius: bound, borderTopRightRadius: bound };
      return obj;
    }
  }
  const items6 = [tmp36, tmp37, tmp38];
  ProfileCustomizationSettingScreenV2Tsx1.__closure = items6;
  ProfileCustomizationSettingScreenV2Tsx1.__workletHash = 7571175928607;
  ProfileCustomizationSettingScreenV2Tsx1.__initData = tmp35;
  id1 = undefined;
  const animatedStyle = require("../../../../../_runtime/metro/01654__.js").useAnimatedStyle(ProfileCustomizationSettingScreenV2Tsx1);
  if (guild != null) {
    id1 = guild.id;
  }
  const items7 = [id1];
  const effect1 = obj4.useEffect(() => {
    if (null != id1) {
      const guildIdentitySettings = GuildIdentityActionCreators.initGuildIdentitySettings(tmp);
    }
  }, items7);
  const items8 = [currentUser, id];
  const effect2 = obj4.useEffect(() => {
    if (null != id) {
      GuildIdentityActionCreators.setCurrentGuild(id);
    }
    maybeFetchUserProfileDefault(_undefined.id, _undefined.getAvatarURL(id, 80), { guildId: id });
  }, items8);
  const obj5 = { location: "ProfileCustomizationSettingScreenV2", hasUnsavedChanges, onSave: callback, isSubmitting: tmp18, shouldBlockExit: tmp16.isWaitingForHexagonCampaignEnrollment };
  const tmp7Result10 = require("../../../../../_runtime/metro/01654__.js");
  ({ saveAndClose, guardUnsavedChanges } = useProfileEditorExitHandlingDefault({ location: "ProfileCustomizationSettingScreenV2", hasUnsavedChanges, onSave: callback, isSubmitting: tmp18, shouldBlockExit: tmp16.isWaitingForHexagonCampaignEnrollment }));
  const obj6 = { onSave: saveAndClose, saveButtonDisabled: null, isSubmitting: null, showTitleAndBackButton: true, backgroundColor: null };
  let hasInvalidWidgetChanges = !hasUnsavedChanges;
  const tmp43 = useProfileEditorExitHandlingDefault({ location: "ProfileCustomizationSettingScreenV2", hasUnsavedChanges, onSave: callback, isSubmitting: tmp18, shouldBlockExit: tmp16.isWaitingForHexagonCampaignEnrollment });
  if (hasUnsavedChanges) {
    hasInvalidWidgetChanges = stateFromStoresObject.hasInvalidWidgetChanges;
  }
  obj6.saveButtonDisabled = hasInvalidWidgetChanges;
  obj6.isSubmitting = tmp18;
  obj6.backgroundColor = token;
  useConfigureProfileEditorScreenDefault(obj6);
  ({ theme, primaryColor, secondaryColor } = tmp27);
  const obj7 = { value: tmp13(field === constants.GUILD ? tmp14.USER_SETTINGS_GUILD_PROFILE : tmp14.USER_SETTINGS_USER_PROFILE).analyticsLocations, children: null };
  const obj8 = { ref, style: tmp5.container, onLayout, children: null };
  const obj9 = { theme, primaryColor, secondaryColor, children: null };
  const obj10 = { style: null, children: closure_18(UserProfileFixedBackgroundDefault, { gradientHeight: num, bannerHeight: tmp29, style: { top: "auto", height: num } }) };
  const items9 = [tmp5.previewBackground, animatedStyle];
  obj10.style = items9;
  const items10 = [closure_18(module_1654.View, obj10), ];
  const obj12 = { ref: animatedRef, onScroll: scrollHandler, scrollEventThrottle: 16, contentContainerStyle: { paddingBottom: tmp8.bottom }, keyboardShouldPersistTaps: "handled", children: null };
  const obj13 = { style: null };
  const items11 = [tmp6.bounceOffset, tmp5.bounceOffset];
  obj13.style = items11;
  const items12 = [closure_18(handleHeaderLayout, obj13), , ];
  const obj14 = { style: null, onLayout: callback1, children: null };
  const items13 = [tmp5.stickyProfileSelector, headerStyle];
  obj14.style = items13;
  let tmp46Result = null;
  if (hasGuilds) {
    const obj15 = { theme: obj.useThemeContext().theme, children: null };
    const obj16 = { children: null };
    const obj17 = { style: tmp5.profileSelector, children: null };
    const obj18 = { guild: tmp23, onBeforeOpen: guardUnsavedChanges, onSelectMainProfile: handleSelectMainProfile, onSelectGuild: handleSelectGuild };
    obj17.children = closure_18(tmp(16071), obj18);
    obj16.children = closure_18(tmp47, obj17);
    obj15.children = closure_18(tmp7(10589).DisableCustomTheme, obj16);
    tmp46Result = closure_18(tmp7(5104).ThemeContextProvider, obj15);
  }
  obj14.children = tmp46Result;
  items12[1] = closure_18(module_1654.View, obj14);
  items12[2] = closure_18(ProfilePreviewFrame, { user: currentUser, guildId: id, displayProfile: tmp26, pendingChanges: stateFromStores, disabled: tmp18 });
  obj12.children = items12;
  items10[1] = closure_19(closure_21, obj12);
  obj9.children = items10;
  obj8.children = closure_19(require("native").ThemeContextProvider, obj9);
  obj7.children = closure_18(handleHeaderLayout, obj8);
  return closure_18(require("useAnalyticsLocations").AnalyticsLocationProvider, obj7);
}
let closure_3 = ["handleSubmit"];
let closure_4 = ["guild", "handleSubmit"];
get_ActivityIndicator = fn(17);
({ View: metroImportDefault, ScrollView } = get_ActivityIndicator);
const constants = fn(1081).ProfileCustomizationSubsection;
const Constants = fn(1071);
({ AnalyticEvents: closure_15, AnalyticsSections: closure_16 } = Constants);
let closure_17 = fn(7557).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const xl = nativeDefault.radii.xl;
let closure_21 = module_1654.createAnimatedComponent(ScrollView);
const createStyles = fn(5043);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, bounceOffset: null, previewBackground: null, stickyProfileSelector: null, profileSelector: null, previewFrame: null, previewContent: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.bounceOffset = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.previewBackground = { position: "absolute", bottom: 0, left: 0, right: 0, overflow: "hidden" };
obj.stickyProfileSelector = { zIndex: 2 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.profileSelector = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.previewFrame = { overflow: "hidden", borderTopLeftRadius: xl, borderTopRightRadius: xl };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.previewContent = { paddingBottom: nativeDefault.space.PX_16 };
let closure_22 = createStyles.createStyles(obj);
let closure_25 = { code: "(function ProfileCustomizationSettingScreenV2Tsx1(){let[previewTop,scrollPosition,PREVIEW_CORNER_RADIUS]=this.__closure;const top=previewTop.get();const scrollY=scrollPosition.get();const radius=Math.min(PREVIEW_CORNER_RADIUS,Math.max(0,top+PREVIEW_CORNER_RADIUS-scrollY));return{top:Math.max(0,top-scrollY),borderTopLeftRadius:radius,borderTopRightRadius:radius};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationSettingScreenV2.tsx");

export default function ProfileCustomizationSettingScreenV2Connected() {
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { currentUser: stateFromStores };
    tmp2 = collapsedCategories(ProfileCustomizationSettingScreenV2, obj2);
  }
  return tmp2;
};