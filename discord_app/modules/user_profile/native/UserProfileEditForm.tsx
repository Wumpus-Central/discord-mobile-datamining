// === Module 15830: UserProfileEditForm ===

// Module 15830 (UserProfileEditForm)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2053 */;
import Text_Text from "Text/Text" /* 5234 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7253 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7278 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8655 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8686 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14403 */;
import _modDef15832 from "module_15832" /* 15832 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 15833 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 15846 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 15848 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8681 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11121 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
let closure_3 = ["isTryItOut"];
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7304).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1087);
({ DISPLAY_NAME_MAX_LENGTH: closure_11, PRONOUNS_MAX_LENGTH: closure_12 } = Constants);
const HexagonCampaignConstants = fn(4996);
({ HexagonCampaignPerk: map1, HexagonCampaignPerkAvailability: closure_14 } = HexagonCampaignConstants);
let closure_15 = fn(1097).ProfileCustomizationScrollPositions;
const constants3 = fn(15831).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
let obj = { assetOrigin: fn(7086).AssetOriginTypes.NEW_ASSET, imageUri: _modDef15832, staticImageUri: _modDef15832, description: "", originalAsset: "unicodeVersion" };
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditUserProfileBanner(arg0) {
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
                            const tmp24 = constants(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
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
          const tmp21 = constants(UserProfileEditBannerButtonDefault, obj4);
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
  obj4.children = constants(UserProfileEditBannerButtonDefault, obj5);
  return constants(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function MainUserProfileEditForm(arg0) {
  const cResult = c.c(3);
  const isMobileWidgetEditingEnabled = MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  if (cResult[0] === isMobileWidgetEditingEnabled) {
    if (cResult[1] === arg0) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.isWidgetEditingEnabled = isMobileWidgetEditingEnabled;
  const tmp5 = constants(closure_25, obj3);
  cResult[0] = isMobileWidgetEditingEnabled;
  cResult[1] = arg0;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : (function MainUserProfileEditForm(arg0) {
  const obj2 = {};
  const isMobileWidgetEditingEnabled = MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  obj2.isWidgetEditingEnabled = isMobileWidgetEditingEnabled;
  return constants(closure_25, obj2);
});
fn(558);
let closure_23 = { code: "function UserProfileEditFormTsx1(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
const __initData = { code: "function UserProfileEditFormTsx2(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormContent(currentUser) {
  const cResult = currentUser(sharedValue[14]).c(191);
  currentUser = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut, isWidgetEditingEnabled } = currentUser);
  require("UserProfileSharedStyles")();
  obj = currentUser(sharedValue[14]);
  importDefault = require("UserProfileEditFormSharedStyles")();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "user_profile_edit_form" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  const bioMaxLength = currentUser(sharedValue[25]).useBioMaxLength(first);
  require("useKeyboardIsOpen")();
  const tmpResult = currentUser(sharedValue[25]);
  const ref = noop.useRef(null);
  sharedValue = currentUser(sharedValue[27]).useSharedValue(0);
  const tmpResult11 = currentUser(sharedValue[27]);
  const sharedValue1 = currentUser(sharedValue[27]).useSharedValue(false);
  const tmpResult12 = currentUser(sharedValue[27]);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    let tmp16 = obj3;
  } else {
    tmp16 = cResult[1];
  }
  const insets = tmp4(tmp2[28])(tmp16).insets;
  const PX_16 = tmp4(tmp2[29]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { ref: ref1, offset: null };
    const obj6 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    obj5.offset = obj6;
    cResult[2] = obj5;
    let tmp17 = obj5;
  } else {
    tmp17 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { ref: ref2, offset: null };
    const obj8 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    obj7.offset = obj8;
    cResult[3] = obj7;
    let tmp18 = obj7;
  } else {
    tmp18 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp17, tmp18, ];
    const obj9 = { ref: ref3, offset: null };
    const obj10 = { type: "toValue", value: tmp4(tmp2[29]).space.PX_64 };
    obj9.offset = obj10;
    items[2] = obj9;
    cResult[4] = items;
    let tmp19 = items;
  } else {
    tmp19 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj11 = { insets, inputs: tmp19, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj11;
    let tmp20 = obj11;
  } else {
    tmp20 = cResult[6];
  }
  const onFocus = tmp4(tmp2[30])(tmp20).onFocus;
  ref1 = noop.useRef(null);
  ({ errors, isSubmitting, pendingAvatar, pendingAvatarDecoration, pendingBanner, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingThemeColors, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges, pendingPrimaryGuildId, pendingDisplayNameStyles, tryItOutDisplayNameStyles } = require("useUserProfileEditForm")());
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmp21 = require("useUserProfileEditForm")();
  const guildAutomodProfileQuarantineErrors = currentUser(sharedValue[33]).useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmpResult13 = currentUser(sharedValue[33]);
  if (str == null) {
    str = "";
  }
  const tmp4Result = require("useDisplayProfile");
  const tmp4ResultResult = require("useDisplayProfile")(str);
  const customStatusActivity = currentUser(sharedValue[35]).useCustomStatusActivity();
  currentUser(sharedValue[36]);
  if (cResult[7] === currentUser.id) {
    const tmp30 = tmp4(tmp2[38])(tmp4ResultResult, pendingLegacyUsernameDisabled);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { location: "UserProfileEditForm" };
      cResult[10] = obj12;
      let tmp31 = obj12;
    } else {
      tmp31 = cResult[10];
    }
    const isBadgeManagementEnabled = tmp(tmp2[39]).useIsBadgeManagementEnabled(tmp31);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[11] = items1;
      let tmp33 = items1;
    } else {
      tmp33 = cResult[11];
    }
    if (cResult[12] !== currentUser.id) {
      class Fe {
        constructor() {
          return closure_8.hasCatalogFor(currentUser.id);
        }
      }
      cResult[12] = currentUser.id;
      cResult[13] = Fe;
    } else {
      class Fe {
        constructor() {
          return closure_8.hasCatalogFor(currentUser.id);
        }
      }
    }
    const tmpResult16 = tmp(tmp2[39]);
    const stateFromStores = tmp(tmp2[40]).useStateFromStores(tmp33, Fe);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class Fe {
        constructor() {
          return closure_8.hasCatalogFor(currentUser.id);
        }
      }
      const items2 = [BadgeDirectoryStore];
      cResult[14] = items2;
      const tmp37 = items2;
    } else {
      class Fe {
        constructor() {
          return closure_8.hasCatalogFor(currentUser.id);
        }
      }
    }
    if (cResult[15] !== currentUser.id) {
      class De {
        constructor() {
          return closure_8.getBadges(currentUser.id);
        }
      }
      cResult[15] = currentUser.id;
      cResult[16] = De;
    } else {
      class De {
        constructor() {
          return closure_8.getBadges(currentUser.id);
        }
      }
    }
    const tmpResult17 = tmp(tmp2[40]);
    const stateFromStoresArray = tmp(tmp2[40]).useStateFromStoresArray(tmp37, De);
    if (cResult[17] === currentUser.id) {
      class De {
        constructor() {
          return closure_8.getBadges(currentUser.id);
        }
      }
      const effect = noop.useEffect(Re, tmp41);
      if (cResult[21] === tmp30) {
        class De {
          constructor() {
            return closure_8.getBadges(currentUser.id);
          }
        }
      }
      const obj13 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const pendingProfileBadges = tmp(tmp2[42]).getPendingProfileBadges(tmp30, stateFromStoresArray, obj13);
      cResult[21] = tmp30;
      cResult[22] = stateFromStoresArray;
      cResult[23] = pendingBadgeDisplayOrder;
      cResult[24] = pendingBadgeHiddenBadges;
      cResult[25] = pendingProfileBadges;
      const tmpResult19 = tmp(tmp2[42]);
    }
    class Re {
      constructor() {
        if (closure_4) {
          obj = closure_8;
          tmp = currentUser;
          tmp2 = closure_8.hasCatalogFor(currentUser.id) && !obj.isCatalogStaleFor(tmp.id);
          if (!tmp2) {
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj2 = closure_0(closure_2[41]);
            badgeDirectory = obj2.fetchBadgeDirectory(tmp.id);
          }
        }
        return;
      }
    }
    const items3 = [currentUser.id, isBadgeManagementEnabled];
    cResult[17] = currentUser.id;
    cResult[18] = isBadgeManagementEnabled;
    cResult[19] = Re;
    cResult[20] = items3;
    tmp41 = items3;
    const tmpResult18 = tmp(tmp2[40]);
  }
  const tmpResult14 = currentUser(sharedValue[35]);
  const pendingAvatarSrc = currentUser(sharedValue[37]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  cResult[7] = currentUser.id;
  cResult[8] = pendingAvatar;
  cResult[9] = pendingAvatarSrc;
  const obj14 = { userId: currentUser.id, image: pendingAvatar };
  const tmpResult20 = currentUser(sharedValue[37]);
}) : (function UserProfileEditFormContent(currentUser) {
  ({ autoFocusElement, isTryItOut } = currentUser);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  let flag = currentUser.isWidgetEditingEnabled;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  let sharedValue1;
  pendingBadgeDisplayOrder = undefined;
  noop = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  ProfileCustomizationNavigationStore = undefined;
  let isScrolledAboveTryItOutSection;
  maxLength = undefined;
  let tmp = sharedValue;
  obj = sharedValue1;
  let tmp2 = sharedValue(sharedValue1[23])();
  const tmp3 = sharedValue(sharedValue1[24])();
  const bioMaxLength = currentUser.currentUser(sharedValue1[25]).useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = currentUser.currentUser(sharedValue1[25]);
  const ref = noop.useRef(null);
  const tmp6 = sharedValue(sharedValue1[26])();
  sharedValue = currentUser.currentUser(sharedValue1[27]).useSharedValue(0);
  const obj4 = currentUser.currentUser(sharedValue1[27]);
  sharedValue1 = currentUser.currentUser(sharedValue1[27]).useSharedValue(false);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = sharedValue(sharedValue1[28])({ includeKeyboardHeight: true }).insets;
  const PX_16 = sharedValue(sharedValue1[29]).space.PX_16;
  const obj6 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj9 = { ref: ref3, offset: null };
  const obj10 = { type: "toValue", value: null };
  const obj5 = currentUser.currentUser(sharedValue1[27]);
  const obj7 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj8 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  obj10.value = sharedValue(sharedValue1[29]).space.PX_64;
  obj9.offset = obj10;
  items[2] = obj9;
  obj6.inputs = items;
  obj6.scrollViewRef = ref;
  const onFocus = sharedValue(sharedValue1[30])(obj6).onFocus;
  const tmp14 = sharedValue(sharedValue1[31])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp14);
  const pendingBadgeHiddenBadges = tmp14.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp14);
  sharedValue(sharedValue1[32])();
  const tmp13 = sharedValue(sharedValue1[30]);
  const guildAutomodProfileQuarantineErrors = currentUser.currentUser(sharedValue1[33]).useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj11 = currentUser.currentUser(sharedValue1[33]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp17Result = sharedValue(sharedValue1[34])(str2);
  const tmp17 = sharedValue(sharedValue1[34]);
  const customStatusActivity = currentUser.currentUser(obj[35]).useCustomStatusActivity();
  const tmp4Result = currentUser.currentUser(obj[35]);
  const tmp4Result10 = currentUser.currentUser(obj[36]);
  const pendingAvatarSrc = currentUser.currentUser(obj[37]).getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp20 = tmp(obj[38])(tmp17Result, pendingLegacyUsernameDisabled);
  noop = tmp20;
  const obj12 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp4Result11 = currentUser.currentUser(obj[37]);
  isBadgeManagementEnabled = currentUser.currentUser(obj[39]).useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result12 = currentUser.currentUser(obj[39]);
  const items1 = [stateFromStoresArray];
  stateFromStores = currentUser.currentUser(obj[40]).useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp4Result13 = currentUser.currentUser(obj[40]);
  const items2 = [stateFromStoresArray];
  stateFromStoresArray = currentUser.currentUser(obj[40]).useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
  const items3 = [currentUser.currentUser.id, isBadgeManagementEnabled];
  const effect = obj3.useEffect(() => {
    if (isBadgeManagementEnabled) {
      if (!tmp2) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(str.id);
      }
      tmp2 = BadgeDirectoryStore.hasCatalogFor(str.id) && !BadgeDirectoryStore.isCatalogStaleFor(str.id);
    }
  }, items3);
  const items4 = [tmp20, stateFromStoresArray, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges];
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
  const tmp4Result14 = currentUser.currentUser(obj[40]);
  let result = tmp(obj[15]).canUsePremiumProfileCustomization(str);
  const tmpResult = tmp(obj[15]);
  const hexagonCampaignPerkAvailability = currentUser.currentUser(obj[43]).useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp29 = !result;
  if (!result) {
    tmp29 = !tmp6;
  }
  const tmp4Result15 = currentUser.currentUser(obj[43]);
  const enabled = currentUser.currentUser(obj[44]).useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
  let tmp56Result10 = enabled;
  if (enabled) {
    tmp56Result10 = !result;
  }
  if (tmp56Result10) {
    tmp56Result10 = !isTryItOut;
  }
  if (tmp17Result != null) {
    const legacyUsername = tmp17Result.getLegacyUsername();
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
  let tmp33 = pendingThemeColors;
  const tmp4Result16 = currentUser.currentUser(obj[44]);
  if (isTryItOut) {
    tmp33 = tryItOutThemeColors;
  }
  obj13.pendingThemeColors = tmp33;
  obj13.isPreview = isTryItOut;
  const tmpResult11 = tmp(obj[45]);
  ({ theme, primaryColor, secondaryColor } = tmp(obj[45])(obj13));
  const tmpResult1Result = tmp(obj[45])(obj13);
  const userProfileColors = currentUser.currentUser(obj[46]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  if (tmp29) {
    num = 0;
    if (!tmp56Result10) {
      num = isScrolledAboveTryItOutSection;
    }
  }
  const sum = insets.bottom + num;
  const sum1 = sum + tmp(obj[29]).space.PX_16;
  const obj14 = { backgroundColor: userProfileColors.avatarBackground };
  const tmp39 = tmp(obj[47])(sharedValue, sum1);
  ProfileCustomizationNavigationStore = tmp39;
  isScrolledAboveTryItOutSection = tmp39.isScrolledAboveTryItOutSection;
  const tmp4Result17 = currentUser.currentUser(obj[46]);
  function he() {
    value = isScrolledAboveTryItOutSection.get();
    if (value) {
      value = !sharedValue1.get();
    }
    return value;
  }
  he.__closure = { isScrolledAboveTryItOutSection, isBoardTabOnScreen: sharedValue1 };
  he.__workletHash = 11263005200863;
  he.__initData = __initData;
  const items6 = [sharedValue, tmp39];
  const derivedValue = currentUser.currentUser(obj[27]).useDerivedValue(he);
  let tmp42 = tmp56Result10;
  const callback = obj3.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    closure_9.onScroll(nativeEvent.nativeEvent);
  }, items6);
  if (!tmp56Result10) {
    tmp42 = flag;
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
      const intl = tmp4(obj[20]).intl;
      stringResult = intl.string(tmp4(obj[20]).t["84MExs"]);
    }
  }
  const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
  maxLength = tmp(obj[48])(ref, field);
  let tmp50 = tmp56Result10;
  if (tmp56Result10) {
    tmp50 = flag;
  }
  const obj15 = { style: null, children: null };
  const items7 = [tmp3.formContainer, { backgroundColor: containerBackground }];
  obj15.style = items7;
  let tmp54 = null;
  if (null != stringResult) {
    tmp54 = null;
    if ("" !== stringResult) {
      const obj16 = { style: tmp3.errorContainer, children: null };
      const obj17 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
      obj16.children = closure_17(tmp4(obj[49]).Text, obj17);
      tmp54 = closure_17(tmp53, obj16);
    }
  }
  const items8 = [tmp54, , , , , , , , , , , , , ];
  const obj18 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
  const tmp4Result18 = currentUser.currentUser(obj[27]);
  const intl2 = tmp4(obj[20]).intl;
  obj18.label = intl2.string(currentUser.currentUser(obj[20]).t["9AjdkD"]);
  obj18.errorMessage = first;
  let tmp58 = pendingGlobalName;
  if (pendingGlobalName == null) {
    tmp58 = str3;
  }
  obj18.value = tmp58;
  obj18.onFocus = onFocus;
  obj18.onChange = function onChange(globalName) {
    return str(sharedValue1[51]).setPendingChanges({ globalName });
  };
  obj18.placeholder = currentUser.currentUser.toString();
  obj18.maxLength = maxLength;
  obj18.disabled = isSubmitting;
  items8[1] = closure_17(tmp(obj[50]), obj18);
  if (!result) {
    if (!isTryItOut) {
      let tmp56Result = null;
      if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
        const obj19 = { user: str, availability: hexagonCampaignPerkAvailability, disabled: isSubmitting };
        tmp56Result = closure_17(tmp(obj[53]), obj19);
      }
    }
    items8[2] = tmp56Result;
    const obj20 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
    const intl3 = tmp4(obj[20]).intl;
    obj20.label = intl3.string(tmp4(obj[20]).t["+T3RI/"]);
    obj20.errorMessage = first3;
    let tmp62 = pendingPronouns;
    if (pendingPronouns == null) {
      tmp62 = str4;
    }
    obj20.value = tmp62;
    obj20.onFocus = onFocus;
    obj20.onChange = function onChange(pronouns) {
      return str(sharedValue1[51]).setPendingChanges({ pronouns });
    };
    obj20.maxLength = maxLength2;
    obj20.disabled = isSubmitting;
    items8[3] = closure_17(tmp(obj[50]), obj20);
    let tmp56Result7 = !isTryItOut;
    if (!isTryItOut) {
      const obj21 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants3.BADGES };
      tmp56Result7 = closure_17(tmp(obj[54]), obj21);
    }
    items8[4] = tmp56Result7;
    const obj22 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
    const tmpResult13 = tmp(obj[50]);
    const intl4 = tmp4(obj[20]).intl;
    obj22.label = intl4.string(tmp4(obj[20]).t.ZzAR2Y);
    obj22.errorMessage = first4;
    if (pendingBio == null) {
      pendingBio = str5;
    }
    obj22.value = pendingBio;
    obj22.onFocus = onFocus;
    obj22.onChange = function onChange(bio) {
      return str(sharedValue1[51]).setPendingChanges({ bio });
    };
    obj22.autoFocus = autoFocusElement === constants3.BIO;
    obj22.maxLength = bioMaxLength;
    obj22.disabled = isSubmitting;
    items8[5] = closure_17(tmp(obj[50]), obj22);
    const obj23 = { user: str, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
    const tmpResult14 = tmp(obj[50]);
    if (isTryItOut) {
      let fn = tmp4(obj[56]).setTryItOutThemeColors;
    } else {
      fn = (themeColors) => str(sharedValue1[51]).setPendingChanges({ themeColors });
    }
    obj23.onProfileThemeColorsChanged = fn;
    obj23.pendingAvatarSrc = pendingAvatarSrc;
    let tmp69 = pendingThemeColors;
    if (isTryItOut) {
      tmp69 = tryItOutThemeColors;
    }
    obj23.pendingThemeColors = tmp69;
    obj23.isTryItOut = isTryItOut;
    items8[6] = closure_17(tmp(obj[55]), obj23);
    const obj24 = { user: str, pendingAvatarDecoration: null, isTryItOut: null };
    const tmpResult15 = tmp(obj[55]);
    if (isTryItOut) {
      pendingAvatarDecoration = tryItOutAvatarDecoration;
    }
    obj24.pendingAvatarDecoration = pendingAvatarDecoration;
    obj24.isTryItOut = isTryItOut;
    items8[7] = closure_17(tmp(obj[57]), obj24);
    const obj25 = { user: str, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
    const tmpResult16 = tmp(obj[57]);
    if (isTryItOut) {
      pendingProfileEffect = tryItOutProfileEffect;
    }
    let tmp56Result8 = "profile" === tmp4Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
    obj25.pendingProfileEffect = pendingProfileEffect;
    obj25.displayProfile = tmp17Result;
    obj25.isTryItOut = isTryItOut;
    items8[8] = closure_17(tmp(obj[58]), obj25);
    const obj26 = { user: str, pendingProfileFrame, displayProfile: tmp17Result };
    items8[9] = closure_17(tmp(obj[59]), obj26);
    const obj27 = { user: str, pendingNameplate };
    items8[10] = closure_17(tmp(obj[60]), obj27);
    if (tmp56Result8) {
      if (!result) {
        result = isTryItOut;
      }
      tmp56Result8 = result;
    }
    if (tmp56Result8) {
      const obj28 = { isTryItOut };
      tmp56Result8 = closure_17(tmp(obj[61]), obj28);
    }
    items8[11] = tmp56Result8;
    const obj29 = {
      ref(arg0) {
          return closure_11(constants.GUILD_TAG, arg0);
        },
      children: null
    };
    const obj30 = { user: str, disabled: isSubmitting, tagStyle: null, pendingPrimaryGuildId: null };
    const obj31 = { backgroundColor: containerBackground };
    obj30.tagStyle = obj31;
    obj30.pendingPrimaryGuildId = pendingPrimaryGuildId;
    obj29.children = closure_17(tmp(obj[62]), obj30);
    items8[12] = closure_17(tmp53, obj29);
    let tmp56Result9 = null != legacyUsername && !isBadgeManagementEnabled;
    if (tmp56Result9) {
      const obj32 = { legacyUsername, pendingLegacyUsernameDisabled };
      tmp56Result9 = closure_17(tmp(obj[63]), obj32);
    }
    items8[13] = tmp56Result9;
    obj15.children = items8;
    const items9 = [closure_18(tmp53, obj15), ];
    if (tmp56Result10) {
      const obj33 = {
        currentUser: str,
        onLayout: tmp39.onTryItOutSectionLayout,
        onPreviewPremium() {
              return str(sharedValue1[65]).openPremiumTryItOutModal();
            }
      };
      tmp56Result10 = closure_17(tmp(obj[64]), obj33);
    }
    const obj34 = { children: null };
    items9[1] = tmp56Result10;
    obj34.children = items9;
    const tmp51Result = closure_18(closure_19, obj34);
    const obj35 = { theme, primaryColor, secondaryColor, children: null };
    const obj36 = { style: null, children: null };
    const items10 = [tmp3.container, ];
    const obj37 = { backgroundColor: gradientSecondaryBackground };
    items10[1] = obj37;
    obj36.style = items10;
    const obj38 = { ref, onScroll: null, onContentSizeChange: null, onLayout: null, scrollEventThrottle: null, children: null };
    let tmp76;
    if (tmp42) {
      tmp76 = callback;
    }
    obj38.onScroll = tmp76;
    let onContentSizeChange;
    if (tmp50) {
      onContentSizeChange = tmp39.onContentSizeChange;
    }
    obj38.onContentSizeChange = onContentSizeChange;
    let onScrollViewLayout;
    if (tmp50) {
      onScrollViewLayout = tmp39.onScrollViewLayout;
    }
    obj38.onLayout = onScrollViewLayout;
    let num2;
    if (tmp42) {
      num2 = 16;
    }
    obj38.scrollEventThrottle = num2;
    const obj39 = { style: tmp3.bounceOffset };
    const items11 = [closure_17(tmp53, obj39), ];
    const obj40 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const obj41 = { backgroundColor: gradientSecondaryBackground };
    obj40.containerStyle = obj41;
    const obj42 = { user: str, displayProfile: tmp17Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
    const tmp75 = isBadgeManagementEnabled;
    const tmpResult17 = tmp(obj[58]);
    const items12 = [closure_17(closure_21, obj42), ];
    const obj43 = { style: null, children: null };
    const items13 = [, , , ];
    ({ avatarBackground: arr14[0], avatarPosition: arr14[1] } = tmp2);
    items13[2] = tmp3.avatarContainer;
    items13[3] = obj14;
    obj43.style = items13;
    const obj44 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj14, isTryItOut, autoStartEditFlow: autoFocusElement === constants3.AVATAR };
    obj43.children = closure_17(tmp(obj[68]), obj44);
    const items14 = [closure_17(tmp53, obj43), ];
    const obj45 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const items15 = [, , ];
    ({ profileContentWrapper: arr16[0], profileContent: arr16[1] } = tmp2);
    const obj46 = { paddingTop: 0, paddingBottom: sum1 };
    items15[2] = obj46;
    obj45.containerStyle = items15;
    const tmpResult18 = tmp(obj[67]);
    const obj47 = { customStatusActivity, hasCustomProfileTheme: tmp35, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj60.style, emojiOnlyCustomStatusBubble: obj60.emojiOnlyStyle } = tmp2);
    const items16 = [closure_17(tmp(obj[69]), obj47), , ];
    const obj48 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: null, pendingDisplayNameStyles: null };
    const tmpResult19 = tmp(obj[67]);
    if (pendingPronouns == null) {
      pendingPronouns = str4;
    }
    obj48.pronouns = pendingPronouns;
    obj48.badgeContainerBackground = containerBackground;
    obj48.canOpenBadgeDirectory = !isTryItOut;
    if (isTryItOut) {
      pendingDisplayNameStyles = tryItOutDisplayNameStyles;
    }
    obj48.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items16[1] = closure_17(tmp(obj[70]), obj48);
    let tmp56Result11 = tmp51Result;
    if (flag) {
      const obj49 = { value: tmp51Result, children: null };
      const obj50 = { userId: str.id, containerBackground, hasCustomProfileTheme: tmp35, scrollPosition: sharedValue, scrollViewRef: ref, isBoardTabOnScreen: sharedValue1 };
      obj49.children = closure_17(tmp(obj[72]), obj50);
      tmp56Result11 = closure_17(tmp(obj[71]).Provider, obj49);
    }
    const obj51 = { children: null };
    items16[2] = tmp56Result11;
    obj45.children = items16;
    items14[1] = closure_18(tmpResult19, obj45);
    obj51.children = items14;
    items12[1] = closure_18(tmp53, obj51);
    obj40.children = items12;
    items11[1] = closure_18(tmpResult18, obj40);
    obj38.children = items11;
    const items17 = [closure_18(tmp75, obj38), ];
    if (!tmp29) {
      items17[1] = tmp29;
      obj36.children = items17;
      obj35.children = closure_18(tmp53, obj36);
      return closure_17(tmp4(obj[66]).ThemeContextProvider, obj35);
    } else if (enabled) {
      tmp = tmp(obj[73]);
      obj = {
        isVisible: derivedValue,
        onPreviewPremium() {
              return str(sharedValue1[65]).openPremiumTryItOutModal();
            }
      };
      let tmp56Result12 = closure_17(tmp, obj);
    } else {
      const obj52 = { isTryItOut };
      tmp56Result12 = closure_17(tmp4(obj[74]).UserProfilePremiumUpsellCard, obj52);
    }
    const tmpResult20 = tmp(obj[70]);
  }
  tmp56Result = closure_17(tmp(obj[52]), { user: str, isTryItOut });
  const tmpResult12 = tmp(obj[50]);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditForm(isTryItOut) {
  const cResult = c.c(6);
  if (cResult[0] !== isTryItOut) {
    isTryItOut = isTryItOut.isTryItOut;
    const tmp6 = _objectWithoutProperties(isTryItOut, closure_3);
    cResult[0] = isTryItOut;
    cResult[1] = tmp6;
    cResult[2] = isTryItOut;
    let tmp3 = isTryItOut;
    let tmp2 = tmp6;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] === (undefined !== tmp3 && tmp3)) {
    if (cResult[4] === tmp2) {
      return cResult[5];
    }
  }
  if (undefined !== tmp3 && tmp3) {
    const obj2 = {};
    const merged = Object.assign(tmp2);
    obj2.isTryItOut = true;
    let tmp8Result = constants(closure_25, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(tmp2);
    tmp8Result = constants(closure_22, obj3);
  }
  cResult[3] = undefined !== tmp3 && tmp3;
  cResult[4] = tmp2;
  cResult[5] = tmp8Result;
}) : (function UserProfileEditForm(isTryItOut) {
  let flag = isTryItOut.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isTryItOut, Object.assign({ isTryItOut: 0 }));
  if (flag) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.isTryItOut = true;
    let tmp2Result = constants(closure_25, obj2);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp2Result = constants(closure_22, obj);
  }
  return tmp2Result;
});