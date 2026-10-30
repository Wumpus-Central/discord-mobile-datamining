// === Module 16388: UserProfileEditForm ===

// Module 16388 (UserProfileEditForm)
import util from "util" /* 1114 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2048 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7320 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8729 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8760 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14943 */;
import _modDef16390 from "module_16390" /* 16390 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16391 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16404 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 16406 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8755 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11422 */;

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
  obj4.children = __initData2(UserProfileEditBannerButtonDefault, obj5);
  return __initData2(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
}
function MainUserProfileEditForm(arg0) {
  const obj2 = {};
  const isMobileWidgetEditingEnabled = MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  obj2.isWidgetEditingEnabled = isMobileWidgetEditingEnabled;
  return __initData2(UserProfileEditFormContent, obj2);
}
function UserProfileEditFormContent(currentUser) {
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let flag = currentUser.isWidgetEditingEnabled;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  let context;
  pendingBadgeDisplayOrder = undefined;
  closure_6 = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  maxLength = undefined;
  maxLength2 = undefined;
  let isScrolledAboveTryItOutSection;
  constants = undefined;
  let tmp = sharedValue;
  obj = context;
  let tmp2 = sharedValue(context[21])();
  const tmp3 = sharedValue(context[22])();
  const bioMaxLength = currentUser.currentUser(context[23]).useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = currentUser.currentUser(context[23]);
  const ref = pendingBadgeDisplayOrder.useRef(null);
  const tmp6 = sharedValue(context[24])();
  sharedValue = currentUser.currentUser(context[25]).useSharedValue(0);
  context = pendingBadgeDisplayOrder.useContext(sharedValue(context[26]));
  const obj4 = currentUser.currentUser(context[25]);
  const sharedValue1 = currentUser.currentUser(context[25]).useSharedValue(false);
  const ref1 = pendingBadgeDisplayOrder.useRef(null);
  const ref2 = pendingBadgeDisplayOrder.useRef(null);
  const ref3 = pendingBadgeDisplayOrder.useRef(null);
  const insets = sharedValue(context[27])({ includeKeyboardHeight: true }).insets;
  const PX_16 = sharedValue(context[28]).space.PX_16;
  const obj6 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj9 = { ref: ref3, offset: null };
  const obj10 = { type: "toValue", value: null };
  const obj5 = currentUser.currentUser(context[25]);
  const obj7 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj8 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  obj10.value = sharedValue(context[28]).space.PX_64;
  obj9.offset = obj10;
  items[2] = obj9;
  obj6.inputs = items;
  obj6.scrollViewRef = ref;
  const onFocus = sharedValue(context[29])(obj6).onFocus;
  const tmp15 = sharedValue(context[30])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp15);
  const pendingBadgeHiddenBadges = tmp15.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp15);
  sharedValue(context[31])();
  const tmp14 = sharedValue(context[29]);
  const guildAutomodProfileQuarantineErrors = currentUser.currentUser(context[32]).useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj11 = currentUser.currentUser(context[32]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp18Result = sharedValue(context[33])(str2);
  const tmp18 = sharedValue(context[33]);
  const customStatusActivity = currentUser.currentUser(obj[34]).useCustomStatusActivity();
  const tmp4Result = currentUser.currentUser(obj[34]);
  const tmp4Result10 = currentUser.currentUser(obj[35]);
  const pendingAvatarSrc = currentUser.currentUser(obj[36]).getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp21 = tmp(obj[37])(tmp18Result, pendingLegacyUsernameDisabled);
  closure_6 = tmp21;
  const obj12 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp4Result11 = currentUser.currentUser(obj[36]);
  isBadgeManagementEnabled = currentUser.currentUser(obj[38]).useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result12 = currentUser.currentUser(obj[38]);
  const items1 = [isBadgeManagementEnabled];
  stateFromStores = currentUser.currentUser(obj[39]).useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp4Result13 = currentUser.currentUser(obj[39]);
  const items2 = [isBadgeManagementEnabled];
  stateFromStoresArray = currentUser.currentUser(obj[39]).useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
  const items3 = [currentUser.currentUser.id, isBadgeManagementEnabled];
  const effect = obj3.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(str.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
    }
  }, items3);
  const items4 = [tmp21, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj3.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_6, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items4);
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
  const tmp4Result14 = currentUser.currentUser(obj[39]);
  let result = tmp(obj[13]).canUsePremiumProfileCustomization(str);
  const tmpResult = tmp(obj[13]);
  const hexagonCampaignPerkAvailability = currentUser.currentUser(obj[42]).useHexagonCampaignPerkAvailability(isScrolledAboveTryItOutSection.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp30 = !result;
  if (!result) {
    tmp30 = !tmp6;
  }
  const tmp4Result15 = currentUser.currentUser(obj[42]);
  const enabled = currentUser.currentUser(obj[43]).useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp61Result10 = enabled;
  if (enabled) {
    tmp61Result10 = !result;
  }
  if (tmp61Result10) {
    tmp61Result10 = !isTryItOut;
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
  const tmp4Result16 = currentUser.currentUser(obj[43]);
  if (isTryItOut) {
    tmp34 = tryItOutThemeColors;
  }
  obj13.pendingThemeColors = tmp34;
  obj13.isPreview = isTryItOut;
  const tmpResult10 = tmp(obj[44]);
  ({ theme, primaryColor, secondaryColor } = tmp(obj[44])(obj13));
  const tmpResult1Result = tmp(obj[44])(obj13);
  const userProfileColors = currentUser.currentUser(obj[45]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const obj14 = { backgroundColor: userProfileColors.avatarBackground };
  const tmp4Result17 = currentUser.currentUser(obj[45]);
  const tmp38 = tmp(obj[46])();
  [tmp40, c10] = sharedValue1(pendingBadgeDisplayOrder.useState(0), 2);
  let num = 0;
  const callback = obj3.useCallback((nativeEvent) => _undefined(nativeEvent.nativeEvent.layout.height), []);
  if (tmp30) {
    num = 0;
    if (!tmp61Result10) {
      num = stateFromStoresArray;
    }
  }
  const sum = insets.bottom + num;
  const sum1 = sum + tmp(obj[28]).space.PX_16;
  const tmp44 = tmp(obj[47])(sharedValue, sum1);
  maxLength2 = tmp44;
  isScrolledAboveTryItOutSection = tmp44.isScrolledAboveTryItOutSection;
  const tmp39 = sharedValue1(pendingBadgeDisplayOrder.useState(0), 2);
  function he() {
    value = isScrolledAboveTryItOutSection.get();
    if (value) {
      value = !sharedValue1.get();
    }
    return value;
  }
  he.__closure = { isScrolledAboveTryItOutSection, isBoardTabOnScreen: sharedValue1 };
  he.__workletHash = 9918184754044;
  he.__initData = __initData;
  const items6 = [sharedValue, context, tmp44];
  const derivedValue = currentUser.currentUser(obj[25]).useDerivedValue(he);
  let tmp47 = tmp61Result10;
  const callback1 = obj3.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    if (context != null) {
      const mainScrollY = context.mainScrollY;
      const result1 = mainScrollY.set(nativeEvent.nativeEvent.contentOffset.y);
    }
    closure_11.onScroll(nativeEvent.nativeEvent);
  }, items6);
  if (!tmp61Result10) {
    tmp47 = flag;
  }
  if (!tmp47) {
    tmp47 = null != context;
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
      const intl = tmp4(obj[19]).intl;
      stringResult = intl.string(tmp4(obj[19]).t["84MExs"]);
    }
  }
  const field = stateFromStores.useField("scrollPosition");
  constants = tmp(obj[48])(ref, field);
  let tmp55 = tmp61Result10;
  if (tmp61Result10) {
    tmp55 = flag;
  }
  const items7 = [tmp3.formContainer, , ];
  let obj15 = flag;
  if (flag) {
    obj15 = { marginTop: 0 };
  }
  const obj16 = { style: items7, children: null };
  items7[1] = obj15;
  items7[2] = { backgroundColor: containerBackground };
  let tmp59 = null;
  if (null != stringResult) {
    tmp59 = null;
    if ("" !== stringResult) {
      const obj17 = { style: tmp3.errorContainer, children: null };
      const obj18 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj17.children = closure_16(tmp4(obj[49]).Text, obj18);
      tmp59 = closure_16(tmp58, obj17);
    }
  }
  const items8 = [tmp59, , , , , , , , , , , , , ];
  const obj19 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
  const tmp4Result18 = currentUser.currentUser(obj[25]);
  const intl2 = tmp4(obj[19]).intl;
  obj19.label = intl2.string(currentUser.currentUser(obj[19]).t["9AjdkD"]);
  obj19.errorMessage = first;
  let tmp63 = pendingGlobalName;
  if (pendingGlobalName == null) {
    tmp63 = str3;
  }
  obj19.value = tmp63;
  obj19.onFocus = onFocus;
  obj19.onChange = function onChange(globalName) {
    return str(context[51]).setPendingChanges({ globalName });
  };
  obj19.placeholder = currentUser.currentUser.toString();
  obj19.maxLength = maxLength;
  obj19.disabled = isSubmitting;
  items8[1] = closure_16(tmp(obj[50]), obj19);
  if (!result) {
    if (!isTryItOut) {
      let tmp61Result = null;
      if (hexagonCampaignPerkAvailability !== constants.HIDDEN) {
        const obj20 = { user: str, availability: hexagonCampaignPerkAvailability, disabled: isSubmitting };
        tmp61Result = closure_16(tmp(obj[53]), obj20);
      }
    }
    items8[2] = tmp61Result;
    const obj21 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
    const intl3 = tmp4(obj[19]).intl;
    obj21.label = intl3.string(tmp4(obj[19]).t["+T3RI/"]);
    obj21.errorMessage = first3;
    let tmp67 = pendingPronouns;
    if (pendingPronouns == null) {
      tmp67 = str4;
    }
    obj21.value = tmp67;
    obj21.onFocus = onFocus;
    obj21.onChange = function onChange(pronouns) {
      return str(context[51]).setPendingChanges({ pronouns });
    };
    obj21.maxLength = maxLength2;
    obj21.disabled = isSubmitting;
    items8[3] = closure_16(tmp(obj[50]), obj21);
    let tmp61Result7 = !isTryItOut;
    if (!isTryItOut) {
      const obj22 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants2.BADGES };
      tmp61Result7 = closure_16(tmp(obj[54]), obj22);
    }
    items8[4] = tmp61Result7;
    const obj23 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
    const tmpResult12 = tmp(obj[50]);
    const intl4 = tmp4(obj[19]).intl;
    obj23.label = intl4.string(tmp4(obj[19]).t.ZzAR2Y);
    obj23.errorMessage = first4;
    if (pendingBio == null) {
      pendingBio = str5;
    }
    obj23.value = pendingBio;
    obj23.onFocus = onFocus;
    obj23.onChange = function onChange(bio) {
      return str(context[51]).setPendingChanges({ bio });
    };
    obj23.autoFocus = autoFocusElement === constants2.BIO;
    obj23.maxLength = bioMaxLength;
    obj23.disabled = isSubmitting;
    items8[5] = closure_16(tmp(obj[50]), obj23);
    const obj24 = { user: str, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
    const tmpResult13 = tmp(obj[50]);
    if (isTryItOut) {
      let fn = tmp4(obj[56]).setTryItOutThemeColors;
    } else {
      fn = (themeColors) => str(context[51]).setPendingChanges({ themeColors });
    }
    obj24.onProfileThemeColorsChanged = fn;
    obj24.pendingAvatarSrc = pendingAvatarSrc;
    let tmp74 = pendingThemeColors;
    if (isTryItOut) {
      tmp74 = tryItOutThemeColors;
    }
    obj24.pendingThemeColors = tmp74;
    obj24.isTryItOut = isTryItOut;
    items8[6] = closure_16(tmp(obj[55]), obj24);
    const obj25 = { user: str, pendingAvatarDecoration: null, isTryItOut: null };
    const tmpResult14 = tmp(obj[55]);
    if (isTryItOut) {
      pendingAvatarDecoration = tryItOutAvatarDecoration;
    }
    obj25.pendingAvatarDecoration = pendingAvatarDecoration;
    obj25.isTryItOut = isTryItOut;
    items8[7] = closure_16(tmp(obj[57]), obj25);
    const obj26 = { user: str, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
    const tmpResult15 = tmp(obj[57]);
    if (isTryItOut) {
      pendingProfileEffect = tryItOutProfileEffect;
    }
    let tmp61Result8 = "profile" === tmp4Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
    obj26.pendingProfileEffect = pendingProfileEffect;
    obj26.displayProfile = tmp18Result;
    obj26.isTryItOut = isTryItOut;
    items8[8] = closure_16(tmp(obj[58]), obj26);
    const obj27 = { user: str, pendingProfileFrame, displayProfile: tmp18Result };
    items8[9] = closure_16(tmp(obj[59]), obj27);
    const obj28 = { user: str, pendingNameplate };
    items8[10] = closure_16(tmp(obj[60]), obj28);
    if (tmp61Result8) {
      if (!result) {
        result = isTryItOut;
      }
      tmp61Result8 = result;
    }
    if (tmp61Result8) {
      const obj29 = { isTryItOut };
      tmp61Result8 = closure_16(tmp(obj[61]), obj29);
    }
    items8[11] = tmp61Result8;
    const obj30 = {
      ref(arg0) {
          return closure_13(constants.GUILD_TAG, arg0);
        },
      children: null
    };
    const obj31 = { user: str, disabled: isSubmitting, tagStyle: null, pendingPrimaryGuildId: null };
    const obj32 = { backgroundColor: containerBackground };
    obj31.tagStyle = obj32;
    obj31.pendingPrimaryGuildId = pendingPrimaryGuildId;
    obj30.children = closure_16(tmp(obj[62]), obj31);
    items8[12] = closure_16(tmp58, obj30);
    let tmp61Result9 = null != legacyUsername && !isBadgeManagementEnabled;
    if (tmp61Result9) {
      const obj33 = { legacyUsername, pendingLegacyUsernameDisabled };
      tmp61Result9 = closure_16(tmp(obj[63]), obj33);
    }
    items8[13] = tmp61Result9;
    obj16.children = items8;
    const items9 = [closure_17(tmp58, obj16), ];
    if (tmp61Result10) {
      const obj34 = {
        currentUser: str,
        onLayout: tmp44.onTryItOutSectionLayout,
        onPreviewPremium() {
              return str(context[65]).openPremiumTryItOutModal();
            }
      };
      tmp61Result10 = closure_16(tmp(obj[64]), obj34);
    }
    const obj35 = { children: null };
    items9[1] = tmp61Result10;
    obj35.children = items9;
    const tmp56Result = closure_17(closure_18, obj35);
    const obj36 = { theme, primaryColor, secondaryColor, children: null };
    const obj37 = { style: tmp3.container, onLayout: callback, children: null };
    const obj38 = { gradientHeight: tmp40, bannerHeight: tmp38 };
    const items10 = [closure_16(tmp(obj[67]), obj38), , ];
    const obj39 = { ref, bounces: null == context, onScroll: null, onContentSizeChange: null, onLayout: null, scrollEventThrottle: null, children: null };
    let tmp81;
    if (tmp47) {
      tmp81 = callback1;
    }
    obj39.onScroll = tmp81;
    let onContentSizeChange;
    if (tmp55) {
      onContentSizeChange = tmp44.onContentSizeChange;
    }
    obj39.onContentSizeChange = onContentSizeChange;
    let onScrollViewLayout;
    if (tmp55) {
      onScrollViewLayout = tmp44.onScrollViewLayout;
    }
    obj39.onLayout = onScrollViewLayout;
    let num2;
    if (tmp47) {
      num2 = 16;
    }
    obj39.scrollEventThrottle = num2;
    const obj40 = { style: tmp3.bounceOffset };
    const items11 = [closure_16(tmp58, obj40), closure_16(tmp4(obj[26]).ProfileCustomizationHeaderSpacer, {}), , ];
    const obj41 = { user: str, displayProfile: tmp18Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
    items11[2] = closure_16(EditUserProfileBanner, obj41);
    const obj42 = { style: null, children: null };
    const items12 = [, , , ];
    ({ avatarBackground: arr13[0], avatarPosition: arr13[1] } = tmp2);
    items12[2] = tmp3.avatarContainer;
    items12[3] = obj14;
    obj42.style = items12;
    const obj43 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj14, isTryItOut, autoStartEditFlow: autoFocusElement === constants2.AVATAR };
    obj42.children = closure_16(tmp(obj[68]), obj43);
    const items13 = [closure_16(tmp58, obj42), ];
    const obj44 = { style: null, children: null };
    const items14 = [, , ];
    ({ profileContentWrapper: arr15[0], profileContent: arr15[1] } = tmp2);
    const obj45 = { paddingTop: 0, paddingBottom: sum1 };
    items14[2] = obj45;
    obj44.style = items14;
    const obj46 = { customStatusActivity, hasCustomProfileTheme: tmp36, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj59.style, emojiOnlyCustomStatusBubble: obj59.emojiOnlyStyle } = tmp2);
    const items15 = [closure_16(tmp(obj[69]), obj46), , ];
    const obj47 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: null, pendingDisplayNameStyles: null };
    const tmp80 = pendingBadgeHiddenBadges;
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
    items15[1] = closure_16(tmp(obj[70]), obj47);
    let tmp61Result11 = tmp56Result;
    if (flag) {
      const obj48 = { value: tmp56Result, children: null };
      const obj49 = { userId: str.id, containerBackground, hasCustomProfileTheme: tmp36, scrollPosition: sharedValue, scrollViewRef: ref, isBoardTabOnScreen: sharedValue1, parentPagerGesture: null };
      let pagerGesture;
      if (context != null) {
        pagerGesture = context.pagerGesture;
      }
      obj49.parentPagerGesture = pagerGesture;
      obj48.children = closure_16(tmp(obj[72]), obj49);
      tmp61Result11 = closure_16(tmp(obj[71]).Provider, obj48);
      const tmpResult18 = tmp(obj[72]);
    }
    const obj50 = { children: null };
    items15[2] = tmp61Result11;
    obj44.children = items15;
    items13[1] = closure_17(tmp58, obj44);
    obj50.children = items13;
    items11[3] = closure_17(tmp58, obj50);
    obj39.children = items11;
    items10[1] = closure_17(tmp80, obj39);
    if (!tmp30) {
      items10[2] = tmp30;
      obj37.children = items10;
      obj36.children = closure_17(tmp58, obj37);
      return closure_16(tmp4(obj[66]).ThemeContextProvider, obj36);
    } else if (enabled) {
      tmp = tmp(obj[73]);
      obj = {
        isVisible: derivedValue,
        onPreviewPremium() {
              return str(context[65]).openPremiumTryItOutModal();
            }
      };
      let tmp61Result12 = closure_16(tmp, obj);
    } else {
      const obj51 = { isTryItOut };
      tmp61Result12 = closure_16(tmp4(obj[74]).UserProfilePremiumUpsellCard, obj51);
    }
    const tmpResult17 = tmp(obj[70]);
  }
  tmp61Result = closure_16(tmp(obj[52]), { user: str, isTryItOut });
  const tmpResult11 = tmp(obj[50]);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7371).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1072);
({ DISPLAY_NAME_MAX_LENGTH: c10, PRONOUNS_MAX_LENGTH: closure_11 } = Constants);
const HexagonCampaignConstants = fn(5034);
({ HexagonCampaignPerk: closure_12, HexagonCampaignPerkAvailability: map1 } = HexagonCampaignConstants);
let closure_14 = fn(1082).ProfileCustomizationScrollPositions;
const constants2 = fn(16389).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let obj = { assetOrigin: fn(7154).AssetOriginTypes.NEW_ASSET, imageUri: _modDef16390, staticImageUri: _modDef16390, description: "", originalAsset: "children" };
const __initData = { code: "function UserProfileEditFormTsx1(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
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
    let tmp2Result = __initData2(UserProfileEditFormContent, obj2);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp2Result = __initData2(MainUserProfileEditForm, obj);
  }
  return tmp2Result;
};