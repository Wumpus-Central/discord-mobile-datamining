// === Module 8948: CollectiblesShopCardV2 ===

// Module 8948 (CollectiblesShopCardV2)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7268 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7269 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8284 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8951 */;
import CollectiblesBadges from "CollectiblesBadges" /* 9014 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9016 */;
import DiceIcon from "DiceIcon" /* 9017 */;
import LimitedTimeBadgeDefault from "LimitedTimeBadge" /* 9019 */;
import OrbsIcon from "OrbsIcon" /* 9020 */;
import WishlistButton from "WishlistButton" /* 9022 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio, View: closure_4 } = get_ActivityIndicator);
const CollectiblesShopConstants = fn(1087);
({ EXTERNAL_PRODUCT_SKU_IDS: closure_7, ShopCtaEnum: closure_8 } = CollectiblesShopConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let num = 170;
if (PixelRatio.getFontScale() >= 1.78) {
  num = 302;
}
let c11 = 150;
const createStyles = fn(5091);
let obj = { card: null, topRowOverlay: null, badge: null, badgePill: null, badgeOverrideText: null, badgePillDarkMode: null, badgePillLightMode: null, wishlistButton: null };
let size = { position: "relative", height: num, width: 150, display: "flex", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.card = size;
obj.topRowOverlay = { position: "absolute", top: 6, left: 6, right: 6, zIndex: 2, display: "flex", flexDirection: "row", gap: 4, justifyContent: "space-between", alignItems: "flex-start" };
obj.badge = { flexShrink: 1 };
obj.badgePill = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 };
obj.badgeOverrideText = { textTransform: "uppercase" };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_4, paddingVertical: 1.5, borderRadius: nativeDefault.radii.round, flexShrink: 1 };
obj.badgePillDarkMode = { backgroundColor: nativeDefault.colors.WHITE };
let obj4 = { backgroundColor: nativeDefault.colors.WHITE };
obj.badgePillLightMode = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
obj.wishlistButton = { marginLeft: "auto", flexShrink: 0 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesShopCardInternalV2(product) {
  const cResult = require("c").c(82);
  product = product.product;
  require = product;
  const onPress = product.onPress;
  ({ unpublishedAt, collectibleProductState } = product);
  ({ solidBackground, preferVCPrice, isDisabled, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let obj = require("c");
  closure_3 = closure_12();
  const tmp4 = closure_12();
  const defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  if (cResult[0] === product) {
    if (cResult[1] === defaultVariantIndex) {
      let tmp6 = cResult[2];
    }
    closure_4 = tmp6;
    const trackShopCardImpression = tmp(collectibleProductState[12]).useTrackShopCardImpression(product, tmp6);
    if (cResult[3] !== cardWidth) {
      if (null != cardWidth) {
        let obj2 = { width: cardWidth };
        let obj3 = obj2;
      } else {
        obj3 = { width };
      }
      cResult[3] = cardWidth;
      cResult[4] = obj3;
    } else {
      const currentUser = tmp(collectibleProductState[13]).useCurrentUser();
      if (cResult[5] !== tmp6) {
        const result = tmp(collectibleProductState[14]).isWishlistableCollectiblesProduct(tmp6);
        cResult[5] = tmp6;
        cResult[6] = result;
        const tmpResult7 = tmp(collectibleProductState[14]);
      }
      const tmp18 = onPress(collectibleProductState[15])();
      const shouldShowWishlistNUXActionSheet = tmp18.shouldShowWishlistNUXActionSheet;
      const showWishlistNUXActionSheet = tmp18.showWishlistNUXActionSheet;
      if (cResult[7] === tmp6) {
        if (cResult[8] === shouldShowWishlistNUXActionSheet) {
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(collectibleProductState[16]).intl;
            const stringResult = intl.string(tmp(collectibleProductState[16]).t.F8FvUy);
            cResult[11] = stringResult;
            let tmp21 = stringResult;
          } else {
            tmp21 = cResult[11];
          }
          content = tmp21;
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                obj = closure_1(closure_2[17]);
                obj1 = { key: "WISHLIST_ERROR", content: closure_7 };
                openResult = obj.open(obj1);
                return;
              }
            }
            cResult[12] = Y;
          } else {
            class Y {
              constructor() {
                obj = closure_1(closure_2[17]);
                obj1 = { key: "WISHLIST_ERROR", content: closure_7 };
                openResult = obj.open(obj1);
                return;
              }
            }
          }
          const analyticsLocations = tmp17(collectibleProductState[18])().analyticsLocations;
          class H {
            constructor() {
              if (closure_5) {
                tmp = closure_6;
                tmp2 = closure_4;
                tmp3 = closure_6(closure_4);
              }
              return;
            }
          }
          let obj4 = { product, analyticsLocations };
          cResult[13] = analyticsLocations;
          cResult[14] = product;
          cResult[15] = obj4;
        }
      }
      class H {
        constructor() {
          if (closure_5) {
            tmp = closure_6;
            tmp2 = closure_4;
            tmp3 = closure_6(closure_4);
          }
          return;
        }
      }
      cResult[7] = tmp6;
      cResult[8] = shouldShowWishlistNUXActionSheet;
      cResult[9] = showWishlistNUXActionSheet;
      cResult[10] = H;
      tmp17 = onPress;
      const tmpResult6 = tmp(collectibleProductState[13]);
    }
    const tmpResult5 = tmp(collectibleProductState[12]);
  }
  let tmpResult = require("useDefaultVariantIndex");
  const selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, defaultVariantIndex);
  cResult[0] = product;
  cResult[1] = defaultVariantIndex;
  cResult[2] = selectedProduct;
  tmp6 = selectedProduct;
  const tmpResult8 = require("CollectiblesProductUtils");
}) : (function CollectiblesShopCardInternalV2(product) {
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
  let selectedProduct;
  let shouldShowWishlistNUXActionSheet;
  let showWishlistNUXActionSheet;
  c5 = undefined;
  let trackShopCardClick;
  let isWishlisted;
  handleToggle = undefined;
  closure_9 = undefined;
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = product);
  const tmp = closure_12();
  const defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  const obj = require("useDefaultVariantIndex");
  selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, defaultVariantIndex);
  const obj2 = require("CollectiblesProductUtils");
  const trackShopCardImpression = require("useTrackShopCardImpression").useTrackShopCardImpression(product, selectedProduct);
  if (null != cardWidth) {
    const obj4 = { width: cardWidth };
    let obj5 = obj4;
  } else {
    obj5 = { width };
  }
  const obj3 = require("useTrackShopCardImpression");
  const currentUser = require("useCurrentUser").useCurrentUser();
  const tmp2Result = require("useCurrentUser");
  const result = require("CollectiblesWishlistUtils").isWishlistableCollectiblesProduct(selectedProduct);
  const tmp11 = require("useWishlistNUXActionSheet")();
  shouldShowWishlistNUXActionSheet = tmp11.shouldShowWishlistNUXActionSheet;
  showWishlistNUXActionSheet = tmp11.showWishlistNUXActionSheet;
  let items = [shouldShowWishlistNUXActionSheet, showWishlistNUXActionSheet, selectedProduct];
  const callback = shouldShowWishlistNUXActionSheet.useCallback(() => {
    if (shouldShowWishlistNUXActionSheet) {
      showWishlistNUXActionSheet(selectedProduct);
    }
  }, items);
  let intl = tmp2(tmp3[16]).intl;
  let stringResult = intl.string(require("util").t.F8FvUy);
  c5 = stringResult;
  const items1 = [stringResult];
  const callback1 = shouldShowWishlistNUXActionSheet.useCallback(() => {
    ToastActionCreatorsDefault.open({ key: "WISHLIST_ERROR", content });
  }, items1);
  const tmp2Result9 = require("CollectiblesWishlistUtils");
  trackShopCardClick = require("useTrackShopCardClick").useTrackShopCardClick({ product, analyticsLocations: require("useAnalyticsLocations")().analyticsLocations });
  const tmp2Result10 = require("useTrackShopCardClick");
  const wishlistButtonState = require("useWishlistButtonState").useWishlistButtonState({ userId: currentUser.id, skuId: selectedProduct.skuId, onAddSuccess: callback, onError: callback1 });
  isWishlisted = wishlistButtonState.isWishlisted;
  ({ isBusy, handleToggle } = wishlistButtonState);
  let tmp17 = "purchased" === collectibleProductState;
  let tmp18 = tmp17;
  if (!tmp17) {
    tmp18 = hideWishlistButton;
  }
  let tmp19 = !tmp18;
  let tmp21 = tmp19;
  if (!tmp18) {
    tmp21 = !tmp20;
  }
  if (tmp21) {
    tmp21 = !isBusy;
  }
  closure_9 = tmp21;
  const items2 = [tmp21, isWishlisted];
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
  let stateFromStores = require("initialize").useStateFromStores(items4, () => product(selectedProduct[21]).isThemeDark(content.theme));
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
    children: null
  };
  const items6 = [tmp.card, obj5, cardStyle];
  obj7.style = items6;
  require("CollectiblesUtils");
  const badgeOverride = product.badgeOverride;
  if (product.hideBadge) {
    if (null != null) {
      const obj9 = { style: tmp.topRowOverlay, children: null };
      const items7 = [null, ];
      if (!tmp18) {
        const obj10 = { style: tmp.wishlistButton, isWishlisted, onPress: handleToggle, busy: isBusy, disabled: tmp20, accessibilityHidden: true, onTrackPress: trackShopCardClick };
        tmp19 = closure_9(tmp2(tmp3[30]).WishlistButtonBase, obj10);
      }
      items7[1] = tmp19;
      obj9.children = items7;
      let tmp25Result = closure_10(showWishlistNUXActionSheet, obj9);
    } else {
      tmp25Result = null;
    }
    const items8 = [tmp25Result, , ];
    const obj11 = { solidBackground, product, isPurchased: null, isDisabled: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null, cardWidth: null };
    if (!tmp17) {
      tmp17 = "partiallyOwnedBundle" === collectibleProductState;
    }
    obj11.isPurchased = tmp17;
    obj11.isDisabled = isDisabled;
    obj11.disableBundleStaticBackground = disableBundleStaticBackground;
    obj11.muteBundleStaticBackground = muteBundleStaticBackground;
    obj11.cardWidth = cardWidth;
    items8[1] = closure_9(require("CollectiblesShopCardAssetTileV2"), obj11);
    const obj12 = { product, collectibleProductState, preferVCPrice, isDisabled, hidePrice: flag };
    items8[2] = closure_9(require("CollectiblesShopCardCardDetailsV2"), obj12);
    obj7.children = items8;
    return closure_10(tmp2(tmp3[33]).PressableOpacity, obj7);
  } else if (null != badgeOverride) {
    const items9 = [tmp.badgePill, ];
    const obj13 = { style: null, children: null };
    items9[1] = stateFromStores ? tmp.badgePillDarkMode : tmp.badgePillLightMode;
    obj13.style = items9;
    let str2 = "text-overlay-light";
    if (stateFromStores) {
      str2 = "text-overlay-dark";
    }
    const obj14 = { variant: "text-xs/bold", color: str2, allowFontScaling: false, style: tmp.badgeOverrideText, lineClamp: 1, children: badgeOverride };
    stateFromStores = tmp33(tmp2(tmp3[24]).Text, obj14);
    obj13.children = stateFromStores;
    let tmp33Result = tmp33(showWishlistNUXActionSheet, obj13);
  } else {
    if (tmp2Result15.isDynamicProduct(selectedProduct)) {
      const obj15 = { icon: tmp2(tmp3[26]).DiceIcon, accessibilityLabel: null, isDark: null };
      const intl3 = tmp2(tmp3[16]).intl;
      obj15.accessibilityLabel = intl3.string(tmp2(tmp3[16]).t["+drfVi"]);
      obj15.isDark = stateFromStores;
      tmp33Result = closure_9(tmp2(tmp3[25]).IconBadgePill, obj15);
    } else if (tmp27) {
      const obj16 = { unpublishedAt, style: tmp.badge };
      tmp33Result = closure_9(require("LimitedTimeBadge"), obj16);
    } else if ("nitroClaim" === collectibleProductState) {
      tmp33Result = closure_9(tmp2(tmp3[28]).NitroWheelIcon, { color: "mobile-text-heading-primary" });
    } else {
      tmp33Result = null;
      if (tmp2Result16.isOrbsExclusiveProduct(selectedProduct)) {
        const obj17 = { icon: tmp2(tmp3[29]).OrbsIcon, accessibilityLabel: null, isDark: null };
        const intl2 = tmp2(tmp3[16]).intl;
        obj17.accessibilityLabel = intl2.string(tmp2(tmp3[16]).t["0TmQRG"]);
        obj17.isDark = stateFromStores;
        tmp33Result = closure_9(tmp2(tmp3[25]).IconBadgePill, obj17);
      }
      tmp2Result16 = tmp2(tmp3[11]);
    }
    tmp2Result15 = tmp2(tmp3[11]);
  }
  tmp2Result13 = require("initialize");
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesShopCardV2Inner(product) {
  const cResult = require("c").c(22);
  product = product.product;
  require = product;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, onPress, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  let obj = require("c");
  const defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  if (cResult[0] === product) {
    if (cResult[1] === defaultVariantIndex) {
      let tmp5 = cResult[2];
    }
    analyticsLocations = defaultVariantIndex(tmp2[18])().analyticsLocations;
    const collectiblesAnalyticsContext = tmp(tmp2[34]).useCollectiblesAnalyticsContext();
    if (cResult[3] === collectiblesAnalyticsContext) {
      if (cResult[4] === analyticsLocations) {
        if (cResult[5] === product) {
          if (cResult[6] === defaultVariantIndex) {
            let tmp9 = cResult[7];
          }
          if (onPress == null) {
            onPress = tmp9;
          }
          const currentUser = tmp(tmp2[13]).useCurrentUser();
          const tmpResult8 = tmp(tmp2[13]);
          const canUseCollectiblesResult = tmp7(tmp2[37]).canUseCollectibles(currentUser);
          tmp(tmp2[38]);
          class D {
            constructor() {
              obj = closure_1(closure_2[35]);
              hideActionSheetResult = obj.hideActionSheet();
              obj2 = closure_0(closure_2[36]);
              obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
              tmp2 = closure_3;
              obj1.shopAnalyticsContext = tmp2;
              result = obj2.openProductDetailsActionSheet(obj1);
              return;
            }
          }
          ({ isPurchased, isPartiallyOwnedBundle } = tmp14);
          const tmp7Result = tmp7(tmp2[37]);
          const isDisabled = tmp(tmp2[39]).useProductDisableState(tmp5.skuId).isDisabled;
          const tmpResult10 = tmp(tmp2[39]);
          const oneDayFractionalNitroEnabled = tmp(tmp2[40]).useOneDayFractionalNitroEnabled("product_card");
          const tmpResult11 = tmp(tmp2[40]);
          let result = tmp(tmp2[23]).isPremiumCollectiblesProduct(tmp5);
          const tmpResult12 = tmp(tmp2[23]);
          let result1 = tmp(tmp2[23]).isFreeCollectiblesProduct(tmp5);
          let tmp18 = "purchased";
          if (isPurchased !== true) {
            tmp18 = "partiallyOwnedBundle";
            if (isPartiallyOwnedBundle !== true) {
              let tmp19 = result;
              if (result) {
                tmp19 = !canUseCollectiblesResult;
              }
              if (tmp19) {
                tmp19 = !result1;
              }
              tmp18 = "nitroUpsell";
              if (tmp19 !== true) {
                if (!result1) {
                  if (result) {
                    result = canUseCollectiblesResult;
                  }
                  result1 = result;
                }
                tmp18 = "nitroClaim";
                if (result1 !== true) {
                  tmp18 = null;
                }
              }
            }
          }
          if (product.skuId === content.FRACTIONAL_PREMIUM_1_DAY) {
            if (!oneDayFractionalNitroEnabled) {
              return null;
            }
          }
          if (cResult[8] === cardStyle) {
            if (cResult[9] === cardWidth) {
              if (cResult[10] === tmp18) {
                if (cResult[11] === disableBundleStaticBackground) {
                  if (cResult[12] === onPress) {
                    if (cResult[13] === hidePrice) {
                      if (cResult[14] === hideWishlistButton) {
                        if (cResult[15] === isDisabled) {
                          if (cResult[16] === muteBundleStaticBackground) {
                            if (cResult[17] === preferVCPrice) {
                              if (cResult[18] === product) {
                                if (cResult[19] === solidBackground) {
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
          let obj3 = { product, onPress, collectibleProductState: tmp18, unpublishedAt, solidBackground, preferVCPrice, isDisabled, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground };
          const tmp25 = closure_9(closure_13, obj3);
          cResult[8] = cardStyle;
          cResult[9] = cardWidth;
          cResult[10] = tmp18;
          cResult[11] = disableBundleStaticBackground;
          cResult[12] = onPress;
          cResult[13] = hidePrice;
          cResult[14] = hideWishlistButton;
          cResult[15] = isDisabled;
          cResult[16] = muteBundleStaticBackground;
          cResult[17] = preferVCPrice;
          cResult[18] = product;
          cResult[19] = solidBackground;
          cResult[20] = unpublishedAt;
          cResult[21] = tmp25;
          const tmpResult13 = tmp(tmp2[23]);
        }
      }
    }
    class D {
      constructor() {
        obj = closure_1(closure_2[35]);
        hideActionSheetResult = obj.hideActionSheet();
        obj2 = closure_0(closure_2[36]);
        obj1 = { product, initialVariantIndex: closure_1, analyticsLocations, shopAnalyticsContext: null };
        tmp2 = closure_3;
        obj1.shopAnalyticsContext = tmp2;
        result = obj2.openProductDetailsActionSheet(obj1);
        return;
      }
    }
    cResult[3] = collectiblesAnalyticsContext;
    cResult[4] = analyticsLocations;
    cResult[5] = product;
    cResult[6] = defaultVariantIndex;
    cResult[7] = D;
    tmp9 = D;
    tmp7 = defaultVariantIndex;
    const tmpResult = tmp(tmp2[34]);
  }
  let obj2 = require("useDefaultVariantIndex");
  const selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, defaultVariantIndex);
  cResult[0] = product;
  cResult[1] = defaultVariantIndex;
  cResult[2] = selectedProduct;
  tmp5 = selectedProduct;
  const tmpResult14 = require("CollectiblesProductUtils");
}) : (function CollectiblesShopCardV2Inner(product) {
  product = product.product;
  const require = product;
  let onPress = product.onPress;
  let analyticsLocations;
  closure_6 = undefined;
  ({ unpublishedAt, solidBackground, preferVCPrice, cardWidth, cardStyle, hideWishlistButton, hidePrice, disableBundleStaticBackground, muteBundleStaticBackground } = product);
  const defaultVariantIndex = require("useDefaultVariantIndex").useDefaultVariantIndex(product);
  let obj = require("useDefaultVariantIndex");
  const selectedProduct = require("CollectiblesProductUtils").getSelectedProduct(product, defaultVariantIndex);
  analyticsLocations = defaultVariantIndex(analyticsLocations[18])().analyticsLocations;
  let obj2 = require("CollectiblesProductUtils");
  const collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  const items = [analyticsLocations, product, defaultVariantIndex, collectiblesAnalyticsContext];
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = { product, initialVariantIndex: defaultVariantIndex, analyticsLocations, shopAnalyticsContext: collectiblesAnalyticsContext };
    const result = openProductDetailsActionSheet.openProductDetailsActionSheet(obj3);
  }, items);
  let obj3 = require("CollectiblesAnalyticsContext");
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
    const obj11 = { product, onPress: null, collectibleProductState: null, unpublishedAt: null, solidBackground: null, preferVCPrice: null, isDisabled: null, cardWidth: null, cardStyle: null, hideWishlistButton: null, hidePrice: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null };
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
    let tmp14Result = closure_9(closure_13, obj11);
  } else {
    tmp14Result = null;
  }
  return tmp14Result;
});
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
      const obj = { cardId: require("v1").v4() };
      return obj;
    }, items);
    let obj = { newValue: memo, children: null };
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj.children = options(closure_14, obj2);
    return options(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, obj);
  }
});
export const COLLECTIBLES_SHOP_CARD_HEIGHT = num;
export const COLLECTIBLES_SHOP_CARD_WIDTH = 150;
export const COLLECTIBLES_SHOP_CARD_MAX_WIDTH = 180;
export const COLLECTIBLES_SHOP_CARD_GAP = 16;