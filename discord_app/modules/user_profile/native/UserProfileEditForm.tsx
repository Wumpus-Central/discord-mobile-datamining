// === Module 16586: UserProfileEditForm ===

// Module 16586 (UserProfileEditForm)
import util from "util" /* 1113 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2176 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7446 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7471 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8861 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8892 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 15121 */;
import _modDef16588 from "module_16588" /* 16588 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16589 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16602 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 16604 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8887 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11596 */;

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
  let context;
  pendingBadgeDisplayOrder = undefined;
  closure_5 = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  maxLength = undefined;
  maxLength2 = undefined;
  let tmp = importDefault;
  obj = context;
  let tmp2 = require("UserProfileSharedStyles")();
  const tmp3 = require("UserProfileEditFormSharedStyles")();
  const bioMaxLength = require("BioMaxLengthExperiment").useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = require("BioMaxLengthExperiment");
  const ref1 = pendingBadgeDisplayOrder.useRef(null);
  const tmp6 = require("useKeyboardIsOpen")();
  const sharedValue = require("module_1652").useSharedValue(0);
  importDefault = sharedValue;
  context = pendingBadgeDisplayOrder.useContext(require("ProfileCustomizationHeaderContext"));
  const obj4 = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(false);
  const ref2 = pendingBadgeDisplayOrder.useRef(null);
  const ref3 = pendingBadgeDisplayOrder.useRef(null);
  const ref4 = pendingBadgeDisplayOrder.useRef(null);
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
  const tmp15 = require("useUserProfileEditForm")();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp15);
  const pendingBadgeHiddenBadges = tmp15.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp15);
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmp14 = require("useSafeAreaAvoidingInputs");
  const guildAutomodProfileQuarantineErrors = require("AutomodQuarantineUtils").useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj11 = require("AutomodQuarantineUtils");
  if (str2 == null) {
    str2 = "";
  }
  const tmp18Result = require("useDisplayProfile")(str2);
  const tmp18 = require("useDisplayProfile");
  const customStatusActivity = require("userSettingToActivity").useCustomStatusActivity();
  const tmp4Result = require("userSettingToActivity");
  const tmp4Result10 = require("CustomTypingIndicatorExperiment");
  const pendingAvatarSrc = require("RecentAvatarUtils").getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp21 = tmp(obj[36])(tmp18Result, pendingLegacyUsernameDisabled);
  closure_5 = tmp21;
  const obj12 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp4Result11 = require("RecentAvatarUtils");
  isBadgeManagementEnabled = require("BadgeManagementExperiment").useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result12 = require("BadgeManagementExperiment");
  const items1 = [isBadgeManagementEnabled];
  stateFromStores = require("initialize").useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(_undefined.id));
  const tmp4Result13 = require("initialize");
  const items2 = [isBadgeManagementEnabled];
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
  const items4 = [tmp21, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj3.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_5, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items4);
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
  let tmp30 = !result;
  if (!result) {
    tmp30 = !tmp6;
  }
  const tmp4Result15 = require("HexagonCampaignPerkAvailability");
  const enabled = require("UserProfilePremiumTryItOutMobileRefreshExperiment").useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp62Result10 = enabled;
  if (enabled) {
    tmp62Result10 = !result;
  }
  if (tmp62Result10) {
    tmp62Result10 = !isTryItOut;
  }
  if (tmp18Result != null) {
    const legacyUsername = tmp18Result.getLegacyUsername();
  }
  let str3 = str.globalName;
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp18Result != null) {
    str4 = tmp18Result.pronouns;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp18Result != null) {
    str5 = tmp18Result.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const obj13 = { user: currentUser.currentUser, displayProfile: tmp18Result, pendingThemeColors: null, isPreview: null };
  let tmp34 = pendingThemeColors;
  const tmp4Result16 = require("UserProfilePremiumTryItOutMobileRefreshExperiment");
  if (isTryItOut) {
    tmp34 = tryItOutThemeColors;
  }
  obj13.pendingThemeColors = tmp34;
  obj13.isPreview = isTryItOut;
  const tmpResult10 = tmp(obj[43]);
  ({ theme, primaryColor, secondaryColor } = tmp(obj[43])(obj13));
  const tmpResult1Result = tmp(obj[43])(obj13);
  const userProfileColors = require("useUserProfileColors").useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const obj14 = { backgroundColor: userProfileColors.avatarBackground };
  const tmp38 = tmp(obj[45])();
  const height = tmp38.height;
  let num = 0;
  ({ ref, onLayout, width } = tmp38);
  if (undefined !== height) {
    num = height;
  }
  let num2 = 0;
  const tmp4Result17 = require("useUserProfileColors");
  if (tmp30) {
    num2 = 0;
    if (!tmp62Result10) {
      num2 = stateFromStoresArray;
    }
  }
  const sum = insets.bottom + num2;
  const sum1 = sum + tmp(obj[27]).space.PX_16;
  const tmp42 = tmp(obj[47])(sharedValue, sum1);
  maxLength = tmp42;
  const tmp39 = tmp(obj[46])(width);
  const items6 = [closure_21, tmp42.isScrolledAboveTryItOutSection, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp43, tmp44, tmp45] = items6;
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
  const items7 = [tmp44, tmp45];
  UserProfileEditFormTsx1.__closure = items7;
  UserProfileEditFormTsx1.__workletHash = 15732737689317;
  UserProfileEditFormTsx1.__initData = tmp43;
  const items8 = [sharedValue, context, tmp42];
  const derivedValue = require("module_1652").useDerivedValue(UserProfileEditFormTsx1);
  let tmp48 = tmp62Result10;
  const callback = obj3.useCallback((nativeEvent) => {
    const result = _undefined2.set(nativeEvent.nativeEvent.contentOffset.y);
    if (context != null) {
      const mainScrollY = context.mainScrollY;
      const result1 = mainScrollY.set(nativeEvent.nativeEvent.contentOffset.y);
    }
    closure_9.onScroll(nativeEvent.nativeEvent);
  }, items8);
  if (!tmp62Result10) {
    tmp48 = flag;
  }
  if (!tmp48) {
    tmp48 = null != context;
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
  const field = stateFromStores.useField("scrollPosition");
  maxLength2 = tmp(obj[48])(ref1, field);
  let tmp56 = tmp62Result10;
  if (tmp62Result10) {
    tmp56 = flag;
  }
  const items9 = [tmp3.formContainer, , ];
  let obj15 = flag;
  if (flag) {
    obj15 = { marginTop: 0 };
  }
  const obj16 = { style: items9, children: null };
  items9[1] = obj15;
  items9[2] = { backgroundColor: containerBackground };
  let tmp60 = null;
  if (null != stringResult) {
    tmp60 = null;
    if ("" !== stringResult) {
      const obj17 = { style: tmp3.errorContainer, children: null };
      const obj18 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: stringResult };
      obj17.children = closure_15(tmp4(obj[49]).Text, obj18);
      tmp60 = closure_15(tmp59, obj17);
    }
  }
  const items10 = [tmp60, , , , , , , , , , , , , ];
  const obj19 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
  const tmp4Result18 = require("module_1652");
  const intl2 = tmp4(obj[18]).intl;
  obj19.label = intl2.string(require("util").t["9AjdkD"]);
  obj19.errorMessage = first;
  let tmp64 = pendingGlobalName;
  if (pendingGlobalName == null) {
    tmp64 = str3;
  }
  obj19.value = tmp64;
  obj19.onFocus = onFocus;
  obj19.onChange = function onChange(globalName) {
    return _undefined(context[51]).setPendingChanges({ globalName });
  };
  obj19.placeholder = currentUser.currentUser.toString();
  obj19.maxLength = maxLength;
  obj19.disabled = isSubmitting;
  items10[1] = closure_15(tmp(obj[50]), obj19);
  if (!result) {
    if (!isTryItOut) {
      let tmp62Result = null;
      if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
        const obj20 = { user: str, availability: hexagonCampaignPerkAvailability, disabled: isSubmitting };
        tmp62Result = closure_15(tmp(obj[53]), obj20);
      }
    }
    items10[2] = tmp62Result;
    const obj21 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
    const intl3 = tmp4(obj[18]).intl;
    obj21.label = intl3.string(tmp4(obj[18]).t["+T3RI/"]);
    obj21.errorMessage = first3;
    let tmp68 = pendingPronouns;
    if (pendingPronouns == null) {
      tmp68 = str4;
    }
    obj21.value = tmp68;
    obj21.onFocus = onFocus;
    obj21.onChange = function onChange(pronouns) {
      return _undefined(context[51]).setPendingChanges({ pronouns });
    };
    obj21.maxLength = maxLength2;
    obj21.disabled = isSubmitting;
    items10[3] = closure_15(tmp(obj[50]), obj21);
    let tmp62Result7 = !isTryItOut;
    if (!isTryItOut) {
      const obj22 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants3.BADGES };
      tmp62Result7 = closure_15(tmp(obj[54]), obj22);
    }
    items10[4] = tmp62Result7;
    const obj23 = { inputRef: ref4, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
    const tmpResult12 = tmp(obj[50]);
    const intl4 = tmp4(obj[18]).intl;
    obj23.label = intl4.string(tmp4(obj[18]).t.ZzAR2Y);
    obj23.errorMessage = first4;
    if (pendingBio == null) {
      pendingBio = str5;
    }
    obj23.value = pendingBio;
    obj23.onFocus = onFocus;
    obj23.onChange = function onChange(bio) {
      return _undefined(context[51]).setPendingChanges({ bio });
    };
    obj23.autoFocus = autoFocusElement === constants3.BIO;
    obj23.maxLength = bioMaxLength;
    obj23.disabled = isSubmitting;
    items10[5] = closure_15(tmp(obj[50]), obj23);
    const obj24 = { user: str, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
    const tmpResult13 = tmp(obj[50]);
    if (isTryItOut) {
      let fn = tmp4(obj[56]).setTryItOutThemeColors;
    } else {
      fn = (themeColors) => _undefined(context[51]).setPendingChanges({ themeColors });
    }
    obj24.onProfileThemeColorsChanged = fn;
    obj24.pendingAvatarSrc = pendingAvatarSrc;
    let tmp75 = pendingThemeColors;
    if (isTryItOut) {
      tmp75 = tryItOutThemeColors;
    }
    obj24.pendingThemeColors = tmp75;
    obj24.isTryItOut = isTryItOut;
    items10[6] = closure_15(tmp(obj[55]), obj24);
    const obj25 = { user: str, pendingAvatarDecoration: null, isTryItOut: null };
    const tmpResult14 = tmp(obj[55]);
    if (isTryItOut) {
      pendingAvatarDecoration = tryItOutAvatarDecoration;
    }
    obj25.pendingAvatarDecoration = pendingAvatarDecoration;
    obj25.isTryItOut = isTryItOut;
    items10[7] = closure_15(tmp(obj[57]), obj25);
    const obj26 = { user: str, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
    const tmpResult15 = tmp(obj[57]);
    if (isTryItOut) {
      pendingProfileEffect = tryItOutProfileEffect;
    }
    let tmp62Result8 = "profile" === tmp4Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
    obj26.pendingProfileEffect = pendingProfileEffect;
    obj26.displayProfile = tmp18Result;
    obj26.isTryItOut = isTryItOut;
    items10[8] = closure_15(tmp(obj[58]), obj26);
    const obj27 = { user: str, pendingProfileFrame, displayProfile: tmp18Result };
    items10[9] = closure_15(tmp(obj[59]), obj27);
    const obj28 = { user: str, pendingNameplate };
    items10[10] = closure_15(tmp(obj[60]), obj28);
    if (tmp62Result8) {
      if (!result) {
        result = isTryItOut;
      }
      tmp62Result8 = result;
    }
    if (tmp62Result8) {
      const obj29 = { isTryItOut };
      tmp62Result8 = closure_15(tmp(obj[61]), obj29);
    }
    items10[11] = tmp62Result8;
    const obj30 = {
      ref(arg0) {
          return closure_10(constants.GUILD_TAG, arg0);
        },
      children: null
    };
    const obj31 = { user: str, disabled: isSubmitting, tagStyle: null, pendingPrimaryGuildId: null };
    const obj32 = { backgroundColor: containerBackground };
    obj31.tagStyle = obj32;
    obj31.pendingPrimaryGuildId = pendingPrimaryGuildId;
    obj30.children = closure_15(tmp(obj[62]), obj31);
    items10[12] = closure_15(tmp59, obj30);
    let tmp62Result9 = null != legacyUsername && !isBadgeManagementEnabled;
    if (tmp62Result9) {
      const obj33 = { legacyUsername, pendingLegacyUsernameDisabled };
      tmp62Result9 = closure_15(tmp(obj[63]), obj33);
    }
    items10[13] = tmp62Result9;
    obj16.children = items10;
    const items11 = [closure_16(tmp59, obj16), ];
    if (tmp62Result10) {
      const obj34 = {
        currentUser: str,
        onLayout: tmp42.onTryItOutSectionLayout,
        onPreviewPremium() {
              return _undefined(context[65]).openPremiumTryItOutModal();
            }
      };
      tmp62Result10 = closure_15(tmp(obj[64]), obj34);
    }
    const obj35 = { children: null };
    items11[1] = tmp62Result10;
    obj35.children = items11;
    const tmp57Result = closure_16(closure_17, obj35);
    const obj36 = { theme, primaryColor, secondaryColor, children: null };
    const obj37 = { ref, style: tmp3.container, onLayout, children: null };
    const obj38 = { gradientHeight: num, bannerHeight: tmp39 };
    const items12 = [closure_15(tmp(obj[67]), obj38), , ];
    const obj39 = { ref: ref1, bounces: null == context, onScroll: null, onContentSizeChange: null, onLayout: null, scrollEventThrottle: null, children: null };
    let tmp82;
    if (tmp48) {
      tmp82 = callback;
    }
    obj39.onScroll = tmp82;
    let onContentSizeChange;
    if (tmp56) {
      onContentSizeChange = tmp42.onContentSizeChange;
    }
    obj39.onContentSizeChange = onContentSizeChange;
    let onScrollViewLayout;
    if (tmp56) {
      onScrollViewLayout = tmp42.onScrollViewLayout;
    }
    obj39.onLayout = onScrollViewLayout;
    let num3;
    if (tmp48) {
      num3 = 16;
    }
    obj39.scrollEventThrottle = num3;
    const obj40 = { style: tmp3.bounceOffset };
    const items13 = [closure_15(tmp59, obj40), closure_15(tmp4(obj[25]).ProfileCustomizationHeaderSpacer, {}), , ];
    const obj41 = { user: str, displayProfile: tmp18Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
    items13[2] = closure_15(EditUserProfileBanner, obj41);
    const obj42 = { style: null, children: null };
    const items14 = [, , , ];
    ({ avatarBackground: arr15[0], avatarPosition: arr15[1] } = tmp2);
    items14[2] = tmp3.avatarContainer;
    items14[3] = obj14;
    obj42.style = items14;
    const obj43 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj14, isTryItOut, autoStartEditFlow: autoFocusElement === constants3.AVATAR };
    obj42.children = closure_15(tmp(obj[68]), obj43);
    const items15 = [closure_15(tmp59, obj42), ];
    const obj44 = { style: null, children: null };
    const items16 = [, , ];
    ({ profileContentWrapper: arr17[0], profileContent: arr17[1] } = tmp2);
    const obj45 = { paddingTop: 0, paddingBottom: sum1 };
    items16[2] = obj45;
    obj44.style = items16;
    const obj46 = { customStatusActivity, hasCustomProfileTheme: tmp36, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj59.style, emojiOnlyCustomStatusBubble: obj59.emojiOnlyStyle } = tmp2);
    const items17 = [closure_15(tmp(obj[69]), obj46), , ];
    const obj47 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: null, pendingDisplayNameStyles: null };
    const tmp81 = pendingBadgeHiddenBadges;
    const tmpResult16 = tmp(obj[58]);
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
    items17[1] = closure_15(tmp(obj[70]), obj47);
    let tmp62Result11 = tmp57Result;
    if (flag) {
      const obj48 = { value: tmp57Result, children: null };
      const obj49 = { userId: str.id, containerBackground, hasCustomProfileTheme: tmp36, scrollPosition: sharedValue, scrollViewRef: ref1, isBoardTabOnScreen: sharedValue1, parentPagerGesture: null };
      let pagerGesture;
      if (context != null) {
        pagerGesture = context.pagerGesture;
      }
      obj49.parentPagerGesture = pagerGesture;
      obj48.children = closure_15(tmp(obj[72]), obj49);
      tmp62Result11 = closure_15(tmp(obj[71]).Provider, obj48);
      const tmpResult18 = tmp(obj[72]);
    }
    const obj50 = { children: null };
    items17[2] = tmp62Result11;
    obj44.children = items17;
    items15[1] = closure_16(tmp59, obj44);
    obj50.children = items15;
    items13[3] = closure_16(tmp59, obj50);
    obj39.children = items13;
    items12[1] = closure_16(tmp81, obj39);
    if (!tmp30) {
      items12[2] = tmp30;
      obj37.children = items12;
      obj36.children = closure_16(tmp59, obj37);
      return closure_15(tmp4(obj[66]).ThemeContextProvider, obj36);
    } else if (enabled) {
      tmp = tmp(obj[73]);
      obj = {
        isVisible: derivedValue,
        onPreviewPremium() {
              return _undefined(context[65]).openPremiumTryItOutModal();
            }
      };
      let tmp62Result12 = closure_15(tmp, obj);
    } else {
      const obj51 = { isTryItOut };
      tmp62Result12 = closure_15(tmp4(obj[74]).UserProfilePremiumUpsellCard, obj51);
    }
    const tmpResult17 = tmp(obj[70]);
  }
  tmp62Result = closure_15(tmp(obj[52]), { user: str, isTryItOut });
  const tmpResult11 = tmp(obj[50]);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7497).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1072);
({ DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: closure_10 } = Constants);
const HexagonCampaignConstants = fn(5166);
({ HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = fn(1082).ProfileCustomizationScrollPositions;
const constants3 = fn(16587).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let obj = { assetOrigin: fn(7281).AssetOriginTypes.NEW_ASSET, imageUri: _modDef16588, staticImageUri: _modDef16588, description: "", originalAsset: "id" };
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