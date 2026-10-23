// discord_app/modules/user_profile/native/UserProfileEditForm.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import BadgeDirectoryActionCreators from "../../badges/BadgeDirectoryActionCreators.tsx";
import PendingBadgeSettings from "../../badges/PendingBadgeSettings.tsx";
import _modDef15788 from "../../../../_runtime/metro/15788__.js";
import useOpenChangeBannerActionSheetDefault from "../hooks/native/useOpenChangeBannerActionSheet.tsx";
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton.tsx";
import MobileWidgetEditingExperiment from "../experiments/MobileWidgetEditingExperiment.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import ProfileCustomizationNavigationStore from "../../profile_customization/ProfileCustomizationNavigationStore.tsx";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
let closure_3 = ["isTryItOut"];
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const FLOATING_UPSELL_HEIGHT = fn(7289).FLOATING_UPSELL_HEIGHT;
const Constants = fn(1087);
({ DISPLAY_NAME_MAX_LENGTH: closure_11, PRONOUNS_MAX_LENGTH: closure_12 } = Constants);
let closure_13 = fn(1097).ProfileCustomizationScrollPositions;
const constants = fn(15787).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let obj = {
  assetOrigin: fn(7071).AssetOriginTypes.NEW_ASSET,
  imageUri: _modDef15788,
  staticImageUri: _modDef15788,
  description: "",
  originalAsset: "unicodeVersion",
};
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditUserProfileBanner(arg0) {
      obj = c;
      const cResult = obj.c(25);
      ({
        user,
        displayProfile,
        pendingAvatarSrc,
        pendingBanner,
        pendingAccentColor,
        pendingThemeColors,
        tryItOutBanner,
        isTryItOut,
        disabled,
      } = arg0);
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
                                const tmp24 = value2(useAnalyticsLocations.AnalyticsLocationProvider, obj3);
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
              const obj4 = {
                user,
                displayProfile,
                pendingBanner,
                pendingAvatarSrc,
                pendingThemeColors,
                pendingAccentColor,
                bannerSafeArea: 12,
                showProfilePreviewButton: tmp5,
                onPressEdit: tmp14,
                editButtonAccessibilityLabel: tmp17,
                editDisabled: disabled,
              };
              const tmp21 = value2(UserProfileEditBannerButtonDefault, obj4);
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
    }
  : function EditUserProfileBanner(arg0) {
      ({
        user,
        displayProfile,
        pendingBanner,
        tryItOutBanner,
        isTryItOut,
        pendingAvatarSrc,
        pendingAccentColor,
        pendingThemeColors,
        disabled,
      } = arg0);
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
      const obj5 = {
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
      obj4.children = value2(UserProfileEditBannerButtonDefault, obj5);
      return value2(useAnalyticsLocations.AnalyticsLocationProvider, obj4);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MainUserProfileEditForm(arg0) {
      const cResult = c.c(3);
      const isMobileWidgetEditingEnabled =
        MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
      if (cResult[0] === isMobileWidgetEditingEnabled) {
        if (cResult[1] === arg0) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const obj3 = {};
      const merged = Object.assign(arg0);
      obj3.isWidgetEditingEnabled = isMobileWidgetEditingEnabled;
      const tmp5 = value2(closure_23, obj3);
      cResult[0] = isMobileWidgetEditingEnabled;
      cResult[1] = arg0;
      cResult[2] = tmp5;
      tmp3 = tmp5;
    }
  : function MainUserProfileEditForm(arg0) {
      const obj2 = {};
      const isMobileWidgetEditingEnabled =
        MobileWidgetEditingExperiment.useIsMobileWidgetEditingEnabled("UserProfileEditForm");
      const merged = Object.assign(arg0);
      obj2.isWidgetEditingEnabled = isMobileWidgetEditingEnabled;
      return value2(closure_23, obj2);
    };
fn(558);
let closure_21 = {
  code: "function UserProfileEditFormTsx1(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}",
};
const __initData = {
  code: "function UserProfileEditFormTsx2(){const{isScrolledAboveTryItOutSection,isBoardTabOnScreen}=this.__closure;return isScrolledAboveTryItOutSection.get()&&!isBoardTabOnScreen.get();}",
};
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileEditFormContent(currentUser) {
      const cResult = currentUser(sharedValue[13]).c(190);
      currentUser = currentUser.currentUser;
      ({ autoFocusElement, isTryItOut, isWidgetEditingEnabled } = currentUser);
      require("UserProfileSharedStyles")();
      obj = currentUser(sharedValue[13]);
      importDefault = require("UserProfileEditFormSharedStyles")();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "user_profile_edit_form" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp6 = require("UserProfileEditFormSharedStyles")();
      const bioMaxLength = currentUser(sharedValue[24]).useBioMaxLength(first);
      require("useKeyboardIsOpen")();
      const tmpResult = currentUser(sharedValue[24]);
      const ref = noop.useRef(null);
      sharedValue = currentUser(sharedValue[26]).useSharedValue(0);
      const tmpResult11 = currentUser(sharedValue[26]);
      const sharedValue1 = currentUser(sharedValue[26]).useSharedValue(false);
      const tmpResult12 = currentUser(sharedValue[26]);
      const ref2 = noop.useRef(null);
      const ref3 = noop.useRef(null);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { includeKeyboardHeight: true };
        cResult[1] = obj3;
        let tmp16 = obj3;
      } else {
        tmp16 = cResult[1];
      }
      const insets = tmp4(tmp2[27])(tmp16).insets;
      const PX_16 = tmp4(tmp2[28]).space.PX_16;
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
        const items = [tmp17, tmp18];
        const obj9 = { ref: ref3, offset: null };
        const obj10 = { type: "toValue", value: tmp4(tmp2[28]).space.PX_64 };
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
      const onFocus = tmp4(tmp2[29])(tmp20).onFocus;
      ref1 = noop.useRef(null);
      ({
        errors,
        isSubmitting,
        pendingAvatar,
        pendingAvatarDecoration,
        pendingBanner,
        pendingProfileEffect,
        pendingProfileFrame,
        pendingNameplate,
        pendingThemeColors,
        pendingAccentColor,
        tryItOutBanner,
        tryItOutAvatarDecoration,
        tryItOutProfileEffect,
        tryItOutThemeColors,
        pendingGlobalName,
        pendingPronouns,
        pendingBio,
        pendingLegacyUsernameDisabled,
        pendingBadgeDisplayOrder,
        pendingBadgeHiddenBadges,
        pendingPrimaryGuildId,
        pendingDisplayNameStyles,
        tryItOutDisplayNameStyles,
      } = require("useUserProfileEditForm")());
      require("useFetchCollectiblesCategoriesAndPurchases")();
      const tmp21 = require("useUserProfileEditForm")();
      const guildAutomodProfileQuarantineErrors = currentUser(sharedValue[32]).useGuildAutomodProfileQuarantineErrors();
      let str = currentUser.id;
      const tmpResult13 = currentUser(sharedValue[32]);
      if (str == null) {
        str = "";
      }
      const tmp4Result = require("useDisplayProfile");
      const tmp4ResultResult = require("useDisplayProfile")(str);
      const customStatusActivity = currentUser(sharedValue[34]).useCustomStatusActivity();
      currentUser(sharedValue[35]);
      if (cResult[7] === currentUser.id) {
        const tmp30 = tmp4(tmp2[37])(tmp4ResultResult, pendingLegacyUsernameDisabled);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const obj12 = { location: "UserProfileEditForm" };
          cResult[10] = obj12;
          let tmp31 = obj12;
        } else {
          tmp31 = cResult[10];
        }
        const isBadgeManagementEnabled = tmp(tmp2[38]).useIsBadgeManagementEnabled(tmp31);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [BadgeDirectoryStore];
          cResult[11] = items1;
          let tmp33 = items1;
        } else {
          tmp33 = cResult[11];
        }
        if (cResult[12] !== currentUser.id) {
          class Ee {
            constructor() {
              return closure_8.hasCatalogFor(currentUser.id);
            }
          }
          cResult[12] = currentUser.id;
          cResult[13] = Ee;
        } else {
          class Ee {
            constructor() {
              return closure_8.hasCatalogFor(currentUser.id);
            }
          }
        }
        const tmpResult16 = tmp(tmp2[38]);
        const stateFromStores = tmp(tmp2[39]).useStateFromStores(tmp33, Ee);
        const _Symbol3 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class Ee {
            constructor() {
              return closure_8.hasCatalogFor(currentUser.id);
            }
          }
          const items2 = [BadgeDirectoryStore];
          cResult[14] = items2;
          const tmp37 = items2;
        } else {
          class Ee {
            constructor() {
              return closure_8.hasCatalogFor(currentUser.id);
            }
          }
        }
        if (cResult[15] !== currentUser.id) {
          class Ue {
            constructor() {
              return closure_8.getBadges(currentUser.id);
            }
          }
          cResult[15] = currentUser.id;
          cResult[16] = Ue;
        } else {
          class Ue {
            constructor() {
              return closure_8.getBadges(currentUser.id);
            }
          }
        }
        const tmpResult17 = tmp(tmp2[39]);
        const stateFromStoresArray = tmp(tmp2[39]).useStateFromStoresArray(tmp37, Ue);
        if (cResult[17] === currentUser.id) {
          class Ue {
            constructor() {
              return closure_8.getBadges(currentUser.id);
            }
          }
          const effect = noop.useEffect(Re, tmp41);
          if (cResult[21] === tmp30) {
            class Ue {
              constructor() {
                return closure_8.getBadges(currentUser.id);
              }
            }
          }
          const obj13 = { pendingBadgeDisplayOrder, pendingBadgeHiddenBadges };
          const pendingProfileBadges = tmp(tmp2[41]).getPendingProfileBadges(tmp30, stateFromStoresArray, obj13);
          cResult[21] = tmp30;
          cResult[22] = stateFromStoresArray;
          cResult[23] = pendingBadgeDisplayOrder;
          cResult[24] = pendingBadgeHiddenBadges;
          cResult[25] = pendingProfileBadges;
          const tmpResult19 = tmp(tmp2[41]);
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
                obj2 = closure_0(closure_2[40]);
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
        const tmpResult18 = tmp(tmp2[39]);
      }
      const tmpResult14 = currentUser(sharedValue[34]);
      const pendingAvatarSrc = currentUser(sharedValue[36]).getPendingAvatarSrc({
        userId: currentUser.id,
        image: pendingAvatar,
      });
      cResult[7] = currentUser.id;
      cResult[8] = pendingAvatar;
      cResult[9] = pendingAvatarSrc;
      const obj14 = { userId: currentUser.id, image: pendingAvatar };
      const tmpResult20 = currentUser(sharedValue[36]);
    }
  : function UserProfileEditFormContent(currentUser) {
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
      let tmp2 = sharedValue(sharedValue1[22])();
      const tmp3 = sharedValue(sharedValue1[23])();
      const bioMaxLength = currentUser
        .currentUser(sharedValue1[24])
        .useBioMaxLength({ location: "user_profile_edit_form" });
      let obj2 = currentUser.currentUser(sharedValue1[24]);
      const ref = noop.useRef(null);
      const tmp6 = sharedValue(sharedValue1[25])();
      sharedValue = currentUser.currentUser(sharedValue1[26]).useSharedValue(0);
      const obj4 = currentUser.currentUser(sharedValue1[26]);
      sharedValue1 = currentUser.currentUser(sharedValue1[26]).useSharedValue(false);
      const ref1 = noop.useRef(null);
      const ref2 = noop.useRef(null);
      const ref3 = noop.useRef(null);
      const insets = sharedValue(sharedValue1[27])({ includeKeyboardHeight: true }).insets;
      const PX_16 = sharedValue(sharedValue1[28]).space.PX_16;
      const obj6 = { insets, inputs: null, scrollViewRef: null };
      const items = [
        { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } },
        { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } },
      ];
      const obj9 = { ref: ref3, offset: null };
      const obj10 = { type: "toValue", value: null };
      const obj5 = currentUser.currentUser(sharedValue1[26]);
      const obj7 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
      const obj8 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
      obj10.value = sharedValue(sharedValue1[28]).space.PX_64;
      obj9.offset = obj10;
      items[2] = obj9;
      obj6.inputs = items;
      obj6.scrollViewRef = ref;
      const onFocus = sharedValue(sharedValue1[29])(obj6).onFocus;
      const tmp14 = sharedValue(sharedValue1[30])();
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
      sharedValue(sharedValue1[31])();
      const tmp13 = sharedValue(sharedValue1[29]);
      const guildAutomodProfileQuarantineErrors = currentUser
        .currentUser(sharedValue1[32])
        .useGuildAutomodProfileQuarantineErrors();
      let str2 = str.id;
      const obj11 = currentUser.currentUser(sharedValue1[32]);
      if (str2 == null) {
        str2 = "";
      }
      const tmp17Result = sharedValue(sharedValue1[33])(str2);
      const tmp17 = sharedValue(sharedValue1[33]);
      const customStatusActivity = currentUser.currentUser(obj[34]).useCustomStatusActivity();
      const tmp4Result = currentUser.currentUser(obj[34]);
      const tmp4Result9 = currentUser.currentUser(obj[35]);
      const pendingAvatarSrc = currentUser
        .currentUser(obj[36])
        .getPendingAvatarSrc({ userId: currentUser.currentUser.id, image: pendingAvatar });
      const tmp20 = tmp(obj[37])(tmp17Result, pendingLegacyUsernameDisabled);
      noop = tmp20;
      const obj12 = { userId: currentUser.currentUser.id, image: pendingAvatar };
      const tmp4Result10 = currentUser.currentUser(obj[36]);
      isBadgeManagementEnabled = currentUser
        .currentUser(obj[38])
        .useIsBadgeManagementEnabled({ location: "UserProfileEditForm" });
      const tmp4Result11 = currentUser.currentUser(obj[38]);
      const items1 = [stateFromStoresArray];
      stateFromStores = currentUser
        .currentUser(obj[39])
        .useStateFromStores(items1, () => BadgeDirectoryStore.hasCatalogFor(str.id));
      const tmp4Result12 = currentUser.currentUser(obj[39]);
      const items2 = [stateFromStoresArray];
      stateFromStoresArray = currentUser
        .currentUser(obj[39])
        .useStateFromStoresArray(items2, () => BadgeDirectoryStore.getBadges(str.id));
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
      const memo = obj3.useMemo(
        () =>
          PendingBadgeSettings.getPendingProfileBadges(closure_5, stateFromStoresArray, {
            pendingBadgeDisplayOrder,
            pendingBadgeHiddenBadges,
          }),
        items4,
      );
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
      const tmp4Result13 = currentUser.currentUser(obj[39]);
      let result = tmp(obj[14]).canUsePremiumProfileCustomization(str);
      let tmp28 = !result;
      if (!result) {
        tmp28 = !tmp6;
      }
      const tmpResult = tmp(obj[14]);
      const enabled = currentUser.currentUser(obj[42]).useTryItOutMobileRefreshConfig("UserProfileEditForm").enabled;
      let tmp55Result10 = enabled;
      if (enabled) {
        tmp55Result10 = !result;
      }
      if (tmp55Result10) {
        tmp55Result10 = !isTryItOut;
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
      let tmp32 = pendingThemeColors;
      const tmp4Result14 = currentUser.currentUser(obj[42]);
      if (isTryItOut) {
        tmp32 = tryItOutThemeColors;
      }
      obj13.pendingThemeColors = tmp32;
      obj13.isPreview = isTryItOut;
      const tmpResult11 = tmp(obj[43]);
      ({ theme, primaryColor, secondaryColor } = tmp(obj[43])(obj13));
      const tmpResult1Result = tmp(obj[43])(obj13);
      const userProfileColors = currentUser
        .currentUser(obj[44])
        .useUserProfileColors({ theme, primaryColor, secondaryColor });
      ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
      let num = 0;
      if (tmp28) {
        num = 0;
        if (!tmp55Result10) {
          num = isScrolledAboveTryItOutSection;
        }
      }
      const sum = insets.bottom + num;
      const sum1 = sum + tmp(obj[28]).space.PX_16;
      const obj14 = { backgroundColor: userProfileColors.avatarBackground };
      const tmp38 = tmp(obj[45])(sharedValue, sum1);
      ProfileCustomizationNavigationStore = tmp38;
      isScrolledAboveTryItOutSection = tmp38.isScrolledAboveTryItOutSection;
      const tmp4Result15 = currentUser.currentUser(obj[44]);
      class Ce {
        constructor() {
          value = closure_10.get();
          if (value) {
            tmp2 = closure_2;
            value = !closure_2.get();
          }
          return value;
        }
      }
      Ce.__closure = { isScrolledAboveTryItOutSection, isBoardTabOnScreen: sharedValue1 };
      Ce.__workletHash = 11263005200863;
      Ce.__initData = __initData;
      const items6 = [sharedValue, tmp38];
      const derivedValue = currentUser.currentUser(obj[26]).useDerivedValue(Ce);
      let tmp41 = tmp55Result10;
      const callback = obj3.useCallback((nativeEvent) => {
        const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
        closure_9.onScroll(nativeEvent.nativeEvent);
      }, items6);
      if (!tmp55Result10) {
        tmp41 = flag;
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
          const intl = tmp4(obj[19]).intl;
          stringResult = intl.string(tmp4(obj[19]).t["84MExs"]);
        }
      }
      const field = ProfileCustomizationNavigationStore.useField("scrollPosition");
      maxLength = tmp(obj[46])(ref, field);
      let tmp49 = tmp55Result10;
      if (tmp55Result10) {
        tmp49 = flag;
      }
      const obj15 = { style: null, children: null };
      const items7 = [tmp3.formContainer, { backgroundColor: containerBackground }];
      obj15.style = items7;
      let tmp53 = null;
      if (null != stringResult) {
        tmp53 = null;
        if ("" !== stringResult) {
          const obj16 = { style: tmp3.errorContainer, children: null };
          const obj17 = { variant: "text-sm/bold", color: "text-feedback-critical", children: stringResult };
          obj16.children = closure_15(tmp4(obj[47]).Text, obj17);
          tmp53 = closure_15(tmp52, obj16);
        }
      }
      const items8 = [tmp53, , , , , , , , , , , , ,];
      const obj18 = {
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
      const tmp4Result16 = currentUser.currentUser(obj[26]);
      const intl2 = tmp4(obj[19]).intl;
      obj18.label = intl2.string(currentUser.currentUser(obj[19]).t["9AjdkD"]);
      obj18.errorMessage = first;
      let tmp57 = pendingGlobalName;
      if (pendingGlobalName == null) {
        tmp57 = str3;
      }
      obj18.value = tmp57;
      obj18.onFocus = onFocus;
      obj18.onChange = function onChange(globalName) {
        return str(sharedValue1[49]).setPendingChanges({ globalName });
      };
      obj18.placeholder = currentUser.currentUser.toString();
      obj18.maxLength = maxLength;
      obj18.disabled = isSubmitting;
      items8[1] = closure_15(tmp(obj[48]), obj18);
      let tmp55Result = result;
      if (!result) {
        tmp55Result = isTryItOut;
      }
      if (tmp55Result) {
        const obj19 = { user: str, isTryItOut };
        tmp55Result = closure_15(tmp(obj[50]), obj19);
      }
      items8[2] = tmp55Result;
      const obj20 = {
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
      const tmpResult12 = tmp(obj[48]);
      const intl3 = tmp4(obj[19]).intl;
      obj20.label = intl3.string(currentUser.currentUser(obj[19]).t["+T3RI/"]);
      obj20.errorMessage = first3;
      let tmp60 = pendingPronouns;
      if (pendingPronouns == null) {
        tmp60 = str4;
      }
      obj20.value = tmp60;
      obj20.onFocus = onFocus;
      obj20.onChange = function onChange(pronouns) {
        return str(sharedValue1[49]).setPendingChanges({ pronouns });
      };
      obj20.maxLength = maxLength2;
      obj20.disabled = isSubmitting;
      items8[3] = closure_15(tmp(obj[48]), obj20);
      let tmp55Result7 = !isTryItOut;
      if (!isTryItOut) {
        const obj21 = {
          badges: memo,
          catalogBadges: memo1,
          ownsAnyBadge: someResult,
          autoOpen: autoFocusElement === constants.BADGES,
        };
        tmp55Result7 = closure_15(tmp(obj[51]), obj21);
      }
      items8[4] = tmp55Result7;
      const obj22 = {
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
      const tmpResult13 = tmp(obj[48]);
      const intl4 = tmp4(obj[19]).intl;
      obj22.label = intl4.string(currentUser.currentUser(obj[19]).t.ZzAR2Y);
      obj22.errorMessage = first4;
      if (pendingBio == null) {
        pendingBio = str5;
      }
      obj22.value = pendingBio;
      obj22.onFocus = onFocus;
      obj22.onChange = function onChange(bio) {
        return str(sharedValue1[49]).setPendingChanges({ bio });
      };
      obj22.autoFocus = autoFocusElement === constants.BIO;
      obj22.maxLength = bioMaxLength;
      obj22.disabled = isSubmitting;
      items8[5] = closure_15(tmp(obj[48]), obj22);
      const obj23 = {
        user: currentUser.currentUser,
        onProfileThemeColorsChanged: null,
        pendingAvatarSrc: null,
        pendingThemeColors: null,
        isTryItOut: null,
      };
      const tmpResult14 = tmp(obj[48]);
      if (isTryItOut) {
        let fn = tmp4(obj[53]).setTryItOutThemeColors;
      } else {
        fn = (themeColors) => str(sharedValue1[49]).setPendingChanges({ themeColors });
      }
      obj23.onProfileThemeColorsChanged = fn;
      obj23.pendingAvatarSrc = pendingAvatarSrc;
      let tmp66 = pendingThemeColors;
      if (isTryItOut) {
        tmp66 = tryItOutThemeColors;
      }
      obj23.pendingThemeColors = tmp66;
      obj23.isTryItOut = isTryItOut;
      items8[6] = closure_15(tmp(obj[52]), obj23);
      const obj24 = { user: currentUser.currentUser, pendingAvatarDecoration: null, isTryItOut: null };
      const tmpResult15 = tmp(obj[52]);
      if (isTryItOut) {
        pendingAvatarDecoration = tryItOutAvatarDecoration;
      }
      obj24.pendingAvatarDecoration = pendingAvatarDecoration;
      obj24.isTryItOut = isTryItOut;
      items8[7] = closure_15(tmp(obj[54]), obj24);
      const obj25 = {
        user: currentUser.currentUser,
        pendingProfileEffect: null,
        displayProfile: null,
        isTryItOut: null,
      };
      const tmpResult16 = tmp(obj[54]);
      if (isTryItOut) {
        pendingProfileEffect = tryItOutProfileEffect;
      }
      let tmp55Result8 = "profile" === tmp4Result9.useCustomTypingIndicatorConfig("UserProfileEditForm").entryPoint;
      obj25.pendingProfileEffect = pendingProfileEffect;
      obj25.displayProfile = tmp17Result;
      obj25.isTryItOut = isTryItOut;
      items8[8] = closure_15(tmp(obj[55]), obj25);
      items8[9] = closure_15(tmp(obj[56]), {
        user: currentUser.currentUser,
        pendingProfileFrame,
        displayProfile: tmp17Result,
      });
      items8[10] = closure_15(tmp(obj[57]), { user: currentUser.currentUser, pendingNameplate });
      if (tmp55Result8) {
        if (!result) {
          result = isTryItOut;
        }
        tmp55Result8 = result;
      }
      if (tmp55Result8) {
        const obj26 = { isTryItOut };
        tmp55Result8 = closure_15(tmp(obj[58]), obj26);
      }
      items8[11] = tmp55Result8;
      const obj27 = {
        ref(arg0) {
          return closure_11(constants.GUILD_TAG, arg0);
        },
        children: closure_15(tmp(obj[59]), {
          user: currentUser.currentUser,
          disabled: isSubmitting,
          tagStyle: { backgroundColor: containerBackground },
          pendingPrimaryGuildId,
        }),
      };
      items8[12] = closure_15(stateFromStores, obj27);
      let tmp55Result9 = null != legacyUsername && !isBadgeManagementEnabled;
      if (tmp55Result9) {
        const obj29 = { legacyUsername, pendingLegacyUsernameDisabled };
        tmp55Result9 = closure_15(tmp(obj[60]), obj29);
      }
      items8[13] = tmp55Result9;
      obj15.children = items8;
      const items9 = [closure_16(stateFromStores, obj15)];
      if (tmp55Result10) {
        const obj30 = {
          currentUser: str,
          onLayout: tmp38.onTryItOutSectionLayout,
          onPreviewPremium() {
            return str(sharedValue1[62]).openPremiumTryItOutModal();
          },
        };
        tmp55Result10 = closure_15(tmp(obj[61]), obj30);
      }
      items9[1] = tmp55Result10;
      const tmp50Result = closure_16(closure_17, { children: items9 });
      const obj31 = { theme, primaryColor, secondaryColor, children: null };
      const obj32 = { style: null, children: null };
      const items10 = [tmp3.container, { backgroundColor: gradientSecondaryBackground }];
      obj32.style = items10;
      const obj33 = {
        ref,
        onScroll: null,
        onContentSizeChange: null,
        onLayout: null,
        scrollEventThrottle: null,
        children: null,
      };
      let tmp73;
      if (tmp41) {
        tmp73 = callback;
      }
      obj33.onScroll = tmp73;
      let onContentSizeChange;
      if (tmp49) {
        onContentSizeChange = tmp38.onContentSizeChange;
      }
      obj33.onContentSizeChange = onContentSizeChange;
      let onScrollViewLayout;
      if (tmp49) {
        onScrollViewLayout = tmp38.onScrollViewLayout;
      }
      obj33.onLayout = onScrollViewLayout;
      let num2;
      if (tmp41) {
        num2 = 16;
      }
      obj33.scrollEventThrottle = num2;
      const items11 = [closure_15(stateFromStores, { style: tmp3.bounceOffset })];
      const obj35 = {
        fallbackBackground: gradientFallbackBackground,
        primaryColor,
        secondaryColor,
        containerStyle: { backgroundColor: gradientSecondaryBackground },
        children: null,
      };
      const obj28 = {
        user: currentUser.currentUser,
        disabled: isSubmitting,
        tagStyle: { backgroundColor: containerBackground },
        pendingPrimaryGuildId,
      };
      const obj34 = { style: tmp3.bounceOffset };
      const tmp72 = isBadgeManagementEnabled;
      const tmpResult17 = tmp(obj[55]);
      const items12 = [
        closure_15(closure_19, {
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
      const obj36 = {
        style: null,
        children: closure_15(tmp(obj[65]), {
          user: currentUser.currentUser,
          disabled: isSubmitting,
          disableStatus: null != isTryItOut,
          statusStyle: obj14,
          isTryItOut,
          autoStartEditFlow: autoFocusElement === constants.AVATAR,
        }),
      };
      const items13 = [, , ,];
      ({ avatarBackground: arr14[0], avatarPosition: arr14[1] } = tmp2);
      items13[2] = tmp3.avatarContainer;
      items13[3] = obj14;
      obj36.style = items13;
      const items14 = [closure_15(stateFromStores, obj36)];
      const obj38 = {
        fallbackBackground: gradientFallbackBackground,
        primaryColor,
        secondaryColor,
        containerStyle: null,
        children: null,
      };
      const items15 = [, ,];
      ({ profileContentWrapper: arr16[0], profileContent: arr16[1] } = tmp2);
      items15[2] = { paddingTop: 0, paddingBottom: sum1 };
      obj38.containerStyle = items15;
      const obj37 = {
        user: currentUser.currentUser,
        disabled: isSubmitting,
        disableStatus: null != isTryItOut,
        statusStyle: obj14,
        isTryItOut,
        autoStartEditFlow: autoFocusElement === constants.AVATAR,
      };
      const tmpResult18 = tmp(obj[64]);
      const items16 = [
        closure_15(tmp(obj[66]), {
          customStatusActivity,
          hasCustomProfileTheme: null != primaryColor,
          style: tmp2.customStatusBubble,
          emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble,
          editEnabled: true,
        }),
        ,
      ];
      const obj40 = {
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
      const obj39 = {
        customStatusActivity,
        hasCustomProfileTheme: null != primaryColor,
        style: tmp2.customStatusBubble,
        emojiOnlyStyle: tmp2.emojiOnlyCustomStatusBubble,
        editEnabled: true,
      };
      const tmpResult19 = tmp(obj[64]);
      if (pendingPronouns == null) {
        pendingPronouns = str4;
      }
      obj40.pronouns = pendingPronouns;
      obj40.badgeContainerBackground = containerBackground;
      obj40.canOpenBadgeDirectory = !isTryItOut;
      if (isTryItOut) {
        pendingDisplayNameStyles = tryItOutDisplayNameStyles;
      }
      obj40.pendingDisplayNameStyles = pendingDisplayNameStyles;
      items16[1] = closure_15(tmp(obj[67]), obj40);
      let tmp55Result11 = tmp50Result;
      if (flag) {
        const obj41 = { value: tmp50Result, children: null };
        const obj42 = {
          userId: str.id,
          containerBackground,
          hasCustomProfileTheme: tmp34,
          scrollPosition: sharedValue,
          scrollViewRef: ref,
          isBoardTabOnScreen: sharedValue1,
        };
        obj41.children = closure_15(tmp(obj[69]), obj42);
        tmp55Result11 = closure_15(tmp(obj[68]).Provider, obj41);
      }
      const obj43 = { children: null };
      items16[2] = tmp55Result11;
      obj38.children = items16;
      items14[1] = closure_16(tmpResult19, obj38);
      obj43.children = items14;
      items12[1] = closure_16(stateFromStores, obj43);
      obj35.children = items12;
      items11[1] = closure_16(tmpResult18, obj35);
      obj33.children = items11;
      const items17 = [closure_16(tmp72, obj33)];
      if (!tmp28) {
        items17[1] = tmp28;
        obj32.children = items17;
        obj31.children = closure_16(tmp52, obj32);
        return closure_15(tmp4(obj[63]).ThemeContextProvider, obj31);
      } else if (enabled) {
        tmp = tmp(obj[70]);
        obj = {
          isVisible: derivedValue,
          onPreviewPremium() {
            return str(sharedValue1[62]).openPremiumTryItOutModal();
          },
        };
        let tmp55Result12 = closure_15(tmp, obj);
      } else {
        const obj44 = { isTryItOut };
        tmp55Result12 = closure_15(tmp4(obj[71]).UserProfilePremiumUpsellCard, obj44);
      }
      const tmpResult20 = tmp(obj[67]);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileEditForm(isTryItOut) {
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
        let tmp8Result = value2(closure_23, obj2);
      } else {
        const obj3 = {};
        const merged1 = Object.assign(tmp2);
        tmp8Result = value2(closure_20, obj3);
      }
      cResult[3] = undefined !== tmp3 && tmp3;
      cResult[4] = tmp2;
      cResult[5] = tmp8Result;
    }
  : function UserProfileEditForm(isTryItOut) {
      let flag = isTryItOut.isTryItOut;
      if (flag === undefined) {
        flag = false;
      }
      const merged = Object.assign(isTryItOut, Object.assign({ isTryItOut: 0 }));
      if (flag) {
        const obj2 = {};
        const merged1 = Object.assign(merged);
        obj2.isTryItOut = true;
        let tmp2Result = value2(closure_23, obj2);
      } else {
        obj = {};
        const merged2 = Object.assign(merged);
        tmp2Result = value2(closure_20, obj);
      }
      return tmp2Result;
    };
