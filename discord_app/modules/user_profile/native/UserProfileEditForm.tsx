// === Module 14588: UserProfileEditForm ===

// Module 14588 (UserProfileEditForm)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8166 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8197 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13067 */;
import _modDef14590 from "module_14590" /* 14590 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8192 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9208 */;

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
  obj = displayProfile(isTryItOut[11]);
  const canUseCollectiblesResult = obj.canUseCollectibles(user);
  analyticsLocations = displayProfile(isTryItOut[12])(displayProfile(isTryItOut[13]).EDIT_BANNER).analyticsLocations;
  obj = { value: analyticsLocations, children: null };
  obj = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: null, showProfilePreviewButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  let banner;
  let tmp4 = displayProfile(isTryItOut[12]);
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  obj.bannerSafeArea = 12;
  obj.showProfilePreviewButton = canUseCollectiblesResult;
  obj.onPressEdit = function onPressEdit() {
    obj = { user, analyticsLocations, onBannerChange: null, showRemoveBanner: null, isTryItOut: null };
    if (isTryItOut) {
      let fn = tmp2(8167).setTryItOutBanner;
    } else {
      fn = (banner) => {
        user(isTryItOut[19]);
        obj = { banner };
        return obj.setPendingChanges(obj);
      };
    }
    obj.onBannerChange = fn;
    const tmp3 = asyncRequireImpl(14592, dependencyMap.paths);
    const tmp4 = isTryItOut;
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    obj.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
    obj.isTryItOut = tmp4;
    obj.openLazy(tmp3, "Change Banner", obj);
  };
  const intl = tmp6(tmp2[21]).intl;
  obj.editButtonAccessibilityLabel = intl.string(user(isTryItOut[21]).t.VqsHy0);
  obj.editDisabled = disabled;
  obj.children = closure_13(displayProfile(isTryItOut[14]), obj);
  return closure_13(user(isTryItOut[12]).AnalyticsLocationProvider, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7208).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1074);
({ DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: c10 } = Constants);
let closure_11 = fn(1084).ProfileCustomizationScrollPositions;
const constants = fn(14589).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { assetOrigin: fn(6989).AssetOriginTypes.NEW_ASSET, imageUri: _modDef14590, staticImageUri: _modDef14590, description: "", originalAsset: "add" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default function UserProfileEditForm(currentUser) {
  const str = currentUser.currentUser;
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
  const tmp3 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[22])();
  const tmp4 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[23])();
  obj = str(pendingBadgeHiddenBadges[24]);
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  const tmp7 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[25])();
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[26])({ includeKeyboardHeight: true }).insets;
  const PX_16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27]).space.PX_16;
  obj = { insets, inputs: null, scrollViewRef: null };
  obj = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const items = [obj, , ];
  const obj1 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj1;
  let obj2 = { ref: ref3, offset: null };
  const obj3 = { type: "toValue", value: pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27]).space.PX_64 };
  obj2.offset = obj3;
  items[2] = obj2;
  obj.inputs = items;
  obj.scrollViewRef = ref;
  const onFocus = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[28])(obj).onFocus;
  const tmp13 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[29])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp13);
  pendingBadgeHiddenBadges = tmp13.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp13);
  pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[30])();
  let obj7 = str(pendingBadgeHiddenBadges[31]);
  const guildAutomodProfileQuarantineErrors = obj7.useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const tmp12 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[28]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp16Result = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[32])(str2);
  let tmp5Result = tmp5(tmp2[33]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  tmp5Result = tmp5(tmp2[34]);
  const tmp16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[32]);
  const pendingAvatarSrc = str(pendingBadgeHiddenBadges[35]).getPendingAvatarSrc({ userId: str.id, image: pendingAvatar });
  const tmp19 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[36])(tmp16Result, pendingLegacyUsernameDisabled);
  noop = tmp19;
  const items1 = [tmp19, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj1.useMemo(() => {
    obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettingsToProfileBadges(closure_3, obj);
  }, items1);
  const obj4 = { userId: str.id, image: pendingAvatar };
  const tmp5Result1 = str(pendingBadgeHiddenBadges[35]);
  isBadgeManagementEnabled = str(pendingBadgeHiddenBadges[38]).useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp5Result2 = str(pendingBadgeHiddenBadges[38]);
  const items2 = [stateFromStoresArray];
  stateFromStores = str(pendingBadgeHiddenBadges[39]).useStateFromStores(items2, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp5Result3 = str(pendingBadgeHiddenBadges[39]);
  const items3 = [stateFromStoresArray];
  stateFromStoresArray = str(pendingBadgeHiddenBadges[39]).useStateFromStoresArray(items3, () => BadgeDirectoryStore.getBadges(str.id));
  const items4 = [str.id, isBadgeManagementEnabled];
  const effect = obj1.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(tmp.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
    }
  }, items4);
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = obj1.useMemo(() => {
    let found = null;
    if (stateFromStores) {
      obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const result = obj.applyPendingBadgeSettings(stateFromStoresArray, obj);
      found = result.filter((owned) => owned.owned && !owned.hidden);
    }
    return found;
  }, items5);
  let someResult = !stateFromStores;
  if (stateFromStores) {
    someResult = stateFromStoresArray.some((owned) => owned.owned);
  }
  let tmpResult = tmp(tmp2[11]);
  let result = tmpResult.canUsePremiumProfileCustomization(str);
  let legacyUsername;
  if (tmp16Result != null) {
    legacyUsername = tmp16Result.getLegacyUsername();
  }
  let str3 = str.globalName;
  if (str3 == null) {
    str3 = "";
  }
  let str4;
  if (tmp16Result != null) {
    str4 = tmp16Result.pronouns;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmp16Result != null) {
    str5 = tmp16Result.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const obj5 = { user: str, displayProfile: tmp16Result, pendingThemeColors: null, isPreview: null };
  let tmp29 = pendingThemeColors;
  tmpResult = tmp(tmp2[41]);
  if (isTryItOut) {
    tmp29 = tryItOutThemeColors;
  }
  obj5.pendingThemeColors = tmp29;
  obj5.isPreview = isTryItOut;
  const tmp5Result4 = str(pendingBadgeHiddenBadges[39]);
  ({ theme, primaryColor, secondaryColor } = tmpResult(obj5));
  const tmpResult1Result = tmpResult(obj5);
  const userProfileColors = str(pendingBadgeHiddenBadges[42]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (!result) {
    num = 0;
    if (!tmp7) {
      num = FLOATING_UPSELL_HEIGHT;
    }
  }
  const sum = insets.bottom + num;
  const obj6 = { backgroundColor: userProfileColors.avatarBackground };
  let first;
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
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
      const intl = tmp5(tmp2[21]).intl;
      stringResult = intl.string(tmp5(tmp2[21]).t["84MExs"]);
    }
  }
  const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
  ProfileCustomizationNavigationStore = tmp(tmp2[43])(ref, field);
  obj7 = { theme, primaryColor, secondaryColor, children: null };
  const obj8 = { style: null, children: null };
  const items6 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  obj8.style = items6;
  const obj9 = { ref, children: null };
  const items7 = [closure_13(stateFromStores, { style: tmp4.bounceOffset }), ];
  const obj11 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj10 = { style: tmp4.bounceOffset };
  const tmp44 = isBadgeManagementEnabled;
  const tmp5Result5 = str(pendingBadgeHiddenBadges[42]);
  const items8 = [closure_13(EditUserProfileBanner, { user: str, displayProfile: tmp16Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting }), ];
  const obj12 = { style: null, children: closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[47]), { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj6, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR }) };
  const items9 = [, , , ];
  ({ avatarBackground: arr10[0], avatarPosition: arr10[1] } = tmp3);
  items9[2] = tmp4.avatarContainer;
  items9[3] = obj6;
  obj12.style = items9;
  const items10 = [closure_13(stateFromStores, obj12), ];
  const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items11 = [, , ];
  ({ profileContentWrapper: arr12[0], profileContent: arr12[1] } = tmp3);
  items11[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj14.containerStyle = items11;
  const obj13 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj6, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR };
  const tmp46 = constants;
  const tmpResult1 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[46]);
  const items12 = [closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[48]), { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true }), , ];
  const obj16 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: null };
  let tmp49 = pendingPronouns;
  const obj15 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult2 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[46]);
  if (pendingPronouns == null) {
    tmp49 = str4;
  }
  obj16.pronouns = tmp49;
  obj16.badgeContainerBackground = containerBackground;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj16.pendingDisplayNameStyles = pendingDisplayNameStyles;
  items12[1] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[49]), obj16);
  const obj17 = { style: null, children: null };
  const items13 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  obj17.style = items13;
  let tmp41Result = null;
  if (null != stringResult) {
    tmp41Result = null;
    if ("" !== stringResult) {
      const obj18 = { style: tmp4.errorContainer, children: null };
      const obj19 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj18.children = tmp41(tmp5(tmp2[44]).Text, obj19);
      tmp41Result = tmp41(tmp43, obj18);
    }
  }
  const items14 = [tmp41Result, , , , , , , , , , , , , ];
  const obj20 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, isDisabled: null };
  const tmpResult3 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[49]);
  const intl2 = tmp5(tmp2[21]).intl;
  obj20.label = intl2.string(str(pendingBadgeHiddenBadges[21]).t["9AjdkD"]);
  obj20.errorMessage = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  obj20.value = pendingGlobalName;
  obj20.onFocus = onFocus;
  obj20.onChange = function onChange(globalName) {
    str(pendingBadgeHiddenBadges[19]);
    obj = { globalName };
    return obj.setPendingChanges(obj);
  };
  obj20.placeholder = str.toString();
  obj20.maxLength = maxLength;
  obj20.isDisabled = isSubmitting;
  items14[1] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), obj20);
  tmp41Result = result;
  if (!result) {
    tmp41Result = isTryItOut;
  }
  if (tmp41Result) {
    const obj21 = { user: str, isTryItOut };
    tmp41Result = tmp41(tmp(tmp2[51]), obj21);
  }
  items14[2] = tmp41Result;
  const obj22 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, isDisabled: null };
  const tmpResult4 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]);
  const intl3 = tmp5(tmp2[21]).intl;
  obj22.label = intl3.string(str(pendingBadgeHiddenBadges[21]).t["+T3RI/"]);
  obj22.errorMessage = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  obj22.value = pendingPronouns;
  obj22.onFocus = onFocus;
  obj22.onChange = function onChange(pronouns) {
    str(pendingBadgeHiddenBadges[19]);
    obj = { pronouns };
    return obj.setPendingChanges(obj);
  };
  obj22.maxLength = maxLength2;
  obj22.isDisabled = isSubmitting;
  items14[3] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), obj22);
  let tmp41Result1 = !isTryItOut;
  if (!isTryItOut) {
    const obj23 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult };
    tmp41Result1 = tmp41(tmp(tmp2[52]), obj23);
  }
  items14[4] = tmp41Result1;
  const obj24 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, isDisabled: null };
  const tmpResult5 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]);
  const intl4 = tmp5(tmp2[21]).intl;
  obj24.label = intl4.string(str(pendingBadgeHiddenBadges[21]).t.ZzAR2Y);
  obj24.errorMessage = first4;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  obj24.value = pendingBio;
  obj24.onFocus = onFocus;
  obj24.onChange = function onChange(bio) {
    str(pendingBadgeHiddenBadges[19]);
    obj = { bio };
    return obj.setPendingChanges(obj);
  };
  obj24.autoFocus = autoFocusElement === tmp46.BIO;
  obj24.maxLength = bioMaxLength;
  obj24.isDisabled = isSubmitting;
  items14[5] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), obj24);
  const obj25 = { user: str, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
  const tmpResult6 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]);
  if (isTryItOut) {
    let fn = tmp5(tmp2[18]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      str(pendingBadgeHiddenBadges[19]);
      obj = { themeColors };
      return obj.setPendingChanges(obj);
    };
  }
  obj25.onProfileThemeColorsChanged = fn;
  obj25.pendingAvatarSrc = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj25.pendingThemeColors = pendingThemeColors;
  obj25.isTryItOut = isTryItOut;
  items14[6] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[53]), obj25);
  const obj26 = { user: str, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult7 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[53]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj26.pendingAvatarDecoration = pendingAvatarDecoration;
  obj26.isTryItOut = isTryItOut;
  items14[7] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[54]), obj26);
  const obj27 = { user: str, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult8 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[54]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp41Result2 = "profile" === tmp5Result.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj27.pendingProfileEffect = pendingProfileEffect;
  obj27.displayProfile = tmp16Result;
  obj27.isTryItOut = isTryItOut;
  items14[8] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[55]), obj27);
  items14[9] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[56]), { user: str, pendingProfileFrame, displayProfile: tmp16Result });
  items14[10] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[57]), { user: str, pendingNameplate });
  if (tmp41Result2) {
    let tmp60 = result;
    if (!result) {
      tmp60 = isTryItOut;
    }
    tmp41Result2 = tmp60;
  }
  if (tmp41Result2) {
    const obj28 = { isTryItOut };
    tmp41Result2 = tmp41(tmp(tmp2[58]), obj28);
  }
  items14[11] = tmp41Result2;
  const obj29 = {
    ref(arg0) {
      if (null != arg0) {
        ref.current[constants.GUILD_TAG] = arg0;
      }
    },
    children: closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[59]), { user: str, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  };
  items14[12] = closure_13(stateFromStores, obj29);
  let tmp41Result3 = null != legacyUsername;
  if (tmp41Result3) {
    const obj31 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp41Result3 = tmp41(tmp(tmp2[60]), obj31);
  }
  const obj32 = { children: null };
  items14[13] = tmp41Result3;
  obj17.children = items14;
  items12[2] = closure_14(stateFromStores, obj17);
  obj14.children = items12;
  items10[1] = closure_14(tmpResult2, obj14);
  obj32.children = items10;
  items8[1] = closure_14(stateFromStores, obj32);
  obj11.children = items8;
  items7[1] = closure_14(tmpResult1, obj11);
  obj9.children = items7;
  const items15 = [closure_14(tmp44, obj9), ];
  let tmp41Result4 = !result;
  if (!result) {
    tmp41Result4 = !tmp7;
  }
  if (tmp41Result4) {
    const obj33 = { isTryItOut };
    tmp41Result4 = tmp41(tmp5(tmp2[61]).UserProfilePremiumUpsellCard, obj33);
  }
  items15[1] = tmp41Result4;
  obj8.children = items15;
  obj7.children = closure_14(stateFromStores, obj8);
  return closure_13(str(pendingBadgeHiddenBadges[45]).ThemeContextProvider, obj7);
};