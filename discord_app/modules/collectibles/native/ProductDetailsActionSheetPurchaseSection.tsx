// discord_app/modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import OrbsIcon from "../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import openGiftModal from "openGiftModal.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesPurchaseStore from "../CollectiblesPurchaseStore.tsx";

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
  const virtualCurrencyData = balance(13397).useVirtualCurrencyData(product, flag);
  ({ price, canAfford } = virtualCurrencyData);
  let obj = balance(13397);
  let isPartiallyOwnedBundle = balance(9108).useProductDisableState(product.skuId).isDisabled;
  let obj2 = balance(9108);
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = !canAfford;
  }
  if (!isPartiallyOwnedBundle) {
    isPartiallyOwnedBundle = obj3.useProductPurchaseState(product).isPartiallyOwnedBundle;
  }
  obj3 = balance(9081);
  navigation = balance(1484).useNavigation();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const items = [navigation, product, balance, analyticsLocations, stageCollectibleChangeForEditProfile];
  closure_7 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(13400, dependencyMap.paths),
      {
        skuId: product.skuId,
        analyticsLocations,
        onCheckoutSuccess(arg0) {
          const collectiblesPurchases = balance(7737).fetchCollectiblesPurchases();
          const obj = balance(7737);
          product(4925).popWithKey(ORB_CHECKOUT_MODAL);
          if (product.skuId === constants.ORB_PROFILE_BADGE) {
            const obj3 = {
              modalKey,
              onPressViewBadge() {
                return navigation.navigate(constants3.YOU, { showOrbsBadgeCoachmark: true });
              },
              orbBalancePriorToPurchase,
            };
            product(4925).pushLazy(balance(1897)(13404, dependencyMap.paths), obj3, modalKey);
            const tmp4Result = product(4925);
          } else {
            const ALL = balance(1077).FractionalPremiumSKUsSets.ALL;
            if (ALL.has(product.skuId)) {
              const obj4 = {
                skuId: product.skuId,
                consumed: null,
                onPressExplorePerks: null,
                onPressViewCredits: null,
              };
              const first = arg0.entitlements[0];
              let flag;
              const tmp4Result3 = product(4689);
              if (first != null) {
                flag = first.consumed;
              }
              if (flag == null) {
                flag = false;
              }
              obj4.consumed = flag;
              obj4.onPressExplorePerks = function onPressExplorePerks() {
                navigation.navigate(constants2.PREMIUM);
                product(4689).hideActionSheet();
              };
              obj4.onPressViewCredits = function onPressViewCredits() {
                navigation.navigate(constants2.PREMIUM_MANAGE_PLAN);
                product(4689).hideActionSheet();
              };
              tmp4Result3.openLazy(
                balance(1897)(13405, dependencyMap.paths),
                "FractionalNitroCollectedActionSheet",
                obj4,
              );
              const tmp10 = balance(1897)(13405, dependencyMap.paths);
            } else {
              const obj5 = {
                product,
                useCategoryImage: true,
                showOrbBalancePill: true,
                orbBalancePriorToPurchase,
                stageCollectibleChangeForEditProfile,
              };
              product(11331).open(obj5);
              const tmp4Result4 = product(11331);
            }
          }
          const obj2 = product(4925);
        },
      },
      ORB_CHECKOUT_MODAL,
    );
  }, items);
  if (null == price) {
    return null;
  } else {
    const colors = nativeDefault.colors;
    color = isPartiallyOwnedBundle ? colors.INTERACTIVE_TEXT_ACTIVE : colors.WHITE;
    const intl = tmp2(1115).intl;
    let obj4 = {
      orbPrice: price.amount,
      orbIconHook() {
        return map1(OrbsIcon.OrbsIcon, { size: "sm", color }, "orbs-icon");
      },
    };
    const formatResult = intl.format(tmp2(1115).t.JC15qj, obj4);
    const _Array = Array;
    let arr2 = formatResult;
    if (!Array.isArray(formatResult)) {
      const items1 = [formatResult];
      arr2 = items1;
    }
    let obj5 = { style: tmp.orbsButtonLabel, accessibilityLabel: null, children: null };
    const intl2 = tmp2(1115).intl;
    const obj6 = { orbPrice: price.amount };
    obj5.accessibilityLabel = intl2.formatToPlainString(tmp2(1115).t.yi41qQ, obj6);
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
      grow: true,
    };
    let str2 = "primary";
    if (isPartiallyOwnedBundle) {
      str2 = "secondary";
    }
    obj8.variant = str2;
    obj7.children = closure_13(tmp2(5145).BaseTextButton, obj8);
    return closure_13(navigation, obj7);
  }
  const tmp2Result = balance(1484);
}
function PurchaseDisclaimer(arg0) {
  ({ product, buyButtonLabel } = arg0);
  const obj = {
    style: closure_17().disclaimer,
    variant: "text-xxs/normal",
    color: "interactive-text-active",
    children: null,
  };
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
const CollectiblesShopConstants = fn(1076);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_7, ShopCtaEnum: closure_8 } = CollectiblesShopConstants);
const Constants = fn(1074);
({ MarketingURLs: closure_9, UserSettingsSections: c10 } = Constants);
const RootNavigatorScreen = fn(11338).RootNavigatorScreen;
const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const ORB_BADGE_COLLECTED_MODAL = "ORB_BADGE_COLLECTED_MODAL";
const ORB_CHECKOUT_MODAL = "ORB_CHECKOUT_MODAL";
const createStyles = fn(4722);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_8,
  },
  purchaseSection: null,
  disclaimer: null,
  buttonContainer: null,
  orbsButtonLabel: null,
  orbsButtonText: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_8,
};
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
  _slicedToArray = undefined;
  c4 = undefined;
  const tmp = closure_17();
  const currentUser = require("useCurrentUser").useCurrentUser();
  const obj = require("useCurrentUser");
  const productPurchaseState = require("useProductPurchaseState").useProductPurchaseState(product);
  ({ isPartiallyOwnedBundle, isPurchased } = productPurchaseState);
  const obj2 = require("useProductPurchaseState");
  let items = [CollectiblesPurchaseStore];
  const items1 = [product];
  const obj3 = require("initialize");
  const isPremiumSubscriber = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const obj4 = require("useIsPremiumSubscriber");
  const canUseShopDiscountsResult = require("PremiumUtils").canUseShopDiscounts(currentUser);
  const obj5 = require("PremiumUtils");
  const result = require("CollectiblesUtils").isPremiumCollectiblesProduct(product);
  const obj6 = require("CollectiblesUtils");
  const result1 = require("CollectiblesUtils").isFreeCollectiblesProduct(product);
  const obj7 = require("CollectiblesUtils");
  const result2 = require("CollectiblesProductUtils").isOrbsExclusiveProduct(product);
  const obj8 = require("CollectiblesProductUtils");
  const balance = require("../../virtual_currency/hooks/index.tsx").useFetchVirtualCurrencyBalance().balance;
  const obj9 = require("../../virtual_currency/hooks/index.tsx");
  const canAfford = require("useVirtualCurrencyData").useVirtualCurrencyData(
    product,
    canUseShopDiscountsResult,
  ).canAfford;
  const obj10 = require("useVirtualCurrencyData");
  const handleUseNow = require("useHandleUseNow").useHandleUseNow({
    product,
    analyticsLocations,
    stageCollectibleChangeForEditProfile,
  });
  ({ handleUseNow: c3, handleEditProfile: c4, isApplying, canUseNow } = handleUseNow);
  const obj11 = require("useHandleUseNow");
  const handleClaim = require("useHandleClaim").useHandleClaim({
    product,
    stageCollectibleChangeForEditProfile,
  }).handleClaim;
  const obj12 = require("useHandleClaim");
  let canGiftProduct = require("useCanGiftProduct").useCanGiftProduct(product);
  let PX_16 = require("useSafeAreaInsets")().bottom;
  const items2 = [tmp.container];
  if (PX_16 == null) {
    PX_16 = require("native").space.PX_16;
  }
  const obj14 = { style: items2, children: null };
  items2[1] = { paddingBottom: PX_16 };
  if (isPurchased) {
    let tmp29Result = product.type !== tmp2(onTrackPress[32]).CollectiblesItemType.EXTERNAL_SKU;
    if (tmp29Result) {
      const obj15 = { style: tmp.buttonContainer, children: null };
      if (canUseNow) {
        const obj16 = { loading: isApplying, text: null, onPress: null, size: "lg", grow: true };
        const intl9 = tmp2(onTrackPress[15]).intl;
        obj16.text = intl9.string(tmp2(onTrackPress[15]).t.MAS7uK);
        obj16.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.USE_NOW);
          }
          _undefined();
        };
        let obj17 = obj16;
      } else {
        obj17 = { text: null, onPress: null, size: "lg", grow: true };
        const intl8 = tmp2(onTrackPress[15]).intl;
        obj17.text = intl8.string(tmp2(onTrackPress[15]).t["2p2aYz"]);
        obj17.onPress = function onPress() {
          if (onTrackPress != null) {
            tmp(constants.EDIT_PROFILE);
          }
          _undefined2();
        };
      }
      const items3 = [closure_13(tmp2(onTrackPress[44]).Button, obj17)];
      if (canGiftProduct) {
        const obj18 = { product, analyticsLocations, onTrackPress };
        canGiftProduct = closure_13(GiftButton, obj18);
      }
      items3[1] = canGiftProduct;
      obj15.children = items3;
      tmp29Result = closure_14(tmp15, obj15);
    }
    let tmp18Result1 = tmp29Result;
  } else {
    if (result) {
      if (!isPremiumSubscriber) {
        if (!result1) {
          const obj19 = { onTrackPress };
          tmp18Result1 = closure_13(tmp2(onTrackPress[45]).UnlockWithNitroButton, obj19);
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
      const obj20 = { style: tmp.purchaseSection, children: null };
      let tmp14Result5 = canAfford;
      if (canAfford) {
        const obj21 = {
          product,
          hasShopDiscount: canUseShopDiscountsResult,
          balance,
          onTrackPress,
          stageCollectibleChangeForEditProfile,
        };
        tmp14Result5 = closure_13(VCButton, obj21);
      }
      const items4 = [tmp14Result5, , ,];
      let tmp18Result = !result2;
      if (!result2) {
        const obj22 = { style: tmp.buttonContainer, children: null };
        const obj23 = {
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
          grow: true,
        };
        if (!isPartiallyOwnedBundle) {
          isPartiallyOwnedBundle = isBuying;
        }
        obj23.disabled = isPartiallyOwnedBundle;
        let str = "primary";
        let str2 = "primary";
        if (canAfford) {
          str2 = "secondary";
        }
        obj23.variant = str2;
        const items5 = [closure_13(tmp2(onTrackPress[44]).Button, obj23)];
        let tmp14Result6 = canGiftProduct;
        if (canGiftProduct) {
          const obj24 = { product, analyticsLocations, variant: null, onTrackPress: null };
          if (canAfford) {
            str = "secondary";
          }
          obj24.variant = str;
          obj24.onTrackPress = onTrackPress;
          tmp14Result6 = closure_13(GiftButton, obj24);
        }
        items5[1] = tmp14Result6;
        obj22.children = items5;
        tmp18Result = closure_14(tmp15, obj22);
      }
      items4[1] = tmp18Result;
      let tmp14Result7 = !canAfford;
      if (!canAfford) {
        const obj25 = {
          product,
          hasShopDiscount: canUseShopDiscountsResult,
          balance,
          onTrackPress,
          stageCollectibleChangeForEditProfile,
        };
        tmp14Result7 = closure_13(VCButton, obj25);
      }
      items4[2] = tmp14Result7;
      let tmp14Result8 = !result2;
      if (!result2) {
        const obj26 = { product, buyButtonLabel: stringResult };
        tmp14Result8 = closure_13(PurchaseDisclaimer, obj26);
      }
      items4[3] = tmp14Result8;
      obj20.children = items4;
      tmp18Result1 = closure_14(tmp15, obj20);
    }
    const obj27 = { text: null, loading: null, onPress: null, size: "lg", grow: true };
    const intl7 = tmp2(onTrackPress[15]).intl;
    obj27.text = intl7.string(tmp2(onTrackPress[15]).t.zp6caO);
    obj27.loading = _slicedToArray(
      obj3.useStateFromStoresArray(
        items,
        () => {
          const items = [CollectiblesPurchaseStore.isClaiming === product.skuId];
          return items;
        },
        items1,
      ),
      1,
    )[0];
    obj27.onPress = function onPress() {
      if (onTrackPress != null) {
        tmp(constants.ADD_TO_COLLECTION);
      }
      handleClaim();
    };
    tmp18Result1 = closure_13(tmp2(onTrackPress[44]).Button, obj27);
  }
  obj14.children = tmp18Result1;
  return closure_13(handleClaim, obj14);
}
