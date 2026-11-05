// === Module 16702: UserProfileEditForm ===

// Module 16702 (UserProfileEditForm)
import util from "util" /* 1113 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7465 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7490 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8883 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8914 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 15215 */;
import _modDef16704 from "module_16704" /* 16704 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16705 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16718 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 16720 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8909 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11656 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function EditUserProfileBanner(arg0) {
  ({ user, displayProfile, pendingBanner, tryItOutBanner, isTryItOut, pendingAvatarSrc, pendingAccentColor, pendingThemeColors, disabled } = arg0);
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
  obj4.children = closure_1_15(UserProfileEditBannerButtonDefault, obj5);
  return closure_1_15(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
}
function MainUserProfileEditForm(arg0) {
  const obj2 = {};
  const isMobileWidgetEditingEnabled = MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  obj2.isWidgetEditingEnabled = isMobileWidgetEditingEnabled;
  return closure_1_15(UserProfileEditFormContent, obj2);
}
function UserProfileEditFormContent(currentUser) {
  _require = str;
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let flag = currentUser.isWidgetEditingEnabled;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  closure_4 = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  closure_8 = undefined;
  maxLength = undefined;
  let tmp = importDefault;
  obj = pendingBadgeDisplayOrder;
  let tmp2 = require("UserProfileSharedStyles")();
  const tmp3 = require("UserProfileEditFormSharedStyles")();
  const bioMaxLength = require("BioMaxLengthExperiment").useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = require("BioMaxLengthExperiment");
  const ref1 = pendingBadgeHiddenBadges.useRef(null);
  const tmp6 = require("useKeyboardIsOpen")();
  const sharedValue = require("module_1652").useSharedValue(0);
  importDefault = sharedValue;
  const obj4 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(false);
  const ref2 = pendingBadgeHiddenBadges.useRef(null);
  const ref3 = pendingBadgeHiddenBadges.useRef(null);
  const ref4 = pendingBadgeHiddenBadges.useRef(null);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const PX_16 = require("native").space.PX_16;
  const obj6 = { insets, inputs: null, scrollViewRef: null };
  items = [{ ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, { ref: ref3, offset: { type: "toRef", ref: ref4, extraOffset: PX_16 } }, ];
  const obj9 = { ref: ref4, offset: null };
  const obj10 = { type: "toValue", value: null };
  const obj5 = require("module_1652");
  const obj7 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const obj8 = { ref: ref3, offset: { type: "toRef", ref: ref4, extraOffset: PX_16 } };
  obj10.value = require("native").space.PX_64;
  obj9.offset = obj10;
  items[2] = obj9;
  obj6.inputs = items;
  obj6.scrollViewRef = ref1;
  const onFocus = require("useSafeAreaAvoidingInputs")(obj6).onFocus;
  const tmp14 = require("useUserProfileEditForm")();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp14);
  pendingBadgeHiddenBadges = tmp14.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp14);
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmp13 = require("useSafeAreaAvoidingInputs");
  const guildAutomodProfileQuarantineErrors = require("AutomodQuarantineUtils").useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj11 = require("AutomodQuarantineUtils");
  if (str2 == null) {
    str2 = "";
  }
  const tmp17Result = require("useDisplayProfile")(str2);
  const tmp17 = require("useDisplayProfile");
  const customStatusActivity = require("userSettingToActivity").useCustomStatusActivity();
  const tmp4Result = require("userSettingToActivity");
  const tmp4Result10 = require("CustomTypingIndicatorExperiment");
  const pendingAvatarSrc = require("RecentAvatarUtils").getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp20 = tmp(obj[35])(tmp17Result, pendingLegacyUsernameDisabled);
  closure_4 = tmp20;
  const obj12 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp4Result11 = require("RecentAvatarUtils");
  isBadgeManagementEnabled = require("BadgeManagementExperiment").useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result12 = require("BadgeManagementExperiment");
  const items1 = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(_undefined.id));
  const tmp4Result13 = require("initialize");
  const items2 = [stateFromStores];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(_undefined.id));
  const items3 = [currentUser.currentUser.id, isBadgeManagementEnabled];
  const effect = obj3.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(_undefined.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(_undefined.id) && !BadgeDirectoryStore.isCatalogStaleFor(_undefined.id);
    }
  }, items3);
  const items4 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj3.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_4, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items4);
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = obj3.useMemo(() => {
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
  const tmp4Result14 = require("initialize");
  let result = tmp(obj[12]).canUsePremiumProfileCustomization(str);
  const tmpResult = tmp(obj[12]);
  const hexagonCampaignPerkAvailability = require("HexagonCampaignPerkAvailability").useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp29 = !result;
  if (!result) {
    tmp29 = !tmp6;
  }
  const tmp4Result15 = require("HexagonCampaignPerkAvailability");
  const enabled = require("UserProfilePremiumTryItOutMobileRefreshExperiment").useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp61Result10 = enabled;
  if (enabled) {
    tmp61Result10 = !result;
  }
  if (tmp61Result10) {
    tmp61Result10 = !isTryItOut;
  }
  if (tmp17Result != null) {
    const legacyUsername = tmp17Result.getLegacyUsername();
  }
  let str3 = str.globalName;
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp17Result != null) {
    str4 = tmp17Result.pronouns;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp17Result != null) {
    str5 = tmp17Result.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const obj13 = { user: currentUser.currentUser, displayProfile: tmp17Result, pendingThemeColors: null, isPreview: null };
  let tmp33 = pendingThemeColors;
  const tmp4Result16 = require("UserProfilePremiumTryItOutMobileRefreshExperiment");
  if (isTryItOut) {
    tmp33 = tryItOutThemeColors;
  }
  obj13.pendingThemeColors = tmp33;
  obj13.isPreview = isTryItOut;
  const tmpResult9 = tmp(obj[42]);
  ({ theme, primaryColor, secondaryColor } = tmp(obj[42])(obj13));
  const tmpResult1Result = tmp(obj[42])(obj13);
  const userProfileColors = require("useUserProfileColors").useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const obj14 = { backgroundColor: userProfileColors.avatarBackground };
  const tmp37 = tmp(obj[44])();
  const height = tmp37.height;
  let num = 0;
  ({ ref, onLayout, width } = tmp37);
  if (undefined !== height) {
    num = height;
  }
  let num2 = 0;
  const tmp4Result17 = require("useUserProfileColors");
  if (tmp29) {
    num2 = 0;
    if (!tmp61Result10) {
      num2 = closure_8;
    }
  }
  const sum = insets.bottom + num2;
  const sum1 = sum + tmp(obj[26]).space.PX_16;
  const tmp41 = tmp(obj[46])(sharedValue, sum1);
  closure_8 = tmp41;
  const tmp38 = tmp(obj[45])(width);
  const items6 = [closure_21, tmp41.isScrolledAboveTryItOutSection, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp42, tmp43, tmp44] = items6;
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
  const items7 = [tmp43, tmp44];
  UserProfileEditFormTsx1.__closure = items7;
  UserProfileEditFormTsx1.__workletHash = 15732737689317;
  UserProfileEditFormTsx1.__initData = tmp42;
  const items8 = [sharedValue, tmp41];
  const derivedValue = require("module_1652").useDerivedValue(UserProfileEditFormTsx1);
  let tmp47 = tmp61Result10;
  const callback = obj3.useCallback((nativeEvent) => {
    const result = _undefined2.set(nativeEvent.nativeEvent.contentOffset.y);
    closure_8.onScroll(nativeEvent.nativeEvent);
  }, items8);
  if (!tmp61Result10) {
    tmp47 = flag;
  }
  let first;
  if (errors != null) {
    const username = errors.username;
    if (username != null) {
      first = username[0];
    }
  }
  if (first == null) {
    const global_name = errors.global_name;
    let first1;
    if (global_name != null) {
      first1 = global_name[0];
    }
    first = first1;
  }
  if (first == null) {
    let first2;
    if (guildAutomodProfileQuarantineErrors != null) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (nick != null) {
        first2 = nick[0];
      }
    }
    first = first2;
  }
  const pronouns = errors.pronouns;
  if (pronouns != null) {
    const first3 = pronouns[0];
  }
  const bio = errors.bio;
  if (bio != null) {
    const first4 = bio[0];
  }
  let stringResult = null;
  if (Object.keys(errors).length > 0) {
    stringResult = null;
    if (null == first4) {
      const intl = tmp4(obj[18]).intl;
      stringResult = intl.string(tmp4(obj[18]).t["84MExs"]);
    }
  }
  const field = stateFromStoresArray.useField("scrollPosition");
  maxLength = tmp(obj[47])(ref1, field);
  let tmp55 = tmp61Result10;
  if (tmp61Result10) {
    tmp55 = flag;
  }
  const items9 = [tmp3.formContainer, , ];
  let obj15 = flag;
  if (flag) {
    obj15 = { marginTop: 0 };
  }
  const obj16 = { style: items9, children: null };
  items9[1] = obj15;
  items9[2] = { backgroundColor: containerBackground };
  let tmp59 = null;
  if (null != stringResult) {
    tmp59 = null;
    if ("" !== stringResult) {
      const obj17 = { style: tmp3.errorContainer, children: null };
      const obj18 = { variant: "body-sm/semibold", color: "text-feedback-critical", children: stringResult };
      obj17.children = closure_15(tmp4(obj[48]).Text, obj18);
      tmp59 = closure_15(tmp58, obj17);
    }
  }
  const items10 = [tmp59, , , , , , , , , , , , , ];
  const obj19 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
  const tmp4Result18 = require("module_1652");
  const intl2 = tmp4(obj[18]).intl;
  obj19.label = intl2.string(require("util").t["9AjdkD"]);
  obj19.errorMessage = first;
  let tmp63 = pendingGlobalName;
  if (pendingGlobalName == null) {
    tmp63 = str3;
  }
  obj19.value = tmp63;
  obj19.onFocus = onFocus;
  obj19.onChange = function onChange(globalName) {
    return _undefined(pendingBadgeDisplayOrder[50]).setPendingChanges({ globalName });
  };
  obj19.placeholder = currentUser.currentUser.toString();
  obj19.maxLength = maxLength;
  obj19.disabled = isSubmitting;
  items10[1] = closure_15(tmp(obj[49]), obj19);
  if (!result) {
    if (!isTryItOut) {
      let tmp61Result = null;
      if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
        const obj20 = { user: str, availability: hexagonCampaignPerkAvailability, disabled: isSubmitting };
        tmp61Result = closure_15(tmp(obj[52]), obj20);
      }
    }
    items10[2] = tmp61Result;
    const obj21 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
    const intl3 = tmp4(obj[18]).intl;
    obj21.label = intl3.string(tmp4(obj[18]).t["+T3RI/"]);
    obj21.errorMessage = first3;
    let tmp67 = pendingPronouns;
    if (pendingPronouns == null) {
      tmp67 = str4;
    }
    obj21.value = tmp67;
    obj21.onFocus = onFocus;
    obj21.onChange = function onChange(pronouns) {
      return _undefined(pendingBadgeDisplayOrder[50]).setPendingChanges({ pronouns });
    };
    obj21.maxLength = maxLength2;
    obj21.disabled = isSubmitting;
    items10[3] = closure_15(tmp(obj[49]), obj21);
    let tmp61Result7 = !isTryItOut;
    if (!isTryItOut) {
      const obj22 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants3.BADGES };
      tmp61Result7 = closure_15(tmp(obj[53]), obj22);
    }
    items10[4] = tmp61Result7;
    const obj23 = { inputRef: ref4, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
    const tmpResult11 = tmp(obj[49]);
    const intl4 = tmp4(obj[18]).intl;
    obj23.label = intl4.string(tmp4(obj[18]).t.ZzAR2Y);
    obj23.errorMessage = first4;
    if (pendingBio == null) {
      pendingBio = str5;
    }
    obj23.value = pendingBio;
    obj23.onFocus = onFocus;
    obj23.onChange = function onChange(bio) {
      return _undefined(pendingBadgeDisplayOrder[50]).setPendingChanges({ bio });
    };
    obj23.autoFocus = autoFocusElement === constants3.BIO;
    obj23.maxLength = bioMaxLength;
    obj23.disabled = isSubmitting;
    items10[5] = closure_15(tmp(obj[49]), obj23);
    const obj24 = { user: str, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
    const tmpResult12 = tmp(obj[49]);
    if (isTryItOut) {
      let fn = tmp4(obj[55]).setTryItOutThemeColors;
    } else {
      fn = (themeColors) => _undefined(pendingBadgeDisplayOrder[50]).setPendingChanges({ themeColors });
    }
    obj24.onProfileThemeColorsChanged = fn;
    obj24.pendingAvatarSrc = pendingAvatarSrc;
    let tmp74 = pendingThemeColors;
    if (isTryItOut) {
      tmp74 = tryItOutThemeColors;
    }
    obj24.pendingThemeColors = tmp74;
    obj24.isTryItOut = isTryItOut;
    items10[6] = closure_15(tmp(obj[54]), obj24);
    const obj25 = { user: str, pendingAvatarDecoration: null, isTryItOut: null };
    const tmpResult13 = tmp(obj[54]);
    if (isTryItOut) {
      pendingAvatarDecoration = tryItOutAvatarDecoration;
    }
    obj25.pendingAvatarDecoration = pendingAvatarDecoration;
    obj25.isTryItOut = isTryItOut;
    items10[7] = closure_15(tmp(obj[56]), obj25);
    const obj26 = { user: str, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
    const tmpResult14 = tmp(obj[56]);
    if (isTryItOut) {
      pendingProfileEffect = tryItOutProfileEffect;
    }
    let tmp61Result8 = "profile" === tmp4Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
    obj26.pendingProfileEffect = pendingProfileEffect;
    obj26.displayProfile = tmp17Result;
    obj26.isTryItOut = isTryItOut;
    items10[8] = closure_15(tmp(obj[57]), obj26);
    const obj27 = { user: str, pendingProfileFrame, displayProfile: tmp17Result };
    items10[9] = closure_15(tmp(obj[58]), obj27);
    const obj28 = { user: str, pendingNameplate };
    items10[10] = closure_15(tmp(obj[59]), obj28);
    if (tmp61Result8) {
      if (!result) {
        result = isTryItOut;
      }
      tmp61Result8 = result;
    }
    if (tmp61Result8) {
      const obj29 = { isTryItOut };
      tmp61Result8 = closure_15(tmp(obj[60]), obj29);
    }
    items10[11] = tmp61Result8;
    const obj30 = {
      ref(arg0) {
          return closure_9(constants.GUILD_TAG, arg0);
        },
      children: null
    };
    const obj31 = { user: str, disabled: isSubmitting, tagStyle: null, pendingPrimaryGuildId: null };
    const obj32 = { backgroundColor: containerBackground };
    obj31.tagStyle = obj32;
    obj31.pendingPrimaryGuildId = pendingPrimaryGuildId;
    obj30.children = closure_15(tmp(obj[61]), obj31);
    items10[12] = closure_15(tmp58, obj30);
    let tmp61Result9 = null != legacyUsername && !isBadgeManagementEnabled;
    if (tmp61Result9) {
      const obj33 = { legacyUsername, pendingLegacyUsernameDisabled };
      tmp61Result9 = closure_15(tmp(obj[62]), obj33);
    }
    items10[13] = tmp61Result9;
    obj16.children = items10;
    const items11 = [closure_16(tmp58, obj16), ];
    if (tmp61Result10) {
      const obj34 = {
        currentUser: str,
        onLayout: tmp41.onTryItOutSectionLayout,
        onPreviewPremium() {
              return _undefined(pendingBadgeDisplayOrder[64]).openPremiumTryItOutModal();
            }
      };
      tmp61Result10 = closure_15(tmp(obj[63]), obj34);
    }
    const obj35 = { children: null };
    items11[1] = tmp61Result10;
    obj35.children = items11;
    const tmp56Result = closure_16(closure_17, obj35);
    const obj36 = { theme, primaryColor, secondaryColor, children: null };
    const obj37 = { ref, style: tmp3.container, onLayout, children: null };
    const obj38 = { gradientHeight: num, bannerHeight: tmp38 };
    const items12 = [closure_15(tmp(obj[66]), obj38), , ];
    const obj39 = { ref: ref1, onScroll: null, onContentSizeChange: null, onLayout: null, scrollEventThrottle: null, children: null };
    let tmp81;
    if (tmp47) {
      tmp81 = callback;
    }
    obj39.onScroll = tmp81;
    let onContentSizeChange;
    if (tmp55) {
      onContentSizeChange = tmp41.onContentSizeChange;
    }
    obj39.onContentSizeChange = onContentSizeChange;
    let onScrollViewLayout;
    if (tmp55) {
      onScrollViewLayout = tmp41.onScrollViewLayout;
    }
    obj39.onLayout = onScrollViewLayout;
    let num3;
    if (tmp47) {
      num3 = 16;
    }
    obj39.scrollEventThrottle = num3;
    const obj40 = { style: tmp3.bounceOffset };
    const items13 = [closure_15(tmp58, obj40), , ];
    const obj41 = { user: str, displayProfile: tmp17Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
    items13[1] = closure_15(EditUserProfileBanner, obj41);
    const obj42 = { style: null, children: null };
    const items14 = [, , , ];
    ({ avatarBackground: arr15[0], avatarPosition: arr15[1] } = tmp2);
    items14[2] = tmp3.avatarContainer;
    items14[3] = obj14;
    obj42.style = items14;
    const obj43 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj14, isTryItOut, autoStartEditFlow: autoFocusElement === constants3.AVATAR };
    obj42.children = closure_15(tmp(obj[67]), obj43);
    const items15 = [closure_15(tmp58, obj42), ];
    const obj44 = { style: null, children: null };
    const items16 = [, , ];
    ({ profileContentWrapper: arr17[0], profileContent: arr17[1] } = tmp2);
    const obj45 = { paddingTop: 0, paddingBottom: sum1 };
    items16[2] = obj45;
    obj44.style = items16;
    const obj46 = { customStatusActivity, hasCustomProfileTheme: tmp35, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj59.style, emojiOnlyCustomStatusBubble: obj59.emojiOnlyStyle } = tmp2);
    const items17 = [closure_15(tmp(obj[68]), obj46), , ];
    const obj47 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: null, pendingDisplayNameStyles: null };
    const tmp80 = closure_4;
    const tmpResult15 = tmp(obj[57]);
    if (pendingPronouns == null) {
      pendingPronouns = str4;
    }
    obj47.pronouns = pendingPronouns;
    obj47.badgeContainerBackground = containerBackground;
    obj47.canOpenBadgeDirectory = !isTryItOut;
    if (isTryItOut) {
      pendingDisplayNameStyles = tryItOutDisplayNameStyles;
    }
    obj47.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items17[1] = closure_15(tmp(obj[69]), obj47);
    let tmp61Result11 = tmp56Result;
    if (flag) {
      const obj48 = { value: tmp56Result, children: null };
      const obj49 = { userId: str.id, containerBackground, hasCustomProfileTheme: tmp35, scrollPosition: sharedValue, scrollViewRef: ref1, isBoardTabOnScreen: sharedValue1 };
      obj48.children = closure_15(tmp(obj[71]), obj49);
      tmp61Result11 = closure_15(tmp(obj[70]).Provider, obj48);
    }
    const obj50 = { children: null };
    items17[2] = tmp61Result11;
    obj44.children = items17;
    items15[1] = closure_16(tmp58, obj44);
    obj50.children = items15;
    items13[2] = closure_16(tmp58, obj50);
    obj39.children = items13;
    items12[1] = closure_16(tmp80, obj39);
    if (!tmp29) {
      items12[2] = tmp29;
      obj37.children = items12;
      obj36.children = closure_16(tmp58, obj37);
      return closure_15(tmp4(obj[65]).ThemeContextProvider, obj36);
    } else if (enabled) {
      tmp = tmp(obj[72]);
      obj = {
        isVisible: derivedValue,
        onPreviewPremium() {
              return _undefined(pendingBadgeDisplayOrder[64]).openPremiumTryItOutModal();
            }
      };
      let tmp61Result12 = closure_15(tmp, obj);
    } else {
      const obj51 = { isTryItOut };
      tmp61Result12 = closure_15(tmp4(obj[73]).UserProfilePremiumUpsellCard, obj51);
    }
    const tmpResult16 = tmp(obj[69]);
  }
  tmp61Result = closure_15(tmp(obj[51]), { user: str, isTryItOut });
  const tmpResult10 = tmp(obj[49]);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7515).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1072);
({ DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: closure_10 } = Constants);
const HexagonCampaignConstants = fn(5168);
({ HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = fn(1082).ProfileCustomizationScrollPositions;
const constants3 = fn(16703).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let obj = { assetOrigin: fn(7300).AssetOriginTypes.NEW_ASSET, imageUri: _modDef16704, staticImageUri: _modDef16704, description: "", originalAsset: "applicationId" };
let closure_21 = { code: "(function UserProfileEditFormTsx1(){let[isScrolledAboveTryItOutSection,isBoardTabOnScreen]=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();})" };
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
};