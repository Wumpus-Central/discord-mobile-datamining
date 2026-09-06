// === Module 8764: CollectiblesShopCardV2 ===

// Module 8764 (CollectiblesShopCardV2)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import v1 from "v1" /* 1256 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8176 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8767 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;

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
  let obj = require("useDefaultVariantIndex");
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  let obj1 = require("CollectiblesProductUtils");
  selectedProduct = obj1.getSelectedProduct(product, defaultVariantIndex);
  let obj2 = require("useTrackShopCardImpression");
  const trackShopCardImpression = obj2.useTrackShopCardImpression(product, selectedProduct);
  if (null != cardWidth) {
    obj = { width: cardWidth };
  } else {
    obj = { width: 150 };
  }
  let tmp2Result = tmp2(tmp3[11]);
  const currentUser = tmp2Result.useCurrentUser();
  tmp2Result = tmp2(tmp3[12]);
  const result = tmp2Result.isWishlistableCollectiblesProduct(selectedProduct);
  const tmp10 = require("useWishlistNUXActionSheet")();
  shouldShowWishlistNUXActionSheet = tmp10.shouldShowWishlistNUXActionSheet;
  showWishlistNUXActionSheet = tmp10.showWishlistNUXActionSheet;
  let obj7 = shouldShowWishlistNUXActionSheet;
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
    const obj = { key: "WISHLIST_ERROR", content };
    obj.open(obj);
  }, items1);
  trackShopCardClick = require("useTrackShopCardClick").useTrackShopCardClick({ product, analyticsLocations: require("useAnalyticsLocations")().analyticsLocations });
  const tmp2Result1 = require("useTrackShopCardClick");
  obj1 = { userId: currentUser.id, skuId: selectedProduct.skuId, onAddSuccess: callback, onError: callback1 };
  const wishlistButtonState = require("useWishlistButtonState").useWishlistButtonState(obj1);
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
  const memo = obj7.useMemo(() => {
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
  const callback2 = obj7.useCallback((nativeEvent) => {
    if ("toggleWishlist" === nativeEvent.nativeEvent.actionName) {
      handleToggle();
    }
  }, items3);
  const tmp2Result2 = require("useWishlistButtonState");
  const isProfileFramesEarlyAccessPhase = require("useCanPurchaseFrames").useIsProfileFramesEarlyAccessPhase("CollectiblesShopCardV2");
  const tmp2Result3 = require("useCanPurchaseFrames");
  const items4 = [c5];
  let stateFromStores = require("initialize").useStateFromStores(items4, () => product(selectedProduct[21]).isThemeDark(content.theme));
  const tmp2Result4 = require("initialize");
  const items5 = [trackShopCardClick];
  if (unpublishedAt == null) {
    unpublishedAt = tmp2Result5.useStateFromStores(items5, () => {
      const category = CollectiblesCategoryStore.getCategory(product.categorySkuId);
      let unpublishedAt;
      if (category != null) {
        unpublishedAt = category.unpublishedAt;
      }
      return unpublishedAt;
    });
  }
  obj2 = {
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
    children: null
  };
  const items6 = [tmp.card, obj, cardStyle];
  obj2.style = items6;
  tmp2Result5 = require("initialize");
  const badgeOverride = product.badgeOverride;
  const result1 = require("CollectiblesUtils").shouldShowLimitedTimeBadge(unpublishedAt);
  const tmp2Result6 = require("CollectiblesUtils");
  const productType = require("CollectiblesProductUtils").getProductType(product);
  let tmp28 = productType === tmp2(tmp3[24]).CollectiblesItemType.PROFILE_FRAME;
  if (tmp28) {
    tmp28 = isProfileFramesEarlyAccessPhase;
  }
  if (product.hideBadge) {
    if (null != null) {
      const obj3 = { style: tmp.topRowOverlay, children: null };
      const items7 = [null, ];
      if (!tmp17) {
        const obj4 = { style: tmp.wishlistButton, isWishlisted, onPress: handleToggle, busy: isBusy, disabled: tmp19, accessibilityHidden: true, onTrackPress: trackShopCardClick };
        tmp18 = closure_9(tmp2(tmp3[31]).WishlistButtonBase, obj4);
      }
      items7[1] = tmp18;
      obj3.children = items7;
      let tmp25Result = tmp25(showWishlistNUXActionSheet, obj3);
    } else {
      tmp25Result = null;
    }
    const items8 = [tmp25Result, , ];
    const obj5 = { solidBackground, product, isPurchased: null, isDisabled: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null, cardWidth: null };
    if (!tmp16) {
      tmp16 = "partiallyOwnedBundle" === collectibleProductState;
    }
    obj5.isPurchased = tmp16;
    obj5.isDisabled = isDisabled;
    obj5.disableBundleStaticBackground = disableBundleStaticBackground;
    obj5.muteBundleStaticBackground = muteBundleStaticBackground;
    obj5.cardWidth = cardWidth;
    items8[1] = closure_9(tmp9(tmp3[32]), obj5);
    const obj6 = { product, collectibleProductState, preferVCPrice, isDisabled, hidePrice: flag };
    items8[2] = closure_9(tmp9(tmp3[33]), obj6);
    obj2.children = items8;
    return tmp25(tmp2(tmp3[22]).PressableOpacity, obj2);
  } else if (tmp28) {
    const items9 = [tmp.badgePill, ];
    obj7 = { style: null, accessibilityLabel: null, children: null };
    items9[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
    obj7.style = items9;
    const intl4 = tmp2(tmp3[14]).intl;
    obj7.accessibilityLabel = intl4.string(tmp2(tmp3[14]).t["1m6qcO"]);
    let str3 = "white";
    if (stateFromStores) {
      str3 = "black";
    }
    const obj8 = { size: "xs", color: str3 };
    stateFromStores = tmp36(tmp2(tmp3[25]).NitroWheelIcon, obj8);
    obj7.children = stateFromStores;
    let tmp34Result = tmp36(showWishlistNUXActionSheet, obj7);
  } else if (null != badgeOverride) {
    const items10 = [tmp.badgePill, ];
    const obj9 = { style: null, children: null };
    items10[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
    obj9.style = items10;
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    const obj10 = { variant: "text-xs/bold", color: str2, allowFontScaling: false, style: tmp.badgeOverrideText, lineClamp: 1, children: badgeOverride };
    obj9.children = closure_9(tmp2(tmp3[26]).Text, obj10);
    tmp34Result = tmp34(showWishlistNUXActionSheet, obj9);
  } else {
    if (tmp2Result8.isDynamicProduct(selectedProduct)) {
      const obj11 = { icon: tmp2(tmp3[28]).DiceIcon, accessibilityLabel: null, isDark: null };
      const intl3 = tmp2(tmp3[14]).intl;
      obj11.accessibilityLabel = intl3.string(tmp2(tmp3[14]).t["+drfVi"]);
      obj11.isDark = stateFromStores;
      tmp34Result = closure_9(tmp2(tmp3[27]).IconBadgePill, obj11);
    } else if (result1) {
      const obj12 = { unpublishedAt, style: tmp.badge };
      tmp34Result = closure_9(tmp9(tmp3[29]), obj12);
    } else if ("nitroClaim" === collectibleProductState) {
      tmp34Result = closure_9(tmp2(tmp3[25]).NitroWheelIcon, { color: "mobile-text-heading-primary" });
    } else {
      tmp34Result = null;
      if (tmp2Result9.isOrbsExclusiveProduct(selectedProduct)) {
        const obj13 = { icon: tmp2(tmp3[30]).OrbsIcon, accessibilityLabel: null, isDark: null };
        const intl2 = tmp2(tmp3[14]).intl;
        obj13.accessibilityLabel = intl2.string(tmp2(tmp3[14]).t["0TmQRG"]);
        obj13.isDark = stateFromStores;
        tmp34Result = closure_9(tmp2(tmp3[27]).IconBadgePill, obj13);
      }
      tmp2Result9 = tmp2(tmp3[9]);
    }
    tmp2Result8 = tmp2(tmp3[9]);
  }
}
function CollectiblesShopCardV2Inner(product) {
  product = product.product;
  require = product;
  let onPress = product.onPress;
  let analyticsLocations;
  closure_6 = undefined;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let obj = require("useDefaultVariantIndex");
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, defaultVariantIndex);
  analyticsLocations = defaultVariantIndex(analyticsLocations[16])().analyticsLocations;
  const obj2 = require("CollectiblesProductUtils");
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  const items = [analyticsLocations, product, defaultVariantIndex, collectiblesAnalyticsContext];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { product, initialVariantIndex: defaultVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
    const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj);
  }, items);
  const obj3 = require("CollectiblesAnalyticsContext");
  const currentUser = require("useCurrentUser").useCurrentUser();
  const obj4 = require("useCurrentUser");
  const canUseCollectiblesResult = defaultVariantIndex(analyticsLocations[37]).canUseCollectibles(currentUser);
  const obj5 = defaultVariantIndex(analyticsLocations[37]);
  const productPurchaseState = require("useProductPurchaseState").useProductPurchaseState(selectedProduct);
  const isPurchased = productPurchaseState.isPurchased;
  const isPartiallyOwnedBundle = productPurchaseState.isPartiallyOwnedBundle;
  const obj6 = require("useProductPurchaseState");
  const obj7 = require("useProductDisableState");
  const oneDayFractionalNitroEnabled = require("OneDayFractionalNitroExperiment").useOneDayFractionalNitroEnabled("product_card");
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
    obj = { product, onPress: null, collectibleProductState: null, unpublishedAt: null, solidBackground: null, preferVCPrice: null, isDisabled: null, cardWidth: null, cardStyle: null, hideWishlistButton: null, hidePrice: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null };
    if (onPress == null) {
      onPress = callback;
    }
    obj.onPress = onPress;
    obj.collectibleProductState = tmp12;
    obj.unpublishedAt = unpublishedAt;
    obj.solidBackground = solidBackground;
    obj.preferVCPrice = preferVCPrice;
    obj.isDisabled = obj7.useProductDisableState(selectedProduct.skuId).isDisabled;
    obj.cardWidth = cardWidth;
    obj.cardStyle = cardStyle;
    obj.hideWishlistButton = hideWishlistButton;
    obj.hidePrice = hidePrice;
    obj.disableBundleStaticBackground = disableBundleStaticBackground;
    obj.muteBundleStaticBackground = muteBundleStaticBackground;
    let tmp14Result = closure_9(CollectiblesShopCardInternalV2, obj);
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
fn(4560);
let obj = { card: null, topRowOverlay: null, badge: null, badgePill: null, badgeOverrideText: null, badgePillDarkMode: null, badgePillLightMode: null, wishlistButton: null };
let size = { position: "relative", height: num, width: 150, display: "flex", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.card = size;
obj.topRowOverlay = { position: "absolute", top: 6, left: 6, right: 6, zIndex: 2, display: "flex", flexDirection: "row", gap: 4, justifyContent: "space-between", alignItems: "flex-start" };
obj.badge = { flexShrink: 1 };
obj = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 };
obj.badgePill = obj;
obj.badgeOverrideText = { textTransform: "uppercase" };
const createStyles = { backgroundColor: nativeDefault.colors.WHITE };
obj.badgePillDarkMode = createStyles;
obj.badgePillLightMode = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
obj.wishlistButton = { marginLeft: "auto", flexShrink: 0 };
let closure_11 = createStyles.createStyles(obj);
let obj2 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
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
    obj = {};
    const merged1 = Object.assign(merged);
    obj.children = React7(CollectiblesShopCardV2Inner, obj);
    return React7(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }
});
export const COLLECTIBLES_SHOP_CARD_HEIGHT = num;
export const COLLECTIBLES_SHOP_CARD_WIDTH = 150;
export const COLLECTIBLES_SHOP_CARD_MAX_WIDTH = 180;
export const COLLECTIBLES_SHOP_CARD_GAP = 16;