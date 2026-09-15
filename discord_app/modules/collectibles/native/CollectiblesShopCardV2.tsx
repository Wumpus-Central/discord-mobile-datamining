// discord_app/modules/collectibles/native/CollectiblesShopCardV2.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import v1 from "../../../../_runtime/01255_v1.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openProductDetailsActionSheet from "openProductDetailsActionSheet.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
function CollectiblesShopCardInternalV2(product) {
  product = product.product;
  require = product;
  ({ onPress: importDefault, unpublishedAt, collectibleProductState, isDisabled } = product);
  ({ solidBackground, preferVCPrice } = product);
  if (isDisabled === undefined) {
    isDisabled = false;
  }
  ({ cardWidth, hideWishlistButton, cardStyle } = product);
  if (hideWishlistButton === undefined) {
    hideWishlistButton = false;
  }
  let flag = product.hidePrice;
  if (flag === undefined) {
    flag = false;
  }
  let selectedProduct;
  let shouldShowWishlistNUXActionSheet;
  let showWishlistNUXActionSheet;
  c5 = undefined;
  let trackShopCardClick;
  let isWishlisted;
  handleToggle = undefined;
  closure_9 = undefined;
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = product);
  const tmp = closure_11();
  const defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  const obj = require("useDefaultVariantIndex");
  selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, defaultVariantIndex);
  const obj2 = require("CollectiblesProductUtils");
  const trackShopCardImpression = require("useTrackShopCardImpression").useTrackShopCardImpression(
    product,
    selectedProduct,
  );
  if (null != cardWidth) {
    const obj4 = { width: cardWidth };
    let obj5 = obj4;
  } else {
    obj5 = { width: 150 };
  }
  const obj3 = require("useTrackShopCardImpression");
  const currentUser = require("useCurrentUser").useCurrentUser();
  const tmp2Result = require("useCurrentUser");
  const result = require("CollectiblesWishlistUtils").isWishlistableCollectiblesProduct(selectedProduct);
  const tmp10 = require("useWishlistNUXActionSheet")();
  shouldShowWishlistNUXActionSheet = tmp10.shouldShowWishlistNUXActionSheet;
  showWishlistNUXActionSheet = tmp10.showWishlistNUXActionSheet;
  let items = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, selectedProduct];
  const callback = shouldShowWishlistNUXActionSheet.useCallback(() => {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(selectedProduct);
    }
  }, items);
  let intl = tmp2(tmp3[14]).intl;
  let stringResult = intl.string(require("util").t.F8FvUy);
  c5 = stringResult;
  const items1 = [stringResult];
  const callback1 = shouldShowWishlistNUXActionSheet.useCallback(() => {
    ToastActionCreatorsDefault.open({ key: "WISHLIST_ERROR", content });
  }, items1);
  const tmp2Result9 = require("CollectiblesWishlistUtils");
  trackShopCardClick = require("useTrackShopCardClick").useTrackShopCardClick({
    product,
    analyticsLocations: require("useAnalyticsLocations")().analyticsLocations,
  });
  const tmp2Result10 = require("useTrackShopCardClick");
  const wishlistButtonState = require("useWishlistButtonState").useWishlistButtonState({
    userId: currentUser.id,
    skuId: selectedProduct.skuId,
    onAddSuccess: callback,
    onError: callback1,
  });
  isWishlisted = wishlistButtonState.isWishlisted;
  ({ isBusy, handleToggle } = wishlistButtonState);
  let tmp16 = "purchased" === collectibleProductState;
  let tmp17 = tmp16;
  if (!tmp16) {
    tmp17 = hideWishlistButton;
  }
  let tmp18 = !tmp17;
  let tmp20 = tmp18;
  if (!tmp17) {
    tmp20 = !tmp19;
  }
  if (tmp20) {
    tmp20 = !isBusy;
  }
  closure_9 = tmp20;
  const items2 = [tmp20, isWishlisted];
  const items3 = [handleToggle];
  const memo = obj8.useMemo(() => {
    if (closure_9) {
      const intl = util.intl;
      const string = intl.string;
      let t = util.t;
      if (isWishlisted) {
        let stringResult = string(t.yr9TTf);
      } else {
        stringResult = string(t["8DkMEQ"]);
      }
      t = { name: "toggleWishlist", label: stringResult };
      const items = [t];
    }
  }, items2);
  const callback2 = obj8.useCallback((nativeEvent) => {
    if ("toggleWishlist" === nativeEvent.nativeEvent.actionName) {
      handleToggle();
    }
  }, items3);
  const obj6 = { userId: currentUser.id, skuId: selectedProduct.skuId, onAddSuccess: callback, onError: callback1 };
  const tmp2Result11 = require("useWishlistButtonState");
  const items4 = [c5];
  let stateFromStores = require("initialize").useStateFromStores(items4, () =>
    product(selectedProduct[20]).isThemeDark(content.theme),
  );
  const tmp2Result12 = require("initialize");
  const items5 = [trackShopCardClick];
  if (unpublishedAt == null) {
    unpublishedAt = tmp2Result13.useStateFromStores(items5, () => {
      const category = CollectiblesCategoryStore.getCategory(product.categorySkuId);
      let unpublishedAt;
      if (category != null) {
        unpublishedAt = category.unpublishedAt;
      }
      return unpublishedAt;
    });
  }
  const obj7 = {
    ref: trackShopCardImpression,
    style: null,
    onPress() {
      trackShopCardClick(constants.OPEN_DETAILS);
      if (importDefault != null) {
        importDefault();
      }
    },
    activeOpacity: 0.8,
    accessibilityRole: "button",
    accessibilityActions: memo,
    onAccessibilityAction: callback2,
    children: null,
  };
  const items6 = [tmp.card, obj5, cardStyle];
  obj7.style = items6;
  require("CollectiblesUtils");
  const badgeOverride = product.badgeOverride;
  if (product.hideBadge) {
    if (null != null) {
      const obj9 = { style: tmp.topRowOverlay, children: null };
      const items7 = [null];
      if (!tmp17) {
        const obj10 = {
          style: tmp.wishlistButton,
          isWishlisted,
          onPress: handleToggle,
          busy: isBusy,
          disabled: tmp19,
          accessibilityHidden: true,
          onTrackPress: trackShopCardClick,
        };
        tmp18 = closure_9(tmp2(tmp3[29]).WishlistButtonBase, obj10);
      }
      items7[1] = tmp18;
      obj9.children = items7;
      let tmp24Result = closure_10(showWishlistNUXActionSheet, obj9);
    } else {
      tmp24Result = null;
    }
    const items8 = [tmp24Result, ,];
    const obj11 = {
      solidBackground,
      product,
      isPurchased: null,
      isDisabled: null,
      disableBundleStaticBackground: null,
      muteBundleStaticBackground: null,
      cardWidth: null,
    };
    if (!tmp16) {
      tmp16 = "partiallyOwnedBundle" === collectibleProductState;
    }
    obj11.isPurchased = tmp16;
    obj11.isDisabled = isDisabled;
    obj11.disableBundleStaticBackground = disableBundleStaticBackground;
    obj11.muteBundleStaticBackground = muteBundleStaticBackground;
    obj11.cardWidth = cardWidth;
    items8[1] = closure_9(require("CollectiblesShopCardAssetTileV2"), obj11);
    const obj12 = { product, collectibleProductState, preferVCPrice, isDisabled, hidePrice: flag };
    items8[2] = closure_9(require("CollectiblesShopCardCardDetailsV2"), obj12);
    obj7.children = items8;
    return closure_10(tmp2(tmp3[21]).PressableOpacity, obj7);
  } else if (null != badgeOverride) {
    const items9 = [tmp.badgePill];
    const obj13 = { style: null, children: null };
    items9[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
    obj13.style = items9;
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    const obj14 = {
      variant: "text-xs/bold",
      color: str2,
      allowFontScaling: false,
      style: tmp.badgeOverrideText,
      lineClamp: 1,
      children: badgeOverride,
    };
    stateFromStores = tmp32(tmp2(tmp3[23]).Text, obj14);
    obj13.children = stateFromStores;
    let tmp32Result = tmp32(showWishlistNUXActionSheet, obj13);
  } else {
    if (tmp2Result15.isDynamicProduct(selectedProduct)) {
      const obj15 = { icon: tmp2(tmp3[25]).DiceIcon, accessibilityLabel: null, isDark: null };
      const intl3 = tmp2(tmp3[14]).intl;
      obj15.accessibilityLabel = intl3.string(tmp2(tmp3[14]).t["+drfVi"]);
      obj15.isDark = stateFromStores;
      tmp32Result = closure_9(tmp2(tmp3[24]).IconBadgePill, obj15);
    } else if (tmp26) {
      const obj16 = { unpublishedAt, style: tmp.badge };
      tmp32Result = closure_9(require("LimitedTimeBadge"), obj16);
    } else if ("nitroClaim" === collectibleProductState) {
      tmp32Result = closure_9(tmp2(tmp3[27]).NitroWheelIcon, { color: "mobile-text-heading-primary" });
    } else {
      tmp32Result = null;
      if (tmp2Result16.isOrbsExclusiveProduct(selectedProduct)) {
        const obj17 = { icon: tmp2(tmp3[28]).OrbsIcon, accessibilityLabel: null, isDark: null };
        const intl2 = tmp2(tmp3[14]).intl;
        obj17.accessibilityLabel = intl2.string(tmp2(tmp3[14]).t["0TmQRG"]);
        obj17.isDark = stateFromStores;
        tmp32Result = closure_9(tmp2(tmp3[24]).IconBadgePill, obj17);
      }
      tmp2Result16 = tmp2(tmp3[9]);
    }
    tmp2Result15 = tmp2(tmp3[9]);
  }
  tmp2Result13 = require("initialize");
}
function CollectiblesShopCardV2Inner(product) {
  product = product.product;
  require = product;
  let onPress = product.onPress;
  let analyticsLocations;
  closure_6 = undefined;
  ({
    unpublishedAt,
    solidBackground,
    preferVCPrice,
    cardWidth,
    cardStyle,
    hideWishlistButton,
    hidePrice,
    disableBundleStaticBackground,
    muteBundleStaticBackground,
  } = product);
  const defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  let obj = require("useDefaultVariantIndex");
  const selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, defaultVariantIndex);
  analyticsLocations = defaultVariantIndex(analyticsLocations[16])().analyticsLocations;
  let obj2 = require("CollectiblesProductUtils");
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  const items = [analyticsLocations, product, defaultVariantIndex, collectiblesAnalyticsContext];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = {
      product,
      initialVariantIndex: defaultVariantIndex,
      analyticsLocations,
      shopAnalyticsContext: collectiblesAnalyticsContext,
    };
    const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj3);
  }, items);
  let obj3 = require("CollectiblesAnalyticsContext");
  const currentUser = require("useCurrentUser").useCurrentUser();
  const obj4 = require("useCurrentUser");
  const canUseCollectiblesResult = defaultVariantIndex(analyticsLocations[35]).canUseCollectibles(currentUser);
  const obj5 = defaultVariantIndex(analyticsLocations[35]);
  const productPurchaseState = require("useProductPurchaseState").useProductPurchaseState(selectedProduct);
  const isPurchased = productPurchaseState.isPurchased;
  const isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  const obj6 = require("useProductPurchaseState");
  const obj7 = require("useProductDisableState");
  const oneDayFractionalNitroEnabled = require("OneDayFractionalNitroExperiment").useOneDayFractionalNitroEnabled(
    "product_card",
  );
  const obj8 = require("OneDayFractionalNitroExperiment");
  let result = require("CollectiblesUtils").isPremiumCollectiblesProduct(selectedProduct);
  const obj9 = require("CollectiblesUtils");
  let result1 = require("CollectiblesUtils").isFreeCollectiblesProduct(selectedProduct);
  let tmp11 = result;
  if (result) {
    tmp11 = !canUseCollectiblesResult;
  }
  if (tmp11) {
    tmp11 = !result1;
  }
  closure_6 = tmp11;
  if (!result1) {
    if (result) {
      result = canUseCollectiblesResult;
    }
    result1 = result;
  }
  const items1 = [result1, isPartiallyOwnedBundle, isPurchased, tmp11];
  if (product.skuId !== result1.FRACTIONAL_PREMIUM_1_DAY) {
    const obj11 = {
      product,
      onPress: null,
      collectibleProductState: null,
      unpublishedAt: null,
      solidBackground: null,
      preferVCPrice: null,
      isDisabled: null,
      cardWidth: null,
      cardStyle: null,
      hideWishlistButton: null,
      hidePrice: null,
      disableBundleStaticBackground: null,
      muteBundleStaticBackground: null,
    };
    if (onPress == null) {
      onPress = callback;
    }
    obj11.onPress = onPress;
    obj11.collectibleProductState = tmp12;
    obj11.unpublishedAt = unpublishedAt;
    obj11.solidBackground = solidBackground;
    obj11.preferVCPrice = preferVCPrice;
    obj11.isDisabled = obj7.useProductDisableState(selectedProduct.skuId).isDisabled;
    obj11.cardWidth = cardWidth;
    obj11.cardStyle = cardStyle;
    obj11.hideWishlistButton = hideWishlistButton;
    obj11.hidePrice = hidePrice;
    obj11.disableBundleStaticBackground = disableBundleStaticBackground;
    obj11.muteBundleStaticBackground = muteBundleStaticBackground;
    let tmp14Result = closure_9(CollectiblesShopCardInternalV2, obj11);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
}
get_ActivityIndicator = fn(17);
({ PixelRatio, View: closure_4 } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1076);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_7, ShopCtaEnum: closure_8 } = CollectiblesShopConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let num = 170;
if (PixelRatio.getFontScale() >= 1.78) {
  num = 302;
}
const createStyles = fn(4639);
let obj = {
  card: null,
  topRowOverlay: null,
  badge: null,
  badgePill: null,
  badgeOverrideText: null,
  badgePillDarkMode: null,
  badgePillLightMode: null,
  wishlistButton: null,
};
let size = {
  position: "relative",
  height: num,
  width: 150,
  display: "flex",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj.card = size;
obj.topRowOverlay = {
  position: "absolute",
  top: 6,
  left: 6,
  right: 6,
  zIndex: 2,
  display: "flex",
  flexDirection: "row",
  gap: 4,
  justifyContent: "space-between",
  alignItems: "flex-start",
};
obj.badge = { flexShrink: 1 };
obj.badgePill = {
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingVertical: 1.5,
  borderRadius: nativeDefault.radii.round,
  flexShrink: 1,
};
obj.badgeOverrideText = { textTransform: "uppercase" };
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingVertical: 1.5,
  borderRadius: nativeDefault.radii.round,
  flexShrink: 1,
};
obj.badgePillDarkMode = { backgroundColor: nativeDefault.colors.WHITE };
let obj4 = { backgroundColor: nativeDefault.colors.WHITE };
obj.badgePillLightMode = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
obj.wishlistButton = { marginLeft: "auto", flexShrink: 0 };
let closure_11 = createStyles.createStyles(obj);
let obj5 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardV2.tsx");

export default noop.memo(function CollectiblesShopCardV2(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const merged = Object.assign(arg0, undefined);
    const items = [merged.product.skuId];
    const memo = noop.useMemo(() => {
      const obj = { cardId: v1.v4() };
      return obj;
    }, items);
    let obj = { newValue: memo, children: null };
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj.children = React7(CollectiblesShopCardV2Inner, obj2);
    return React7(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }
});
export const COLLECTIBLES_SHOP_CARD_HEIGHT = num;
export const COLLECTIBLES_SHOP_CARD_WIDTH = 150;
export const COLLECTIBLES_SHOP_CARD_MAX_WIDTH = 180;
export const COLLECTIBLES_SHOP_CARD_GAP = 16;
