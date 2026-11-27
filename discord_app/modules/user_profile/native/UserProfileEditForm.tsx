// === Module 16083: UserProfileEditForm ===

// Module 16083 (UserProfileEditForm)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2174 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5618 */;
import Text_Text from "Text/Text" /* 5634 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 6162 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 6375 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6379 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6380 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 6388 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7298 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 9435 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 9488 */;
import useUserProfileColors from "useUserProfileColors" /* 9490 */;
import useSafeAreaAvoidingInputsDefault from "useSafeAreaAvoidingInputs" /* 9800 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 9808 */;
import useFetchCollectiblesCategoriesAndPurchasesDefault from "useFetchCollectiblesCategoriesAndPurchases" /* 11150 */;
import UserProfileEditFormKeyboardAvoidingContextDefault from "UserProfileEditFormKeyboardAvoidingContext" /* 14597 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 14996 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 15040 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16038 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16054 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 16056 */;
import useUserProfileEditFormDefault from "useUserProfileEditForm" /* 16065 */;
import _modDef16085 from "module_16085" /* 16085 */;
import UserProfileEditFormTextFieldDefault from "UserProfileEditFormTextField" /* 16088 */;
import UserProfileDisplayNameStylesEditButtonDefault from "UserProfileDisplayNameStylesEditButton" /* 16089 */;
import UserProfileHexagonCampaignDisplayNameStyleEditButtonDefault from "UserProfileHexagonCampaignDisplayNameStyleEditButton" /* 16102 */;
import UserProfileBadgesEditButtonDefault from "UserProfileBadgesEditButton" /* 16107 */;
import UserProfileEditThemeDefault from "UserProfileEditTheme" /* 16113 */;
import UserProfileAvatarDecorationEditButtonDefault from "UserProfileAvatarDecorationEditButton" /* 16117 */;
import UserProfileEffectEditButtonDefault from "UserProfileEffectEditButton" /* 16118 */;
import UserProfileFrameEditButtonDefault from "UserProfileFrameEditButton" /* 16122 */;
import UserProfileNameplateEditButtonDefault from "UserProfileNameplateEditButton" /* 16126 */;
import UserProfileTypingIndicatorEditButtonDefault from "UserProfileTypingIndicatorEditButton" /* 16131 */;
import UserProfilePrimaryGuildEditButtonDefault from "UserProfilePrimaryGuildEditButton" /* 16132 */;
import UserProfileLegacyUsernameSwitchDefault from "UserProfileLegacyUsernameSwitch" /* 16135 */;
import UserProfilePremiumTryItOutSectionDefault from "UserProfilePremiumTryItOutSection" /* 16136 */;
import UserProfileEditFormMainPageContextDefault from "UserProfileEditFormMainPageContext" /* 16175 */;
import UserProfileEditFormTabsDefault from "UserProfileEditFormTabs" /* 16176 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 6383 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9438 */;
import module_1654 from "module_1654" /* 1654 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

const useMeasuredLayoutDefault = tmp(8487);
const useProfileThemeDefault = tmp(9486);
const useBadgesDefault = tmp(9504);
const UserProfileCustomStatusBubbleDefault = tmp(9528);
const useUserProfileBannerHeightDefault = tmp(14856);
const UserProfileFixedBackgroundDefault = tmp(14859);
const EditUserProfileAvatarDefault = tmp(16057);
const useStickyEditFormHeadersDefault = tmp(16072);
const useTryItOutUpsellScrollTrackingDefault = tmp(16086);
const useScrollToUserProfileEditFormSectionDefault = tmp(16087);
const UserProfilePremiumTryItOutUpsellDefault = tmp(16179);
require = fn;
function EditUserProfileBanner(arg0) {
  ({ user, displayProfile, pendingBanner, tryItOutBanner, isTryItOut, pendingAvatarSrc, pendingAccentColor, pendingThemeColors, disabled } = arg0);
  if (isTryItOut) {
    if (tryItOutBanner == null) {
      tryItOutBanner = obj4;
    }
    pendingBanner = tryItOutBanner;
  }
  const canUseCollectiblesResult = PremiumUtilsDefault.canUseCollectibles(user);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  const obj2 = { user, analyticsLocations, isTryItOut, showRemoveBanner: null };
  const tmp6 = useOpenChangeBannerActionSheetDefault;
  let banner;
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  obj2.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
  obj4 = { value: analyticsLocations, children: null };
  const obj5 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: null, showProfilePreviewButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  let banner1;
  const tmp6Result = tmp6(obj2);
  if (displayProfile != null) {
    banner1 = displayProfile.banner;
  }
  obj5.bannerSafeArea = 12;
  obj5.showProfilePreviewButton = canUseCollectiblesResult;
  obj5.onPressEdit = tmp6Result;
  const intl = util.intl;
  obj5.editButtonAccessibilityLabel = intl.string(util.t.VqsHy0);
  obj5.editDisabled = disabled;
  obj4.children = gesture(UserProfileEditBannerButtonDefault, obj5);
  return gesture(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
}
function ProfileThemeContainerColors(arg0) {
  ({ profileTheme, children } = arg0);
  const userProfileColors = useUserProfileColors.useUserProfileColors(profileTheme);
  const obj2 = { children: children({ containerBackground: userProfileColors.containerBackground, containerBorderColor: userProfileColors.containerBorderColor }) };
  return gesture(colors, obj2);
}
function MainUserProfileEditForm(arg0) {
  const obj2 = {};
  const isMobileWidgetEditingEnabled = MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  obj2.isWidgetEditingEnabled = isMobileWidgetEditingEnabled;
  return gesture(UserProfileEditFormContent, obj2);
}
function UserProfileEditFormContent(currentUser) {
  currentUser = currentUser.currentUser;
  _require = currentUser;
  ({ header, autoFocusElement } = currentUser);
  importDefault = autoFocusElement;
  ({ initialTab: dependencyMap, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let flag = currentUser.isWidgetEditingEnabled;
  if (flag === undefined) {
    flag = false;
  }
  isSubmitting = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  c21 = undefined;
  pendingThemeColors = undefined;
  c23 = undefined;
  c24 = undefined;
  tryItOutThemeColors = undefined;
  c26 = undefined;
  c27 = undefined;
  c28 = undefined;
  c29 = undefined;
  pendingLegacyUsernameDisabled = undefined;
  c33 = undefined;
  c34 = undefined;
  let displayProfile;
  closure_36 = undefined;
  let pendingAvatarSrc;
  closure_38 = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  let badges;
  let catalogBadges;
  c44 = undefined;
  c45 = undefined;
  closure_46 = undefined;
  closure_47 = undefined;
  let legacyUsername;
  let str2;
  let str3;
  let str4;
  let hasCustomProfileTheme;
  closure_53 = undefined;
  flag = undefined;
  c55 = undefined;
  measureTabsY = undefined;
  c57 = undefined;
  c58 = undefined;
  let errorMessage;
  let first3;
  let first4;
  c62 = undefined;
  closure_63 = undefined;
  let tmp = importDefault;
  let obj = dependencyMap;
  let tmp2 = UserProfileSharedStylesDefault();
  const tmp3 = UserProfileEditFormSharedStylesDefault();
  const formContainer = tmp3;
  ProfileCustomizationNavigationStore = require("BioMaxLengthExperiment").useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = require("BioMaxLengthExperiment");
  const tmp6 = c19();
  const tabsAnchor = tmp6;
  const tmp5 = useKeyboardIsOpenDefault();
  const animatedRef = require("module_1654").useAnimatedRef();
  let obj3 = require("module_1654");
  const sharedValue = require("module_1654").useSharedValue(0);
  obj4 = require("module_1654");
  const sharedValue1 = require("module_1654").useSharedValue(false);
  const ref1 = isTryItOut.useRef(null);
  const ref2 = isTryItOut.useRef(null);
  const ref3 = isTryItOut.useRef(null);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const PX_16 = nativeDefault.space.PX_16;
  const ref4 = isTryItOut.useRef(null);
  let obj7 = { insets, inputs: null, scrollViewRef: null };
  items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, , ];
  let obj10 = { ref: ref3, offset: null };
  let obj11 = { type: "toValue", value: null };
  let obj5 = require("module_1654");
  let obj8 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  let obj9 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  obj11.value = nativeDefault.space.PX_64;
  obj10.offset = obj11;
  items[2] = obj10;
  let obj12 = { ref: ref4, offset: null };
  const tmp14 = useSafeAreaAvoidingInputsDefault;
  obj12.offset = { type: "toValue", value: nativeDefault.space.PX_80 };
  items[3] = obj12;
  obj7.inputs = items;
  obj7.scrollViewRef = animatedRef;
  const onFocus = tmp14(obj7).onFocus;
  let items1 = [onFocus];
  value = isTryItOut.useMemo(() => ({ focusedInputRef: ref4, onInputFocus: onFocus }), items1);
  const tmp15 = useUserProfileEditFormDefault();
  ({ errors, isSubmitting } = tmp15);
  ({ pendingAvatarDecoration: c18, pendingProfileEffect: c19, pendingProfileFrame: c20, pendingNameplate: c21, pendingThemeColors } = tmp15);
  ({ tryItOutAvatarDecoration: c23, tryItOutProfileEffect: c24, tryItOutThemeColors } = tmp15);
  ({ tryItOutDisplayNameStyles: c26, pendingGlobalName: c27, pendingPronouns: c28, pendingBio: c29, pendingLegacyUsernameDisabled } = tmp15);
  const pendingBadgeDisplayOrder = tmp15.pendingBadgeDisplayOrder;
  const pendingBadgeHiddenBadges = tmp15.pendingBadgeHiddenBadges;
  ({ pendingPrimaryGuildId: c33, pendingDisplayNameStyles: c34, pendingAvatar, pendingBanner, pendingAccentColor, tryItOutBanner } = tmp15);
  useFetchCollectiblesCategoriesAndPurchasesDefault();
  let obj13 = { type: "toValue", value: nativeDefault.space.PX_80 };
  const guildAutomodProfileQuarantineErrors = require("AutomodQuarantineUtils").useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  let obj14 = require("AutomodQuarantineUtils");
  if (str == null) {
    str = "";
  }
  const tmp18Result = useDisplayProfileDefault(str);
  displayProfile = tmp18Result;
  const customStatusActivity = require("userSettingToActivity").useCustomStatusActivity();
  const tmp4Result = require("userSettingToActivity");
  closure_36 = "profile" === require("CustomTypingIndicatorExperiment").useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const tmp4Result10 = require("CustomTypingIndicatorExperiment");
  pendingAvatarSrc = require("RecentAvatarUtils").getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const tmp21 = useBadgesDefault(tmp18Result, pendingLegacyUsernameDisabled);
  closure_38 = tmp21;
  let obj15 = { userId: currentUser.id, image: pendingAvatar };
  const tmp4Result11 = require("RecentAvatarUtils");
  isBadgeManagementEnabled = require("BadgeManagementExperiment").useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result12 = require("BadgeManagementExperiment");
  let items2 = [formContainer];
  stateFromStores = require("initialize").useStateFromStores(items2, () => BadgeDirectoryStore.hasCatalogFor(_undefined.id));
  const tmp4Result13 = require("initialize");
  let items3 = [formContainer];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items3, () => BadgeDirectoryStore.getBadges(_undefined.id));
  const items4 = [currentUser.id, isBadgeManagementEnabled];
  const effect = obj6.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(_undefined.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(_undefined.id) && !BadgeDirectoryStore.isCatalogStaleFor(_undefined.id);
    }
  }, items4);
  const items5 = [tmp21, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  badges = obj6.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_38, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items5);
  const items6 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  catalogBadges = obj6.useMemo(() => {
    let found = null;
    if (stateFromStores) {
      const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const result = PendingBadgeSettings.applyPendingBadgeSettings(stateFromStoresArray, obj2);
      found = result.filter((owned) => owned.owned && !owned.hidden);
    }
    return found;
  }, items6);
  let someResult = !stateFromStores;
  if (stateFromStores) {
    someResult = stateFromStoresArray.some((owned) => owned.owned);
  }
  c44 = someResult;
  const tmp4Result14 = require("initialize");
  let result = PremiumUtilsDefault.canUsePremiumProfileCustomization(currentUser);
  c45 = result;
  let tmpResult = PremiumUtilsDefault;
  closure_46 = require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(sharedValue1.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp27 = !result;
  if (!result) {
    tmp27 = !tmp5;
  }
  const tmp4Result15 = require("HexagonCampaignPerkAvailability");
  const enabled = require("UserProfilePremiumTryItOutMobileRefreshExperiment").useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp28 = enabled;
  if (enabled) {
    tmp28 = !result;
  }
  if (tmp28) {
    tmp28 = !isTryItOut;
  }
  closure_47 = tmp28;
  legacyUsername = undefined;
  if (tmp18Result != null) {
    legacyUsername = tmp18Result.getLegacyUsername();
  }
  str2 = currentUser.globalName;
  if (str2 == null) {
    str2 = "";
  }
  str3 = undefined;
  if (tmp18Result != null) {
    str3 = tmp18Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  str4 = undefined;
  if (tmp18Result != null) {
    str4 = tmp18Result.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  let obj16 = { user: currentUser, displayProfile: tmp18Result, pendingThemeColors: null, isPreview: null };
  let tmp31 = pendingThemeColors;
  const tmp4Result16 = require("UserProfilePremiumTryItOutMobileRefreshExperiment");
  if (isTryItOut) {
    tmp31 = tryItOutThemeColors;
  }
  obj16.pendingThemeColors = tmp31;
  obj16.isPreview = isTryItOut;
  const tmpResult1Result = useProfileThemeDefault(obj16);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp33;
  let obj17 = { backgroundColor: null };
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmpResult4 = useProfileThemeDefault;
  obj17.backgroundColor = require("useUserProfileColors").useUserProfileColors(tmpResult1Result).avatarBackground;
  const tmp34 = useMeasuredLayoutDefault();
  const height = tmp34.height;
  let num = 0;
  ({ ref, onLayout, width } = tmp34);
  if (undefined !== height) {
    num = height;
  }
  let num2 = 0;
  const tmp4Result17 = require("useUserProfileColors");
  if (tmp27) {
    num2 = 0;
    if (!tmp28) {
      num2 = tabsAnchor;
    }
  }
  const sum = insets.bottom + num2;
  const sum1 = sum + nativeDefault.space.PX_16;
  const tmp38 = useTryItOutUpsellScrollTrackingDefault(sharedValue, sum1);
  closure_53 = tmp38;
  const tmp35 = useUserProfileBannerHeightDefault(width);
  const items7 = [c24, tmp38.isScrolledAboveTryItOutSection, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp39, tmp40, tmp41] = items7;
  class UserProfileEditFormTsx1 {
    constructor() {
      value = closure_0.get();
      if (value) {
        tmp2 = closure_1;
        value = !closure_1.get();
      }
      return value;
    }
  }
  const items8 = [tmp40, tmp41];
  UserProfileEditFormTsx1.__closure = items8;
  UserProfileEditFormTsx1.__workletHash = 15732737689317;
  UserProfileEditFormTsx1.__initData = tmp39;
  let tmp43 = tmp28;
  const derivedValue = require("module_1654").useDerivedValue(UserProfileEditFormTsx1);
  if (tmp28) {
    tmp43 = flag;
  }
  flag = tmp43;
  const tmp4Result18 = require("module_1654");
  if (tmp28) {
    const onScroll = tmp38.onScroll;
  }
  const tmpResult2Result = useStickyEditFormHeadersDefault(sharedValue, animatedRef, onScroll);
  ({ tabsAnchorRef: c55, measureTabsY } = tmpResult2Result);
  ({ tabsTranslateY: c57, handleTabsBarLayout: c58 } = tmpResult2Result);
  const items9 = [tmp43, tmp38, flag, measureTabsY];
  ({ headerStyle, handleHeaderLayout, tabsBarHeight, scrollHandler } = tmpResult2Result);
  errorMessage = undefined;
  const callback = obj6.useCallback((arg0, arg1) => {
    if (flag) {
      closure_53.onContentSizeChange(arg0, arg1);
    }
    if (flag) {
      measureTabsY();
    }
  }, items9);
  if (errors != null) {
    const username = errors.username;
    if (username != null) {
      errorMessage = username[0];
    }
  }
  if (errorMessage == null) {
    const global_name = errors.global_name;
    let first1;
    if (global_name != null) {
      first1 = global_name[0];
    }
    errorMessage = first1;
  }
  if (errorMessage == null) {
    let first2;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first2 = nick[0];
      }
    }
    errorMessage = first2;
  }
  const pronouns = errors.pronouns;
  first3 = undefined;
  if (pronouns != null) {
    first3 = pronouns[0];
  }
  const bio = errors.bio;
  first4 = undefined;
  if (bio != null) {
    first4 = bio[0];
  }
  let stringResult = null;
  if (Object.keys(errors).length > 0) {
    stringResult = null;
    if (null == first4) {
      let intl = tmp4(1112).intl;
      stringResult = intl.string(tmp4(1112).t["84MExs"]);
    }
  }
  c62 = stringResult;
  const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
  let tmp56;
  const tmpResult5 = useStickyEditFormHeadersDefault;
  if (flag) {
    tmp56 = tabsBarHeight;
  }
  closure_63 = useScrollToUserProfileEditFormSectionDefault(animatedRef, field, tmp56);
  let obj18 = { theme, primaryColor, secondaryColor, children: null };
  let obj19 = { ref, style: tmp3.container, onLayout, children: null };
  const items10 = [ref4(UserProfileFixedBackgroundDefault, { gradientHeight: num, bannerHeight: tmp35 }), , ];
  let obj20 = { ref: animatedRef, onScroll: scrollHandler, onContentSizeChange: null, onLayout: null, scrollEventThrottle: 16, stickyHeaderIndices: null, stickyHeaderHiddenOnScroll: null, keyboardShouldPersistTaps: null, children: null };
  if (tmp43) {
    const tmp61 = callback;
  }
  obj20.onContentSizeChange = tmp61;
  let onScrollViewLayout;
  if (tmp43) {
    onScrollViewLayout = tmp38.onScrollViewLayout;
  }
  obj20.onLayout = onScrollViewLayout;
  let tmp63;
  if (null != header && !flag) {
    tmp63 = isSubmitting;
  }
  obj20.stickyHeaderIndices = tmp63;
  obj20.stickyHeaderHiddenOnScroll = null != header && !flag;
  let str5;
  if (null != header) {
    str5 = "handled";
  }
  obj20.keyboardShouldPersistTaps = str5;
  const items11 = [ref4(flag, { style: tmp3.bounceOffset }), , , ];
  let tmp57Result = header;
  if (null != header) {
    tmp57Result = header;
    if (flag) {
      let obj22 = { style: null, onLayout: null, children: null };
      const items12 = [tmp6.stickyHeader, headerStyle];
      obj22.style = items12;
      obj22.onLayout = handleHeaderLayout;
      obj22.children = header;
      tmp57Result = tmp57(module_1654.View, obj22);
    }
  }
  items11[1] = tmp57Result;
  items11[2] = ref4(c21, { user: currentUser, displayProfile: tmp18Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting });
  let obj23 = { children: null };
  let obj24 = { style: null, children: ref4(EditUserProfileAvatarDefault, { user: currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj17, isTryItOut, autoStartEditFlow: autoFocusElement === ref3.AVATAR }) };
  const items13 = [, , , ];
  ({ avatarBackground: arr14[0], avatarPosition: arr14[1] } = tmp2);
  items13[2] = tmp3.avatarContainer;
  items13[3] = obj17;
  obj24.style = items13;
  const items14 = [ref4(flag, obj24), ];
  let obj26 = { style: null, children: null };
  const items15 = [, , ];
  ({ profileContentWrapper: arr16[0], profileContent: arr16[1] } = tmp2);
  items15[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj26.style = items15;
  const items16 = [
    ref4(UserProfileCustomStatusBubbleDefault, { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp2.customStatusBubble, emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble, editEnabled: true }),
    ref4(pendingThemeColors, {
      profileTheme: tmpResult1Result,
      children(borderColor) {
        const containerBackground = borderColor.containerBackground;
        const containerBackground2 = borderColor.containerBackground;
        items = [formContainer.formContainer, , ];
        let obj = flag;
        if (flag) {
          obj = { marginTop: 0 };
        }
        const obj2 = { style: null, children: null };
        items[1] = obj;
        items[2] = { backgroundColor: containerBackground2, borderColor: borderColor.containerBorderColor, borderWidth: 1, borderRadius: nativeDefault.radii.md };
        obj2.style = items;
        let tmp9 = null;
        if (null != children) {
          tmp9 = null;
          if ("" !== children) {
            obj4 = { style: formContainer.errorContainer, children: null };
            const obj5 = { variant: "body-sm/semibold", color: "text-feedback-critical", children };
            obj4.children = gesture(Text_Text.Text, obj5);
            tmp9 = gesture(React4, obj4);
          }
        }
        const items1 = [tmp9, , , , , , , , , , , , , ];
        const obj6 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
        const obj3 = { backgroundColor: containerBackground2, borderColor: borderColor.containerBorderColor, borderWidth: 1, borderRadius: nativeDefault.radii.md };
        const intl = util.intl;
        obj6.label = intl.string(util.t["9AjdkD"]);
        obj6.errorMessage = errorMessage;
        let tmp16 = displayName;
        if (displayName == null) {
          tmp16 = str2;
        }
        obj6.value = tmp16;
        obj6.onFocus = onFocus;
        obj6.onChange = function onChange(globalName) {
          return _undefined(11954).setPendingChanges({ globalName });
        };
        obj6.placeholder = _undefined.toString();
        obj6.maxLength = maxLength;
        obj6.disabled = isSubmitting;
        items1[1] = gesture(UserProfileEditFormTextFieldDefault, obj6);
        let tmp19 = c45;
        if (!c45) {
          if (!isTryItOut) {
            let tmp12Result = null;
            if (closure_46 !== constants.HIDDEN) {
              const obj7 = { user: _undefined, availability: tmp21, disabled: isSubmitting };
              tmp12Result = gesture(UserProfileHexagonCampaignDisplayNameStyleEditButtonDefault, obj7);
            }
            let tmp24 = isTryItOut;
            let tmp25 = isTryItOut;
          }
          items1[2] = tmp12Result;
          const obj8 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
          const intl2 = util.intl;
          obj8.label = intl2.string(util.t["+T3RI/"]);
          obj8.errorMessage = first3;
          let tmp29 = c28;
          let tmp30 = c28;
          if (c28 == null) {
            tmp30 = str3;
          }
          obj8.value = tmp30;
          obj8.onFocus = onFocus;
          obj8.onChange = function onChange(pronouns) {
            return _undefined(11954).setPendingChanges({ pronouns });
          };
          obj8.maxLength = maxLength2;
          obj8.disabled = isSubmitting;
          items1[3] = gesture(UserProfileEditFormTextFieldDefault, obj8);
          let tmp12Result6 = !tmp25;
          if (!tmp25) {
            const obj9 = { badges, catalogBadges, ownsAnyBadge, autoOpen: c1 === constants.BADGES };
            tmp12Result6 = gesture(UserProfileBadgesEditButtonDefault, obj9);
          }
          items1[4] = tmp12Result6;
          const obj10 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
          const tmp6Result5 = UserProfileEditFormTextFieldDefault;
          const intl3 = util.intl;
          obj10.label = intl3.string(util.t.ZzAR2Y);
          obj10.errorMessage = first4;
          let tmp41 = c29;
          if (c29 == null) {
            tmp41 = str4;
          }
          obj10.value = tmp41;
          obj10.onFocus = onFocus;
          obj10.onChange = function onChange(bio) {
            return _undefined(11954).setPendingChanges({ bio });
          };
          obj10.autoFocus = c1 === constants.BIO;
          obj10.maxLength = maxLength;
          obj10.disabled = isSubmitting;
          items1[5] = gesture(UserProfileEditFormTextFieldDefault, obj10);
          const obj11 = { user: _undefined, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
          const tmp6Result6 = UserProfileEditFormTextFieldDefault;
          if (tmp25) {
            let fn = UserProfileActionCreators.setTryItOutThemeColors;
          } else {
            fn = (themeColors) => _undefined(11954).setPendingChanges({ themeColors });
          }
          obj11.onProfileThemeColorsChanged = fn;
          obj11.pendingAvatarSrc = pendingAvatarSrc;
          obj11.pendingThemeColors = tmp25 ? tryItOutThemeColors : pendingThemeColors;
          obj11.isTryItOut = tmp25;
          items1[6] = gesture(UserProfileEditThemeDefault, obj11);
          const obj12 = { user: _undefined, pendingAvatarDecoration: tmp25 ? c23 : c18, isTryItOut: tmp25 };
          items1[7] = gesture(UserProfileAvatarDecorationEditButtonDefault, obj12);
          const obj13 = { user: _undefined, pendingProfileEffect: tmp25 ? c24 : c19, displayProfile, isTryItOut: tmp25 };
          items1[8] = gesture(UserProfileEffectEditButtonDefault, obj13);
          const obj14 = { user: _undefined, pendingProfileFrame, displayProfile };
          items1[9] = gesture(UserProfileFrameEditButtonDefault, obj14);
          const obj15 = { user: _undefined, pendingNameplate };
          items1[10] = gesture(UserProfileNameplateEditButtonDefault, obj15);
          let tmp12Result7 = closure_36;
          if (closure_36) {
            if (!tmp19) {
              tmp19 = tmp25;
            }
            tmp12Result7 = tmp19;
          }
          if (tmp12Result7) {
            const obj16 = { isTryItOut: tmp25 };
            tmp12Result7 = gesture(UserProfileTypingIndicatorEditButtonDefault, obj16);
          }
          items1[11] = tmp12Result7;
          const obj17 = {
            ref(arg0) {
                return closure_1_63(ref2.GUILD_TAG, arg0);
              },
            children: null
          };
          const obj18 = { user: _undefined, disabled: isSubmitting, tagStyle: null, pendingPrimaryGuildId: null };
          const obj19 = { backgroundColor: containerBackground2 };
          obj18.tagStyle = obj19;
          obj18.pendingPrimaryGuildId = pendingPrimaryGuildId;
          obj17.children = gesture(UserProfilePrimaryGuildEditButtonDefault, obj18);
          items1[12] = gesture(React4, obj17);
          let tmp12Result8 = null != legacyUsername;
          if (tmp12Result8) {
            tmp12Result8 = !isBadgeManagementEnabled;
          }
          if (tmp12Result8) {
            const obj20 = { legacyUsername, pendingLegacyUsernameDisabled };
            tmp12Result8 = gesture(UserProfileLegacyUsernameSwitchDefault, obj20);
          }
          items1[13] = tmp12Result8;
          obj2.children = items1;
          const items2 = [closure_2_16(React4, obj2), ];
          let tmp12Result9 = closure_47;
          if (closure_47) {
            const obj21 = {
              currentUser: _undefined,
              onLayout: closure_53.onTryItOutSectionLayout,
              onPreviewPremium() {
                    return _undefined(16166).openPremiumTryItOutModal();
                  }
            };
            tmp12Result9 = gesture(UserProfilePremiumTryItOutSectionDefault, obj21);
          }
          const obj22 = { children: null };
          items2[1] = tmp12Result9;
          obj22.children = items2;
          const tmpResult = closure_2_16(colors, obj22);
          const obj23 = { user: _undefined, displayName, badges, catalogBadges, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: null, pendingDisplayNameStyles: null };
          const tmp6Result7 = UserProfileEditThemeDefault;
          if (tmp29 == null) {
            tmp29 = str3;
          }
          obj23.pronouns = tmp29;
          obj23.badgeContainerBackground = containerBackground;
          obj23.canOpenBadgeDirectory = !tmp24;
          obj23.pendingDisplayNameStyles = tmp24 ? c26 : c34;
          const items3 = [gesture(UserProfilePrimaryInfoDefault, obj23), ];
          let tmp12Result10 = tmpResult;
          if (flag) {
            const obj24 = { value: tmpResult, children: null };
            const obj25 = { value, children: null };
            const obj26 = { ref, style: tabsAnchor.tabsAnchor, onLayout: measureTabsY, children: null };
            const obj27 = { userId: _undefined.id, initialTab, containerBackground, hasCustomProfileTheme, scrollPosition: sharedValue, scrollViewRef: animatedRef, isBoardTabOnScreen: sharedValue1, stickyTranslateY, onStickyTabsLayout };
            obj26.children = gesture(UserProfileEditFormTabsDefault, obj27);
            obj25.children = gesture(React4, obj26);
            obj24.children = gesture(UserProfileEditFormKeyboardAvoidingContextDefault.Provider, obj25);
            tmp12Result10 = gesture(UserProfileEditFormMainPageContextDefault.Provider, obj24);
          }
          const obj28 = { children: null };
          items3[1] = tmp12Result10;
          obj28.children = items3;
          return closure_2_16(colors, obj28);
        }
        tmp12Result = gesture(UserProfileDisplayNameStylesEditButtonDefault, { user: _undefined, isTryItOut });
        tmp24 = isTryItOut;
        tmp25 = isTryItOut;
        const obj29 = { user: _undefined, isTryItOut };
        const tmp6Result = UserProfileEditFormTextFieldDefault;
      }
    })
  ];
  obj26.children = items16;
  items14[1] = value(flag, obj26);
  obj23.children = items14;
  items11[3] = value(flag, obj23);
  obj20.children = items11;
  items10[1] = value(c18, obj20);
  if (!tmp27) {
    items10[2] = tmp27;
    obj19.children = items10;
    obj18.children = tmp58(tmp59, obj19);
    return tmp57(tmp4(5104).ThemeContextProvider, obj18);
  } else if (enabled) {
    tmp = UserProfilePremiumTryItOutUpsellDefault;
    obj = {
      isVisible: derivedValue,
      onPreviewPremium() {
          return _undefined(initialTab[66]).openPremiumTryItOutModal();
        }
    };
    let tmp57Result2 = tmp57(tmp, obj);
  } else {
    let obj29 = { isTryItOut };
    tmp57Result2 = tmp57(tmp4(16180).UserProfilePremiumUpsellCard, obj29);
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7557).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1071);
({ DISPLAY_NAME_MAX_LENGTH: closure_8, PRONOUNS_MAX_LENGTH: closure_9 } = Constants);
const HexagonCampaignConstants = fn(5068);
({ HexagonCampaignPerk: closure_10, HexagonCampaignPerkAvailability: closure_11 } = HexagonCampaignConstants);
let closure_12 = fn(1081).ProfileCustomizationScrollPositions;
let closure_13 = fn(16084).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = [1];
let closure_18 = module_1654.createAnimatedComponent(ScrollView);
const createStyles = fn(5043);
let obj = { stickyHeader: { zIndex: 2 }, tabsAnchor: { marginTop: nativeDefault.space.PX_12 } };
let closure_19 = createStyles.createStyles(obj);
let obj4 = { assetOrigin: fn(7346).AssetOriginTypes.NEW_ASSET, imageUri: _modDef16085, staticImageUri: _modDef16085, description: "", originalAsset: "analyticsLocations" };
let closure_24 = { code: "(function UserProfileEditFormTsx1(){let[isScrolledAboveTryItOutSection,isBoardTabOnScreen]=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default function UserProfileEditForm(isTryItOut) {
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isTryItOut, Object.assign({ isTryItOut: 0 }));
  if (flag) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.isTryItOut = true;
    let tmp2Result = gesture(UserProfileEditFormContent, obj2);
  } else {
    const obj = {};
    const merged2 = Object.assign(merged);
    tmp2Result = gesture(MainUserProfileEditForm, obj);
  }
  return tmp2Result;
};