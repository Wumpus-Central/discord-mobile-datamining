// === Module 13007: ProductDetailsActionSheetPurchaseSection ===

// Module 13007 (ProductDetailsActionSheetPurchaseSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import OrbsIcon from "OrbsIcon" /* 8524 */;
import openGiftModal from "openGiftModal" /* 10756 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 10826 */;
import MainTabsConstants from "MainTabsConstants" /* 10833 */;
import UnlockWithNitroButton from "UnlockWithNitroButton" /* 13017 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7081 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, navigation;

let c10;
let c9;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
function VCButton(balance) {
  let BaseTextButton;
  let canAfford;
  let intl2;
  let modalKey;
  let obj6;
  let obj8;
  let orbsButtonText;
  let price;
  let stageCollectibleChangeForEditProfile;
  let str2;
  balance = balance.balance;
  const product = balance.product;
  importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: dependencyMap, stageCollectibleChangeForEditProfile } = balance);
  navigation = undefined;
  let analyticsLocations;
  let closure_7;
  let color;
  let str;
  const tmp = closure_17();
  react = tmp;
  let obj = balance(13005);
  const virtualCurrencyData = obj.useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj2 = balance(8564);
  let isDisabled = obj2.useProductDisableState(product.skuId).isDisabled;
  let obj3 = balance(8529);
  const isPartiallyOwnedBundle = obj3.useProductPurchaseState(product).isPartiallyOwnedBundle;
  if (!isDisabled) {
    isDisabled = !canAfford;
  }
  if (!isDisabled) {
    isDisabled = isPartiallyOwnedBundle;
  }
  const tmp2Result = balance(1490);
  navigation = tmp2Result.useNavigation();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations, stageCollectibleChangeForEditProfile];
  closure_7 = react.useCallback(() => {
    let constants3;
    let orbBalancePriorToPurchase;
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    let obj2 = ModalActionCreatorsDefault;
    let obj3 = {
      skuId: importDefault.skuId,
      analyticsLocations,
      onCheckoutSuccess(entitlements) {
        let flag;
        entitlements = entitlements.entitlements;
        let obj = balance(dependencyMap[26]);
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
        const obj2 = ModalActionCreatorsDefault;
        obj2.popWithKey(ORB_CHECKOUT_MODAL);
        if (product.skuId === constants.ORB_PROFILE_BADGE) {
          const obj3 = {
            modalKey,
            onPressViewBadge() {
                return navigation.navigate(constants3.YOU, { showOrbsBadgeCoachmark: true });
              },
            orbBalancePriorToPurchase
          };
          const tmp4Result = ModalActionCreatorsDefault;
          tmp4Result.pushLazy(balance(dependencyMap[25])(dependencyMap[27], dependencyMap.paths), obj3, modalKey);
        } else {
          const ALL = balance(dependencyMap[28]).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(product.skuId)) {
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            const first = entitlements[0];
            const obj4 = {
              skuId: product.skuId,
              consumed: flag,
              onPressExplorePerks() {
                    navigation.navigate(constants2.PREMIUM);
                    const obj = product(closure_2_2[14]);
                    obj.hideActionSheet();
                  },
              onPressViewCredits() {
                    navigation.navigate(constants2.PREMIUM_MANAGE_PLAN);
                    const obj = product(closure_2_2[14]);
                    obj.hideActionSheet();
                  }
            };
            flag = undefined;
            ActionSheetActionCreatorsDefault;
            const tmp11 = balance(dependencyMap[25])(dependencyMap[29], dependencyMap.paths);
            if (first != null) {
              flag = first.consumed;
            }
            if (flag == null) {
              flag = false;
            }
            openLazy(tmp11, "FractionalNitroCollectedActionSheet", obj4);
          } else {
            const obj5 = { product, useCategoryImage: true, showOrbBalancePill: true, orbBalancePriorToPurchase, stageCollectibleChangeForEditProfile };
            const tmp4Result4 = ProductPurchaseSuccessActionCreatorsDefault;
            tmp4Result4.open(obj5);
          }
        }
      }
    };
    obj2.pushLazy(asyncRequire(13008, dependencyMap.paths), obj3, ORB_CHECKOUT_MODAL);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = nativeDefault.colors;
    color = isDisabled ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    str = "text-overlay-light";
    if (isDisabled) {
      str = "interactive-text-active";
    }
    const intl = tmp2(1126).intl;
    let obj4 = {
      orbPrice: price.amount,
      orbIconHook() {
          const obj = { size: "sm", color };
          return map1(OrbsIcon.OrbsIcon, obj, "orbs-icon");
        }
    };
    const formatResult = intl.format(balance(1126).t.JC15qj, obj4);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    let obj5 = {
      style: tmp.orbsButtonLabel,
      accessibilityLabel: intl2.formatToPlainString(balance(1126).t.yi41qQ, obj6),
      children: arr2.map((children, index) => {
          let tmp7;
          if (typeof children === "string") {
            const obj = { style: orbsButtonText.orbsButtonText, variant: "text-md/semibold", color: str, children };
            tmp7 = map1(Text_Text.Text, obj, index);
          } else {
            tmp7 = children;
          }
          return tmp7;
        })
    };
    intl2 = tmp2(1126).intl;
    obj6 = { orbPrice: price.amount };
    const obj7 = { style: tmp.buttonContainer, children: closure_13(BaseTextButton, obj8) };
    let tmp11 = closure_13(navigation, obj5);
    obj8 = {
      loading: false,
      textElement: tmp11,
      onPress() {
          if (dependencyMap != null) {
            tmp(metroImportAll.BUY_WITH_ORBS);
          }
          closure_7();
        },
      disabled: isDisabled,
      size: "lg",
      variant: str2,
      grow: true
    };
    str2 = "primary";
    BaseTextButton = tmp2(5602).BaseTextButton;
    const tmp10 = navigation;
    if (isDisabled) {
      str2 = "secondary";
    }
    return closure_13(tmp10, obj7);
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ EXTERNAL_PRODUCT_SKU_IDS: metroImportDefault, ShopCtaEnum: metroImportAll } = CollectiblesShopConstants);
({ MarketingURLs: c9, UserSettingsSections: c10 } = Constants);
const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
let PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: map1, jsxs: closure_14 } = Fragment);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
let createStyles = createStyles_mod;
let obj = { container: obj2, purchaseSection: obj3, disclaimer: { opacity: 0.75 }, buttonContainer: obj4, orbsButtonLabel: { flexDirection: "row", alignItems: "center" }, orbsButtonText: { flexShrink: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let TEXT_STRONG;
  let onTrackPress;
  let tmp6;
  let variant;
  const tmp = require;
  let obj = require("react");
  const cResult = obj.c(11);
  product = product.product;
  require = product;
  const analyticsLocations = product.analyticsLocations;
  ({ variant, onTrackPress } = product);
  let str = "primary";
  if (undefined !== variant) {
    str = variant;
  }
  if ("primary" === str) {
    TEXT_STRONG = analyticsLocations(onTrackPress[10]).colors.WHITE;
  } else {
    TEXT_STRONG = analyticsLocations(onTrackPress[10]).colors.TEXT_STRONG;
  }
  if (cResult[0] !== TEXT_STRONG) {
    let obj2 = { size: "md", color: TEXT_STRONG };
    const tmp8 = closure_13(tmp(onTrackPress[13]).GiftIcon, obj2);
    cResult[0] = TEXT_STRONG;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === onTrackPress) {
      let tmp9;
      let tmp11;
      if (cResult[4] === product.skuId) {
        tmp9 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(onTrackPress[16]).intl;
        const stringResult = intl.string(tmp(onTrackPress[16]).t.PEjaCx);
        cResult[6] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] === tmp6) {
        if (cResult[8] === tmp9) {
          let tmp13;
          if (cResult[9] === str) {
            tmp13 = cResult[10];
          }
          return tmp13;
        }
      }
      let obj3 = { size: "lg", variant: str, icon: tmp6, onPress: tmp9, accessibilityLabel: tmp11 };
      const tmp15 = closure_13(tmp(onTrackPress[17]).IconButton, obj3);
      cResult[7] = tmp6;
      cResult[8] = tmp9;
      cResult[9] = str;
      cResult[10] = tmp15;
      tmp13 = tmp15;
    }
  }
  const fn = function n() {
    if (onTrackPress != null) {
      tmp(metroImportAll.SEND_AS_GIFT);
    }
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    const obj2 = openGiftModal;
    const obj3 = { skuId: require.skuId, analyticsLocations };
    obj2.openShopGiftModal(obj3);
  };
  cResult[2] = analyticsLocations;
  cResult[3] = onTrackPress;
  cResult[4] = product.skuId;
  cResult[5] = fn;
  tmp9 = fn;
}) : ((onTrackPress) => {
  let GiftIcon;
  let TEXT_STRONG;
  let analyticsLocations;
  let intl;
  let skuId;
  let variant;
  ({ product: require, analyticsLocations: importDefault, variant } = onTrackPress);
  if (variant === undefined) {
    variant = "primary";
  }
  onTrackPress = onTrackPress.onTrackPress;
  let obj = {
    size: "lg",
    variant,
    icon: closure_13(GiftIcon, { size: "md", color: TEXT_STRONG }),
    onPress() {
      if (onTrackPress != null) {
        tmp(metroImportAll.SEND_AS_GIFT);
      }
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      const obj2 = openGiftModal;
      const obj3 = { skuId: require.skuId, analyticsLocations: importDefault };
      obj2.openShopGiftModal(obj3);
    },
    accessibilityLabel: intl.string(require("intl").t.PEjaCx)
  };
  const IconButton = require("IconButton").IconButton;
  GiftIcon = require("GiftIcon").GiftIcon;
  if ("primary" === variant) {
    TEXT_STRONG = require("native").colors.WHITE;
  } else {
    TEXT_STRONG = require("native").colors.TEXT_STRONG;
  }
  intl = require("intl").intl;
  return closure_13(IconButton, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let buyButtonLabel;
  let product;
  const obj = react2;
  const cResult = obj.c(6);
  ({ product, buyButtonLabel } = arg0);
  const tmp4 = closure_17();
  if (cResult[0] === buyButtonLabel) {
    let tmp5;
    if (cResult[1] === product.type) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.disclaimer) {
      let tmp8;
      if (cResult[4] === tmp5) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
    const obj2 = { style: tmp4.disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: tmp5 };
    const tmp10 = map1(Text_Text.Text, obj2);
    cResult[3] = tmp4.disclaimer;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  let formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = intl10.intl;
    const obj3 = { buyButtonLabel, paidServiceTermURL: constants2.PAID_TERMS };
    formatResult = intl.format(intl10.t.iIglwJ, obj3);
  }
  cResult[0] = buyButtonLabel;
  cResult[1] = product.type;
  cResult[2] = formatResult;
  tmp5 = formatResult;
}) : ((arg0) => {
  let buyButtonLabel;
  let formatResult;
  let product;
  ({ product, buyButtonLabel } = arg0);
  const obj = { style: closure_17().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: formatResult };
  const Text = Text_Text.Text;
  formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = intl10.intl;
    const obj2 = { buyButtonLabel, paidServiceTermURL: constants2.PAID_TERMS };
    formatResult = intl.format(intl10.t.iIglwJ, obj2);
  }
  return map1(Text, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let canUseNow;
  let first;
  let isBuying;
  let tmp10;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp20;
  let tmp9;
  const tmp = require;
  let obj = require("react");
  const cResult = obj.c(57);
  product = product.product;
  require = product;
  const analyticsLocations = product.analyticsLocations;
  isBuying = product.isBuying;
  const onStartPurchase = product.onStartPurchase;
  const onTrackPress = product.onTrackPress;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  const tmp4 = canUseNow();
  let closure_6 = tmp4;
  let obj2 = require("useCurrentUser");
  const currentUser = obj2.useCurrentUser();
  let obj3 = require("useProductPurchaseState");
  const productPurchaseState = obj3.useProductPurchaseState(product);
  const isPurchased = productPurchaseState.isPurchased;
  const isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [closure_6];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== product.skuId) {
    const fn = function c() {
      const items = [CollectiblesPurchaseStore.isClaiming === require.skuId];
      return items;
    };
    cResult[1] = product.skuId;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== product) {
    let items1 = [product];
    cResult[3] = product;
    cResult[4] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = tmp(tmp2[36]);
  const first1 = onStartPurchase(tmpResult.useStateFromStoresArray(first, tmp9, tmp10), 1)[0];
  const tmpResult10 = tmp(isBuying[37]);
  const isPremiumSubscriber = tmpResult10.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  if (cResult[5] !== currentUser) {
    let obj6 = analyticsLocations(tmp2[38]);
    const canUseShopDiscountsResult = obj6.canUseShopDiscounts(currentUser);
    cResult[5] = currentUser;
    cResult[6] = canUseShopDiscountsResult;
    tmp13 = canUseShopDiscountsResult;
  } else {
    tmp13 = cResult[6];
  }
  const hasShopDiscount = tmp13;
  if (cResult[7] !== product) {
    const tmpResult11 = tmp(isBuying[39]);
    const result = tmpResult11.isPremiumCollectiblesProduct(product);
    cResult[7] = product;
    cResult[8] = result;
    tmp16 = result;
  } else {
    tmp16 = cResult[8];
  }
  if (cResult[9] !== product) {
    const tmpResult12 = tmp(isBuying[39]);
    const result1 = tmpResult12.isFreeCollectiblesProduct(product);
    cResult[9] = product;
    cResult[10] = result1;
    tmp18 = result1;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] !== product) {
    const tmpResult13 = tmp(isBuying[40]);
    const result2 = tmpResult13.isOrbsExclusiveProduct(product);
    cResult[11] = product;
    cResult[12] = result2;
    tmp20 = result2;
  } else {
    tmp20 = cResult[12];
  }
  let closure_11 = tmp20;
  let tmp22 = tmp18;
  if (!tmp22) {
    tmp22 = tmp16 && isPremiumSubscriber;
  }
  PremiumTypes = tmp22;
  const tmpResult14 = tmp(isBuying[41]);
  const balance = tmpResult14.useFetchVirtualCurrencyBalance().balance;
  const tmpResult15 = tmp(isBuying[18]);
  const canAfford = tmpResult15.useVirtualCurrencyData(product, tmp13).canAfford;
  if (cResult[13] === analyticsLocations) {
    if (cResult[14] === product) {
      let tmp24;
      if (cResult[15] === stageCollectibleChangeForEditProfile) {
        tmp24 = cResult[16];
      }
      const tmpResult16 = tmp(isBuying[42]);
      const handleUseNow1 = tmpResult16.useHandleUseNow(tmp24);
      const handleUseNow = handleUseNow1.handleUseNow;
      const isApplying = handleUseNow1.isApplying;
      canUseNow = handleUseNow1.canUseNow;
      const handleEditProfile = handleUseNow1.handleEditProfile;
      if (cResult[17] === product) {
        let tmp26;
        let tmp29;
        if (cResult[18] === stageCollectibleChangeForEditProfile) {
          tmp26 = cResult[19];
        }
        const tmpResult17 = tmp(isBuying[43]);
        const handleClaim = tmpResult17.useHandleClaim(tmp26).handleClaim;
        if (tmp16) {
          tmp16 = !isPremiumSubscriber;
        }
        if (tmp16) {
          tmp16 = !tmp18;
        }
        closure_20 = tmp16;
        const tmpResult18 = tmp(isBuying[44]);
        const canGiftProduct = tmpResult18.useCanGiftProduct(product);
        let PX_16 = analyticsLocations(tmp2[45])().bottom;
        const tmp28 = analyticsLocations;
        if (cResult[20] !== product.type) {
          function ee() {
            let stringResult;
            if (require.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
              const intl6 = intl10.intl;
              stringResult = intl6.string(intl10.t.V1AWw0);
            } else if (require.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
              const intl5 = intl10.intl;
              stringResult = intl5.string(intl10.t.kAeDcK);
            } else if (require.type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
              const intl4 = intl10.intl;
              stringResult = intl4.string(intl10.t.H3vhqU);
            } else if (require.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
              const intl3 = intl10.intl;
              stringResult = intl3.string(intl10.t.AQ0Veg);
            } else if (require.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
              const intl2 = intl10.intl;
              stringResult = intl2.string(intl10.t.BlSW1e);
            } else {
              const intl = intl10.intl;
              stringResult = intl.string(intl10.t.AQ0Veg);
            }
            return stringResult;
          }
          cResult[20] = product.type;
          cResult[21] = ee;
          tmp29 = ee;
        } else {
          tmp29 = cResult[21];
        }
        let closure_22 = tmp29;
        if (cResult[22] === analyticsLocations) {
          if (cResult[23] === balance) {
            if (cResult[24] === tmp22) {
              if (cResult[25] === canAfford) {
                if (cResult[26] === canUseNow) {
                  if (cResult[27] === tmp29) {
                    if (cResult[28] === handleClaim) {
                      if (cResult[29] === handleEditProfile) {
                        if (cResult[30] === handleUseNow) {
                          if (cResult[31] === tmp13) {
                            if (cResult[32] === isApplying) {
                              if (cResult[33] === isBuying) {
                                if (cResult[34] === first1) {
                                  if (cResult[35] === canGiftProduct) {
                                    if (cResult[36] === tmp20) {
                                      if (cResult[37] === isPartiallyOwnedBundle) {
                                        if (cResult[38] === isPurchased) {
                                          if (cResult[39] === onStartPurchase) {
                                            if (cResult[40] === onTrackPress) {
                                              if (cResult[41] === product) {
                                                if (cResult[42] === tmp16) {
                                                  if (cResult[43] === stageCollectibleChangeForEditProfile) {
                                                    if (cResult[44] === tmp4.buttonContainer) {
                                                      let tmp30;
                                                      let tmp32;
                                                      if (cResult[45] === tmp4.purchaseSection) {
                                                        tmp30 = cResult[46];
                                                      }
                                                      if (PX_16 == null) {
                                                        PX_16 = tmp28(tmp2[10]).space.PX_16;
                                                      }
                                                      if (cResult[47] !== PX_16) {
                                                        let obj4 = { paddingBottom: PX_16 };
                                                        cResult[47] = PX_16;
                                                        cResult[48] = obj4;
                                                        tmp32 = obj4;
                                                      } else {
                                                        tmp32 = cResult[48];
                                                      }
                                                      if (cResult[49] === tmp4.container) {
                                                        let tmp33;
                                                        let tmp34;
                                                        if (cResult[50] === tmp32) {
                                                          tmp33 = cResult[51];
                                                        }
                                                        if (cResult[52] !== tmp30) {
                                                          const tmp30Result = tmp30();
                                                          cResult[52] = tmp30;
                                                          cResult[53] = tmp30Result;
                                                          tmp34 = tmp30Result;
                                                        } else {
                                                          tmp34 = cResult[53];
                                                        }
                                                        if (cResult[54] === tmp33) {
                                                          let tmp36;
                                                          if (cResult[55] === tmp34) {
                                                            tmp36 = cResult[56];
                                                          }
                                                          return tmp36;
                                                        }
                                                        let obj5 = { style: tmp33, children: tmp34 };
                                                        const tmp39 = balance(stageCollectibleChangeForEditProfile, obj5);
                                                        cResult[54] = tmp33;
                                                        cResult[55] = tmp34;
                                                        cResult[56] = tmp39;
                                                        tmp36 = tmp39;
                                                      }
                                                      let items2 = [tmp4.container, tmp32];
                                                      cResult[49] = tmp4.container;
                                                      cResult[50] = tmp32;
                                                      cResult[51] = items2;
                                                      tmp33 = items2;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        function ne() {
          let intl;
          let intl2;
          let intl3;
          let items;
          let items1;
          let items2;
          let str2;
          let tmp25;
          if (isPurchased) {
            let tmp60Result = require.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
            if (tmp60Result) {
              let obj4;
              const obj2 = { style: closure_6.buttonContainer, children: items };
              const Button3 = components_Button_Button.Button;
              if (canUseNow) {
                const obj3 = {
                  loading: isApplying,
                  text: intl3.string(intl10.t.MAS7uK),
                  onPress() {
                          if (onTrackPress != null) {
                            tmp(isPartiallyOwnedBundle.USE_NOW);
                          }
                          handleUseNow();
                        },
                  size: "lg",
                  grow: true
                };
                intl3 = intl10.intl;
                obj4 = obj3;
              } else {
                obj4 = {
                  text: intl2.string(intl10.t["2p2aYz"]),
                  onPress() {
                          if (onTrackPress != null) {
                            tmp(isPartiallyOwnedBundle.EDIT_PROFILE);
                          }
                          handleEditProfile();
                        },
                  size: "lg",
                  grow: true
                };
                intl2 = intl10.intl;
              }
              items = [map1(Button3, obj4), ];
              let tmp76 = canGiftProduct;
              if (tmp76) {
                const obj5 = { product: require, analyticsLocations, onTrackPress };
                tmp76 = map1(closure_18, obj5);
              }
              items[1] = tmp76;
              tmp60Result = authStore2(View, obj2);
            }
            return tmp60Result;
          } else if (closure_20) {
            const obj6 = { onTrackPress };
            return map1(UnlockWithNitroButton.UnlockWithNitroButton, obj6);
          } else if (closure_12) {
            const obj7 = {
              text: intl.string(intl10.t.zp6caO),
              loading: first1,
              onPress() {
                  if (onTrackPress != null) {
                    tmp(isPartiallyOwnedBundle.ADD_TO_COLLECTION);
                  }
                  handleClaim();
                },
              size: "lg",
              grow: true
            };
            const Button2 = components_Button_Button.Button;
            intl = intl10.intl;
            return map1(Button2, obj7);
          } else {
            const tmp5 = closure_22();
            let tmp10 = canAfford;
            const obj = { style: closure_6.purchaseSection, children: items1 };
            if (tmp10) {
              const obj8 = { product: require, hasShopDiscount, balance, onTrackPress, stageCollectibleChangeForEditProfile };
              tmp10 = map1(VCButton, obj8);
            }
            items1 = [tmp10, , , ];
            let tmp20Result = !closure_11;
            if (tmp20Result) {
              const obj10 = {
                loading: isBuying,
                text: tmp5,
                onPress() {
                      if (onTrackPress != null) {
                        tmp(isPartiallyOwnedBundle.BUY_WITH_FIAT);
                      }
                      onStartPurchase();
                    },
                disabled: tmp25,
                variant: str2,
                size: "lg",
                grow: true
              };
              tmp25 = isPartiallyOwnedBundle;
              const obj9 = { style: closure_6.buttonContainer, children: items2 };
              const Button = components_Button_Button.Button;
              if (!isPartiallyOwnedBundle) {
                tmp25 = isBuying;
              }
              let str = "primary";
              str2 = "primary";
              if (canAfford) {
                str2 = "secondary";
              }
              items2 = [map1(Button, obj10), ];
              let tmp27Result = canGiftProduct;
              if (tmp27Result) {
                const obj11 = { product: require, analyticsLocations, variant: str, onTrackPress };
                if (canAfford) {
                  str = "secondary";
                }
                tmp27Result = map1(closure_18, obj11);
              }
              items2[1] = tmp27Result;
              tmp20Result = authStore2(View, obj9);
            }
            items1[1] = tmp20Result;
            let tmp32 = !canAfford;
            if (tmp32) {
              const obj12 = { product: require, hasShopDiscount, balance, onTrackPress, stageCollectibleChangeForEditProfile };
              tmp32 = map1(VCButton, obj12);
            }
            items1[2] = tmp32;
            let tmp40 = !closure_11;
            if (tmp40) {
              const obj13 = { product: require, buyButtonLabel: tmp5 };
              tmp40 = map1(closure_20, obj13);
            }
            items1[3] = tmp40;
            return authStore2(View, obj);
          }
        }
        cResult[22] = analyticsLocations;
        cResult[23] = balance;
        cResult[24] = tmp22;
        cResult[25] = canAfford;
        cResult[26] = canUseNow;
        cResult[27] = tmp29;
        cResult[28] = handleClaim;
        cResult[29] = handleEditProfile;
        cResult[30] = handleUseNow;
        cResult[31] = tmp13;
        cResult[32] = isApplying;
        cResult[33] = isBuying;
        cResult[34] = first1;
        cResult[35] = canGiftProduct;
        cResult[36] = tmp20;
        cResult[37] = isPartiallyOwnedBundle;
        cResult[38] = isPurchased;
        cResult[39] = onStartPurchase;
        cResult[40] = onTrackPress;
        cResult[41] = product;
        cResult[42] = tmp16;
        cResult[43] = stageCollectibleChangeForEditProfile;
        cResult[44] = tmp4.buttonContainer;
        cResult[45] = tmp4.purchaseSection;
        cResult[46] = ne;
        tmp30 = ne;
      }
      let obj7 = { product, stageCollectibleChangeForEditProfile };
      cResult[17] = product;
      cResult[18] = stageCollectibleChangeForEditProfile;
      cResult[19] = obj7;
      tmp26 = obj7;
    }
  }
  let obj8 = { product, analyticsLocations, stageCollectibleChangeForEditProfile };
  cResult[13] = analyticsLocations;
  cResult[14] = product;
  cResult[15] = stageCollectibleChangeForEditProfile;
  cResult[16] = obj8;
  tmp24 = obj8;
}) : ((product) => {
  let _undefined;
  let _undefined2;
  let analyticsLocations;
  let c3;
  let c4;
  let canUseNow;
  let intl7;
  let intl8;
  let intl9;
  let isApplying;
  let isBuying;
  let isPartiallyOwnedBundle;
  let isPurchased;
  let items3;
  let items4;
  let items5;
  let onTrackPress;
  let str2;
  let tmp19Result1;
  product = product.product;
  require = product;
  ({ analyticsLocations, isBuying, onStartPurchase: importDefault, onTrackPress } = product);
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  _slicedToArray = undefined;
  c4 = undefined;
  const tmp = closure_17();
  const obj = require("useCurrentUser");
  const currentUser = obj.useCurrentUser();
  const obj2 = require("useProductPurchaseState");
  const productPurchaseState = obj2.useProductPurchaseState(product);
  ({ isPartiallyOwnedBundle, isPurchased } = productPurchaseState);
  let items = [CollectiblesPurchaseStore];
  const items1 = [product];
  const obj3 = require("get initialized");
  const first = _slicedToArray(obj3.useStateFromStoresArray(items, () => {
    const items = [CollectiblesPurchaseStore.isClaiming === require.skuId];
    return items;
  }, items1), 1)[0];
  const obj4 = require("useIsPremiumSubscriber");
  const isPremiumSubscriber = obj4.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const obj5 = require("PremiumUtils");
  const canUseShopDiscountsResult = obj5.canUseShopDiscounts(currentUser);
  const obj6 = require("CollectiblesUtils");
  const result = obj6.isPremiumCollectiblesProduct(product);
  const obj7 = require("CollectiblesUtils");
  const result1 = obj7.isFreeCollectiblesProduct(product);
  const obj8 = require("CollectiblesProductUtils");
  const result2 = obj8.isOrbsExclusiveProduct(product);
  const obj9 = require("module_8541");
  const balance = obj9.useFetchVirtualCurrencyBalance().balance;
  const obj10 = require("useVirtualCurrencyData");
  const canAfford = obj10.useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  const obj11 = require("useHandleUseNow");
  const handleUseNow = obj11.useHandleUseNow({ product, analyticsLocations, stageCollectibleChangeForEditProfile });
  ({ handleUseNow: c3, handleEditProfile: c4, isApplying, canUseNow } = handleUseNow);
  const obj12 = require("useHandleClaim");
  const handleClaim = obj12.useHandleClaim({ product, stageCollectibleChangeForEditProfile }).handleClaim;
  const obj13 = require("useCanGiftProduct");
  let canGiftProduct = obj13.useCanGiftProduct(product);
  let PX_16 = require("useSafeAreaInsets")().bottom;
  const items2 = [tmp.container, ];
  if (PX_16 == null) {
    PX_16 = require("native").space.PX_16;
  }
  const obj14 = { style: items2, children: tmp19Result1 };
  items2[1] = { paddingBottom: PX_16 };
  if (isPurchased) {
    let tmp30Result = product.type !== tmp2(onTrackPress[34]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp30Result) {
      let obj17;
      const obj15 = { style: tmp.buttonContainer, children: items3 };
      const Button3 = tmp2(onTrackPress[46]).Button;
      if (canUseNow) {
        const obj16 = {
          loading: isApplying,
          text: intl9.string(require("intl").t.MAS7uK),
          onPress() {
                  if (onTrackPress != null) {
                    tmp(metroImportAll.USE_NOW);
                  }
                  _undefined();
                },
          size: "lg",
          grow: true
        };
        intl9 = tmp2(onTrackPress[16]).intl;
        obj17 = obj16;
      } else {
        obj17 = {
          text: intl8.string(require("intl").t["2p2aYz"]),
          onPress() {
                  if (onTrackPress != null) {
                    tmp(metroImportAll.EDIT_PROFILE);
                  }
                  _undefined2();
                },
          size: "lg",
          grow: true
        };
        intl8 = tmp2(onTrackPress[16]).intl;
      }
      items3 = [closure_13(Button3, obj17), ];
      if (canGiftProduct) {
        const obj18 = { product, analyticsLocations, onTrackPress };
        canGiftProduct = closure_13(closure_18, obj18);
      }
      items3[1] = canGiftProduct;
      tmp30Result = closure_14(tmp16, obj15);
    }
    tmp19Result1 = tmp30Result;
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          const obj19 = { onTrackPress };
          tmp19Result1 = closure_13(tmp2(onTrackPress[47]).UnlockWithNitroButton, obj19);
        }
      }
    }
    if (!result1) {
      let stringResult;
      if (product.type === require("CollectiblesItemType").CollectiblesItemType.BUNDLE) {
        const intl6 = tmp2(onTrackPress[16]).intl;
        stringResult = intl6.string(tmp2(onTrackPress[16]).t.V1AWw0);
      } else if (product.type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT) {
        const intl5 = tmp2(onTrackPress[16]).intl;
        stringResult = intl5.string(tmp2(onTrackPress[16]).t.kAeDcK);
      } else if (product.type === require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE) {
        const intl4 = tmp2(onTrackPress[16]).intl;
        stringResult = intl4.string(tmp2(onTrackPress[16]).t.H3vhqU);
      } else if (product.type === require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION) {
        const intl3 = tmp2(onTrackPress[16]).intl;
        stringResult = intl3.string(tmp2(onTrackPress[16]).t.AQ0Veg);
      } else if (product.type === require("CollectiblesItemType").CollectiblesItemType.PROFILE_FRAME) {
        const intl2 = tmp2(onTrackPress[16]).intl;
        stringResult = intl2.string(tmp2(onTrackPress[16]).t.BlSW1e);
      } else {
        const intl = tmp2(onTrackPress[16]).intl;
        stringResult = intl.string(tmp2(onTrackPress[16]).t.AQ0Veg);
      }
      let tmp15Result5 = canAfford;
      const obj20 = { style: tmp.purchaseSection, children: items4 };
      if (tmp15Result5) {
        const obj21 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp15Result5 = closure_13(VCButton, obj21);
      }
      items4 = [tmp15Result5, , , ];
      let tmp19Result = !result2;
      if (tmp19Result) {
        const obj22 = { style: tmp.buttonContainer, children: items5 };
        const obj23 = {
          loading: isBuying,
          text: stringResult,
          onPress() {
                  if (onTrackPress != null) {
                    tmp(metroImportAll.BUY_WITH_FIAT);
                  }
                  importDefault();
                },
          disabled: isPartiallyOwnedBundle,
          variant: str2,
          size: "lg",
          grow: true
        };
        const Button = tmp2(onTrackPress[46]).Button;
        if (!isPartiallyOwnedBundle) {
          isPartiallyOwnedBundle = isBuying;
        }
        let str = "primary";
        str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        items5 = [closure_13(Button, obj23), ];
        let tmp15Result6 = canGiftProduct;
        if (tmp15Result6) {
          const obj24 = { product, analyticsLocations, variant: str, onTrackPress };
          if (canAfford) {
            str = "secondary";
          }
          tmp15Result6 = closure_13(closure_18, obj24);
        }
        items5[1] = tmp15Result6;
        tmp19Result = closure_14(tmp16, obj22);
      }
      items4[1] = tmp19Result;
      let tmp15Result7 = !canAfford;
      if (tmp15Result7) {
        const obj25 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp15Result7 = closure_13(VCButton, obj25);
      }
      items4[2] = tmp15Result7;
      let tmp15Result8 = !result2;
      if (tmp15Result8) {
        const obj26 = { product, buyButtonLabel: stringResult };
        tmp15Result8 = closure_13(closure_20, obj26);
      }
      items4[3] = tmp15Result8;
      tmp19Result1 = closure_14(tmp16, obj20);
    }
    const obj27 = {
      text: intl7.string(require("intl").t.zp6caO),
      loading: first,
      onPress() {
          if (onTrackPress != null) {
            tmp(metroImportAll.ADD_TO_COLLECTION);
          }
          handleClaim();
        },
      size: "lg",
      grow: true
    };
    const Button2 = tmp2(onTrackPress[46]).Button;
    intl7 = tmp2(onTrackPress[16]).intl;
    tmp19Result1 = closure_13(Button2, obj27);
  }
  return closure_13(handleClaim, obj14);
});
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default tmp6;