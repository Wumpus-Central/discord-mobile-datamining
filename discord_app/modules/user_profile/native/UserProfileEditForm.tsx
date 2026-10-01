// discord_app/modules/user_profile/native/UserProfileEditForm.tsx
import asyncRequireImpl from "../../../../_runtime/01981_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../actions/UserSettingsModalActionCreators.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import UserProfileActionCreators from "../UserProfileActionCreators.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import PendingBadgeSettings from "../../badges/PendingBadgeSettings.tsx";
import _modDef14357 from "../../../../_runtime/metro/14357__.js";
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
    const tmp3 = asyncRequireImpl(14360, dependencyMap.paths);
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
  obj2.children = closure_14(displayProfile(isTryItOut[14]), obj3);
  return closure_14(user(isTryItOut[12]).AnalyticsLocationProvider, obj2);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(6815).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1074);
({ DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: c10, UserSettingsSections: closure_11 } = Constants);
let closure_12 = fn(1084).ProfileCustomizationScrollPositions;
const constants2 = fn(14356).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = {
  assetOrigin: fn(6596).AssetOriginTypes.NEW_ASSET,
  imageUri: _modDef14357,
  staticImageUri: _modDef14357,
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
  let tmp2 = navigation(sharedValue[22])();
  const tmp3 = navigation(sharedValue[23])();
  navigation = currentUser.currentUser(sharedValue[24]).useNavigation();
  let obj2 = currentUser.currentUser(sharedValue[24]);
  const bioMaxLength = currentUser.currentUser(sharedValue[25]).useBioMaxLength({ location: "user_profile_edit_form" });
  const obj3 = currentUser.currentUser(sharedValue[25]);
  const ref = noop.useRef(null);
  const tmp7 = navigation(sharedValue[26])();
  sharedValue = currentUser.currentUser(sharedValue[27]).useSharedValue(true);
  noop = noop.useRef(0);
  const ref1 = noop.useRef(null);
  let ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = navigation(sharedValue[28])({ includeKeyboardHeight: true }).insets;
  const PX_16 = navigation(sharedValue[29]).space.PX_16;
  const obj6 = { insets, inputs: null, scrollViewRef: null };
  const items = [
    { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } },
    { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } },
  ];
  const obj9 = { ref: ref3, offset: null };
  const obj10 = { type: "toValue", value: null };
  const obj5 = currentUser.currentUser(sharedValue[27]);
  const obj7 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj8 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  obj10.value = navigation(sharedValue[29]).space.PX_64;
  obj9.offset = obj10;
  items[2] = obj9;
  obj6.inputs = items;
  obj6.scrollViewRef = ref;
  const onFocus = navigation(sharedValue[30])(obj6).onFocus;
  const tmp14 = navigation(sharedValue[31])();
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
  } = tmp14);
  const pendingBadgeHiddenBadges = tmp14.pendingBadgeHiddenBadges;
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
  } = tmp14);
  navigation(sharedValue[32])();
  const tmp13 = navigation(sharedValue[30]);
  const guildAutomodProfileQuarantineErrors = currentUser
    .currentUser(sharedValue[33])
    .useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj11 = currentUser.currentUser(sharedValue[33]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp17Result = navigation(sharedValue[34])(str2);
  const tmp17 = navigation(sharedValue[34]);
  const customStatusActivity = currentUser.currentUser(obj[35]).useCustomStatusActivity();
  const tmp4Result = currentUser.currentUser(obj[35]);
  const tmp4Result8 = currentUser.currentUser(obj[36]);
  const pendingAvatarSrc = currentUser
    .currentUser(obj[37])
    .getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp20 = tmp(obj[38])(tmp17Result, pendingLegacyUsernameDisabled);
  closure_6 = tmp20;
  const obj12 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp4Result9 = currentUser.currentUser(obj[37]);
  isBadgeManagementEnabled = currentUser
    .currentUser(obj[39])
    .useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result10 = currentUser.currentUser(obj[39]);
  const items1 = [closure_6];
  stateFromStores = currentUser
    .currentUser(obj[40])
    .useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp4Result11 = currentUser.currentUser(obj[40]);
  const items2 = [closure_6];
  stateFromStoresArray = currentUser
    .currentUser(obj[40])
    .useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
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
  const memo = obj4.useMemo(
    () =>
      PendingBadgeSettings.getPendingProfileBadges(closure_6, stateFromStoresArray, {
        pendingBadgeDisplayOrder,
        pendingBadgeHiddenBadges,
      }),
    items4,
  );
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
  const tmp4Result12 = currentUser.currentUser(obj[40]);
  let result = tmp(obj[11]).canUsePremiumProfileCustomization(str);
  let tmp28 = !result;
  if (!result) {
    tmp28 = !tmp7;
  }
  const tmpResult = tmp(obj[11]);
  const isTryItOutMobileRefreshEnabled = currentUser
    .currentUser(obj[43])
    .useIsTryItOutMobileRefreshEnabled("UserProfileEditForm");
  let tmp48Result11 = isTryItOutMobileRefreshEnabled;
  if (isTryItOutMobileRefreshEnabled) {
    tmp48Result11 = !result;
  }
  if (tmp48Result11) {
    tmp48Result11 = !isTryItOut;
  }
  let legacyUsername;
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
  const obj13 = {
    user: currentUser.currentUser,
    displayProfile: tmp17Result,
    pendingThemeColors: null,
    isPreview: null,
  };
  let tmp33 = pendingThemeColors;
  const tmp4Result13 = currentUser.currentUser(obj[43]);
  if (isTryItOut) {
    tmp33 = tryItOutThemeColors;
  }
  obj13.pendingThemeColors = tmp33;
  obj13.isPreview = isTryItOut;
  const tmpResult11 = tmp(obj[44]);
  ({ theme, primaryColor, secondaryColor } = tmp(obj[44])(obj13));
  const tmpResult1Result = tmp(obj[44])(obj13);
  const userProfileColors = currentUser
    .currentUser(obj[45])
    .useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (tmp28) {
    num = 0;
    if (!tmp48Result11) {
      num = stateFromStores;
    }
  }
  const sum = insets.bottom + num;
  sum1 = sum + tmp(obj[29]).space.PX_16;
  const obj14 = { backgroundColor: userProfileColors.avatarBackground };
  const items6 = [navigation];
  const callback = obj4.useCallback(() => {
    UserSettingsModalActionCreatorsDefault.setSection(constants.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(constants.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items6);
  const items7 = [sharedValue, sum1];
  const callback1 = obj4.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const result = sharedValue.set(
      nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height - nativeEvent.contentOffset.y >
        ref.current + sum1,
    );
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
      const intl = tmp4(obj[21]).intl;
      stringResult = intl.string(tmp4(obj[21]).t["84MExs"]);
    }
  }
  const field = isBadgeManagementEnabled.useField("scrollPosition");
  ref2 = tmp(obj[47])(ref, field);
  const obj15 = { theme, primaryColor, secondaryColor, children: null };
  const obj16 = { style: null, children: null };
  const items8 = [tmp3.container, { backgroundColor: gradientSecondaryBackground }];
  obj16.style = items8;
  const obj17 = { ref, onScroll: null, scrollEventThrottle: null, children: null };
  let tmp52;
  if (tmp48Result11) {
    tmp52 = callback1;
  }
  obj17.onScroll = tmp52;
  let num2;
  if (tmp48Result11) {
    num2 = 16;
  }
  obj17.scrollEventThrottle = num2;
  const items9 = [closure_14(pendingBadgeHiddenBadges, { style: tmp3.bounceOffset })];
  const obj19 = {
    fallbackBackground: gradientFallbackBackground,
    primaryColor,
    secondaryColor,
    containerStyle: { backgroundColor: gradientSecondaryBackground },
    children: null,
  };
  const obj18 = { style: tmp3.bounceOffset };
  const tmp4Result14 = currentUser.currentUser(obj[45]);
  const tmp51 = pendingBadgeDisplayOrder;
  const items10 = [
    closure_14(EditUserProfileBanner, {
      user: currentUser.currentUser,
      displayProfile: tmp17Result,
      pendingAvatarSrc,
      pendingBanner,
      pendingAccentColor,
      pendingThemeColors,
      tryItOutBanner,
      isTryItOut,
      disabled: isSubmitting,
    }),
  ];
  const obj20 = {
    style: null,
    children: closure_14(tmp(obj[51]), {
      user: currentUser.currentUser,
      disabled: isSubmitting,
      disableStatus: null != isTryItOut,
      statusStyle: obj14,
      isTryItOut,
      autoStartEditFlow: autoFocusElement === constants2.AVATAR,
    }),
  };
  const items11 = [, , ,];
  ({ avatarBackground: arr12[0], avatarPosition: arr12[1] } = tmp2);
  items11[2] = tmp3.avatarContainer;
  items11[3] = obj14;
  obj20.style = items11;
  const items12 = [closure_14(pendingBadgeHiddenBadges, obj20)];
  const obj22 = {
    fallbackBackground: gradientFallbackBackground,
    primaryColor,
    secondaryColor,
    containerStyle: null,
    children: null,
  };
  const items13 = [, ,];
  ({ profileContentWrapper: arr14[0], profileContent: arr14[1] } = tmp2);
  items13[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj22.containerStyle = items13;
  const obj21 = {
    user: currentUser.currentUser,
    disabled: isSubmitting,
    disableStatus: null != isTryItOut,
    statusStyle: obj14,
    isTryItOut,
    autoStartEditFlow: autoFocusElement === constants2.AVATAR,
  };
  const tmpResult12 = tmp(obj[50]);
  const items14 = [
    closure_14(tmp(obj[52]), {
      customStatusActivity,
      hasCustomProfileTheme: null != primaryColor,
      style: tmp2.customStatusBubble,
      emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble,
      editEnabled: true,
    }),
    ,
    ,
  ];
  const obj24 = {
    user: currentUser.currentUser,
    displayName: pendingGlobalName,
    badges: memo,
    catalogBadges: memo1,
    pronouns: null,
    badgeContainerBackground: null,
    displayNameAccessibilityRole: "header",
    canOpenBadgeDirectory: null,
    pendingDisplayNameStyles: null,
  };
  let tmp57 = pendingPronouns;
  const obj23 = {
    customStatusActivity,
    hasCustomProfileTheme: null != primaryColor,
    style: tmp2.customStatusBubble,
    emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble,
    editEnabled: true,
  };
  const tmpResult13 = tmp(obj[50]);
  if (pendingPronouns == null) {
    tmp57 = str4;
  }
  obj24.pronouns = tmp57;
  obj24.badgeContainerBackground = containerBackground;
  obj24.canOpenBadgeDirectory = !isTryItOut;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj24.pendingDisplayNameStyles = pendingDisplayNameStyles;
  items14[1] = closure_14(tmp(obj[53]), obj24);
  const obj25 = { style: null, children: null };
  const items15 = [tmp3.formContainer, { backgroundColor: containerBackground }];
  obj25.style = items15;
  let tmp48Result = null;
  if (null != stringResult) {
    tmp48Result = null;
    if ("" !== stringResult) {
      const obj26 = { style: tmp3.errorContainer, children: null };
      const obj27 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj26.children = closure_14(tmp4(obj[48]).Text, obj27);
      tmp48Result = closure_14(tmp50, obj26);
    }
  }
  const items16 = [tmp48Result, , , , , , , , , , , , ,];
  const obj28 = {
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
  const tmpResult14 = tmp(obj[53]);
  const intl2 = tmp4(obj[21]).intl;
  obj28.label = intl2.string(currentUser.currentUser(obj[21]).t["9AjdkD"]);
  obj28.errorMessage = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  obj28.value = pendingGlobalName;
  obj28.onFocus = onFocus;
  obj28.onChange = function onChange(globalName) {
    return str(sharedValue[19]).setPendingChanges({ globalName });
  };
  obj28.placeholder = currentUser.currentUser.toString();
  obj28.maxLength = stateFromStoresArray;
  obj28.disabled = isSubmitting;
  items16[1] = closure_14(tmp(obj[54]), obj28);
  let tmp48Result7 = result;
  if (!result) {
    tmp48Result7 = isTryItOut;
  }
  if (tmp48Result7) {
    const obj29 = { user: str, isTryItOut };
    tmp48Result7 = closure_14(tmp(obj[55]), obj29);
  }
  items16[2] = tmp48Result7;
  const obj30 = {
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
  const tmpResult15 = tmp(obj[54]);
  const intl3 = tmp4(obj[21]).intl;
  obj30.label = intl3.string(currentUser.currentUser(obj[21]).t["+T3RI/"]);
  obj30.errorMessage = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  obj30.value = pendingPronouns;
  obj30.onFocus = onFocus;
  obj30.onChange = function onChange(pronouns) {
    return str(sharedValue[19]).setPendingChanges({ pronouns });
  };
  obj30.maxLength = sum1;
  obj30.disabled = isSubmitting;
  items16[3] = closure_14(tmp(obj[54]), obj30);
  let tmp48Result8 = !isTryItOut;
  if (!isTryItOut) {
    const obj31 = {
      badges: memo,
      catalogBadges: memo1,
      ownsAnyBadge: someResult,
      autoOpen: autoFocusElement === constants2.BADGES,
    };
    tmp48Result8 = closure_14(tmp(obj[56]), obj31);
  }
  items16[4] = tmp48Result8;
  const obj32 = {
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
  const tmpResult16 = tmp(obj[54]);
  const intl4 = tmp4(obj[21]).intl;
  obj32.label = intl4.string(currentUser.currentUser(obj[21]).t.ZzAR2Y);
  obj32.errorMessage = first4;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  obj32.value = pendingBio;
  obj32.onFocus = onFocus;
  obj32.onChange = function onChange(bio) {
    return str(sharedValue[19]).setPendingChanges({ bio });
  };
  obj32.autoFocus = autoFocusElement === constants2.BIO;
  obj32.maxLength = bioMaxLength;
  obj32.disabled = isSubmitting;
  items16[5] = closure_14(tmp(obj[54]), obj32);
  const obj33 = {
    user: currentUser.currentUser,
    onProfileThemeColorsChanged: null,
    pendingAvatarSrc: null,
    pendingThemeColors: null,
    isTryItOut: null,
  };
  const tmpResult17 = tmp(obj[54]);
  if (isTryItOut) {
    let fn = tmp4(obj[18]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => str(sharedValue[19]).setPendingChanges({ themeColors });
  }
  obj33.onProfileThemeColorsChanged = fn;
  obj33.pendingAvatarSrc = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj33.pendingThemeColors = pendingThemeColors;
  obj33.isTryItOut = isTryItOut;
  items16[6] = closure_14(tmp(obj[57]), obj33);
  const obj34 = { user: currentUser.currentUser, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult18 = tmp(obj[57]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj34.pendingAvatarDecoration = pendingAvatarDecoration;
  obj34.isTryItOut = isTryItOut;
  items16[7] = closure_14(tmp(obj[58]), obj34);
  const obj35 = { user: currentUser.currentUser, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult19 = tmp(obj[58]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp48Result9 = "profile" === tmp4Result8.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj35.pendingProfileEffect = pendingProfileEffect;
  obj35.displayProfile = tmp17Result;
  obj35.isTryItOut = isTryItOut;
  items16[8] = closure_14(tmp(obj[59]), obj35);
  items16[9] = closure_14(tmp(obj[60]), {
    user: currentUser.currentUser,
    pendingProfileFrame,
    displayProfile: tmp17Result,
  });
  items16[10] = closure_14(tmp(obj[61]), { user: currentUser.currentUser, pendingNameplate });
  if (tmp48Result9) {
    if (!result) {
      result = isTryItOut;
    }
    tmp48Result9 = result;
  }
  if (tmp48Result9) {
    const obj36 = { isTryItOut };
    tmp48Result9 = closure_14(tmp(obj[62]), obj36);
  }
  items16[11] = tmp48Result9;
  const obj37 = {
    ref(arg0) {
      if (null != arg0) {
        ref2.current[constants.GUILD_TAG] = arg0;
      }
    },
    children: closure_14(tmp(obj[63]), {
      user: currentUser.currentUser,
      disabled: isSubmitting,
      tagStyle: { backgroundColor: containerBackground },
      pendingPrimaryGuildId,
    }),
  };
  items16[12] = closure_14(pendingBadgeHiddenBadges, obj37);
  let tmp48Result10 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp48Result10) {
    const obj39 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp48Result10 = closure_14(tmp(obj[64]), obj39);
  }
  items16[13] = tmp48Result10;
  obj25.children = items16;
  items14[2] = closure_15(pendingBadgeHiddenBadges, obj25);
  if (tmp48Result11) {
    const obj40 = { onLayout: callback2, onPreviewPremium: callback };
    tmp48Result11 = closure_14(tmp(obj[65]), obj40);
  }
  const obj41 = { children: null };
  items14[3] = tmp48Result11;
  obj22.children = items14;
  items12[1] = closure_15(tmpResult13, obj22);
  obj41.children = items12;
  items10[1] = closure_15(pendingBadgeHiddenBadges, obj41);
  obj19.children = items10;
  items9[1] = closure_15(tmpResult12, obj19);
  obj17.children = items9;
  const items17 = [closure_15(tmp51, obj17)];
  if (!tmp28) {
    items17[1] = tmp28;
    obj16.children = items17;
    obj15.children = closure_15(tmp50, obj16);
    return closure_14(tmp4(obj[49]).ThemeContextProvider, obj15);
  } else if (isTryItOutMobileRefreshEnabled) {
    tmp = tmp(obj[66]);
    obj = { isVisible: sharedValue, onPreviewPremium: callback };
    let tmp48Result12 = closure_14(tmp, obj);
  } else {
    const obj42 = { isTryItOut };
    tmp48Result12 = closure_14(tmp4(obj[67]).UserProfilePremiumUpsellCard, obj42);
  }
  const obj38 = {
    user: currentUser.currentUser,
    disabled: isSubmitting,
    tagStyle: { backgroundColor: containerBackground },
    pendingPrimaryGuildId,
  };
  const tmpResult20 = tmp(obj[59]);
}
