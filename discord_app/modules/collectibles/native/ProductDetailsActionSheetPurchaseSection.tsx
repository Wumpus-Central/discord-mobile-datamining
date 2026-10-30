// === Module 15010: ProductDetailsActionSheetPurchaseSection ===

// Module 15010 (ProductDetailsActionSheetPurchaseSection)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import SentryUtilsDefault from "SentryUtils" /* 1243 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1988 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import ReleaseChannelUtils from "ReleaseChannelUtils" /* 6535 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import OrbsIcon from "OrbsIcon" /* 9510 */;
import openGiftModal from "openGiftModal" /* 14375 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7728 */;

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
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    openGiftModal.openShopGiftModal({ skuId: skuId.skuId, analyticsLocations });
    const obj3 = { skuId: skuId.skuId, analyticsLocations };
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
  const virtualCurrencyData = balance(15008).useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj = balance(15008);
  let isPartiallyOwnedBundle = balance(9552).useProductDisableState(product.skuId).isDisabled;
  let obj2 = balance(9552);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj3.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  obj3 = balance(9515);
  navigation = balance(1498).useNavigation();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations, stageCollectibleChangeForEditProfile];
  closure_7 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15011, dependencyMap.paths), {
      skuId: product.skuId,
      analyticsLocations,
      onCheckoutSuccess(arg0) {
        const collectiblesPurchases = balance(7712).fetchCollectiblesPurchases();
        const obj = balance(7712);
        product(6738).popWithKey(ORB_CHECKOUT_MODAL);
        if (product.skuId === constants.ORB_PROFILE_BADGE) {
          const obj3 = {
            modalKey,
            onPressViewBadge() {
                return navigation.navigate(constants3.YOU, { showOrbsBadgeCoachmark: true });
              },
            orbBalancePriorToPurchase
          };
          product(6738).pushLazy(balance(1995)(15016, dependencyMap.paths), obj3, modalKey);
          const tmp4Result = product(6738);
        } else {
          const ALL = balance(1075).FractionalPremiumSKUsSets.ALL;
          if (ALL.has(product.skuId)) {
            const obj4 = { skuId: product.skuId, consumed: null, onPressExplorePerks: null, onPressViewCredits: null };
            const first = arg0.entitlements[0];
            let flag;
            const tmp4Result3 = product(5253);
            if (first != null) {
              flag = first.consumed;
            }
            if (flag == null) {
              flag = false;
            }
            obj4.consumed = flag;
            obj4.onPressExplorePerks = function onPressExplorePerks() {
              navigation.navigate(constants2.PREMIUM);
              product(5253).hideActionSheet();
            };
            obj4.onPressViewCredits = function onPressViewCredits() {
              navigation.navigate(constants2.PREMIUM_MANAGE_PLAN);
              product(5253).hideActionSheet();
            };
            tmp4Result3.openLazy(balance(1995)(15017, dependencyMap.paths), "FractionalNitroCollectedActionSheet", obj4);
            const tmp10 = balance(1995)(15017, dependencyMap.paths);
          } else {
            const obj5 = { product, useCategoryImage: true, showOrbBalancePill: true, orbBalancePriorToPurchase, stageCollectibleChangeForEditProfile };
            product(14443).open(obj5);
            const tmp4Result4 = product(14443);
          }
        }
        const obj2 = product(6738);
      }
    }, ORB_CHECKOUT_MODAL);
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = nativeDefault.colors;
    color = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    const intl = tmp2(1114).intl;
    let obj4 = {
      orbPrice: price.amount,
      orbIconHook() {
          return map1(OrbsIcon.OrbsIcon, { size: "sm", color }, "orbs-icon");
        }
    };
    const formatResult = intl.format(tmp2(1114).t.JC15qj, obj4);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    let obj5 = { style: tmp.orbsButtonLabel, accessibilityLabel: null, children: null };
    const intl2 = tmp2(1114).intl;
    const obj6 = { orbPrice: price.amount };
    obj5.accessibilityLabel = intl2.formatToPlainString(tmp2(1114).t.yi41qQ, obj6);
    obj5.children = arr2.map((children, index) => {
      if (typeof children === "string") {
        const obj = { style: orbsButtonText.orbsButtonText, variant: "text-md/semibold", color: str, children };
        let tmp7 = map1(Text_Text.Text, obj, index);
      } else {
        tmp7 = children;
      }
      return tmp7;
    });
    const obj7 = { style: tmp.buttonContainer, children: null };
    const obj8 = {
      loading: false,
      textElement: closure_13(navigation, obj5),
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
    obj8.variant = str2;
    obj7.children = closure_13(tmp2(5630).BaseTextButton, obj8);
    return closure_13(navigation, obj7);
  }
  const tmp2Result = balance(1498);
}
function PurchaseDisclaimer(arg0) {
  ({ product, buyButtonLabel } = arg0);
  const obj = { style: closure_17().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: null };
  let formatResult = product.type !== CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU;
  if (formatResult) {
    const intl = util.intl;
    const obj2 = { buyButtonLabel, paidServiceTermURL: constants2.PAID_TERMS };
    formatResult = intl.format(util.t.iIglwJ, obj2);
  }
  obj.children = formatResult;
  return map1(Text_Text.Text, obj);
}
const View = fn(17).View;
const CollectiblesShopConstants = fn(1074);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_7, ShopCtaEnum: closure_8 } = CollectiblesShopConstants);
const Constants = fn(1072);
({ MarketingURLs: closure_9, UserSettingsSections: c10 } = Constants);
const RootNavigatorScreen = fn(11479).RootNavigatorScreen;
const PremiumTypes = fn(1386).PremiumTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
const createStyles = fn(5009);
let obj2 = { container: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 }, purchaseSection: null, disclaimer: null, buttonContainer: null, orbsButtonLabel: null, orbsButtonText: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8 };
obj2.purchaseSection = { gap: nativeDefault.space.PX_12 };
obj2.disclaimer = { opacity: 0.75 };
let obj4 = { gap: nativeDefault.space.PX_12 };
obj2.buttonContainer = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj2.orbsButtonLabel = { flexDirection: "row", alignItems: "center" };
obj2.orbsButtonText = { flexShrink: 1 };
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx");

export default function ProductDetailsActionSheetPurchaseSection(product) {
  product = product.product;
  require = product;
  ({ analyticsLocations, isBuying, onStartPurchase: importDefault, onTrackPress } = product);
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  c5 = undefined;
  c6 = undefined;
  const tmp = closure_17();
  const currentUser = require("useCurrentUser").useCurrentUser();
  let obj = require("useCurrentUser");
  const productPurchaseState = require("useProductPurchaseState").useProductPurchaseState(product);
  ({ isPartiallyOwnedBundle, isPurchased } = productPurchaseState);
  let obj2 = require("useProductPurchaseState");
  let items = [c6];
  const items1 = [product];
  let obj3 = require("initialize");
  const isPremiumSubscriber = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let obj4 = require("useIsPremiumSubscriber");
  const canUseShopDiscountsResult = require("PremiumUtils").canUseShopDiscounts(currentUser);
  let obj5 = require("PremiumUtils");
  const result = require("CollectiblesUtils").isPremiumCollectiblesProduct(product);
  const obj6 = require("CollectiblesUtils");
  const result1 = require("CollectiblesUtils").isFreeCollectiblesProduct(product);
  const obj7 = require("CollectiblesUtils");
  const result2 = require("CollectiblesProductUtils").isOrbsExclusiveProduct(product);
  const obj8 = require("CollectiblesProductUtils");
  const balance = require("module_9531").useFetchVirtualCurrencyBalance().balance;
  const obj9 = require("module_9531");
  const nativePaymentsConnected = require("NativePaymentHooks").useNativeIAPPayments().nativePaymentsConnected;
  const obj10 = require("NativePaymentHooks");
  closure_4 = require("ShopStandalonePdpMobileExperiment").useIsShopStandalonePdpMobileEnabled("product_details_action_sheet");
  const obj11 = require("ShopStandalonePdpMobileExperiment");
  const canAfford = require("useVirtualCurrencyData").useVirtualCurrencyData(product, canUseShopDiscountsResult).canAfford;
  const obj12 = require("useVirtualCurrencyData");
  const handleUseNow = require("useHandleUseNow").useHandleUseNow({ product, analyticsLocations, stageCollectibleChangeForEditProfile });
  ({ handleUseNow: c5, handleEditProfile: c6, isApplying, canUseNow } = handleUseNow);
  const obj13 = require("useHandleUseNow");
  const handleClaim = require("useHandleClaim").useHandleClaim({ product, stageCollectibleChangeForEditProfile }).handleClaim;
  const obj14 = require("useHandleClaim");
  let canGiftProduct = require("useCanGiftProduct").useCanGiftProduct(product);
  let PX_16 = require("useSafeAreaInsets")().bottom;
  const items2 = [tmp.container, ];
  if (PX_16 == null) {
    PX_16 = require("native").space.PX_16;
  }
  const obj16 = { style: items2, children: null };
  items2[1] = { paddingBottom: PX_16 };
  if (isPurchased) {
    let tmp29Result = product.type !== tmp2(onTrackPress[32]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp29Result) {
      const obj17 = { style: tmp.buttonContainer, children: null };
      if (canUseNow) {
        const obj18 = { loading: isApplying, text: null, onPress: null, size: "lg", grow: true };
        const intl9 = tmp2(onTrackPress[15]).intl;
        obj18.text = intl9.string(tmp2(onTrackPress[15]).t.MAS7uK);
        obj18.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.USE_NOW);
          }
          _undefined();
        };
        let obj19 = obj18;
      } else {
        obj19 = { text: null, onPress: null, size: "lg", grow: true };
        const intl8 = tmp2(onTrackPress[15]).intl;
        obj19.text = intl8.string(tmp2(onTrackPress[15]).t["2p2aYz"]);
        obj19.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.EDIT_PROFILE);
          }
          _undefined2();
        };
      }
      const items3 = [closure_13(tmp2(onTrackPress[46]).Button, obj19), ];
      if (canGiftProduct) {
        const obj20 = { product, analyticsLocations, onTrackPress };
        canGiftProduct = closure_13(GiftButton, obj20);
      }
      items3[1] = canGiftProduct;
      obj17.children = items3;
      tmp29Result = closure_14(tmp15, obj17);
    }
    let tmp18Result1 = tmp29Result;
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          const obj21 = { onTrackPress };
          tmp18Result1 = closure_13(tmp2(onTrackPress[47]).UnlockWithNitroButton, obj21);
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
        let intl2 = tmp2(onTrackPress[15]).intl;
        stringResult = intl2.string(tmp2(onTrackPress[15]).t.BlSW1e);
      } else {
        let intl = tmp2(onTrackPress[15]).intl;
        stringResult = intl.string(tmp2(onTrackPress[15]).t.AQ0Veg);
      }
      const obj22 = { style: tmp.purchaseSection, children: null };
      let tmp14Result5 = canAfford;
      if (canAfford) {
        const obj23 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp14Result5 = closure_13(VCButton, obj23);
      }
      const items4 = [tmp14Result5, , , ];
      let tmp18Result = !result2;
      if (!result2) {
        const obj24 = { style: tmp.buttonContainer, children: null };
        const obj25 = {
          loading: isBuying,
          text: stringResult,
          onPress() {
                  if (onTrackPress != null) {
                    tmp(constants.BUY_WITH_FIAT);
                  }
                  if (closure_4) {
                    if (!nativePaymentsConnected) {
                      const obj2 = PlatformUtils;
                      const text = `collectibles mobile shop failed to connect to native payments isIOS: ${obj2.isIOS()}`;
                      const obj3 = { tags: { source: "standalone_pdp" } };
                      SentryUtilsDefault.captureMessage(`${`collectibles mobile shop failed to connect to native payments isIOS: ${obj2.isIOS()}`} isStable: ${ReleaseChannelUtils.isStable}`, obj3);
                      const obj5 = { title: null, body: null, hideActionSheet: false };
                      const intl = util.intl;
                      obj5.title = intl.string(util.t.zrhHH3);
                      const intl2 = util.intl;
                      obj5.body = intl2.string(util.t.PjfUXe);
                      actions_AlertActionCreatorsDefault.show(obj5);
                    }
                  }
                  closure_1_1();
                },
          disabled: null,
          variant: null,
          size: "lg",
          grow: true
        };
        if (!isPartiallyOwnedBundle) {
          isPartiallyOwnedBundle = isBuying;
        }
        obj25.disabled = isPartiallyOwnedBundle;
        let str = "primary";
        let str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        obj25.variant = str2;
        const items5 = [closure_13(tmp2(onTrackPress[46]).Button, obj25), ];
        let tmp14Result6 = canGiftProduct;
        if (canGiftProduct) {
          const obj26 = { product, analyticsLocations, variant: null, onTrackPress: null };
          if (canAfford) {
            str = "secondary";
          }
          obj26.variant = str;
          obj26.onTrackPress = onTrackPress;
          tmp14Result6 = closure_13(GiftButton, obj26);
        }
        items5[1] = tmp14Result6;
        obj24.children = items5;
        tmp18Result = closure_14(tmp15, obj24);
      }
      items4[1] = tmp18Result;
      let tmp14Result7 = !canAfford;
      if (!canAfford) {
        const obj27 = { product, hasShopDiscount: canUseShopDiscountsResult, balance, onTrackPress, stageCollectibleChangeForEditProfile };
        tmp14Result7 = closure_13(VCButton, obj27);
      }
      items4[2] = tmp14Result7;
      let tmp14Result8 = !result2;
      if (!result2) {
        const obj28 = { product, buyButtonLabel: stringResult };
        tmp14Result8 = closure_13(PurchaseDisclaimer, obj28);
      }
      items4[3] = tmp14Result8;
      obj22.children = items4;
      tmp18Result1 = closure_14(tmp15, obj22);
    }
    const obj29 = { text: null, loading: null, onPress: null, size: "lg", grow: true };
    const intl7 = tmp2(onTrackPress[15]).intl;
    obj29.text = intl7.string(tmp2(onTrackPress[15]).t.zp6caO);
    obj29.loading = nativePaymentsConnected(obj3.useStateFromStoresArray(items, () => {
      const items = [CollectiblesPurchaseStore.isClaiming === product.skuId];
      return items;
    }, items1), 1)[0];
    obj29.onPress = function onPress() {
      if (onTrackPress != null) {
        tmp(constants.ADD_TO_COLLECTION);
      }
      handleClaim();
    };
    tmp18Result1 = closure_13(tmp2(onTrackPress[46]).Button, obj29);
  }
  obj16.children = tmp18Result1;
  return closure_13(c5, obj16);
};