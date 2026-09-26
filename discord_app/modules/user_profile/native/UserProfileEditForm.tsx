// discord_app/modules/user_profile/native/UserProfileEditForm.tsx
import asyncRequireImpl from "../../../../_runtime/01981_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import UserProfileActionCreators from "../UserProfileActionCreators.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import PendingBadgeSettings from "../../badges/PendingBadgeSettings.tsx";
import _modDef14148 from "../../../../_runtime/metro/14148__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import ProfileCustomizationNavigationStore from "../../profile_customization/ProfileCustomizationNavigationStore.tsx";

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
  let obj2 = { value: analyticsLocations, children: null };
  const obj3 = {
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
  let banner;
  const tmp4 = displayProfile(isTryItOut[12]);
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
      fn = (banner) => user(isTryItOut[19]).setPendingChanges({ banner });
    }
    obj2.onBannerChange = fn;
    const tmp3 = asyncRequireImpl(14150, dependencyMap.paths);
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    obj2.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
    obj2.isTryItOut = isTryItOut;
    obj.openLazy(tmp3, "Change Banner", obj2);
    const tmp2Result = ProfileCustomizationUtils;
  };
  const intl = tmp6(isTryItOut[21]).intl;
  obj3.editButtonAccessibilityLabel = intl.string(user(isTryItOut[21]).t.VqsHy0);
  obj3.editDisabled = disabled;
  obj2.children = closure_13(displayProfile(isTryItOut[14]), obj3);
  return closure_13(user(isTryItOut[12]).AnalyticsLocationProvider, obj2);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(6629).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1074);
({ DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: c10 } = Constants);
let closure_11 = fn(1084).ProfileCustomizationScrollPositions;
const constants = fn(10658).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = {
  assetOrigin: fn(6410).AssetOriginTypes.NEW_ASSET,
  imageUri: _modDef14148,
  staticImageUri: _modDef14148,
  description: "",
  originalAsset: "channelId",
};
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
  const tmp3 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[22])();
  const tmp4 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[23])();
  const bioMaxLength = currentUser
    .currentUser(pendingBadgeHiddenBadges[24])
    .useBioMaxLength({ location: "user_profile_edit_form" });
  const tmp7 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[25])();
  const ref = noop.useRef(null);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[26])({ includeKeyboardHeight: true }).insets;
  const PX_16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27]).space.PX_16;
  const obj3 = { insets, inputs: null, scrollViewRef: null };
  const items = [
    { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } },
    { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } },
  ];
  const obj6 = { ref: ref3, offset: null };
  const obj7 = { type: "toValue", value: null };
  obj = currentUser.currentUser(pendingBadgeHiddenBadges[24]);
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  obj7.value = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[27]).space.PX_64;
  obj6.offset = obj7;
  items[2] = obj6;
  obj3.inputs = items;
  obj3.scrollViewRef = ref;
  const onFocus = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[28])(obj3).onFocus;
  const tmp13 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[29])();
  ({
    errors,
    isSubmitting,
    pendingAvatarDecoration,
    pendingProfileEffect,
    pendingThemeColors,
    tryItOutThemeColors,
    pendingGlobalName,
    pendingPronouns,
    pendingBio,
    pendingLegacyUsernameDisabled,
    pendingBadgeDisplayOrder,
  } = tmp13);
  pendingBadgeHiddenBadges = tmp13.pendingBadgeHiddenBadges;
  ({
    pendingDisplayNameStyles,
    pendingAvatar,
    pendingBanner,
    pendingProfileFrame,
    pendingNameplate,
    pendingAccentColor,
    tryItOutBanner,
    tryItOutAvatarDecoration,
    tryItOutProfileEffect,
    tryItOutDisplayNameStyles,
    pendingPrimaryGuildId,
  } = tmp13);
  pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[30])();
  const tmp12 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[28]);
  const guildAutomodProfileQuarantineErrors = currentUser
    .currentUser(pendingBadgeHiddenBadges[31])
    .useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj8 = currentUser.currentUser(pendingBadgeHiddenBadges[31]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp16Result = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[32])(str2);
  const tmp16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[32]);
  const customStatusActivity = currentUser.currentUser(pendingBadgeHiddenBadges[33]).useCustomStatusActivity();
  const tmp5Result = currentUser.currentUser(pendingBadgeHiddenBadges[33]);
  const tmp5Result7 = currentUser.currentUser(pendingBadgeHiddenBadges[34]);
  const pendingAvatarSrc = currentUser
    .currentUser(pendingBadgeHiddenBadges[35])
    .getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp19 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[36])(tmp16Result, pendingLegacyUsernameDisabled);
  noop = tmp19;
  const obj9 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp5Result8 = currentUser.currentUser(pendingBadgeHiddenBadges[35]);
  isBadgeManagementEnabled = currentUser
    .currentUser(pendingBadgeHiddenBadges[37])
    .useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp5Result9 = currentUser.currentUser(pendingBadgeHiddenBadges[37]);
  const items1 = [stateFromStoresArray];
  stateFromStores = currentUser
    .currentUser(pendingBadgeHiddenBadges[38])
    .useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp5Result10 = currentUser.currentUser(pendingBadgeHiddenBadges[38]);
  const items2 = [stateFromStoresArray];
  stateFromStoresArray = currentUser
    .currentUser(pendingBadgeHiddenBadges[38])
    .useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
  const items3 = [currentUser.currentUser.id, isBadgeManagementEnabled];
  const effect = obj2.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(str.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
    }
  }, items3);
  const items4 = [tmp19, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj2.useMemo(
    () =>
      PendingBadgeSettings.getPendingProfileBadges(closure_3, stateFromStoresArray, {
        pendingBadgeDisplayOrder,
        pendingBadgeHiddenBadges,
      }),
    items4,
  );
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = obj2.useMemo(() => {
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
  const tmp5Result11 = currentUser.currentUser(pendingBadgeHiddenBadges[38]);
  let result = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[11]).canUsePremiumProfileCustomization(str);
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
  const obj10 = {
    user: currentUser.currentUser,
    displayProfile: tmp16Result,
    pendingThemeColors: null,
    isPreview: null,
  };
  let tmp29 = pendingThemeColors;
  const tmpResult = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[11]);
  if (isTryItOut) {
    tmp29 = tryItOutThemeColors;
  }
  obj10.pendingThemeColors = tmp29;
  obj10.isPreview = isTryItOut;
  const tmpResult11 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[41]);
  ({ theme, primaryColor, secondaryColor } = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[41])(obj10));
  const tmpResult1Result = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[41])(obj10);
  const userProfileColors = currentUser
    .currentUser(pendingBadgeHiddenBadges[42])
    .useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (!result) {
    num = 0;
    if (!tmp7) {
      num = FLOATING_UPSELL_HEIGHT;
    }
  }
  const sum = insets.bottom + num;
  const obj11 = { backgroundColor: userProfileColors.avatarBackground };
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
  const obj12 = { theme, primaryColor, secondaryColor, children: null };
  const obj13 = { style: null, children: null };
  const items6 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  obj13.style = items6;
  const obj14 = { ref, children: null };
  const items7 = [closure_13(stateFromStores, { style: tmp4.bounceOffset })];
  const obj16 = {
    fallbackBackground: gradientFallbackBackground,
    primaryColor,
    secondaryColor,
    containerStyle: { backgroundColor: gradientSecondaryBackground },
    children: null,
  };
  const obj15 = { style: tmp4.bounceOffset };
  const tmp44 = isBadgeManagementEnabled;
  const tmp5Result12 = currentUser.currentUser(pendingBadgeHiddenBadges[42]);
  const items8 = [
    closure_13(EditUserProfileBanner, {
      user: currentUser.currentUser,
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
  const obj17 = {
    style: null,
    children: closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[47]), {
      user: currentUser.currentUser,
      disabled: isSubmitting,
      disableStatus: null != isTryItOut,
      statusStyle: obj11,
      isTryItOut,
      autoStartEditFlow: autoFocusElement === constants.AVATAR,
    }),
  };
  const items9 = [, , ,];
  ({ avatarBackground: arr10[0], avatarPosition: arr10[1] } = tmp3);
  items9[2] = tmp4.avatarContainer;
  items9[3] = obj11;
  obj17.style = items9;
  const items10 = [closure_13(stateFromStores, obj17)];
  const obj19 = {
    fallbackBackground: gradientFallbackBackground,
    primaryColor,
    secondaryColor,
    containerStyle: null,
    children: null,
  };
  const items11 = [, ,];
  ({ profileContentWrapper: arr12[0], profileContent: arr12[1] } = tmp3);
  items11[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj19.containerStyle = items11;
  const obj18 = {
    user: currentUser.currentUser,
    disabled: isSubmitting,
    disableStatus: null != isTryItOut,
    statusStyle: obj11,
    isTryItOut,
    autoStartEditFlow: autoFocusElement === constants.AVATAR,
  };
  const tmpResult12 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[46]);
  const items12 = [
    closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[48]), {
      customStatusActivity,
      hasCustomProfileTheme: null != primaryColor,
      style: tmp3.customStatusBubble,
      emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble,
      editEnabled: true,
    }),
    ,
  ];
  const obj21 = {
    user: currentUser.currentUser,
    displayName: pendingGlobalName,
    badges: memo,
    catalogBadges: memo1,
    pronouns: null,
    badgeContainerBackground: null,
    displayNameAccessibilityRole: "header",
    pendingDisplayNameStyles: null,
  };
  let tmp49 = pendingPronouns;
  const obj20 = {
    customStatusActivity,
    hasCustomProfileTheme: null != primaryColor,
    style: tmp3.customStatusBubble,
    emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble,
    editEnabled: true,
  };
  const tmpResult13 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[46]);
  if (pendingPronouns == null) {
    tmp49 = str4;
  }
  obj21.pronouns = tmp49;
  obj21.badgeContainerBackground = containerBackground;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj21.pendingDisplayNameStyles = pendingDisplayNameStyles;
  items12[1] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[49]), obj21);
  const obj22 = { style: null, children: null };
  const items13 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  obj22.style = items13;
  let tmp41Result = null;
  if (null != stringResult) {
    tmp41Result = null;
    if ("" !== stringResult) {
      const obj23 = { style: tmp4.errorContainer, children: null };
      const obj24 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj23.children = closure_13(tmp5(tmp2[44]).Text, obj24);
      tmp41Result = closure_13(tmp43, obj23);
    }
  }
  const items14 = [tmp41Result, , , , , , , , , , , , ,];
  const obj25 = {
    inputRef: ref1,
    label: null,
    errorMessage: null,
    value: null,
    onFocus: null,
    onChange: null,
    placeholder: null,
    maxLength: null,
    disabled: null,
  };
  const tmpResult14 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[49]);
  const intl2 = tmp5(tmp2[21]).intl;
  obj25.label = intl2.string(currentUser.currentUser(pendingBadgeHiddenBadges[21]).t["9AjdkD"]);
  obj25.errorMessage = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  obj25.value = pendingGlobalName;
  obj25.onFocus = onFocus;
  obj25.onChange = function onChange(globalName) {
    return str(pendingBadgeHiddenBadges[19]).setPendingChanges({ globalName });
  };
  obj25.placeholder = currentUser.currentUser.toString();
  obj25.maxLength = maxLength;
  obj25.disabled = isSubmitting;
  items14[1] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), obj25);
  let tmp41Result6 = result;
  if (!result) {
    tmp41Result6 = isTryItOut;
  }
  if (tmp41Result6) {
    const obj26 = { user: str, isTryItOut };
    tmp41Result6 = closure_13(tmp(tmp2[51]), obj26);
  }
  items14[2] = tmp41Result6;
  const obj27 = {
    inputRef: ref2,
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
  const tmpResult15 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]);
  const intl3 = tmp5(tmp2[21]).intl;
  obj27.label = intl3.string(currentUser.currentUser(pendingBadgeHiddenBadges[21]).t["+T3RI/"]);
  obj27.errorMessage = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  obj27.value = pendingPronouns;
  obj27.onFocus = onFocus;
  obj27.onChange = function onChange(pronouns) {
    return str(pendingBadgeHiddenBadges[19]).setPendingChanges({ pronouns });
  };
  obj27.maxLength = maxLength2;
  obj27.disabled = isSubmitting;
  items14[3] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), obj27);
  let tmp41Result7 = !isTryItOut;
  if (!isTryItOut) {
    const obj28 = {
      badges: memo,
      catalogBadges: memo1,
      ownsAnyBadge: someResult,
      autoOpen: autoFocusElement === constants.BADGES,
    };
    tmp41Result7 = closure_13(tmp(tmp2[52]), obj28);
  }
  items14[4] = tmp41Result7;
  const obj29 = {
    inputRef: ref3,
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
  const tmpResult16 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]);
  const intl4 = tmp5(tmp2[21]).intl;
  obj29.label = intl4.string(currentUser.currentUser(pendingBadgeHiddenBadges[21]).t.ZzAR2Y);
  obj29.errorMessage = first4;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  obj29.value = pendingBio;
  obj29.onFocus = onFocus;
  obj29.onChange = function onChange(bio) {
    return str(pendingBadgeHiddenBadges[19]).setPendingChanges({ bio });
  };
  obj29.autoFocus = autoFocusElement === constants.BIO;
  obj29.maxLength = bioMaxLength;
  obj29.disabled = isSubmitting;
  items14[5] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]), obj29);
  const obj30 = {
    user: currentUser.currentUser,
    onProfileThemeColorsChanged: null,
    pendingAvatarSrc: null,
    pendingThemeColors: null,
    isTryItOut: null,
  };
  const tmpResult17 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[50]);
  if (isTryItOut) {
    let fn = tmp5(tmp2[18]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => str(pendingBadgeHiddenBadges[19]).setPendingChanges({ themeColors });
  }
  obj30.onProfileThemeColorsChanged = fn;
  obj30.pendingAvatarSrc = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj30.pendingThemeColors = pendingThemeColors;
  obj30.isTryItOut = isTryItOut;
  items14[6] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[53]), obj30);
  const obj31 = { user: currentUser.currentUser, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult18 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[53]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj31.pendingAvatarDecoration = pendingAvatarDecoration;
  obj31.isTryItOut = isTryItOut;
  items14[7] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[54]), obj31);
  const obj32 = { user: currentUser.currentUser, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult19 = pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[54]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp41Result8 = "profile" === tmp5Result7.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj32.pendingProfileEffect = pendingProfileEffect;
  obj32.displayProfile = tmp16Result;
  obj32.isTryItOut = isTryItOut;
  items14[8] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[55]), obj32);
  items14[9] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[56]), {
    user: currentUser.currentUser,
    pendingProfileFrame,
    displayProfile: tmp16Result,
  });
  items14[10] = closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[57]), {
    user: currentUser.currentUser,
    pendingNameplate,
  });
  if (tmp41Result8) {
    let tmp60 = result;
    if (!result) {
      tmp60 = isTryItOut;
    }
    tmp41Result8 = tmp60;
  }
  if (tmp41Result8) {
    const obj33 = { isTryItOut };
    tmp41Result8 = closure_13(tmp(tmp2[58]), obj33);
  }
  items14[11] = tmp41Result8;
  const obj34 = {
    ref(arg0) {
      if (null != arg0) {
        ref.current[constants.GUILD_TAG] = arg0;
      }
    },
    children: closure_13(pendingBadgeDisplayOrder(pendingBadgeHiddenBadges[59]), {
      user: currentUser.currentUser,
      disabled: isSubmitting,
      tagStyle: { backgroundColor: containerBackground },
      pendingPrimaryGuildId,
    }),
  };
  items14[12] = closure_13(stateFromStores, obj34);
  let tmp41Result9 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp41Result9) {
    const obj36 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp41Result9 = closure_13(tmp(tmp2[60]), obj36);
  }
  const obj37 = { children: null };
  items14[13] = tmp41Result9;
  obj22.children = items14;
  items12[2] = closure_14(stateFromStores, obj22);
  obj19.children = items12;
  items10[1] = closure_14(tmpResult13, obj19);
  obj37.children = items10;
  items8[1] = closure_14(stateFromStores, obj37);
  obj16.children = items8;
  items7[1] = closure_14(tmpResult12, obj16);
  obj14.children = items7;
  const items15 = [closure_14(tmp44, obj14)];
  let tmp41Result10 = !result;
  if (!result) {
    tmp41Result10 = !tmp7;
  }
  if (tmp41Result10) {
    const obj38 = { isTryItOut };
    tmp41Result10 = closure_13(tmp5(tmp2[61]).UserProfilePremiumUpsellCard, obj38);
  }
  items15[1] = tmp41Result10;
  obj13.children = items15;
  obj12.children = closure_14(stateFromStores, obj13);
  return closure_13(currentUser.currentUser(pendingBadgeHiddenBadges[45]).ThemeContextProvider, obj12);
}
