import importAllResult from "useCanPurchaseFrames";
import get_ActivityIndicator from "useTrackShopCardClick";
import handleThemeChange from "handleThemeChange";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import items from "items";
import jsxProd from "AccessibilityAnnouncer";
import createCacheKey from "createCacheKey";

let PixelRatio;
let c10;
let c4;
let c9;
let error;
let metroImportAll;
let require = arg1;
function CollectiblesShopCardInternalV2(product) {
  let cardStyle;
  let cardWidth;
  let collectibleProductState;
  let disableBundleStaticBackground;
  let handleToggle;
  let hideWishlistButton;
  let importDefault;
  let isBusy;
  let isDisabled;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let solidBackground;
  let unpublishedAt;
  product = product.product;
  const require = product;
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
  let flag2 = product.isShopCardImpressionEnabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let selectedProduct;
  let shouldShowWishlistNUXActionSheet;
  let showWishlistNUXActionSheet;
  let c5;
  let trackShopCardClick;
  let isWishlisted;
  handleToggle = undefined;
  let callback;
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = product);
  const tmp = callback2();
  let obj = require(selectedProduct[8]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj1 = require(selectedProduct[9]);
  selectedProduct = obj1.getSelectedProduct(product, defaultVariantIndex);
  let obj2 = require(selectedProduct[10]);
  const trackShopCardImpression = obj2.useTrackShopCardImpression(product, selectedProduct, flag2);
  if (null != cardWidth) {
    obj = { width: null };
    obj[0] = cardWidth;
  } else {
    obj = { width: 150 };
  }
  let tmp2Result = tmp2(tmp3[11]);
  const currentUser = tmp2Result.useCurrentUser();
  tmp2Result = tmp2(tmp3[12]);
  const result = tmp2Result.isWishlistableCollectiblesProduct(selectedProduct);
  const tmp10 = importDefault(selectedProduct[13])();
  shouldShowWishlistNUXActionSheet = tmp10.shouldShowWishlistNUXActionSheet;
  showWishlistNUXActionSheet = tmp10.showWishlistNUXActionSheet;
  let obj7 = shouldShowWishlistNUXActionSheet;
  let items = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, selectedProduct];
  callback = shouldShowWishlistNUXActionSheet.useCallback(() => {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(selectedProduct);
    }
  }, items);
  let intl = tmp2(tmp3[14]).intl;
  let stringResult = intl.string(require(selectedProduct[14]).t.F8FvUy);
  c5 = stringResult;
  const items1 = [stringResult];
  const callback1 = shouldShowWishlistNUXActionSheet.useCallback(() => {
    let obj = outer1_1(selectedProduct[15]);
    obj = { key: "WISHLIST_ERROR", content: c5 };
    obj.open(obj);
  }, items1);
  trackShopCardClick = require(selectedProduct[17]).useTrackShopCardClick({ product, analyticsLocations: importDefault(tmp3[16])().analyticsLocations });
  const tmp2Result1 = require(selectedProduct[17]);
  obj1 = { userId: currentUser.id, skuId: selectedProduct.skuId, onAddSuccess: callback, onError: callback1 };
  const wishlistButtonState = require(selectedProduct[18]).useWishlistButtonState(obj1);
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
  callback = tmp20;
  const items2 = [tmp20, isWishlisted];
  const items3 = [handleToggle];
  const memo = obj7.useMemo(() => {
    if (c9) {
      const intl = product(selectedProduct[14]).intl;
      const string = intl.string;
      let t = product(selectedProduct[14]).t;
      if (isWishlisted) {
        let stringResult = string(t.yr9TTf);
      } else {
        stringResult = string(t["8DkMEQ"]);
      }
      t = { name: "toggleWishlist", label: null };
      t[1] = stringResult;
      const items = [t];
    }
  }, items2);
  callback2 = obj7.useCallback((nativeEvent) => {
    if ("toggleWishlist" === nativeEvent.nativeEvent.actionName) {
      handleToggle();
    }
  }, items3);
  const tmp2Result2 = require(selectedProduct[18]);
  const isProfileFramesEarlyAccessPhase = require(selectedProduct[19]).useIsProfileFramesEarlyAccessPhase("CollectiblesShopCardV2");
  const tmp2Result3 = require(selectedProduct[19]);
  const items4 = [c5];
  let stateFromStores = require(selectedProduct[20]).useStateFromStores(items4, () => product(selectedProduct[21]).isThemeDark(_undefined.theme));
  const tmp2Result4 = require(selectedProduct[20]);
  const items5 = [trackShopCardClick];
  if (unpublishedAt == null) {
    unpublishedAt = tmp2Result5.useStateFromStores(items5, () => {
      const category = trackShopCardClick.getCategory(product.categorySkuId);
      let unpublishedAt;
      if (category != null) {
        unpublishedAt = category.unpublishedAt;
      }
      return unpublishedAt;
    });
  }
  obj2 = {
    ref: trackShopCardImpression,
    style: items6,
    onPress() {
      trackShopCardClick(handleToggle.OPEN_DETAILS);
      if (callback != null) {
        callback();
      }
    },
    activeOpacity: 0.8,
    accessibilityRole: "button",
    accessibilityActions: memo,
    onAccessibilityAction: callback2,
    children: null
  };
  items6 = [tmp.card, obj, cardStyle];
  tmp2Result5 = require(selectedProduct[20]);
  const badgeOverride = product.badgeOverride;
  const result1 = require(selectedProduct[23]).shouldShowLimitedTimeBadge(unpublishedAt);
  const tmp2Result6 = require(selectedProduct[23]);
  const productType = require(selectedProduct[9]).getProductType(product);
  let tmp28 = productType === tmp2(tmp3[24]).CollectiblesItemType.PROFILE_FRAME;
  if (tmp28) {
    tmp28 = isProfileFramesEarlyAccessPhase;
  }
  if (product.hideBadge) {
    if (null != null) {
      const obj3 = { style: null, children: null };
      obj3[0] = tmp.topRowOverlay;
      const items7 = [null, ];
      if (!tmp17) {
        const obj4 = { style: null, isWishlisted: null, onPress: null, busy: null, disabled: null, accessibilityHidden: true, onTrackPress: null };
        obj4[0] = tmp.wishlistButton;
        obj4[1] = isWishlisted;
        obj4[2] = handleToggle;
        obj4[3] = isBusy;
        obj4[4] = tmp19;
        obj4[6] = trackShopCardClick;
        tmp18 = callback(tmp2(tmp3[31]).WishlistButtonBase, obj4);
      }
      items7[1] = tmp18;
      obj3[1] = items7;
      let tmp25Result = tmp25(showWishlistNUXActionSheet, obj3);
      const tmp40 = showWishlistNUXActionSheet;
    } else {
      tmp25Result = null;
    }
    const items8 = [tmp25Result, , ];
    const obj5 = { solidBackground: null, product: null, isPurchased: null, isDisabled: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null, cardWidth: null };
    obj5[0] = solidBackground;
    obj5[1] = product;
    if (!tmp16) {
      tmp16 = "partiallyOwnedBundle" === collectibleProductState;
    }
    obj5[2] = tmp16;
    obj5[3] = isDisabled;
    obj5[4] = disableBundleStaticBackground;
    obj5[5] = muteBundleStaticBackground;
    obj5[6] = cardWidth;
    items8[1] = callback(tmp9(tmp3[32]), obj5);
    const obj6 = { product: null, collectibleProductState: null, preferVCPrice: null, isDisabled: null, hidePrice: null };
    obj6[0] = product;
    obj6[1] = collectibleProductState;
    obj6[2] = preferVCPrice;
    obj6[3] = isDisabled;
    obj6[4] = flag;
    items8[2] = callback(tmp9(tmp3[33]), obj6);
    obj2[7] = items8;
    return tmp25(tmp2(tmp3[22]).PressableOpacity, obj2);
  } else if (tmp28) {
    const items9 = [tmp.badgePill, ];
    obj7 = { style: null, accessibilityLabel: null, children: null };
    items9[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
    obj7[0] = items9;
    const intl4 = tmp2(tmp3[14]).intl;
    obj7[1] = intl4.string(tmp2(tmp3[14]).t["1m6qcO"]);
    let str3 = "white";
    if (stateFromStores) {
      str3 = "black";
    }
    const obj8 = { size: "xs", color: null };
    obj8[1] = str3;
    stateFromStores = tmp36(tmp2(tmp3[25]).NitroWheelIcon, obj8);
    obj7[2] = stateFromStores;
    let tmp34Result = tmp36(showWishlistNUXActionSheet, obj7);
    const tmp37 = showWishlistNUXActionSheet;
  } else if (null != badgeOverride) {
    const items10 = [tmp.badgePill, ];
    const obj9 = { style: null, children: null };
    items10[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
    obj9[0] = items10;
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    const obj10 = { variant: "text-xs/bold", color: null, allowFontScaling: false, style: null, lineClamp: 1, children: null };
    obj10[1] = str2;
    obj10[3] = tmp.badgeOverrideText;
    obj10[5] = badgeOverride;
    obj9[1] = callback(tmp2(tmp3[26]).Text, obj10);
    tmp34Result = tmp34(showWishlistNUXActionSheet, obj9);
    const tmp35 = showWishlistNUXActionSheet;
  } else {
    if (tmp2Result8.isDynamicProduct(selectedProduct)) {
      const obj11 = { icon: null, accessibilityLabel: null, isDark: null };
      obj11[0] = tmp2(tmp3[28]).DiceIcon;
      const intl3 = tmp2(tmp3[14]).intl;
      obj11[1] = intl3.string(tmp2(tmp3[14]).t["+drfVi"]);
      obj11[2] = stateFromStores;
      tmp34Result = callback(tmp2(tmp3[27]).IconBadgePill, obj11);
    } else if (result1) {
      const obj12 = { unpublishedAt: null, style: null };
      obj12[0] = unpublishedAt;
      obj12[1] = tmp.badge;
      tmp34Result = callback(tmp9(tmp3[29]), obj12);
    } else if ("nitroClaim" === collectibleProductState) {
      tmp34Result = callback(tmp2(tmp3[25]).NitroWheelIcon, { color: "mobile-text-heading-primary" });
    } else {
      tmp34Result = null;
      if (tmp2Result9.isOrbsExclusiveProduct(selectedProduct)) {
        const obj13 = { icon: null, accessibilityLabel: null, isDark: null };
        obj13[0] = tmp2(tmp3[30]).OrbsIcon;
        const intl2 = tmp2(tmp3[14]).intl;
        obj13[1] = intl2.string(tmp2(tmp3[14]).t["0TmQRG"]);
        obj13[2] = stateFromStores;
        tmp34Result = callback(tmp2(tmp3[27]).IconBadgePill, obj13);
      }
      tmp2Result9 = tmp2(tmp3[9]);
    }
    tmp2Result8 = tmp2(tmp3[9]);
  }
}
function CollectiblesShopCardV2Inner(product) {
  let cardStyle;
  let cardWidth;
  let disableBundleStaticBackground;
  let hidePrice;
  let hideWishlistButton;
  let muteBundleStaticBackground;
  let preferVCPrice;
  let solidBackground;
  let unpublishedAt;
  product = product.product;
  const require = product;
  let onPress = product.onPress;
  let defaultVariantIndex;
  let analyticsLocations;
  let collectiblesAnalyticsContext;
  let isPurchased;
  let isPartiallyOwnedBundle;
  let c6;
  let result1;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let obj = require(analyticsLocations[8]);
  defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const selectedProduct = require(analyticsLocations[9]).getSelectedProduct(product, defaultVariantIndex);
  analyticsLocations = defaultVariantIndex(analyticsLocations[16])().analyticsLocations;
  const obj2 = require(analyticsLocations[9]);
  const tmp = analyticsLocations;
  const tmp4 = defaultVariantIndex;
  collectiblesAnalyticsContext = require(analyticsLocations[34]).useCollectiblesAnalyticsContext();
  const items = [analyticsLocations, product, defaultVariantIndex, collectiblesAnalyticsContext];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    let obj = defaultVariantIndex(analyticsLocations[35]);
    obj.hideActionSheet();
    obj = { product: closure_0, initialVariantIndex: defaultVariantIndex, analyticsLocations, shopAnalyticsContext: null };
    obj[3] = collectiblesAnalyticsContext;
    const result = product(analyticsLocations[36]).openProductDetailsActionSheet(obj);
  }, items);
  const obj3 = require(analyticsLocations[34]);
  const obj4 = collectiblesAnalyticsContext;
  const isShopCardImpressionMobileEnabled = require(analyticsLocations[37]).useIsShopCardImpressionMobileEnabled("CollectiblesShopCardV2");
  const obj5 = require(analyticsLocations[37]);
  const obj6 = require(analyticsLocations[38]);
  const currentUser = require(analyticsLocations[11]).useCurrentUser();
  const obj7 = require(analyticsLocations[11]);
  const canUseCollectiblesResult = defaultVariantIndex(analyticsLocations[39]).canUseCollectibles(currentUser);
  const obj8 = defaultVariantIndex(analyticsLocations[39]);
  const productPurchaseState = require(analyticsLocations[40]).useProductPurchaseState(selectedProduct);
  isPurchased = productPurchaseState.isPurchased;
  isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  const obj9 = require(analyticsLocations[40]);
  const obj10 = require(analyticsLocations[41]);
  const oneDayFractionalNitroEnabled = require(analyticsLocations[42]).useOneDayFractionalNitroEnabled("product_card");
  const obj11 = require(analyticsLocations[42]);
  let result = require(analyticsLocations[23]).isPremiumCollectiblesProduct(selectedProduct);
  const obj12 = require(analyticsLocations[23]);
  result1 = require(analyticsLocations[23]).isFreeCollectiblesProduct(selectedProduct);
  let tmp14 = result;
  if (result) {
    tmp14 = !canUseCollectiblesResult;
  }
  if (tmp14) {
    tmp14 = !result1;
  }
  c6 = tmp14;
  if (!result1) {
    if (result) {
      result = canUseCollectiblesResult;
    }
    result1 = result;
  }
  const items1 = [result1, isPartiallyOwnedBundle, isPurchased, tmp14];
  const memo = obj4.useMemo(() => {
    if (isPurchased === true) {
      return "purchased";
    } else if (isPartiallyOwnedBundle === true) {
      return "partiallyOwnedBundle";
    } else if (c6 === true) {
      return "nitroUpsell";
    } else if (result1 === true) {
      return "nitroClaim";
    } else {
      return null;
    }
  }, items1);
  if (product.skuId === result1.FRACTIONAL_PREMIUM_1_DAY) {
    if (!oneDayFractionalNitroEnabled) {
      return null;
    }
  }
  obj = { product, onPress: null, collectibleProductState: null, unpublishedAt: null, solidBackground: null, preferVCPrice: null, isDisabled: null, cardWidth: null, cardStyle: null, hideWishlistButton: null, hidePrice: null, isShopCardImpressionEnabled: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null };
  if (onPress == null) {
    onPress = callback;
  }
  obj[1] = onPress;
  obj[2] = memo;
  obj[3] = unpublishedAt;
  obj[4] = solidBackground;
  obj[5] = preferVCPrice;
  obj[6] = obj10.useProductDisableState(selectedProduct.skuId).isDisabled;
  obj[7] = cardWidth;
  obj[8] = cardStyle;
  obj[9] = hideWishlistButton;
  obj[10] = hidePrice;
  obj[11] = isShopCardImpressionMobileEnabled;
  obj[12] = disableBundleStaticBackground;
  obj[13] = muteBundleStaticBackground;
  let tmp17Result = tmp17(CollectiblesShopCardInternalV2, obj);
  if (!isShopCardImpressionMobileEnabled) {
    obj = { onChange: null, resetKey: null, children: null };
    obj[0] = obj6.useTrackProductCardImpression(product.skuId).handleCardVisibilityChange;
    obj[1] = product.skuId;
    obj[2] = tmp17Result;
    tmp17Result = tmp17(tmp4(tmp[43]), obj);
  }
  return tmp17Result;
}
let c3 = importAllResult;
({ PixelRatio, View: c4 } = get_ActivityIndicator);
({ EXTERNAL_PRODUCT_SKU_IDS: error, ShopCtaEnum: metroImportAll } = items);
({ jsx: c9, jsxs: c10 } = jsxProd);
let num = 170;
if (PixelRatio.getFontScale() >= 1.78) {
  num = 302;
}
let obj = { card: null, topRowOverlay: null, badge: null, badgePill: null, badgeOverrideText: null, badgePillDarkMode: null, badgePillLightMode: null, wishlistButton: null };
obj = { position: "relative", height: num, width: 150, display: "flex", borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
obj[0] = obj;
obj[1] = { position: "absolute", top: 6, left: 6, right: 6, zIndex: 2, display: "flex", flexDirection: "row", gap: 4, justifyContent: "space-between", alignItems: "flex-start" };
obj[2] = { flexShrink: 1 };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_4, paddingVertical: 1.5, borderRadius: require("Themes").radii.round, flexShrink: 1 };
obj[3] = createCacheKey;
obj[4] = { textTransform: "uppercase" };
obj[5] = { backgroundColor: require("Themes").colors.WHITE };
let obj2 = { backgroundColor: require("Themes").colors.WHITE };
obj[6] = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
obj[7] = { marginLeft: "auto", flexShrink: 0 };
let closure_11 = createCacheKey.createStyles(obj);
let obj3 = { backgroundColor: require("Themes").colors.BADGE_BACKGROUND_BRAND };
const memoResult = importAllResult.memo(function CollectiblesShopCardV2(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const merged = Object.assign(arg0, undefined);
    const items = [merged.product.skuId];
    const memo = importAllResult.useMemo(() => {
      const obj = { cardId: null };
      obj[0] = callback(table[44]).v4();
      return obj;
    }, items);
    let obj = { newValue: null, children: null };
    obj[0] = memo;
    obj = {};
    const merged1 = Object.assign(merged);
    obj[1] = callback(CollectiblesShopCardV2Inner, obj);
    return callback(require(9265) /* context */.CollectiblesAnalyticsProvider, obj);
  }
});
let result = require("handleThemeChange").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardV2.tsx");

export default memoResult;
export const COLLECTIBLES_SHOP_CARD_HEIGHT = num;
export const COLLECTIBLES_SHOP_CARD_WIDTH = 150;
export const COLLECTIBLES_SHOP_CARD_MAX_WIDTH = 180;
export const COLLECTIBLES_SHOP_CARD_GAP = 16;