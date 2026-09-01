// === Module 14242: EditUserProfileBanner ===

// Module 14242 (EditUserProfileBanner)
import registerAssetDefault from "registerAsset" /* 14244 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "initialize" /* 8560 */;
import closure_7 from "zustandStore" /* 9032 */;
import { FLOATING_UPSELL_HEIGHT } from "ARBITRARY_LARGE_OFFSET" /* 6001 */;
import ME from "ME" /* 676 */;
import { ProfileCustomizationScrollPositions as closure_11 } from "MAX_FAVORITES" /* 685 */;
import { UserProfileEditAutoFocusElement as closure_12 } from "UserProfileEditAutoFocusElement" /* 14243 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
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
  obj[6] = 12;
  obj[7] = canUseCollectiblesResult;
  obj[8] = function onPressEdit() {
    obj = displayProfile(isTryItOut[15]);
    obj = { user, analyticsLocations, onBannerChange: null, showRemoveBanner: null, isTryItOut: null };
    if (isTryItOut) {
      let fn = tmp2(tmp[18]).setTryItOutBanner;
    } else {
      fn = (banner) => {
        obj = callback(table[19]);
        obj = { banner };
        return obj.setPendingChanges(obj);
      };
    }
    obj[2] = fn;
    const tmp3 = user(isTryItOut[17])(isTryItOut[16], isTryItOut.paths);
    const tmp4 = isTryItOut;
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    obj[3] = user(isTryItOut[20]).showRemoveBanner(pendingBanner, banner);
    obj[4] = tmp4;
    obj.openLazy(tmp3, "Change Banner", obj);
  };
  const intl = tmp6(tmp2[21]).intl;
  obj[9] = intl.string(user(isTryItOut[21]).t.VqsHy0);
  obj[10] = disabled;
  obj[1] = closure_13(displayProfile(isTryItOut[14]), obj);
  return closure_13(user(isTryItOut[12]).AnalyticsLocationProvider, obj);
}
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ DISPLAY_NAME_MAX_LENGTH: c9, PRONOUNS_MAX_LENGTH: c10 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { assetOrigin: require("AssetOriginTypes").AssetOriginTypes.NEW_ASSET, imageUri: registerAssetDefault, staticImageUri: registerAssetDefault, description: "", originalAsset: "accessible" };
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default function UserProfileEditForm(currentUser) {
  const str = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  pendingBadgeDisplayOrder = undefined;
  let pendingBadgeHiddenBadges;
  let arr2;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  closure_7 = undefined;
  const tmp3 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[22])();
  const tmp4 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[23])();
  obj = str(pendingBadgeHiddenBadges[24]);
  const bioMaxLength = obj.useBioMaxLength({ location: "user_profile_edit_form" });
  const tmp7 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[25])();
  obj1 = arr2;
  const ref = arr2.useRef(null);
  const ref1 = arr2.useRef(null);
  const ref2 = arr2.useRef(null);
  const ref3 = arr2.useRef(null);
  const insets = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[26])({ includeKeyboardHeight: true }).insets;
  const PX_16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27]).space.PX_16;
  obj = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  obj = { ref: ref3, offset: null };
  obj1 = { type: "toValue", value: pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27]).space.PX_64 };
  obj[1] = obj1;
  items[2] = obj;
  obj[1] = items;
  obj[2] = ref;
  const onFocus = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[28])(obj).onFocus;
  const tmp13 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[29])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp13);
  pendingBadgeHiddenBadges = tmp13.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp13);
  pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[30])();
  let obj5 = str(pendingBadgeHiddenBadges[31]);
  const guildAutomodProfileQuarantineErrors = obj5.useGuildAutomodProfileQuarantineErrors();
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
  arr2 = tmp(tmp2[36])(tmp16Result, pendingLegacyUsernameDisabled);
  const items1 = [arr2, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj1.useMemo(() => {
    obj = str(pendingBadgeHiddenBadges[37]);
    obj = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.applyPendingBadgeSettingsToProfileBadges(arr2, obj);
  }, items1);
  let obj2 = { userId: str.id, image: pendingAvatar };
  const tmp5Result1 = str(pendingBadgeHiddenBadges[35]);
  isBadgeManagementEnabled = str(pendingBadgeHiddenBadges[38]).useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp5Result2 = str(pendingBadgeHiddenBadges[38]);
  const items2 = [stateFromStoresArray];
  stateFromStores = str(pendingBadgeHiddenBadges[39]).useStateFromStores(items2, () => stateFromStoresArray.hasCatalogFor(str.id));
  const tmp5Result3 = str(pendingBadgeHiddenBadges[39]);
  const items3 = [stateFromStoresArray];
  stateFromStoresArray = str(pendingBadgeHiddenBadges[39]).useStateFromStoresArray(items3, () => stateFromStoresArray.getBadges(str.id));
  const items4 = [str.id, isBadgeManagementEnabled];
  const effect = obj1.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = str(pendingBadgeHiddenBadges[40]).fetchBadgeDirectory(tmp.id);
        const obj2 = str(pendingBadgeHiddenBadges[40]);
      }
      obj = stateFromStoresArray;
      tmp2 = stateFromStoresArray.hasCatalogFor(str.id) && !stateFromStoresArray.isCatalogStaleFor(str.id);
    }
  }, items4);
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = obj1.useMemo(() => {
    let found = null;
    if (stateFromStores) {
      obj = str(pendingBadgeHiddenBadges[37]);
      obj = { pendingBadgeDisplayOrder: null, pendingBadgeHiddenBadges: null };
      obj[0] = pendingBadgeDisplayOrder;
      obj[1] = pendingBadgeHiddenBadges;
      const result = obj.applyPendingBadgeSettings(stateFromStoresArray, obj);
      found = result.filter((owned) => owned.owned && !owned.hidden);
    }
    return found;
  }, items5);
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
  const obj3 = { user: str, displayProfile: tmp16Result, pendingThemeColors: null, isPreview: null };
  let tmp28 = pendingThemeColors;
  tmpResult = tmp(tmp2[41]);
  if (isTryItOut) {
    tmp28 = tryItOutThemeColors;
  }
  obj3[2] = tmp28;
  obj3[3] = isTryItOut;
  const tmp5Result4 = str(pendingBadgeHiddenBadges[39]);
  ({ theme, primaryColor, secondaryColor } = tmpResult(obj3));
  const tmpResult1Result = tmpResult(obj3);
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
  const obj4 = { backgroundColor: userProfileColors.avatarBackground };
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
  const field = closure_7.useField("scrollPosition");
  closure_7 = tmp(tmp2[43])(ref, field);
  obj5 = { theme, primaryColor, secondaryColor, children: null };
  const obj6 = { style: items6, children: null };
  items6 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj7 = { ref, children: null };
  const items7 = [callback(stateFromStores, { style: tmp4.bounceOffset }), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj8 = { style: tmp4.bounceOffset };
  const tmp43 = isBadgeManagementEnabled;
  const tmp5Result5 = str(pendingBadgeHiddenBadges[42]);
  const items8 = [callback(EditUserProfileBanner, { user: str, displayProfile: tmp16Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting }), ];
  const tmpResult1 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[46]);
  const items9 = [, , , ];
  ({ avatarBackground: arr11[0], avatarPosition: arr11[1] } = tmp3);
  items9[2] = tmp4.avatarContainer;
  items9[3] = obj4;
  const items10 = [callback(stateFromStores, { style: items9, children: callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[47]), obj11) }), ];
  const obj12 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items11, children: null };
  items11 = [, , ];
  ({ profileContentWrapper: arr13[0], profileContent: arr13[1] } = tmp3);
  items11[2] = { paddingTop: 0, paddingBottom: sum1 };
  const obj10 = { style: items9, children: callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[47]), obj11) };
  const tmp45 = constants;
  const items12 = [callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[48]), { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true }), , ];
  const obj14 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: null };
  let tmp48 = pendingPronouns;
  const obj13 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult2 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[46]);
  if (pendingPronouns == null) {
    tmp48 = str4;
  }
  obj14[4] = tmp48;
  obj14[5] = containerBackground;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj14[7] = pendingDisplayNameStyles;
  items12[1] = callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[49]), obj14);
  const obj15 = { style: items13, children: null };
  items13 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  let tmp40Result = null;
  if (null != stringResult) {
    tmp40Result = null;
    if ("" !== stringResult) {
      const obj16 = { style: null, children: null };
      obj16[0] = tmp4.errorContainer;
      const obj17 = { variant: "text-sm/bold", color: "text-feedback-critical", children: null };
      obj17[2] = stringResult;
      obj16[1] = tmp40(tmp5(tmp2[44]).Text, obj17);
      tmp40Result = tmp40(tmp42, obj16);
    }
  }
  const items14 = [tmp40Result, , , , , , , , , , , , , ];
  const obj18 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, isDisabled: null };
  const tmpResult3 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[49]);
  const intl2 = tmp5(tmp2[21]).intl;
  obj18[1] = intl2.string(str(pendingBadgeHiddenBadges[21]).t["9AjdkD"]);
  obj18[2] = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  obj18[3] = pendingGlobalName;
  obj18[4] = onFocus;
  obj18[5] = function onChange(globalName) {
    obj = str(pendingBadgeHiddenBadges[19]);
    obj = { globalName };
    return obj.setPendingChanges(obj);
  };
  obj18[6] = str.toString();
  obj18[7] = closure_9;
  obj18[8] = isSubmitting;
  items14[1] = callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), obj18);
  tmp40Result = result;
  if (!result) {
    tmp40Result = isTryItOut;
  }
  if (tmp40Result) {
    const obj19 = { user: null, isTryItOut: null };
    obj19[0] = str;
    obj19[1] = isTryItOut;
    tmp40Result = tmp40(tmp(tmp2[51]), obj19);
  }
  items14[2] = tmp40Result;
  const obj20 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, isDisabled: null };
  const tmpResult4 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]);
  const intl3 = tmp5(tmp2[21]).intl;
  obj20[1] = intl3.string(str(pendingBadgeHiddenBadges[21]).t["+T3RI/"]);
  obj20[2] = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  obj20[3] = pendingPronouns;
  obj20[4] = onFocus;
  obj20[5] = function onChange(pronouns) {
    obj = str(pendingBadgeHiddenBadges[19]);
    obj = { pronouns };
    return obj.setPendingChanges(obj);
  };
  obj20[6] = closure_10;
  obj20[9] = isSubmitting;
  items14[3] = callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), obj20);
  let tmp40Result1 = !isTryItOut;
  if (!isTryItOut) {
    tmp40Result1 = arr2.length > 0;
  }
  if (tmp40Result1) {
    const obj21 = { badges: null, catalogBadges: null };
    obj21[0] = memo;
    obj21[1] = memo1;
    tmp40Result1 = tmp40(tmp(tmp2[52]), obj21);
  }
  items14[4] = tmp40Result1;
  const obj22 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, isDisabled: null };
  const tmpResult5 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]);
  const intl4 = tmp5(tmp2[21]).intl;
  obj22[1] = intl4.string(str(pendingBadgeHiddenBadges[21]).t.ZzAR2Y);
  obj22[2] = first4;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  obj22[3] = pendingBio;
  obj22[4] = onFocus;
  obj22[5] = function onChange(bio) {
    obj = str(pendingBadgeHiddenBadges[19]);
    obj = { bio };
    return obj.setPendingChanges(obj);
  };
  obj22[6] = autoFocusElement === tmp45.BIO;
  obj22[7] = bioMaxLength;
  obj22[9] = isSubmitting;
  items14[5] = callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), obj22);
  const obj23 = { user: str, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
  const tmpResult6 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]);
  if (isTryItOut) {
    let fn = tmp5(tmp2[18]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      obj = str(pendingBadgeHiddenBadges[19]);
      obj = { themeColors };
      return obj.setPendingChanges(obj);
    };
  }
  obj23[1] = fn;
  obj23[2] = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj23[3] = pendingThemeColors;
  obj23[4] = isTryItOut;
  items14[6] = callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[53]), obj23);
  const obj24 = { user: str, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult7 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[53]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj24[1] = pendingAvatarDecoration;
  obj24[2] = isTryItOut;
  items14[7] = callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[54]), obj24);
  const obj25 = { user: str, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult8 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[54]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp40Result2 = "profile" === tmp5Result.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj25[1] = pendingProfileEffect;
  obj25[2] = tmp16Result;
  obj25[3] = isTryItOut;
  items14[8] = callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[55]), obj25);
  items14[9] = callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[56]), { user: str, pendingProfileFrame, displayProfile: tmp16Result });
  items14[10] = callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[57]), { user: str, pendingNameplate });
  if (tmp40Result2) {
    let tmp59 = result;
    if (!result) {
      tmp59 = isTryItOut;
    }
    tmp40Result2 = tmp59;
  }
  if (tmp40Result2) {
    const obj26 = { isTryItOut: null };
    obj26[0] = isTryItOut;
    tmp40Result2 = tmp40(tmp(tmp2[58]), obj26);
  }
  items14[11] = tmp40Result2;
  const tmpResult9 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[55]);
  items14[12] = callback(stateFromStores, {
    ref(arg0) {
      if (null != arg0) {
        ref.current[closure_1_11.GUILD_TAG] = arg0;
      }
    },
    children: callback(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[59]), { user: str, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  });
  let tmp40Result3 = null != legacyUsername;
  if (tmp40Result3) {
    const obj28 = { legacyUsername: null, pendingLegacyUsernameDisabled: null };
    obj28[0] = legacyUsername;
    obj28[1] = pendingLegacyUsernameDisabled;
    tmp40Result3 = tmp40(tmp(tmp2[60]), obj28);
  }
  const obj29 = { children: null };
  items14[13] = tmp40Result3;
  obj15[1] = items14;
  items12[2] = closure_14(stateFromStores, obj15);
  obj12[4] = items12;
  items10[1] = closure_14(tmpResult2, obj12);
  obj29[0] = items10;
  items8[1] = closure_14(stateFromStores, obj29);
  obj9[4] = items8;
  items7[1] = closure_14(tmpResult1, obj9);
  obj7[1] = items7;
  const items15 = [closure_14(tmp43, obj7), ];
  let tmp40Result4 = !result;
  if (!result) {
    tmp40Result4 = !tmp7;
  }
  if (tmp40Result4) {
    const obj30 = { isTryItOut: null };
    obj30[0] = isTryItOut;
    tmp40Result4 = tmp40(tmp5(tmp2[61]).UserProfilePremiumUpsellCard, obj30);
  }
  items15[1] = tmp40Result4;
  obj6[1] = items15;
  obj5[3] = closure_14(stateFromStores, obj6);
  return callback(str(pendingBadgeHiddenBadges[45]).ThemeContextProvider, obj5);
};