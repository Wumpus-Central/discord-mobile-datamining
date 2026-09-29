// === Module 14318: UserProfileEditForm ===

// Module 14318 (UserProfileEditForm)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7776 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7777 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7807 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12828 */;
import _modDef14319 from "module_14319" /* 14319 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7802 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9392 */;

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
    const tmp3 = asyncRequireImpl(14321, dependencyMap.paths);
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
  obj2.children = closure_12(displayProfile(isTryItOut[13]), obj3);
  return closure_12(user(isTryItOut[11]).AnalyticsLocationProvider, obj2);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const Constants = fn(1074);
({ DISPLAY_NAME_MAX_LENGTH: closure_8, PRONOUNS_MAX_LENGTH: closure_9 } = Constants);
let closure_10 = fn(1084).ProfileCustomizationScrollPositions;
const constants = fn(10827).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { assetOrigin: fn(6576).AssetOriginTypes.NEW_ASSET, imageUri: _modDef14319, staticImageUri: _modDef14319, description: "", originalAsset: "channel" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default function UserProfileEditForm(currentUser) {
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  noop = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  ProfileCustomizationNavigationStore = undefined;
  let tmp = pendingBadgeDisplayOrder;
  obj = pendingBadgeHiddenBadges;
  let tmp2 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[21])();
  const tmp3 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[22])();
  const bioMaxLength = currentUser.currentUser(pendingBadgeHiddenBadges[23]).useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = currentUser.currentUser(pendingBadgeHiddenBadges[23]);
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[25])({ includeKeyboardHeight: true }).insets;
  const PX_16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[26]).space.PX_16;
  const obj4 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj7 = { ref: ref3, offset: null };
  const obj8 = { type: "toValue", value: null };
  const obj5 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj6 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp6 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[24])();
  obj8.value = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[26]).space.PX_64;
  obj7.offset = obj8;
  items[2] = obj7;
  obj4.inputs = items;
  obj4.scrollViewRef = ref;
  const onFocus = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27])(obj4).onFocus;
  const tmp12 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[28])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp12);
  pendingBadgeHiddenBadges = tmp12.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp12);
  pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[29])();
  const tmp11 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27]);
  const guildAutomodProfileQuarantineErrors = currentUser.currentUser(pendingBadgeHiddenBadges[30]).useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj9 = currentUser.currentUser(pendingBadgeHiddenBadges[30]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp15Result = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[31])(str2);
  const tmp15 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[31]);
  const customStatusActivity = currentUser.currentUser(obj[32]).useCustomStatusActivity();
  const tmp4Result = currentUser.currentUser(obj[32]);
  const tmp4Result9 = currentUser.currentUser(obj[33]);
  const pendingAvatarSrc = currentUser.currentUser(obj[34]).getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp18 = tmp(obj[35])(tmp15Result, pendingLegacyUsernameDisabled);
  noop = tmp18;
  const obj10 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp4Result10 = currentUser.currentUser(obj[34]);
  isBadgeManagementEnabled = currentUser.currentUser(obj[36]).useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result11 = currentUser.currentUser(obj[36]);
  const items1 = [stateFromStoresArray];
  stateFromStores = currentUser.currentUser(obj[37]).useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp4Result12 = currentUser.currentUser(obj[37]);
  const items2 = [stateFromStoresArray];
  stateFromStoresArray = currentUser.currentUser(obj[37]).useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
  const items3 = [currentUser.currentUser.id, isBadgeManagementEnabled];
  const effect = obj3.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(str.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
    }
  }, items3);
  const items4 = [tmp18, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj3.useMemo(() => PendingBadgeSettings.getPendingProfileBadges(closure_3, stateFromStoresArray, { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges }), items4);
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
  const tmp4Result13 = currentUser.currentUser(obj[37]);
  let result = tmp(obj[10]).canUsePremiumProfileCustomization(str);
  let tmp26 = !result;
  if (!result) {
    tmp26 = !tmp6;
  }
  let legacyUsername;
  if (tmp15Result != null) {
    legacyUsername = tmp15Result.getLegacyUsername();
  }
  const tmpResult = tmp(obj[10]);
  const isTryItOutMobileRefreshEnabled = currentUser.currentUser(obj[40]).useIsTryItOutMobileRefreshEnabled("UserProfileEditForm");
  const tmp4Result14 = currentUser.currentUser(obj[40]);
  const floatingUpsellHeight = currentUser.currentUser(obj[41]).useFloatingUpsellHeight();
  let str3 = str.globalName;
  ({ height, onLayout } = floatingUpsellHeight);
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp15Result != null) {
    str4 = tmp15Result.pronouns;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp15Result != null) {
    str5 = tmp15Result.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const obj11 = { user: currentUser.currentUser, displayProfile: tmp15Result, pendingThemeColors: null, isPreview: null };
  let tmp31 = pendingThemeColors;
  const tmp4Result15 = currentUser.currentUser(obj[41]);
  if (isTryItOut) {
    tmp31 = tryItOutThemeColors;
  }
  obj11.pendingThemeColors = tmp31;
  obj11.isPreview = isTryItOut;
  const tmpResult11 = tmp(obj[42]);
  ({ theme, primaryColor, secondaryColor } = tmp(obj[42])(obj11));
  const tmpResult1Result = tmp(obj[42])(obj11);
  const userProfileColors = currentUser.currentUser(obj[43]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (tmp26) {
    num = height;
  }
  const sum = insets.bottom + num;
  const obj12 = { backgroundColor: userProfileColors.avatarBackground };
  let first;
  const sum1 = sum + tmp(obj[26]).space.PX_16;
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
  const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
  ProfileCustomizationNavigationStore = tmp(obj[44])(ref, field);
  const obj13 = { theme, primaryColor, secondaryColor, children: null };
  const obj14 = { style: null, children: null };
  const items6 = [tmp3.container, { backgroundColor: gradientSecondaryBackground }];
  obj14.style = items6;
  const obj15 = { ref, children: null };
  const items7 = [closure_12(stateFromStores, { style: tmp3.bounceOffset }), ];
  const obj17 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj16 = { style: tmp3.bounceOffset };
  const tmp46 = isBadgeManagementEnabled;
  const tmp4Result16 = currentUser.currentUser(obj[43]);
  const items8 = [closure_12(EditUserProfileBanner, { user: currentUser.currentUser, displayProfile: tmp15Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting }), ];
  const obj18 = { style: null, children: closure_12(tmp(obj[48]), { user: currentUser.currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj12, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR }) };
  const items9 = [, , , ];
  ({ avatarBackground: arr10[0], avatarPosition: arr10[1] } = tmp2);
  items9[2] = tmp3.avatarContainer;
  items9[3] = obj12;
  obj18.style = items9;
  const items10 = [closure_12(stateFromStores, obj18), ];
  const obj20 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items11 = [, , ];
  ({ profileContentWrapper: arr12[0], profileContent: arr12[1] } = tmp2);
  items11[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj20.containerStyle = items11;
  const obj19 = { user: currentUser.currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj12, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR };
  const tmpResult12 = tmp(obj[47]);
  const items12 = [closure_12(tmp(obj[49]), { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp2.customStatusBubble, emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble, editEnabled: true }), , ];
  const obj22 = { user: currentUser.currentUser, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: null };
  let tmp51 = pendingPronouns;
  const obj21 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp2.customStatusBubble, emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult13 = tmp(obj[47]);
  if (pendingPronouns == null) {
    tmp51 = str4;
  }
  obj22.pronouns = tmp51;
  obj22.badgeContainerBackground = containerBackground;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj22.pendingDisplayNameStyles = pendingDisplayNameStyles;
  items12[1] = closure_12(tmp(obj[50]), obj22);
  const obj23 = { style: null, children: null };
  const items13 = [tmp3.formContainer, { backgroundColor: containerBackground }];
  obj23.style = items13;
  let tmp43Result = null;
  if (null != stringResult) {
    tmp43Result = null;
    if ("" !== stringResult) {
      const obj24 = { style: tmp3.errorContainer, children: null };
      const obj25 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj24.children = closure_12(tmp4(obj[45]).Text, obj25);
      tmp43Result = closure_12(tmp45, obj24);
    }
  }
  const items14 = [tmp43Result, , , , , , , , , , , , , ];
  const obj26 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
  const tmpResult14 = tmp(obj[50]);
  const intl2 = tmp4(obj[20]).intl;
  obj26.label = intl2.string(currentUser.currentUser(obj[20]).t["9AjdkD"]);
  obj26.errorMessage = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  obj26.value = pendingGlobalName;
  obj26.onFocus = onFocus;
  obj26.onChange = function onChange(globalName) {
    return str(pendingBadgeHiddenBadges[18]).setPendingChanges({ globalName });
  };
  obj26.placeholder = currentUser.currentUser.toString();
  obj26.maxLength = maxLength;
  obj26.disabled = isSubmitting;
  items14[1] = closure_12(tmp(obj[51]), obj26);
  let tmp43Result6 = result;
  if (!result) {
    tmp43Result6 = isTryItOut;
  }
  if (tmp43Result6) {
    const obj27 = { user: str, isTryItOut };
    tmp43Result6 = closure_12(tmp(obj[52]), obj27);
  }
  items14[2] = tmp43Result6;
  const obj28 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
  const tmpResult15 = tmp(obj[51]);
  const intl3 = tmp4(obj[20]).intl;
  obj28.label = intl3.string(currentUser.currentUser(obj[20]).t["+T3RI/"]);
  obj28.errorMessage = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  obj28.value = pendingPronouns;
  obj28.onFocus = onFocus;
  obj28.onChange = function onChange(pronouns) {
    return str(pendingBadgeHiddenBadges[18]).setPendingChanges({ pronouns });
  };
  obj28.maxLength = maxLength2;
  obj28.disabled = isSubmitting;
  items14[3] = closure_12(tmp(obj[51]), obj28);
  let tmp43Result7 = !isTryItOut;
  if (!isTryItOut) {
    const obj29 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants.BADGES };
    tmp43Result7 = closure_12(tmp(obj[53]), obj29);
  }
  items14[4] = tmp43Result7;
  const obj30 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
  const tmpResult16 = tmp(obj[51]);
  const intl4 = tmp4(obj[20]).intl;
  obj30.label = intl4.string(currentUser.currentUser(obj[20]).t.ZzAR2Y);
  obj30.errorMessage = first4;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  obj30.value = pendingBio;
  obj30.onFocus = onFocus;
  obj30.onChange = function onChange(bio) {
    return str(pendingBadgeHiddenBadges[18]).setPendingChanges({ bio });
  };
  obj30.autoFocus = autoFocusElement === constants.BIO;
  obj30.maxLength = bioMaxLength;
  obj30.disabled = isSubmitting;
  items14[5] = closure_12(tmp(obj[51]), obj30);
  const obj31 = { user: currentUser.currentUser, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
  const tmpResult17 = tmp(obj[51]);
  if (isTryItOut) {
    let fn = tmp4(obj[17]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => str(pendingBadgeHiddenBadges[18]).setPendingChanges({ themeColors });
  }
  obj31.onProfileThemeColorsChanged = fn;
  obj31.pendingAvatarSrc = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj31.pendingThemeColors = pendingThemeColors;
  obj31.isTryItOut = isTryItOut;
  items14[6] = closure_12(tmp(obj[54]), obj31);
  const obj32 = { user: currentUser.currentUser, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult18 = tmp(obj[54]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj32.pendingAvatarDecoration = pendingAvatarDecoration;
  obj32.isTryItOut = isTryItOut;
  items14[7] = closure_12(tmp(obj[55]), obj32);
  const obj33 = { user: currentUser.currentUser, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult19 = tmp(obj[55]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp43Result8 = "profile" === tmp4Result9.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj33.pendingProfileEffect = pendingProfileEffect;
  obj33.displayProfile = tmp15Result;
  obj33.isTryItOut = isTryItOut;
  items14[8] = closure_12(tmp(obj[56]), obj33);
  items14[9] = closure_12(tmp(obj[57]), { user: currentUser.currentUser, pendingProfileFrame, displayProfile: tmp15Result });
  items14[10] = closure_12(tmp(obj[58]), { user: currentUser.currentUser, pendingNameplate });
  if (tmp43Result8) {
    if (!result) {
      result = isTryItOut;
    }
    tmp43Result8 = result;
  }
  if (tmp43Result8) {
    const obj34 = { isTryItOut };
    tmp43Result8 = closure_12(tmp(obj[59]), obj34);
  }
  items14[11] = tmp43Result8;
  const obj35 = {
    ref(arg0) {
      if (null != arg0) {
        ref.current[constants.GUILD_TAG] = arg0;
      }
    },
    children: closure_12(tmp(obj[60]), { user: currentUser.currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  };
  items14[12] = closure_12(stateFromStores, obj35);
  let tmp43Result9 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp43Result9) {
    const obj37 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp43Result9 = closure_12(tmp(obj[61]), obj37);
  }
  const obj38 = { children: null };
  items14[13] = tmp43Result9;
  obj23.children = items14;
  items12[2] = closure_13(stateFromStores, obj23);
  obj20.children = items12;
  items10[1] = closure_13(tmpResult13, obj20);
  obj38.children = items10;
  items8[1] = closure_13(stateFromStores, obj38);
  obj17.children = items8;
  items7[1] = closure_13(tmpResult12, obj17);
  obj15.children = items7;
  const items15 = [closure_13(tmp46, obj15), ];
  if (!tmp26) {
    items15[1] = tmp26;
    obj14.children = items15;
    obj13.children = closure_13(tmp45, obj14);
    return closure_12(tmp4(obj[46]).ThemeContextProvider, obj13);
  } else {
    if (!isTryItOutMobileRefreshEnabled) {
      const obj39 = { isTryItOut };
      let tmp43Result10 = closure_12(tmp4(obj[63]).UserProfilePremiumUpsellCard, obj39);
    }
    tmp = tmp(obj[62]);
    obj = { onLayout };
    tmp43Result10 = closure_12(tmp, obj);
  }
  const obj36 = { user: currentUser.currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId };
  const tmpResult20 = tmp(obj[56]);
};