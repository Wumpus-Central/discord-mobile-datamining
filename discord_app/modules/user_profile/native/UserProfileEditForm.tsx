// === Module 14815: UserProfileEditForm ===

// Module 14815 (UserProfileEditForm)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4769 */;
import Text_Text from "Text/Text" /* 5088 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8290 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8321 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 13364 */;
import _modDef14817 from "module_14817" /* 14817 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 14818 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14831 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8316 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 10577 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(6904).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1085);
({ DISPLAY_NAME_MAX_LENGTH: closure_9, PRONOUNS_MAX_LENGTH: c10 } = Constants);
let closure_11 = fn(1095).ProfileCustomizationScrollPositions;
const constants = fn(14816).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { assetOrigin: fn(6678).AssetOriginTypes.NEW_ASSET, imageUri: _modDef14817, staticImageUri: _modDef14817, description: "", originalAsset: "color" };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditUserProfileBanner(arg0) {
  obj = c;
  const cResult = obj.c(25);
  ({ user, displayProfile, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled } = arg0);
  if (isTryItOut) {
    if (tryItOutBanner == null) {
      tryItOutBanner = obj;
    }
    pendingBanner = tryItOutBanner;
  }
  if (cResult[0] !== user) {
    const canUseCollectiblesResult = PremiumUtilsDefault.canUseCollectibles(user);
    cResult[0] = user;
    cResult[1] = canUseCollectiblesResult;
    let tmp5 = canUseCollectiblesResult;
  } else {
    tmp5 = cResult[1];
  }
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  let banner;
  if (displayProfile != null) {
    banner = displayProfile.banner;
  }
  if (cResult[2] === pendingBanner) {
    if (cResult[3] === banner) {
      let tmp11 = cResult[4];
    }
    if (cResult[5] === analyticsLocations) {
      if (cResult[6] === isTryItOut) {
        if (cResult[7] === tmp11) {
          if (cResult[8] === user) {
            let tmp13 = cResult[9];
          }
          const tmp14 = useOpenChangeBannerActionSheetDefault(tmp13);
          let banner1;
          if (displayProfile != null) {
            banner1 = displayProfile.banner;
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.VqsHy0);
            cResult[10] = stringResult;
            let tmp17 = stringResult;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] === pendingBanner) {
            if (cResult[12] === tmp5) {
              if (cResult[13] === disabled) {
                if (cResult[14] === displayProfile) {
                  if (cResult[15] === tmp14) {
                    if (cResult[16] === pendingAccentColor) {
                      if (cResult[17] === pendingAvatarSrc) {
                        if (cResult[18] === pendingThemeColors) {
                          if (cResult[19] === num9) {
                            if (cResult[20] === user) {
                              let tmp19 = cResult[21];
                            }
                            if (cResult[22] === analyticsLocations) {
                              if (cResult[23] === tmp19) {
                                let tmp22 = cResult[24];
                              }
                              return tmp22;
                            }
                            const obj3 = { value: analyticsLocations, children: tmp19 };
                            const tmp24 = map1(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
                            cResult[22] = analyticsLocations;
                            cResult[23] = tmp19;
                            cResult[24] = tmp24;
                            tmp22 = tmp24;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj4 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, pendingAccentColor, bannerSafeArea: 12, showProfilePreviewButton: tmp5, onPressEdit: tmp14, editButtonAccessibilityLabel: tmp17, editDisabled: disabled };
          const tmp21 = map1(UserProfileEditBannerButtonDefault, obj4);
          cResult[11] = pendingBanner;
          cResult[12] = tmp5;
          cResult[13] = disabled;
          cResult[14] = displayProfile;
          cResult[15] = tmp14;
          cResult[16] = pendingAccentColor;
          cResult[17] = pendingAvatarSrc;
          cResult[18] = pendingThemeColors;
          cResult[19] = 12;
          cResult[20] = user;
          cResult[21] = tmp21;
          tmp19 = tmp21;
        }
      }
    }
    const obj5 = { user, analyticsLocations, isTryItOut, showRemoveBanner: tmp11 };
    cResult[5] = analyticsLocations;
    cResult[6] = isTryItOut;
    cResult[7] = tmp11;
    cResult[8] = user;
    cResult[9] = obj5;
    tmp13 = obj5;
  }
  const showRemoveBannerResult = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
  cResult[2] = pendingBanner;
  cResult[3] = banner;
  cResult[4] = showRemoveBannerResult;
  tmp11 = showRemoveBannerResult;
  const tmpResult = ProfileCustomizationUtils;
}) : (function EditUserProfileBanner(arg0) {
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
  obj4.children = map1(UserProfileEditBannerButtonDefault, obj5);
  return map1(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditForm(currentUser) {
  const cResult = currentUser(sharedValue[12]).c(146);
  currentUser = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut } = currentUser);
  require("UserProfileSharedStyles")();
  obj = currentUser(sharedValue[12]);
  importDefault = require("UserProfileEditFormSharedStyles")();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "user_profile_edit_form" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  const bioMaxLength = currentUser(sharedValue[22]).useBioMaxLength(first);
  require("useKeyboardIsOpen")();
  const obj4 = noop;
  const tmpResult = currentUser(sharedValue[22]);
  const ref = noop.useRef(null);
  sharedValue = currentUser(sharedValue[24]).useSharedValue(true);
  noop = noop.useRef(0);
  const tmpResult10 = currentUser(sharedValue[24]);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    let tmp15 = obj3;
  } else {
    tmp15 = cResult[1];
  }
  const insets = tmp4(tmp2[25])(tmp15).insets;
  const PX_16 = tmp4(tmp2[26]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { ref: ref1, offset: null };
    const obj6 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    obj5.offset = obj6;
    cResult[2] = obj5;
    let tmp16 = obj5;
  } else {
    tmp16 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { ref: ref2, offset: null };
    const obj8 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    obj7.offset = obj8;
    cResult[3] = obj7;
    let tmp17 = obj7;
  } else {
    tmp17 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp16, tmp17, ];
    const obj9 = { ref: ref3, offset: null };
    const obj10 = { type: "toValue", value: tmp4(tmp2[26]).space.PX_64 };
    obj9.offset = obj10;
    items[2] = obj9;
    cResult[4] = items;
    let tmp18 = items;
  } else {
    tmp18 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj11 = { insets, inputs: tmp18, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj11;
    let tmp19 = obj11;
  } else {
    tmp19 = cResult[6];
  }
  const onFocus = tmp4(tmp2[27])(tmp19).onFocus;
  ref1 = noop.useRef(null);
  ({ errors, isSubmitting, pendingAvatar, pendingAvatarDecoration, pendingBanner, pendingProfileEffect, pendingThemeColors, pendingAccentColor, tryItOutBanner, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges, pendingDisplayNameStyles, pendingProfileFrame, pendingNameplate, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = require("useUserProfileEditForm")());
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmp20 = require("useUserProfileEditForm")();
  const guildAutomodProfileQuarantineErrors = currentUser(sharedValue[30]).useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmpResult11 = currentUser(sharedValue[30]);
  if (str == null) {
    str = "";
  }
  const tmp4Result = require("useDisplayProfile");
  const tmp4ResultResult = require("useDisplayProfile")(str);
  const customStatusActivity = currentUser(sharedValue[32]).useCustomStatusActivity();
  currentUser(sharedValue[33]);
  if (cResult[7] === currentUser.id) {
    const tmp29 = tmp4(tmp2[35])(tmp4ResultResult, pendingLegacyUsernameDisabled);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { location: "UserProfileEditForm" };
      cResult[10] = obj12;
      let tmp30 = obj12;
    } else {
      tmp30 = cResult[10];
    }
    const isBadgeManagementEnabled = tmp(tmp2[36]).useIsBadgeManagementEnabled(tmp30);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[11] = items1;
      let tmp32 = items1;
    } else {
      tmp32 = cResult[11];
    }
    if (cResult[12] !== currentUser.id) {
      class Oe {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
      cResult[12] = currentUser.id;
      cResult[13] = Oe;
    } else {
      class Oe {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
    }
    const tmpResult14 = tmp(tmp2[36]);
    const stateFromStores = tmp(tmp2[37]).useStateFromStores(tmp32, Oe);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class Oe {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
      const items2 = [BadgeDirectoryStore];
      cResult[14] = items2;
      const tmp36 = items2;
    } else {
      class Oe {
        constructor() {
          return closure_6.hasCatalogFor(currentUser.id);
        }
      }
    }
    if (cResult[15] !== currentUser.id) {
      class Ie {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
      cResult[15] = currentUser.id;
      cResult[16] = Ie;
    } else {
      class Ie {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
    }
    const tmpResult15 = tmp(tmp2[37]);
    const stateFromStoresArray = tmp(tmp2[37]).useStateFromStoresArray(tmp36, Ie);
    if (cResult[17] === currentUser.id) {
      class Ie {
        constructor() {
          return closure_6.getBadges(currentUser.id);
        }
      }
      const effect = obj4.useEffect(tmp39, tmp40);
      if (cResult[21] === tmp29) {
        class Ie {
          constructor() {
            return closure_6.getBadges(currentUser.id);
          }
        }
      }
      const obj13 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const pendingProfileBadges = tmp(tmp2[39]).getPendingProfileBadges(tmp29, stateFromStoresArray, obj13);
      cResult[21] = tmp29;
      cResult[22] = stateFromStoresArray;
      cResult[23] = pendingBadgeDisplayOrder;
      cResult[24] = pendingBadgeHiddenBadges;
      cResult[25] = pendingProfileBadges;
      const tmpResult17 = tmp(tmp2[39]);
    }
    function _e() {
      if (isBadgeManagementEnabled) {
        if (!tmp2) {
          const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(currentUser.id);
        }
        tmp2 = BadgeDirectoryStore.hasCatalogFor(currentUser.id) && !BadgeDirectoryStore.isCatalogStaleFor(currentUser.id);
      }
    }
    const items3 = [currentUser.id, isBadgeManagementEnabled];
    cResult[17] = currentUser.id;
    cResult[18] = isBadgeManagementEnabled;
    cResult[19] = _e;
    cResult[20] = items3;
    tmp39 = _e;
    tmp40 = items3;
    const tmpResult16 = tmp(tmp2[37]);
  }
  const tmpResult12 = currentUser(sharedValue[32]);
  const pendingAvatarSrc = currentUser(sharedValue[34]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  cResult[7] = currentUser.id;
  cResult[8] = pendingAvatar;
  cResult[9] = pendingAvatarSrc;
  const obj14 = { userId: currentUser.id, image: pendingAvatar };
  const tmpResult18 = currentUser(sharedValue[34]);
}) : (function UserProfileEditForm(currentUser) {
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let sharedValue;
  dependencyMap = undefined;
  pendingBadgeDisplayOrder = undefined;
  closure_5 = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  let sum1;
  maxLength = undefined;
  let tmp = sharedValue;
  obj = dependencyMap;
  let tmp2 = sharedValue(8367)();
  const tmp3 = sharedValue(14833)();
  const bioMaxLength = currentUser.currentUser(8286).useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = currentUser.currentUser(8286);
  const ref = pendingBadgeDisplayOrder.useRef(null);
  const tmp6 = sharedValue(6304)();
  sharedValue = currentUser.currentUser(4850).useSharedValue(true);
  dependencyMap = pendingBadgeDisplayOrder.useRef(0);
  const ref1 = pendingBadgeDisplayOrder.useRef(null);
  let ref2 = pendingBadgeDisplayOrder.useRef(null);
  const ref3 = pendingBadgeDisplayOrder.useRef(null);
  const insets = sharedValue(6664)({ includeKeyboardHeight: true }).insets;
  const PX_16 = sharedValue(587).space.PX_16;
  const obj5 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj8 = { ref: ref3, offset: null };
  const obj9 = { type: "toValue", value: null };
  const obj4 = currentUser.currentUser(4850);
  const obj6 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj7 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  obj9.value = sharedValue(587).space.PX_64;
  obj8.offset = obj9;
  items[2] = obj8;
  obj5.inputs = items;
  obj5.scrollViewRef = ref;
  const onFocus = sharedValue(10524)(obj5).onFocus;
  const tmp13 = sharedValue(14834)();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp13);
  const pendingBadgeHiddenBadges = tmp13.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp13);
  sharedValue(10089)();
  const tmp12 = sharedValue(10524);
  const guildAutomodProfileQuarantineErrors = currentUser.currentUser(11457).useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj10 = currentUser.currentUser(11457);
  if (str2 == null) {
    str2 = "";
  }
  const tmp16Result = sharedValue(8310)(str2);
  const tmp16 = sharedValue(8310);
  const customStatusActivity = currentUser.currentUser(10512).useCustomStatusActivity();
  const tmp4Result = currentUser.currentUser(10512);
  const tmp4Result8 = currentUser.currentUser(11639);
  const pendingAvatarSrc = currentUser.currentUser(8293).getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp19 = tmp(8368)(tmp16Result, pendingLegacyUsernameDisabled);
  closure_5 = tmp19;
  const obj11 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp4Result9 = currentUser.currentUser(8293);
  isBadgeManagementEnabled = currentUser.currentUser(10571).useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result10 = currentUser.currentUser(10571);
  const items1 = [isBadgeManagementEnabled];
  stateFromStores = currentUser.currentUser(504).useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp4Result11 = currentUser.currentUser(504);
  const items2 = [isBadgeManagementEnabled];
  stateFromStoresArray = currentUser.currentUser(504).useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
  const items3 = [currentUser.currentUser.id, isBadgeManagementEnabled];
  const effect = obj3.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(str.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
    }
  }, items3);
  const items4 = [tmp19, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
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
  const tmp4Result12 = currentUser.currentUser(504);
  let result = tmp(4769).canUsePremiumProfileCustomization(str);
  let tmp27 = !result;
  if (!result) {
    tmp27 = !tmp6;
  }
  const tmpResult = tmp(4769);
  const enabled = currentUser.currentUser(14837).useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp45Result11 = enabled;
  if (enabled) {
    tmp45Result11 = !result;
  }
  if (tmp45Result11) {
    tmp45Result11 = !isTryItOut;
  }
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
  const obj12 = { user: currentUser.currentUser, displayProfile: tmp16Result, pendingThemeColors: null, isPreview: null };
  let tmp31 = pendingThemeColors;
  const tmp4Result13 = currentUser.currentUser(14837);
  if (isTryItOut) {
    tmp31 = tryItOutThemeColors;
  }
  obj12.pendingThemeColors = tmp31;
  obj12.isPreview = isTryItOut;
  const tmpResult11 = tmp(8353);
  ({ theme, primaryColor, secondaryColor } = tmp(8353)(obj12));
  const tmpResult1Result = tmp(8353)(obj12);
  const userProfileColors = currentUser.currentUser(8364).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (tmp27) {
    num = 0;
    if (!tmp45Result11) {
      num = stateFromStoresArray;
    }
  }
  const sum = insets.bottom + num;
  sum1 = sum + tmp(587).space.PX_16;
  const obj13 = { backgroundColor: userProfileColors.avatarBackground };
  maxLength = tmp(14838)(str.id);
  const items6 = [sharedValue, sum1];
  const callback = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    const result = sharedValue.set(nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height - nativeEvent.contentOffset.y > ref.current + sum1);
  }, items6);
  let first;
  const callback1 = obj3.useCallback((nativeEvent) => {
    closure_2.current = nativeEvent.nativeEvent.layout.height;
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
      const intl = tmp4(1126).intl;
      stringResult = intl.string(tmp4(1126).t["84MExs"]);
    }
  }
  const field = stateFromStores.useField("scrollPosition");
  ref2 = tmp(14839)(ref, field);
  const obj14 = { theme, primaryColor, secondaryColor, children: null };
  const obj15 = { style: null, children: null };
  const items7 = [tmp3.container, { backgroundColor: gradientSecondaryBackground }];
  obj15.style = items7;
  const obj16 = { ref, onScroll: null, scrollEventThrottle: null, children: null };
  let tmp49;
  if (tmp45Result11) {
    tmp49 = callback;
  }
  obj16.onScroll = tmp49;
  let num2;
  if (tmp45Result11) {
    num2 = 16;
  }
  obj16.scrollEventThrottle = num2;
  const items8 = [closure_13(closure_5, { style: tmp3.bounceOffset }), ];
  const obj18 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj17 = { style: tmp3.bounceOffset };
  const tmp48 = pendingBadgeHiddenBadges;
  const tmp4Result14 = currentUser.currentUser(8364);
  const items9 = [closure_13(closure_16, { user: currentUser.currentUser, displayProfile: tmp16Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting }), ];
  const obj19 = { style: null, children: closure_13(tmp(14840), { user: currentUser.currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj13, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR }) };
  const items10 = [, , , ];
  ({ avatarBackground: arr11[0], avatarPosition: arr11[1] } = tmp2);
  items10[2] = tmp3.avatarContainer;
  items10[3] = obj13;
  obj19.style = items10;
  const items11 = [closure_13(closure_5, obj19), ];
  const obj21 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items12 = [, , ];
  ({ profileContentWrapper: arr13[0], profileContent: arr13[1] } = tmp2);
  items12[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj21.containerStyle = items12;
  const obj20 = { user: currentUser.currentUser, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj13, isTryItOut, autoStartEditFlow: autoFocusElement === constants.AVATAR };
  const tmpResult12 = tmp(10530);
  const items13 = [closure_13(tmp(10513), { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp2.customStatusBubble, emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble, editEnabled: true }), , , ];
  const obj23 = { user: currentUser.currentUser, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: null, pendingDisplayNameStyles: null };
  let tmp54 = pendingPronouns;
  const obj22 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp2.customStatusBubble, emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult13 = tmp(10530);
  if (pendingPronouns == null) {
    tmp54 = str4;
  }
  obj23.pronouns = tmp54;
  obj23.badgeContainerBackground = containerBackground;
  obj23.canOpenBadgeDirectory = !isTryItOut;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj23.pendingDisplayNameStyles = pendingDisplayNameStyles;
  items13[1] = closure_13(tmp(10531), obj23);
  const obj24 = { style: null, children: null };
  const items14 = [tmp3.formContainer, { backgroundColor: containerBackground }];
  obj24.style = items14;
  let tmp45Result = null;
  if (null != stringResult) {
    tmp45Result = null;
    if ("" !== stringResult) {
      const obj25 = { style: tmp3.errorContainer, children: null };
      const obj26 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj25.children = closure_13(tmp4(5088).Text, obj26);
      tmp45Result = closure_13(tmp47, obj25);
    }
  }
  const items15 = [tmp45Result, , , , , , , , , , , , , ];
  const obj27 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
  const tmpResult14 = tmp(10531);
  const intl2 = tmp4(1126).intl;
  obj27.label = intl2.string(currentUser.currentUser(1126).t["9AjdkD"]);
  obj27.errorMessage = first;
  if (pendingGlobalName == null) {
    pendingGlobalName = str3;
  }
  obj27.value = pendingGlobalName;
  obj27.onFocus = onFocus;
  obj27.onChange = function onChange(globalName) {
    return str(ref[52]).setPendingChanges({ globalName });
  };
  obj27.placeholder = currentUser.currentUser.toString();
  obj27.maxLength = sum1;
  obj27.disabled = isSubmitting;
  items15[1] = closure_13(tmp(14845), obj27);
  let tmp45Result7 = result;
  if (!result) {
    tmp45Result7 = isTryItOut;
  }
  if (tmp45Result7) {
    const obj28 = { user: str, isTryItOut };
    tmp45Result7 = closure_13(tmp(14846), obj28);
  }
  items15[2] = tmp45Result7;
  const obj29 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
  const tmpResult15 = tmp(14845);
  const intl3 = tmp4(1126).intl;
  obj29.label = intl3.string(currentUser.currentUser(1126).t["+T3RI/"]);
  obj29.errorMessage = first3;
  if (pendingPronouns == null) {
    pendingPronouns = str4;
  }
  obj29.value = pendingPronouns;
  obj29.onFocus = onFocus;
  obj29.onChange = function onChange(pronouns) {
    return str(ref[52]).setPendingChanges({ pronouns });
  };
  obj29.maxLength = maxLength;
  obj29.disabled = isSubmitting;
  items15[3] = closure_13(tmp(14845), obj29);
  let tmp45Result8 = !isTryItOut;
  if (!isTryItOut) {
    const obj30 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants.BADGES };
    tmp45Result8 = closure_13(tmp(14852), obj30);
  }
  items15[4] = tmp45Result8;
  const obj31 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
  const tmpResult16 = tmp(14845);
  const intl4 = tmp4(1126).intl;
  obj31.label = intl4.string(currentUser.currentUser(1126).t.ZzAR2Y);
  obj31.errorMessage = first4;
  if (pendingBio == null) {
    pendingBio = str5;
  }
  obj31.value = pendingBio;
  obj31.onFocus = onFocus;
  obj31.onChange = function onChange(bio) {
    return str(ref[52]).setPendingChanges({ bio });
  };
  obj31.autoFocus = autoFocusElement === constants.BIO;
  obj31.maxLength = bioMaxLength;
  obj31.disabled = isSubmitting;
  items15[5] = closure_13(tmp(14845), obj31);
  const obj32 = { user: currentUser.currentUser, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
  const tmpResult17 = tmp(14845);
  if (isTryItOut) {
    let fn = tmp4(8291).setTryItOutThemeColors;
  } else {
    fn = (themeColors) => str(ref[52]).setPendingChanges({ themeColors });
  }
  obj32.onProfileThemeColorsChanged = fn;
  obj32.pendingAvatarSrc = pendingAvatarSrc;
  if (isTryItOut) {
    pendingThemeColors = tryItOutThemeColors;
  }
  obj32.pendingThemeColors = pendingThemeColors;
  obj32.isTryItOut = isTryItOut;
  items15[6] = closure_13(tmp(14858), obj32);
  const obj33 = { user: currentUser.currentUser, pendingAvatarDecoration: null, isTryItOut: null };
  const tmpResult18 = tmp(14858);
  if (isTryItOut) {
    pendingAvatarDecoration = tryItOutAvatarDecoration;
  }
  obj33.pendingAvatarDecoration = pendingAvatarDecoration;
  obj33.isTryItOut = isTryItOut;
  items15[7] = closure_13(tmp(14862), obj33);
  const obj34 = { user: currentUser.currentUser, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
  const tmpResult19 = tmp(14862);
  if (isTryItOut) {
    pendingProfileEffect = tryItOutProfileEffect;
  }
  let tmp45Result9 = "profile" === tmp4Result8.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
  obj34.pendingProfileEffect = pendingProfileEffect;
  obj34.displayProfile = tmp16Result;
  obj34.isTryItOut = isTryItOut;
  items15[8] = closure_13(tmp(14863), obj34);
  items15[9] = closure_13(tmp(14867), { user: currentUser.currentUser, pendingProfileFrame, displayProfile: tmp16Result });
  items15[10] = closure_13(tmp(14871), { user: currentUser.currentUser, pendingNameplate });
  if (tmp45Result9) {
    if (!result) {
      result = isTryItOut;
    }
    tmp45Result9 = result;
  }
  if (tmp45Result9) {
    const obj35 = { isTryItOut };
    tmp45Result9 = closure_13(tmp(14876), obj35);
  }
  items15[11] = tmp45Result9;
  const obj36 = {
    ref(arg0) {
      if (null != arg0) {
        ref2.current[ref2.GUILD_TAG] = arg0;
      }
    },
    children: closure_13(tmp(14877), { user: currentUser.currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId })
  };
  items15[12] = closure_13(closure_5, obj36);
  let tmp45Result10 = null != legacyUsername && !isBadgeManagementEnabled;
  if (tmp45Result10) {
    const obj38 = { legacyUsername, pendingLegacyUsernameDisabled };
    tmp45Result10 = closure_13(tmp(14883), obj38);
  }
  items15[13] = tmp45Result10;
  obj24.children = items15;
  items13[2] = closure_14(closure_5, obj24);
  if (tmp45Result11) {
    const obj39 = {
      currentUser: str,
      onLayout: callback1,
      onPreviewPremium() {
          return closure_10();
        }
    };
    tmp45Result11 = closure_13(tmp(14884), obj39);
  }
  const obj40 = { children: null };
  items13[3] = tmp45Result11;
  obj21.children = items13;
  items11[1] = closure_14(tmpResult13, obj21);
  obj40.children = items11;
  items9[1] = closure_14(closure_5, obj40);
  obj18.children = items9;
  items8[1] = closure_14(tmpResult12, obj18);
  obj16.children = items8;
  const items16 = [closure_14(tmp48, obj16), ];
  if (!tmp27) {
    items16[1] = tmp27;
    obj15.children = items16;
    obj14.children = closure_14(tmp47, obj15);
    return closure_13(tmp4(4827).ThemeContextProvider, obj14);
  } else if (enabled) {
    tmp = tmp(14918);
    obj = {
      isVisible: sharedValue,
      onPreviewPremium() {
          return closure_10();
        }
    };
    let tmp45Result12 = closure_13(tmp, obj);
  } else {
    const obj41 = { isTryItOut };
    tmp45Result12 = closure_13(tmp4(14919).UserProfilePremiumUpsellCard, obj41);
  }
  const obj37 = { user: currentUser.currentUser, disabled: isSubmitting, tagStyle: { backgroundColor: containerBackground }, pendingPrimaryGuildId };
  const tmpResult20 = tmp(14863);
});