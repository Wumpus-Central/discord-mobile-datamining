// === Module 14347: UserProfileEditForm ===

// Module 14347 (UserProfileEditForm)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6607 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7806 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7807 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7837 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12858 */;
import _modDef14348 from "module_14348" /* 14348 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7832 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9426 */;

require = fn;
function EditUserProfileBanner(user) {
  user = user.user;
  const displayProfile = user.displayProfile;
  ({ pendingBanner, tryItOutBanner, isTryItOut } = user);
  pendingBanner = undefined;
  let analyticsLocations;
  ({ pendingAvatarSrc, pendingAccentColor, pendingThemeColors, disabled } = user);
  if (isTryItOut) {
    if (tryItOutBanner == null) {
      tryItOutBanner = obj;
    }
    pendingBanner = tryItOutBanner;
  }
  obj = displayProfile(isTryItOut[10]);
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  analyticsLocations = displayProfile(isTryItOut[11])(displayProfile(isTryItOut[12]).EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: null };
  const obj3 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: null, showProfilePreviewButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  let banner;
  const tmp4 = displayProfile(isTryItOut[11]);
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  obj3.bannerSafeArea = 12;
  obj3.showProfilePreviewButton = canUseCollectiblesResult;
  obj3.onPressEdit = function onPressEdit() {
    const obj2 = { user, analyticsLocations, onBannerChange: null, showRemoveBanner: null, isTryItOut: null };
    obj = ActionSheetActionCreatorsDefault;
    if (isTryItOut) {
      let fn = UserProfileActionCreators.setTryItOutBanner;
    } else {
      fn = (banner) => user(isTryItOut[18]).setPendingChanges({ banner });
    }
    obj2.onBannerChange = fn;
    const tmp3 = asyncRequireImpl(14350, dependencyMap.paths);
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    obj2.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
    obj2.isTryItOut = isTryItOut;
    obj.openLazy(tmp3, "Change Banner", obj2);
    const tmp2Result = ProfileCustomizationUtils;
  };
  const intl = tmp6(isTryItOut[20]).intl;
  obj3.editButtonAccessibilityLabel = intl.string(user(isTryItOut[20]).t.VqsHy0);
  obj3.editDisabled = disabled;
  obj2.children = closure_13(displayProfile(isTryItOut[13]), obj3);
  return closure_13(user(isTryItOut[11]).AnalyticsLocationProvider, obj2);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ DISPLAY_NAME_MAX_LENGTH: closure_8, PRONOUNS_MAX_LENGTH: closure_9, UserSettingsSections: c10 } = Constants);
let closure_11 = fn(1084).ProfileCustomizationScrollPositions;
const constants2 = fn(10862).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { assetOrigin: fn(6606).AssetOriginTypes.NEW_ASSET, imageUri: _modDef14348, staticImageUri: _modDef14348, description: "", originalAsset: "add" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default function UserProfileEditForm(currentUser) {
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let navigation;
  let sharedValue;
  noop = undefined;
  pendingBadgeDisplayOrder = undefined;
  closure_6 = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  let sum1;
  let tmp = navigation;
  obj = sharedValue;
  let tmp2 = navigation(sharedValue[21])();
  const tmp3 = navigation(sharedValue[22])();
  navigation = currentUser.currentUser(sharedValue[23]).useNavigation();
  let obj2 = currentUser.currentUser(sharedValue[23]);
  const bioMaxLength = currentUser.currentUser(sharedValue[24]).useBioMaxLength({ location: "user_profile_edit_form" });
  const obj3 = currentUser.currentUser(sharedValue[24]);
  const ref = noop.useRef(null);
  const tmp7 = navigation(sharedValue[25])();
  sharedValue = currentUser.currentUser(sharedValue[26]).useSharedValue(true);
  noop = noop.useRef(0);
  const ref1 = noop.useRef(null);
  let ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = navigation(sharedValue[27])({ includeKeyboardHeight: true }).insets;
  const PX_16 = navigation(sharedValue[28]).space.PX_16;
  const obj6 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj9 = { ref: ref3, offset: null };
  const obj10 = { type: "toValue", value: null };
  const obj5 = currentUser.currentUser(sharedValue[26]);
  const obj7 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj8 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  obj10.value = navigation(sharedValue[28]).space.PX_64;
  obj9.offset = obj10;
  items[2] = obj9;
  obj6.inputs = items;
  obj6.scrollViewRef = ref;
  const onFocus = navigation(sharedValue[29])(obj6).onFocus;
  const tmp14 = navigation(sharedValue[30])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp14);
  const pendingBadgeHiddenBadges = tmp14.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp14);
  navigation(sharedValue[31])();
  const tmp13 = navigation(sharedValue[29]);
  const guildAutomodProfileQuarantineErrors = currentUser.currentUser(sharedValue[32]).useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj11 = currentUser.currentUser(sharedValue[32]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp17Result = navigation(sharedValue[33])(str2);
  const tmp17 = navigation(sharedValue[33]);
  const customStatusActivity = currentUser.currentUser(obj[34]).useCustomStatusActivity();
  const tmp4Result = currentUser.currentUser(obj[34]);
  const tmp4Result9 = currentUser.currentUser(obj[35]);
  const pendingAvatarSrc = currentUser.currentUser(obj[36]).getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp20 = tmp(obj[37])(tmp17Result, pendingLegacyUsernameDisabled);
  closure_6 = tmp20;
  const obj12 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp4Result10 = currentUser.currentUser(obj[36]);
  isBadgeManagementEnabled = currentUser.currentUser(obj[38]).useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result11 = currentUser.currentUser(obj[38]);
  const items1 = [closure_6];
  stateFromStores = currentUser.currentUser(obj[39]).useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp4Result12 = currentUser.currentUser(obj[39]);
  const items2 = [closure_6];
  stateFromStoresArray = currentUser.currentUser(obj[39]).useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
  const items3 = [currentUser.currentUser.id, isBadgeManagementEnabled];
  const effect = obj4.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(str.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
    }
  }, items3);
  const items4 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj4.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_6, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items4);
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = obj4.useMemo(() => {
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
  const tmp4Result13 = currentUser.currentUser(obj[39]);
  let result = tmp(obj[10]).canUsePremiumProfileCustomization(str);
  let tmp28 = !result;
  if (!result) {
    tmp28 = !tmp7;
  }
  const tmpResult = tmp(obj[10]);
  const isTryItOutMobileRefreshEnabled = currentUser.currentUser(obj[42]).useIsTryItOutMobileRefreshEnabled("UserProfileEditForm");
  let tmp49Result12 = isTryItOutMobileRefreshEnabled;
  if (isTryItOutMobileRefreshEnabled) {
    tmp49Result12 = !result;
  }
  if (tmp49Result12) {
    tmp49Result12 = !isTryItOut;
  }
  const tmp4Result14 = currentUser.currentUser(obj[42]);
  const floatingUpsellHeight = currentUser.currentUser(obj[43]).useFloatingUpsellHeight();
  let legacyUsername;
  ({ height, onLayout } = floatingUpsellHeight);
  if (tmp17Result != null) {
    legacyUsername = tmp17Result.getLegacyUsername();
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
  let tmp34 = pendingThemeColors;
  const tmp4Result15 = currentUser.currentUser(obj[43]);
  if (isTryItOut) {
    tmp34 = tryItOutThemeColors;
  }
  obj13.pendingThemeColors = tmp34;
  obj13.isPreview = isTryItOut;
  const tmpResult11 = tmp(obj[44]);
  ({ theme, primaryColor, secondaryColor } = tmp(obj[44])(obj13));
  const tmpResult1Result = tmp(obj[44])(obj13);
  const userProfileColors = currentUser.currentUser(obj[45]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (tmp28) {
    num = 0;
    if (!tmp49Result12) {
      num = height;
    }
  }
  const sum = insets.bottom + num;
  sum1 = sum + tmp(obj[28]).space.PX_16;
  const obj14 = { backgroundColor: userProfileColors.avatarBackground };
  const items6 = [navigation];
  const callback = obj4.useCallback(() => {
    UserSettingsModalActionCreatorsDefault.setSection(constants.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(constants.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items6);
  const items7 = [sharedValue, sum1];
  const callback1 = obj4.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const result = sharedValue.set(nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height - nativeEvent.contentOffset.y > ref.current + sum1);
  }, items7);
  let first;
  const callback2 = obj4.useCallback((nativeEvent) => {
    closure_3.current = nativeEvent.nativeEvent.layout.height;
  }, []);
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
  let first3;
  if (pronouns != null) {
    first3 = pronouns[0];
  }
  const bio = errors.bio;
  let first4;
  if (bio != null) {
    first4 = bio[0];
  }
  let stringResult = null;
  if (Object.keys(errors).length > 0) {
    stringResult = null;
    if (null == first4) {
      const intl = tmp4(obj[20]).intl;
      stringResult = intl.string(tmp4(obj[20]).t["84MExs"]);
    }
  }
  const field = isBadgeManagementEnabled.useField("scrollPosition");
  ref2 = tmp(obj[47])(ref, field);
  const obj15 = { theme, primaryColor, secondaryColor, children: null };
  const obj16 = { style: null, children: null };
  const items8 = [tmp3.container, { backgroundColor: gradientSecondaryBackground }];
  obj16.style = items8;
  const obj17 = { ref, onScroll: null, scrollEventThrottle: null, children: null };
  let tmp53;
  if (tmp49Result12) {
    tmp53 = callback1;
  }
  obj17.onScroll = tmp53;
  let num2;
  if (tmp49Result12) {
    num2 = 16;
  }
  obj17.scrollEventThrottle = num2;
  const items9 = [closure_13(pendingBadgeHiddenBadges, { style: tmp3.bounceOffset }), ];
  const obj19 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj18 = { style: tmp3.bounceOffset };
  const tmp4Result16 = currentUser.currentUser(obj[45]);
  const tmp52 = pendingBadgeDisplayOrder;
  const items10 = [closure_13(EditUserProfileBanner, { user: currentUser.currentUser, displayProfile: tmp17Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting }), ];
  const obj20 = { style: null, children: closure_13(tmp(obj[51]), { user: currentUser.currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj14, isTryItOut, autoStartEditFlow: autoFocusElement === constants2.AVATAR }) };
  const items11 = [, , , ];
  ({ avatarBackground: arr12[0], avatarPosition: arr12[1] } = tmp2);
  items11[2] = tmp3.avatarContainer;
  items11[3] = obj14;
  obj20.style = items11;
  const items12 = [closure_13(pendingBadgeHiddenBadges, obj20), ];
  const obj22 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items13 = [, , ];
  ({ profileContentWrapper: arr14[0], profileContent: arr14[1] } = tmp2);
  items13[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj22.containerStyle = items13;
  const obj21 = { user: currentUser.currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj14, isTryItOut, autoStartEditFlow: autoFocusElement === constants2.AVATAR };
  const tmpResult12 = tmp(obj[50]);
  const items14 = [closure_13(tmp(obj[52]), { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp2.customStatusBubble, emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble, editEnabled: true }), , , ];
  const obj24 = { user: currentUser.currentUser, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: null };
  let tmp58 = pendingPronouns;
  const obj23 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp2.customStatusBubble, emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult13 = tmp(obj[50]);
  if (pendingPronouns == null) {
    tmp58 = str4;
  }
  obj24.pronouns = tmp58;
  obj24.badgeContainerBackground = containerBackground;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj24.pendingDisplayNameStyles = pendingDisplayNameStyles;
  items14[1] = closure_13(tmp(obj[53]), obj24);
  const obj25 = { style: null, children: null };
  const items15 = [tmp3.formContainer, { backgroundColor: containerBackground }];
  obj25.style = items15;
  let tmp49Result = null;
  if (null != stringResult) {
    tmp49Result = null;
    if ("" !== stringResult) {
      const obj26 = { style: tmp3.errorContainer, children: null };
      const obj27 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj26.children = closure_13(tmp4(obj[48]).Text, obj27);
      tmp49Result = closure_13(tmp51, obj26);
    }
  }
  const items16 = [tmp49Result, , , , , , , , , , , , , ];
  const obj28 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
  const tmpResult14 = tmp(obj[53]);
  const intl2 = tmp4(obj[20]).intl;
  obj28.label = intl2.string(currentUser.currentUser(obj[20]).t["9AjdkD"]);
  obj28.errorMessage = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  obj28.value = pendingGlobalName;
  obj28.onFocus = onFocus;
  obj28.onChange = function onChange(globalName) {
    return str(sharedValue[18]).setPendingChanges({ globalName });
  };
  obj28.placeholder = currentUser.currentUser.toString();
  obj28.maxLength = stateFromStores;
  obj28.disabled = isSubmitting;
  items16[1] = closure_13(tmp(obj[54]), obj28);
  let tmp49Result8 = result;
  if (!result) {
    tmp49Result8 = isTryItOut;
  }
  if (tmp49Result8) {
    const obj29 = { user: str, isTryItOut };
    tmp49Result8 = closure_13(tmp(obj[55]), obj29);
  }
  items16[2] = tmp49Result8;
  const obj30 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
  const tmpResult15 = tmp(obj[54]);
  const intl3 = tmp4(obj[20]).intl;
  obj30.label = intl3.string(currentUser.currentUser(obj[20]).t["+T3RI/"]);
  obj30.errorMessage = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  obj30.value = pendingPronouns;
  obj30.onFocus = onFocus;
  obj30.onChange = function onChange(pronouns) {
    return str(sharedValue[18]).setPendingChanges({ pronouns });
  };
  obj30.maxLength = stateFromStoresArray;
  obj30.disabled = isSubmitting;
  items16[3] = closure_13(tmp(obj[54]), obj30);
  let tmp49Result9 = !isTryItOut;
  if (!isTryItOut) {
    const obj31 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants2.BADGES };
    tmp49Result9 = closure_13(tmp(obj[56]), obj31);
  }
  items16[4] = tmp49Result9;
  const obj32 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
  const tmpResult16 = tmp(obj[54]);
  const intl4 = tmp4(obj[20]).intl;
  obj32.label = intl4.string(currentUser.currentUser(obj[20]).t.ZzAR2Y);
  obj32.errorMessage = first4;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  obj32.value = pendingBio;
  obj32.onFocus = onFocus;
  obj32.onChange = function onChange(bio) {
    return str(sharedValue[18]).setPendingChanges({ bio });
  };
  obj32.autoFocus = autoFocusElement === constants2.BIO;
  obj32.maxLength = bioMaxLength;
  obj32.disabled = isSubmitting;
  items16[5] = closure_13(tmp(obj[54]), obj32);
  const obj33 = { user: currentUser.currentUser, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
  const tmpResult17 = tmp(obj[54]);
  if (isTryItOut) {
    let fn = tmp4(obj[17]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => str(sharedValue[18]).setPendingChanges({ themeColors });
  }
  obj33.onProfileThemeColorsChanged = fn;
  obj33.pendingAvatarSrc = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj33.pendingThemeColors = pendingThemeColors;
  obj33.isTryItOut = isTryItOut;
  items16[6] = closure_13(tmp(obj[57]), obj33);
  const obj34 = { user: currentUser.currentUser, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult18 = tmp(obj[57]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj34.pendingAvatarDecoration = pendingAvatarDecoration;
  obj34.isTryItOut = isTryItOut;
  items16[7] = closure_13(tmp(obj[58]), obj34);
  const obj35 = { user: currentUser.currentUser, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult19 = tmp(obj[58]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp49Result10 = "profile" === tmp4Result9.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj35.pendingProfileEffect = pendingProfileEffect;
  obj35.displayProfile = tmp17Result;
  obj35.isTryItOut = isTryItOut;
  items16[8] = closure_13(tmp(obj[59]), obj35);
  items16[9] = closure_13(tmp(obj[60]), { user: currentUser.currentUser, pendingProfileFrame, displayProfile: tmp17Result });
  items16[10] = closure_13(tmp(obj[61]), { user: currentUser.currentUser, pendingNameplate });
  if (tmp49Result10) {
    if (!result) {
      result = isTryItOut;
    }
    tmp49Result10 = result;
  }
  if (tmp49Result10) {
    const obj36 = { isTryItOut };
    tmp49Result10 = closure_13(tmp(obj[62]), obj36);
  }
  items16[11] = tmp49Result10;
  const obj37 = {
    ref(arg0) {
      if (null != arg0) {
        ref2.current[ref2.GUILD_TAG] = arg0;
      }
    },
    children: closure_13(tmp(obj[63]), { user: currentUser.currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  };
  items16[12] = closure_13(pendingBadgeHiddenBadges, obj37);
  let tmp49Result11 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp49Result11) {
    const obj39 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp49Result11 = closure_13(tmp(obj[64]), obj39);
  }
  items16[13] = tmp49Result11;
  obj25.children = items16;
  items14[2] = closure_14(pendingBadgeHiddenBadges, obj25);
  if (tmp49Result12) {
    const obj40 = { onLayout: callback2, onPreviewPremium: callback };
    tmp49Result12 = closure_13(tmp(obj[65]), obj40);
  }
  const obj41 = { children: null };
  items14[3] = tmp49Result12;
  obj22.children = items14;
  items12[1] = closure_14(tmpResult13, obj22);
  obj41.children = items12;
  items10[1] = closure_14(pendingBadgeHiddenBadges, obj41);
  obj19.children = items10;
  items9[1] = closure_14(tmpResult12, obj19);
  obj17.children = items9;
  const items17 = [closure_14(tmp52, obj17), ];
  if (!tmp28) {
    items17[1] = tmp28;
    obj16.children = items17;
    obj15.children = closure_14(tmp51, obj16);
    return closure_13(tmp4(obj[49]).ThemeContextProvider, obj15);
  } else {
    if (!isTryItOutMobileRefreshEnabled) {
      const obj42 = { isTryItOut };
      closure_13(tmp4(obj[68]).UserProfilePremiumUpsellCard, obj42);
    }
    if (isTryItOut) {
      tmp = tmp(obj[66]);
      obj = { onLayout };
      let tmp49Result14 = closure_13(tmp, obj);
    } else {
      const obj43 = { isVisible: sharedValue, onPreviewPremium: callback };
      tmp49Result14 = closure_13(tmp(obj[67]), obj43);
    }
  }
  const obj38 = { user: currentUser.currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId };
  const tmpResult20 = tmp(obj[59]);
};