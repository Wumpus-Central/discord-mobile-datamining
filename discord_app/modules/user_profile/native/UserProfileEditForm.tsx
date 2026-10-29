// === Module 16335: UserProfileEditForm ===

// Module 16335 (UserProfileEditForm)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2051 */;
import Text_Text from "Text/Text" /* 5271 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7313 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7338 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8695 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8726 */;
import PendingBadgeSettings from "PendingBadgeSettings" /* 14902 */;
import _modDef16337 from "module_16337" /* 16337 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 16338 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16351 */;
import MobileWidgetEditingExperiment from "MobileWidgetEditingExperiment" /* 16353 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8721 */;
import ProfileCustomizationNavigationStore from "ProfileCustomizationNavigationStore" /* 11217 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
let closure_3 = ["isTryItOut"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7364).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1084);
({ DISPLAY_NAME_MAX_LENGTH: closure_12, PRONOUNS_MAX_LENGTH: map1 } = Constants);
const HexagonCampaignConstants = fn(5030);
({ HexagonCampaignPerk: closure_14, HexagonCampaignPerkAvailability: closure_15 } = HexagonCampaignConstants);
let closure_16 = fn(1094).ProfileCustomizationScrollPositions;
const constants3 = fn(16336).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19, Fragment: closure_20 } = jsxProd);
let obj = { assetOrigin: fn(7146).AssetOriginTypes.NEW_ASSET, imageUri: _modDef16337, staticImageUri: _modDef16337, description: "", originalAsset: "unicodeVersion" };
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditUserProfileBanner(arg0) {
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
                            const tmp24 = collapsedCategories(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
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
          const tmp21 = collapsedCategories(UserProfileEditBannerButtonDefault, obj4);
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
  obj4.children = collapsedCategories(UserProfileEditBannerButtonDefault, obj5);
  return collapsedCategories(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function MainUserProfileEditForm(arg0) {
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
  const tmp5 = collapsedCategories(closure_26, obj3);
  cResult[0] = isMobileWidgetEditingEnabled;
  cResult[1] = arg0;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : (function MainUserProfileEditForm(arg0) {
  const obj2 = {};
  const isMobileWidgetEditingEnabled = MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
  const merged = Object.assign(arg0);
  obj2.isWidgetEditingEnabled = isMobileWidgetEditingEnabled;
  return collapsedCategories(closure_26, obj2);
});
fn(558);
let closure_24 = { code: "function UserProfileEditFormTsx1(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
const __initData = { code: "function UserProfileEditFormTsx2(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}" };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormContent(currentUser) {
  const cResult = currentUser(sharedValue[15]).c(184);
  currentUser = currentUser.currentUser;
  ({ autoFocusElement, isTryItOut, isWidgetEditingEnabled } = currentUser);
  require("UserProfileSharedStyles")();
  obj = currentUser(sharedValue[15]);
  importDefault = require("UserProfileEditFormSharedStyles")();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "user_profile_edit_form" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  const bioMaxLength = currentUser(sharedValue[26]).useBioMaxLength(first);
  require("useKeyboardIsOpen")();
  const tmpResult = currentUser(sharedValue[26]);
  const ref = noop.useRef(null);
  sharedValue = currentUser(sharedValue[28]).useSharedValue(0);
  const context = noop.useContext(tmp4(tmp2[29]));
  const tmpResult11 = currentUser(sharedValue[28]);
  const sharedValue1 = currentUser(sharedValue[28]).useSharedValue(false);
  const tmpResult12 = currentUser(sharedValue[28]);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[1] = obj3;
    let tmp17 = obj3;
  } else {
    tmp17 = cResult[1];
  }
  const insets = tmp4(tmp2[30])(tmp17).insets;
  const PX_16 = tmp4(tmp2[31]).space.PX_16;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { ref: ref1, offset: null };
    const obj6 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    obj5.offset = obj6;
    cResult[2] = obj5;
    let tmp18 = obj5;
  } else {
    tmp18 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { ref: ref2, offset: null };
    const obj8 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    obj7.offset = obj8;
    cResult[3] = obj7;
    let tmp19 = obj7;
  } else {
    tmp19 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp18, tmp19, ];
    const obj9 = { ref: ref3, offset: null };
    const obj10 = { type: "toValue", value: tmp4(tmp2[31]).space.PX_64 };
    obj9.offset = obj10;
    items[2] = obj9;
    cResult[4] = items;
    let tmp20 = items;
  } else {
    tmp20 = cResult[4];
  }
  if (cResult[5] !== insets) {
    const obj11 = { insets, inputs: tmp20, scrollViewRef: ref };
    cResult[5] = insets;
    cResult[6] = obj11;
    let tmp21 = obj11;
  } else {
    tmp21 = cResult[6];
  }
  const onFocus = tmp4(tmp2[32])(tmp21).onFocus;
  ref1 = noop.useRef(null);
  ({ errors, isSubmitting, pendingAvatar, pendingAvatarDecoration, pendingBanner, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingThemeColors, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder, pendingBadgeHiddenBadges, pendingPrimaryGuildId, pendingDisplayNameStyles, tryItOutDisplayNameStyles } = require("useUserProfileEditForm")());
  require("useFetchCollectiblesCategoriesAndPurchases")();
  const tmp22 = require("useUserProfileEditForm")();
  const guildAutomodProfileQuarantineErrors = currentUser(sharedValue[35]).useGuildAutomodProfileQuarantineErrors();
  let str = currentUser.id;
  const tmpResult13 = currentUser(sharedValue[35]);
  if (str == null) {
    str = "";
  }
  const tmp4Result = require("useDisplayProfile");
  const tmp4ResultResult = require("useDisplayProfile")(str);
  const customStatusActivity = currentUser(sharedValue[37]).useCustomStatusActivity();
  currentUser(sharedValue[38]);
  if (cResult[7] === currentUser.id) {
    const tmp31 = tmp4(tmp2[40])(tmp4ResultResult, pendingLegacyUsernameDisabled);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj12 = { location: "UserProfileEditForm" };
      cResult[10] = obj12;
      let tmp32 = obj12;
    } else {
      tmp32 = cResult[10];
    }
    const isBadgeManagementEnabled = tmp(tmp2[41]).useIsBadgeManagementEnabled(tmp32);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [BadgeDirectoryStore];
      cResult[11] = items1;
      let tmp34 = items1;
    } else {
      tmp34 = cResult[11];
    }
    if (cResult[12] !== currentUser.id) {
      class Le {
        constructor() {
          return closure_9.hasCatalogFor(currentUser.id);
        }
      }
      cResult[12] = currentUser.id;
      cResult[13] = Le;
    } else {
      class Le {
        constructor() {
          return closure_9.hasCatalogFor(currentUser.id);
        }
      }
    }
    const tmpResult16 = tmp(tmp2[41]);
    const stateFromStores = tmp(tmp2[42]).useStateFromStores(tmp34, Le);
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class Le {
        constructor() {
          return closure_9.hasCatalogFor(currentUser.id);
        }
      }
      const items2 = [BadgeDirectoryStore];
      cResult[14] = items2;
      const tmp38 = items2;
    } else {
      class Le {
        constructor() {
          return closure_9.hasCatalogFor(currentUser.id);
        }
      }
    }
    if (cResult[15] !== currentUser.id) {
      class Ne {
        constructor() {
          return closure_9.getBadges(currentUser.id);
        }
      }
      cResult[15] = currentUser.id;
      cResult[16] = Ne;
    } else {
      class Ne {
        constructor() {
          return closure_9.getBadges(currentUser.id);
        }
      }
    }
    const tmpResult17 = tmp(tmp2[42]);
    const stateFromStoresArray = tmp(tmp2[42]).useStateFromStoresArray(tmp38, Ne);
    if (cResult[17] === currentUser.id) {
      class Ne {
        constructor() {
          return closure_9.getBadges(currentUser.id);
        }
      }
      const effect = noop.useEffect(tmp41, tmp42);
      if (cResult[21] === tmp31) {
        class Ne {
          constructor() {
            return closure_9.getBadges(currentUser.id);
          }
        }
      }
      const obj13 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
      const pendingProfileBadges = tmp(tmp2[44]).getPendingProfileBadges(tmp31, stateFromStoresArray, obj13);
      cResult[21] = tmp31;
      cResult[22] = stateFromStoresArray;
      cResult[23] = pendingBadgeDisplayOrder;
      cResult[24] = pendingBadgeHiddenBadges;
      cResult[25] = pendingProfileBadges;
      const tmpResult19 = tmp(tmp2[44]);
    }
    function xe() {
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
    cResult[19] = xe;
    cResult[20] = items3;
    tmp41 = xe;
    tmp42 = items3;
    const tmpResult18 = tmp(tmp2[42]);
  }
  const tmpResult14 = currentUser(sharedValue[37]);
  const pendingAvatarSrc = currentUser(sharedValue[39]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  cResult[7] = currentUser.id;
  cResult[8] = pendingAvatar;
  cResult[9] = pendingAvatarSrc;
  const obj14 = { userId: currentUser.id, image: pendingAvatar };
  const tmpResult20 = currentUser(sharedValue[39]);
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
  let context;
  pendingBadgeDisplayOrder = undefined;
  noop = undefined;
  let isBadgeManagementEnabled;
  let stateFromStores;
  let stateFromStoresArray;
  ProfileCustomizationNavigationStore = undefined;
  closure_11 = undefined;
  let isScrolledAboveTryItOutSection;
  maxLength = undefined;
  let tmp = sharedValue;
  obj = context;
  let tmp2 = sharedValue(context[24])();
  const tmp3 = sharedValue(context[25])();
  const bioMaxLength = currentUser.currentUser(context[26]).useBioMaxLength({ location: "user_profile_edit_form" });
  let obj2 = currentUser.currentUser(context[26]);
  const ref = noop.useRef(null);
  const tmp6 = sharedValue(context[27])();
  sharedValue = currentUser.currentUser(context[28]).useSharedValue(0);
  context = noop.useContext(sharedValue(context[29]));
  const obj4 = currentUser.currentUser(context[28]);
  const sharedValue1 = currentUser.currentUser(context[28]).useSharedValue(false);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = sharedValue(context[30])({ includeKeyboardHeight: true }).insets;
  const PX_16 = sharedValue(context[31]).space.PX_16;
  const obj6 = { insets, inputs: null, scrollViewRef: null };
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj9 = { ref: ref3, offset: null };
  const obj10 = { type: "toValue", value: null };
  const obj5 = currentUser.currentUser(context[28]);
  const obj7 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj8 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  obj10.value = sharedValue(context[31]).space.PX_64;
  obj9.offset = obj10;
  items[2] = obj9;
  obj6.inputs = items;
  obj6.scrollViewRef = ref;
  const onFocus = sharedValue(context[32])(obj6).onFocus;
  const tmp15 = sharedValue(context[33])();
  ({ errors, isSubmitting, pendingAvatarDecoration, pendingProfileEffect, pendingThemeColors, tryItOutThemeColors, pendingGlobalName, pendingPronouns, pendingBio, pendingLegacyUsernameDisabled, pendingBadgeDisplayOrder } = tmp15);
  const pendingBadgeHiddenBadges = tmp15.pendingBadgeHiddenBadges;
  ({ pendingDisplayNameStyles, pendingAvatar, pendingBanner, pendingProfileFrame, pendingNameplate, pendingAccentColor, tryItOutBanner, tryItOutAvatarDecoration, tryItOutProfileEffect, tryItOutDisplayNameStyles, pendingPrimaryGuildId } = tmp15);
  sharedValue(context[34])();
  const tmp14 = sharedValue(context[32]);
  const guildAutomodProfileQuarantineErrors = currentUser.currentUser(context[35]).useGuildAutomodProfileQuarantineErrors();
  let str2 = str.id;
  const obj11 = currentUser.currentUser(context[35]);
  if (str2 == null) {
    str2 = "";
  }
  const tmp18Result = sharedValue(context[36])(str2);
  const tmp18 = sharedValue(context[36]);
  const customStatusActivity = currentUser.currentUser(obj[37]).useCustomStatusActivity();
  const tmp4Result = currentUser.currentUser(obj[37]);
  const tmp4Result10 = currentUser.currentUser(obj[38]);
  const pendingAvatarSrc = currentUser.currentUser(obj[39]).getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
  const tmp21 = tmp(obj[40])(tmp18Result, pendingLegacyUsernameDisabled);
  noop = tmp21;
  const obj12 = { userId: currentUser.currentUser.id, image: pendingAvatar };
  const tmp4Result11 = currentUser.currentUser(obj[39]);
  isBadgeManagementEnabled = currentUser.currentUser(obj[41]).useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
  const tmp4Result12 = currentUser.currentUser(obj[41]);
  const items1 = [stateFromStoresArray];
  stateFromStores = currentUser.currentUser(obj[42]).useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
  const tmp4Result13 = currentUser.currentUser(obj[42]);
  const items2 = [stateFromStoresArray];
  stateFromStoresArray = currentUser.currentUser(obj[42]).useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
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
  const tmp4Result14 = currentUser.currentUser(obj[42]);
  let result = tmp(obj[16]).canUsePremiumProfileCustomization(str);
  const tmpResult = tmp(obj[16]);
  const hexagonCampaignPerkAvailability = currentUser.currentUser(obj[45]).useHexagonCampaignPerkAvailability(constants.DISPLAY_NAME_STYLE, "UserProfileEditForm");
  let tmp30 = !result;
  if (!result) {
    tmp30 = !tmp6;
  }
  const tmp4Result15 = currentUser.currentUser(obj[45]);
  const enabled = currentUser.currentUser(obj[46]).useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
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
  const tmp4Result16 = currentUser.currentUser(obj[46]);
  if (isTryItOut) {
    tmp34 = tryItOutThemeColors;
  }
  obj13.pendingThemeColors = tmp34;
  obj13.isPreview = isTryItOut;
  const tmpResult9 = tmp(obj[47]);
  ({ theme, primaryColor, secondaryColor } = tmp(obj[47])(obj13));
  const tmpResult1Result = tmp(obj[47])(obj13);
  const userProfileColors = currentUser.currentUser(obj[48]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const obj14 = { backgroundColor: userProfileColors.avatarBackground };
  const tmp4Result17 = currentUser.currentUser(obj[48]);
  const tmp38 = tmp(obj[49])();
  [tmp40, c10] = pendingBadgeDisplayOrder(noop.useState(0), 2);
  let num = 0;
  const callback = obj3.useCallback((nativeEvent) => _undefined(nativeEvent.nativeEvent.layout.height), []);
  if (tmp30) {
    num = 0;
    if (!tmp61Result10) {
      num = closure_11;
    }
  }
  const sum = insets.bottom + num;
  const sum1 = sum + tmp(obj[31]).space.PX_16;
  const tmp44 = tmp(obj[50])(sharedValue, sum1);
  closure_11 = tmp44;
  isScrolledAboveTryItOutSection = tmp44.isScrolledAboveTryItOutSection;
  const tmp39 = pendingBadgeDisplayOrder(noop.useState(0), 2);
  class Pe {
    constructor() {
      value = closure_12.get();
      if (value) {
        tmp2 = closure_3;
        value = !closure_3.get();
      }
      return value;
    }
  }
  Pe.__closure = { isScrolledAboveTryItOutSection, isBoardTabOnScreen: sharedValue1 };
  Pe.__workletHash = 11263005200863;
  Pe.__initData = __initData;
  const items6 = [sharedValue, context, tmp44];
  const derivedValue = currentUser.currentUser(obj[28]).useDerivedValue(Pe);
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
      const intl = tmp4(obj[21]).intl;
      stringResult = intl.string(tmp4(obj[21]).t["84MExs"]);
    }
  }
  const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
  maxLength = tmp(obj[51])(ref, field);
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
      obj17.children = closure_18(tmp4(obj[52]).Text, obj18);
      tmp59 = closure_18(tmp58, obj17);
    }
  }
  const items8 = [tmp59, , , , , , , , , , , , , ];
  const obj19 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
  const tmp4Result18 = currentUser.currentUser(obj[28]);
  const intl2 = tmp4(obj[21]).intl;
  obj19.label = intl2.string(currentUser.currentUser(obj[21]).t["9AjdkD"]);
  obj19.errorMessage = first;
  let tmp63 = pendingGlobalName;
  if (pendingGlobalName == null) {
    tmp63 = str3;
  }
  obj19.value = tmp63;
  obj19.onFocus = onFocus;
  obj19.onChange = function onChange(globalName) {
    return str(context[54]).setPendingChanges({ globalName });
  };
  obj19.placeholder = currentUser.currentUser.toString();
  obj19.maxLength = isScrolledAboveTryItOutSection;
  obj19.disabled = isSubmitting;
  items8[1] = closure_18(tmp(obj[53]), obj19);
  if (!result) {
    if (!isTryItOut) {
      let tmp61Result = null;
      if (hexagonCampaignPerkAvailability !== constants2.HIDDEN) {
        const obj20 = { user: str, availability: hexagonCampaignPerkAvailability, disabled: isSubmitting };
        tmp61Result = closure_18(tmp(obj[56]), obj20);
      }
    }
    items8[2] = tmp61Result;
    const obj21 = { inputRef: ref2, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
    const intl3 = tmp4(obj[21]).intl;
    obj21.label = intl3.string(tmp4(obj[21]).t["+T3RI/"]);
    obj21.errorMessage = first3;
    let tmp67 = pendingPronouns;
    if (pendingPronouns == null) {
      tmp67 = str4;
    }
    obj21.value = tmp67;
    obj21.onFocus = onFocus;
    obj21.onChange = function onChange(pronouns) {
      return str(context[54]).setPendingChanges({ pronouns });
    };
    obj21.maxLength = maxLength;
    obj21.disabled = isSubmitting;
    items8[3] = closure_18(tmp(obj[53]), obj21);
    let tmp61Result7 = !isTryItOut;
    if (!isTryItOut) {
      const obj22 = { badges: memo, catalogBadges: memo1, ownsAnyBadge: someResult, autoOpen: autoFocusElement === constants3.BADGES };
      tmp61Result7 = closure_18(tmp(obj[57]), obj22);
    }
    items8[4] = tmp61Result7;
    const obj23 = { inputRef: ref3, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, autoFocus: null, maxLength: null, numberOfLines: 5, disabled: null };
    const tmpResult11 = tmp(obj[53]);
    const intl4 = tmp4(obj[21]).intl;
    obj23.label = intl4.string(tmp4(obj[21]).t.ZzAR2Y);
    obj23.errorMessage = first4;
    if (pendingBio == null) {
      pendingBio = str5;
    }
    obj23.value = pendingBio;
    obj23.onFocus = onFocus;
    obj23.onChange = function onChange(bio) {
      return str(context[54]).setPendingChanges({ bio });
    };
    obj23.autoFocus = autoFocusElement === constants3.BIO;
    obj23.maxLength = bioMaxLength;
    obj23.disabled = isSubmitting;
    items8[5] = closure_18(tmp(obj[53]), obj23);
    const obj24 = { user: str, onProfileThemeColorsChanged: null, pendingAvatarSrc: null, pendingThemeColors: null, isTryItOut: null };
    const tmpResult12 = tmp(obj[53]);
    if (isTryItOut) {
      let fn = tmp4(obj[59]).setTryItOutThemeColors;
    } else {
      fn = (themeColors) => str(context[54]).setPendingChanges({ themeColors });
    }
    obj24.onProfileThemeColorsChanged = fn;
    obj24.pendingAvatarSrc = pendingAvatarSrc;
    let tmp74 = pendingThemeColors;
    if (isTryItOut) {
      tmp74 = tryItOutThemeColors;
    }
    obj24.pendingThemeColors = tmp74;
    obj24.isTryItOut = isTryItOut;
    items8[6] = closure_18(tmp(obj[58]), obj24);
    const obj25 = { user: str, pendingAvatarDecoration: null, isTryItOut: null };
    const tmpResult13 = tmp(obj[58]);
    if (isTryItOut) {
      pendingAvatarDecoration = tryItOutAvatarDecoration;
    }
    obj25.pendingAvatarDecoration = pendingAvatarDecoration;
    obj25.isTryItOut = isTryItOut;
    items8[7] = closure_18(tmp(obj[60]), obj25);
    const obj26 = { user: str, pendingProfileEffect: null, displayProfile: null, isTryItOut: null };
    const tmpResult14 = tmp(obj[60]);
    if (isTryItOut) {
      pendingProfileEffect = tryItOutProfileEffect;
    }
    let tmp61Result8 = "profile" === tmp4Result10.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
    obj26.pendingProfileEffect = pendingProfileEffect;
    obj26.displayProfile = tmp18Result;
    obj26.isTryItOut = isTryItOut;
    items8[8] = closure_18(tmp(obj[61]), obj26);
    const obj27 = { user: str, pendingProfileFrame, displayProfile: tmp18Result };
    items8[9] = closure_18(tmp(obj[62]), obj27);
    const obj28 = { user: str, pendingNameplate };
    items8[10] = closure_18(tmp(obj[63]), obj28);
    if (tmp61Result8) {
      if (!result) {
        result = isTryItOut;
      }
      tmp61Result8 = result;
    }
    if (tmp61Result8) {
      const obj29 = { isTryItOut };
      tmp61Result8 = closure_18(tmp(obj[64]), obj29);
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
    obj30.children = closure_18(tmp(obj[65]), obj31);
    items8[12] = closure_18(tmp58, obj30);
    let tmp61Result9 = null != legacyUsername && !isBadgeManagementEnabled;
    if (tmp61Result9) {
      const obj33 = { legacyUsername, pendingLegacyUsernameDisabled };
      tmp61Result9 = closure_18(tmp(obj[66]), obj33);
    }
    items8[13] = tmp61Result9;
    obj16.children = items8;
    const items9 = [closure_19(tmp58, obj16), ];
    if (tmp61Result10) {
      const obj34 = {
        currentUser: str,
        onLayout: tmp44.onTryItOutSectionLayout,
        onPreviewPremium() {
              return str(context[68]).openPremiumTryItOutModal();
            }
      };
      tmp61Result10 = closure_18(tmp(obj[67]), obj34);
    }
    const obj35 = { children: null };
    items9[1] = tmp61Result10;
    obj35.children = items9;
    const tmp56Result = closure_19(closure_20, obj35);
    const obj36 = { theme, primaryColor, secondaryColor, children: null };
    const obj37 = { style: tmp3.container, onLayout: callback, children: null };
    const obj38 = { gradientHeight: tmp40, bannerHeight: tmp38 };
    const items10 = [closure_18(tmp(obj[70]), obj38), , ];
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
    const items11 = [closure_18(tmp58, obj40), closure_18(tmp4(obj[29]).ProfileCustomizationHeaderSpacer, {}), , ];
    const obj41 = { user: str, displayProfile: tmp18Result, pendingAvatarSrc, pendingBanner, pendingAccentColor, pendingThemeColors, tryItOutBanner, isTryItOut, disabled: isSubmitting };
    items11[2] = closure_18(closure_22, obj41);
    const obj42 = { style: null, children: null };
    const items12 = [, , , ];
    ({ avatarBackground: arr13[0], avatarPosition: arr13[1] } = tmp2);
    items12[2] = tmp3.avatarContainer;
    items12[3] = obj14;
    obj42.style = items12;
    const obj43 = { user: str, disabled: isSubmitting, disableStatus: null != isTryItOut, statusStyle: obj14, isTryItOut, autoStartEditFlow: autoFocusElement === constants3.AVATAR };
    obj42.children = closure_18(tmp(obj[71]), obj43);
    const items13 = [closure_18(tmp58, obj42), ];
    const obj44 = { style: null, children: null };
    const items14 = [, , ];
    ({ profileContentWrapper: arr15[0], profileContent: arr15[1] } = tmp2);
    const obj45 = { paddingTop: 0, paddingBottom: sum1 };
    items14[2] = obj45;
    obj44.style = items14;
    const obj46 = { customStatusActivity, hasCustomProfileTheme: tmp36, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj59.style, emojiOnlyCustomStatusBubble: obj59.emojiOnlyStyle } = tmp2);
    const items15 = [closure_18(tmp(obj[72]), obj46), , ];
    const obj47 = { user: str, displayName: pendingGlobalName, badges: memo, catalogBadges: memo1, pronouns: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", canOpenBadgeDirectory: null, pendingDisplayNameStyles: null };
    const tmp80 = isBadgeManagementEnabled;
    const tmpResult15 = tmp(obj[61]);
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
    items15[1] = closure_18(tmp(obj[73]), obj47);
    let tmp61Result11 = tmp56Result;
    if (flag) {
      const obj48 = { value: tmp56Result, children: null };
      const obj49 = { userId: str.id, containerBackground, hasCustomProfileTheme: tmp36, scrollPosition: sharedValue, scrollViewRef: ref, isBoardTabOnScreen: sharedValue1 };
      obj48.children = closure_18(tmp(obj[75]), obj49);
      tmp61Result11 = closure_18(tmp(obj[74]).Provider, obj48);
    }
    const obj50 = { children: null };
    items15[2] = tmp61Result11;
    obj44.children = items15;
    items13[1] = closure_19(tmp58, obj44);
    obj50.children = items13;
    items11[3] = closure_19(tmp58, obj50);
    obj39.children = items11;
    items10[1] = closure_19(tmp80, obj39);
    if (!tmp30) {
      items10[2] = tmp30;
      obj37.children = items10;
      obj36.children = closure_19(tmp58, obj37);
      return closure_18(tmp4(obj[69]).ThemeContextProvider, obj36);
    } else if (enabled) {
      tmp = tmp(obj[76]);
      obj = {
        isVisible: derivedValue,
        onPreviewPremium() {
              return str(context[68]).openPremiumTryItOutModal();
            }
      };
      let tmp61Result12 = closure_18(tmp, obj);
    } else {
      const obj51 = { isTryItOut };
      tmp61Result12 = closure_18(tmp4(obj[77]).UserProfilePremiumUpsellCard, obj51);
    }
    const tmpResult16 = tmp(obj[73]);
  }
  tmp61Result = closure_18(tmp(obj[55]), { user: str, isTryItOut });
  const tmpResult10 = tmp(obj[53]);
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
    let tmp8Result = collapsedCategories(closure_26, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(tmp2);
    tmp8Result = collapsedCategories(closure_23, obj3);
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
    let tmp2Result = collapsedCategories(closure_26, obj2);
  } else {
    obj = {};
    const merged2 = Object.assign(merged);
    tmp2Result = collapsedCategories(closure_23, obj);
  }
  return tmp2Result;
});