// === Module 13227: ProductDetailsActionSheetPurchaseSection ===

// Module 13227 (ProductDetailsActionSheetPurchaseSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import Text_Text from "Text/Text" /* 4601 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7214 */;
import OrbsIcon from "OrbsIcon" /* 8906 */;
import openGiftModal from "openGiftModal" /* 11079 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7609 */;

require = fn;
function GiftButton(onTrackPress) {
  ({ product: require, analyticsLocations: importDefault, variant } = onTrackPress);
  if (variant === undefined) {
    variant = "primary";
  }
  onTrackPress = onTrackPress.onTrackPress;
  let obj = { size: "lg", variant, icon: null, onPress: null, accessibilityLabel: null };
  if ("primary" === variant) {
    let TEXT_STRONG = require("native").colors.WHITE;
  } else {
    TEXT_STRONG = require("native").colors.TEXT_STRONG;
  }
  obj.icon = closure_13(require("GiftIcon").GiftIcon, { size: "md", color: TEXT_STRONG });
  obj.onPress = function onPress() {
    if (onTrackPress != null) {
      tmp(constants.SEND_AS_GIFT);
    }
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    obj = { skuId: skuId.skuId, analyticsLocations };
    openGiftModal.openShopGiftModal(obj);
  };
  const intl = require("util").intl;
  obj.accessibilityLabel = intl.string(require("util").t.PEjaCx);
  return closure_13(require("IconButton").IconButton, obj);
}
function VCButton(balance) {
  balance = balance.balance;
  const product = balance.product;
  importDefault = product;
  let flag = balance.hasShopDiscount;
  if (flag === undefined) {
    flag = false;
  }
  ({ onTrackPress: dependencyMap, stageCollectibleChangeForEditProfile } = balance);
  let navigation;
  let analyticsLocations;
  closure_7 = undefined;
  let color;
  const tmp = closure_17();
  noop = tmp;
  let obj = balance(13225);
  const virtualCurrencyData = obj.useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj1 = balance(8938);
  let isPartiallyOwnedBundle = obj1.useProductDisableState(product.skuId).isDisabled;
  let obj2 = balance(8911);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj2.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  navigation = balance(1483).useNavigation();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations, stageCollectibleChangeForEditProfile];
  closure_7 = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    obj = {
      skuId: product.skuId,
      analyticsLocations,
      onCheckoutSuccess(arg0) {
        let obj = balance(7593);
        const collectiblesPurchases = obj.fetchCollectiblesPurchases();
        let obj1 = product(4808);
        obj1.popWithKey(ORB_CHECKOUT_MODAL);
        if (product.skuId === constants.ORB_PROFILE_BADGE) {
          let tmp4Result = product(4808);
          obj = {
            modalKey,
            onPressViewBadge() {
                return navigation.navigate(constants3.YOU, { showOrbsBadgeCoachmark: true });
              },
            orbBalancePriorToPurchase
          };
          tmp4Result.pushLazy(balance(1896)(13232, dependencyMap.paths), obj, modalKey);
        } else {
          const ALL = balance(1077).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(product.skuId)) {
            tmp4Result = product(4572);
            obj = { skuId: product.skuId, consumed: null, onPressExplorePerks: null, onPressViewCredits: null };
            const first = arg0.entitlements[0];
            let flag;
            if (first != null) {
              flag = first.consumed;
            }
            if (flag == null) {
              flag = false;
            }
            obj.consumed = flag;
            obj.onPressExplorePerks = function onPressExplorePerks() {
              navigation.navigate(constants2.PREMIUM);
              product(4572).hideActionSheet();
            };
            obj.onPressViewCredits = function onPressViewCredits() {
              navigation.navigate(constants2.PREMIUM_MANAGE_PLAN);
              product(4572).hideActionSheet();
            };
            tmp4Result.openLazy(balance(1896)(13233, dependencyMap.paths), "FractionalNitroCollectedActionSheet", obj);
            const tmp10 = balance(1896)(13233, dependencyMap.paths);
          } else {
            obj1 = { product, useCategoryImage: true, showOrbBalancePill: true, orbBalancePriorToPurchase, stageCollectibleChangeForEditProfile };
            product(11149).open(obj1);
            const tmp4Result1 = product(11149);
          }
        }
      }
    };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13228, dependencyMap.paths), obj, ORB_CHECKOUT_MODAL);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = nativeDefault.colors;
    color = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    const intl = tmp2(1114).intl;
    obj = {
      orbPrice: price.amount,
      orbIconHook() {
          return map1(OrbsIcon.OrbsIcon, { size: "sm", color }, "orbs-icon");
        }
    };
    const formatResult = intl.format(tmp2(1114).t.JC15qj, obj);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    obj = { style: tmp.orbsButtonLabel, accessibilityLabel: null, children: null };
    const intl2 = tmp2(1114).intl;
    obj1 = { orbPrice: price.amount };
    obj.accessibilityLabel = intl2.formatToPlainString(tmp2(1114).t.yi41qQ, obj1);
    obj.children = arr2.map((children, index) => {
      if (typeof children === "string") {
        const obj = { style: orbsButtonText.orbsButtonText, variant: "text-md/semibold", color: str, children };
        let tmp7 = map1(Text_Text.Text, obj, index);
      } else {
        tmp7 = children;
      }
      return tmp7;
    });
    obj2 = { style: tmp.buttonContainer, children: null };
    const obj3 = {
      loading: false,
      textElement: closure_13(navigation, obj),
      onPress() {
          if (dependencyMap != null) {
            tmp(constants.BUY_WITH_ORBS);
          }
          closure_7();
        },
      disabled: isPartiallyOwnedBundle,
      size: "lg",
      variant: null,
      grow: true
    };
    let str2 = "primary";
    if (isPartiallyOwnedBundle) {
      str2 = "secondary";
    }
    obj3.variant = str2;
    obj2.children = closure_13(tmp2(5026).BaseTextButton, obj3);
    return closure_13(navigation, obj2);
  }
  const tmp2Result = balance(1483);
}
function PurchaseDisclaimer(arg0) {
  ({ product, buyButtonLabel } = arg0);
  let obj = { style: closure_17().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: null };
  let formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = util.intl;
    obj = { buyButtonLabel, paidServiceTermURL: constants2.PAID_TERMS };
    formatResult = intl.format(util.t.iIglwJ, obj);
  }
  obj.children = formatResult;
  return map1(Text_Text.Text, obj);
}
const View = fn(17).View;
const CollectiblesShopConstants = fn(1076);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_7, ShopCtaEnum: closure_8 } = CollectiblesShopConstants);
const Constants = fn(1074);
({ MarketingURLs: closure_9, UserSettingsSections: c10 } = Constants);
const RootNavigatorScreen = fn(11156).RootNavigatorScreen;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
fn(4605);
let createStyles = { container: null, purchaseSection: null, disclaimer: null, buttonContainer: null, orbsButtonLabel: null, orbsButtonText: null };
createStyles = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.purchaseSection = { gap: nativeDefault.space.PX_12 };
createStyles.disclaimer = { opacity: 0.75 };
let obj1 = { gap: nativeDefault.space.PX_12 };
createStyles.buttonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
createStyles.orbsButtonLabel = { flexDirection: "row", alignItems: "center" };
createStyles.orbsButtonText = { flexShrink: 1 };
let closure_17 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default function ProductDetailsActionSheetPurchaseSection(product) {
  product = product.product;
  require = product;
  ({ analyticsLocations, isBuying, onStartPurchase: importDefault, onTrackPress } = product);
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  _slicedToArray = undefined;
  c4 = undefined;
  const tmp = closure_17();
  let obj = require("useCurrentUser");
  const currentUser = obj.useCurrentUser();
  let obj1 = require("useProductPurchaseState");
  const productPurchaseState = obj1.useProductPurchaseState(product);
  ({ isPartiallyOwnedBundle, isPurchased } = productPurchaseState);
  let obj2 = require("initialize");
  let items = [CollectiblesPurchaseStore];
  const items1 = [product];
  let obj3 = require("useIsPremiumSubscriber");
  const isPremiumSubscriber = obj3.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let obj4 = require("PremiumUtils");
  const canUseShopDiscountsResult = obj4.canUseShopDiscounts(currentUser);
  let obj5 = require("CollectiblesUtils");
  const result = obj5.isPremiumCollectiblesProduct(product);
  let obj6 = require("CollectiblesUtils");
  const result1 = obj6.isFreeCollectiblesProduct(product);
  let obj7 = require("CollectiblesProductUtils");
  const result2 = obj7.isOrbsExclusiveProduct(product);
  let obj8 = require("module_8919");
  const balance = obj8.useFetchVirtualCurrencyBalance().balance;
  let obj9 = require("useVirtualCurrencyData");
  const canAfford = obj9.useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  let obj10 = require("useHandleUseNow");
  const handleUseNow = obj10.useHandleUseNow({ product, analyticsLocations, stageCollectibleChangeForEditProfile });
  ({ handleUseNow: c3, handleEditProfile: c4, isApplying, canUseNow } = handleUseNow);
  let obj11 = require("useHandleClaim");
  const handleClaim = obj11.useHandleClaim({ product, stageCollectibleChangeForEditProfile }).handleClaim;
  let obj12 = require("useCanGiftProduct");
  let canGiftProduct = obj12.useCanGiftProduct(product);
  let PX_16 = require("useSafeAreaInsets")().bottom;
  const items2 = [tmp.container, ];
  if (PX_16 == null) {
    PX_16 = require("native").space.PX_16;
  }
  obj = { style: items2, children: null };
  items2[1] = { paddingBottom: PX_16 };
  if (isPurchased) {
    let tmp29Result = product.type !== tmp2(onTrackPress[32]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp29Result) {
      obj = { style: tmp.buttonContainer, children: null };
      if (canUseNow) {
        obj1 = { loading: isApplying, text: null, onPress: null, size: "lg", grow: true };
        const intl9 = tmp2(onTrackPress[15]).intl;
        obj1.text = intl9.string(tmp2(onTrackPress[15]).t.MAS7uK);
        obj1.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.USE_NOW);
          }
          _undefined();
        };
        obj2 = obj1;
      } else {
        obj2 = { text: null, onPress: null, size: "lg", grow: true };
        const intl8 = tmp2(onTrackPress[15]).intl;
        obj2.text = intl8.string(tmp2(onTrackPress[15]).t["2p2aYz"]);
        obj2.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.EDIT_PROFILE);
          }
          _undefined2();
        };
      }
      const items3 = [closure_13(tmp2(onTrackPress[44]).Button, obj2), ];
      if (canGiftProduct) {
        obj3 = { product, analyticsLocations, onTrackPress };
        canGiftProduct = closure_13(GiftButton, obj3);
      }
      items3[1] = canGiftProduct;
      obj.children = items3;
      tmp29Result = closure_14(tmp15, obj);
    }
    let tmp18Result = tmp29Result;
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          obj4 = { onTrackPress };
          tmp18Result = closure_13(tmp2(onTrackPress[45]).UnlockWithNitroButton, obj4);
        }
      }
    }
    if (!result1) {
      if (product.type === tmp2(onTrackPress[32]).CollectiblesItemType.BUNDLE) {
        const intl6 = tmp2(onTrackPress[15]).intl;
        let stringResult = intl6.string(tmp2(onTrackPress[15]).t.V1AWw0);
      } else if (product.type === tmp2(onTrackPress[32]).CollectiblesItemType.PROFILE_EFFECT) {
        const intl5 = tmp2(onTrackPress[15]).intl;
        stringResult = intl5.string(tmp2(onTrackPress[15]).t.kAeDcK);
      } else if (product.type === tmp2(onTrackPress[32]).CollectiblesItemType.NAMEPLATE) {
        const intl4 = tmp2(onTrackPress[15]).intl;
        stringResult = intl4.string(tmp2(onTrackPress[15]).t.H3vhqU);
      } else if (product.type === tmp2(onTrackPress[32]).CollectiblesItemType.AVATAR_DECORATION) {
        const intl3 = tmp2(onTrackPress[15]).intl;
        stringResult = intl3.string(tmp2(onTrackPress[15]).t.AQ0Veg);
      } else if (product.type === tmp2(onTrackPress[32]).CollectiblesItemType.PROFILE_FRAME) {
        const intl2 = tmp2(onTrackPress[15]).intl;
        stringResult = intl2.string(tmp2(onTrackPress[15]).t.BlSW1e);
      } else {
        const intl = tmp2(onTrackPress[15]).intl;
        stringResult = intl.string(tmp2(onTrackPress[15]).t.AQ0Veg);
      }
      obj5 = { style: tmp.purchaseSection, children: null };
      let tmp14Result = canAfford;
      if (canAfford) {
        obj6 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp14Result = closure_13(VCButton, obj6);
      }
      const items4 = [tmp14Result, , , ];
      tmp18Result = !result2;
      if (!result2) {
        obj7 = { style: tmp.buttonContainer, children: null };
        obj8 = {
          loading: isBuying,
          text: stringResult,
          onPress() {
                  if (onTrackPress != null) {
                    tmp(constants.BUY_WITH_FIAT);
                  }
                  importDefault();
                },
          disabled: null,
          variant: null,
          size: "lg",
          grow: true
        };
        if (!isPartiallyOwnedBundle) {
          isPartiallyOwnedBundle = isBuying;
        }
        obj8.disabled = isPartiallyOwnedBundle;
        let str = "primary";
        let str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        obj8.variant = str2;
        const items5 = [closure_13(tmp2(onTrackPress[44]).Button, obj8), ];
        let tmp14Result1 = canGiftProduct;
        if (canGiftProduct) {
          obj9 = { product, analyticsLocations, variant: null, onTrackPress: null };
          if (canAfford) {
            str = "secondary";
          }
          obj9.variant = str;
          obj9.onTrackPress = onTrackPress;
          tmp14Result1 = closure_13(GiftButton, obj9);
        }
        items5[1] = tmp14Result1;
        obj7.children = items5;
        tmp18Result = closure_14(tmp15, obj7);
      }
      items4[1] = tmp18Result;
      let tmp14Result2 = !canAfford;
      if (!canAfford) {
        obj10 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp14Result2 = closure_13(VCButton, obj10);
      }
      items4[2] = tmp14Result2;
      let tmp14Result3 = !result2;
      if (!result2) {
        obj11 = { product, buyButtonLabel: stringResult };
        tmp14Result3 = closure_13(PurchaseDisclaimer, obj11);
      }
      items4[3] = tmp14Result3;
      obj5.children = items4;
      tmp18Result = closure_14(tmp15, obj5);
    }
    obj12 = { text: null, loading: null, onPress: null, size: "lg", grow: true };
    const intl7 = tmp2(onTrackPress[15]).intl;
    obj12.text = intl7.string(tmp2(onTrackPress[15]).t.zp6caO);
    obj12.loading = _slicedToArray(obj2.useStateFromStoresArray(items, () => {
      const items = [CollectiblesPurchaseStore.isClaiming === product.skuId];
      return items;
    }, items1), 1)[0];
    obj12.onPress = function onPress() {
      if (onTrackPress != null) {
        tmp(constants.ADD_TO_COLLECTION);
      }
      handleClaim();
    };
    tmp18Result = closure_13(tmp2(onTrackPress[44]).Button, obj12);
  }
  obj.children = tmp18Result;
  return closure_13(handleClaim, obj);
};