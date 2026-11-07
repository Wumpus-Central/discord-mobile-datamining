// discord_app/modules/user_profile/native/UserProfileEditForm.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useKeyboardIsOpenDefault from "../../keyboard/native/useKeyboardIsOpen.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import UserProfileActionCreators from "../UserProfileActionCreators.tsx";
import useDisplayProfileDefault from "../hooks/useDisplayProfile.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import useUserProfileColors from "../hooks/native/useUserProfileColors.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import useFetchCollectiblesCategoriesAndPurchasesDefault from "../../collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx";
import useSafeAreaAvoidingInputsDefault from "../../safe_area/useSafeAreaAvoidingInputs.native.tsx";
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo.tsx";
import MobileWidgetEditingExperiment from "../experiments/MobileWidgetEditingExperiment.tsx";
import PendingBadgeSettings from "../../badges/PendingBadgeSettings.tsx";
import _modDef16749 from "../../../../_runtime/metro/16749__.js";
import useOpenChangeBannerActionSheetDefault from "../hooks/native/useOpenChangeBannerActionSheet.tsx";
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton.tsx";
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles.tsx";
import useUserProfileEditFormDefault from "../../user_settings/profiles/native/useUserProfileEditForm.tsx";
import UserProfileEditFormTextFieldDefault from "UserProfileEditFormTextField.tsx";
import UserProfileDisplayNameStylesEditButtonDefault from "UserProfileDisplayNameStylesEditButton.tsx";
import UserProfileHexagonCampaignDisplayNameStyleEditButtonDefault from "UserProfileHexagonCampaignDisplayNameStyleEditButton.tsx";
import UserProfileBadgesEditButtonDefault from "UserProfileBadgesEditButton.tsx";
import UserProfileEditThemeDefault from "UserProfileEditTheme.tsx";
import UserProfileAvatarDecorationEditButtonDefault from "UserProfileAvatarDecorationEditButton.tsx";
import UserProfileEffectEditButtonDefault from "UserProfileEffectEditButton.tsx";
import UserProfileFrameEditButtonDefault from "UserProfileFrameEditButton.tsx";
import UserProfileNameplateEditButtonDefault from "UserProfileNameplateEditButton.tsx";
import UserProfileTypingIndicatorEditButtonDefault from "../../custom_typing_indicator/native/UserProfileTypingIndicatorEditButton.tsx";
import UserProfilePrimaryGuildEditButtonDefault from "UserProfilePrimaryGuildEditButton.tsx";
import UserProfileLegacyUsernameSwitchDefault from "UserProfileLegacyUsernameSwitch.tsx";
import UserProfilePremiumTryItOutSectionDefault from "UserProfilePremiumTryItOutSection.tsx";
import UserProfileEditFormMainPageContextDefault from "UserProfileEditFormMainPageContext.tsx";
import UserProfileEditFormTabsDefault from "UserProfileEditFormTabs.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import ProfileCustomizationNavigationStore from "../../profile_customization/ProfileCustomizationNavigationStore.tsx";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

const useProfileThemeDefault = tmp(8873);
const useUserProfileBannerHeightDefault = tmp(8876);
const UserProfileFixedBackgroundDefault = tmp(8884);
const useBadgesDefault = tmp(8889);
const useMeasuredLayoutDefault = tmp(9069);
const UserProfileCustomStatusBubbleDefault = tmp(11537);
const useTryItOutUpsellScrollTrackingDefault = tmp(16772);
const useScrollToUserProfileEditFormSectionDefault = tmp(16773);
const EditUserProfileAvatarDefault = tmp(16856);
const UserProfilePremiumTryItOutUpsellDefault = tmp(16866);
require = fn;
function EditUserProfileBanner(arg0) {
  ({
    user,
    displayProfile,
    pendingBanner,
    tryItOutBanner,
    isTryItOut,
    pendingAvatarSrc,
    pendingAccentColor,
    pendingThemeColors,
    disabled,
  } = arg0);
  if (isTryItOut) {
    if (tryItOutBanner == null) {
      tryItOutBanner = obj;
    }
    pendingBanner = tryItOutBanner;
  }
  obj = PremiumUtilsDefault;
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  const obj2 = { user, analyticsLocations, isTryItOut, showRemoveBanner: null };
  const tmp6 = useOpenChangeBannerActionSheetDefault;
  let banner;
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  obj2.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
  const obj4 = { value: analyticsLocations, children: null };
  const obj5 = {
    user,
    displayProfile,
    pendingBanner,
    pendingAvatarSrc,
    pendingThemeColors,
    pendingAccentColor,
    bannerSafeArea: null,
    showProfilePreviewButton: null,
    onPressEdit: null,
    editButtonAccessibilityLabel: null,
    editDisabled: null,
  };
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
  obj4.children = closure_1_15(UserProfileEditBannerButtonDefault, obj5);
  return closure_1_15(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
}
function ProfileThemeContainerColors(arg0) {
  ({ profileTheme, children } = arg0);
  const userProfileColors = useUserProfileColors.useUserProfileColors(profileTheme);
  const obj2 = {
    children: children({
      containerBackground: userProfileColors.containerBackground,
      containerBorderColor: userProfileColors.containerBorderColor,
    }),
  };
  return closure_1_15(value2, obj2);
}
function MainUserProfileEditForm(arg0) {
  const obj2 = {};
  const isMobileWidgetEditingEnabled =
    MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  obj2.isWidgetEditingEnabled = isMobileWidgetEditingEnabled;
  return closure_1_15(UserProfileEditFormContent, obj2);
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
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  pendingThemeColors = undefined;
  c20 = undefined;
  c21 = undefined;
  tryItOutThemeColors = undefined;
  c23 = undefined;
  c24 = undefined;
  c25 = undefined;
  c26 = undefined;
  pendingLegacyUsernameDisabled = undefined;
  c30 = undefined;
  c31 = undefined;
  let displayProfile;
  closure_33 = undefined;
  let pendingAvatarSrc;
  closure_35 = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  let badges;
  let catalogBadges;
  c41 = undefined;
  c42 = undefined;
  closure_43 = undefined;
  closure_44 = undefined;
  let legacyUsername;
  let str2;
  let str3;
  let str4;
  let hasCustomProfileTheme;
  closure_50 = undefined;
  let errorMessage;
  let first3;
  let first4;
  c54 = undefined;
  closure_55 = undefined;
  let tmp = importDefault;
  obj = dependencyMap;
  let tmp2 = UserProfileSharedStylesDefault();
  const tmp3 = UserProfileEditFormSharedStylesDefault();
  const formContainer = tmp3;
  maxLength = require("BioMaxLengthExperiment").useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = require("BioMaxLengthExperiment");
  const ref1 = isTryItOut.useRef(null);
  const tmp5 = useKeyboardIsOpenDefault();
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  let obj4 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(false);
  const ref2 = isTryItOut.useRef(null);
  const ref3 = isTryItOut.useRef(null);
  const ref4 = isTryItOut.useRef(null);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const PX_16 = nativeDefault.space.PX_16;
  let obj6 = { insets, inputs: null, scrollViewRef: null };
  items = [
    { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } },
    { ref: ref3, offset: { type: "toRef", ref: ref4, extraOffset: PX_16 } },
  ];
  let obj9 = { ref: ref4, offset: null };
  let obj10 = { type: "toValue", value: null };
  let obj5 = require("../../../../_runtime/metro/01652__.js");
  let obj7 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  let obj8 = { ref: ref3, offset: { type: "toRef", ref: ref4, extraOffset: PX_16 } };
  obj10.value = nativeDefault.space.PX_64;
  obj9.offset = obj10;
  items[2] = obj9;
  obj6.inputs = items;
  obj6.scrollViewRef = ref1;
  const onFocus = useSafeAreaAvoidingInputsDefault(obj6).onFocus;
  const tmp13 = useUserProfileEditFormDefault();
  ({ errors, isSubmitting } = tmp13);
  ({
    pendingAvatarDecoration: c15,
    pendingProfileEffect: c16,
    pendingProfileFrame: c17,
    pendingNameplate: c18,
    pendingThemeColors,
  } = tmp13);
  ({ tryItOutAvatarDecoration: c20, tryItOutProfileEffect: c21, tryItOutThemeColors } = tmp13);
  ({
    tryItOutDisplayNameStyles: c23,
    pendingGlobalName: c24,
    pendingPronouns: c25,
    pendingBio: c26,
    pendingLegacyUsernameDisabled,
  } = tmp13);
  const pendingBadgeDisplayOrder = tmp13.pendingBadgeDisplayOrder;
  const pendingBadgeHiddenBadges = tmp13.pendingBadgeHiddenBadges;
  ({
    pendingPrimaryGuildId: c30,
    pendingDisplayNameStyles: c31,
    pendingAvatar,
    pendingBanner,
    pendingAccentColor,
    tryItOutBanner,
  } = tmp13);
  useFetchCollectiblesCategoriesAndPurchasesDefault();
  const guildAutomodProfileQuarantineErrors =
    require("AutomodQuarantineUtils").useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  let obj11 = require("AutomodQuarantineUtils");
  if (str == null) {
    str = "";
  }
  const tmp16Result = useDisplayProfileDefault(str);
  displayProfile = tmp16Result;
  const customStatusActivity = require("userSettingToActivity").useCustomStatusActivity();
  const tmp4Result = require("userSettingToActivity");
  closure_33 =
    "profile" ===
    require("CustomTypingIndicatorExperiment").useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const tmp4Result10 = require("CustomTypingIndicatorExperiment");
  pendingAvatarSrc = require("RecentAvatarUtils").getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  let tmp19 = useBadgesDefault(tmp16Result, pendingLegacyUsernameDisabled);
  closure_35 = tmp19;
  let obj12 = { userId: currentUser.id, image: pendingAvatar };
  const tmp4Result11 = require("RecentAvatarUtils");
  isBadgeManagementEnabled = require("BadgeManagementExperiment").useIsBadgeManagementEnabled({
    location: "UserProfileEditForm",
  });
  const tmp4Result12 = require("BadgeManagementExperiment");
  let items1 = [maxLength];
  stateFromStores = require("initialize").useStateFromStores(items1, () =>
    BadgeDirectoryStore.hasCatalogFor(_undefined.id),
  );
  const tmp4Result13 = require("initialize");
  let items2 = [maxLength];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () =>
    BadgeDirectoryStore.getBadges(_undefined.id),
  );
  let items3 = [currentUser.id, isBadgeManagementEnabled];
  const effect = obj3.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(_undefined.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(_undefined.id) && !BadgeDirectoryStore.isCatalogStaleFor(_undefined.id);
    }
  }, items3);
  const items4 = [tmp19, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  badges = obj3.useMemo(
    () =>
      PendingBadgeSettings.getPendingProfileBadges(closure_35, stateFromStoresArray, {
        pendingBadgeDisplayOrder,
        pendingBadgeHiddenBadges,
      }),
    items4,
  );
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  catalogBadges = obj3.useMemo(() => {
    let found = null;
    if (stateFromStores) {
      const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const result = PendingBadgeSettings.applyPendingBadgeSettings(stateFromStoresArray, obj2);
      found = result.filter((owned) => owned.owned && !owned.hidden);
    }
    return found;
  }, items5);
  let someResult = !stateFromStores;
  if (stateFromStores) {
    someResult = stateFromStoresArray.some((owned) => owned.owned);
  }
  c41 = someResult;
  const tmp4Result14 = require("initialize");
  let result = PremiumUtilsDefault.canUsePremiumProfileCustomization(currentUser);
  c42 = result;
  let tmpResult = PremiumUtilsDefault;
  closure_43 = require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(
    ref3.DISPLAY_NAME_STYLE,
    "UserProfileEditForm",
  );
  let tmp25 = !result;
  if (!result) {
    tmp25 = !tmp5;
  }
  const tmp4Result15 = require("HexagonCampaignPerkAvailability");
  const enabled = require("UserProfilePremiumTryItOutMobileRefreshExperiment").useTryItOutMobileRefreshConfig(
    "UserProfileEditForm",
  ).enabled;
  let tmp26 = enabled;
  if (enabled) {
    tmp26 = !result;
  }
  if (tmp26) {
    tmp26 = !isTryItOut;
  }
  closure_44 = tmp26;
  legacyUsername = undefined;
  if (tmp16Result != null) {
    legacyUsername = tmp16Result.getLegacyUsername();
  }
  str2 = currentUser.globalName;
  if (str2 == null) {
    str2 = "";
  }
  str3 = undefined;
  if (tmp16Result != null) {
    str3 = tmp16Result.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  str4 = undefined;
  if (tmp16Result != null) {
    str4 = tmp16Result.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  let obj13 = { user: currentUser, displayProfile: tmp16Result, pendingThemeColors: null, isPreview: null };
  let tmp29 = pendingThemeColors;
  const tmp4Result16 = require("UserProfilePremiumTryItOutMobileRefreshExperiment");
  if (isTryItOut) {
    tmp29 = tryItOutThemeColors;
  }
  obj13.pendingThemeColors = tmp29;
  obj13.isPreview = isTryItOut;
  const tmpResult1Result = useProfileThemeDefault(obj13);
  const primaryColor = tmpResult1Result.primaryColor;
  hasCustomProfileTheme = tmp31;
  let obj14 = { backgroundColor: null };
  ({ theme, secondaryColor } = tmpResult1Result);
  const tmpResult2 = useProfileThemeDefault;
  obj14.backgroundColor = require("useUserProfileColors").useUserProfileColors(tmpResult1Result).avatarBackground;
  const tmp32 = useMeasuredLayoutDefault();
  const height = tmp32.height;
  let num = 0;
  ({ ref, onLayout, width } = tmp32);
  if (undefined !== height) {
    num = height;
  }
  let num2 = 0;
  const tmp4Result17 = require("useUserProfileColors");
  if (tmp25) {
    num2 = 0;
    if (!tmp26) {
      num2 = sharedValue;
    }
  }
  const sum = insets.bottom + num2;
  const sum1 = sum + nativeDefault.space.PX_16;
  const tmp36 = useTryItOutUpsellScrollTrackingDefault(sharedValue, sum1);
  closure_50 = tmp36;
  const tmp33 = useUserProfileBannerHeightDefault(width);
  const items6 = [c23, tmp36.isScrolledAboveTryItOutSection, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp37, tmp38, tmp39] = items6;
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
  const items7 = [tmp38, tmp39];
  UserProfileEditFormTsx1.__closure = items7;
  UserProfileEditFormTsx1.__workletHash = 15732737689317;
  UserProfileEditFormTsx1.__initData = tmp37;
  const items8 = [sharedValue, tmp36];
  const derivedValue = require("../../../../_runtime/metro/01652__.js").useDerivedValue(UserProfileEditFormTsx1);
  let tmp42 = tmp26;
  const callback = obj3.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    closure_50.onScroll(nativeEvent.nativeEvent);
  }, items8);
  if (!tmp26) {
    tmp42 = flag;
  }
  errorMessage = undefined;
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
      let intl = tmp4(1113).intl;
      stringResult = intl.string(tmp4(1113).t["84MExs"]);
    }
  }
  c54 = stringResult;
  const field = ref1.useField("scrollPosition");
  closure_55 = useScrollToUserProfileEditFormSectionDefault(ref1, field);
  if (tmp26) {
    tmp26 = flag;
  }
  let obj15 = { theme, primaryColor, secondaryColor, children: null };
  let obj16 = { ref, style: tmp3.container, onLayout, children: null };
  const items9 = [c15(UserProfileFixedBackgroundDefault, { gradientHeight: num, bannerHeight: tmp33 }), ,];
  let obj17 = {
    ref: ref1,
    onScroll: null,
    onContentSizeChange: null,
    onLayout: null,
    scrollEventThrottle: null,
    stickyHeaderIndices: null,
    stickyHeaderHiddenOnScroll: null,
    keyboardShouldPersistTaps: null,
    children: null,
  };
  let tmp54;
  if (tmp42) {
    tmp54 = callback;
  }
  obj17.onScroll = tmp54;
  let onContentSizeChange;
  if (tmp26) {
    onContentSizeChange = tmp36.onContentSizeChange;
  }
  obj17.onContentSizeChange = onContentSizeChange;
  let onScrollViewLayout;
  if (tmp26) {
    onScrollViewLayout = tmp36.onScrollViewLayout;
  }
  obj17.onLayout = onScrollViewLayout;
  let num3;
  if (tmp42) {
    num3 = 16;
  }
  obj17.scrollEventThrottle = num3;
  let tmp57;
  if (null != header) {
    tmp57 = c18;
  }
  obj17.stickyHeaderIndices = tmp57;
  obj17.stickyHeaderHiddenOnScroll = null != header;
  let str5;
  if (null != header) {
    str5 = "handled";
  }
  obj17.keyboardShouldPersistTaps = str5;
  const items10 = [
    c15(formContainer, { style: tmp3.bounceOffset }),
    header,
    c15(c20, {
      user: currentUser,
      displayProfile: tmp16Result,
      pendingAvatarSrc,
      pendingBanner,
      pendingAccentColor,
      pendingThemeColors,
      tryItOutBanner,
      isTryItOut,
      disabled: isSubmitting,
    }),
  ];
  let obj19 = { children: null };
  let obj20 = {
    style: null,
    children: c15(EditUserProfileAvatarDefault, {
      user: currentUser,
      disabled: isSubmitting,
      disableStatus: null != isTryItOut,
      statusStyle: obj14,
      isTryItOut,
      autoStartEditFlow: autoFocusElement === isSubmitting.AVATAR,
    }),
  };
  const items11 = [, , ,];
  ({ avatarBackground: arr12[0], avatarPosition: arr12[1] } = tmp2);
  items11[2] = tmp3.avatarContainer;
  items11[3] = obj14;
  obj20.style = items11;
  const items12 = [c15(formContainer, obj20)];
  let obj22 = { style: null, children: null };
  const items13 = [, ,];
  ({ profileContentWrapper: arr14[0], profileContent: arr14[1] } = tmp2);
  items13[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj22.style = items13;
  const items14 = [
    c15(UserProfileCustomStatusBubbleDefault, {
      customStatusActivity,
      hasCustomProfileTheme: null != primaryColor,
      style: tmp2.customStatusBubble,
      emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble,
      editEnabled: true,
    }),
    c15(c21, {
      profileTheme: tmpResult1Result,
      children(borderColor) {
        const containerBackground = borderColor.containerBackground;
        const containerBackground2 = borderColor.containerBackground;
        items = [formContainer.formContainer, ,];
        obj = flag;
        if (flag) {
          obj = { marginTop: 0 };
        }
        const obj2 = { style: null, children: null };
        items[1] = obj;
        items[2] = {
          backgroundColor: containerBackground2,
          borderColor: borderColor.containerBorderColor,
          borderWidth: 1,
          borderRadius: nativeDefault.radii.md,
        };
        obj2.style = items;
        let tmp9 = null;
        if (null != children) {
          tmp9 = null;
          if ("" !== children) {
            const obj4 = { style: formContainer.errorContainer, children: null };
            const obj5 = { variant: "body-sm/semibold", color: "text-feedback-critical", children };
            obj4.children = closure_2_15(Text_Text.Text, obj5);
            tmp9 = closure_2_15(hasOwnProperty, obj4);
          }
        }
        const items1 = [tmp9, , , , , , , , , , , , ,];
        const obj6 = {
          inputRef: ref2,
          label: null,
          errorMessage: null,
          value: null,
          onFocus: null,
          onChange: null,
          placeholder: null,
          maxLength: null,
          disabled: null,
        };
        const obj3 = {
          backgroundColor: containerBackground2,
          borderColor: borderColor.containerBorderColor,
          borderWidth: 1,
          borderRadius: nativeDefault.radii.md,
        };
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
          return _undefined(8806).setPendingChanges({ globalName });
        };
        obj6.placeholder = _undefined.toString();
        obj6.maxLength = maxLength;
        obj6.disabled = isSubmitting;
        items1[1] = closure_2_15(UserProfileEditFormTextFieldDefault, obj6);
        let tmp19 = c42;
        if (!c42) {
          if (!isTryItOut) {
            let tmp12Result = null;
            if (closure_43 !== constants.HIDDEN) {
              const obj7 = { user: _undefined, availability: tmp21, disabled: isSubmitting };
              tmp12Result = closure_2_15(UserProfileHexagonCampaignDisplayNameStyleEditButtonDefault, obj7);
            }
            let tmp24 = isTryItOut;
            let tmp25 = isTryItOut;
          }
          items1[2] = tmp12Result;
          const obj8 = {
            inputRef: ref3,
            label: null,
            errorMessage: null,
            value: null,
            onFocus: null,
            onChange: null,
            maxLength: null,
            spellCheck: false,
            autoCorrect: false,
            disabled: null,
          };
          const intl2 = util.intl;
          obj8.label = intl2.string(util.t["+T3RI/"]);
          obj8.errorMessage = first3;
          let tmp29 = c25;
          let tmp30 = c25;
          if (c25 == null) {
            tmp30 = str3;
          }
          obj8.value = tmp30;
          obj8.onFocus = onFocus;
          obj8.onChange = function onChange(pronouns) {
            return _undefined(8806).setPendingChanges({ pronouns });
          };
          obj8.maxLength = maxLength2;
          obj8.disabled = isSubmitting;
          items1[3] = closure_2_15(UserProfileEditFormTextFieldDefault, obj8);
          let tmp12Result6 = !tmp25;
          if (!tmp25) {
            const obj9 = { badges, catalogBadges, ownsAnyBadge, autoOpen: c1 === isSubmitting.BADGES };
            tmp12Result6 = closure_2_15(UserProfileBadgesEditButtonDefault, obj9);
          }
          items1[4] = tmp12Result6;
          const obj10 = {
            inputRef: ref4,
            label: null,
            errorMessage: null,
            value: null,
            onFocus: null,
            onChange: null,
            autoFocus: null,
            maxLength: null,
            numberOfLines: 5,
            disabled: null,
          };
          const tmp6Result5 = UserProfileEditFormTextFieldDefault;
          const intl3 = util.intl;
          obj10.label = intl3.string(util.t.ZzAR2Y);
          obj10.errorMessage = first4;
          let tmp41 = c26;
          if (c26 == null) {
            tmp41 = str4;
          }
          obj10.value = tmp41;
          obj10.onFocus = onFocus;
          obj10.onChange = function onChange(bio) {
            return _undefined(8806).setPendingChanges({ bio });
          };
          obj10.autoFocus = c1 === isSubmitting.BIO;
          obj10.maxLength = maxLength;
          obj10.disabled = isSubmitting;
          items1[5] = closure_2_15(UserProfileEditFormTextFieldDefault, obj10);
          const obj11 = {
            user: _undefined,
            onProfileThemeColorsChanged: null,
            pendingAvatarSrc: null,
            pendingThemeColors: null,
            isTryItOut: null,
          };
          const tmp6Result6 = UserProfileEditFormTextFieldDefault;
          if (tmp25) {
            let fn = UserProfileActionCreators.setTryItOutThemeColors;
          } else {
            fn = (themeColors) => _undefined(8806).setPendingChanges({ themeColors });
          }
          obj11.onProfileThemeColorsChanged = fn;
          obj11.pendingAvatarSrc = pendingAvatarSrc;
          obj11.pendingThemeColors = tmp25 ? tryItOutThemeColors : pendingThemeColors;
          obj11.isTryItOut = tmp25;
          items1[6] = closure_2_15(UserProfileEditThemeDefault, obj11);
          const obj12 = { user: _undefined, pendingAvatarDecoration: tmp25 ? c20 : c15, isTryItOut: tmp25 };
          items1[7] = closure_2_15(UserProfileAvatarDecorationEditButtonDefault, obj12);
          const obj13 = {
            user: _undefined,
            pendingProfileEffect: tmp25 ? c21 : c16,
            displayProfile,
            isTryItOut: tmp25,
          };
          items1[8] = closure_2_15(UserProfileEffectEditButtonDefault, obj13);
          const obj14 = { user: _undefined, pendingProfileFrame, displayProfile };
          items1[9] = closure_2_15(UserProfileFrameEditButtonDefault, obj14);
          const obj15 = { user: _undefined, pendingNameplate };
          items1[10] = closure_2_15(UserProfileNameplateEditButtonDefault, obj15);
          let tmp12Result7 = closure_33;
          if (closure_33) {
            if (!tmp19) {
              tmp19 = tmp25;
            }
            tmp12Result7 = tmp19;
          }
          if (tmp12Result7) {
            const obj16 = { isTryItOut: tmp25 };
            tmp12Result7 = closure_2_15(UserProfileTypingIndicatorEditButtonDefault, obj16);
          }
          items1[11] = tmp12Result7;
          const obj17 = {
            ref(arg0) {
              return closure_1_55(onFocus.GUILD_TAG, arg0);
            },
            children: null,
          };
          const obj18 = { user: _undefined, disabled: isSubmitting, tagStyle: null, pendingPrimaryGuildId: null };
          const obj19 = { backgroundColor: containerBackground2 };
          obj18.tagStyle = obj19;
          obj18.pendingPrimaryGuildId = pendingPrimaryGuildId;
          obj17.children = closure_2_15(UserProfilePrimaryGuildEditButtonDefault, obj18);
          items1[12] = closure_2_15(hasOwnProperty, obj17);
          let tmp12Result8 = null != legacyUsername;
          if (tmp12Result8) {
            tmp12Result8 = !isBadgeManagementEnabled;
          }
          if (tmp12Result8) {
            const obj20 = { legacyUsername, pendingLegacyUsernameDisabled };
            tmp12Result8 = closure_2_15(UserProfileLegacyUsernameSwitchDefault, obj20);
          }
          items1[13] = tmp12Result8;
          obj2.children = items1;
          const items2 = [closure_2_17(hasOwnProperty, obj2)];
          let tmp12Result9 = closure_44;
          if (closure_44) {
            const obj21 = {
              currentUser: _undefined,
              onLayout: closure_50.onTryItOutSectionLayout,
              onPreviewPremium() {
                return _undefined(16852).openPremiumTryItOutModal();
              },
            };
            tmp12Result9 = closure_2_15(UserProfilePremiumTryItOutSectionDefault, obj21);
          }
          const obj22 = { children: null };
          items2[1] = tmp12Result9;
          obj22.children = items2;
          const tmpResult = closure_2_17(value2, obj22);
          const obj23 = {
            user: _undefined,
            displayName,
            badges,
            catalogBadges,
            pronouns: null,
            badgeContainerBackground: null,
            displayNameAccessibilityRole: "header",
            canOpenBadgeDirectory: null,
            pendingDisplayNameStyles: null,
          };
          const tmp6Result7 = UserProfileEditThemeDefault;
          if (tmp29 == null) {
            tmp29 = str3;
          }
          obj23.pronouns = tmp29;
          obj23.badgeContainerBackground = containerBackground;
          obj23.canOpenBadgeDirectory = !tmp24;
          obj23.pendingDisplayNameStyles = tmp24 ? c23 : c31;
          const items3 = [closure_2_15(UserProfilePrimaryInfoDefault, obj23)];
          let tmp12Result10 = tmpResult;
          if (flag) {
            const obj24 = { value: tmpResult, children: null };
            const obj25 = {
              userId: _undefined.id,
              initialTab,
              containerBackground,
              hasCustomProfileTheme,
              scrollPosition: sharedValue,
              scrollViewRef: ref1,
              isBoardTabOnScreen: sharedValue1,
            };
            obj24.children = closure_2_15(UserProfileEditFormTabsDefault, obj25);
            tmp12Result10 = closure_2_15(UserProfileEditFormMainPageContextDefault.Provider, obj24);
          }
          const obj26 = { children: null };
          items3[1] = tmp12Result10;
          obj26.children = items3;
          return closure_2_17(value2, obj26);
        }
        tmp12Result = closure_2_15(UserProfileDisplayNameStylesEditButtonDefault, { user: _undefined, isTryItOut });
        tmp24 = isTryItOut;
        tmp25 = isTryItOut;
        const obj27 = { user: _undefined, isTryItOut };
        const tmp6Result = UserProfileEditFormTextFieldDefault;
      },
    }),
  ];
  obj22.children = items14;
  items12[1] = c17(formContainer, obj22);
  obj19.children = items12;
  items10[3] = c17(formContainer, obj19);
  obj17.children = items10;
  items9[1] = c17(flag, obj17);
  if (!tmp25) {
    items9[2] = tmp25;
    obj16.children = items9;
    obj15.children = tmp51(tmp52, obj16);
    return tmp50(tmp4(5199).ThemeContextProvider, obj15);
  } else if (enabled) {
    tmp = UserProfilePremiumTryItOutUpsellDefault;
    obj = {
      isVisible: derivedValue,
      onPreviewPremium() {
        return _undefined(initialTab[64]).openPremiumTryItOutModal();
      },
    };
    let tmp50Result = tmp50(tmp, obj);
  } else {
    let obj25 = { isTryItOut };
    tmp50Result = tmp50(tmp4(16867).UserProfilePremiumUpsellCard, obj25);
  }
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7437).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1072);
({ DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: closure_10 } = Constants);
const HexagonCampaignConstants = fn(5165);
({ HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = fn(1082).ProfileCustomizationScrollPositions;
let closure_14 = fn(16748).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = [1];
let obj = {
  assetOrigin: fn(7222).AssetOriginTypes.NEW_ASSET,
  imageUri: _modDef16749,
  staticImageUri: _modDef16749,
  description: "",
  originalAsset: "add",
};
let closure_23 = {
  code: "(function UserProfileEditFormTsx1(){let[isScrolledAboveTryItOutSection,isBoardTabOnScreen]=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();})",
};
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
    let tmp2Result = closure_1_15(UserProfileEditFormContent, obj2);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp2Result = closure_1_15(MainUserProfileEditForm, obj);
  }
  return tmp2Result;
}
