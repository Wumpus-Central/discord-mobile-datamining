// === Module 14413: UserProfileEditForm ===

// Module 14413 (UserProfileEditForm)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6486 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6487 */;
import Constants2 from "Constants" /* 6707 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 7837 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7838 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7868 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 12923 */;
import UserProfileEditConstants from "UserProfileEditConstants" /* 14414 */;
import AssetRegistryDefault from "AssetRegistry" /* 14415 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 9417 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let currentUser, importDefault, nativeEvent, navigation, tmp;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let unpackModuleId;
function EditUserProfileBanner(user) {
  let disabled;
  let intl;
  let isTryItOut;
  let obj3;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let pendingThemeColors;
  let tmp7;
  let tryItOutBanner;
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
  let tmp4 = displayProfile(isTryItOut[12]);
  analyticsLocations = tmp4(displayProfile(isTryItOut[13]).EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: closure_14(tmp7, obj3) };
  const AnalyticsLocationProvider = user(isTryItOut[12]).AnalyticsLocationProvider;
  let banner;
  obj3 = {
    user,
    displayProfile,
    pendingBanner,
    pendingAvatarSrc,
    pendingThemeColors,
    pendingAccentColor,
    bannerSafeArea: 12,
    showProfilePreviewButton: canUseCollectiblesResult,
    onPressEdit() {
      let banner;
      let fn;
      let showRemoveBanner;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      obj = { user, analyticsLocations, onBannerChange: fn, showRemoveBanner: showRemoveBanner(pendingBanner, banner), isTryItOut };
      ActionSheetActionCreatorsDefault;
      const tmp4 = asyncRequire(14418, dependencyMap.paths);
      if (isTryItOut) {
        fn = UserProfileActionCreators.setTryItOutBanner;
      } else {
        fn = (banner) => {
          obj = user(isTryItOut[19]);
          const obj2 = { banner };
          return obj.setPendingChanges(obj2);
        };
      }
      banner = undefined;
      showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner;
      ProfileCustomizationUtils;
      if (displayProfile != null) {
        banner = displayProfile.banner;
      }
      openLazy(tmp4, "Change Banner", obj);
    },
    editButtonAccessibilityLabel: intl.string(user(isTryItOut[21]).t.VqsHy0),
    editDisabled: disabled
  };
  tmp7 = displayProfile(isTryItOut[14]);
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  intl = tmp6(isTryItOut[21]).intl;
  return closure_14(AnalyticsLocationProvider, obj2);
}
let react = react_mod;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
const FLOATING_UPSELL_HEIGHT = Constants2.FLOATING_UPSELL_HEIGHT;
({ DISPLAY_NAME_MAX_LENGTH: c9, PRONOUNS_MAX_LENGTH: c10, UserSettingsSections: unpackModuleId } = Constants);
let closure_12 = UserSettingsConstants.ProfileCustomizationScrollPositions;
const constants2 = UserProfileEditConstants.UserProfileEditAutoFocusElement;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: AssetRegistryDefault, staticImageUri: AssetRegistryDefault, description: "", originalAsset: "code" };
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((currentUser) => {
  let autoFocusElement;
  let errorContainer;
  let errors;
  let first;
  let isSubmitting;
  let isTryItOut;
  let obj10;
  let obj6;
  let obj8;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBadgeDisplayOrder;
  let pendingBadgeHiddenBadges;
  let pendingBanner;
  let pendingBio;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingLegacyUsernameDisabled;
  let pendingNameplate;
  let pendingPrimaryGuildId;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let sharedValue;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp41;
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  let tmp2 = navigation;
  obj = currentUser(navigation[23]);
  const cResult = obj.c(147);
  currentUser = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut } = currentUser);
  require("UserProfileSharedStyles")();
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  importDefault = tmp6;
  const tmpResult = currentUser(tmp2[26]);
  navigation = tmpResult.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "user_profile_edit_form" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult11 = currentUser(tmp2[27]);
  const bioMaxLength = tmpResult11.useBioMaxLength(first);
  require("useKeyboardIsOpen")();
  sharedValue.useRef(null);
  const obj5 = sharedValue;
  const tmpResult12 = currentUser(tmp2[29]);
  sharedValue = tmpResult12.useSharedValue(true);
  const ref = sharedValue.useRef(0);
  const ref1 = sharedValue.useRef(null);
  const ref2 = sharedValue.useRef(null);
  const ref3 = sharedValue.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    tmp16 = obj3;
  } else {
    tmp16 = cResult[1];
  }
  const insets = tmp4(tmp2[30])(tmp16).insets;
  const PX_16 = tmp4(tmp2[31]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { ref: ref1, offset: obj6 };
    obj6 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    cResult[2] = obj4;
    tmp17 = obj4;
  } else {
    tmp17 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { ref: ref2, offset: obj8 };
    obj8 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    cResult[3] = obj7;
    tmp18 = obj7;
  } else {
    tmp18 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp17, tmp18, ];
    const obj9 = { ref: ref3, offset: obj10 };
    items[2] = obj9;
    cResult[4] = items;
    tmp19 = items;
    obj10 = { type: "toValue", value: require("native").space.PX_64 };
  } else {
    tmp19 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj11 = { insets, inputs: tmp19, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj11;
    tmp20 = obj11;
  } else {
    tmp20 = cResult[6];
  }
  const onFocus = tmp4(tmp2[32])(tmp20).onFocus;
  ({ errors, isSubmitting, pendingAvatar, pendingAvatarDecoration, pendingBanner, pendingProfileEffect, pendingThemeColors, pendingAccentColor, tryItOutBanner, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges, pendingDisplayNameStyles, pendingProfileFrame, pendingNameplate, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = require("useUserProfileEditForm")());
  require("useUserProfileEditForm")();
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmpResult13 = currentUser(tmp2[35]);
  const guildAutomodProfileQuarantineErrors = tmpResult13.useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmp4Result = require("useDisplayProfile");
  if (str == null) {
    str = "";
  }
  const tmp4ResultResult = tmp4Result(str);
  const tmpResult14 = currentUser(tmp2[37]);
  const customStatusActivity = tmpResult14.useCustomStatusActivity();
  currentUser(tmp2[38]);
  if (cResult[7] === currentUser.id) {
    let tmp31;
    let tmp33;
    let tmp37;
    const tmp30 = require("useBadges")(tmp4ResultResult, pendingLegacyUsernameDisabled);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { location: "UserProfileEditForm" };
      cResult[10] = obj12;
      tmp31 = obj12;
    } else {
      tmp31 = cResult[10];
    }
    const tmpResult16 = currentUser(tmp2[41]);
    const isBadgeManagementEnabled = tmpResult16.useIsBadgeManagementEnabled(tmp31);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[11] = items1;
      tmp33 = items1;
    } else {
      tmp33 = cResult[11];
    }
    if (cResult[12] !== currentUser.id) {
      class Te {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
      cResult[12] = currentUser.id;
      cResult[13] = Te;
    } else {
      class Te {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
    }
    const tmpResult17 = currentUser(tmp2[42]);
    const stateFromStores = tmpResult17.useStateFromStores(tmp33, Te);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class Te {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
      const items2 = [BadgeDirectoryStore];
      cResult[14] = items2;
      tmp37 = items2;
    } else {
      class Te {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
    }
    if (cResult[15] !== currentUser.id) {
      class Ae {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
      cResult[15] = currentUser.id;
      cResult[16] = Ae;
    } else {
      class Ae {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
    }
    const tmpResult18 = currentUser(tmp2[42]);
    const stateFromStoresArray = tmpResult18.useStateFromStoresArray(tmp37, Ae);
    if (cResult[17] === currentUser.id) {
      class Ae {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
      const effect = obj5.useEffect(Fe, tmp41);
      if (cResult[21] === tmp30) {
        class Ae {
          constructor() {
            return closure_6.getBadges(currentUser.id);
          }
        }
      }
      const obj13 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const tmpResult19 = currentUser(tmp2[44]);
      const pendingProfileBadges = tmpResult19.getPendingProfileBadges(tmp30, stateFromStoresArray, obj13);
      cResult[21] = tmp30;
      cResult[22] = stateFromStoresArray;
      cResult[23] = pendingBadgeDisplayOrder;
      cResult[24] = pendingBadgeHiddenBadges;
      cResult[25] = pendingProfileBadges;
    }
    class Fe {
      constructor() {
        tmp = closure_5;
        if (tmp) {
          obj = closure_6;
          tmp2 = currentUser;
          tmp3 = closure_6.hasCatalogFor(currentUser.id) && !obj.isCatalogStaleFor(tmp2.id);
          if (!tmp3) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj2 = closure_0(closure_2[43]);
            badgeDirectory = obj2.fetchBadgeDirectory(tmp2.id);
          }
        }
        return;
      }
    }
    const items3 = [currentUser.id, isBadgeManagementEnabled];
    cResult[17] = currentUser.id;
    cResult[18] = isBadgeManagementEnabled;
    cResult[19] = Fe;
    cResult[20] = items3;
    tmp41 = items3;
  }
  const obj14 = { userId: currentUser.id, image: pendingAvatar };
  const tmpResult20 = currentUser(tmp2[39]);
  const pendingAvatarSrc = tmpResult20.getPendingAvatarSrc(obj14);
  cResult[7] = currentUser.id;
  cResult[8] = pendingAvatar;
  cResult[9] = pendingAvatarSrc;
}) : ((currentUser) => {
  let autoFocusElement;
  let containerBackground;
  let errors;
  let fn;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let intl2;
  let intl3;
  let intl4;
  let isSubmitting;
  let isTryItOut;
  let items;
  let items10;
  let items11;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items8;
  let items9;
  let num2;
  let obj15;
  let obj20;
  let obj26;
  let obj37;
  let obj9;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBadgeDisplayOrder;
  let pendingBanner;
  let pendingBio;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingLegacyUsernameDisabled;
  let pendingNameplate;
  let pendingPrimaryGuildId;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tmp34;
  let tmp53;
  let tmp58;
  let tryItOutAvatarDecoration;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutProfileEffect;
  let tryItOutThemeColors;
  const str = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  navigation = undefined;
  let sharedValue;
  react = undefined;
  pendingBadgeDisplayOrder = undefined;
  let closure_6;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  let sum1;
  let tmp3 = navigation(sharedValue[24])();
  const tmp4 = navigation(sharedValue[25])();
  obj = str(sharedValue[26]);
  navigation = obj.useNavigation();
  let obj2 = str(sharedValue[27]);
  const bioMaxLength = obj2.useBioMaxLength({ location: "user_profile_edit_form" });
  const tmp8 = navigation(sharedValue[28])();
  const ref = react.useRef(null);
  const obj4 = str(sharedValue[29]);
  sharedValue = obj4.useSharedValue(true);
  react = react.useRef(0);
  const ref1 = react.useRef(null);
  let ref2 = react.useRef(null);
  const ref3 = react.useRef(null);
  const insets = navigation(sharedValue[30])({ includeKeyboardHeight: true }).insets;
  const PX_16 = navigation(sharedValue[31]).space.PX_16;
  const obj5 = { insets, inputs: items, scrollViewRef: ref };
  items = [, , ];
  const obj6 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  items[0] = obj6;
  const obj7 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  items[1] = obj7;
  const obj8 = { ref: ref3, offset: obj9 };
  obj9 = { type: "toValue", value: navigation(sharedValue[31]).space.PX_64 };
  items[2] = obj8;
  const tmp14 = navigation(sharedValue[32]);
  const onFocus = tmp14(obj5).onFocus;
  const tmp15 = navigation(sharedValue[33])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp15);
  const pendingBadgeHiddenBadges = tmp15.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp15);
  navigation(sharedValue[34])();
  const obj10 = str(sharedValue[35]);
  const guildAutomodProfileQuarantineErrors = obj10.useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const tmp18 = navigation(sharedValue[36]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp18Result = tmp18(str2);
  const tmp5Result = str(sharedValue[37]);
  const customStatusActivity = tmp5Result.useCustomStatusActivity();
  const tmp5Result8 = str(sharedValue[38]);
  const entryPoint = tmp5Result8.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  const obj11 = { userId: str.id, image: pendingAvatar };
  const tmp5Result9 = str(sharedValue[39]);
  const pendingAvatarSrc = tmp5Result9.getPendingAvatarSrc(obj11);
  const tmp21 = navigation(sharedValue[40])(tmp18Result, pendingLegacyUsernameDisabled);
  closure_6 = tmp21;
  const tmp5Result10 = str(sharedValue[41]);
  isBadgeManagementEnabled = tmp5Result10.useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const items1 = [closure_6];
  const tmp5Result11 = str(sharedValue[42]);
  stateFromStores = tmp5Result11.useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const items2 = [closure_6];
  const tmp5Result12 = str(sharedValue[42]);
  stateFromStoresArray = tmp5Result12.useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
  const items3 = [str.id, isBadgeManagementEnabled];
  const effect = obj3.useEffect(() => {
    if (isBadgeManagementEnabled) {
      const tmp3 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
      if (!tmp3) {
        const obj2 = BadgeDirectoryActionCreators;
        const badgeDirectory = obj2.fetchBadgeDirectory(str.id);
      }
    }
  }, items3);
  const items4 = [tmp21, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo = obj3.useMemo(() => {
    obj = PendingBadgeSettings;
    const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
    return obj.getPendingProfileBadges(closure_6, stateFromStoresArray, obj2);
  }, items4);
  const items5 = [stateFromStores, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
  const memo1 = obj3.useMemo(() => {
    let found = null;
    if (stateFromStores) {
      const obj2 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      obj = PendingBadgeSettings;
      const result = obj.applyPendingBadgeSettings(stateFromStoresArray, obj2);
      found = result.filter((owned) => owned.owned && !owned.hidden);
    }
    return found;
  }, items5);
  let someResult = !stateFromStores;
  if (stateFromStores) {
    someResult = stateFromStoresArray.some((owned) => owned.owned);
  }
  const tmpResult = navigation(sharedValue[11]);
  let result = tmpResult.canUsePremiumProfileCustomization(str);
  let tmp29 = !result && !tmp8;
  const tmp5Result13 = str(sharedValue[45]);
  const isTryItOutMobileRefreshEnabled = tmp5Result13.useIsTryItOutMobileRefreshEnabled("UserProfileEditForm");
  let tmp49Result11 = isTryItOutMobileRefreshEnabled && !result && !isTryItOut;
  let legacyUsername;
  if (tmp18Result != null) {
    legacyUsername = tmp18Result.getLegacyUsername();
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
  const obj12 = { user: str, displayProfile: tmp18Result, pendingThemeColors: tmp34, isPreview: isTryItOut };
  tmp34 = pendingThemeColors;
  const tmpResult11 = navigation(sharedValue[46]);
  if (isTryItOut) {
    tmp34 = tryItOutThemeColors;
  }
  ({ theme, primaryColor, secondaryColor } = tmpResult11(obj12));
  tmpResult11(obj12);
  const tmp5Result14 = str(sharedValue[47]);
  const userProfileColors = tmp5Result14.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  const avatarBackground = userProfileColors.avatarBackground;
  const bottom = insets.bottom;
  if (tmp29) {
    num = 0;
    if (!tmp49Result11) {
      num = stateFromStores;
    }
  }
  const sum = bottom + num;
  sum1 = sum + tmp(tmp2[31]).space.PX_16;
  const obj13 = { backgroundColor: avatarBackground };
  const items6 = [navigation];
  const callback = obj3.useCallback(() => {
    obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(unpackModuleId.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
    navigation.push(unpackModuleId.PROFILE_CUSTOMIZATION_TRY_IT_OUT);
  }, items6);
  const items7 = [sharedValue, sum1];
  const callback1 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const result = sharedValue.set(nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height - nativeEvent.contentOffset.y > ref.current + sum1);
  }, items7);
  let first;
  const callback2 = obj3.useCallback((nativeEvent) => {
    ref.current = nativeEvent.nativeEvent.layout.height;
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
      const intl = tmp5(tmp2[21]).intl;
      stringResult = intl.string(tmp5(tmp2[21]).t["84MExs"]);
    }
  }
  const field = isBadgeManagementEnabled.useField("scrollPosition");
  ref2 = tmp(tmp2[49])(ref, field);
  const obj14 = { theme, primaryColor, secondaryColor, children: closure_15(pendingBadgeHiddenBadges, obj15) };
  obj15 = { style: items8, children: items17 };
  items8 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj16 = { ref, onScroll: tmp53, scrollEventThrottle: num2, children: items9 };
  tmp53 = undefined;
  const ThemeContextProvider = tmp5(tmp2[51]).ThemeContextProvider;
  const tmp52 = pendingBadgeDisplayOrder;
  if (tmp49Result11) {
    tmp53 = callback1;
  }
  num2 = undefined;
  if (tmp49Result11) {
    num2 = 16;
  }
  items9 = [, ];
  const obj17 = { style: tmp4.bounceOffset };
  items9[0] = closure_14(pendingBadgeHiddenBadges, obj17);
  const obj18 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: items10 };
  items10 = [, ];
  const tmpResult12 = navigation(sharedValue[52]);
  items10[0] = closure_14(EditUserProfileBanner, { user: str, displayProfile: tmp18Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting });
  const obj19 = { style: items11, children: closure_14(navigation(sharedValue[53]), obj20) };
  items11 = [, , , ];
  ({ avatarBackground: arr12[0], avatarPosition: arr12[1] } = tmp3);
  items11[2] = tmp4.avatarContainer;
  items11[3] = obj13;
  obj20 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj13, isTryItOut, autoStartEditFlow: autoFocusElement === constants2.AVATAR };
  const items12 = [closure_14(pendingBadgeHiddenBadges, obj19), ];
  const obj21 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items13, children: items14 };
  items13 = [, , ];
  ({ profileContentWrapper: arr14[0], profileContent: arr14[1] } = tmp3);
  items13[2] = { paddingTop: 0, paddingBottom: sum1 };
  items14 = [, , , ];
  const obj22 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult13 = navigation(sharedValue[52]);
  items14[0] = closure_14(navigation(sharedValue[54]), obj22);
  const obj23 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: tmp58, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: !isTryItOut, pendingDisplayNameStyles };
  tmp58 = pendingPronouns;
  const tmpResult14 = navigation(sharedValue[55]);
  if (pendingPronouns == null) {
    tmp58 = str4;
  }
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  items14[1] = closure_14(tmpResult14, obj23);
  const obj24 = { style: items15, children: items16 };
  items15 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  let tmp49Result = null;
  if (null != stringResult) {
    tmp49Result = null;
    if ("" !== stringResult) {
      const obj25 = { style: tmp4.errorContainer, children: closure_14(str(sharedValue[50]).Text, obj26) };
      obj26 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      tmp49Result = closure_14(tmp51, obj25);
    }
  }
  items16 = [tmp49Result, , , , , , , , , , , , , ];
  const obj27 = {
    inputRef: ref1,
    label: intl2.string(str(sharedValue[21]).t["9AjdkD"]),
    errorMessage: first,
    value: pendingGlobalName,
    onFocus,
    onChange(globalName) {
      obj = str(sharedValue[19]);
      const obj2 = { globalName };
      return obj.setPendingChanges(obj2);
    },
    placeholder: str.toString(),
    maxLength: stateFromStoresArray,
    disabled: isSubmitting
  };
  const tmpResult15 = navigation(sharedValue[56]);
  intl2 = tmp5(tmp2[21]).intl;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  items16[1] = closure_14(tmpResult15, obj27);
  let tmp49Result7 = result || isTryItOut;
  if (tmp49Result7) {
    const obj28 = { user: str, isTryItOut };
    tmp49Result7 = closure_14(tmp(tmp2[57]), obj28);
  }
  items16[2] = tmp49Result7;
  const obj29 = {
    inputRef: ref2,
    label: intl3.string(str(sharedValue[21]).t["+T3RI/"]),
    errorMessage: first3,
    value: pendingPronouns,
    onFocus,
    onChange(pronouns) {
      obj = str(sharedValue[19]);
      const obj2 = { pronouns };
      return obj.setPendingChanges(obj2);
    },
    maxLength: sum1,
    spellCheck: false,
    autoCorrect: false,
    disabled: isSubmitting
  };
  const tmpResult16 = navigation(sharedValue[56]);
  intl3 = tmp5(tmp2[21]).intl;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  items16[3] = closure_14(tmpResult16, obj29);
  let tmp49Result8 = !isTryItOut;
  if (tmp49Result8) {
    const obj30 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants2.BADGES };
    tmp49Result8 = closure_14(tmp(tmp2[58]), obj30);
  }
  items16[4] = tmp49Result8;
  const obj31 = {
    inputRef: ref3,
    label: intl4.string(str(sharedValue[21]).t.ZzAR2Y),
    errorMessage: first4,
    value: pendingBio,
    onFocus,
    onChange(bio) {
      obj = str(sharedValue[19]);
      const obj2 = { bio };
      return obj.setPendingChanges(obj2);
    },
    autoFocus: autoFocusElement === constants2.BIO,
    maxLength: bioMaxLength,
    numberOfLines: 5,
    disabled: isSubmitting
  };
  const tmpResult17 = navigation(sharedValue[56]);
  intl4 = tmp5(tmp2[21]).intl;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  items16[5] = closure_14(tmpResult17, obj31);
  const obj32 = { user: str, onProfileThemeColorsChanged: fn, pendingAvatarSrc, pendingThemeColors, isTryItOut };
  const tmpResult18 = navigation(sharedValue[59]);
  if (isTryItOut) {
    fn = tmp5(tmp2[18]).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => {
      obj = str(sharedValue[19]);
      const obj2 = { themeColors };
      return obj.setPendingChanges(obj2);
    };
  }
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  items16[6] = closure_14(tmpResult18, obj32);
  const obj33 = { user: str, pendingAvatarDecoration, isTryItOut };
  const tmpResult19 = navigation(sharedValue[60]);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  items16[7] = closure_14(tmpResult19, obj33);
  const obj34 = { user: str, pendingProfileEffect, displayProfile: tmp18Result, isTryItOut };
  const tmpResult20 = navigation(sharedValue[61]);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp49Result9 = "profile" === entryPoint;
  items16[8] = closure_14(tmpResult20, obj34);
  items16[9] = closure_14(navigation(sharedValue[62]), { user: str, pendingProfileFrame, displayProfile: tmp18Result });
  items16[10] = closure_14(navigation(sharedValue[63]), { user: str, pendingNameplate });
  if (tmp49Result9) {
    if (!result) {
      result = isTryItOut;
    }
    tmp49Result9 = result;
  }
  if (tmp49Result9) {
    const obj35 = { isTryItOut };
    tmp49Result9 = closure_14(tmp(tmp2[64]), obj35);
  }
  items16[11] = tmp49Result9;
  const obj36 = {
    ref(arg0) {
      if (null != arg0) {
        ref2.current[constants.GUILD_TAG] = arg0;
      }
    },
    children: closure_14(navigation(sharedValue[65]), obj37)
  };
  obj37 = { user: str, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId };
  items16[12] = closure_14(pendingBadgeHiddenBadges, obj36);
  let tmp49Result10 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp49Result10) {
    const obj38 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp49Result10 = closure_14(tmp(tmp2[66]), obj38);
  }
  items16[13] = tmp49Result10;
  items14[2] = closure_15(pendingBadgeHiddenBadges, obj24);
  if (tmp49Result11) {
    const obj39 = { onLayout: callback2, onPreviewPremium: callback };
    tmp49Result11 = closure_14(tmp(tmp2[67]), obj39);
  }
  const obj40 = { children: items12 };
  items14[3] = tmp49Result11;
  items12[1] = closure_15(tmpResult13, obj21);
  items10[1] = closure_15(pendingBadgeHiddenBadges, obj40);
  items9[1] = closure_15(tmpResult12, obj18);
  items17 = [closure_15(tmp52, obj16), ];
  if (tmp29) {
    let tmp49Result12;
    if (isTryItOutMobileRefreshEnabled) {
      const obj41 = { isVisible: sharedValue, onPreviewPremium: callback };
      tmp49Result12 = closure_14(tmp(tmp2[68]), obj41);
    } else {
      const obj42 = { isTryItOut };
      tmp49Result12 = closure_14(tmp5(tmp2[69]).UserProfilePremiumUpsellCard, obj42);
    }
    tmp29 = tmp49Result12;
  }
  items17[1] = tmp29;
  return closure_14(ThemeContextProvider, obj14);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default tmp5;